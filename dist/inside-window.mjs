function t(t,n,e,i){var r=window.innerWidth+n,o=window.innerHeight+e,a="__inside_window__";("string"==typeof t?document.querySelectorAll(t):t).forEach(function(t){var d,c,f=t.getBoundingClientRect(),u=f.x,v=f.y,h=f.width,l=f.height;Math.abs(v)>o||Math.abs(u)>r||(l+=e,l+=n,o>(v=v>e?v-e:v)&&v+l>0&&(d=!0),o>(u=u>n?u-n:u)&&u+h>0&&(c=!0),c&&d?t[a]||(i(t,!0),t[a]=!0):(t[a]&&i(t,!1),t[a]=!1))})}function n(n){var e=n.selector,i=n.timeout;void 0===i&&(i=125);var r=n.offsetX;void 0===r&&(r=0);var o=n.offsetY;void 0===o&&(o=50);var a=n.handler,d=setInterval(function(){t(e,r,o,a)},i);return function(){return clearInterval(d)}}export{t as watch,n as insideWindow};
//# sourceMappingURL=inside-window.mjs.map
