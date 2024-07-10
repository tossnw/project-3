var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
let header = document.querySelector("header");
const content = document.querySelector(".content");
const seeAll = document.querySelector("#seeAll");
const seeAllMobile = document.querySelector("#seeAllMobile");
let winHeight = window.screen.height;
let winWidth = window.screen.width;
header.style.height = `${winHeight}px`;

const arr = [
  {
    id: 1,
    tour: "Автобусный тур",
    place: "Обзорная по Сочи (из Адлера)",
    time: 2,
    cost: 240000,
    img: "./assets/images/bustour.png",
    about:
      "Приглашаем вас на экскурсию Обзорная по Большому Сочи: Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...",
  },
  {
    id: 2,
    tour: "Конный тур",
    place: "Конные прогулки",
    time: 5,
    cost: 120000,
    img: "./assets/images/horsetour.png",
    about:
      "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...",
  },
  {
    id: 3,
    tour: "Квадротур",
    place: "Пасть дракона",
    time: 6,
    cost: 460000,
    img: "./assets/images/ridetour.png",
    about:
      "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или Пасть Дракона (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
  },
  {
    id: 4,
    tour: "Автобусный тур",
    place: "Обзорная по Сочи (из Адлера)",
    time: 7,
    cost: 240000,
    img: "./assets/images/bustour.png",
    about:
      "Приглашаем вас на экскурсию Обзорная по Большому Сочи: Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...",
  },
  {
    id: 5,
    tour: "Квадротур",
    place: "Пасть дракона",
    time: 4,
    cost: 60000,
    img: "./assets/images/ridetour.png",
    about:
      "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или Пасть Дракона (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
  },
];

const reload = (carts) => {
  content.innerHTML = "";
  for (item of carts) {
    let journey__card = document.createElement("div");
    let journey__cardInfo = document.createElement("div");
    let pText = document.createElement("p");
    let journey__cardInfo__title = document.createElement("h1");
    let journey__cardInfo__ditails = document.createElement("div");
    let journey__cardInfo__ditailsExpencesOne = document.createElement("div");
    let journey__cardInfo__ditailsExpencesTwo = document.createElement("div");
    let imgClock = document.createElement("img");
    let imgCoin = document.createElement("img");
    let setTime = document.createElement("h3");
    let setPrice = document.createElement("h3");
    let pAbout = document.createElement("p");
    let secBtn = document.createElement("button");

    journey__card.classList.add("journey__card");
    journey__cardInfo.classList.add("journey__card-info");
    pText.innerHTML = item.tour;
    journey__cardInfo__title.classList.add("journey__card-info__title");
    journey__cardInfo__title.innerHTML = item.place;
    journey__cardInfo__ditails.classList.add("journey__cardInfo__ditails");
    journey__cardInfo__ditailsExpencesOne.classList.add(
      "journey__card-info__ditails-expences"
    );
    journey__cardInfo__ditailsExpencesTwo.classList.add(
      "journey__card-info__ditails-expences"
    );
    imgClock.src = "./assets/icons/clock.svg";
    imgCoin.src = "./assets/icons/coins.svg";
    setPrice.innerHTML = `${item.cost} сум`;
    setTime.innerHTML =
      item.time >= 5 ? `${item.time} часов` : `${item.time} часа`;
    pAbout.innerHTML = item.about;
    secBtn.classList.add("button-secondary");
    secBtn.innerHTML = "Подробнее";
    //   journey__card.style.backgroundImage = item.img;
    journey__card.style.backgroundImage = `url("${item.img}")`;

    journey__cardInfo.append(
      pText,
      journey__cardInfo__title,
      journey__cardInfo__ditails,
      pAbout,
      secBtn
    );
    journey__cardInfo__ditails.append(
      journey__cardInfo__ditailsExpencesOne,
      journey__cardInfo__ditailsExpencesTwo
    );

    journey__cardInfo__ditailsExpencesOne.append(imgClock, setTime);
    journey__cardInfo__ditailsExpencesTwo.append(imgCoin, setPrice);

    journey__card.append(journey__cardInfo);
    content.append(journey__card);
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

if (winWidth >= 420) {
  reload(arr.slice(0, 3));
} else {
  reload(arr.slice(0, 2));
}

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
