class w{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const G="https://unpkg.com/@workadventure/scripting-api-extra@1.4.8/dist";class re{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(G+"/configuration.html"+e)}async function oe(t,e){const n=await WA.room.getTiledMap(),r=new Map;return Y(n.layers,r,t,e),r}function Y(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(n&&o.name!==n||r&&!r.includes(a.name))continue;e.set(a.name,new re(a))}}else o.type==="group"&&Y(o.layers,e,n,r)}let x;async function P(){return x===void 0&&(x=ae()),x}async function ae(){return se(await WA.room.getTiledMap())}function se(t){const e=new Map;return J(t.layers,"",e),e}function J(t,e,n){for(const r of t)r.type==="group"?J(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function Q(){const t=await P(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ie(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,s),r=Math.max(r,s));return{top:n,left:e,right:o+1,bottom:r+1}}function F(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const s=ie(a);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var le=Object.prototype.toString,S=Array.isArray||function(e){return le.call(e)==="[object Array]"};function I(t){return typeof t=="function"}function ue(t){return S(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(t,e){return t!=null&&typeof t=="object"&&e in t}function ce(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var fe=RegExp.prototype.test;function pe(t,e){return fe.call(t,e)}var he=/\S/;function ge(t){return!pe(he,t)}var de={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ye(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return de[n]})}var be=/\s*/,me=/\s+/,N=/\s*=/,ve=/\s*\}/,Ae=/#|\^|\/|>|\{|&|=|!/;function we(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],s=!1,i=!1,l="",c=0;function p(){if(s&&!i)for(;a.length;)delete o[a.pop()];else a=[];s=!1,i=!1}var d,b,T;function L(v){if(typeof v=="string"&&(v=v.split(me,2)),!S(v)||v.length!==2)throw new Error("Invalid tags: "+v);d=new RegExp(V(v[0])+"\\s*"),b=new RegExp("\\s*"+V(v[1])),T=new RegExp("\\s*"+V("}"+v[1]))}L(e||g.tags);for(var f=new M(t),m,u,y,C,k,A;!f.eos();){if(m=f.pos,y=f.scanUntil(d),y)for(var R=0,ne=y.length;R<ne;++R)C=y.charAt(R),ge(C)?(a.push(o.length),l+=C):(i=!0,n=!0,l+=" "),o.push(["text",C,m,m+1]),m+=1,C===`
`&&(p(),l="",c=0,n=!1);if(!f.scan(d))break;if(s=!0,u=f.scan(Ae)||"name",f.scan(be),u==="="?(y=f.scanUntil(N),f.scan(N),f.scanUntil(b)):u==="{"?(y=f.scanUntil(T),f.scan(ve),f.scanUntil(b),u="&"):y=f.scanUntil(b),!f.scan(b))throw new Error("Unclosed tag at "+f.pos);if(u==">"?k=[u,y,m,f.pos,l,c,n]:k=[u,y,m,f.pos],c++,o.push(k),u==="#"||u==="^")r.push(k);else if(u==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+m);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+m)}else u==="name"||u==="{"||u==="&"?i=!0:u==="="&&L(y)}if(p(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+f.pos);return Se(We(o))}function We(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Se(t){for(var e=[],n=e,r=[],o,a,s=0,i=t.length;s<i;++s)switch(o=t[s],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function W(t,e){this.view=t,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,s,i,l=!1;o;){if(e.indexOf(".")>0)for(a=o.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=_(a,s[i])||ce(a,s[i])),a=a[s[i++]];else a=o.view[e],l=_(o.view,e);if(l){r=a;break}o=o.parent}n[e]=r}return I(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||g.tags).join(":"),a=typeof r<"u",s=a?r.get(o):void 0;return s==null&&(s=we(e,n),a&&r.set(o,s)),s};h.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),s=this.parse(e,a),i=n instanceof W?n:new W(n,void 0);return this.renderTokens(s,i,r,e,o)};h.prototype.renderTokens=function(e,n,r,o,a){for(var s="",i,l,c,p=0,d=e.length;p<d;++p)c=void 0,i=e[p],l=i[0],l==="#"?c=this.renderSection(i,n,r,o,a):l==="^"?c=this.renderInverted(i,n,r,o,a):l===">"?c=this.renderPartial(i,n,r,a):l==="&"?c=this.unescapedValue(i,n):l==="name"?c=this.escapedValue(i,n,a):l==="text"&&(c=this.rawValue(i)),c!==void 0&&(s+=c);return s};h.prototype.renderSection=function(e,n,r,o,a){var s=this,i="",l=n.lookup(e[1]);function c(b){return s.render(b,n,r,a)}if(l){if(S(l))for(var p=0,d=l.length;p<d;++p)i+=this.renderTokens(e[4],n.push(l[p]),r,o,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],n.push(l),r,o,a);else if(I(l)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(n.view,o.slice(e[3],e[5]),c),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],n,r,o,a);return i}};h.prototype.renderInverted=function(e,n,r,o,a){var s=n.lookup(e[1]);if(!s||S(s)&&s.length===0)return this.renderTokens(e[4],n,r,o,a)};h.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=o+a[s]);return a.join(`
`)};h.prototype.renderPartial=function(e,n,r,o){if(r){var a=this.getConfigTags(o),s=I(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],c=e[4],p=s;l==0&&c&&(p=this.indentPartial(s,c,i));var d=this.parse(p,a);return this.renderTokens(d,n,r,p,o)}}};h.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||g.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===g.escape?String(a):o(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){E.templateCache=t},get templateCache(){return E.templateCache}},E=new h;g.clearCache=function(){return E.clearCache()};g.parse=function(e,n){return E.parse(e,n)};g.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return E.render(e,n,r,o)};g.escape=ye;g.Scanner=M;g.Context=W;g.Writer=h;class Z{constructor(e,n){this.template=e,this.state=n,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(o)&&n.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function Le(){var t;const e=await Q();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new Z(o.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await z(n.name,o.name,s),a.onChange(async i=>{await z(n.name,o.name,i)})}}}async function Ce(){var t;const e=await P();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new Z(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();q(n,a.name,i),s.onChange(l=>{q(n,a.name,l)})}}}async function z(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function q(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}let j,D=0,O=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Ee(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=te(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Pe(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=te(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ee(t){return t.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(t){const e=ee(t),n=F(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(D-r,2)+Math.pow(O-o,2))}function Me(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ee(t):Pe(t),K(t)}),K(t)}function $(t,e,n,r){const o=t.name;let a,s,i=!1;const l=n.getString("tag");let c=!0;l&&!WA.player.tags.includes(l)&&(c=!1);const p=!!l;function d(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=n.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=n.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function T(){let u;if(t.type==="tilelayer")u=F(ee(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);u={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:u.right*32,y:u.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){s&&(WA.room.website.delete(s.name),s=void 0)}function f(){if(i=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(n.getString("code")||n.getString("codeVariable"))){T();return}c&&(WA.state[e.name]?d():b())}function m(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),L()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(m)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(m)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),s&&WA.state[e.name]===!0&&L(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Te(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-D,2)+Math.pow(t.y-O,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function ke(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Te(t)})}function H(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const a=n.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=n.name;WA.room.area.onEnter(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Be(t){t=t??G;const e=await oe();j=await P();for(const n of e.values())n.properties.get("door")&&Me(n),n.properties.get("bell")&&ke(n);for(const n of j.values()){const r=new w(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');$(n,s,r,t)}const a=r.getString("bellVariable");a&&n.type==="tilelayer"&&H(a,r,n)}for(const n of await Q()){const r=new w(n.properties),o=r.getString("doorVariable");if(o){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');$(n,s,r,t)}const a=r.getString("bellVariable");a&&H(a,r,n)}WA.player.onPlayerMove(n=>{D=n.x,O=n.y})}function Re(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");xe(n,e,r,o,a,s)}}function xe(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ve(){const t=await P();for(const e of t.values()){const n=new w(e.properties);Re(n,e.name)}}let X;async function je(t){const e=await WA.room.getTiledMap();t=t??G,X=await P();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new w(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of X.values()){const s=new w(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Ge(i.split(","),a.name,s)}}}function Ge(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=n.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=n.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ie(){return WA.onInit().then(()=>{Be().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ce().catch(t=>console.error(t)),Le().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let B;WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe(()=>{const r=new Date,o=r.getHours()+":"+r.getMinutes();B=WA.ui.openPopup("clockPopup","It's "+o,[])}),WA.room.area.onLeave("clock").subscribe(De);let t=await WA.room.website.get("billboard1");WA.room.onEnterLayer("billboard1-zone").subscribe(()=>{t.visible=!1,WA.room.hideLayer("portal-on"),WA.room.showLayer("portal-off")}),WA.room.onLeaveLayer("billboard1-zone").subscribe(()=>{t.visible=!0,WA.room.showLayer("portal-on"),WA.room.hideLayer("portal-off")});let e=await WA.room.website.get("billboard2");WA.room.onEnterLayer("billboard2-zone").subscribe(()=>{e.visible=!1,WA.room.hideLayer("portal-on-2"),WA.room.showLayer("portal-off-2")}),WA.room.onLeaveLayer("billboard2-zone").subscribe(()=>{e.visible=!0,WA.room.showLayer("portal-on-2"),WA.room.hideLayer("portal-off-2")});let n=await WA.room.website.get("billboard3");WA.room.onEnterLayer("billboard3-zone").subscribe(()=>{n.visible=!1,WA.room.hideLayer("portal-on-3"),WA.room.showLayer("portal-off-3")}),WA.room.onLeaveLayer("billboard3-zone").subscribe(()=>{n.visible=!0,WA.room.showLayer("portal-on-3"),WA.room.hideLayer("portal-off-3")}),Ie().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(t=>console.error(t));function De(){B!==void 0&&(B.close(),B=void 0)}
