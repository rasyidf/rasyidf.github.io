(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{336:function(e,n,t){"use strict";t.d(n,{X:function(){return l}});var r=t(63),i=t(2326),a=t(5284),o=t(3105),s=t(4461),u=t(3808),c=t(7294);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var l=(0,r.G)(((e,n)=>{var t=(0,i.m)("Heading",e),r=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}((0,a.Lr)(e),["className"]);return c.createElement(o.m$.h2,f({ref:n,className:(0,s.cx)("chakra-heading",e.className)},r,{__css:t}))}));u.Ts&&(l.displayName="Heading")},454:function(e,n,t){"use strict";t.d(n,{R:function(){return l}});var r=t(4461),i=t(3808),a=t(3869),o=t(7554),s=t(7294),u=t(4722);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f={initial:"initial",animate:"enter",exit:"exit",variants:{initial:e=>{var n,{offsetX:t,offsetY:r,transition:i,transitionEnd:a,delay:o}=e;return{opacity:0,x:t,y:r,transition:null!=(n=null==i?void 0:i.exit)?n:u.p$.exit(u.R.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:e=>{var n,{transition:t,transitionEnd:r,delay:i}=e;return{opacity:1,x:0,y:0,transition:null!=(n=null==t?void 0:t.enter)?n:u.p$.enter(u.R.enter,i),transitionEnd:null==r?void 0:r.enter}},exit:e=>{var n,{offsetY:t,offsetX:r,transition:i,transitionEnd:a,reverse:o,delay:s}=e,f={x:r,y:t};return c({opacity:0,transition:null!=(n=null==i?void 0:i.exit)?n:u.p$.exit(u.R.exit,s)},o?c({},f,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:c({},f,null==a?void 0:a.exit)})}}},l=s.forwardRef(((e,n)=>{var{unmountOnExit:t,in:i,reverse:u=!0,className:l,offsetX:d=0,offsetY:v=8,transition:m,transitionEnd:p,delay:x}=e,h=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"]),y=!t||i&&t,E=i||t?"enter":"exit",g={offsetX:d,offsetY:v,reverse:u,transition:m,transitionEnd:p,delay:x};return s.createElement(a.M,{custom:g},y&&s.createElement(o.E.div,c({ref:n,className:(0,r.cx)("chakra-offset-slide",l),custom:g},f,{animate:E},h)))}));i.Ts&&(l.displayName="SlideFade")},4722:function(e,n,t){"use strict";t.d(n,{YI:function(){return a},R:function(){return o},p$:function(){return s}});var r=t(3808);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var o={enter:{duration:.2,ease:a.easeOut},exit:{duration:.1,ease:a.easeIn}},s={enter:(e,n)=>i({},e,{delay:(0,r.hj)(n)?n:null==n?void 0:n.enter}),exit:(e,n)=>i({},e,{delay:(0,r.hj)(n)?n:null==n?void 0:n.exit})}},3869:function(e,n,t){"use strict";t.d(n,{M:function(){return m}});var r=t(1439),i=t(7294),a=t(6717);var o=t(8626),s=t(5930),u=0;function c(){var e=u;return u++,e}var f=function(e){var n=e.children,t=e.initial,r=e.isPresent,a=e.onExitComplete,u=e.custom,f=e.presenceAffectsLayout,d=(0,s.h)(l),v=(0,s.h)(c),m=(0,i.useMemo)((function(){return{id:v,initial:t,isPresent:r,custom:u,onExitComplete:function(e){d.set(e,!0);var n=!0;d.forEach((function(e){e||(n=!1)})),n&&(null===a||void 0===a||a())},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),f?void 0:[r]);return(0,i.useMemo)((function(){d.forEach((function(e,n){return d.set(n,!1)}))}),[r]),i.useEffect((function(){!r&&!d.size&&(null===a||void 0===a||a())}),[r]),i.createElement(o.O.Provider,{value:m},n)};function l(){return new Map}var d=t(9870);function v(e){return e.key||""}var m=function(e){var n=e.children,t=e.custom,o=e.initial,s=void 0===o||o,u=e.onExitComplete,c=e.exitBeforeEnter,l=e.presenceAffectsLayout,m=void 0===l||l,p=function(){var e=(0,i.useRef)(!1),n=(0,r.CR)((0,i.useState)(0),2),t=n[0],o=n[1];return(0,a.z)((function(){return e.current=!0})),(0,i.useCallback)((function(){!e.current&&o(t+1)}),[t])}(),x=(0,i.useContext)(d.WH);(0,d.Md)(x)&&(p=x.forceUpdate);var h=(0,i.useRef)(!0),y=function(e){var n=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&n.push(e)})),n}(n),E=(0,i.useRef)(y),g=(0,i.useRef)(new Map).current,j=(0,i.useRef)(new Set).current;if(function(e,n){e.forEach((function(e){var t=v(e);n.set(t,e)}))}(y,g),h.current)return h.current=!1,i.createElement(i.Fragment,null,y.map((function(e){return i.createElement(f,{key:v(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:m},e)})));for(var O=(0,r.ev)([],(0,r.CR)(y)),R=E.current.map(v),k=y.map(v),b=R.length,w=0;w<b;w++){var N=R[w];-1===k.indexOf(N)?j.add(N):j.delete(N)}return c&&j.size&&(O=[]),j.forEach((function(e){if(-1===k.indexOf(e)){var n=g.get(e);if(n){var r=R.indexOf(e);O.splice(r,0,i.createElement(f,{key:v(n),isPresent:!1,onExitComplete:function(){g.delete(e),j.delete(e);var n=E.current.findIndex((function(n){return n.key===e}));E.current.splice(n,1),j.size||(E.current=y,p(),u&&u())},custom:t,presenceAffectsLayout:m},n))}}})),O=O.map((function(e){var n=e.key;return j.has(n)?e:i.createElement(f,{key:v(e),isPresent:!0,presenceAffectsLayout:m},e)})),E.current=O,i.createElement(i.Fragment,null,j.size?O:O.map((function(e){return(0,i.cloneElement)(e)})))}},1080:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(9008),i=t(3850),a=t(454),o=t(8017),s=t(336),u=t(4003),c=t(5893),f=function(e){var n=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{children:"Blog Title | Muhammad Fahmi Rasyid"}),(0,c.jsx)("meta",{name:"description",content:"Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:url",content:"https://rasyid.dev/"}),(0,c.jsx)("meta",{property:"og:title",content:"Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"}),(0,c.jsx)("meta",{property:"og:image",content:"/meta-image.jpg"})]}),(0,c.jsxs)(i.W,{maxW:"container.lg",mt:10,children:[(0,c.jsxs)(a.R,{in:!0,offsetY:80,children:[(0,c.jsx)(o.xu,{children:(0,c.jsx)(s.X,{as:"h1",fontSize:{base:"28px",md:"32px",lg:"36px"},mb:4,children:"Blog"})}),(0,c.jsx)(u.i,{my:10})]}),(0,c.jsx)(a.R,{in:!0,offsetY:80,children:(0,c.jsx)("main",{children:n})})]})]})},l=t(1163),d=function(){var e=(0,l.useRouter)();return(0,c.jsx)(f,{children:JSON.stringify(e.query)})}},3214:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(1080)}])},9008:function(e,n,t){e.exports=t(639)}},function(e){e.O(0,[774,888,179],(function(){return n=3214,e(e.s=n);var n}));var n=e.O();_N_E=n}]);