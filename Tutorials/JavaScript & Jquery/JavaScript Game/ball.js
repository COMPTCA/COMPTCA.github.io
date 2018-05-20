class Ball{
	constructor(x, y, speed, mass, radius){
		this.pos = createVector(x, y);
		this.vel = p5.Vector.random2D().mult(speed);
		this.acc = createVector();
		this.mass = mass;
		this.r = radius;
		this.color = [random(255), random(255), random(255)];
	}
	
	draw(){
		fill(this.color);
		noStroke();
		ellipseMode(RADIUS);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}
	
	update(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}
	
	bounce(){
		if (this.pos.x - this.r < 0){
			this.pos.x = this.r;
			this.vel.x *= -BOUNCE;
		}
		if (this.pos.x + this.r > width){
			this.pos.x = width - this.r;
			this.vel.x *= -BOUNCE;
		}
		if (this.pos.y - this.r < 0){
			this.pos.y = this.r;
			this.vel.y *= -BOUNCE;
		}
		if (this.pos.y + this.r > height){
			this.pos.y = height - this.r;
			this.vel.y *= -BOUNCE;
		}
	}
	
	gravity(){
		this.acc.add(0, GRAV);
	}
	
	wind(){
		let f = createVector(WIND_X, WIND_Y);
		f.div(this.mass);
		this.acc.add(f);
	}
	
	debug(){
		let v = this.vel.copy();
		v.mult(10);
		v.add(this.pos);
		stroke(this.color);
		line(this.pos.x, this.pos.y, v.x, v.y);
	}
	
	act(){
		if (mouseIsPressed) this.wind();
		if(keyIsDown(68)) this.debug();
		this.draw();
		this.update();
		this.bounce();
		this.gravity();
	}
}