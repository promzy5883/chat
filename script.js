var position;
var messageBox1 = document.getElementById("message");
var more1 = document.getElementById("more");
var pin1 = document.getElementById("pin");
var parent = document.getElementById("parent");
var remainder;
var touchMovement;
var touchPosition;
window.mouseDown = false;
document.onmousedown = function (e) {
  window.mouseDown = true;
  position = e.pageX;
  position2 = e.pageX;
  position3 = e.pageX;
};

document.onmouseup = function () {
  window.mouseDown = false;
  if (remainder != -120 && remainder != 120) {
    messageBox1.style.transform = `translateX(0)`;
    more1.style.transform = `translateX(60px)`;
    pin1.style.transform = `translateX(-60px)`;
  }
  if (remainder2 != -120 && remainder2 != 120) {
    messageBox2.style.transform = `translateX(0)`;
    more2.style.transform = `translateX(60px)`;
    pin2.style.transform = `translateX(-60px)`;
  }
  if (remainder3 != -120 && remainder3 != 120) {
    messageBox3.style.transform = `translateX(0)`;
    more3.style.transform = `translateX(60px)`;
    pin3.style.transform = `translateX(-60px)`;
  }
};
parent.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    remainder = e.pageX - position;
    remainder = remainder < -120 ? -120 : remainder;
    remainder = remainder > 120 ? 120 : remainder;
    messageBox1.style.transform = `translateX(${remainder}px)`;
    pin1.style.transform = `translateX(${remainder - 60}px)`;
    more1.style.transform = `translateX(${remainder - -60}px)`;

    messageBox2.style.transform = `translateX(${0})`;
    pin2.style.transform = `translateX(${-60}px)`;
    more2.style.transform = `translateX(${60}px)`;

    messageBox3.style.transform = `translateX(${0})`;
    pin3.style.transform = `translateX(${-60}px)`;
    more3.style.transform = `translateX(${60}px)`;
  }
});
parent.addEventListener("touchstart", (e) => {
  touchPosition = e.touches[0].clientX;
});
parent.addEventListener("touchmove", (e) => {
  touchMovement = e.touches[0].clientX;
  /*touchMovement = touchMovement > 120 ? 120 : touchMovement;
  touchMovement = touchMovement < -120 ? -120 : touchMovement;*/

  if (touchMovement > touchPosition) {
    touchMovement = touchMovement > 120 ? 120 : touchMovement;
    messageBox1.style.transform = `translateX(${touchMovement}px)`;
    pin1.style.transform = `translateX(${touchMovement - 60}px)`;
    more1.style.transform = `translateX(${touchMovement - 60}px)`;
  } else {
    touchMovement = touchMovement > 120 ? 120 : touchMovement;
    more1.style.transform = `translateX(-${touchMovement - 60}px)`;
    messageBox1.style.transform = `translateX(-${touchMovement}px)`;
    pin1.style.transform = `translateX(-${touchMovement - 60}px)`;
  }

  messageBox2.style.transform = `translateX(${0})`;
  pin2.style.transform = `translateX(${-60}px)`;
  more2.style.transform = `translateX(${60}px)`;

  messageBox3.style.transform = `translateX(${0})`;
  pin3.style.transform = `translateX(${-60}px)`;
  more3.style.transform = `translateX(${60}px)`;
});
/*parent.addEventListener("touchend", (e) => {
  if (touchMovement != 120) {
    messageBox1.style.transform = `translateX(0)`;
    more1.style.transform = `translateX(60px)`;
    pin1.style.transform = `translateX(-60px)`;
  }
});*/

function delOne() {
  var box = document.getElementsByClassName("box1");
  box[0].classList.add("disappear");
}

var messageBox2 = document.getElementById("message1");
var more2 = document.getElementById("more2");
var pin2 = document.getElementById("pin2");
var remainder2;
var position2;
var parent2 = document.getElementById("parent2");
var touchMovement2;

