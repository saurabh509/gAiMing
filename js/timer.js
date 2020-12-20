function myTimer(){
  var tog = document.getElementById("timer");
  var beg = document.getElementById("begin");

  tog.style.display = "block";
  beg.style.display = "none";

  var countDownDate = new Date().getTime()+10005;

  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = "Time-" + minutes + ": " + seconds;

    //console.log(minutes+": "+seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "TIME UP!!";
    }
  }, 1000);
}
