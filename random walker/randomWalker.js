class Walker {
    constructor(){
        this.x = width/2;
        this.y = height/2;
    }

    show(){
        fill(0, 25);
        stroke(0, 50);
        //{!1} Draw a random circle each time through draw().
        circle(this.x,this.y, 16);
    }

    step(){
        let choice = floor(random(4));
        if(choice === 0){
            this.x += 16;
        } else if(choice === 1){
            this.x -= 16;
        } else if(choice === 2){
            this.y += 16;
        } else {
            this.y -= 16;
        }
    }

}

let walker;

 function setup(){
    
    createCanvas(1080, 1080);

    walker = new Walker();
    background(255);
 }

 function draw (){
    walker.show()
    walker.step()
 }