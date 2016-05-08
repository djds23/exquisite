function humanize(text) {
  var cleanText =  text.toString()
    .toLowerCase()
    .replace(/[_-]/g, ' ');
  var firstLetter = cleanText[0].toUpperCase();
  return firstLetter + cleanText.slice(1, -1);
    //.replace(/(?:^|\s)\S/g, function(firstLetter) {
    //  return firstLetter.toUpperCase();
    // });
}

function getSubDomain() {
  return window.location.host.split('.')[0];
}

window.onload = function () {
  var subdomain = getSubDomain();
  var formattedText = humanize(subdomain);
  var h1 = document.querySelector('#userContent');
  h1.innerHTML = formattedText + ' exquisite mom.';
}
