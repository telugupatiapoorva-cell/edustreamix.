setInterval(() => {

  // Remove Home feed
  document.querySelectorAll("ytd-browse[page-subtype='home']")
    .forEach(el => el.remove());

  // Remove Shorts
  document.querySelectorAll("ytd-reel-shelf-renderer")
    .forEach(el => el.remove());

  // Remove Explore & Shorts tab
  document.querySelectorAll("a[title='Shorts'], a[title='Explore']")
    .forEach(el => el.remove());

  // Remove Search box
  document.querySelectorAll("ytd-searchbox")
    .forEach(el => el.remove());

}, 1000);