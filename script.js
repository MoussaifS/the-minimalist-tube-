
// let x = document.getElementById('page-manager')
// x.remove()
const observer = new MutationObserver((mutations, obs) => {
  let mainpage = document.getElementById('contents');
  let chips = document.getElementById('chips-wrapper');
  let alertIccon = document.querySelector('ytd-notification-topbar-button-renderer')
  let dd = document.getElementsByClassName('style-scope ytd-mini-guide-renderer')
  let thumb = document.getElementsByTagName('ytd-thumbnail')
  let v = document.getElementsByTagName('ytd-thumbnail')

  if (mainpage) {
    mainpage.style.display = "none";
    chips.style.display = "none";
    thumb.style.display = "none";
    alertIccon.style.display = "none";
   
    dd[2].remove()
    
    obs.disconnect(); // Stop observing after the element is found and removed
  }

  // if(v){
  //   for (let i = 0; i < v.length; i++) {
  //     v[i].style.display = 'none';
  //   }
  //   alertIccon.style.display = "none";

  //   obs.disconnect(); // Stop observing after the element is found and removed

  // }
});

// Start observing the document for changes in the child nodes
observer.observe(document, { childList: true, subtree: true });





let h = document.querySelector('ytd-notification-topbar-button-renderer')
h.remove()

setTimeout(()=>{
  let h = document.querySelector('ytd-notification-topbar-button-renderer')
  h.remove()
},500)

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
