var box = document.getElementById("box1");
var del = document.getElementById("delete");
var more = document.getElementById("more");
var pin = document.getElementById("pin");
var unread = document.getElementById("unread");
var message = document.getElementById("message");

window.mouseDown = false;
document.onmousedown = function () {
  window.mouseDown = true;
};
document.onmouseup = function () {
  window.mouseDown = false;
};
box.addEventListener("mousemove", getMouseDirection, false);
var oldX = 0;

function getMouseDirection(e) {
  if (window.mouseDown) {
    if (oldX < e.pageX) {
      del.classList.remove("del");
      more.classList.remove("mor");
      message.classList.remove("mess");

      pin.classList.add("pi");
      unread.classList.add("unr");
      message.classList.add("messL");
    } else {
      del.classList.add("del");
      more.classList.add("mor");
      message.classList.add("mess");

      pin.classList.remove("pi");
      unread.classList.remove("unr");
      message.classList.remove("messL");
    }
  }
  oldX = e.pageX;
}
