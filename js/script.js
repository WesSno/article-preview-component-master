const tooltip = document.querySelector(".tooltip");
const shareIcon = document.querySelector(".share-icon");

tooltip.addEventListener("mouseenter", () => {
  tooltip.classList.add("visible");
  shareIcon.classList.add("rounded");
});

tooltip.addEventListener("mouseleave", () => {
  tooltip.classList.remove("visible");
  shareIcon.classList.remove("rounded");
});
