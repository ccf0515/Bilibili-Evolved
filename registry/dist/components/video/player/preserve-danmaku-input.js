!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/preserve-danmaku-input"]=t():e["video/player/preserve-danmaku-input"]=t()}(globalThis,(()=>(()=>{var e,t,r={5:(e,t,r)=>{var n=r(355)((function(e){return e[1]}));n.push([e.id,"@media screen and (max-width: 1200px) {\n  body.player-mode-webfullscreen .bpx-player-video-inputbar, body.player-fullscreen-fix .bpx-player-video-inputbar, body.player-full-win .bpx-player-video-inputbar,\nbody.player-mode-webfullscreen .bilibili-player-video-inputbar,\nbody.player-fullscreen-fix .bilibili-player-video-inputbar,\nbody.player-full-win .bilibili-player-video-inputbar {\n    display: flex !important;\n  }\n}",""]),e.exports=n},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,r,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},865:(e,t,r)=>{var n=r(5);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return r[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var i=Object.create(null);o.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var p=2&n&&r;"object"==typeof p&&!~e.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,o.d(i,a),i},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,r="preserveDanmakuInput",n=(0,e.defineComponentMetadata)({name:r,displayName:"强制保留弹幕发送栏",entry:none,instantStyles:[{name:r,style:()=>Promise.resolve().then(o.t.bind(o,865,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"在视频播放器网页全屏时, 即使宽度过小也强制保留弹幕发送栏, 注意这可能导致右侧的功能按钮挤出边界."},urlInclude:t.playerUrls,commitHash:"2bfc43d3a1410b04a7e4310eb990054f905b1a8d",coreVersion:"2.6.3"})})(),i=i.component})()));