import{R as s,i as y,k as x,m as l}from"./index-d2f193e2.js";function m(t=s){const e=t===s?y:x(t);return function(){const{store:n}=e();return n}}const b=m();function O(t=s){const e=t===s?b:m(t);return function(){return e().dispatch}}const H=O();var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(h),c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},c.apply(this,arguments)},w=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]]);return r};function d(t){return t&&t.map(function(e,r){return l.createElement(e.tag,c({key:r},e.attr),d(e.child))})}function g(t){return function(e){return l.createElement(C,c({attr:c({},t.attr)},e),d(t.child))}}function C(t){var e=function(r){var n=t.attr,a=t.size,i=t.title,v=w(t,["attr","size","title"]),u=a||r.size||"1em",o;return r.className&&(o=r.className),t.className&&(o=(o?o+" ":"")+t.className),l.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,v,{className:o,style:c(c({color:t.color||r.color},r.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),t.children)};return f!==void 0?l.createElement(f.Consumer,null,function(r){return e(r)}):e(h)}function S(t){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"}}]})(t)}function _(t){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]})(t)}export{_ as A,g as G,S as a,H as u};
