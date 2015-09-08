console.log('content scrip loaded! acw');

var port = chrome.runtime.connect();
console.log(port, "PORT");

window.addEventListener("message", function(event) {
	console.log('listening message!');
  // We only accept messages from ourselves
  if (event.source != window){
  	console.log('sorce not window!!');
  	return;
  }
  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("SUCCESS Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

var lala="KO!";