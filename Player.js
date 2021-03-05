class Player{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed < 3){
         super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
    }
}