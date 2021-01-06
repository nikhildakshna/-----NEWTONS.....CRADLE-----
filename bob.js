class bob{
    constructor(x){
    var options = {
    'restitution': 1,
    'friction': 0,
    'frictionAir': 0.0,
    slop: 1,
    inertia: Infinity
    }

this.body = Bodies.circle(x,600,50,options);
this.r = 50;
this.color = 0;

World.add(world,this.body);

    }

display(){
var p = this.body.position;
push();
translate(p.x,p.y);
fill(this.color);
strokeWeight(7.5);
stroke("purple");
ellipseMode(RADIUS);
ellipse(0,0,this.r);
pop();
}

}