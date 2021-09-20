canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width=screen.width;
var height=screen.height;
var new_height=screen.height-300;
var new_width=screen.width-70;
var last_position_of_x,last_position_of_y;
var color=document.getElementById(d);
var width_of_line=w;


if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){

    console.log("my_touchstart");
    
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){

    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y); 
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}