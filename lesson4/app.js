var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//loading of sprite
var mario = new Image();
mario.src = "mario.png";
var monster = new Image();
monster.src = "spaceinvader.png"

//draw the sprite
mario.onload = function(){
	ctx.drawImage(mario, 30, 30, 100, 100);
}

//Insert text
ctx.font = "55px Arial";
ctx.strokeStyle = "violet";
//ctx.fillStyle = "violet";
ctx.strokeText("Classic Games", 210, 80)
