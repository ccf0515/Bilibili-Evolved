!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/av-url"]=o():e["video/av-url"]=o()}(self,(function(){return function(){"use strict";var e={d:function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}},o={};e.d(o,{component:function(){return s}});var t=coreApis.lifeCycle,n=coreApis.observer,r=coreApis.spinQuery,i=coreApis.utils.urls;const s={name:"avUrl",displayName:"网址AV号转换",description:{"zh-CN":"当视频的链接是BV号时, 自动转换为AV号. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址), 并可能导致后退要多退几次."},entry:()=>{(0,t.fullyLoaded)((()=>{(0,n.urlChange)((async()=>{const e=await(0,r.select)((()=>unsafeWindow.aid));if(!e)return;if(document.URL.includes("videocard_series"))return void console.log("skip video series");const o=document.URL.replace(/\/(video|bangumi)\/(BV[\w]+)/i,((o,t)=>`/${t}/av${e}`));document.URL!==o&&window.history.replaceState(history.state,"",o)}))}))},tags:[componentsTags.video,componentsTags.utils],urlInclude:i.videoUrls,commitHash:"4244557c2d4e7006e134441db6a1a23e0d6e00cf",coreVersion:"2.4.0"};return o=o.component}()}));