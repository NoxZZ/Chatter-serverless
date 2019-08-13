$(function () {
    //buttons
    var send_message = $('#send_message')
    var message = $('#message')
    var userName =$('#user_name')
    var userNameVal = $('#user_name_val')
    var genChatRoom = $('#generate_chat_room')
    var socket = io()

    send_message.click(function(e){
      e.preventDefault(); 
        socket.emit('new_message',{message : message.val()});
        message.val();
    })
    //change username event
    userName.click(function() {
      console.log(userNameVal.val());
      socket.emit('change_username',{username : userNameVal.val()})
    })
    //new message event
    socket.on('new_message', function(data){
      console.log()
        $('#messages').append(('<li>') + data.username + (' : ')+ data.message);
      });
      socket.on('disconnected_user', (data) => {
        console.log(data.username ,'disconn');
        $('#disconnectedUser').append((' <p> ') + data.username + '  disconnected ');
      });
  });