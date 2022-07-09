"use strict";

const iconMenu = document.querySelector(".mobile-menu-icon");
const menuResponsive = document.getElementById("header-mobile");

iconMenu.addEventListener("click", () => {
  menuResponsive.classList.toggle("header-mobile-toggle");
});

// slidebanner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
}

// toggleSearchBox
const iconSearch = document.querySelector(".icon-search");
const searchBox = document.querySelector(".search-box");
const iconClose = document.querySelector(".btn-close");

const toggleSearchBox = () => {
  searchBox.classList.toggle("hide");
};
iconSearch.addEventListener("click", toggleSearchBox);
iconClose.addEventListener("click", toggleSearchBox);

//windowScroll
const headerTop = document.querySelector(".header-top");
const header = document.querySelector("#header");

const handleScroll = () => {
  window.scrollY > 150
    ? header.classList.add("sticky-active")
    : header.classList.remove("sticky-active");
  window.scrollY > 150
    ? header.classList.add("slideInDown")
    : header.classList.remove("slideInDown");
  window.scrollY > 150
    ? header.classList.add("animated")
    : header.classList.remove("animated");
};

window.addEventListener("scroll", handleScroll);

// call courses
function getCourses() {
  fetch(`https://60d4611a61160900173cb070.mockapi.io/courses`)
    .then((res) => res.json())
    .then((data) => renderCourses(data));
}

function renderCourses(courses) {
  const listCourses = document.getElementById("list-courses");

  const renderList = courses.map((course) => {
    let rateStar = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= course.rate) {
        rateStar += `<i class="fa-solid fa-star"></i>`;
      } else {
        rateStar += ` <i class="fa-regular fa-star"></i>`;
      }
    }

    return `
    <div class="featured-contents-slides-content">
      <div class="featured-contents-slide">
        <div class="featured-course-price">
          <span>${course.level}</span>
        </div>
        <div class="featured-course-bookmark">
          <span><i class="fa-regular fa-bookmark"></i></span>
        </div>
        <div class="featured-contents-slide-img">
          <img src="${course.image}" alt="">
        </div>
        <div class="featured-contents-slide-riview">
          <div class="featured-contents-slide-riview-top">
            <div class="slide-riview-rate">
              <div class="slide-riview-rate-star">
                ${rateStar}
              </div>
              <div class="slide-riview-rate-review">
                <span>${course.rate}</span>
                <span>(${course.rate_quantity})</span>
              </div>
            </div>
            <h4>
              <a href="">${course.name}</a>
            </h4>
            <div class="featured-user-duration">
              <span> <i class="fa-solid fa-user"></i></i>${course.total_enrolled}</span>
              <span><i class="fa-solid fa-clock"></i>${course.duration}</span>
            </div>
          </div>
          <div class="featured-contents-slide-riview-middle">
            <div class="riview-middle-img">
              <img src="./assets/image/students/student_1.jpg" alt="">
              <div class="riview-middle-img-name">
                <span class="sub">by</span>
                <span><a href="">${course.teacher}</a></span>
                <span class="sub">in</span>
                <span><a href="">${course.categories}</a></span>
              </div>
            </div>
          </div>
          <div class="featured-contents-slide-riview-bottom">
            <div class="featured-cost">
              <p>${course.price}$</p>
            </div>
            <div class="featured-buy">
              <a href=""><i class="fa-solid fa-cart-shopping"></i>${course.total_enrolled}</a href="">
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  });
  listCourses.innerHTML = renderList.join("");

  $(".list-courses").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<i class='fa-solid fa-angle-left'></i>",
    nextArrow: "<i class='fa-solid fa-angle-right'></i>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
getCourses();

// slider tiny
var slider = tns({
  container: ".mouse-drag",
  mouseDrag: true,
  controlsText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  speed: 400,
});

// slider slick
$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".list-collab").slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },

  ],
});
