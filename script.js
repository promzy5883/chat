var parent = document.getElementById("parent");
parent.scrollLeft += document.querySelector("#unread").clientWidth;
parent.scrollLeft += document.querySelector("#pin").clientWidth;
var position;
window.mouseDown = false;
document.onmousedown = function (e) {
  window.mouseDown = true;
  position = e.pageX + 230;
  position2 = e.pageX + 230;
  position3 = e.pageX + 230;
  position4 = e.pageX + 230;
};
document.onmouseup = function () {
  window.mouseDown = false;
  if (parent.scrollLeft < 453 && parent.scrollLeft != 0) {
    parent.scrollLeft = 230;
  }
  if (parent2.scrollLeft < 453 && parent2.scrollLeft != 0) {
    parent2.scrollLeft = 230;
  }
  if (parent3.scrollLeft < 453 && parent3.scrollLeft != 0) {
    parent3.scrollLeft = 230;
  }
  if (parent4.scrollLeft < 453 && parent4.scrollLeft != 0) {
    parent4.scrollLeft = 230;
  }
};
parent.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    var remainder = position - e.pageX;
    remainder = remainder > 453 ? 453 : remainder;
    remainder = remainder < 0 ? 0 : remainder;
    if (window.innerWidth > 500) {
      parent.scrollLeft = remainder;
      parent2.scrollLeft = 230;
      parent3.scrollLeft = 230;
      parent4.scrollLeft = 230;
    }
  }
});

function delOne() {
  var box = document.getElementsByClassName("box1");
  box[0].classList.add("disappear");
}

var parent2 = document.getElementById("parent2");
parent2.scrollLeft += document.querySelector("#unread2").clientWidth;
parent2.scrollLeft += document.querySelector("#pin2").clientWidth;
var position2;
parent2.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    var remainder = position2 - e.pageX;
    remainder = remainder > 453 ? 453 : remainder;
    remainder = remainder < 0 ? 0 : remainder;
    if (window.innerWidth > 500) {
      parent2.scrollLeft = remainder;
      parent.scrollLeft = 230;
      parent3.scrollLeft = 230;
      parent4.scrollLeft = 230;
    }
  }
});

function delTwo() {
  var box = document.getElementsByClassName("box2");
  box[0].classList.add("disappear");
}

var parent3 = document.getElementById("parent3");
parent3.scrollLeft += document.querySelector("#unread3").clientWidth;
parent3.scrollLeft += document.querySelector("#pin3").clientWidth;
var position3;
parent3.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    var remainder = position3 - e.pageX;
    remainder = remainder > 453 ? 453 : remainder;
    remainder = remainder < 0 ? 0 : remainder;
    if (window.innerWidth > 500) {
      parent3.scrollLeft = remainder;
      parent.scrollLeft = 230;
      parent2.scrollLeft = 230;
      parent4.scrollLeft = 230;
    }
  }
});

function delThree() {
  var box = document.getElementsByClassName("box3");
  box[0].classList.add("disappear");
}

var parent4 = document.getElementById("parent4");
parent4.scrollLeft += document.querySelector("#unread4").clientWidth;
parent4.scrollLeft += document.querySelector("#pin4").clientWidth;
var position4;
parent4.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    var remainder = position4 - e.pageX;
    remainder = remainder > 453 ? 453 : remainder;
    remainder = remainder < 0 ? 0 : remainder;
    if (window.innerWidth > 500) {
      parent4.scrollLeft = remainder;
      parent.scrollLeft = 230;
      parent2.scrollLeft = 230;
      parent3.scrollLeft = 230;
    }
  }
});

function delFour() {
  var box = document.getElementsByClassName("box4");
  box[0].classList.add("disappear");
}

var chatSection = document.getElementById("chat-section");
var homeSection = document.getElementById("home-section");
var callSection = document.getElementById("call-section");
var communitySection = document.getElementById("community-section");

var chatPosition = 0;
var homePosition = -100;
var callPosition = -100;
var communityPosition = 100;

var homeButton = document.getElementById("homeButton");
var callButton = document.getElementById("callButton");
var communityButton = document.getElementById("communityButton");
var chatsButton = document.getElementById("chatsButton");

var homeText = document.getElementsByClassName("homeText");
var communityText = document.getElementsByClassName("communityText");
var chatText = document.getElementsByClassName("chatText");
var callText = document.getElementsByClassName("callText");

homeButton.addEventListener("click", () => {
  chatPosition = 100;
  homePosition = 0;
  communityPosition = 100;
  callPosition = -100;
  chatSection.style.transform = `translateX(${chatPosition}%)`;
  homeSection.style.transform = `translateX(${homePosition})`;
  callSection.style.transform = `translateX(${callPosition}%)`;
  communitySection.style.transform = `translateX(${communityPosition}%)`;
  homeText[0].style.color = "blue";
  homeText[1].style.color = "blue";
  communityText[0].style.color = "black";
  communityText[1].style.color = "black";
  chatText[0].style.color = "black";
  chatText[1].style.color = "black";
  callText[0].style.color = "black";
  callText[1].style.color = "black";
});

chatsButton.addEventListener("click", () => {
  chatPosition = 0;
  homePosition = -100;
  communityPosition = 100;
  callPosition = -100;
  chatSection.style.transform = `translateX(${chatPosition})`;
  homeSection.style.transform = `translateX(${homePosition}%)`;
  communitySection.style.transform = `translateX(${communityPosition}%)`;
  callSection.style.transform = `translateX(${callPosition}%)`;
  homeText[0].style.color = "black";
  homeText[1].style.color = "black";
  communityText[0].style.color = "black";
  communityText[1].style.color = "black";
  chatText[0].style.color = "blue";
  chatText[1].style.color = "blue";
  callText[0].style.color = "black";
  callText[1].style.color = "black";
});

communityButton.addEventListener("click", () => {
  communityPosition = 0;
  chatPosition = 100;
  homePosition = -100;
  callPosition = -100;
  chatSection.style.transform = `translateX(${chatPosition}%)`;
  homeSection.style.transform = `translateX(${homePosition}%)`;
  callSection.style.transform = `translateX(${callPosition}%)`;
  communitySection.style.transform = `translateX(${communityPosition})`;
  homeText[0].style.color = "black";
  homeText[1].style.color = "black";
  communityText[0].style.color = "blue";
  communityText[1].style.color = "blue";
  chatText[0].style.color = "black";
  chatText[1].style.color = "black";
  callText[0].style.color = "black";
  callText[1].style.color = "black";
});

callButton.addEventListener("click", () => {
  communityPosition = 100;
  chatPosition = 100;
  homePosition = -100;
  callPosition = 0;
  chatSection.style.transform = `translateX(${chatPosition}%)`;
  homeSection.style.transform = `translateX(${homePosition}%)`;
  callSection.style.transform = `translateX(${callPosition})`;
  communitySection.style.transform = `translateX(${communityPosition}%)`;
  homeText[0].style.color = "black";
  homeText[1].style.color = "black";
  communityText[0].style.color = "black";
  communityText[1].style.color = "black";
  chatText[0].style.color = "black";
  chatText[1].style.color = "black";
  callText[0].style.color = "blue";
  callText[1].style.color = "blue";
});

var x = window.matchMedia("(min-width: 300px)");
myFunction(x);
x.addListener(myFunction);
