

document.addEventListener("DOMContentLoaded", function() {
  const selectedImages = JSON.parse(sessionStorage.getItem("selectedImages"));
  const selectedImagesContainer = document.getElementById("selectedImagesContainer");

  if (selectedImages && selectedImages.length > 0) {
    selectedImages.forEach(function(image) {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      selectedImagesContainer.appendChild(imgElement);
    });
  } else {
    selectedImagesContainer.textContent = "No images selected.";
  }

  // Clear the stored selected images from sessionStorage
  sessionStorage.removeItem("selectedImages");
});

