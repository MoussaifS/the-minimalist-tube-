function injectScript(tabId) {

  chrome.scripting.executeScript(
      {
          target: {tabId: tabId},
          files: ['script.js'],
      }
  );

}


// Create an object to store the previous pathnames for each tab
let previousPathnames = {};

// Add listener for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the URL has changed
  if (changeInfo.url) {
    // Create a new URL object from the changed URL
    let newUrl = new URL(changeInfo.url);
    let newPathname = newUrl.pathname;
    
    // Get the previous pathname from the storage
    let prevPathname = previousPathnames[tabId];

    // Check if the pathname has changed
    if (prevPathname !== newPathname) {
      // Update the stored pathname
      previousPathnames[tabId] = newPathname;
      
      // Call the injectScript function
      injectScript(tabId);
      console.log(tabId, changeInfo, tab);
      console.log(newPathname, newUrl.port, newUrl.protocol);
    }
  }
});
