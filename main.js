var mousevent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "yellow";
width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mousevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e) {

    mousevent = "mouseup";
}

canvas.addEventListener("mousleave", my_mouseleave)

function my_mouseleave(e) {

    mousevent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {

    mousevent = "mousemove";

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}