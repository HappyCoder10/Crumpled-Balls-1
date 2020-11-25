class Paper {
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.r=r;
        this.paper = Bodies.circle(x,y,r,options);
        World.add(world,this.paper);
    }
    display () {
        var pos =this.paper.position;
        var angle = this.paper.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
    }
};