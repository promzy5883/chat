/*var box = document.getElementById("box1");
var del = document.getElementById("delete");
var more = document.getElementById("more");
var pin = document.getElementById("pin");
var unread = document.getElementById("unread");
var message = document.getElementById("message");
var count = 0;
var current = 0;
window.mouseDown = false;
document.onmousedown = function () {
  window.mouseDown = true;
};
document.onmouseup = function () {
  window.mouseDown = false;
};

box.addEventListener("mousemove", getMouseDirection, false);
box.addEventListener("mouseover", (e) => {
  current = e.pageX;
});
function getMouseDirection(e) {
  if (window.mouseDown) {
    count = e.pageX;
    if (count < current) {
      var remainder = current - count;
      remainder = remainder > 40 ? 40 : remainder;
      message.style.left = `-${remainder}%`;
      message.style.transition = "0.5s";
      more.style.right = `${remainder - 20}%`;
      more.style.transition = "0.5s";
      pin.style.left = `-${40}%`;
      pin.style.transition = "0.5s";
    }
    if (count > current) {
      var remainder = count - current;
      remainder = remainder > 40 ? 40 : remainder;
      message.style.left = `${remainder}%`;
      message.style.transition = "0.5s";
      more.style.right = `-${40}%`;
      more.style.transition = "0.5s";
      pin.style.left = `${remainder - 20}%`;
      pin.style.transition = "0.5s";
    }
  }
}
*/

var parent = document.getElementById("parent");
parent.scrollLeft += document.querySelector(".unread").clientWidth;
parent.scrollLeft += document.querySelector(".pin").clientWidth;
