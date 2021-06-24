canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

var color;
var radius;
var width_of_line;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color =  document.getElementById("color").value;
radius = document.getElementById("radius").value;
width_of_line = document.getElementById("width_of_line").value;
mouse_Event = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouse_Event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouse_Event = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft; 
current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop; 

if(mouseEvent == "mousedown") {
console.log("Current position of X and Y coordinates = ");
console.log("x  = " + current_position_of_mouse_x + "y  = " + current_position_of_mouse_y);

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
ctx.stroke();
}

}
