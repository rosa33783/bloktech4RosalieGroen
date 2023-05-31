const images = [
      { src: 'guitar.jpeg', hashtags: ['guitar'] },
      { src: 'cooking.jpeg', hashtags: ['cooking'] },
      { src: 'gaming.jpeg', hashtags: ['gaming'] },
      { src: 'knitting.jpeg', hashtags: ['knitting'] },
      { src: 'painting.jpeg', hashtags: ['painting'] },
    ];
    
     
    
    const doorgaanButton = document.getElementById('doorgaanButton');
    
     
    
    doorgaanButton.addEventListener('click', function() {
      const selectedHashtags = [];
      const checkboxes = document.getElementsByClassName('hashtag-checkbox');
    
     
    
      for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
    
     
    
        if (checkbox.checked) {
          selectedHashtags.push(checkbox.value);
        }
      }
    
     
    
      localStorage.setItem('selectedHashtags', JSON.stringify(selectedHashtags));
    });
    
