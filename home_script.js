

const {
  host, hostname, href, origin, pathname, port, protocol, search
} = window.location

console.log(pathname)
/////////////
////////////
function mainContent() {
  document.getElementById('contents').style.display = 'none';
}

function thumbnail() {
  let thumbs = document.getElementsByTagName('ytd-thumbnail');
  if (thumbs.length > 0) {
    for (let thumb of thumbs) {
      thumb.style.display = "none";
    }
  }
}

function alert() {
  document.querySelector('ytd-notification-topbar-button-renderer').style.display = 'none';
}


function suggestionChips(){
  
}

const observer = new MutationObserver((mutations, obs) => {
  let chips = document.getElementById('chips-wrapper');
  let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
  let shortnavOutter = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');
  let gray = document.getElementsByTagName('yt-image')


  console.log( chips,alertIcon,shortnavOutter)

  if (chips) {
    chips.style.display = "none";
  }

 

  if (shortnavOutter.length > 2) {
    shortnavOutter[2].style.display = "none";
  }



  // Check if all elements have been handled, then disconnect the observer
  if  ( chips && alertIcon && shortnavOutter.length > 2 && thumbs.length > 0) {


     





    console.log('Elements hidden');
    obs.disconnect();
  }
});


// Start observing the document for changes in the child nodes
observer.observe(document, { childList: true, subtree: true });


