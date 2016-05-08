function humanize(text) {
  var cleanText =  text.toString()
    .toLowerCase()
    .replace(/[_-]/g, ' ');
  var firstLetter = cleanText[0].toUpperCase();
  return firstLetter + cleanText.slice(1);
    //.replace(/(?:^|\s)\S/g, function(firstLetter) {
    //  return firstLetter.toUpperCase();
    // });
}

function getSubDomain() {
  return window.location.host.split('.')[0];
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getLove() {
  return getParameterByName('love', window.location.href)
}

window.onload = function () {
  var subdomain = getSubDomain();
  var formattedText = humanize(subdomain);
  var h1 = document.querySelector('#userContent');
  h1.innerHTML = formattedText + ' exquisite mom.';

  var gotLove = getLove();
  var loveMsg = document.createElement('h2');
  if (!(gotLove == null || gotLove === '')) {
      loveMsg.innerHTML = gotLove;
  } else {
      loveMsg.innerHTML = 'Dean & Lee'
  }
  var love = document.createElement('h2');
  love.innerHTML = 'Love,';

  var card = document.querySelector('#card');
  card.appendChild(love);
  card.appendChild(loveMsg);

}
