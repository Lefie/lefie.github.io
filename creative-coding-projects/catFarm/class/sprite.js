

class Sprite{
    constructor(img){
        this.x = random(50,100)
        this.y = random(50,100)
        this.desiredX = random(300,400)
        this.desiredY = random(100,500)
        this.img = img //img is an animal name
        this.speed = 1
      
        this.sprites = []
        imageMode(CENTER)
        let w = this.img.width / 4 
        let h = this.img.height / 5


        for(let row = 0; row < 5; row++){ //5 rows
            this.sprites[row] = []
            for(let col = 0; col < 4; col++){ //4 columns
                this.sprites[row][col] = this.img.get(col * w, row * h,w, h)
            }
        }
        
        this.count = 0;
        this.num = 0
        this.choice = random([1,2,3,4])
        this.timer = random(100,300)

    }

    display(){
        return this.sprites
    }

   

    displayMoveRight(){
        image(this.sprites[2][this.count],this.x, this.y, 25, 25)
        if(frameCount % 10 == 0){
            this.count += 1
        }
        if(this.count == 3){
            this.count = 0
        }

        if(this.x < 770){
            this.x += 1
        }

      
    }

    displayMoveLeft(){
        image(this.sprites[3][this.count],this.x, this.y, 25, 25)
        if(frameCount % 10 == 0){
            this.count += 1
        }
        if(this.count == 3){
            this.count = 0
        }
        if(this.x > 0){
            this.x -= 1
        }
        
       
    }

    displayMoveForward(){
        image(this.sprites[0][this.count],this.x, this.y, 25, 25)
        if(frameCount % 10 == 0){
            this.count += 1
        }
        if(this.count == 3){
            this.count = 0
        }

        if(this.y < height - 50){
            this.y += 1
        }
   
       
    }

    displayMoveBackward(){
        image(this.sprites[1][this.count],this.x, this.y, 25, 25)
        if(frameCount % 10 == 0){
            this.count += 1
        }
        if(this.count == 3){
            this.count = 0
        }
       
        if(this.y > 0){
            this.y -= 1
        }

    }

    moveRandomly(){

        //this.displayMoveBackward()
        //this.displayMoveForward()
        //this.displayMoveLeft()
        //this.displayMoveRight()
        // text("choice: "+this.choice,200,30)
        // text("num: " + this.num, 200,50)
        // text("timer: " + this.timer, 200,70)

        if(this.choice === 1){
            this.displayMoveForward()
        }
        if(this.choice === 2){
            this.displayMoveBackward()
        }
        if(this.choice === 3){
            this.displayMoveLeft()
        }
        if(this.choice === 4){
            this.displayMoveRight()
        }
        this.num += 1
        if(this.num >= this.timer){
            this.choice = random([1,2,3,4])
            this.num = 0
            this.timer = random(50,150)
        }
    


    }



}