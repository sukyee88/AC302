var game = new Phaser.Game(800, 600, Phaser.Auto, '', {preload:preload, create:create, update:update})

var score = 0;
var lives = 3;

function preload(){
game.load.image('sky', 'assets/sky.png' );
game.load.image('ground', 'assets/platform.png');
game.load.image('star', 'assets/star.png');
game.load.spritesheet('player', 'assets/dude.png', 32, 48);
game.load.spritesheet('enemy', 'assets/baddie.png', 32, 32);
}

function create(){
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0, 'sky');
platforms = game.add.physicsGroup();
platforms.enableBody=true;
//create ground
var ground  = platforms.create(0, 550, 'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

//create platform
var ledge = platforms.create(0, 250, 'ground');
ground.body.immovable = true;

var ledge2 = platforms.create(300, 400, 'ground');
ground.body.immovable = true;

//set text style
var style = {font: "bold 32px Arial", fill:"#fff"};

scorelabel = game.add.text(x,y, "Score:", style);
scorenumber = game.add.text(x,y, score, style);

lifelabel = game.add.text(10,5, "Lives:", style);
lifenumber = game.add.text(x,y, lives, style);

//Player settings
player = game.add.sprite(32,400, 'player');

player.animations.add('left', [0,1,2,3],10,true);
player.animations.add('right', [5,6,7,8],10,true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;

//Enemy settings
enemy = game.add.sprite(760,20, 'enemy');

enemy.animations.add('left', [0,1],10,true);
enemy.animations.add('right', [2,3],10,true);
game.physics.arcade.enable(enemy);
enemy.body.bounce.y = 0.2;
enemy.body.gravity.y = 500;
enemy.body.collideWorldBounds = true;

//Create the stars
stars = game.add.physicsGroup();
stars.enableBody = true;

for (var i = 0; i < 12; i++) {
	var star = stars.create(i * 70, 0 , 'star');
	star.body.gravity.y = 200;
	star.body.bounce.y = 0.7 + Math.random() *0.2;

}
cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy, platforms);
	game.physics.arcade.collide(stars, platforms);

	player.body.velocity.x = 0;

	if (cursors.left.isDown){
		player.body.velocity.x = -100;
		player.animations.play('left');
	}else if (cursors.right.isDown){
	player.body.velocity.x = 100;
		player.animations.play('right');
	}else{
		player.animations.stop();
		player.frame = 4;
	}

	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}


}
