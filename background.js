var sum = 0;

function getContentLength(responseDetails) {
  headerArray = responseDetails.responseHeaders;
  for (count = 0; count < headerArray.length; count++) {
  	if (headerArray[count].name == "Content-Length" || headerArray[count].name == "content-length") {
  		sum = sum + parseInt(headerArray[count].value);
  	}
  }
}

function getSum() {
	return sum;
}

browser.webRequest.onResponseStarted.addListener(
  getContentLength,
  {urls: ["<all_urls>"]},
  ["responseHeaders"]
);