class roof{
constructor(){
var options = {
isStatic: true
}
this.body = Bodies.rectangle(400,100,800,10,options);
this.w = 800;
this.h = 10;

World.add(world,this.body);
}

display(){
var p = this.body.position;
push();
translate(p.x,p.y);
strokeWeight(3);
fill(0)
stroke(255);
rect(0,0,this.w,this.h);
pop();
}

}