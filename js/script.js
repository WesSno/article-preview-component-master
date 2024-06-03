const tooltip = document.querySelector(".tooltip");
const shareIcon = document.querySelector(".share-icon");
const mobileShare = document.querySelector(".mobile-tooltip i");
const mobileSocialMedia = document.querySelector(".social-media");

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
tooltip.addEventListener("touchstart", showTooltip);
tooltip.addEventListener("touchend", hideTooltip);

mobileShare.addEventListener("mouseenter", showTooltip);
mobileShare.addEventListener("mouseleave", hideTooltip);
mobileShare.addEventListener("touchstart", showTooltip);
mobileShare.addEventListener("touchend", hideTooltip);
