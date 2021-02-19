class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){

        //wooden body of the slingshot
        image(this.sling2,170,20);
        image(this.sling1,200,20);


        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);

            if(pointA.x < 220){

                strokeWeight(7);
                //rubberband
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }
            else{
                strokeWeight(4);
                //rubberband
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }            

            //block for support
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            pop();
        }
       
    }
    
    fly(){
        this.sling.bodyA = null;
    }
}