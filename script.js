function counter(){
  var date = new Date("sep 25, 2019 07:00:00").getTime();
  var diff = date - new Date().getTime();
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = ("0" + days).slice(-2);
  document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
}
window.setInterval(function(){counter()}, 1000);
