"use strict";(()=>{var e={};e.id=2453,e.ids=[2453],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,t){return t in n?n[t]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,t)):"function"==typeof n&&"default"===t?n:void 0}}})},9615:(e,n,t)=>{t.r(n),t.d(n,{config:()=>d,default:()=>P,routeModule:()=>l});var r={};t.r(r),t.d(r,{default:()=>a});var i=t(1802),o=t(7153),u=t(6249);function a(e,n){n.status(200).json({name:"John Doe"})}let P=(0,u.l)(r,"default"),d=(0,u.l)(r,"config"),l=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/hello",pathname:"/api/hello",bundlePath:"",filename:""},userland:r})},7153:(e,n)=>{var t;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,n,t)=>{e.exports=t(145)}};var n=require("../../webpack-api-runtime.js");n.C(e);var t=n(n.s=9615);module.exports=t})();