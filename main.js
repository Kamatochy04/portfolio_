function hideTabContent(tabContent) {
  for (let i = 0; i < tabContent[0].children.length; i++) {
    tabContent[0].children[i].style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.getElementsByClassName("hobbies__content"),
    tabContent = document.getElementsByClassName("hobbies__box");

  for (let i = 0; i < tabs[0].children.length; i++) {
    tabs[0].children[i].addEventListener("click", () => {
      hideTabContent(tabContent);
      tabContent[0].children[i].style.display = "block";
    });
  }

  hideTabContent(tabContent);

  tabContent[0].children[0].style.display = "block";

  const header = document.getElementsByClassName("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header[0].classList.add("header_active");
    } else {
      header[0].classList.remove("header_active");
    }
  });
});
