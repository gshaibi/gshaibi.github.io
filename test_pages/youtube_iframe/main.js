function openIframe() {
  const iframe = document.createElement('iframe');
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'https://www.example.com';
  document.body.appendChild(iframe);
}

function openIframeWithDrag() {
  const iframe = document.createElement('iframe');
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'https://jsbin.com/hiqasek/edit?html,js,output';
  document.body.appendChild(iframe);
}

function openLocalIframe() {
  const iframe = document.createElement('iframe');
  iframe.width = 400;
  iframe.height = 300;
  iframe.src = 'dog.html';
  document.body.appendChild(iframe);
}