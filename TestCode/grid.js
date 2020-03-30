class grid {
    constructor(width, height, ctx, boxNumberX, boxNumberY) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.colorArray = new Array(boxNumberX + boxNumberY); //declare/initialize array for holding the current colors
        this.scale = 0;
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
    
    /*
    have mouse state, need x / y
    what box does my x / y fall under?
    if mouse is down, create box of selected color
    add boxes to an undo array
    */
    //check if clicked
    //check mouse pos
    
    //with mouseState
    findRelativeBox(curX, curY){
        //find column
        var initSpace = 15;
        var column = -1;
        var row = -1;
        for(var x = 0; x < this.boxNumberX; x++){
            if(curX - initSpace > x*this.scale && curX - initSpace <= (x+1)*this.scale){
                column = x;
            }
        }
        //find row
        if(column != -1){ //if mouse isn't in canvas, no need to check
            for(var y = 0; y < this.boxNumberY; y++){
                if(curY - initSpace > y*this.scale && curY - initSpace <= (y+1)*this.scale){
                    row = y;
                }
            }
        }
        return [column, row];
    }
    
    drawBoxAtPosition(curX, curY, color) { //assume already down
        var curPosition = this.findRelativeBox(curX, curY); //find which box we are dealing with
//        console.log("Is here");
        if(curPosition[0] != -1 && curPosition[1] != -1){
            this.ctx.beginPath();
            this.ctx.fillStyle = color; //color
            this.ctx.fillRect(curPosition[1]*this.scale, curPosition[0]*this.scale, this.scale, this.scale);
            this.colorArray[curPosition[0] + curPosition[1]] = color;
            this.ctx.stroke();
        }
    }
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grid1 = new grid(500, 150, ctx, 10, 10);
grid1.drawBox();

document.onmousemove = mouseMove;
document.onmousedown = mouseDown;
document.onmouseup = mouseUp;
var mouseState = "up";

//get mouseX, mouseY
var mouseX = 0;
var mouseY = 0;
function mouseMove(e) {
    mouseX = e.screenX;
    mouseY = e.screenY;
    if(mouseState == "down") {
        grid1.drawBoxAtPosition(mouseX, mouseY, "#000000");
        //mouse is being clicked
    }
    
    if(mouseState == "up") {
        //mouse is not being clicked
    }
}

function mouseDown(e) {
    mouseState = "down";
}

function mouseUp(e) {
    mouseState = "up";
}

