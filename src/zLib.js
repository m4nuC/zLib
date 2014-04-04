(function(){function h(a){return function(){return this[a]}}function k(a){return function(){return a}}var l=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function m(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return n.apply(null,arguments)}function da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function r(a){var b=s;function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return n.apply(null,c)}return n(this,a)};function t(a,b,c){this.a=a;this.b=b||1;this.d=c||1};var u,ea,fa,ga;function ha(){return l.navigator?l.navigator.userAgent:null}ga=fa=ea=u=!1;var w;if(w=ha()){var ia=l.navigator;u=0==w.lastIndexOf("Opera",0);ea=!u&&(-1!=w.indexOf("MSIE")||-1!=w.indexOf("Trident"));fa=!u&&-1!=w.indexOf("WebKit");ga=!u&&!fa&&!ea&&"Gecko"==ia.product}var y=ea,ja=ga,ka=fa;function la(){var a=l.document;return a?a.documentMode:void 0}var ma;
n:{var na="",oa;if(u&&l.opera)var pa=l.opera.version,na="function"==typeof pa?pa():pa;else if(ja?oa=/rv\:([^\);]+)(\)|;)/:y?oa=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ka&&(oa=/WebKit\/(\S+)/),oa)var qa=oa.exec(ha()),na=qa?qa[1]:"";if(y){var ra=la();if(ra>parseFloat(na)){ma=String(ra);break n}}ma=na}var sa=ma,ta={};
function ua(a){if(!ta[a]){for(var b=0,c=String(sa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",p=d[f]||"",q=RegExp("(\\d*)(\\D*)","g"),x=RegExp("(\\d*)(\\D*)","g");do{var v=q.exec(g)||["","",""],J=x.exec(p)||["","",""];if(0==v[0].length&&0==J[0].length)break;b=((0==v[1].length?0:parseInt(v[1],10))<(0==J[1].length?0:parseInt(J[1],10))?-1:(0==v[1].length?0:parseInt(v[1],10))>
(0==J[1].length?0:parseInt(J[1],10))?1:0)||((0==v[2].length)<(0==J[2].length)?-1:(0==v[2].length)>(0==J[2].length)?1:0)||(v[2]<J[2]?-1:v[2]>J[2]?1:0)}while(0==b)}ta[a]=0<=b}}var va=l.document,wa=va&&y?la()||("CSS1Compat"==va.compatMode?parseInt(sa,10):5):void 0;var z=y&&!(y&&9<=wa),xa=y&&!(y&&8<=wa);function A(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function ya(a,b){var c=xa&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new A(b,a,b.nodeName,c)};function za(a){this.b=a;this.a=0}function Aa(a){a=a.match(Ba);for(var b=0;b<a.length;b++)Ca.test(a[b])&&a.splice(b,1);return new za(a)}var Ba=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Ca=/^\s/;function B(a,b){return a.b[a.a+(b||0)]}function C(a){return a.b[a.a++]};var D=Array.prototype,Da=D.indexOf?function(a,b,c){return D.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=D.forEach?function(a,b,c){D.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=D.filter?function(a,b,c){return D.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=m(a)?
a.split(""):a,p=0;p<d;p++)if(p in g){var q=g[p];b.call(c,q,p,a)&&(e[f++]=q)}return e},F=D.reduce?function(a,b,c,d){d&&(b=n(b,d));return D.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;E(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Fa=D.some?function(a,b,c){return D.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Ga(a,b){var c;n:{c=a.length;for(var d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break n}c=-1}return 0>c?null:m(a)?a.charAt(c):a[c]}function Ha(a){return D.concat.apply(D,arguments)}function Ia(a,b,c){return 2>=arguments.length?D.slice.call(a,b):D.slice.call(a,b,c)};!ja&&!y||y&&y&&9<=wa||ja&&ua("1.9.1");y&&ua("9");function Ja(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ka(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(y&&!(y&&9<=wa)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?La(a,b):!c&&Ja(e,b)?-1*Ma(a,b):!d&&Ja(f,a)?Ma(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:
a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(l.Range.START_TO_END,d)}function Ma(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return La(d,a)}function La(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function G(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(z&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),z&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function H(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}xa&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function Na(a,b,c,d,e){return(z?Oa:Pa).call(null,a,b,m(c)?c:null,m(d)?d:null,e||new I)}
function Oa(a,b,c,d,e){if(a instanceof K||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Qa(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],p=0;b=f[p++];)H(b,c,d)&&g.push(b);f=g}for(p=0;b=f[p++];)"*"==a&&"!"==b.tagName||L(e,b);return e}Ra(a,b,c,d,e);return e}
function Pa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!y?(b=b.getElementsByName(d),E(b,function(b){a.a(b)&&L(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),E(b,function(b){b.className==d&&a.a(b)&&L(e,b)})):a instanceof M?Ra(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.d()),E(b,function(a){H(a,c,d)&&L(e,a)}));return e}
function Sa(a,b,c,d,e){var f;if((a instanceof K||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Qa(a);if("*"!=g&&(f=Ea(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=Ea(f,function(a){return H(a,c,d)}));E(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||L(e,a)});return e}return Ta(a,b,c,d,e)}function Ta(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&L(e,b);return e}
function Ra(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&L(e,b),Ra(a,b,c,d,e)}function Qa(a){if(a instanceof M){if(8==a.b)return"!";if(null===a.b)return"*"}return a.d()};function I(){this.b=this.a=null;this.i=0}function Ua(a){this.b=a;this.a=this.d=null}function Va(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;)c.b==d.b||c.b instanceof A&&d.b instanceof A&&c.b.a==d.b.a?(f=c,c=c.a,d=d.a):0<Ka(c.b,d.b)?(f=d,d=d.a):(f=c,c=c.a),(f.d=e)?e.a=f:a.a=f,e=f,g++;for(f=c||d;f;)f.d=e,e=e.a=f,g++,f=f.a;a.b=e;a.i=g;return a}function Wa(a,b){var c=new Ua(b);c.a=a.a;a.b?a.a.d=c:a.a=a.b=c;a.a=c;a.i++}
function L(a,b){var c=new Ua(b);c.d=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.i++}function Xa(a){return(a=a.a)?a.b:null}function Ya(a){return(a=Xa(a))?G(a):""}function N(a,b){return new Za(a,!!b)}function Za(a,b){this.d=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function O(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.d:b.a;return c.b};function $a(a){switch(a.nodeType){case 1:return da(ab,a);case 9:return $a(a.documentElement);case 2:return a.ownerElement?$a(a.ownerElement):bb;case 11:case 10:case 6:case 12:return bb;default:return a.parentNode?$a(a.parentNode):bb}}function bb(){return null}function ab(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?ab(a.parentNode,b):null};function s(a){this.g=a;this.b=this.f=!1;this.d=null}function P(a){return"\n  "+a.toString().split("\n").join("\n  ")}function cb(a,b){a.f=b}function db(a,b){a.b=b}function Q(a,b){var c=a.a(b);return c instanceof I?+Ya(c):+c}function R(a,b){var c=a.a(b);return c instanceof I?Ya(c):""+c}function S(a,b){var c=a.a(b);return c instanceof I?!!c.i:!!c};function eb(a,b,c){s.call(this,a.g);this.c=a;this.e=b;this.j=c;this.f=b.f||c.f;this.b=b.b||c.b;this.c==fb&&(c.b||c.f||4==c.g||0==c.g||!b.d?b.b||b.f||4==b.g||0==b.g||!c.d||(this.d={name:c.d.name,l:b}):this.d={name:b.d.name,l:c})}r(eb);
function T(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof I&&c instanceof I){e=N(b);for(d=O(e);d;d=O(e))for(b=N(c),f=O(b);f;f=O(b))if(a(G(d),G(f)))return!0;return!1}if(b instanceof I||c instanceof I){b instanceof I?e=b:(e=c,c=b);e=N(e);b=typeof c;for(d=O(e);d;d=O(e)){switch(b){case "number":d=+G(d);break;case "boolean":d=!!G(d);break;case "string":d=G(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}eb.prototype.a=function(a){return this.c.k(this.e,this.j,a)};eb.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+P(this.e);return a+=P(this.j)};function gb(a,b,c,d){this.a=a;this.p=b;this.g=c;this.k=d}gb.prototype.toString=h("a");var hb={};function U(a,b,c,d){if(hb.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new gb(a,b,c,d);return hb[a.toString()]=a}
U("div",6,1,function(a,b,c){return Q(a,c)/Q(b,c)});U("mod",6,1,function(a,b,c){return Q(a,c)%Q(b,c)});U("*",6,1,function(a,b,c){return Q(a,c)*Q(b,c)});U("+",5,1,function(a,b,c){return Q(a,c)+Q(b,c)});U("-",5,1,function(a,b,c){return Q(a,c)-Q(b,c)});U("<",4,2,function(a,b,c){return T(function(a,b){return a<b},a,b,c)});U(">",4,2,function(a,b,c){return T(function(a,b){return a>b},a,b,c)});U("<=",4,2,function(a,b,c){return T(function(a,b){return a<=b},a,b,c)});
U(">=",4,2,function(a,b,c){return T(function(a,b){return a>=b},a,b,c)});var fb=U("=",3,2,function(a,b,c){return T(function(a,b){return a==b},a,b,c,!0)});U("!=",3,2,function(a,b,c){return T(function(a,b){return a!=b},a,b,c,!0)});U("and",2,2,function(a,b,c){return S(a,c)&&S(b,c)});U("or",1,2,function(a,b,c){return S(a,c)||S(b,c)});function ib(a,b){if(b.a.length&&4!=a.g)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");s.call(this,a.g);this.c=a;this.e=b;this.f=a.f;this.b=a.b}r(ib);ib.prototype.a=function(a){a=this.c.a(a);return jb(this.e,a)};ib.prototype.toString=function(){var a;a="Filter:"+P(this.c);return a+=P(this.e)};function kb(a,b){if(b.length<a.o)throw Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given");if(null!==a.n&&b.length>a.n)throw Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given");a.s&&E(b,function(b,d){if(4!=b.g)throw Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b);});s.call(this,a.g);this.e=a;this.c=b;cb(this,a.f||Fa(b,function(a){return a.f}));db(this,a.r&&!b.length||a.q&&!!b.length||Fa(b,function(a){return a.b}))}r(kb);
kb.prototype.a=function(a){return this.e.k.apply(null,Ha(a,this.c))};kb.prototype.toString=function(){var a="Function: "+this.e;if(this.c.length)var b=F(this.c,function(a,b){return a+P(b)},"Arguments:"),a=a+P(b);return a};function lb(a,b,c,d,e,f,g,p,q){this.h=a;this.g=b;this.f=c;this.r=d;this.q=e;this.k=f;this.o=g;this.n=void 0!==p?p:g;this.s=!!q}lb.prototype.toString=h("h");var mb={};
function V(a,b,c,d,e,f,g,p){if(mb.hasOwnProperty(a))throw Error("Function already created: "+a+".");mb[a]=new lb(a,b,c,d,!1,e,f,g,p)}V("boolean",2,!1,!1,function(a,b){return S(b,a)},1);V("ceiling",1,!1,!1,function(a,b){return Math.ceil(Q(b,a))},1);V("concat",3,!1,!1,function(a,b){var c=Ia(arguments,1);return F(c,function(b,c){return b+R(c,a)},"")},2,null);V("contains",2,!1,!1,function(a,b,c){b=R(b,a);a=R(c,a);return-1!=b.indexOf(a)},2);V("count",1,!1,!1,function(a,b){return b.a(a).i},1,1,!0);
V("false",2,!1,!1,k(!1),0);V("floor",1,!1,!1,function(a,b){return Math.floor(Q(b,a))},1);V("id",4,!1,!1,function(a,b){function c(a){if(z){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return Ga(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=R(b,a).split(/\s+/),f=[];E(d,function(a){a=c(a);!a||0<=Da(f,a)||f.push(a)});f.sort(Ka);var g=new I;E(f,function(a){L(g,a)});return g},1);V("lang",2,!1,!1,k(!1),1);
V("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.d},0);V("local-name",3,!1,!0,function(a,b){var c=b?Xa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);V("name",3,!1,!0,function(a,b){var c=b?Xa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);V("namespace-uri",3,!0,!1,k(""),0,1,!0);V("normalize-space",3,!1,!0,function(a,b){return(b?R(b,a):G(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
V("not",2,!1,!1,function(a,b){return!S(b,a)},1);V("number",1,!1,!0,function(a,b){return b?Q(b,a):+G(a.a)},0,1);V("position",1,!0,!1,function(a){return a.b},0);V("round",1,!1,!1,function(a,b){return Math.round(Q(b,a))},1);V("starts-with",2,!1,!1,function(a,b,c){b=R(b,a);a=R(c,a);return 0==b.lastIndexOf(a,0)},2);V("string",3,!1,!0,function(a,b){return b?R(b,a):G(a.a)},0,1);V("string-length",1,!1,!0,function(a,b){return(b?R(b,a):G(a.a)).length},0,1);
V("substring",3,!1,!1,function(a,b,c,d){c=Q(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?Q(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=R(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);V("substring-after",3,!1,!1,function(a,b,c){b=R(b,a);a=R(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
V("substring-before",3,!1,!1,function(a,b,c){b=R(b,a);a=R(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);V("sum",1,!1,!1,function(a,b){for(var c=N(b.a(a)),d=0,e=O(c);e;e=O(c))d+=+G(e);return d},1,1,!0);V("translate",3,!1,!1,function(a,b,c,d){b=R(b,a);c=R(c,a);var e=R(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);V("true",2,!1,!1,k(!0),0);function M(a,b){this.e=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function nb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}M.prototype.a=function(a){return null===this.b||this.b==a.nodeType};M.prototype.d=h("e");M.prototype.toString=function(){var a="Kind Test: "+this.e;null===this.c||(a+=P(this.c));return a};function ob(a){s.call(this,3);this.c=a.substring(1,a.length-1)}r(ob);ob.prototype.a=h("c");ob.prototype.toString=function(){return"Literal: "+this.c};function K(a,b){this.h=a.toLowerCase();this.c=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}K.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.h&&this.h!=a.nodeName.toLowerCase()?!1:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};K.prototype.d=h("h");K.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.h};function pb(a){s.call(this,1);this.c=a}r(pb);pb.prototype.a=h("c");pb.prototype.toString=function(){return"Number: "+this.c};function qb(a,b){s.call(this,a.g);this.e=a;this.c=b;this.f=a.f;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.m||c.c!=rb||(c=c.j,"*"!=c.d()&&(this.d={name:c.d(),l:null}))}}r(qb);function sb(){s.call(this,4)}r(sb);sb.prototype.a=function(a){var b=new I;a=a.a;9==a.nodeType?L(b,a):L(b,a.ownerDocument);return b};sb.prototype.toString=k("Root Helper Expression");function tb(){s.call(this,4)}r(tb);tb.prototype.a=function(a){var b=new I;L(b,a.a);return b};tb.prototype.toString=k("Context Helper Expression");
qb.prototype.a=function(a){var b=this.e.a(a);if(!(b instanceof I))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.i;c++){var e=a[c],f=N(b,e.c.a),g;if(e.f||e.c!=ub)if(e.f||e.c!=vb)for(g=O(f),b=e.a(new t(g));null!=(g=O(f));)g=e.a(new t(g)),b=Va(b,g);else g=O(f),b=e.a(new t(g));else{for(g=O(f);(b=O(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new t(g))}}return b};
qb.prototype.toString=function(){var a;a="Path Expression:"+P(this.e);if(this.c.length){var b=F(this.c,function(a,b){return a+P(b)},"Steps:");a+=P(b)}return a};function wb(a,b){this.a=a;this.b=!!b}
function jb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=N(b),f=b.i,g,p=0;g=O(e);p++){var q=a.b?f-p:p+1;g=d.a(new t(g,q,f));if("number"==typeof g)q=q==g;else if("string"==typeof g||"boolean"==typeof g)q=!!g;else if(g instanceof I)q=0<g.i;else throw Error("Predicate.evaluate returned an unexpected type.");if(!q){q=e;g=q.d;var x=q.a;if(!x)throw Error("Next must be called at least once before remove.");var v=x.d,x=x.a;v?v.a=x:g.a=x;x?x.d=v:g.b=v;g.i--;q.a=null}}return b}
wb.prototype.toString=function(){return F(this.a,function(a,b){return a+P(b)},"Predicates:")};function W(a,b,c,d){s.call(this,4);this.c=a;this.j=b;this.e=c||new wb([]);this.m=!!d;b=0<this.e.a.length?this.e.a[0].d:null;a.b&&b&&(a=b.name,a=z?a.toLowerCase():a,this.d={name:a,l:b.l});n:{a=this.e;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.f||1==c.g||0==c.g){a=!0;break n}a=!1}this.f=a}r(W);
W.prototype.a=function(a){var b=a.a,c=null,c=this.d,d=null,e=null,f=0;c&&(d=c.name,e=c.l?R(c.l,a):null,f=1);if(this.m)if(this.f||this.c!=xb)if(a=N((new W(yb,new M("node"))).a(a)),b=O(a))for(c=this.k(b,d,e,f);null!=(b=O(a));)c=Va(c,this.k(b,d,e,f));else c=new I;else c=Na(this.j,b,d,e),c=jb(this.e,c,f);else c=this.k(a.a,d,e,f);return c};W.prototype.k=function(a,b,c,d){a=this.c.d(this.j,a,b,c);return a=jb(this.e,a,d)};
W.prototype.toString=function(){var a;a="Step:"+P("Operator: "+(this.m?"//":"/"));this.c.h&&(a+=P("Axis: "+this.c));a+=P(this.j);if(this.e.a.length){var b=F(this.e.a,function(a,b){return a+P(b)},"Predicates:");a+=P(b)}return a};function zb(a,b,c,d){this.h=a;this.d=b;this.a=c;this.b=d}zb.prototype.toString=h("h");var Ab={};function X(a,b,c,d){if(Ab.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new zb(a,b,c,!!d);return Ab[a]=b}
X("ancestor",function(a,b){for(var c=new I,d=b;d=d.parentNode;)a.a(d)&&Wa(c,d);return c},!0);X("ancestor-or-self",function(a,b){var c=new I,d=b;do a.a(d)&&Wa(c,d);while(d=d.parentNode);return c},!0);
var rb=X("attribute",function(a,b){var c=new I,d=a.d();if("style"==d&&b.style&&z)return L(c,new A(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof M&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)z?f.nodeValue&&L(c,ya(b,f)):L(c,f);else(f=e.getNamedItem(d))&&(z?f.nodeValue&&L(c,ya(b,f)):L(c,f));return c},!1),xb=X("child",function(a,b,c,d,e){return(z?Sa:Ta).call(null,a,b,m(c)?c:null,m(d)?d:null,e||new I)},!1,!0);X("descendant",Na,!1,!0);
var yb=X("descendant-or-self",function(a,b,c,d){var e=new I;H(b,c,d)&&a.a(b)&&L(e,b);return Na(a,b,c,d,e)},!1,!0),ub=X("following",function(a,b,c,d){var e=new I;do for(var f=b;f=f.nextSibling;)H(f,c,d)&&a.a(f)&&L(e,f),e=Na(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);X("following-sibling",function(a,b){for(var c=new I,d=b;d=d.nextSibling;)a.a(d)&&L(c,d);return c},!1);X("namespace",function(){return new I},!1);
var Bb=X("parent",function(a,b){var c=new I;if(9==b.nodeType)return c;if(2==b.nodeType)return L(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&L(c,d);return c},!1),vb=X("preceding",function(a,b,c,d){var e=new I,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,p=f.length;g<p;g++){var q=[];for(b=f[g];b=b.previousSibling;)q.unshift(b);for(var x=0,v=q.length;x<v;x++)b=q[x],H(b,c,d)&&a.a(b)&&L(e,b),e=Na(a,b,c,d,e)}return e},!0,!0);
X("preceding-sibling",function(a,b){for(var c=new I,d=b;d=d.previousSibling;)a.a(d)&&Wa(c,d);return c},!0);var Cb=X("self",function(a,b){var c=new I;a.a(b)&&L(c,b);return c},!1);function Db(a){s.call(this,1);this.c=a;this.f=a.f;this.b=a.b}r(Db);Db.prototype.a=function(a){return-Q(this.c,a)};Db.prototype.toString=function(){return"Unary Expression: -"+P(this.c)};function Eb(a){s.call(this,4);this.c=a;cb(this,Fa(this.c,function(a){return a.f}));db(this,Fa(this.c,function(a){return a.b}))}r(Eb);Eb.prototype.a=function(a){var b=new I;E(this.c,function(c){c=c.a(a);if(!(c instanceof I))throw Error("Path expression must evaluate to NodeSet.");b=Va(b,c)});return b};Eb.prototype.toString=function(){return F(this.c,function(a,b){return a+P(b)},"Union Expression:")};function Fb(a,b){this.a=a;this.b=b}function Gb(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=Hb(a);var d=C(a.a);if(!d)break;var e=(d=hb[d]||null)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new eb(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new eb(c.pop(),c.pop(),b);return b}function Y(a,b){if(a.a.b.length<=a.a.a)throw Error(b);}function Ib(a,b){var c=C(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Jb(a){a=C(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Kb(a){a=C(a.a);if(2>a.length)throw Error("Unclosed literal string");return new ob(a)}function Lb(a){var b=C(a.a),c=b.indexOf(":");if(-1==c)return new K(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new K(b,a)}
function Mb(a){var b,c=[],d;if("/"==B(a.a)||"//"==B(a.a)){b=C(a.a);d=B(a.a);if("/"==b&&(a.a.b.length<=a.a.a||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new sb;d=new sb;Y(a,"Missing next location step.");b=Nb(a,b);c.push(b)}else{n:{b=B(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":C(a.a);b=Gb(a);Y(a,'unclosed "("');Ib(a,")");break;case '"':case "'":b=Kb(a);break;default:if(isNaN(+b))if(!nb(b)&&/(?![0-9])[\w]/.test(d)&&
"("==B(a.a,1)){b=C(a.a);b=mb[b]||null;C(a.a);for(d=[];")"!=B(a.a);){Y(a,"Missing function argument list.");d.push(Gb(a));if(","!=B(a.a))break;C(a.a)}Y(a,"Unclosed function argument list.");Jb(a);b=new kb(b,d)}else{b=null;break n}else b=new pb(+C(a.a))}"["==B(a.a)&&(d=new wb(Ob(a)),b=new ib(b,d))}if(b)if("/"==B(a.a)||"//"==B(a.a))d=b;else return b;else b=Nb(a,"/"),d=new tb,c.push(b)}for(;"/"==B(a.a)||"//"==B(a.a);)b=C(a.a),Y(a,"Missing next location step."),b=Nb(a,b),c.push(b);return new qb(d,c)}
function Nb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==B(a.a))return d=new W(Cb,new M("node")),C(a.a),d;if(".."==B(a.a))return d=new W(Bb,new M("node")),C(a.a),d;var f;if("@"==B(a.a))f=rb,C(a.a),Y(a,"Missing attribute name");else if("::"==B(a.a,1)){if(!/(?![0-9])[\w]/.test(B(a.a).charAt(0)))throw Error("Bad token: "+C(a.a));c=C(a.a);f=Ab[c]||null;if(!f)throw Error("No axis with name: "+c);C(a.a);Y(a,"Missing node name")}else f=xb;c=B(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==
B(a.a,1)){if(!nb(c))throw Error("Invalid node type: "+c);c=C(a.a);if(!nb(c))throw Error("Invalid type name: "+c);Ib(a,"(");Y(a,"Bad nodetype");e=B(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Kb(a);Y(a,"Bad nodetype");Jb(a);c=new M(c,g)}else c=Lb(a);else if("*"==c)c=Lb(a);else throw Error("Bad token: "+C(a.a));e=new wb(Ob(a),f.a);return d||new W(f,c,e,"//"==b)}
function Ob(a){for(var b=[];"["==B(a.a);){C(a.a);Y(a,"Missing predicate expression.");var c=Gb(a);b.push(c);Y(a,"Unclosed predicate expression.");Ib(a,"]")}return b}function Hb(a){if("-"==B(a.a))return C(a.a),new Db(Hb(a));var b=Mb(a);if("|"!=B(a.a))a=b;else{for(b=[b];"|"==C(a.a);)Y(a,"Missing next union location path."),b.push(Mb(a));a.a.a--;a=new Eb(b)}return a};function Pb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=Aa(a);if(c.b.length<=c.a)throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=n(b.lookupNamespaceURI,b)):b=k(null);var d=Gb(new Fb(c,b));if(!(c.b.length<=c.a))throw Error("Bad token: "+C(c));this.evaluate=function(a,b){var c=d.a(new t(a));return new Z(c,b)}}
function Z(a,b){if(0==b)if(a instanceof I)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof I))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof I?Ya(a):""+a;break;case 1:this.numberValue=a instanceof I?+Ya(a):+a;break;case 3:this.booleanValue=a instanceof I?0<a.i:!!a;break;case 4:case 5:case 6:case 7:var d=
N(a);c=[];for(var e=O(d);e;e=O(d))c.push(e instanceof A?e.a:e);this.snapshotLength=a.i;this.invalidIteratorState=!1;break;case 8:case 9:d=Xa(a);this.singleNodeValue=d instanceof A?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Z.ANY_TYPE=0;Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Qb(a){this.lookupNamespaceURI=$a(a)};function Rb(a){a=a||l;var b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Pb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new Pb(a,b)},b.createNSResolver=function(a){return new Qb(a)})}var Sb=["wgxpath","install"],$=l;Sb[0]in $||!$.execScript||$.execScript("var "+Sb[0]);for(var Tb;Sb.length&&(Tb=Sb.shift());)Sb.length||void 0===Rb?$=$[Tb]?$[Tb]:$[Tb]={}:$[Tb]=Rb;})()
wgxpath.install();



(function( window, doc, undefined ) {

	/** PRIVATE STUFF **/
	var EMPTY_STR = /^\s*$/g;
    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod( o, p ) {
        var t = typeof o[p];
        return t == "function" || (!!(t == "object" && o[p])) || t == "unknown";
    }

    function isHostObject( o, p ) {
        return !!(typeof o[p] == "object" && o[p]);
    }

    function isHostProperty( o, p ) {
        return typeof o[p] != "undefined";
    }

    var smoothScrollTo = (function () {
        var timer, start, factor;

        return function (target, duration) {
            var offset = window.pageYOffset,
            delta  = target - window.pageYOffset; // Y-offset difference
            duration = Math.abs(delta) * 0.15;              // default 1 sec animation
            start = Date.now();                       // get start time
            factor = 0;

            if( timer ) {
                clearInterval(timer); // stop any running animation
            }

            function step() {
                var y;
                factor = (Date.now() - start) / duration; // get interpolation factor
                if( factor >= 1 ) {
                    clearInterval(timer); // stop animation
                    factor = 1;           // clip to max 1.0
                }
                y = factor * delta + offset;
                window.scrollBy(0, y - window.pageYOffset);
            }

            timer = setInterval(step, 10);
            return timer; // return the interval timer, so you can clear it elsewhere
        };
    }());

    // Based on http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
    //
    function PSub( object ) {
        // Storage for topics that can be broadcast
        // or listened to
        var topics = {};

        // An topic identifier
        var subUid = -1;

        // Publish or broadcast events of interest
        // with a specific topic name and arguments
        // such as the data to pass along
        object.trigger = function( topic, args ) {

            if ( !topics[topic] ) {
                return false;
            }

            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func.call( subscribers[len].context, args );
            }

            return this;
        };

        // Subscribe to events of interest
        // with a specific topic name and a
        // callback function, to be executed
        // when the topic/event is observed
        object.listenTo = function( topic, func, context ) {

            // set the context to this by default
            context = context || this;

            if (!topics[topic]) {
                topics[topic] = [];
            }

            var token = ( ++subUid ).toString();
            topics[topic].push({
                token: token,
                func: func,
                context: context
            });
            return token;
        };

        // Unsubscribe from a specific
        // topic, based on a tokenized reference
        // to the subscription
        object.topListening= function( token ) {
            for ( var m in topics ) {
                if ( topics[m] ) {
                    for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                        if ( topics[m][i].token === token ) {
                            topics[m].splice( i, 1 );
                            return token;
                        }
                    }
                }
            }
            return this;
        };
    }


    // Fixed length queue, http://www.bennadel.com/blog/2308-Creating-A-Fixed-Length-Queue-In-JavaScript-Using-Arrays.htm
    // Create a constructor for the fixed-length queue. This is
    // really more of a FACTORY than a construtor since an
    // entirely tangential object is returned.
    function FixedQueue( size, initialValues ){

        // If there are no initial arguments, default it to
        // an empty value so we can call the constructor in
        // a uniform way.
        initialValues = (initialValues || []);

        // Create the fixed queue array value.
        var queue = Array.apply( null, initialValues );

        // Store the fixed size in the queue.
        queue.fixedSize = size;

        // Add the class methods to the queue. Some of these have
        // to override the native Array methods in order to make
        // sure the queue lenght is maintained.
        queue.push = FixedQueue.push;
        queue.splice = FixedQueue.splice;
        queue.unshift = FixedQueue.unshift;

        // Trim any initial excess from the queue.
        FixedQueue.trimTail.call( queue );

        // Return the new queue.
        return( queue );

    }

    // I trim the queue down to the appropriate size, removing
    // items from the beginning of the internal array.
    FixedQueue.trimHead = function(){

        // Check to see if any trimming needs to be performed.
        if (this.length <= this.fixedSize){

            // No trimming, return out.
            return;

        }

        // Trim whatever is beyond the fixed size.
        Array.prototype.splice.call(
            this,
            0,
            (this.length - this.fixedSize)
        );

    };


    // I trim the queue down to the appropriate size, removing
    // items from the end of the internal array.
    FixedQueue.trimTail = function(){

        // Check to see if any trimming needs to be performed.
        if (this.length <= this.fixedSize){

            // No trimming, return out.
            return;

        }

        // Trim whatever is beyond the fixed size.
        Array.prototype.splice.call(
            this,
            this.fixedSize,
            (this.length - this.fixedSize)
        );

    };


    // I synthesize wrapper methods that call the native Array
    // methods followed by a trimming method.
    FixedQueue.wrapMethod = function( methodName, trimMethod ){

        // Create a wrapper that calls the given method.
        var wrapper = function(){

            // Get the native Array method.
            var method = Array.prototype[ methodName ];

            // Call the native method first.
            var result = method.apply( this, arguments );

            // Trim the queue now that it's been augmented.
            trimMethod.call( this );

            // Return the original value.
            return( result );

        };
        // Return the wrapper method.
        return( wrapper );
    };

    // Wrap the native methods.
    FixedQueue.push = FixedQueue.wrapMethod(
        "push",
        FixedQueue.trimHead
    );

    FixedQueue.splice = FixedQueue.wrapMethod(
        "splice",
        FixedQueue.trimTail
    );

    FixedQueue.unshift = FixedQueue.wrapMethod(
        "unshift",
        FixedQueue.trimTail
    );

	/** CONSTRUCTOR **/
	var z = function ( node ) {
		if ( this === window ) {
			return new z( node );
		}
		if (  typeof node === "string" ) {
			this.el = z.statics.selector( node );
		} else if ( typeof node === "object" && node.nodeType !== "undefined" ) {
			this.el = node;
		}  else {
			throw new Error( "Argument is of wrong type" );
		}
	};

	/** Configuration setter **/
	z.config = {
		set: function( attr, value ) {
			z.prototype.config[attr] = value;
		}
	};

	// Config Statics
	z.prototype.config = {
		highlightClass : "highlighted"
	};


	/** STATICS **/
	z.statics = z.fn = {

        hasProp: isHostProperty,

        hasMethod: isHostMethod,

        hasObj: isHostObject,

        getScrollTop: function() {
            var scrollTop;
            if( typeof(window.pageYOffset) == 'number' ) {
                // DOM compliant, IE9+
                scrollTop = window.pageYOffset;
            } else {
                // IE6-8 workaround
                if( document.body && document.body.scrollTop ) {
                    // IE quirks mode
                    scrollTop = document.body.scrollTop;
                } else if( document.documentElement && document.documentElement.scrollTop ) {
                    // IE6+ standards compliant mode
                    scrollTop = document.documentElement.scrollTop;
                }
            }
            return scrollTop;
        },

        getScrollLeft: function() {
            var scrollLeft;
            if( typeof(window.pageXOffset) == 'number' ) {
                // DOM compliant, IE9+
                scrollLeft = window.pageXOffset;
            }
            else {
                // IE6-8 workaround
                if( document.body && document.body.scrollLeft ) {
                    // IE quirks mode
                    scrollLeft = document.body.scrollLeft;
                }
                else if( document.documentElement && document.documentElement.scrollLeft ) {
                    // IE6+ standards compliant mode
                    scrollLeft = document.documentElement.scrollLeft;
                }
            }
            return scrollLeft;
        },

        getScrollPos: function() {
            return { top: z.statics.getScrollTop(), left: z.statics.getScrollLeft() }
        },

        getObjLength: function( obj ) {
            var key, count = 0;
            for( key in obj ) {
                if( obj.hasOwnProperty(key) ) {
                    count++;
                }
            }
            return count;
        },

		isEmptyTextNode: function ( node ) {
			return node.nodeType === 3 && node.nodeValue.match( EMPTY_STR );
		},

		isNotEmptyTextNode: function( node ) {
			return node.nodeType === 3 && ! node.nodeValue.match( EMPTY_STR );
		},

        throttle: function ( callback, delay, scope ) {
            delay = delay || 250;
            scope = scope || this;
            var last_exec = 0,
                timeout = null;
            return function () {
                var context = scope || this;
                var args = arguments,
                    elapsed = +new Date() - last_exec;

                if ( elapsed < delay ) {
                    // hold on to it
                    timeout && clearTimeout( timeout );
                    timeout = setTimeout(function () {
                        last_exec = +new Date;
                        callback.apply( context, args );
                    }, delay - elapsed );
                } else {
                    last_exec = +new Date;
                    callback.apply( context, args );
                }
            };
        },

		/*!
		* domready (c) Dustin Diaz 2012 - License MIT
		* (Edited to remove dynamic naming )
		* @todo make this lintable
		*/
		domReady: function (ready) {
			var fns = [],
				fn,
				f = false,
				testEl = doc.documentElement,
				hack = testEl.doScroll,
				domContentLoaded = 'DOMContentLoaded',
				addEventListener = 'addEventListener',
				onreadystatechange = 'onreadystatechange',
				readyState = 'readyState',
				loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/,
				loaded = loadedRgx.test(doc[readyState]);

			function flush(f) {
				loaded = 1;
				while (f = fns.shift()) f();
			}

			doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
				doc.removeEventListener(domContentLoaded, fn, f);
				flush();
			}, f);

			hack && doc.attachEvent(onreadystatechange, fn = function () {
				if (/^c/.test(doc[readyState])) {
					doc.detachEvent(onreadystatechange, fn);
					flush();
				}
			});

			return (ready = hack ?
				function (fn) {
					self != top ?
					loaded ? fn() : fns.push(fn) :
					function () {
						try {
							testEl.doScroll('left');
						} catch (e) {
							return setTimeout(function() { ready(fn) }, 50);
						}
						fn();
					}();
				} :
				function (fn) {
				loaded ? fn() : fns.push(fn);
			});
		}(),

        queue: function( maxSize, initalValues ) {
            initalValues = initalValues || [];
            return new FixedQueue (maxSize, initalValues );
        },

        pSuber: function( obj ) {
            return PSub( obj );
        },

		selector: function ( str ) {
			//str = z.statics.fulltrim( str );
			var firstChar = str.charAt( 0 ),
				idOrClass = str.slice( 1, str.length);
			if ( firstChar === "#" ) {
				return this.el = doc.getElementById( idOrClass );
			} else {
				return this.el = doc.getElementsByTagName( str )[0];
			}
		},

		addEvent: function() {
			if ( isHostMethod(window, "addEventListener") ) {
				return function( trg, evt, fn ) {
					trg.addEventListener( evt, fn, false );
				};
			} else if ( isHostMethod(window, "attachEvent") ) {
				return function( trg, evt, fn ) {
					trg.attachEvent( evt, function() {
						call( trg );
					}, false );
				};
			} else {
				throw new Error( 'This browser is not supported' );
			}
		}(),

		removeEvent: function() {
			if ( window.removeEventListener !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.removeEventListener( evt, fn, false );
				};
			} else if ( typeof window.detachEvent !== 'undefined' ) {
				return function( trg, evt, fn ) {
					trg.detachEvent( evt, fn, true);
				};
			} else {
				throw new Error( 'This browser is not supported' );
			}
		}(),

        triggerEvent: function( obj, evt ){
                var event = new Event( evt , {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
                obj.dispatchEvent( event );
        },

		getSiblings: function( trg ) {
			var parent = trg.parentNode || parent;
			var raw = parent.childNodes;
			var i = 0, lgth = raw.length, siblings = [];
			for ( ; i < lgth; i ++ ) {
				var node = raw[i];
				// making sure that empty space and line break text nodes are excluded
				if ( z.fn.isEmptyTextNode(node) ) continue;
				siblings.push( node );
			}
			return siblings;
		},

		trigger: function( trg, evtType ) {
			var event = new Event( evtType );
			trg.dispatchEvent( event );
		},

		/**
		 * Get Element Offset
		 * based on http://www.quirksmode.org/js/findpos.html
		 * @param  {[type]} trg [description]
		 * @return {[type]}     [description]
         *
		 */
		getOffset: function( trg ) {
			var curleft = 0;
			var curtop = 0;

			if (trg.offsetParent) {
				do {
					curleft += trg.offsetLeft;
					curtop += trg.offsetTop;
				} while (trg = trg.offsetParent);
			}
			return { top: curtop, left: curleft };
		},

		/**
		 * Get Node form a cursor position
		 * @param  {INT} x [description]
		 * @param {INT} y [description]
         * @return {IHTMLElement}
		 */
        getNodeFromPos: function( x, y ) {
            if ( isHostMethod(document, "elementFromPoint") ) {
                return document.elementFromPoint( x, y );
            } else {
				throw new Error( 'This browser is not supported' );
			}
        },

		/**
		 * Crockford's walk the DOM method modified so that a context is can be specified for the call bac
		 * @param  {[type]} node    [description]
		 * @param  {[type]} func    [description]
		 * @param  {[type]} context [description]
		 *
		 */
		walkTheDom: function walk( node, func, stopAt ) {
			func( node );
			walk.prototype.isStop = stopAt == node;
			node = node.firstChild;
			while ( node && ! walk.prototype.isStop ) {
				walk( node, func, stopAt );
				node = node.nextSibling;
			}
		}
	};


	/** PUBLIC API **/
	z.prototype.on = function( evt, fn ) {
		z.statics.addEvent( this.el, evt, fn );
		return this;
	};

	z.prototype.off = function( evt, fn ) {
		z.statics.removeEvent( this.el, evt, fn );
		return this;
	};

	z.prototype.trigger = function( evtType ) {
		z.statics.trigger( this.el, evtType );
		return this;
	};

	z.prototype.offset = function() {
		return z.statics.getOffset( this.el );
	};

    z.prototype.getNodeFromPos = function( xPos, yPos ) {
        return z.statics.getNodeFromPos( xPos, yPos);
    };

    z.prototype.trigger = function( evt ) {
        return z.statics.triggerEvent( this.el, evt);
    };

	/**
	 * [scrollTop description]
	 * @param  {[type]} top [description]
	 * @return {[type]}     [description]
	 * @todo  body.scrollTop is deprecated in strict mode. Please use 'documentElement.scrollTop' if in strict mode and 'body.scrollTop' only if in quirks mode.
	 */
	z.prototype.scrollTop = smoothScrollTo;

	z.prototype.scrollLeft = function( left ) {
		var hasScrollLeft = 'scrollLeft' in this.el;
		var startPos = hasScrollLeft ? this.el.scrollLeft : this.el.scrollX;
		if ( left === undefined ) return startPos;

		var fn = function() {
			return hasScrollLeft ?
				function( value ){ this.el.scrollLeft = value; } :
				function( value ){ this.el.scrollTo(value, 0); };
		}();
		fn.call( this, left );
		return this;
			// this.animateScroll( fn, startPos, top, 500);
	};

	/**
	 * xPath Utilities
	 */
	z.xPath = {
		getPath: function( node ) {
			var parent, siblings, xPath, i, lgth, ix = 0;

			if ( typeof node !== 'object' ) {
				throw new Error( 'This is not a valid target' );

			// @todo should make sure that the document only contain on of this ID before using it as base
			} else if ( node.hasOwnProperty('id') && node.id !== '' && typeof node.id !== 'undefined' ) {
				//return '*[@id=\\\"' + node.id + '\\\"]';
				return '*[@id="' + node.id + '"]';

			} else if (node === document.body ) {
				return node.nodeName;
			} else if ( node === document ) {
                return '';
            }


			siblings = z.statics.getSiblings( node );

			for ( i = 0, lgth = siblings.length; i < lgth; i++ ) {
				if ( siblings[i].nodeName === node.nodeName ) ix++;
				if ( siblings[i] === node ) {
					// If the node is text type we need to use the text function otherwise nodeName
					var path = node.nodeType === 3 ? 'text()' : node.nodeName;
					return this.getPath( node.parentNode ) + '/' + path + "[" + ix + "]" ;
				}
			}
		},

		getNodeFromXPath : function( path ) {
            if ( path.indexOf('HTML') > -1 ||  path === ""  ) {
            	return document.evaluate( "/" + path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            } else {
                return document.evaluate( "//" + path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            }
		}
	};

	/**
	 * Selection range
	 * @type {Object}
	 */

	// externalize these 2 function so that they are call with window as context
	function getSelection() {
		return window.getSelection();
	}

	function docSelection() {
		return doc.selection();
	}

	function docCreateRange() {
		if ( isHostMethod(doc, "createRange") ) {
			return doc.createRange();
		} else {
			throw new Error( "This browser does not seem to support document.createRange" );
		}
	}

	// externalize this function so that we can call() it later with z.selectionRange as context
	function selectionMethod() {
		if ( isHostMethod(window, "getSelection") ) {
			this.selectionType = 'win';
			return getSelection;
		} else if ( isHostObject(doc, "selection") ) {
			this.selectionType = 'doc';
			return docSelection;
		} else {
			throw new Error( "This browser does not seem to support user selection APIs" );
		}
	}


	function emptySelection() {
		if ( isHostMethod(window, "getSelection") ) {
			return window.getSelection().removeAllRanges()
		} else if ( isHostObject(doc, "selection") ) {
			return document.selection.empty();
		}
	}

	z.selectionRange = {
		// Used to store selection method type, values after init: win, doc
		selectionType: undefined,

		emptySelection: emptySelection,

		getRangeObj: function( selectionObj ) {
			var range;

			if ( ! selectionObj || ! isHostProperty(selectionObj, 'anchorNode') ) {
				throw new Error("The selection object passed to getRangeObj is not valid");
			}

			if ( this.selectionType === 'win' ) {
				range = selectionObj.getRangeAt( 0 );
			// Safari!
			} else {
				range = doc.createRange();
				range.setStart( selectionObj.anchorNode, selectionObj.anchorOffset );
				range.setEnd( selectionObj.focusNode, selectionObj.focusOffset );
			}
			return range;
		},

		getSerializedRange: function( range ) {
			var sNodeXPath, eNodeXPath, sOffset, eOffset;

			if ( ! range || ! isHostProperty(range, 'startContainer') ) {
				throw new Error( "The Range object passed to getSerializedRange is not valid" );
			}

			sNodeXPath = z.xPath.getPath( range.startContainer );
			sOffset    = range.startOffset;
			eNodeXPath = z.xPath.getPath( range.endContainer );
			eOffset    = range.endOffset;

			return {
				start : {
					elxPath : sNodeXPath,
					offset : sOffset
				},
				end : {
					elxPath : eNodeXPath,
					offset : eOffset
				}
			};
		},

		unserializeRange: function( serializedRange ) {
			var range = docCreateRange();
			var startNode = z.xPath.getNodeFromXPath( serializedRange.start.elxPath );
			var endNode = z.xPath.getNodeFromXPath( serializedRange.end.elxPath );
			range.setStart( startNode, serializedRange.start.offset );
			range.setEnd( endNode, serializedRange.end.offset );

			//console.log(range);
			return range;
		}
	};

	z.selectionRange.selectionMethod = selectionMethod.call( z.selectionRange );

	// Alias statics to fn
	z.fn = z.statics;

    // Right now only available via browserify
    if (typeof exports === 'object') {
        module.exports = z;
    } else {
        window.z = z;
    }

})( window, document );

