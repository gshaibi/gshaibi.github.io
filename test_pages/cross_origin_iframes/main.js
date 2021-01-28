function openIframe() {
  const iframe = document.createElement('iframe');
  iframe.name = "Example.com iframe";
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'https://www.example.com';
  document.body.appendChild(iframe);
}

function openIframeWithDrag() {
  const iframe = document.createElement('iframe');
  iframe.name = "Drag iframe";
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'https://jsbin.com/hiqasek/edit?html,js,output';
  document.body.appendChild(iframe);
}

function openIframeDifferentDomainWithDrawnElements() {
  const iframe = document.createElement('iframe');
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'http://internal-resource-server.fire.glass:3000/regression_test_pages/vrm_drawn_elements.html';
  document.body.appendChild(iframe);
}

function openLocalIframe() {
  const iframe = document.createElement('iframe');
  iframe.name = "Local iframe";
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'dog.html';
  document.body.appendChild(iframe);
}