var myImages1 = new Array();
myImages1.push("src/img1.png");
myImages1.push("src/img2.png");
myImages1.push("src/img3.png");
myImages1.push("src/img4.png");
myImages1.push("src/img5.png");
myImages1.push("src/img6.png");
myImages1.push("src/img7.png");
myImages1.push("src/img8.png");
myImages1.push("src/img9.png");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}

