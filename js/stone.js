class stone{



constructor(x,y,radius){


    var    options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
     }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius = radius*2;
    
    this.image = loadImage("images/stone.png");
   // this.image.scale =70.0;

    
    World.add(world,this.body);
}




display(){



    var pos = this.body.position;
    
    push();
    translate(pos.x,pos.y);
    
  imageMode(RADIUS);
   fill("pink");
    
 image(this.image,0,0,this.radius,this.radius);
    pop();











}



}