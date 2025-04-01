//<!-- Detect country selection and show/hide Pakistan-specific options
    //  document.getElementById('countrySelect').addEventListener('change', function() {
//    const selectedCountry = this.value;
 //   const pakistanOptions = document.getElementById('pakistanOptions');
  
   // if (selectedCountry === 'Pakistan') {
 //     pakistanOptions.classList.remove('hidden');
  //  } else {
  //    pakistanOptions.classList.add('hidden');
  //  }
//  });
  




// Search Functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const fileItems = document.querySelectorAll('.file-item');
    

    fileItems.forEach(function(item) {
      const fileName = item.querySelector('a').textContent.toLowerCase();
      if (fileName.includes(query)) {
        item.style.display = 'block';  // Show the item if it matches the search
      } else {
        item.style.display = 'none';  // Hide the item if it doesn't match
      }
    });
  });







  //



  // audio


  function downloadAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = audioPlayer.querySelector('source').src;
    
    fetch(audioSource)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = audioSource.split('/').pop(); // Filename from URL
        link.click();
        
        // Cleanup: revoke object URL after download
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Download failed:', error));
  }
  

  // index search-for-country

 
// dom
document.addEventListener(" ", function() {
  const searchInput = document.getElementById("search");
  
  if (searchInput) {
      searchInput.addEventListener("input", function() {
          console.log("Search input detected:", this.value);
      });
  } else {
      console.error("Element #search not found!");
  }
});
