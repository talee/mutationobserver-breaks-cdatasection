function Test() {
  var statusOut = document.getElementById('status');
  var resultOut = document.getElementById('result');

  document.registerElement('x-yolo');

  var parser = new DOMParser();
  var expectedContent = 'hello-world';
  var result = parser.parseFromString('<div><![CDATA[' + expectedContent + ']]></div>','text/xml').firstChild.firstChild.data;
  if (result != expectedContent) {
    statusOut.textContent = 'FAIL';
  } else {
    statusOut.textContent = 'SUCCESS';
  }
  resultOut.textContent = 'Result: "' + result + '"';
}
setTimeout(Test, 2000);
