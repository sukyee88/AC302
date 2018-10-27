var ctx = document.getElementById('myCanvas').getContext('2d');

//Setting the width and height for canvas
var WIDTH = 500;
var HEIGHT = 500;

//x and y coordinates of circle
var x,y;

//rate of movement for circle
var dx,dy;

//Initialisation function
function init(){
	x = 250;
	y = 250;
	dx = -5;
	dy = -5;
	setInterval(updateFrame, 20);
}

//Function to create a circle
function drawCircle(x,y){
	ctx.beginPath();
	ctx.arc(x,y,130,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "blue";
	ctx.fill();
}
function clear(){
	ctx.clearRect(0,0, WIDTH, HEIGHT);
}
function updateFrame(){
	clear();
	drawCircle(x,y);

	if (x + dx < 0 || x + dx > WIDTH){
		dx = -dx;
	}


	x = x + dx;
	y += dy;
}
