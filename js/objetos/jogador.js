export class Player {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.speed = 18;
        //this.posIniSprite = 0;
        this.linhaSprite = 0;
        this.colunaSprite = 0;
        //this.numeroSprite = 0;
        this.quantSprite = 4;
        this.tempoUltimoSprite = 0;
        this.tempoTrocaSprite = 150;
    }
  
    draw(ctx, cameraX, cameraY) {
        const spriteWidth = this.image.width / this.quantSprite;
        const spriteHeight = this.image.height / this.quantSprite;
        ctx.drawImage(
            this.image,
            spriteWidth * this.colunaSprite,
            spriteHeight * this.linhaSprite,
            spriteWidth,
            spriteHeight, 
            this.x - spriteWidth / 2 + cameraX, 
            this.y - spriteHeight / 2 + cameraY, 
            spriteWidth, 
            spriteHeight
        );
    }    
    
    
    moveDown() {         
        this.y += this.speed;
        if (this.linhaSprite == 0) {
            if (Date.now() - this.tempoUltimoSprite > this.tempoTrocaSprite) {
                this.tempoUltimoSprite = Date.now();
                this.colunaSprite ++;
                if(this.colunaSprite > 3) {
                    this.colunaSprite = 0;
            }
        } 
        } else {
            this.linhaSprite = 0;
            this.colunaSprite = 0;
        }       
    }

    moveUp() {
        this.y -= this.speed;
        if (this.linhaSprite == 1) {
            if (Date.now() - this.tempoUltimoSprite > this.tempoTrocaSprite) {
                this.tempoUltimoSprite = Date.now();
                this.colunaSprite ++;
                if(this.colunaSprite > 3) {
                    this.colunaSprite = 0;
            }
        } 
        } else {
            this.linhaSprite = 1;   
            this.colunaSprite = 0;         
        }        
      }
    
  
    moveLeft() {
        this.x -= this.speed;
        if (this.linhaSprite == 2) {
            if (Date.now() - this.tempoUltimoSprite > this.tempoTrocaSprite) {
                this.tempoUltimoSprite = Date.now();
                this.colunaSprite ++;
                if(this.colunaSprite > 3) {
                    this.colunaSprite = 0;
            }
        } 
        } else {
            this.linhaSprite = 2;
            this.colunaSprite = 0;
        }       
    }
  
    moveRight() {
        this.x += this.speed;
        if (this.linhaSprite == 3) {
            if (Date.now() - this.tempoUltimoSprite > this.tempoTrocaSprite) {
                this.tempoUltimoSprite = Date.now();
                this.colunaSprite ++;
                if(this.colunaSprite > 3) {
                    this.colunaSprite = 0;
            }
        } 
        } else {
            this.linhaSprite = 3;
            this.colunaSprite = 0;
        }
    }
  }
  