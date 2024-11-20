document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementsByClassName("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header[0].classList.add("header_active");
    } else {
      header[0].classList.remove("header_active");
    }
  });
});
