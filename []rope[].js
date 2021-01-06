class thread{
constructor(bodyA,pointB){
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 1,
length: 400,
anglularStiffness: 1
}

this.rope = Constraint.create(options);
World.add(world,this.rope);
}

display(){
push();
var pos1 = this.rope.bodyA.position;
var pos2 = this.rope.pointB;
fill(0);
strokeWeight(5);
stroke(rgb(229, 34, 4));
line(pos1.x,pos1.y,pos2.x,pos2.y);

ellipseMode(RADIUS);
ellipse(pos1.x,pos1.y,10);
ellipse(pos2.x,pos2.y,10);
pop();
}
}
