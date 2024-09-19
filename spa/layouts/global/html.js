import{SvelteComponent,add_flush_callback,append_hydration,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,construct_svelte_component,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,subscribe,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Head from"./head.js";import Nav from"./nav.js";import Footer from"./footer.js";import Login from"./login.js";function create_if_block(e){let t,i,s,o;function a(t){e[5](t)}var n=e[4].menu;function r(e){let t={user:e[3]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const c={};if(o&8&&(c.user=e[3]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),o&16&&n!==(n=e[4].menu)){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let i,r,b,o,u,a,v,s,l,y,t,h,f,p,c,g,m;r=new Head({props:{content:e[0]}});let n=e[3]&&e[4].isAuthenticated&&create_if_block(e);a=new Login({props:{user:e[3]}}),l=new Nav({});const j=[e[0].fields,{allContent:e[2]},{user:e[3]}];var d=e[1];function _(){let t={};for(let e=0;e<j.length;e+=1)t=assign(t,j[e]);return{props:t}}return d&&(t=construct_svelte_component(d,_(e))),c=new Footer({}),{c(){i=element("html"),create_component(r.$$.fragment),b=space(),o=element("body"),n&&n.c(),u=space(),create_component(a.$$.fragment),v=space(),s=element("main"),create_component(l.$$.fragment),y=space(),t&&create_component(t.$$.fragment),h=space(),f=element("br"),p=space(),create_component(c.$$.fragment),g=space(),this.h()},l(e){i=claim_element(e,"HTML",{lang:!0});var d,m,j=children(i);claim_component(r.$$.fragment,j),b=claim_space(j),o=claim_element(j,"BODY",{class:!0}),m=children(o),n&&n.l(m),u=claim_space(m),claim_component(a.$$.fragment,m),v=claim_space(m),s=claim_element(m,"MAIN",{class:!0}),d=children(s),claim_component(l.$$.fragment,d),y=claim_space(d),t&&claim_component(t.$$.fragment,d),h=claim_space(d),f=claim_element(d,"BR",{}),p=claim_space(d),claim_component(c.$$.fragment,d),d.forEach(detach),g=claim_space(m),m.forEach(detach),j.forEach(detach),this.h()},h(){attr(s,"class","svelte-5glvo"),attr(o,"class","svelte-5glvo"),attr(i,"lang","en")},m(e,d){insert_hydration(e,i,d),mount_component(r,i,null),append_hydration(i,b),append_hydration(i,o),n&&n.m(o,null),append_hydration(o,u),mount_component(a,o,null),append_hydration(o,v),append_hydration(o,s),mount_component(l,s,null),append_hydration(s,y),t&&mount_component(t,s,null),append_hydration(s,h),append_hydration(s,f),append_hydration(s,p),mount_component(c,s,null),append_hydration(o,g),m=!0},p(e,[i]){const c={};i&1&&(c.content=e[0]),r.$set(c),e[3]&&e[4].isAuthenticated?n?(n.p(e,i),i&24&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(o,u)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const l={};i&8&&(l.user=e[3]),a.$set(l);const m=i&13?get_spread_update(j,[i&1&&get_spread_object(e[0].fields),i&4&&{allContent:e[2]},i&8&&{user:e[3]}]):{};if(i&2&&d!==(d=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}d?(t=construct_svelte_component(d,_(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s,h)):t=null}else d&&t.$set(m)},i(e){if(m)return;transition_in(r.$$.fragment,e),transition_in(n),transition_in(a.$$.fragment,e),transition_in(l.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(c.$$.fragment,e),m=!0},o(e){transition_out(r.$$.fragment,e),transition_out(n),transition_out(a.$$.fragment,e),transition_out(l.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(c.$$.fragment,e),m=!1},d(e){e&&detach(i),destroy_component(r),n&&n.d(),destroy_component(a),destroy_component(l),t&&destroy_component(t),destroy_component(c)}}}function instance(e,t,n){let a,i=noop,r=()=>(i(),i=subscribe(o,e=>n(4,a=e)),o);e.$$.on_destroy.push(()=>i());let{layout:c,content:s,allContent:l,user:o}=t;r();function d(e){s=e,n(0,s)}return e.$$set=e=>{"layout"in e&&n(1,c=e.layout),"content"in e&&n(0,s=e.content),"allContent"in e&&n(2,l=e.allContent),"user"in e&&r(n(3,o=e.user))},[s,c,l,o,a,d]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{layout:1,content:0,allContent:2,user:3})}}export default Component