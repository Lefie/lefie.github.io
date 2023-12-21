


class Cat{
    constructor(x,y,s){
        this.x = x
        this.y = y
        this.s = s
        this.status = "idle"; //default status i,e walking
        this.graphic = catIdle; //default graphic matching status
        this.jumpMode = false
        this.jumpPower = 0
        this.speed = 3
        
        
    }

    //display function
    display(){
        
        image(this.graphic,this.x,this.y,this.s,this.s)
      
    }

    //move
    move(){
        this.graphic = catIdle
        this.sensorLeft = this.x - 2
        this.sensorRight = this.x + TILESIZE + 2
        this.sensorTop = this.y-2;
        this.sensorBottom = this.y+TILESIZE+2;
        this.middleX = this.x+TILESIZE/2;
        this.middleY = this.y+TILESIZE/2;
        
    
        //console.log(this.x,this.y)

        if(keyIsDown(UP_ARROW)){
            let id = getTile(this.middleX + 15, this.sensorTop + 15,level1)
            let id2 = getTile(this.middleX + 15,this.sensorTop + 15,level2)
            //fill("pink")
            //ellipse(this.middleX+15,this.sensorTop + 15,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isStudyRoom(id2) === false && isStudyRoomDoor(id2) === false && isMarketDoor(id2) === false ){
                this.graphic = catRun
                this.y -= this.speed
            }

            
        }

        if(keyIsDown(DOWN_ARROW)){
            let id = getTile(this.middleX + 15, this.sensorBottom + 35,level1)
            let id2 = getTile(this.middleX + 15, this.sensorBottom + 10,level2)
            // fill("pink")
            // ellipse(this.middleX + 15,this.sensorBottom + 35,5,5)
            console.log("key is down",id)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isStudyRoom(id2) === false){
                this.graphic = catRun
                this.y += this.speed
            }
        
        }

        if(keyIsDown(LEFT_ARROW)){
            let id = getTile(this.sensorLeft, this.middleY + 20,level1)
            let id2 = getTile(this.sensorLeft, this.middleY + 20, level2)
            // fill("pink")
            // ellipse(this.sensorLeft,this.middleY + 20,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isStudyRoom(id2) === false ){
                this.graphic = catRun
                this.x -= this.speed
            }
              
            
        }

        if(keyIsDown(RIGHT_ARROW)){
            let id = getTile(this.sensorRight+30, this.middleY+20,level1)
            let id2 = getTile(this.sensorRight+30,this.middleY + 20, level2 )
            // fill("pink")
            // ellipse(this.sensorRight+30,this.middleY+20,5,5)
            if(isEdge(id) === false && isMarket(id2) === false 
            && isStudyRoom(id2) === false){
                this.graphic = catRun
                this.x += this.speed
            }
        }

    
    }

    move2(){
        this.graphic = catIdle
        this.sensorLeft = this.x - 2
        this.sensorRight = this.x + TILESIZE + 2
        this.sensorTop = this.y-2;
        this.sensorBottom = this.y+TILESIZE+2;
        this.middleX = this.x+TILESIZE/2;
        this.middleY = this.y+TILESIZE/2;


        if(keyIsDown(UP_ARROW)){
            // fill("pink")
            let id = getTile(this.middleX + 15, this.sensorTop + 15,level_study)
            // ellipse(this.middleX+15,this.sensorTop + 15,5,5)
            if(isWalkable(id)){
                this.graphic = catRun
                this.y -= this.speed
            }
                
            
        }

        if(keyIsDown(DOWN_ARROW)){
            // fill("pink")
            let id = getTile(this.middleX + 15, this.sensorBottom + 35,level_study)
            // ellipse(this.middleX + 15,this.sensorBottom + 35,5,5)
            if(isWalkable(id)){
                this.graphic = catRun
                this.y += this.speed
            }
                
        }

        if(keyIsDown(LEFT_ARROW)){
            //fill("pink")
            let id = getTile(this.sensorLeft, this.middleY + 20, level_study)
            //ellipse(this.sensorLeft,this.middleY + 20,5,5)
          
            if(!isWater(id)){
                this.graphic = catRun
                this.x -= this.speed
            }
            
           
        }
              
        
        if(keyIsDown(RIGHT_ARROW)){
            //fill("pink")
            let id = getTile(this.sensorRight + 30, this.middleY + 20, level_study)
            //ellipse(this.sensorRight+30,this.middleY+20,5,5)

        
            if(!isWater(id)){
                this.graphic = catRun
                this.x += this.speed
            }
            
            if (this.x > width-30){
                gameState = 0
                cat2.x = 10
               
                
            }
        }

    }

    // detect whether or not cat is in the study area. if so, a user should be prompted to enter study session 
    isInStudyArea(){
        this.sensorLeft = this.x - 2
        this.sensorRight = this.x + TILESIZE + 2
        this.sensorTop = this.y-2;
        this.sensorBottom = this.y+TILESIZE+2;
        this.middleX = this.x+TILESIZE/2;
        this.middleY = this.y+TILESIZE/2;


        let idTop = getTile(this.middleX+15,this.sensorTop + 15,level_study);
        let idBottom = getTile(this.middleX + 15,this.sensorBottom + 35,level_study);
        let idLeft = getTile(this.sensorLeft,this.middleY + 20,level_study);
        let idRight = getTile(this.sensorRight+30,this.middleY+20,level_study);

    
        // ellipse(this.middleX+15,this.sensorTop + 15,5,5)

        // ellipse(this.middleX + 15,this.sensorBottom + 35,5,5)

        // ellipse(this.sensorLeft,this.middleY + 20,5,5)

        // ellipse(this.sensorRight+30,this.middleY+20,5,5)

        if(idTop == 1939 && idBottom == 1939 && idLeft == 1939 && idRight == 1939 ){
            return true
        }
        return false;

        
    }




}

