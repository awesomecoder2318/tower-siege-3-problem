class SlingShot{
    constructor(bodyA,pointB){
        var options ={
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.04

        }
        this.pointB=pointB
    this.Slingshot = Constraint.create(options)
    

World.add(world, this.Slingshot)

    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    attach(body){
        this.Slingshot.bodyA=body
    }
    display(){
        
        if(this.Slingshot.bodyA){
            var pointa = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8)
            if(pointa.x<220){
                line(pointa.x-20 ,pointa.y, pointB.x-10, pointB.y )
                line(pointa.x-20 ,pointa.y, pointB.x+30, pointB.y )
            }
            else{
                line(pointa.x+25 ,pointa.y, pointB.x-10, pointB.y )
                line(pointa.x+25 ,pointa.y, pointB.x+30, pointB.y )
            }
            
        }
       
        
    }

}