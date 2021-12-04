const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 이미지 태그 생성
bgImage.src = `./img/${chosenImage}`; // 속성추가
document.body.appendChild(bgImage); // body태그에 추가