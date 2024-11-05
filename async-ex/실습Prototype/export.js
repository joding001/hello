let img = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp",
  "img/7.webp",
  "img/8.webp",
  "img/9.webp",
  "img/10.webp",
  "img/11.webp",
  "img/12.webp",
  "img/13.webp",
  "img/14.webp",
  "img/15.webp",
  "img/16.webp",
  "img/17.webp",
  "img/18.webp",
  "img/19.webp",
  "img/20.webp",
  "img/21.webp",
  "img/22.webp",
  "img/23.webp",
  "img/24.webp",
  "img/25.webp",
];


export function MakeImg(indexNum) {
  let galleryImage = new Image();
  galleryImage.src = `img/${indexNum}.webp`;
  galleryImage.style.width = `${parseInt(Math.random() * 400) + 100}px`;
  galleryImage.style.top = `${Math.max(0, Math.random() * (window.innerHeight - galleryImage.naturalWidth))}px`;  
  let leftNum = 0 - parseInt(galleryImage.style.width.slice(0, -2));
  galleryImage.style.left = `${leftNum}px`;
  document.querySelector('div#gallery').appendChild(galleryImage);
  
  this.galleryImage = galleryImage;
  this.leftNum = leftNum;
}

MakeImg.prototype.zImg = function(zIndex) {
  this.galleryImage.style.zIndex = zIndex;
};

MakeImg.prototype.speedImg = function(speed, delay) {
  let galleryImage = this.galleryImage;
  let leftNum = this.leftNum;
  
  setTimeout(function() {
    setInterval(function() {
      leftNum++;
      galleryImage.style.left = `${leftNum}px`;
      if (window.innerWidth <= leftNum) {
        leftNum = 0 - parseInt(galleryImage.style.width.slice(0, -2));
      }
    }, speed);
  }, delay);
};

/*
    [ MakeImg 생성자함수 ]

    1. 배열의 img를 가져와서 #gallery에 추가해주는 함수
    2. 이미지의 width값은 랜덤으로 불러와져야 하며 100보다 작거나 500보다 크면 다시 랜덤으로 생성해주세요.
    3. left 값은 현재 width값의 음수값으로 설정해주세요. (그래야 브라우저 밖으로 나감)
    4. top 값은 랜덤으로 불러와져야 하며 0보다 작거나 브라우저 높이에서 이미지 너비를 뺀 값보다 크면 다시 랜덤으로 생성해주세요.


    [ zImg prototype ]
    1. z-index값을 넣으면 해당 img에 z-index값이 들어가도록 해보세요.
    2. div0.zImg(20); -> z-index 생기면 성공



    현재 여기까지 작업했다면
    이미지가 <img src="img/25.webp" width="300" id="24" style="left: -300px; top: 140px; z-index: 20;"> 이런식으로 생성되어야 함
    left가 음수값이기 때문에 그것을 고려하여 움직이게 해야함 -299, -298, -297, ... 이런식으로 움직여야함

    [ speedImg prototype ]
    1. speedImg라는 prototype을 만들어서 속도값과 시간을 받아오고 해당 img를 움직여보세요.
    div0.speedImg(10, 20); -> 20초 후에 이미지 움직임이 시작되며 속도는 10ms로 움직임


*/
