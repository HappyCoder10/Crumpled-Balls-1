class Dustbin {
    constructor(x, y, w, h) {
		var options={
			isStatic:true
		}
		this.width=w;
		this.height=h;
		this.body = Bodies.rectangle(x, y, w, h,options);
		World.add(engine.world, this.body);
	}
	display(){
		rectMode(CENTER);
		fill("white");
		rect(this.body.position.x,this.body.position.y,this.width,this.height);
		
	}
}