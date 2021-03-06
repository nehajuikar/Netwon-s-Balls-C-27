class   paperClass {
    constructor(x,y,angle)
    option={
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2
}
    Thisbody = Bodies.rectangle(x,y,option);
    Thisimage = loadImage("sprites/paper.png")
}
    display();
    var angle = this.body.angle;
    push();
    translate(this.body.postion.x, this.body.postion.y);
    rotatin(angle);
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height );
    pop();
    