(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{3489:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install",function(){return t(6390)}])},6390:function(e,n,t){"use strict";t.r(n);var i,r,a=t(3363),s=t.n(a),o=t(5202),l=t(4546),u=t(9325),c=t(5439),f=t(6501),p=t(6165),d=t(6885),g=t(2782),h=(t(6393),t(6929)),v=t(3685);function b(e,n,t,i,r,a,s){try{var o=e[a](s),l=o.value}catch(u){return void t(u)}o.done?n(l):Promise.resolve(l).then(i,r)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}(r=i||(i={}))[r.Uploading=0]="Uploading",r[r.Installing=1]="Installing",r[r.Completed=2]="Completed";var z=new function e(){var n;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.installing=!1,this.install=(n=s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,(0,v.oT)({accept:".apk"});case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return");case 6:return(0,p.z)((function(){n.installing=!0,n.progress={filename:t.name,stage:i.Uploading,uploadedSize:0,totalSize:t.size,value:0}})),e.next=9,h.CO.device.install((0,v.JP)(t,f.tA),(function(e){var r=n;(0,p.z)((function(){e!==t.size?r.progress={filename:t.name,stage:i.Uploading,uploadedSize:e,totalSize:t.size,value:e/t.size*.8}:r.progress={filename:t.name,stage:i.Installing,uploadedSize:e,totalSize:t.size,value:.8}}))}));case 9:(0,p.z)((function(){n.progress={filename:t.name,stage:i.Completed,uploadedSize:t.size,totalSize:t.size,value:1},n.installing=!1}));case 10:case"end":return e.stop()}}),e,this)})).bind(this),function(){var e=this,t=arguments;return new Promise((function(i,r){var a=n.apply(e,t);function s(e){b(a,i,r,s,o,"next",e)}function o(e){b(a,i,r,s,o,"throw",e)}s(void 0)}))}).bind(this),(0,p.ky)(this,{progress:p.LO.ref,install:!1})};n.default=(0,d.Pi)((function(){return(0,o.jsxs)(l.K,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){m(e,n,t[n])}))}return e}({},v.LE,{children:[(0,o.jsx)(g.default,{children:(0,o.jsx)("title",{children:"Install APK - WebADB"})}),(0,o.jsx)(l.K,{horizontal:!0,children:(0,o.jsx)(u.a,{disabled:!h.CO.device||z.installing,text:"Open",onClick:z.install})}),z.progress&&(0,o.jsx)(c.Y,{styles:{root:{width:300}},label:z.progress.filename,percentComplete:z.progress.value,description:i[z.progress.stage]})]}))}))},2782:function(e,n,t){e.exports=t(6906)}},function(e){e.O(0,[888,179],(function(){return n=3489,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=install-51914929d6530fc1.js.map