(function(){"use strict";var n={325:function(n,e,r){var t=r(963),o=r(252),i=r(577);function u(n,e,r,t,u,c){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:e[0]||(e[0]=n=>c.QRScan())},"сканировать"),(0,o._)("div",null,(0,i.zw)(u.text),1)])}var c={data(){return{text:"пока пусто"}},created(){window.Telegram.WebApp.onEvent("qrTextReceived",this.close)},methods:{QRScan(){window.Telegram.WebApp.showScanQrPopup()},close(n){this.text=n.data,window.Telegram.WebApp.closeScanQrPopup()}},beforeMount(){window.Telegram.WebApp.expand(),window.Telegram.WebApp.enableClosingConfirmation()}},a=r(744);const f=(0,a.Z)(c,[["render",u]]);var l=f;(0,t.ri)(l).mount("#app")}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(e,t,o,i){if(!t){var u=1/0;for(l=0;l<n.length;l++){t=n[l][0],o=n[l][1],i=n[l][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](t[a])}))?t.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(l--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[t,o,i]}}(),function(){r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,i,u=t[0],c=t[1],a=t[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var l=a(r)}for(e&&e(t);f<u.length;f++)i=u[f],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(l)},t=self["webpackChunkqrcode"]=self["webpackChunkqrcode"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(325)}));t=r.O(t)})();
//# sourceMappingURL=app.e8f09f34.js.map