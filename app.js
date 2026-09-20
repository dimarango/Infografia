document.addEventListener("DOMContentLoaded", () => {
  const photo = document.getElementById("profilePhoto");
  const placeholder = document.getElementById("photoPlaceholder");
  const topButton = document.getElementById("topButton");

  function showPhotoPlaceholder() {
    photo.style.display = "none";
    placeholder.style.display = "grid";
  }

  if (photo.complete && photo.naturalWidth === 0) showPhotoPlaceholder();
  photo.addEventListener("error", showPhotoPlaceholder);

  window.addEventListener("scroll", () => {
    topButton.classList.toggle("visible", window.scrollY > 500);
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
