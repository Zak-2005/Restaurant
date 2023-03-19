(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],u=o[s]||0,l="".concat(s," ").concat(u);o[s]=u+1;var p=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var d=r(e,a),s=0;s<o.length;s++){var u=n(o[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("homePage");const n=document.createElement("div");n.textContent="The Mobarak's cafe",t.appendChild(n);const r=document.createElement("img");r.src="../Pictures/mobarakCafe.jpg",t.appendChild(r);const a=document.createElement("p");a.textContent="Mobarak's Cafe is a Middle Eastern restaurant that offers a taste of traditional cuisine with a modern twist. Located in the heart of a bustling city, the restaurant is known for its warm and inviting atmosphere, where customers can enjoy delicious food and great company. From rich and flavorful hummus to savory shawarma, Mobarak's Cafe's menu features a wide range of authentic Middle Eastern dishes that are sure to delight any palate. Whether you're looking for a quick bite or a full meal, Mobarak's Cafe is the perfect place to experience the flavors of the Middle East.",t.appendChild(a),e.appendChild(t)}var t=n(379),r=n.n(t),a=n(795),o=n.n(a),c=n(569),i=n.n(c),d=n(565),s=n.n(d),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(28),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,e();const v=document.querySelector("body"),C=document.querySelector("#content"),y=document.createElement("div");function E(){for(;C.hasChildNodes();)C.removeChild(C.firstChild)}y.classList.add("tabs");const g=document.createElement("div");g.textContent="home",g.addEventListener("click",(()=>{E(),e()}));const x=document.createElement("div");x.textContent="menu",x.addEventListener("click",(()=>{E(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div");n.textContent="Menu",t.appendChild(n);const r=((e,t,n,r)=>{const a=document.createElement("div"),o=document.createElement("div");o.textContent=e;const c=document.createElement("div");c.textContent=t;const i=document.createElement("div");i.textContent=n;const d=document.createElement("img");return d.src=r,a.appendChild(o),a.appendChild(c),a.appendChild(i),a.appendChild(d),a})("Chicken Shawarma","Crispy, Juicy, Full of Flavor! The Chicken Shawarma is made with a tangy garlic sauce, crispy french fries, tomatoes, pickles, and the best chicken you've ever had!","$12","../Pictures/Chicken Shawarma.jpg");t.appendChild(r),e.appendChild(t)}()}));const b=document.createElement("div");b.textContent="contact",b.addEventListener("click",(()=>{E(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div");n.textContent="Contact Us",t.appendChild(n);const r=document.createElement("div");r.textContent="you@example.com",t.appendChild(r);const a=document.createElement("div");a.textContent="999-999-9999",t.appendChild(a),e.appendChild(t)}()})),y.appendChild(g),y.appendChild(x),y.appendChild(b),v.appendChild(y)})()})();