

// Function to check for URL changes and notify the background script




const observer = new MutationObserver((mutations, obs) => {
    let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
    let shortnavOutter = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');
    let grayscale = document.getElementsByTagName('ytd-app');
    let shortShelf = document.getElementsByTagName('ytd-rich-shelf-renderer')

    if (grayscale.length > 0) {
        grayscale[0].style.filter = 'grayscale(1)';
    }

    if(shortShelf){
        shortShelf[0].style.display = "none";
    }
  
    if (alertIcon) {
      alertIcon.style.display = "none";
    }
  
    if (shortnavOutter.length > 2) {
      shortnavOutter[2].style.display = "none";
    }
  
    if (alertIcon && shortnavOutter.length > 2 && shortShelf  ) {
      console.log('shit is  hidden');
      obs.disconnect();
    }
  });
  
  
  // Start observing the document for changes in the child nodes
  observer.observe(document, { childList: true, subtree: true });
  
  