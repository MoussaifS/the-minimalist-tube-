alert('watch watch script')

// Function to check for URL changes and notify the background script




const observer = new MutationObserver((mutations, obs) => {
    let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
    let thumbs = document.getElementsByTagName('ytd-thumbnail');

    



  
    if (alertIcon) {
      alertIcon.style.display = "none";
    }


    if (thumbs.length > 0) {
        for (let thumb of thumbs) {
          thumb.style.display = "none";
        }
      }  
  
   
      
      let c = document.getElementsByClassName('ytp-endscreen-content')
     
     
     if(c){
            c[0].style.display = 'none'
     } 
    // Check if all elements have been handled, then disconnect the observer
    if (alertIcon && thumbs ) {
      console.log('shit is  hidden');
      obs.disconnect();
    }
  });
  
  
  // Start observing the document for changes in the child nodes
  observer.observe(document, { childList: true, subtree: true });
  
  