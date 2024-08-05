
// let x = document.getElementById('page-manager')
// x.remove()
const observer = new MutationObserver((mutations, obs) => {
  let mainpage = document.getElementById('contents');
  let chips = document.getElementById('chips-wrapper');
  let alertIcon = document.querySelector('ytd-notification-topbar-button-renderer');
  let shortnavOutter = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');
  let thumbs = document.getElementsByTagName('ytd-thumbnail');
  // let c = document.getElementsByClassName('style-scope ytd-guide-renderer')
  // let short = document.getElementsByTagName('ytd-guide-entry-renderer')



  console.log(mainpage, chips,alertIcon,shortnavOutter,thumbs)
  // if(short){
  //   short[1].style.display = "none";
  // }

  // if(c){
  //   c[3].style.display = "none";
  //   c[2].style.display = "none";

  // }
  if (mainpage) {
    mainpage.style.display = "none";
  }
  
  if (chips) {
    chips.style.display = "none";
  }

  if (alertIcon) {
    alertIcon.style.display = "none";
  }

  if (shortnavOutter.length > 2) {
    shortnavOutter[2].style.display = "none";
  }

  if (thumbs.length > 0) {
    for (let thumb of thumbs) {
      thumb.style.display = "none";
    }
  }

  // Check if all elements have been handled, then disconnect the observer
  if (mainpage && chips && alertIcon && shortnavOutter.length > 2 && thumbs.length > 0) {
    console.log('Elements hidden');
    obs.disconnect();
  }
});


// Start observing the document for changes in the child nodes
observer.observe(document, { childList: true, subtree: true });





// let d = document.querySelectorAll('.style-scope ytd-thumbnail')


// console.log("this is the new car")


//   const shortLanding = document.querySelector ('#content.ytd-rich-section-renderer');
//   console.log(shortLanding)

//   if(shortLanding ) {
//           shortLanding.style.display = 'none';
//   }

  
// // Keep track of DOM element changes under <html> and run callback with mutationsList and observer once DOM changes
// // Select the node that will be observed for mutations
// const targetNode = document.querySelector ('#content.ytd-rich-section-renderer')

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };

// // Callback function to execute when mutations are observed
// const callback = function(mutationList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(const mutation of mutationList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };

// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

// // Later, you can stop observing
// observer.disconnect();

//   // shortInnerNav =  document.querySelectorAll('.style-scope ytd-guide-entry-renderer');
//   // shortInnerNav[1].remove();


//   body.addEventListener("yt-navigate-finish", function() {
//     const shortLanding = document.querySelector ('#content.ytd-rich-section-renderer');
//     console.log('inside body',shortLanding)
// });


// setTimeout(()=>{


//   const shortNav = document.getElementsByClassName('style-scope ytd-mini-guide-renderer');

//   if(shortNav ) {
//   shortNav[2].remove();
// }

// },500)
