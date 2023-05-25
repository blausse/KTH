
// 클라이언트에서 request_message 프로토콜로 id='m' 의 input 값을 보낸다.
$(function(){
    
    const socket = io();
// 클라이언트에서 reuqest_message 프로토콜로 id='m' 의 input 값을 보낸다.
$('#msg-send').click(() => {
  socket.emit('request_message', $('#m').val());
  $('#m').val('');
  return false; 
});

$('#select-room-button').click(() => {
  let roomName = $('#select-room').val();
  if(roomName === "none") 
    return alert("방을 선택해주세요.");
  socket.emit('req_join_room', roomName)
});

$('#room-msg-send').click(() => {
  // socket.emit('req_room_message', "<%=u_id%>: " + $('#room-message').val());
  socket.emit('req_room_message', $('#room-message').val());
  $('#room-message').val('');
  return false;
});

socket.on('response_message', (res) => {
  $('#messages').prepend($('<li>').text(res));
});

socket.on('noti_join_room', (res) => {
  $('#room-messages').prepend($("<li class='notice-msg'>").text(res));
});

socket.on('noti_room_message', (res) => {
  $('#room-messages').prepend($('<li>').text(res));
    if($('#room-messages li').eq(0).text().indexOf('<%=u_id%>') !== -1 ){
        $('#room-messages li').eq(0).addClass('my-msg')
    }else{
        $('#room-messages li').eq(0).addClass('your-msg');
    }
});
})
