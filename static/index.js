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
  
    const guitarCheckbox = document.getElementById('guitarCheckbox');
    
    const cookingCheckbox = document.getElementById('cookingCheckbox');
    
    const gamingCheckbox = document.getElementById('gamingCheckbox');

    const knittingCheckbox = document.getElementById('knittingCheckbox');

    const paintingCheckbox = document.getElementById('paintingCheckbox');
    
    const styleText = document.getElementById('styleText');
    
  
    guitarCheckbox.addEventListener('change', sendRequest);
    
    cookingCheckbox.addEventListener('change', sendRequest);
    
    gamingCheckbox.addEventListener('change', sendRequest);

    knittingCheckbox.addEventListener('change', sendRequest);

    paintingCheckbox.addEventListener('change', sendRequest);
    
    
    function sendRequest() {
    
      const params = new URLSearchParams();
    
    
      if (guitarCheckbox.checked) {
    
        params.set('guitar', 'true');
    
      }

    
      if (cookingCheckbox.checked) {
    
        params.set('cooking', 'true');
    
      }
    
    
      if (gamingCheckbox.checked) {
    
        params.set('gaming', 'true');
    
      }


    if (knittingCheckbox.checked) {
    
            params.set('knitting', 'true');
        
          }
      
        
    if (paintingCheckbox.checked) {
    
        params.set('painting', 'true');
    
      }
    
    
      if (!guitarCheckbox.checked && !cookingCheckbox.checked && !gamingCheckbox.checked && !knittingCheckbox.checked && !paintingCheckbox.checked) {
    
        styleText.style.display = 'block';
    
        const AantalSection = document.getElementById('AantalSection');
    
        AantalSection.innerHTML = '';
    
      } 
    
    
       else {
    
        styleText.style.display = 'none';
    
        fetch('/data?' + params.toString())
    
          .then(response => response.text())
    
          .then(html => {
    
            const AantalSection = document.getElementById('AantalSection');
    
            AantalSection.innerHTML = '';
    
            AantalSection.innerHTML = html;
    
          });
    
      }
    
    }