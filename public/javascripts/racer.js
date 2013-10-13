var socket = io.connect('/');

function getLocation()
{
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(sendLocation);
  }
  else{
    x.innerHTML="Geolocation is not supported by this browser.";
  }
}

function showPosition(position)
{
  var x=document.getElementById("demo");
  x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;longitude  
}

function sendLocation(position) {
  //socket.emit('location', getLocation);
  socket.emit('location', position);
}



socket.emit('join');


setInterval(function() {
  getLocation();
}, 1000);
