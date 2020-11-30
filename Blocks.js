class Blocks{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution :1,
            friction : 0,
            density : 0.8
        }
        this.r=r;
        this.y=y;
        this.x=x;
        this.body=Bodies.circle(200,700);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }
}