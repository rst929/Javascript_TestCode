class grid {
    constructor(width, height, ctx, boxNumberX, boxNumberY) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.colorArray = new Array(boxNumberX + boxNumberY); //declare/initialize array for holding the current colors
        this.scale;
        this.boxNumberX = boxNumberX;
        this.boxNumberY = boxNumberY;
    }
    
    //make array 
    drawBox() {
        this.scale = Math.min(this.width/this.boxNumberX, this.height/this.boxNumberY);
        var i, j;
        for (i = 0; i < this.boxNumberY; i++) {
            for(j = 0; j < this.boxNumberX; j++) {
                this.ctx.beginPath();
                this.ctx.rect(j*this.scale, i*this.scale, this.scale, this.scale);
                this.ctx.stroke();
                this.colorArray.push("#ZZZZZZ"); //-1 = empty
            }
        }
    }
    
    //with mouseState
    findRelativeBox(curX, curY){
        var realScale = this.scale * 1.75; //fixed ratio issues... but why?
        var column, row = -1; 
        for(var x = 0; x < this.boxNumberX; x++){
            if(curX > x*realScale && curX <= (x+1)*realScale){
                column = x;
                console.log(column);
                break;
            }
        }
        //find row
        if(column != -1){ //if mouse isn't in canvas, no need to check
            for(var y = 0; y < this.boxNumberY; y++){
                if(curY > y*realScale && curY <= (y+1)*realScale){
                    row = y;
                    break;
                }
            }
        }
        return [column, row];
    }
    
    drawBoxAtPosition(curX, curY, color) { //assume already down
        var curPosition = this.findRelativeBox(curX, curY); //find which box we are dealing with
        if(curPosition[0] != -1 && curPosition[1] != -1){
            this.ctx.fillStyle = color; //color
            this.ctx.fillRect(curPosition[0]*this.scale, curPosition[1]*this.scale, this.scale, this.scale);
            this.colorArray[curPosition[0] + curPosition[1]] = color;
            this.ctx.stroke();
            
            //would put undo logic here:
        }
    }
}

/*
//what do I need for an undo?
    - the boxes I just colored
    - the boxes that were there before
    - I am taking the boxes that I just colored, removing them, and replacing them with the old boxes that were there before
    - old boxes had location and color
*/


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grid1 = new grid(500, 450, ctx, 12, 12); //TODO: should adjust dynamically to canvas
grid1.drawBox();

document.onmousemove = mouseMove;
document.onmousedown = mouseDown
var mouseState = "up";

//get mouseX, mouseY
var mouseX = 0;
var mouseY = 0;
function mouseMove(e) {
    mouseX = e.screenX;
    mouseY = e.screenY;
    if(mouseState == "down") {
        grid1.drawBoxAtPosition(mouseX - 15, mouseY -115, "#000000");
        //mouse is being clicked
    }
    
    if(mouseState == "up") {
        //mouse is not being clicked
        console.log(mouseX);
    }
}
document.addEventListener("click", function(e) {
    grid1.drawBoxAtPosition(mouseX - 15, mouseY -115, "#000000");
    mouseState = "up";
});

function mouseDown(e) {
    mouseState = "down";
}

function mouseUp(e) {
    mouseState = "up";
}

