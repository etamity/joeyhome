(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0YAS":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("pCvA"))},"1sfr":function(t,e,n){var r=n("n+gR"),o=n("xlif"),a=n("RRlb"),i=n("SCsb");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},"3rzM":function(t,e,n){var r=n("CPGu");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},"4ORC":function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},"A8a/":function(t,e,n){var r=n("oPnK"),o=500;t.exports=function(t){var e=r(t,(function(t){return n.size===o&&n.clear(),t})),n=e.cache;return e}},AWIN:function(t,e,n){"use strict";n.r(e);var r=n("mXGw"),o=n.n(r),a=n("ak/6"),i=n.n(a),s=n("tj/o"),c=n.n(s),u=n("5EGp"),p=n.n(u),f=n("AR4U"),l=n("pN+q"),h=n("bMH5"),v=n("9N19"),d=n.n(v),m=[o.a.createElement("script",{key:"redirect-portal",id:"redirect-portal"},'(function (root) {\n        "use strict";\n        var h = root ? root.location.hostname : "",\n        p = root ? root.location.protocol : "";\n        if ("http:" === p && !(/^(localhost|127.0.0.1)/).test(h)) {\n          root.location.protocol = "https:";\n        }\n      }("undefined" !== typeof window ? window : this));'),o.a.createElement("script",{key:"mcjs",id:"mcjs"},'!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/ec8a4c79b5067303895f955a3/1b416ff0883bdee60e019deff.js");')];n.d(e,"pageQuery",(function(){return x}));var y=function(t){var e=t.siteMetadata,n=t.location,r=t.featuredImage;return o.a.createElement("header",{className:"site-header outer "+(r?"":"no-cover")},r&&o.a.createElement(p.a,{className:"featured-image",fluid:r.fluid}),o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"site-header-content"},o.a.createElement("h1",{className:"site-title"},o.a.createElement("img",{className:"site-logo",src:d.a,alt:e.title}),e.title),o.a.createElement("h2",{className:"site-description"},e.description)),o.a.createElement(h.a,{location:n})))},_=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=i()(this,"props.data.site.siteMetadata.title"),e=i()(this,"props.data.site.siteMetadata.config.postsPerPage"),n=i()(this,"props.data.site.siteMetadata.description"),r=i()(this,"props.data.allMdx.edges"),a=i()(this,"props.data.featuredImage.edges[0].node.childImageSharp"),s=this.props.location;return o.a.createElement(f.a,{location:this.props.location},o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t+" - "+n,bodyAttributes:{class:"home-template"}},m),o.a.createElement(y,{siteMetadata:this.props.data.site.siteMetadata,featuredImage:a,location:s}),o.a.createElement(l.a,{posts:r,postsPerPage:e}))},r}(o.a.Component),x=(e.default=_,"1244942689")},Avsm:function(t,e,n){var r=n("fJPI");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},BQYA:function(t,e,n){var r=n("JFQE").Symbol;t.exports=r},CIK1:function(t,e,n){var r=n("w3Vv")(n("JFQE"),"Map");t.exports=r},CPGu:function(t,e,n){var r=n("4ORC");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},CuSU:function(t,e,n){var r=n("w3Vv")(Object,"create");t.exports=r},"D+pN":function(t,e,n){var r=n("BQYA"),o=n("xTzl"),a=n("awt2"),i="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:i:c&&c in Object(t)?o(t):a(t)}},Dj9j:function(t,e,n){var r=n("CuSU"),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===o?void 0:n}return a.call(e,t)?e[t]:void 0}},Eodt:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},F5a4:function(t,e,n){var r=n("Avsm");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},JFQE:function(t,e,n){var r=n("0YAS"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},JVhy:function(t,e,n){var r=n("CuSU"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},Ky8z:function(t,e,n){var r=n("D+pN"),o=n("ziZL"),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==a}},OGUG:function(t,e,n){var r=n("Avsm");t.exports=function(t){return r(this,t).has(t)}},Ptpp:function(t,e,n){var r=n("CPGu");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},Q9gb:function(t,e,n){var r=n("wqR7"),o=n("Eodt"),a=n("Dj9j"),i=n("JVhy"),s=n("mrWT");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},"RMq+":function(t,e,n){var r=n("1sfr"),o=n("TKpo");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},RRlb:function(t,e,n){n("Z8gF");var r=n("A8a/"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},SCsb:function(t,e,n){var r=n("y8Tg");t.exports=function(t){return null==t?"":r(t)}},TKpo:function(t,e,n){var r=n("Ky8z"),o=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},TYxv:function(t,e,n){var r=n("Q9gb"),o=n("iFfx"),a=n("CIK1");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},XTHG:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},Xfgp:function(t,e,n){var r=n("D+pN"),o=n("r3Ud"),a="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==i||e==s||e==a||e==c}},a1H5:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},"ak/6":function(t,e,n){var r=n("RMq+");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},anF3:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},awt2:function(t,e,n){n("4aJ6"),n("t91x");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},cmzz:function(t,e,n){var r=n("Avsm");t.exports=function(t){return r(this,t).get(t)}},cutL:function(t,e,n){n("W1QL"),n("K/PF"),n("t91x");var r,o=n("eP+j"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},"eP+j":function(t,e,n){var r=n("JFQE")["__core-js_shared__"];t.exports=r},fJPI:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},iFfx:function(t,e,n){var r=n("a1H5"),o=n("zXVt"),a=n("Ptpp"),i=n("waEW"),s=n("3rzM");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},iq23:function(t,e,n){var r=n("Avsm");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},m2zM:function(t,e,n){var r=n("TYxv"),o=n("iq23"),a=n("cmzz"),i=n("OGUG"),s=n("F5a4");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,t.exports=c},mrWT:function(t,e,n){var r=n("CuSU"),o="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?o:e,this}},"n+gR":function(t,e){var n=Array.isArray;t.exports=n},oPnK:function(t,e,n){var r=n("m2zM"),o="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},"pN+q":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("mXGw"),o=n.n(r),a=n("BbOa");var i=100,s=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).handleScroll=function(){n.ticking||(n.ticking=!0,requestAnimationFrame((function(){return n.update()})))},n.update=function(){document.documentElement.offsetHeight-(window.scrollY+window.innerHeight)<i&&n.setState({postsToShow:n.state.postsToShow+n.props.postsPerPage},(function(){n.state.postsToShow>=n.maxPages&&window.removeEventListener("scroll",n.handleScroll)})),n.ticking=!1},n.state={postsToShow:e.postsPerPage},n.maxPages=e.posts.length,n.ticking=!1,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=r.prototype;return s.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},s.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},s.render=function(){var t=this.props.posts;return o.a.createElement("main",{id:"site-main",className:"site-main outer"},o.a.createElement("div",{className:"inner"},o.a.createElement("div",{className:"post-feed"},t.slice(0,this.state.postsToShow).map((function(t,e){return o.a.createElement(a.a,{key:e,post:t.node})})))))},r}(o.a.Component)},r3Ud:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},r3Um:function(t,e,n){n("Z8gF"),n("J8hF"),n("4aJ6"),n("t91x");var r=n("Xfgp"),o=n("cutL"),a=n("r3Ud"),i=n("s6IH"),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?l:s).test(i(t))}},s6IH:function(t,e,n){n("4aJ6"),n("t91x");var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},w3Vv:function(t,e,n){var r=n("r3Um"),o=n("XTHG");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},waEW:function(t,e,n){var r=n("CPGu");t.exports=function(t){return r(this.__data__,t)>-1}},wqR7:function(t,e,n){var r=n("CuSU");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},xTzl:function(t,e,n){n("4aJ6"),n("t91x");var r=n("BQYA"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(c){}var o=i.call(t);return r&&(e?t[s]=n:delete t[s]),o}},xlif:function(t,e,n){var r=n("n+gR"),o=n("Ky8z"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},y8Tg:function(t,e,n){n("4aJ6"),n("t91x");var r=n("BQYA"),o=n("anF3"),a=n("n+gR"),i=n("Ky8z"),s=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-s?"-0":n}},zXVt:function(t,e,n){var r=n("CPGu"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},ziZL:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}}}]);
//# sourceMappingURL=component---gatsby-theme-ghost-casper-src-pages-index-js-bf9b5bd4c1d20eb8bdcc.js.map