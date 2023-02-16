import{SvelteComponent,add_flush_callback,append,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert,mount_component,noop,safe_not_equal,space,subscribe,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Head from"./head.js";import Nav from"./nav.js";import Footer from"./footer.js";function create_if_block(e){let t,i,s,o;function a(t){e[6](t)}var n=e[4];function r(e){let t={user:e[3]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=new n(r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e,o){const c={};if(o&8&&(c.user=e[3]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),n!==(n=e[4])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let i,a,b,o,d,s,c,g,t,h,p,m,r,f,u;a=new Head({props:{content:e[0]}});let n=e[3]&&e[5].isAuthenticated&&create_if_block(e);c=new Nav({});const v=[e[0].fields,{allContent:e[2]},{user:e[3]}];var l=e[1];function j(){let t={};for(let e=0;e<v.length;e+=1)t=assign(t,v[e]);return{props:t}}return l&&(t=new l(j(e))),r=new Footer({}),{c(){i=element("html"),create_component(a.$$.fragment),b=space(),o=element("body"),n&&n.c(),d=space(),s=element("main"),create_component(c.$$.fragment),g=space(),t&&create_component(t.$$.fragment),h=space(),p=element("br"),m=space(),create_component(r.$$.fragment),f=space(),this.h()},l(e){i=claim_element(e,"HTML",{lang:!0});var l,u,v=children(i);claim_component(a.$$.fragment,v),b=claim_space(v),o=claim_element(v,"BODY",{class:!0}),u=children(o),n&&n.l(u),d=claim_space(u),s=claim_element(u,"MAIN",{class:!0}),l=children(s),claim_component(c.$$.fragment,l),g=claim_space(l),t&&claim_component(t.$$.fragment,l),h=claim_space(l),p=claim_element(l,"BR",{}),m=claim_space(l),claim_component(r.$$.fragment,l),l.forEach(detach),f=claim_space(u),u.forEach(detach),v.forEach(detach),this.h()},h(){attr(s,"class","svelte-5glvo"),attr(o,"class","svelte-5glvo"),attr(i,"lang","en")},m(e,l){insert(e,i,l),mount_component(a,i,null),append(i,b),append(i,o),n&&n.m(o,null),append(o,d),append(o,s),mount_component(c,s,null),append(s,g),t&&mount_component(t,s,null),append(s,h),append(s,p),append(s,m),mount_component(r,s,null),append(o,f),u=!0},p(e,[i]){const r={};i&1&&(r.content=e[0]),a.$set(r),e[3]&&e[5].isAuthenticated?n?(n.p(e,i),i&40&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(o,d)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const c=i&13?get_spread_update(v,[i&1&&get_spread_object(e[0].fields),i&4&&{allContent:e[2]},i&8&&{user:e[3]}]):{};if(l!==(l=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}l?(t=new l(j(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s,h)):t=null}else l&&t.$set(c)},i(e){if(u)return;transition_in(a.$$.fragment,e),transition_in(n),transition_in(c.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(r.$$.fragment,e),u=!0},o(e){transition_out(a.$$.fragment,e),transition_out(n),transition_out(c.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(r.$$.fragment,e),u=!1},d(e){e&&detach(i),destroy_component(a),n&&n.d(),destroy_component(c),t&&destroy_component(t),destroy_component(r)}}}function instance(e,t,n){let l,i=noop,a=()=>(i(),i=subscribe(s,e=>n(5,l=e)),s);e.$$.on_destroy.push(()=>i());let{layout:r}=t,{content:o}=t,{allContent:c}=t,{user:s}=t,{adminMenu:d}=t;a();function u(e){o=e,n(0,o)}return e.$$set=e=>{"layout"in e&&n(1,r=e.layout),"content"in e&&n(0,o=e.content),"allContent"in e&&n(2,c=e.allContent),"user"in e&&a(n(3,s=e.user)),"adminMenu"in e&&n(4,d=e.adminMenu)},[o,r,c,s,d,l,u]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{layout:1,content:0,allContent:2,user:3,adminMenu:4})}}export default Component