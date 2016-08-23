# mutationobserver-breaks-characterdata

Using the `observe` method of a MutationObserver in Internet Explorer 11 breaks
CharacterData data property on hyphens.

```
<div><![CDATA[hello-world]]></div>
```

The CDATASection's data property should be `hello-world`, but is truncated
around the hypen and only `hello` is returned. Also breaks for:

```
<div>hello-world</div>
```

Demo page: https://talee.github.io/mutationobserver-breaks-characterdata/. See
[test.js](test.js) for test code.

## Workarounds

Workaround is to use MutationEvents, which is deprecated. A working
MutationObserver polyfill that does this is
https://github.com/webcomponents/webcomponentsjs/releases (the built file is in
the source download).

## Browser versions

This tests were done on IE 11 with the following versions:

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

Reported to Microsoft at https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8589859/.
