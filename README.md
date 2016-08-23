# mutationobserver-breaks-cdatasection

Using the `observe` method of a MutationObserver in Internet Explorer 11 breaks CDATASection data nodes on hyphens.

```
<div>
  <![CDATA[hello-world]]>
</div>
```

The CDATASection's data property should be `hello-world`, but is truncated around the hypen and only `hello` is returned.

Demo page: https://talee.github.io/mutationobserver-breaks-cdatasection/. See [test.js](test.js).

Workaround is to use MutationEvents, which is deprecated. This tests were done
on IE 11 with the following versions:

```
Version: 11.0.9600.17843.
Update Versions: 11.0.20 (KB3058515 June 9, 2015).

Version: 11.0.9600.18427.
Update Versions: 11.0.34 (KB3175443 August 9, 2016).
```

Tests pass on latest Chrome, Firefox, Safari and:

```
Microsoft Edge 38.14393.0.0
Microsoft EdgeHTML 14.14393
```
