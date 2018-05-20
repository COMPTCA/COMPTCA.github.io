const BOUNCE = 0.92;
const GRAV = 0.4;
const WIND_X = 0.2;
const WIND_Y = 0;

var balls;
var num = 10;

function initEnts(){
	balls = [];
	for (let i = 0; i < num; i++){
		let mass = random(1, 4);
		let radius = random(10, 30);
		let x = random(radius, width - radius);
		let y = random(radius, height - radius);
		balls.push(new Ball(x, y, random(4), mass, radius));
	}
}

function setup(){
	createCanvas(windowWidth, windowHeight);

	initEnts();
}

function draw(){
	background(0);

	for (let i = 0; i < balls.length; i++){
		let b = balls[i];
		b.act();
	}
}

function keyPressed(){
	if (keyCode === 82){
		initEnts();
	}
	if (keyCode === 86){
		for (let i = 0; i < balls.length; i++){
			balls[i].vel.mult(0);
		}
	}
}
