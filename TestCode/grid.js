//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.beginPath();
//ctx.rect(50, 20, 150, 100);
//ctx.stroke()
//

class grid {
    constructor(width, height, ctx) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        //grid length/height
    }
    
    drawBox(boxNumberX, boxNumberY) {
        var scale = Math.min(this.width/boxNumberX, this.height/boxNumberY);
//        var scale = this.width/boxNumber;
        var i, j;
        var startHeight = 0;
        for (i = 0; i < boxNumberY; i++) {
            for(j = 0; j < boxNumberX; j++) {
                ctx.beginPath();
                ctx.rect(j*scale, i*scale, scale, scale);
                ctx.stroke(); 
            }
        }
    }
    
    //check if clicked
    //check mouse pos
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//var grid1 = new grid(ctx.width, ctx.height, ctx);
var grid1 = new grid(500, 150, ctx);
grid1.drawBox(10, 10);