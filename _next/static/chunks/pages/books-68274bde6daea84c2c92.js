(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{3697:function(e,t,i){"use strict";i.d(t,{A:function(){return c},f:function(){return d}});var r=i(63),n=i(3105),o=i(4461),a=i(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}var c=(0,r.G)(((e,t)=>{var{isExternal:i,target:r,rel:c,className:d}=e,u=l(e,["isExternal","target","rel","className"]);return a.createElement(n.m$.a,s({},u,{ref:t,className:(0,o.cx)("chakra-linkbox__overlay",d),rel:i?"noopener noreferrer":c,target:i?"_blank":r,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),d=(0,r.G)(((e,t)=>{var{className:i}=e,r=l(e,["className"]);return a.createElement(n.m$.div,s({ref:t,position:"relative"},r,{className:(0,o.cx)("chakra-linkbox",i),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))}))},9917:function(e,t,i){"use strict";var r=i(3848),n=i(3115);t.default=function(e){var t=e.src,i=e.sizes,n=e.unoptimized,l=void 0!==n&&n,d=e.priority,u=void 0!==d&&d,h=e.loading,g=e.lazyBoundary,b=void 0===g?"200px":g,y=e.className,v=e.quality,x=e.width,j=e.height,S=e.objectFit,A=e.objectPosition,z=e.onLoadingComplete,_=e.loader,E=void 0===_?O:_,P=e.placeholder,I=void 0===P?"empty":P,D=e.blurDataURL,N=function(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),R=i?"responsive":"intrinsic";"layout"in N&&(N.layout&&(R=N.layout),delete N.layout);var L="";if(function(e){return"object"===typeof e&&(p(e)||function(e){return void 0!==e.src}(e))}(t)){var C=p(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(D=D||C.blurDataURL,L=C.src,(!R||"fill"!==R)&&(j=j||C.height,x=x||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:L;var M=k(x),q=k(j),W=k(v),B=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,B=!1);m.has(t)&&(B=!1);0;var Z,U,F,H=c.useIntersection({rootMargin:b,disabled:!B}),T=r(H,2),V=T[0],X=T[1],G=!B||X,$={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:A},J="blur"===I?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:A||"0% 0%"}:{};if("fill"===R)Z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof M&&"undefined"!==typeof q){var Y=q/M,Q=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===R?(Z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===R?(Z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},U={boxSizing:"border-box",display:"block",maxWidth:"100%"},F='<svg width="'.concat(M,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(Z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:q})}else 0;var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&(K=w({src:t,unoptimized:l,layout:R,width:M,quality:W,sizes:i,loader:E}));var ee=t;return o.default.createElement("div",{style:Z},U?o.default.createElement("div",{style:U},F?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(F))}):null):null,o.default.createElement("img",Object.assign({},N,K,{decoding:"async","data-nimg":R,className:y,ref:function(e){V(e),function(e,t,i,r,n){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),m.add(t),n){var i=e.naturalWidth,o=e.naturalHeight;n({naturalWidth:i,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ee,0,I,z)},style:f({},$,J)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},N,w({src:t,unoptimized:l,layout:R,width:M,quality:W,sizes:i,loader:E}),{decoding:"async","data-nimg":R,style:$,className:y,loading:h||"lazy"}))),u?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var o=u(i(7294)),a=u(i(639)),s=i(8997),l=i(5809),c=i(7426);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){d(e,t,i[t])}))}return e}var m=new Set;var h=new Map([["default",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}],["imgix",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality,o=new URL("".concat(t).concat(S(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),n&&a.set("q",n.toString());return o.href}],["cloudinary",function(e){var t=e.root,i=e.src,r=e.width,n=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(n||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(i))}],["akamai",function(e){var t=e.root,i=e.src,r=e.width;return"".concat(t).concat(S(i),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(e){return void 0!==e.default}var g={deviceSizes:[1920,1500,1e3,500,300],imageSizes:[],path:"/_next/image/",loader:"cloudinary"}||l.imageConfigDefault,b=g.deviceSizes,y=g.imageSizes,v=g.loader,x=g.path,j=(g.domains,[].concat(n(b),n(y)));function w(e){var t=e.src,i=e.unoptimized,r=e.layout,o=e.width,a=e.quality,s=e.sizes,l=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(i);r)a.push(parseInt(r[2]));if(a.length){var s=.01*Math.min.apply(Math,a);return{widths:j.filter((function(e){return e>=b[0]*s})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:n(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(o,r,s),d=c.widths,u=c.kind,f=d.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:d.map((function(e,i){return"".concat(l({src:t,quality:a,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:l({src:t,quality:a,width:d[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=h.get(v);if(t)return t(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function S(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},6064:function(e,t,i){"use strict";var r=i(8017),n=i(980),o=i(4115),a=i(1871),s=i(7554),l=i(5893);t.Z=function(e){var t=e.message,i=void 0===t?"Ohh! Such an empty place \ud83d\udc0b":t,c=e.type,d="empty"===(void 0===c?"empty":c)?a.MDs:a.LL$;return(0,l.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:(0,l.jsxs)(r.xu,{mt:10,d:"flex",alignItems:"center",borderColor:(0,n.useColorModeValue)("gray.100","gray.700"),borderWidth:"1px",p:4,borderRadius:"lg",children:[(0,l.jsx)(d,{style:{color:"#718096"}}),(0,l.jsx)(o.x,{color:"gray.500",fontSize:"lg",ml:2,children:i})]})})}},7572:function(e,t,i){"use strict";var r=i(2809),n=i(219),o=i(980),a=i(4115),s=i(5893),l=["children"];function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.Z=function(e){var t=e.children,i=(0,n.Z)(e,l),r=(0,o.useColorModeValue)("gray.600","gray.400");return(0,s.jsx)(a.x,d(d({color:r},i),{},{children:t}))}},621:function(e,t,i){"use strict";var r=i(5893);t.Z=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:"Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://rasyid.dev/"}),(0,r.jsx)("meta",{property:"og:title",content:"Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"}),(0,r.jsx)("meta",{property:"og:image",content:"/meta-image.jpg"})]})}},4740:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return j},default:function(){return w}});var r=i(3850),n=i(454),o=i(8017),a=i(336),s=i(4003),l=i(7572),c=i(9008),d=i(980),u=i(3697),f=i(5528),m=i(4115),h=(0,i(9867).I)({d:"M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",displayName:"StarIcon"}),p=i(7554),g=i(5675),b=i(5893),y=function(e){var t=e.book;return(0,b.jsx)(p.E.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4},children:(0,b.jsx)(u.f,{as:"article",children:(0,b.jsx)(o.xu,{w:"100%",p:4,mb:5,d:"inline-block",borderColor:(0,d.useColorModeValue)("gray.200","gray.700"),borderRadius:5,borderWidth:"1px",transition:".5s",cursor:"pointer",role:"group",_hover:{borderColor:"blue.300"},children:(0,b.jsxs)(o.xu,{d:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",children:[(0,b.jsx)(o.xu,{position:"relative",width:"100%",height:"400px",mb:4,children:(0,b.jsx)(g.default,{src:null===t||void 0===t?void 0:t.cover[0].url,layout:"fill",objectFit:"cover",quality:100,alt:null===t||void 0===t?void 0:t.name})}),(0,b.jsxs)(u.A,{href:null===t||void 0===t?void 0:t.url,isExternal:!0,children:[(0,b.jsx)(a.X,{as:"h6",size:"md",children:null===t||void 0===t?void 0:t.name}),(0,b.jsx)(l.Z,{mt:1,fontSize:"sm",children:null===t||void 0===t?void 0:t.note})]}),(0,b.jsxs)(f.Vp,{mt:5,textTransform:"uppercase",bg:"transparent",children:[Array(5).fill("").map((function(e,i){return(0,b.jsx)(h,{color:i<(null===t||void 0===t?void 0:t.rating)?"teal.500":"gray.300"},i)})),(0,b.jsx)(m.x,{ml:2,color:"gray.500",children:null===t||void 0===t?void 0:t.rating})]})]})})})})},v=i(6064),x=i(621),j=!0,w=function(e){var t=e.books;return(0,b.jsxs)("div",{children:[(0,b.jsxs)(c.default,{children:[(0,b.jsx)("title",{children:"Books | Muhammad Fahmi Rasyid"}),(0,b.jsx)(x.Z,{})]}),(0,b.jsxs)(r.W,{maxW:"container.lg",mt:10,children:[(0,b.jsxs)(n.R,{in:!0,offsetY:80,children:[(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(a.X,{as:"h1",fontSize:{base:"24px",md:"30px",lg:"36px"},mb:4,children:"Books"}),(0,b.jsx)(l.Z,{fontSize:"xl",lineHeight:1.6,children:"A list of my favorite development books."})]}),(0,b.jsx)(s.i,{my:10})]}),(0,b.jsx)(n.R,{in:!0,offsetY:80,delay:.2,children:0===(null===t||void 0===t?void 0:t.length)?(0,b.jsx)(v.Z,{}):(0,b.jsx)(o.xu,{w:"100%",mt:10,mx:"auto",sx:{columnCount:[1,2,3],columnGap:"20px"},children:null===t||void 0===t?void 0:t.map((function(e){return(0,b.jsx)(y,{book:e.fields},e.fields.name)}))})}),(0,b.jsx)(v.Z,{message:"This just a small list of the book I like, but there's plenty of good books out there!",type:"info"})]})]})}},3034:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books",function(){return i(4740)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,t,i){e.exports=i(9917)}},function(e){e.O(0,[712,774,888,179],(function(){return t=3034,e(e.s=t);var t}));var t=e.O();_N_E=t}]);