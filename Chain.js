class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:0.04
        }
        this.chain=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.chain)
    }
    display(){
     var posA=this.chain.bodyA.position
     var posB=this.pointB
     strokeWeight(0)
     line(posB.x,posB.y,posA.x,posA.y)
     
    }
}