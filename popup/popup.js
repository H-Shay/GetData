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
  sum_rounded = sum_gb.toFixed(2);
  kwh = convert_to_kwh(sum_gb);
  kwh_rounded = kwh.toFixed(2);
  coal = kwh*.8;
  coal_rounded = coal.toFixed(2);
  document.getElementById('output').innerHTML = sum_rounded;
  document.getElementById('output2').innerHTML = kwh_rounded;
  document.getElementById('output3').innerHTML = coal_rounded;
  document.getElementById('body').background = background_image_URL;
}

function onError(error) {
  console.log(`Error: ${error}`);
}








