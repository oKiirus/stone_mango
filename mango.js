class Mango{

    constructor(x, y){

        var options = {
           isStatic : 1,
            restitution : 0.3,
            friction : 1,
            density : 1
        }

        this.img = loadImage("mango.png")
        this.body = Bodies.circle(x,y,100,options)
        this.r=100

        World.add(world,this.body)
    } 

        display(){
            imageMode(CENTER)
            image(this.img, this.body.position.x, this.body.position.y, this.r, this.r)
        }


}