function Test(useMutationEvents) {
  // Test result output containers
  var statusOut = document.getElementById('status');
  var resultOut = document.getElementById('result');

  // Forces polyfill to use MutationEvents if testing that case
  if (useMutationEvents) {
    window.MutationObserver = null;

    // Load MutationObserver polyfill that uses MutationEvents
    var mutationObserverPolyfill = document.createElement('script');
    mutationObserverPolyfill.src = 'MutationObserver.js';
    mutationObserverPolyfill.onload = window.setTimeout(ParseTest, 500);
    document.head.appendChild(mutationObserverPolyfill)
  } else {
    ParseTest()
  }

  function ParseTest() {
    // BREAKING CODE
    var observer = new MutationObserver(function() {});
    // Other mutation types/combos work fine
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    // END BREAKING CODE

    var parser = new DOMParser();
    var expectedContent = 'hello-world';
    // <div>hello-world</div> breaks too. Using CDATA as that's my current use
    // case.
    var xml = parser.parseFromString('<div><![CDATA[' + expectedContent + ']]></div>','text/xml');
    var result = xml.firstChild.firstChild.data;

    // Output test results for viewing
    if (result != expectedContent) {
      statusOut.textContent = 'FAIL';
    } else {
      statusOut.textContent = 'SUCCESS';
    }
    resultOut.textContent = 'Result: "' + result + '"';
  }
}
