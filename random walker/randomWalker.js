class Walker {
    constructor(){
        this.x = width/2;
        this.y = height/2;
    }

    show(){
        stroke(0);
        point(this.x, this.y);
    }

    step(){
        let choice = floor(random(4));
        if(choice === 0){
            this.x++;
        } else if(choice === 1){
            this.x--;
        } else if(choice === 2){
            this.y++;
        } else {
            this.y--;
        }
    }

}

let walker;

 function setup(){
    
    createCanvas(230, 230);

    walker = new Walker();
    background(255);
 }

 function draw (){
    walker.show()
    walker.step()
 }