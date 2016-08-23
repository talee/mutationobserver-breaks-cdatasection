function Test(useMutationEvents) {
  var statusOut = document.getElementById('status');
  var resultOut = document.getElementById('result');

  if (useMutationEvents) {
    window.MutationObserver = null;
  }
  var registerElementPolyfill = document.createElement('script');
  registerElementPolyfill.src = 'document-register-element.max.js';
  registerElementPolyfill.onload = window.setTimeout(ParseTest, 500);
  document.head.appendChild(registerElementPolyfill)

  function ParseTest() {
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
}
