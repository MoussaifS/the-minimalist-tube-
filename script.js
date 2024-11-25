// Utility Functions for hiding elements

// Hide an element by its ID
function hideElementById(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'none';
  }
}

// Hide an element by its CSS selector
function hideElementByQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = 'none'; // Hide the element
  } else {
    console.warn("Element not found. Check the selector or ensure it's available at this time.");
  }
}

// Hide an element by class name and optional index
function hideElementsByClass(className, index = 0) {
  const elements = document.getElementsByClassName(className);
  if (elements.length > index) {
    elements[index].style.display = 'none';
  }
}

// Hide all elements by their tag name
function hideElementsByTagName(tagName) {
  const elements = document.getElementsByTagName(tagName);
  for (let element of elements) {
    element.style.display = 'none';
  }
}

// Hide an element by tag name and optional index
function hideElementsByTagNameAndIndex(tagName, index = 0) {
  const elements = document.getElementsByTagName(tagName);
  if (elements.length > index) {
    elements[index].style.display = 'none';
  } else {
    console.warn(`No element found at index ${index} for tag: ${tagName}`);
  }
}



// Page-specific functions

// Hide the main content on the page (for example, the video feed)
function mainContent() {
  hideElementById('contents');
}

// Hide suggestion chips (e.g., video suggestions)
function suggestionChips() {
  hideElementById('chips-wrapper');
}

// Hide the second rich shelf element (for recommendations)
function shortShelf() {
  hideElementsByTagNameAndIndex('ytd-rich-shelf-renderer', 1);
}

// Hide all thumbnails on the page
function thumbnail() {
  hideElementsByTagName('ytd-thumbnail');
}

// Hide promoted sparkles (ads)
function promoteSparkles() {
  hideElementsByTagName('ytd-promoted-sparkles-web-renderer');
}

// Handle specific page views

// Watch page (individual video page)
function watchPage() {
  thumbnail(); // Hide thumbnails on the watch page
}

// Search results page
function resultPage() {
  thumbnail(); // Hide thumbnails on the results page
}

// Subscriptions page
function subscriptionsPage() {
  console.warn('Inside the subscriptions page');
  applyGrayscale(); // Apply grayscale effect
}

// Home page
function homePage() {
  hideElementByQuerySelector('ytd-notification-topbar-button-renderer');
  suggestionChips(); // Hide suggestion chips
  mainContent(); // Hide the main content feed
  applyGrayscale(); // Apply grayscale effect
  console.warn('Inside the home page');
}

// Handle DOM mutations for dynamic content
function handleMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const secondaryElement = document.querySelector('#secondary');
      
      if (secondaryElement) {
        console.log("Secondary element detected, checking current pathname...", window.location.pathname);
        
        
        // After handling, disconnect the observer to improve performance
        observer.disconnect();
      }
    }
  }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(handleMutations);

// Set up the observer to monitor child elements being added or removed in the document body
observer.observe(document.body, {
  childList: true,  // Watch for additions/removals of child elements
  subtree: true      // Watch all descendants of the body
});

console.log('Script loaded, observer started...');
