const tooltip = document.querySelector(".tooltip");
const shareIcon = document.querySelector(".share-icon");
const mobileShare = document.querySelector(".mobile-tooltip i");
const mobileSocialMedia = document.querySelector(".social-media");
const rootStyles = getComputedStyle(document.documentElement);
const desaturatedDarkBlue = rootStyles
  .getPropertyValue("--desaturated-dark-blue")
  .trim();
const lightGrayishBlue = rootStyles
  .getPropertyValue("--light-grayish-blue")
  .trim();

function showTooltip() {
  tooltip.classList.add("visible");
  mobileSocialMedia.classList.add("visible_two");
}

function hideTooltip() {
  tooltip.classList.remove("visible");
  mobileSocialMedia.classList.remove("visible_two");
}

tooltip.addEventListener("mouseenter", showTooltip);
tooltip.addEventListener("mouseleave", hideTooltip);
tooltip.addEventListener("touchstart", (e) => {
  e.preventDefault();
  showTooltip();
  tooltip.style.backgroundColor = desaturatedDarkBlue;
  tooltip.style.color = "white";
});
tooltip.addEventListener("touchend", (e) => {
  e.preventDefault();
  setTimeout(() => {
    hideTooltip();
    tooltip.style.color = desaturatedDarkBlue;
    tooltip.style.backgroundColor = lightGrayishBlue;
  }, 2000);
});

mobileShare.addEventListener("mouseenter", showTooltip);
mobileShare.addEventListener("mouseleave", hideTooltip);
mobileShare.addEventListener("touchstart", (e) => {
  e.preventDefault();
  showTooltip();
  mobileShare.style.backgroundColor = desaturatedDarkBlue;
  mobileShare.style.color = "white";
});
mobileShare.addEventListener("touchend", (e) => {
  e.preventDefault();
  setTimeout(() => {
    hideTooltip();
    mobileShare.style.color = desaturatedDarkBlue;
    mobileShare.style.backgroundColor = lightGrayishBlue;
  }, 2000);
});
