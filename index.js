const slides = [
  {
    id: 1,
    imgSrc: "./Assets/slider-image-1.jpg",
  },
  {
    id: 2,
    imgSrc: "./Assets/slider-image-2.jpg",
  },
  {
    id: 3,
    imgSrc: "./Assets/slider-image-3.jpg",
  },
  {
    id: 4,
    imgSrc: "./Assets/slider-image-4.jpg",
  },
  {
    id: 5,
    imgSrc: "./Assets/slider-image-5.jpg",
  },
  {
    id: 6,
    imgSrc: "./Assets/slider-image-6.jpg",
  },
  {
    id: 7,
    imgSrc: "./Assets/slider-image-7.jpg",
  },
  {
    id: 8,
    imgSrc: "./Assets/slider-image-8.jpg",
  },
  {
    id: 9,
    imgSrc: "./Assets/slider-image-9.jpg",
  },
];

var counterFirstLeft = 6;
var counterLastLeft = 10;
function scrollToLeft() {
  counterFirstLeft -= 1;
  counterLastLeft -= 1;
  if (counterFirstLeft <= 0) counterFirstLeft = 5;
  if (counterLastLeft <= 5) counterLastLeft = 9;

  $("#scroller").animate(
    {
      scrollLeft: `-=400px`,
    },
    500,
    function () {
      $(".media-group:first-of-type").prepend(
        `<div class="media-element">
        <img src=${slides[counterFirstLeft - 1].imgSrc} alt="img"/>
        </div>`
      );
      $(".media-group:last-of-type").prepend(
        `<div class="media-element">
        <img src=${slides[counterLastLeft - 1].imgSrc} alt="img"/>
        </div>`
      );
    }
  );
}
var counterFirstRight = 0;
var counterLastRight = 5;

function scrollToRight() {
  counterFirstRight += 1;
  counterLastRight += 1;
  if (counterFirstRight >= 6) counterFirstRight = 1;
  if (counterLastRight >= 10) counterLastRight = 6;

  $("#scroller").animate(
    {
      scrollLeft: `+=200px`,
    },
    500,
    function () {
      $(".media-group:first-of-type").append(
        `<div class="media-element">
        <img src=${slides[counterFirstRight - 1].imgSrc} alt="img"/>
        </div>`
      );
      $(".media-group:last-of-type").append(
        `<div class="media-element">
        <img src=${slides[counterLastRight - 1].imgSrc} alt="img"/>
        </div>`
      );
    }
  );
}
