const {
  host, hostname, href, origin, pathname, port, protocol, search
} = window.location;

console.log(pathname);

function hideElementById(id) {
  const element = document.getElementById(id);
  if (element) element.style.display = 'none';
}

function hideElementByQuerySelector(selector) {
  const element = document.querySelector(selector);
  if (element) element.style.display = 'none';
}

function hideElementsByClass(className, index = 0) {
  const elements = document.getElementsByClassName(className);
  if (elements.length > index) elements[index].style.display = 'none';
}

function hideElementsByTagName(tagName) {
  const elements = document.getElementsByTagName(tagName);
  for (let element of elements) {
    element.style.display = 'none';
  }
}

function hideElementsByTagNameAndIndex(tagName, index = 0) {
  const elements = document.getElementsByTagName(tagName);
  if (elements.length > index) elements[index].style.display = 'none';
}

function applyGrayscale() {
  const app = document.getElementsByTagName('ytd-app')[0];
  if (app) app.style.filter = 'grayscale(1)';
}

function mainContent() {
  hideElementById('contents');
}

function alertIcon() {
  hideElementByQuerySelector('ytd-notification-topbar-button-renderer');
}

function suggestionChips() {
  hideElementById('chips-wrapper');
}

function shortmainIcon() {
  hideElementsByClass('style-scope ytd-mini-guide-renderer', 2);
}

function thumbnail() {
  hideElementsByTagName('ytd-thumbnail');
}

function shortShelf() {
  hideElementsByTagNameAndIndex('ytd-rich-shelf-renderer');
}

function promoteSparkles() {
  hideElementsByTagName('ytd-promoted-sparkles-web-renderer');
}

function watchPage() {
  alertIcon();
  thumbnail();
}

function resultPage() {
  alertIcon();
  thumbnail();
  shortmainIcon();
}

function subscriptionsPage() {
  applyGrayscale();
  alertIcon();
  shortShelf();
  shortmainIcon();
}

function homePage() {
  shortmainIcon();
  suggestionChips();
  alertIcon();
  mainContent();
}

const observer = new MutationObserver((mutations, obs) => {
  watchPage();
  console.log('Elements hidden');
  obs.disconnect();
});

// Start observing the document for changes in the child nodes
observer.observe(document, { childList: true, subtree: true });
