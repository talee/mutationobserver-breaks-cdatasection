# mutationobserver-breaks-cdatasection

Using the `observe` method of a MutationObserver in Internet Explorer 11 breaks CDATASection data nodes on hyphens.

```
<div>
  <![CDATA[hello-world]]>
</div>
```

The CDATASection's data property should be `hello-world`, but is truncated around the hypen and only `hello` is returned.

See [test.js](test.js).
