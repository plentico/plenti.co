import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_block,detach,element,empty,init,insert,listen,noop,run_all,safe_not_equal,set_data,space,text,toggle_class,update_keyed_each}from"../../web_modules/svelte/internal/index.mjs";import{onMount}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[9]=t[n],s}function create_if_block(e){let r=!e[3].includes(e[9].fields.group),s,n,o=e[9].fields.title+"",i,a,c,l,t=r&&create_if_block_1(e);function d(){return e[8](e[9])}return{c(){t&&t.c(),s=space(),n=element("a"),i=text(o),this.h()},l(e){t&&t.l(e),s=claim_space(e),n=claim_element(e,"A",{href:!0,class:!0});var a=children(n);i=claim_text(a,o),a.forEach(detach),this.h()},h(){attr(n,"href",a="/"+e[9].path),attr(n,"class","nav-link svelte-1u7z67y"),toggle_class(n,"active",e[1]["/"+e[9].path])},m(o,a){t&&t.m(o,a),insert(o,s,a),insert(o,n,a),append(n,i),c||(l=[listen(n,"click",d),listen(n,"click",e[2])],c=!0)},p(c,l){e=c,l&1&&(r=!e[3].includes(e[9].fields.group)),r?t?t.p(e,l):(t=create_if_block_1(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null),l&1&&o!==(o=e[9].fields.title+"")&&set_data(i,o),l&1&&a!==(a="/"+e[9].path)&&attr(n,"href",a),l&35&&toggle_class(n,"active",e[1]["/"+e[9].path])},d(e){t&&t.d(e),e&&detach(s),e&&detach(n),c=!1,run_all(l)}}}function create_if_block_1(e){let t,n=e[4](e[9].fields.group)+"",s;return{c(){t=element("strong"),s=text(n),this.h()},l(e){t=claim_element(e,"STRONG",{class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"class","svelte-1u7z67y")},m(e,n){insert(e,t,n),append(t,s)},p(e,t){t&1&&n!==(n=e[4](e[9].fields.group)+"")&&set_data(s,n)},d(e){e&&detach(t)}}}function create_each_block(e,t){let o,s,n=t[9].type=="docs"&&!t[9].fields.deprecated&&create_if_block(t);return{key:e,first:null,c(){o=empty(),n&&n.c(),s=empty(),this.h()},l(e){o=empty(),n&&n.l(e),s=empty(),this.h()},h(){this.first=o},m(e,t){insert(e,o,t),n&&n.m(e,t),insert(e,s,t)},p(e,o){t=e,t[9].type=="docs"&&!t[9].fields.deprecated?n?n.p(t,o):(n=create_if_block(t),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},d(e){e&&detach(o),n&&n.d(e),e&&detach(s)}}}function create_fragment(e){let n,t=[],o=new Map,s=e[0].sort(e[5]);const i=e=>e[9].path;for(let n=0;n<s.length;n+=1){let a=get_each_context(e,s,n),r=i(a);o.set(r,t[n]=create_each_block(r,a))}return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","sidebar svelte-1u7z67y")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,[a]){a&127&&(s=e[0].sort(e[5]),t=update_keyed_each(t,a,i,1,e,s,o,n,destroy_block,create_each_block,null,get_each_context))},i:noop,o:noop,d(e){e&&detach(n);for(let e=0;e<t.length;e+=1)t[e].d()}}}function instance(e,t,n){let{allContent:a}=t,{checked:o}=t;const c=()=>{n(7,o=!1)};let i=[];const l=e=>(i.push(e),e),d=(e,t)=>typeof e.fields.order!="undefined"&&typeof t.fields.order!="undefined"?e.fields.order-t.fields.order:-1;let s=[];const r=e=>{n(1,s=[]),setTimeout(function(){e===window.location.pathname&&n(1,s[e]=!0,s)},100)};onMount(async()=>{let e=await window.location.pathname;e.length>1&&e.slice(-1)==="/"&&(e=e.slice(0,-1)),n(1,s[e]=!0,s)});const u=e=>r("/"+e.path);return e.$$set=e=>{"allContent"in e&&n(0,a=e.allContent),"checked"in e&&n(7,o=e.checked)},[a,s,c,i,l,d,r,o,u]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{allContent:0,checked:7})}}export default Component