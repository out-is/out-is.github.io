const images = [
  "1. 경복궁.JPG",
  "2. 서울하늘, 달.JPG",
  "3. 광화문 담벼락.JPG",
  "4. 북촌한옥마을.JPG",
  "5. 서울하늘.JPG",
  "6. 길거리 고양이.JPG",
  "7. 한강.JPG",
  "8. 길거리 꽃.JPG",
  "9. 하트 풀.JPG",
  "10. 한강.JPG",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover";
