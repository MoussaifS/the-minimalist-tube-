const filter = {
    url: [
      {
        urlMatches: 'https://*.youtube.com/*',
      },
    ],
  };
  
  chrome.webNavigation.onCompleted.addListener(() => {
    console.info("The user has loaded my favorite website!");
  }, filter);