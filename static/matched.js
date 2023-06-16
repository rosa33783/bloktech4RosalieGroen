// const images = [
//       { src: 'guitar.jpeg', hashtags: ['guitar'] },
//       { src: 'cooking.jpeg', hashtags: ['cooking'] },
//       { src: 'gaming.jpeg', hashtags: ['gaming'] },
//       { src: 'knitting.jpeg', hashtags: ['knitting'] },
//       { src: 'painting.jpeg', hashtags: ['painting'] },
//     ];
//      
    
//     const selectedHashtags = JSON.parse(localStorage.getItem('selectedHashtags'));
//     const imageContainer = document.getElementById('image-container');
    
//      
    
//     for (let i = 0; i < images.length; i++) {
//       const image = images[i];
//       const hashtags = image.hashtags;
    
//      
    
//       for (let j = 0; j < selectedHashtags.length; j++) {
//         const selectedHashtag = selectedHashtags[j];
    
//      
    
//         if (hashtags.includes(selectedHashtag)) {
//           const img = document.createElement('img');
//           img.src = image.src;
//           imageContainer.appendChild(img);
//           break; // Stop de binnenste lus zodra een overeenkomende hashtag is gevonden
//         }
//       }
//     }
    

//     document.addEventListener("DOMContentLoaded", function() {

//         // Verberg de tekst bij het laden van de pagina
      
//         document.getElementById("javascript-disabled").style.display = "none";
      
//       });



// Haal de geselecteerde afbeeldingen op uit de sessieopslag

const selectedImages = JSON.parse(sessionStorage.getItem('selectedImages'));




// Kijk of er een afbeelding is geselecteerd

if (selectedImages && selectedImages.length > 0) {

  const selectedImagesContainer = document.getElementById('selectedImagesContainer');

  selectedImages.forEach((image) => {

    const imgElement = document.createElement('img');

    imgElement.src = image.src;

    selectedImagesContainer.appendChild(imgElement);

  });

} else {

  const noImagesElement = document.createElement('p');

  noImagesElement.textContent = 'Er zijn geen geselecteerde afbeeldingen.';

  document.getElementById('selectedImagesContainer').appendChild(noImagesElement);

}