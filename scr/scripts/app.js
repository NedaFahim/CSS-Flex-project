let menu = document.querySelector(".menue");
let menuBtn = document.querySelector(".header-icon");
let menuBtnIcon = document.querySelector(".header-icon i");

function showMenue(event) {
  event.preventDefault();

  if(menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = 0;
    menuBtnIcon.classList = "fa fa-times"
  } else{
  menu.style.left = "-256px";
      menuBtnIcon.classList = "fa fa-bars"

  }
}

menuBtn.addEventListener("click", showMenue);
