const info = document.querySelector(".aboutSeo__body__trigger");
const btn = document.querySelector(".closeBtn h4");
const flash = document.querySelector(".closeBtn span");

btn.addEventListener("click", () => {
  info.classList.toggle("active");
  btn.textContent = "بستن";
  flash.style.transform = "rotate(-90deg)";
});
btn.addEventListener("click", () => {
  if (info.classList.contains("active") !== true) {
    btn.textContent = "توضیحات بیشتر";
    flash.style.transform = "rotate(90deg)";
  }
});
