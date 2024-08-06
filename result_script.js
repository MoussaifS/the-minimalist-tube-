alerting('result script')

const observer = new MutationObserver((mutations, obs) => {
    let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
    let thumbs = document.getElementsByTagName('ytd-thumbnail');
    
    let promoteds = document.getElementsByTagName('ytd-promoted-sparkles-web-renderer');
    let shortnavOutter = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');


    if (shortnavOutter.length > 2) {
        shortnavOutter[2].style.display = "none";
      }
    

if (promoteds.length > 0) {
    for (let promoted of promoteds) {
        promoted.style.display = "none";
    }
  }  
    


if (thumbs.length > 0) {
    for (let thumb of thumbs) {
      thumb.style.display = "none";
    }
  }  
    if (alertIcon) {
      alertIcon.style.display = "none";
    }
  
   
  
    // Check if all elements have been handled, then disconnect the observer
    if (alertIcon  && shortnavOutter.length > 2 ) {
      console.log('shit is  hidden');
      obs.disconnect();
    }
  });
  
  
  // Start observing the document for changes in the child nodes
  observer.observe(document, { childList: true, subtree: true });
  
  