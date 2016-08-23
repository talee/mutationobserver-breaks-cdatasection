function Test() {
  var statusOut = document.getElementById('status');
  var resultOut = document.getElementById('result');

  var observer = new MutationObserver(function() {
  });

  observer.observe(document, {
    childList: true,
    subtree: true
  });

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
