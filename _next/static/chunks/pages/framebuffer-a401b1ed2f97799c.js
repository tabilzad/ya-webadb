(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{6355:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framebuffer",function(){return n(6149)}])},6149:function(e,t,n){"use strict";n.r(t);var i=n(4950),o=n.n(i),r=n(5202),a=n(2793),c=n(496),s=n(7441),l=n(3758),u=n(6393),h=n(9498),f=n(3898),d=n(4646);function m(e,t,n,i,o,r,a){try{var c=e[r](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(i,o)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.width=0,this.height=0,this.imageData=void 0,this.demoModeVisible=!1,(0,c.ky)(this,{toggleDemoModeVisible:c.aD.bound})}var t=e.prototype;return t.setImage=function(e){this.width=e.width,this.height=e.height,this.imageData=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height)},t.toggleDemoModeVisible=function(){this.demoModeVisible=!this.demoModeVisible},e}());t.default=(0,s.Pi)((function(){var e,t=(0,u.useRef)(null),n=(0,u.useCallback)((e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.n.device){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,f.n.device.framebuffer();case 5:t=e.sent,b.setImage(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),f.n.showErrorDialog((n=e.t0,(null!=(i=Error)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](n):n instanceof i)?e.t0.message:"".concat(e.t0)));case 12:case"end":return e.stop()}var n,i}),e,null,[[2,9]])})),function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function a(e){m(r,i,o,a,c,"next",e)}function c(e){m(r,i,o,a,c,"throw",e)}a(void 0)}))}),[]);(0,u.useEffect)((function(){return(0,c.EH)((function(){var e=t.current;e&&b.imageData&&(e.width=b.width,e.height=b.height,e.getContext("2d").putImageData(b.imageData,0,0))}))}),[]);var i=(0,c.Fl)((function(){return[{key:"start",disabled:!f.n.device,iconProps:{iconName:d.PJ.Camera,style:{height:20,fontSize:20,lineHeight:1.5}},text:"Capture",onClick:n},{key:"Save",disabled:!b.imageData,iconProps:{iconName:d.PJ.Save,style:{height:20,fontSize:20,lineHeight:1.5}},text:"Save",onClick:function(){var e=t.current;if(e){var n=e.toDataURL(),i=document.createElement("a");i.href=n,i.download="Screenshot of ".concat(f.n.backend.name,".png"),i.click()}}}]})),s=(0,c.Fl)((function(){return[{key:"DemoMode",iconProps:{iconName:d.PJ.Wand,style:{height:20,fontSize:20,lineHeight:1.5}},checked:b.demoModeVisible,text:"Demo Mode",onClick:b.toggleDemoModeVisible},{key:"info",iconProps:{iconName:d.PJ.Info,style:{height:20,fontSize:20,lineHeight:1.5}},iconOnly:!0,tooltipHostProps:{content:"Use ADB FrameBuffer command to capture a full-size, high-resolution screenshot.",calloutProps:{calloutMaxWidth:250}}}]}));return(0,r.jsxs)(a.K,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){g(e,t,n[t])}))}return e}({},d.LE,{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"Screen Capture - WebADB"})}),(0,r.jsx)(h.X3,{items:i.get(),farItems:s.get()}),(0,r.jsxs)(a.K,{horizontal:!0,grow:!0,styles:{root:{height:0}},children:[(0,r.jsx)(h.wM,{width:b.width,height:b.height,children:(0,r.jsx)("canvas",{ref:t,style:{display:"block"}})}),(0,r.jsx)(h.bq,{style:{display:b.demoModeVisible?"block":"none"}})]})]}))}))}},function(e){e.O(0,[774,888,179],(function(){return t=6355,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=framebuffer-a401b1ed2f97799c.js.map