const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');

let margin = 0;
const carousel = document.querySelector('.carousel-content');

next.addEventListener('click', function () {
  // 0 - 1 && 1 -- 1
  // -100 1 && 1 -- 1
  // - 200 1 && 0 -- 0
  if (margin <= 0 && margin > -200) {
    margin = margin - 100;

    carousel.style.marginLeft = `${margin}%`;

    console.log(margin);
  }
});

prev.addEventListener('click', function () {
  if (margin < 0) {
    margin = margin + 100;

    carousel.style.marginLeft = `${margin}%`;

    console.log(margin);
  }
});

// create a variable for the  burger
// create another one for the cancel

// add an event listener to the burger to show the nav
// add an event listener to the cancel to hide the nav
