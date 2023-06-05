const images = [
      { src: 'guitar.jpeg', hashtags: ['guitar'] },
      { src: 'cooking.jpeg', hashtags: ['cooking'] },
      { src: 'gaming.jpeg', hashtags: ['gaming'] },
      { src: 'knitting.jpeg', hashtags: ['knitting'] },
      { src: 'painting.jpeg', hashtags: ['painting'] },
    ];
     
    
    const selectedHashtags = JSON.parse(localStorage.getItem('selectedHashtags'));
    const imageContainer = document.getElementById('image-container');
    
     
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const hashtags = image.hashtags;
    
     
    
      for (let j = 0; j < selectedHashtags.length; j++) {
        const selectedHashtag = selectedHashtags[j];
    
     
    
        if (hashtags.includes(selectedHashtag)) {
          const img = document.createElement('img');
          img.src = image.src;
          imageContainer.appendChild(img);
          break; // Stop de binnenste lus zodra een overeenkomende hashtag is gevonden
        }
      }
    }
    

    document.addEventListener("DOMContentLoaded", function() {

        // Verberg de tekst bij het laden van de pagina
      
        document.getElementById("javascript-disabled").style.display = "none";
      
      });
