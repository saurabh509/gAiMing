var elem = document.querySelector('html');
var status = 0;
var xt=32, yt=140, SCORE=0;
var DELAY=2000;

document.getElementById('live-score').innerHTML=sessionStorage.getItem("name");

$(document).ready(function(){
    $('#myModal').modal({backdrop: 'static', keyboard: false});
    $("#myModal").modal('show');

    console.log("hack jhala");
    document.addEventListener('fullscreenchange', (event) => {

      if (document.fullscreenElement && status == 0) {
        // var check_timer = document.getElementById("timer"),
        // style = window.getComputedStyle(check_timer),
        // display = style.getPropertyValue('display');
        // if((check_timer.style.display).localeCompare('block') == 0){
          status = 1;
          var i = 1;                  //  set your counter to 1

          //when submit is pressed
          // while(!(document.getElementById('beginTimerButton').submit==true)){
          //
          // }
          document.getElementById('beginTimerButton').addEventListener('click',myLoop);

          var level = sessionStorage.getItem("level");
          if(level==1){
            DELAY=2000;
          }
          else if(level==2){
            DELAY=1500;
          }
          else if(level==3){
            DELAY=1000;
          }
          else if(level==4){
            DELAY=500;
          }

          function myLoop() {         //  create a loop function
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
              draw();
              console.log('hello');   //  your code here
              i++;                    //  increment the counter
              var timeRemaining = document.getElementById("timer").innerHTML;
              console.log(timeRemaining);
              if (timeRemaining!="TIME UP!!") {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another
              }
              else{
                gameOver();
                return;
              }                    //  ..  setTimeout()
            }, DELAY)
          }

            //myLoop();
         // }

      } else {
        gameOver();
      }
    });

    let bullet = document.getElementById('canvas');
    bullet.addEventListener('mousedown', logMouseButton);

    function logMouseButton(e) {
      if (typeof e === 'object') {
        switch (e.button) {
          case 0:
            console.log(e.clientX, e.clientY);
            checkShot(e.clientX, e.clientY);
            break;
          default:
            // log.textContent = `Unknown button code: ${e.button}`;
            console.log('Chukicha button press kela');
        }
      }
    }

});

function checkShot(x, y){
  var dist = checkDistance(x, y, xt, yt);
  if(dist <= 10){
    SCORE+=20;
  } else if(dist > 10 && dist <= 20){
    SCORE+=10;
  } else if(dist <= 30 && dist > 20){
    SCORE+=5;
  }
  var x = document.getElementById('score').innerHTML = "SCORE: " + SCORE;
  //draw();
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  console.log(SCORE);
}

function checkDistance(x1, y1, x2, y2){
  var dist = Math.sqrt((y2-y1)*(y2-y1) + (x2-x1)*(x2-x1));
  return dist;
}

function gameOver(){
  status = 2;
  var x = document.getElementById("game-over");
  var y = document.getElementById("play-game");
  x.style.display = "block";
  y.style.display = "none";
  console.log('Leaving full-screen mode.');
  document.getElementById('score_f').innerHTML = SCORE;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function draw() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  xt = -100;
  while(!(xt >= 32 && xt <= 1503)){
    xt = Math.random()*2000;
  }

  yt = -100;
  while(!(yt >= 140 && yt <= 831)){
    yt = Math.random()*2000;
  }

  ctx.beginPath();
  ctx.arc(xt, yt, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(xt, yt, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(xt, yt, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}


function reqFullScreen(){
  k = 1;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

function playAgain(){
  // reqFullScreen();
  // var x = document.getElementById("game-over");
  // var y = document.getElementById("play-game");
  // x.style.display = "none";
  // y.style.display = "block";
}