parent2.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    remainder2 = e.pageX - position2;
    remainder2 = remainder2 < -120 ? -120 : remainder2;
    remainder2 = remainder2 > 120 ? 120 : remainder2;
    messageBox2.style.transform = `translateX(${remainder2}px)`;
    pin2.style.transform = `translateX(${remainder2 - 60}px)`;
    more2.style.transform = `translateX(${remainder2 - -60}px)`;

    messageBox1.style.transform = `translateX(${0})`;
    pin1.style.transform = `translateX(${-60}px)`;
    more1.style.transform = `translateX(${60}px)`;

    messageBox3.style.transform = `translateX(${0})`;
    pin3.style.transform = `translateX(${-60}px)`;
    more3.style.transform = `translateX(${60}px)`;
  }
});
parent2.addEventListener("touchmove", (e) => {
  touchMovement2 = e.touches[0].clientX - window.innerWidth / 2;
  touchMovement2 = touchMovement2 > 120 ? 120 : touchMovement2;
  touchMovement2 = touchMovement2 < -120 ? -120 : touchMovement2;
  messageBox2.style.transform = `translateX(${touchMovement2}px)`;
  pin2.style.transform = `translateX(${touchMovement2 - 60}px)`;
  more2.style.transform = `translateX(${touchMovement2 - -60}px)`;

  messageBox1.style.transform = `translateX(${0})`;
  pin1.style.transform = `translateX(${-60}px)`;
  more1.style.transform = `translateX(${60}px)`;

  messageBox3.style.transform = `translateX(${0})`;
  pin3.style.transform = `translateX(${-60}px)`;
  more3.style.transform = `translateX(${60}px)`;
});
parent2.addEventListener("touchend", (e) => {
  if (touchMovement2 != -120 && touchMovement2 != 120) {
    messageBox2.style.transform = `translateX(0)`;
    more2.style.transform = `translateX(60px)`;
    pin2.style.transform = `translateX(-60px)`;
  }
});

function delTwo() {
  var box = document.getElementsByClassName("box2");
  box[0].classList.add("disappear");
}

var messageBox3 = document.getElementById("message2");
var more3 = document.getElementById("more3");
var pin3 = document.getElementById("pin3");
var remainder3;
var position3;
var parent2 = document.getElementById("parent3");
var touchMovement3;
parent3.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    remainder3 = e.pageX - position3;
    remainder3 = remainder3 < -120 ? -120 : remainder3;
    remainder3 = remainder3 > 120 ? 120 : remainder3;
    messageBox3.style.transform = `translateX(${remainder3}px)`;
    pin3.style.transform = `translateX(${remainder3 - 60}px)`;
    more3.style.transform = `translateX(${remainder3 - -60}px)`;

    messageBox2.style.transform = `translateX(${0})`;
    pin2.style.transform = `translateX(${-60}px)`;
    more2.style.transform = `translateX(${60}px)`;

    messageBox1.style.transform = `translateX(${0})`;
    pin1.style.transform = `translateX(${-60}px)`;
    more1.style.transform = `translateX(${60}px)`;
  }
});
parent3.addEventListener("touchmove", (e) => {
  touchMovement3 = e.touches[0].clientX - window.innerWidth / 2;
  touchMovement3 = touchMovement3 > 120 ? 120 : touchMovement3;
  touchMovement3 = touchMovement3 < -120 ? -120 : touchMovement3;
  messageBox3.style.transform = `translateX(${touchMovement3}px)`;
  pin3.style.transform = `translateX(${touchMovement3 - 60}px)`;
  more3.style.transform = `translateX(${touchMovement3 - -60}px)`;

  messageBox2.style.transform = `translateX(${0})`;
  pin2.style.transform = `translateX(${-60}px)`;
  more2.style.transform = `translateX(${60}px)`;

  messageBox1.style.transform = `translateX(${0})`;
  pin1.style.transform = `translateX(${-60}px)`;
  more1.style.transform = `translateX(${60}px)`;
});
parent3.addEventListener("touchend", (e) => {
  if (touchMovement3 != -120 && touchMovement3 != 120) {
    messageBox3.style.transform = `translateX(0)`;
    more3.style.transform = `translateX(60px)`;
    pin3.style.transform = `translateX(-60px)`;
  }
});

function delThree() {
  var box = document.getElementsByClassName("box3");
  box[0].classList.add("disappear");
}
/*
var parent4 = document.getElementById("parent4");
parent4.scrollLeft += document.querySelector("#unread4").clientWidth;
parent4.scrollLeft += document.querySelector("#pin4").clientWidth;
var position4;
parent4.addEventListener("mousemove", (e) => {
  if (window.mouseDown) {
    var remainder = position4 - e.pageX;
  }
});

function delFour() {
  var box = document.getElementsByClassName("box4");
  box[0].classList.add("disappear");
}
*/
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
