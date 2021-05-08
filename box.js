class Box {
constructor() {


    var box_options ={
        restitution: 1.5,
        friction :1.5,
        density :1.5

    }

    this.box = Bodies.rectangle(200,100,60,60, box_options);
    World.add(world,this.box);

}

display(){

    rectMode(CENTER)
    fill('purple')
    rect(this.box.position.x, this.box.position.y, 60, 60);
}

}