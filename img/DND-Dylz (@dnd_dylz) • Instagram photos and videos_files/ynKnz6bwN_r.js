;/*FB_PKG_DELIM*/

__d("CometColumn.react",["BaseView.react","CometColumnContext","CometColumnItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useMemo,l={expanding:{flexBasis:"x1l7klhg",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",minHeight:"x2lwn1j",$$css:!0},inner:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minHeight:"x2lwn1j",$$css:!0},root:{boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",flexShrink:"x2lah0s",maxWidth:"x193iq5w",$$css:!0}},m={0:{paddingTop:"xexx8yu",$$css:!0},4:{paddingTop:"x1iorvi4",$$css:!0},8:{paddingTop:"x1y1aw1k",$$css:!0},12:{paddingTop:"xz9dl7a",$$css:!0},16:{paddingTop:"xyamay9",$$css:!0},20:{paddingTop:"x1cnzs8",$$css:!0}},n={4:{paddingTop:"x1iorvi4",paddingBottom:"xjkvuk6",$$css:!0},8:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0},12:{paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",$$css:!0},16:{paddingTop:"xyamay9",paddingBottom:"x1l90r2v",$$css:!0},20:{paddingTop:"x1cnzs8",paddingBottom:"xx6bls6",$$css:!0}},o={bottom:{justifyContent:"x13a6bvl",$$css:!0},center:{justifyContent:"xl56j7k",$$css:!0},"space-between":{justifyContent:"x1qughib",$$css:!0}};e=i.forwardRef(a);function a(a,b){var d=a.align,e=d===void 0?null:d;d=a.children;var f=a.expanding;f=f===void 0?!1:f;var g=a.hasDividers,h=g===void 0?!1:g;g=a.paddingHorizontal;var p=g===void 0?null:g;g=a.paddingTop;var q=a.paddingVertical;q=q===void 0?0:q;var r=a.spacing,s=r===void 0?null:r;r=a.verticalAlign;r=r===void 0?"top":r;var t=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["align","children","expanding","hasDividers","paddingHorizontal","paddingTop","paddingVertical","spacing","verticalAlign","xstyle"]);var u=j(c("CometColumnContext")),v=k(function(){return{align:e,hasDividers:h,paddingHorizontal:p,spacing:s}},[e,h,p,s]);a=i.jsx(c("BaseView.react"),babelHelpers["extends"]({},a,{ref:b,xstyle:[l.root,f===!0&&l.expanding,n[q],g!=null&&m[g],t],children:i.jsx(c("BaseView.react"),{xstyle:[l.inner,r!=="top"&&o[r]],children:i.jsx(c("CometColumnContext").Provider,{value:v,children:d})})}));if(u!=null){return i.jsx(c("CometColumnItem.react"),{expanding:(b=f)!=null?b:void 0,children:a})}return a}a.displayName=a.name+" [from "+f.id+"]";d=e;g["default"]=d}),98);
__d("CometRouteProductAttributionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("IncludeCommentWithAttachment.relayprovider",["qex"],(function(a,b,c,d,e,f,g){"use strict";a={get:function(){return c("qex")._("1299")!==!0}};g["default"]=a}),98);
__d("areEqual",[],(function(a,b,c,d,e,f){var g=[],h=[];function a(a,b){var c=g.length?g.pop():[],d=h.length?h.pop():[];a=i(a,b,c,d);c.length=0;d.length=0;g.push(c);h.push(d);return a}function i(a,b,c,d){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return!1;if(typeof a!=="object"||typeof b!=="object")return!1;var e=Object.prototype.toString,f=e.call(a);if(f!=e.call(b))return!1;switch(f){case"[object String]":return a==String(b);case"[object Number]":return isNaN(a)||isNaN(b)?!1:a==Number(b);case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}e=c.length;while(e--)if(c[e]==a)return d[e]==b;c.push(a);d.push(b);try{e=0;if(f==="[object Array]"){e=a.length;if(e!==b.length)return!1;while(e--)if(!i(a[e],b[e],c,d))return!1}else if(a instanceof Set){if(a.size!==b.size)return!1;f=Array.from(b.values());for(var e=a,g=Array.isArray(e),h=0,e=g?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(g){if(h>=e.length)break;j=e[h++]}else{h=e.next();if(h.done)break;j=h.value}j=j;var k=!1;for(var l=0;l<f.length;l++){var m=f[l];if(i(j,m,c,d)){k=!0;f.splice(l,1);break}}if(k===!1)return!1}return!0}else if(a instanceof Map){if(a.size!==b.size)return!1;m=Array.from(b);for(j=a,l=Array.isArray(j),k=0,j=l?j:j[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(l){if(k>=j.length)break;h=j[k++]}else{k=j.next();if(k.done)break;h=k.value}g=h;e=!1;for(f=0;f<m.length;f++){h=m[f];if(i(g,h,c,d)){e=!0;m.splice(f,1);break}}if(e===!1)return!1}return!0}else{if(a.constructor!==b.constructor)return!1;if(Object.prototype.hasOwnProperty.call(a,"valueOf")&&Object.prototype.hasOwnProperty.call(b,"valueOf"))return a.valueOf()==b.valueOf();h=Object.keys(a);if(h.length!=Object.keys(b).length)return!1;for(f=0;f<h.length;f++){if(h[f]==="_owner")continue;if(!Object.prototype.hasOwnProperty.call(b,h[f])||!i(a[h[f]],b[h[f]],c,d))return!1}}return!0}finally{c.pop(),d.pop()}}f["default"]=a}),66);
__d("hashString",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=0;for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);b=(b<<5)-b+d;b|=0}return b}f["default"]=a}),66);
__d("isWorkDotMetaDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)work\\.meta\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);