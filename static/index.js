

const guitarCheckbox = document.getElementById("guitarCheckbox");
const cookingCheckbox = document.getElementById("cookingCheckbox");
const gamingCheckbox = document.getElementById("gamingCheckbox");
const knittingCheckbox = document.getElementById("knittingCheckbox");
const paintingCheckbox = document.getElementById("paintingCheckbox");

const matchLink = document.getElementById("matchLink");

matchLink.addEventListener("click", function(e) {
  e.preventDefault(); // Prevent the default link behavior
  const selectedImages = [];

  if (guitarCheckbox.checked) {
    selectedImages.push({ src: "guitar.jpeg" });
  }

  if (cookingCheckbox.checked) {
    selectedImages.push({ src: "cooking.jpeg" });
  }

  if (gamingCheckbox.checked) {
    selectedImages.push({ src: "gaming.jpeg" });
  }

  if (knittingCheckbox.checked) {
    selectedImages.push({ src: "knitting.jpeg" });
  }

  if (paintingCheckbox.checked) {
    selectedImages.push({ src: "painting.jpeg" });
  }

  if (selectedImages.length > 0) {
    sessionStorage.setItem("selectedImages", JSON.stringify(selectedImages));
    window.location.href = "/matched"; // Navigate to matched.html
  }
});


// Checkbox Filtering data
// const guitarCheckbox = document.getElementById("guitarCheckbox");
const styleText = document.getElementById("styleText");

const sendRequest = () => {

const params = new URLSearchParams();

if (cookingCheckbox.checked) {

    params.set("cooking", "true");

  }




  if (vintageCheckbox.checked) {

    params.set("vintage", "true");

  }




  if (streetwearCheckbox.checked) {

    params.set("streetwear", "true");

  }




  if (

    !cookingCheckbox.checked &&

    !vintageCheckbox.checked &&

    !streetwearCheckbox.checked

  ) {

    styleText.style.display = "block";

    const AantalSection = document.getElementById("AantalSection");

    AantalSection.innerHTML = "";

  } else {

    styleText.style.display = "none";

    fetch("/data?" + params.toString())

      .then((response) => response.text())

      .then((html) => {

        const AantalSection = document.getElementById("AantalSection");

        AantalSection.innerHTML = "";

        AantalSection.innerHTML = html;

      });

  }

};

