import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert,listen,noop,prevent_default,safe_not_equal,space,text}from"../../../web_modules/svelte/internal/index.mjs";import{isImagePath,isDocPath}from"../assets_checker.js";function create_if_block_1(e){let t,n;return{c(){t=element("embed"),this.h()},l(e){t=claim_element(e,"EMBED",{src:!0,class:!0}),this.h()},h(){t.src!==(n=e[0])&&attr(t,"src",n),attr(t,"class","thumbnail svelte-1vxxnpb")},m(e,n){insert(e,t,n)},p(e,s){s&1&&t.src!==(n=e[0])&&attr(t,"src",n)},d(e){e&&detach(t)}}}function create_if_block(e){let t,n,s,o;return{c(){t=element("img"),this.h()},l(e){t=claim_element(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(n=e[0])&&attr(t,"src",n),attr(t,"alt","click to change thumbnail"),attr(t,"class","thumbnail svelte-1vxxnpb")},m(n,i){insert(n,t,i),s||(o=listen(t,"error",e[7]),s=!0)},p(e,s){s&1&&t.src!==(n=e[0])&&attr(t,"src",n)},d(e){e&&detach(t),s=!1,o()}}}function create_fragment(e){let n,a,r,i,s,c,l,d;function u(e,t){if((a==null||t&1)&&(a=!!isImagePath(e[0])),a)return create_if_block;if((r==null||t&1)&&(r=!!isDocPath(e[0])),r)return create_if_block_1}let o=u(e,-1),t=o&&o(e);return{c(){n=element("div"),t&&t.c(),i=space(),s=element("button"),c=text("Change Asset"),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var a,o=children(n);t&&t.l(o),i=claim_space(o),s=claim_element(o,"BUTTON",{class:!0}),a=children(s),c=claim_text(a,"Change Asset"),a.forEach(detach),o.forEach(detach),this.h()},h(){attr(s,"class","swap svelte-1vxxnpb"),attr(n,"class","thumbnail-wrapper svelte-1vxxnpb")},m(o,a){insert(o,n,a),t&&t.m(n,null),append(n,i),append(n,s),append(s,c),l||(d=listen(s,"click",prevent_default(e[1])),l=!0)},p(e,[s]){o===(o=u(e,s))&&t?t.p(e,s):(t&&t.d(1),t=o&&o(e),t&&(t.c(),t.m(n,i)))},i:noop,o:noop,d(e){e&&detach(n),t&&t.d(),l=!1,d()}}}function instance(e,t,n){let{field:s}=t,{showMedia:i}=t,{changingAsset:o}=t,{localMediaList:a}=t,r;const l=()=>{n(6,r=s),n(3,o=s),n(4,i=!0)},c=e=>{let t=e.target.attributes.src.nodeValue,n=document.querySelectorAll('img[src="'+t+'"]');n.forEach(e=>{a.forEach(t=>{t.file===s&&(e.src=t.contents)})})},d=e=>c(e);return e.$$set=e=>{"field"in e&&n(0,s=e.field),"showMedia"in e&&n(4,i=e.showMedia),"changingAsset"in e&&n(3,o=e.changingAsset),"localMediaList"in e&&n(5,a=e.localMediaList)},e.$$.update=()=>{if(e.$$.dirty&73)$:if(o){if(s===r){n(0,s=o)}}},[s,l,c,o,i,a,r,d]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,showMedia:4,changingAsset:3,localMediaList:5})}}export default Component