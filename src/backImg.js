const images = ["blackOcean.jpg","inTheBlackSky.jpg","paris.jpg","ocean.jpg","sun.jpg"];
const chosen = images[Math.floor(Math.random()*images.length)];

const backImg = document.createElement("img");
backImg.classList.add("backgroundImg");
backImg.src = `src/background/${chosen}`;
document.body.appendChild(backImg);

