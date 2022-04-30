/* Figuras geometricas en canvas html 5 */

console.log("ctx", ctx);
/* Visualizar todas las propiedades del canvas y lo que nos permite hacer , en cuanto a suspropiedades y metodos */

/*===========================================
CUADRADOS
===========================================*/

//Relleno
ctx.fillStyle = "cyan";
//ctx.fillRect(x1,y1,x2,y2)
ctx.fillRect(1, 5, 7, 30);

//Contorno
ctx.lineWidth = 5;
ctx.strokeStyle = " rgba(255,0,255,1)";
ctx.rect(0, 0, 300, 150);
ctx.stroke();

/*===========================================
CIRCULOS
===========================================*/

ctx.beginPath();
//ctx.arc(x1,y1,r, startAngle, endAngle);
ctx.arc(30, 50, 10, 0, 2 * Math.PI);

//RELLENO DE CIRCULO
ctx.fillStyle = "";
ctx.fill();

//CONTORNO CIRCULO
ctx.lineWidth = 2;
ctx.strokeStyle = "purple";
ctx.stroke();

/*===========================================
LINEAS
===========================================*/
ctx.beginPath();

//ctx.movetO(X1,Y1);
ctx.moveTo(0, 70);
//ctx.lineTo(x2,y2);
ctx.lineTo(70, 70);
ctx.lineTo(70, 100);
//Contorno linea
ctx.lineWidth = 2;
ctx.stroke();

//Relleno de linea
//RELLENO DE CIRCULO
ctx.fillStyle = "";
ctx.fill();
