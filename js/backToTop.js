// back-top
const backTop = document.querySelector(".back-top");

backTop.addEventListener("click", () => {
  $("html, body").animate({ scrollTop: 0 }, "300");
});
