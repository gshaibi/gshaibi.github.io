const iframe = document.createElement('iframe');
const body = document.getElementsByTagName('body')[0];
iframe.src = "iframe.html";
iframe.width = "700px";
iframe.height = "700px";
body.appendChild(iframe);
