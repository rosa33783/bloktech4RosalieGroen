
const images = [
        
    { src: 'guitar.jpeg', hashtags: ['guitar'] },
        
    { src: 'cooking.jpeg', hashtags: ['cooking'] },
        
    { src: "gaming.jpeg", hashtags: ['gaming']  },
            
    { src: "knitting.jpeg", hashtags: ['knitting'] },

    { src: "painting.jpeg", hashtags: ['painting'] },
    
];
        
        
         
function filterImages(hashtag) {
        
    filteredImages = images.filter(function(image) {
        
    return image.hashtags.includes(hashtag);
        
    });
        
        
        
        
currentIndex = 0;
        
    showImage();
        
    }
        
        
        
        
function showNextImage() {
        
    currentIndex = (currentIndex + 1) % filteredImages.length;
        
    showImage();
        
    }
        
        
        
        
function showImage() {
const imageElement = document.getElementById('image');
const imageContainer = document.getElementById('imageContainer');
        
        
        
if (filteredImages.length > 0) {
        
    const currentImage = filteredImages[currentIndex];
        
    imageElement.src = currentImage.src;
        
    imageContainer.style.display = 'block';
        
   } else {
        
              imageContainer.style.display = 'none';
        
            }
        
          }
    
          // Selecteer de checkbox-elementen

 const checkboxList = document.querySelectorAll('.hashtag-checkbox');
        
              
        // Voeg een event listener toe aan elke checkbox
        
        checkboxList.forEach(function(checkbox) {
        
          checkbox.addEventListener('change', function() {
        
            // Wanneer een checkbox wordt gewijzigd
        
            const selectedHashtags = getSelectedHashtags();
        
     
            // Filter de afbeeldingen op basis van de geselecteerde hashtags
        
            const filteredImages = images.filter(function(image) {
        
              return selectedHashtags.some(function(hashtag) {
        
                return image.hashtags.includes(hashtag);
        
              });
        
            });

          // Toon de gefilterde afbeeldingen

    displayImages(filteredImages);

  });

});




// Hulpmethode om de geselecteerde hashtags op te halen

function getSelectedHashtags() {

  var selectedHashtags = [];

  checkboxList.forEach(function(checkbox) {

    if (checkbox.checked) {

      selectedHashtags.push(checkbox.value);

    }

  });

  return selectedHashtags;

}


// Hulpmethode om de afbeeldingen weer te geven

function displayImages(images) {

  var imageContainer = document.getElementById('image-container');

  imageContainer.innerHTML = ''; // Leeg de container




  images.forEach(function(image) {

    var imgElement = document.createElement('img');

    imgElement.src = image.src;

    imageContainer.appendChild(imgElement);

  });

};

function toggleInfo() {   var checkbox = document.querySelector('.hashtag-checkbox');   
var guitarInfo = document.querySelector('#guitarInfo');   
if (checkbox.checked) {     guitarInfo.style.display = 'block';   } 
else {     guitarInfo.style.display = 'none';   } }


fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bd5e378503939ddaee76f12ad7a97608")
.then(res => res.json())
.then(json => document.getElementById("weather").innerText = json.weather[0].main)


//fetch("data.json")
  //.then(res => res.json())
  //.then(json => {
  //  document.getElementById("user1").innerText = json.data.user1.name;
 // })
 
fetch("data.json")
  .then(res => res.json())
  .then(json => {
    const user1 = json.data.user1;
    const name = user1.name;
    const age = user1.age;
 
    document.getElementById("user1-name").innerText = name;
    document.getElementById("user1-age").innerText = age;
  })
