function Test(useMutationEvents) {
  // Test result output containers
  var statusOut = document.getElementById('status');
  var resultOut = document.getElementById('result');

  // Forces polyfill to use MutationEvents if testing that case
  if (useMutationEvents) {
    window.MutationObserver = null;
  }

  // Load polyfill that calls MutationObserver.observe dynamically as it caches
  // MutationObserver on executing
  var registerElementPolyfill = document.createElement('script');
  registerElementPolyfill.src = 'document-register-element.max.js';
  registerElementPolyfill.onload = window.setTimeout(ParseTest, 500);
  document.head.appendChild(registerElementPolyfill)

  function ParseTest() {
    // Calls MutationObserver.observe or MutationEvents depending on support or test
    document.registerElement('x-yolo');

    var parser = new DOMParser();
    var expectedContent = 'hello-world';
    var result = parser.parseFromString('<div><![CDATA[' + expectedContent + ']]></div>','text/xml').firstChild.firstChild.data;

    // Output test results for viewing
    if (result != expectedContent) {
      statusOut.textContent = 'FAIL';
    } else {
      statusOut.textContent = 'SUCCESS';
    }
    resultOut.textContent = 'Result: "' + result + '"';
  }
}
