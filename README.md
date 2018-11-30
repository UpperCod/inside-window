# inside-window (430B)

This small utility allows you to generate lazy load events, based on the browser window, **does not require polyfills**

```js
import insideWindow from "inside-window";

let unsubscribe = insideWindow({
    selector : "[data-lazyload-src]",
    timeout : 1000/8,
    offsetY : 0,
    offsetX : 0,
    handler(target,entering ){
        if(!entering)return;
        target.src = target.dataset.lazyloadSrc;
        unsubscribe();
    }
})
```


