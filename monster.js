class Monster{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1,
            frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image=loadImage("monster1.png")
        World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
       push()
       translate(pos.x,pos.y)
       rotate(this.body.angle)
       imageMode(CENTER)
       fill("green")
       image(this.image,0,0,this.radius*2,this.radius*2)
       pop()
    }
}