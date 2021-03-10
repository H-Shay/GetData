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

function gb_to_kwh(num) {
  return num*1.46
}

function kwh_to_coal(num) {
  return num*.9
}

function onGot(page) {
  sum = page.getSum();
  sum_gb = convert_to_gb(sum);
  kwh = gb_to_kwh(sum_gb);
  coal = kwh_to_coal(kwh)*.3
  document.getElementById('output').innerHTML = sum_gb.toFixed(2);
  document.getElementById('output2').innerHTML = kwh.toFixed(2);
  document.getElementById('output3').innerHTML = coal.toFixed(2);
  document.getElementById('body').background = background_image_URL;
}

function onError(error) {
  console.log(`Error: ${error}`);
}








