var window;
var gettingPage = browser.runtime.getBackgroundPage();
gettingPage.then(onGot, onError);

document.addEventListener("click", function(e) {
  window = window.open("display_page.html", "display_page");
});

background_image_URL = browser.runtime.getURL("images/coal.JPG");

function convert_to_gb(num) {
  return num/1073741824
}

function convert_to_kwh(num) {
  return num*1.46
}

function convert_to_coal(num) {
  return num*.8
}

function onGot(page) {
  sum = page.getSum();
  sum_gb = convert_to_gb(sum);
  kwh = convert_to_kwh(sum_gb);
  coal = kwh*.8;
  document.getElementById('output').innerHTML = sum_gb.toFixed(2);
  document.getElementById('output2').innerHTML = kwh.toFixed(2);
  document.getElementById('output3').innerHTML = coal.toFixed(2);
  document.getElementById('body').background = background_image_URL;
}

function onError(error) {
  console.log(`Error: ${error}`);
}








