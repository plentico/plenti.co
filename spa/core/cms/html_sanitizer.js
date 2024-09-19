import{SvelteComponent,init,safe_not_equal}from"../../web_modules/svelte/internal/index.mjs";const plaintextPaste=e=>{e.preventDefault();const t=e.clipboardData||window.clipboardData,n=t.getData("text/html")||t.getData("text"),s=HtmlSanitizer.SanitizeHtml(n);document.execCommand("insertHTML",!1,s)},HtmlSanitizer=typeof window=="undefined"?null:new function(){const e={A:!0,ABBR:!0,B:!0,BLOCKQUOTE:!0,BODY:!0,BR:!0,CENTER:!0,CODE:!0,DD:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FONT:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HR:!0,I:!0,IMG:!0,LABEL:!0,LI:!0,OL:!0,P:!0,PRE:!0,S:!0,STRIKE:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRONG:!0,SUB:!0,SUP:!0,TABLE:!0,TBODY:!0,TR:!0,TD:!0,TH:!0,THEAD:!0,UL:!0,U:!0,VIDEO:!0},t={STRIKE:"S"},n={FORM:!0,"GOOGLE-SHEETS-HTML-ORIGIN":!0,P:!0},s={align:!0,color:!0,controls:!0,height:!0,href:!0,id:!0,src:!0,style:!1,target:!0,title:!0,type:!0,width:!0},o={"background-color":!1,color:!1,"font-size":!1,"font-weight":!1,"text-align":!1,"text-decoration":!1,width:!1},i=["http:","https:","data:","m-files:","file:","ftp:","mailto:","pw:"],a={href:!0,action:!0},r=new DOMParser;this.SanitizeHtml=function(l,d){if(l=l.trim(),l=="")return"";if(l=="<br>")return"";l.indexOf("<body")==-1&&(l="<body>"+l+"</body>");let u=r.parseFromString(l,"text/html");u.body.tagName!=="BODY"&&u.body.remove(),typeof u.createElement!="function"&&u.createElement.remove();function h(r){let l;if(r.nodeType==Node.TEXT_NODE)l=r.cloneNode(!0);else if(r.nodeType==Node.ELEMENT_NODE&&(e[r.tagName]||n[r.tagName]||d&&r.matches(d))){{n[r.tagName]?l=u.createElement("DIV"):t[r.tagName]?l=u.createElement(t[r.tagName]):l=u.createElement(r.tagName);for(let t=0;t<r.attributes.length;t++){let e=r.attributes[t];if(s[e.name])if(e.name=="style")for(let e=0;e<r.style.length;e++){let t=r.style[e];o[t]&&l.style.setProperty(t,r.style.getPropertyValue(t))}else{if(a[e.name]&&e.value.indexOf(":")>-1&&!c(e.value,i))continue;l.setAttribute(e.name,e.value)}}for(let e=0;e<r.childNodes.length;e++){let t=h(r.childNodes[e]);l.appendChild(t,!1)}if((l.tagName=="SPAN"||l.tagName=="B"||l.tagName=="I"||l.tagName=="U")&&l.innerHTML.trim()=="")return u.createDocumentFragment()}}else l=u.createDocumentFragment();return l}let m=h(u.body);return m.innerHTML.replace(/<br[^>]*>(\S)/g,`<br>
$1`).replace(/div><div/g,`div>
<div`)};function c(e,t){for(let n=0;n<t.length;n++)if(e.indexOf(t[n])==0)return!0;return!1}this.AllowedTags=e,this.AllowedAttributes=s,this.AllowedCssStyles=o,this.AllowedSchemas=i};class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,null,safe_not_equal,{})}}export default Component;export{plaintextPaste}