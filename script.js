var box = document.getElementById("box1");
var del = document.getElementById("delete");
var more = document.getElementById("more");
var message = document.getElementById("message");
box.addEventListener("mousemove", getMouseDirection, false);
var oldX = 0;

function getMouseDirection(e) {
  if (oldX < e.pageX) {
    xDirection = "right";

    del.classList.add("del-al");
    more.classList.add("mor-al");
    message.classList.add("mess-al");
  } else {
    xDirection = "left";
    del.classList.add("del");
    more.classList.add("mor");
    message.classList.add("mess");
  }

  oldX = e.pageX;
}
