import arr from "../modules/data.js";
const content = document.querySelector(".content");
const seeAll = document.querySelector("#seeAll");
const seeAllMobile = document.querySelector("#seeAllMobile");
let winWidth = window.screen.width;

const reload = (elem) => {
  content.innerHTML = "";
  for (let item of elem) {
    content.innerHTML += `
      <div class="journey__card" style="background-image: url(${item.img});" >
        <div class="journey__card-info">
          <p>${item.tour}</p>
          <h1 class="journey__card-info__title">${item.place}</h1>
          <div class="journey__card-info__ditails">
            <div class="journey__card-info__ditails-expences">
              <img src="./assets/icons/clock.svg" alt="">
              <h3>${
                item.time >= 5 ? `${item.time} часов` : `${item.time} часа`
              }</h3>
            </div>
            <div class="journey__card-info__ditails-expences">
              <img src="./assets/icons/coins.svg" alt="">
              <h3>${item.cost}</h3>
            </div>
          </div>
          <p>${item.about}</p>
          <a class="button-secondary" href="./pages/aboutTour.html">Подробнее</a>
        </div>
      </div>
  `;
  }
};

seeAll.onclick = () => {
  if (seeAll.innerHTML === "Скрыть") {
    reload(arr.slice(0, 3));
    seeAll.innerHTML = "Cмотреть все";
  } else {
    seeAll.innerHTML = "Скрыть";
    reload(arr);
  }
};

seeAllMobile.onclick = () => {
  if (seeAllMobile.innerHTML === "Скрыть") {
    reload(arr.slice(0, 2));
    seeAllMobile.innerHTML = "Cмотреть все";
  } else {
    seeAllMobile.innerHTML = "Скрыть";
    reload(arr);
  }
};

if (winWidth >= 480) {
  reload(arr.slice(0, 3));
} else {
  reload(arr.slice(0, 2));
}