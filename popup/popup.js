var window;
var gettingPage = browser.runtime.getBackgroundPage();
gettingPage.then(onGot, onError);

document.addEventListener("click", function(e) {
  window = window.open("display_page.html", "display_page");
});

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
  sum_rounded = Math.round(sum_gb *10)/10;
  kwh = convert_to_kwh(sum_rounded)
  coal = kwh*.8;
  coal_rounded = Math.round(coal*10/10);
  document.getElementById('output').innerHTML = sum_rounded;
  document.getElementById('output2').innerHTML = kwh;
  document.getElementById('output3').innerHTML = coal_rounded;
}

function onError(error) {
  console.log(`Error: ${error}`);
}








