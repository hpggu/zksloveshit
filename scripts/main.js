const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("请输入用户名：");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `你叫： ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
function setUserName() {
  const myName = prompt("请输入用户名：");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `你叫： ${myName}`;
  }
}

// 处理音频自动播放
const bgMusic = document.getElementById('bgMusic');

// 尝试自动播放
function playAudio() {
  if (bgMusic) {
    bgMusic.play().catch(error => {
      console.log('自动播放被阻止，需要用户交互:', error);
    });
  }
}

// 在页面加载完成后尝试播放
window.addEventListener('load', playAudio);

// 监听用户交互，一旦用户与页面交互就播放音频
function handleUserInteraction() {
  playAudio();
  // 移除所有事件监听器，避免重复触发
  document.removeEventListener('click', handleUserInteraction);
  document.removeEventListener('touchstart', handleUserInteraction);
  document.removeEventListener('keydown', handleUserInteraction);
}

// 添加多种用户交互事件监听器
document.addEventListener('click', handleUserInteraction);
document.addEventListener('touchstart', handleUserInteraction);
document.addEventListener('keydown', handleUserInteraction);
