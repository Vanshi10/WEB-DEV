function xyz(){
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".topnav");
  console.log( 1, btnNavEl,headerEl);
  btnNavEl.addEventListener("click", function () {
    console.log("inside",headerEl.classList);
    headerEl.classList.toggle("nav-open");
  });
}
xyz();

