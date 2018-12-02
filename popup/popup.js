var window;

document.addEventListener("click", function(e) {
  console.log("You have currently consumed " +sum+" bytes of data.");
  window = window.open("display_page.html", "display_page");
});

function onGot(page) {
  sum = page.getSum();
  sum_gb = sum/1073741824;
  sum_rounded = Math.round(sum_gb *10)/10;
  kwh = sum_rounded*1.46;
  coal = kwh*.8;
  coal_rounded = Math.round(coal*10/10);
  document.getElementById('output').innerHTML = sum_rounded;
  document.getElementById('output2').innerHTML = kwh;
  document.getElementById('output3').innerHTML = coal_rounded;
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);


