const canvas = document.querySelector(".lienzo");
const ctx = canvas.getContext("2d");

//Movimiento
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.fill();

  //Cuadrado
  ctx.fillStyle = "cyan";
  //(x1,y1,x2,y2)
  ctx.fillRect(1, 40, 4, 40);
  ctx.fillStyle = "rgba(0,0,255,6 )";
  ctx.stroke();
  ctx.fillStyle = "ca";
  ctx.fillRect(295, 40, 4, 40);

  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 20);

//CIELO
const grd = ctx.createLinearGradient(0, 0, 0, 188);
/* grd.addColorStop(0, "blue"); */
grd.addColorStop(0, "rgba(0,150,195,42");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 850, 500);

ctx.fillRect(295, 40, 4, 40);

ctx.arc(200, 50, 8, 0, 2 * Math.PI);

ctx.stroke();
