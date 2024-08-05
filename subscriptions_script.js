alert('sub script')

// Function to check for URL changes and notify the background script




const observer = new MutationObserver((mutations, obs) => {
    let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
    let shortnavOutter = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');
    console.log(alertIcon,shortnavOutter)

    //chatgpt
    
   // Create a new style element
const style = document.createElement('style');

// Set the CSS rule to apply grayscale to the 'ytd-rich-item-renderer' elements


    let ff = document.getElementsByTagName('ytd-app');
    if (ff.length > 0) {
        ff[0].style.filter = 'grayscale(1)';
    }


    let shortShelf = document.getElementsByTagName('ytd-rich-shelf-renderer')
    
    if(shortShelf){
        shortShelf[0].style.display = "none";
    }
  
    if (alertIcon) {
      alertIcon.style.display = "none";
    }
  
    if (shortnavOutter.length > 2) {
      shortnavOutter[2].style.display = "none";
    }
  
    // Check if all elements have been handled, then disconnect the observer
    if (alertIcon && shortnavOutter.length > 2 && shortShelf  ) {
      console.log('shit is  hidden');
      obs.disconnect();
    }
  });
  
  
  // Start observing the document for changes in the child nodes
  observer.observe(document, { childList: true, subtree: true });
  
  