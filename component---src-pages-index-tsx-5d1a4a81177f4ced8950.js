(self.webpackChunksollos_blog=self.webpackChunksollos_blog||[]).push([[691],{7228:function(t){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n},t.exports.__esModule=!0,t.exports.default=t.exports},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,r,e){var n=e(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9713:function(t){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3884:function(t){t.exports=function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},3038:function(t,r,e){var n=e(2858),o=e(3884),a=e(379),i=e(521);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,r,e){var n=e(3646),o=e(6860),a=e(379),i=e(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,r,e){var n=e(7228);t.exports=function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},7091:function(t){"use strict";var r="%[a-f0-9]{2}",e=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function o(t,r){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],o(e),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var r=t.match(e),n=1;n<r.length;n++)r=(t=o(r,n).join("")).match(e);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(r){var i=a(o[0]);i!==o[0]&&(e[o[0]]=i)}o=n.exec(t)}e["%C2"]="�";for(var u=Object.keys(e),c=0;c<u.length;c++){var l=u[c];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,r){for(var e={},n=Object.keys(t),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==r.indexOf(i):r(i,u,t))&&(e[i]=u)}return e}},2203:function(t,r,e){"use strict";var n=e(9713),o=e(3038),a=e(319);function i(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw a}}}}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=e(8936),l=e(7091),s=e(4734),f=e(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,r){return r.encode?r.strict?c(t):encodeURIComponent(t):t}function m(t,r){return r.decode?l(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,r){return Number(t)-Number(r)})).map((function(r){return t[r]})):t}function v(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function x(t){var r=(t=v(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function b(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,r){d((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"colon-list-separator":return function(t,e,n){r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"==typeof e&&e.includes(t.arrayFormatSeparator),a="string"==typeof e&&!o&&m(e,t).includes(t.arrayFormatSeparator);e=a?m(e,t):e;var i=o||a?e.split(t.arrayFormatSeparator).map((function(r){return m(r,t)})):null===e?e:m(e,t);n[r]=i};case"bracket-separator":return function(r,e,n){var o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(t.arrayFormatSeparator).map((function(r){return m(r,t)}));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a}else n[r]=e?m(e,t):e};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var c=a.value;if(""!==c){var l=s(r.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?g:m(g,r),e(m(p,r),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var v=0,x=Object.keys(n);v<x.length;v++){var h=x[v],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],r)}else n[h]=b(w,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(t,r){var e=n[r];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?t[r]=y(e):t[r]=e,t}),Object.create(null))}r.extract=x,r.parse=h,r.stringify=function(t,r){if(!t)return"";d((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&null==t[e]||r.skipEmptyString&&""===t[e]},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[g(r,t),"[",o,"]"].join("")]:[[g(r,t),"[",g(o,t),"]=",g(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[g(r,t),"[]"].join("")]:[[g(r,t),"[]=",g(n,t)].join("")])}};case"colon-list-separator":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[g(r,t),":list="].join("")]:[[g(r,t),":list=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===t.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(e,t),r,g(o,t)].join("")]:[[n,g(o,t)].join(t.arrayFormatSeparator)])}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[g(r,t)]:[[g(r,t),"=",g(n,t)].join("")])}}}}(r),o={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];e(c)||(o[c]=t[c])}var l=Object.keys(o);return!1!==r.sort&&l.sort(r.sort),l.map((function(e){var o=t[e];return void 0===o?"":null===o?g(e,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?g(e,r)+"[]":o.reduce(n(e),[]).join("&"):g(e,r)+"="+g(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=s(t,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(x(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign(n({encode:!0,strict:!0},p,!0),e);var o=v(t.url).split("?")[0]||"",a=r.extract(t.url),i=r.parse(a,{sort:!1}),u=Object.assign(i,t.query),c=r.stringify(u,e);c&&(c="?".concat(c));var l=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(l="#".concat(e[p]?g(t.fragmentIdentifier,e):t.fragmentIdentifier)),"".concat(o).concat(c).concat(l)},r.pick=function(t,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=r.parseUrl(t,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:f(u,e),fragmentIdentifier:c},o)},r.exclude=function(t,e,n){var o=Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)};return r.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,r){if("string"!=typeof t||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},8393:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return M}});var n=e(7462),o=e(9821),a=e(6771),i=e(1597),u=e(1793),c=e(3431),l=function(t){var r=t.selectedCategory,e=t.categoryList;return(0,c.tZ)(f,null,Object.entries(e).map((function(t){var e=t[0],n=t[1];return(0,c.tZ)(s,{key:e,to:"/?category="+e,active:e===r},"#",e,"(",n,")")})))},s=(0,a.Z)(i.rU,{shouldForwardProp:function(t){return"active"!==t},target:"e152egxe1"})("margin-right:20px;padding:5px 0;font-size:",u.l$.large,";font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}",u.Pr.mobile,"{font-size:",u.l$.medium,";}"),f=(0,a.Z)("div",{target:"e152egxe0"})("display:flex;flex-wrap:wrap;width:",u.NO.contentWidth,";margin:100px auto 0;",u.Pr.mobile,"{width:100%;margin-top:50px;padding:0 20px;}"),p=e(8945),d="120px",g="80px",m=function(t){var r=t.profileImage;return(0,c.tZ)(y,{image:r,alt:"프로필 사진"})},y=(0,a.Z)(p.G,{target:"e1lf18vu0"})("width:",d,";height:",d,";margin-bottom:30px;border-radius:50%;",u.Pr.mobile,"{width:",g,";height:",g,";}"),v=function(t){var r=t.profileImage;return(0,c.tZ)(x,null,(0,c.tZ)(b,null,(0,c.tZ)(m,{profileImage:r}),(0,c.tZ)("div",null,(0,c.tZ)(h,null,"안녕하세요!"),(0,c.tZ)(w,null,"블로그 준비중"))))},x=(0,a.Z)("div",{target:"e19c2buw3"})("background-image:linear-gradient(\n    60deg,\n    ",u.r$.backgroundDark," 0%,\n    ",u.r$.backgroundLight," 100%\n  );color:",u.r$.white,";"),b=(0,a.Z)("header",{target:"e19c2buw2"})("display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:",u.NO.contentWidth,";height:",u.NO.headerHeight,";margin:0 auto;padding:0 1.8rem;",u.Pr.mobile,"{width:100%;height:300px;padding:0 20px;}"),h=(0,a.Z)("div",{target:"e19c2buw1"})("font-size:",u.l$.subTitle,";font-weight:400;",u.Pr.mobile,"{font-size:",u.l$.medium,";}"),w=(0,a.Z)("div",{target:"e19c2buw0"})("margin-top:5px;font-size:",u.l$.title,";font-weight:700;",u.Pr.mobile,"{font-size:",u.l$.smallTitle,";}"),k=e(7294);var j="All";var Z=function(t){var r=t.title,e=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,i=t.link;return(0,c.tZ)(_,{to:i},(0,c.tZ)($,{image:a,alt:"포스트 이미지"}),(0,c.tZ)(C,null,(0,c.tZ)(I,null,r),(0,c.tZ)(S,null,e),(0,c.tZ)(O,null,n.map((function(t){return(0,c.tZ)(A,{key:t},t)}))),(0,c.tZ)(F,null,o)))},I=(0,a.Z)("div",{target:"e14ts4i47"})("display:flex;overflow:hidden;margin-bottom:4px;font-size:",u.l$.subTitle,";font-weight:700;",(0,u.Sf)(),";"),S=(0,a.Z)("div",{target:"e14ts4i46"})("font-size:",u.l$.small,";font-weight:400;opacity:0.5;"),O=(0,a.Z)("div",{target:"e14ts4i45"})({name:"1jhtbzb",styles:"display:flex;flex-wrap:wrap;margin:10px -6px"}),A=(0,a.Z)("div",{target:"e14ts4i44"})("margin:2px 6px;padding:2px 6px;border-radius:4px;background:",u.r$.black,";font-size:",u.l$.small,";font-weight:700;color:",u.r$.white,";"),F=(0,a.Z)("div",{target:"e14ts4i43"})("display:flex;overflow:hidden;margin-top:auto;font-size:",u.l$.medium,";opacity:0.8;",(0,u.Sf)(),";"),C=(0,a.Z)("div",{target:"e14ts4i42"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),$=(0,a.Z)(p.G,{target:"e14ts4i41"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),_=(0,a.Z)(i.rU,{target:"e14ts4i40"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),E=function(t){var r=t.selectedCategory,e=t.posts,o=(0,k.useMemo)((function(){return e.filter((function(t){var e=t.node.frontmatter.categories;return r===j||e.includes(r)}))}),[r]),a=function(t){var r=t.allPostCount,e=void 0===r?0:r,n=t.perPageCount,o=void 0===n?5:n,a=t.resetDeps,i=(0,k.useRef)(null),u=(0,k.useRef)(null),c=(0,k.useState)(1),l=c[0],s=c[1];return(0,k.useEffect)((function(){u.current=new IntersectionObserver((function(t,r){var e=t[0];e.isIntersecting&&(s((function(t){return t+1})),r.unobserve(e.target))}))}),[]),(0,k.useEffect)((function(){s(1)}),[a]),(0,k.useEffect)((function(){var t;if(i.current&&i.current.children.length&&!(l*o>=e)){var r=i.current.children,n=r[r.length-1];return null===(t=u.current)||void 0===t||t.observe(n),function(){var t;return null===(t=u.current)||void 0===t?void 0:t.disconnect()}}}),[e,l]),{target:i,currentItemCount:l*o}}({allPostCount:o.length,resetDeps:r}),i=a.target,u=a.currentItemCount,l=o.slice(0,u);return(0,c.tZ)(N,{ref:i},l.map((function(t){var r=t.node,e=r.id,o=r.frontmatter,a=r.fields.slug;return(0,c.tZ)(Z,(0,n.Z)({},o,{key:e,link:a}))})))},N=(0,a.Z)("div",{target:"en0fu7c0"})("display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:",u.NO.contentWidth,";margin:0 auto;padding:50px 0 100px;",u.Pr.mobile,"{grid-template-columns:1fr;width:100%;padding:50px 20px;}"),U=e(2203),M=function(t){var r=t.location.search,e=t.data,a=e.site.siteMetadata,i=e.allMarkdownRemark.edges,u=e.file,s=u.childImageSharp.gatsbyImageData,f=u.publicURL,p=U.parse(r),d="string"==typeof p.category&&p.category?p.category:j,g=(0,k.useMemo)((function(){var t;return i.reduce((function(t,r){return r.node.frontmatter.categories.forEach((function(r){void 0===t[r]?t[r]=1:t[r]++})),t.All++,t}),((t={}).All=0,t))}),[]);return(0,c.tZ)(o.Z,(0,n.Z)({},a,{url:a.stieUrl,image:f}),(0,c.tZ)(v,{profileImage:s}),(0,c.tZ)(l,{selectedCategory:d,categoryList:g}),(0,c.tZ)(E,{selectedCategory:d,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5d1a4a81177f4ced8950.js.map