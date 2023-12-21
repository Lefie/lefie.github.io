



class Price{
    constructor(x,y,type){
        this.x = x
        this.y = y
        this.type = type
        if(this.type === "bunny" || this.type === "chicken"){
            this.points = 10
        }
        if(this.type === "cow" || this.type === "goat"){
            this.points = 30
        }
        if(this.type === "pig" || this.type === "sheep"){
            this.points = 50
        }
    }

    display(){
        //text(this.type,150,50)
        rectMode(CORNER)
        fill("white")
        rect(this.x,this.y,150,100) // 150,150
        fill("black")
        textSize(15)
        text(this.points + " points", this.x + 40,this.y + 50) // 190 200
        fill("green")
        rect(this.x + 10,this.y + 75,40,20) // 160,225
        fill("white")
        textSize(15)
        text("buy", this.x + 20,this.y + 90) //170 240

        fill("red")
        rect(this.x + 10 ,this.y + 10 ,50,20) //220 225
        fill("white")
        textSize(15)
        text("X", this.x + 20,this.y + 25 ) // 225 240

    }

    btn(){
        if(dist(mouseX,mouseY, this.x + 10, this.y + 75) < 30){
            fill("orange")
            textSize(15)
            rect(this.x + 10,this.y + 75,40,20) // 160,225
            fill("white")
            text("buy", this.x + 20,this.y + 90) //170 240
        }

        if(dist(mouseX,mouseY, this.x + 10, this.y + 75) < 30 && mouseIsPressed){
            fill("blue")
            rect(this.x + 10,this.y + 75,40,20) // 160,225
            textSize(15)
            fill("white")
            text("buy", this.x + 20,this.y + 90) //170 240

            if(focusPoints <= this.points){
                text("Insufficient fund", this.x,this.y + 120)
            }
            
            
        }

        if(dist(mouseX,mouseY, this.x +10, this.y + 15) < 25){
            fill("orange")
            rect(this.x + 10 ,this.y + 10 ,50,20) //220 225
            fill("white")
            textSize(15)
            text("X", this.x + 20,this.y + 25 ) // 225 240
        }

        if(dist(mouseX,mouseY, this.x +20, this.y + 25) < 30 && mouseIsPressed){
            fill("blue")
            rect(this.x + 10 ,this.y + 10 ,50,20) //220 225
            fill("white")
            text("X", this.x + 20,this.y + 25 ) // 225 240
        }

    }
}


