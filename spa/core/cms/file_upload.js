import{SvelteComponent,add_flush_callback,append_hydration,attr,bind,binding_callbacks,bubble,check_outros,children,claim_component,claim_element,claim_space,claim_svg_element,claim_text,create_component,destroy_component,detach,element,empty,group_outros,init,insert_hydration,listen,mount_component,noop,prevent_default,run_all,safe_not_equal,space,svg_element,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import MediaFilters from"./media_filters.js";import MediaGrid from"./media_grid.js";import ButtonWrapper from"./button_wrapper.js";import Button from"./button.js";function create_else_block_1(e){let s,n,d,t,r,m,h,i,_,u,y,p,v,l,b,j,c,a,o,g,w,f,O,x;return{c(){s=element("div"),n=element("div"),d=element("div"),t=svg_element("svg"),r=svg_element("path"),m=svg_element("path"),h=svg_element("polyline"),i=svg_element("line"),_=space(),u=element("div"),y=text("Drag a file here to upload"),v=space(),l=element("div"),b=text("Or"),j=space(),c=element("div"),a=element("label"),o=element("input"),w=space(),f=element("span"),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var g,O,x,C,E,k,A,p=children(s);n=claim_element(p,"DIV",{class:!0}),O=children(n),d=claim_element(O,"DIV",{class:!0}),C=children(d),t=claim_svg_element(C,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),g=children(t),r=claim_svg_element(g,"path",{stroke:!0,d:!0,fill:!0}),children(r).forEach(detach),m=claim_svg_element(g,"path",{d:!0}),children(m).forEach(detach),h=claim_svg_element(g,"polyline",{points:!0}),children(h).forEach(detach),i=claim_svg_element(g,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(i).forEach(detach),g.forEach(detach),C.forEach(detach),_=claim_space(O),u=claim_element(O,"DIV",{class:!0}),E=children(u),y=claim_text(E,"Drag a file here to upload"),E.forEach(detach),O.forEach(detach),v=claim_space(p),l=claim_element(p,"DIV",{class:!0}),k=children(l),b=claim_text(k,"Or"),k.forEach(detach),j=claim_space(p),c=claim_element(p,"DIV",{class:!0}),A=children(c),a=claim_element(A,"LABEL",{class:!0}),x=children(a),o=claim_element(x,"INPUT",{type:!0,"aria-label":!0,class:!0}),w=claim_space(x),f=claim_element(x,"SPAN",{class:!0}),children(f).forEach(detach),x.forEach(detach),A.forEach(detach),p.forEach(detach),this.h()},h(){attr(r,"stroke","none"),attr(r,"d","M0 0h24v24H0z"),attr(r,"fill","none"),attr(m,"d","M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"),attr(h,"points","9 15 12 12 15 15"),attr(i,"x1","12"),attr(i,"y1","12"),attr(i,"x2","12"),attr(i,"y2","21"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-cloud-upload"),attr(t,"width","44"),attr(t,"height","44"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(d,"class","drop-icon"),attr(u,"class","drop-text"),attr(n,"class",p="drop"+(e[8]?" active":"")+" svelte-6x59kg"),attr(l,"class","or svelte-6x59kg"),attr(o,"type","file"),o.multiple=g=!e[2],attr(o,"aria-label","File browser"),attr(o,"class","svelte-6x59kg"),attr(f,"class","file-custom svelte-6x59kg"),attr(a,"class","file svelte-6x59kg"),attr(c,"class","choose"),attr(s,"class","upload-widgets svelte-6x59kg")},m(p,g){insert_hydration(p,s,g),append_hydration(s,n),append_hydration(n,d),append_hydration(d,t),append_hydration(t,r),append_hydration(t,m),append_hydration(t,h),append_hydration(t,i),append_hydration(n,_),append_hydration(n,u),append_hydration(u,y),append_hydration(s,v),append_hydration(s,l),append_hydration(l,b),append_hydration(s,j),append_hydration(s,c),append_hydration(c,a),append_hydration(a,o),append_hydration(a,w),append_hydration(a,f),O||(x=[listen(n,"dragenter",e[11]),listen(n,"dragleave",e[11]),listen(n,"drop",prevent_default(e[23])),listen(n,"dragover",prevent_default(e[16])),listen(c,"change",e[24])],O=!0)},p(e,t){t&256&&p!==(p="drop"+(e[8]?" active":"")+" svelte-6x59kg")&&attr(n,"class",p),t&4&&g!==(g=!e[2])&&(o.multiple=g)},i:noop,o:noop,d(e){e&&detach(s),O=!1,run_all(x)}}}function create_if_block(e){let t,l,c,i,n,r,o,s,a;function h(t){e[17](t)}function m(t){e[18](t)}let d={singleSelect:!0,changingMedia:e[2]};e[1]!==void 0&&(d.media=e[1]),e[6]!==void 0&&(d.enabledFilters=e[6]),t=new MediaFilters({props:d}),binding_callbacks.push(()=>bind(t,"media",h)),binding_callbacks.push(()=>bind(t,"enabledFilters",m));function f(t){e[19](t)}let u={files:e[14](e[0])};return e[9]!==void 0&&(u.selectedMedia=e[9]),n=new MediaGrid({props:u}),binding_callbacks.push(()=>bind(n,"selectedMedia",f)),s=new ButtonWrapper({props:{$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){create_component(t.$$.fragment),i=space(),create_component(n.$$.fragment),o=space(),create_component(s.$$.fragment)},l(e){claim_component(t.$$.fragment,e),i=claim_space(e),claim_component(n.$$.fragment,e),o=claim_space(e),claim_component(s.$$.fragment,e)},m(e,r){mount_component(t,e,r),insert_hydration(e,i,r),mount_component(n,e,r),insert_hydration(e,o,r),mount_component(s,e,r),a=!0},p(e,o){const i={};o&4&&(i.changingMedia=e[2]),!l&&o&2&&(l=!0,i.media=e[1],add_flush_callback(()=>l=!1)),!c&&o&64&&(c=!0,i.enabledFilters=e[6],add_flush_callback(()=>c=!1)),t.$set(i);const a={};o&1&&(a.files=e[14](e[0])),!r&&o&512&&(r=!0,a.selectedMedia=e[9],add_flush_callback(()=>r=!1)),n.$set(a);const d={};o&67109629&&(d.$$scope={dirty:o,ctx:e}),s.$set(d)},i(e){if(a)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),a=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),a=!1},d(e){destroy_component(t,e),e&&detach(i),destroy_component(n,e),e&&detach(o),destroy_component(s,e)}}}function create_else_block(e){let t,n;return t=new Button({props:{buttonText:"Discard all",buttonStyle:"secondary"}}),t.$on("click",e[22]),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p:noop,i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(e){let t,n;return t=new Button({props:{buttonText:"Discard selected",buttonStyle:"secondary"}}),t.$on("click",e[13]),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p:noop,i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_default_slot(e){let s,c,a,t,n,i,r;function h(t){e[20](t)}let l={buttonText:"Save Media",action:"create",encoding:"base64",user:e[5]};e[0]!==void 0&&(l.commitList=e[0]),s=new Button({props:l}),binding_callbacks.push(()=>bind(s,"commitList",h)),s.$on("click",e[21]);const d=[create_if_block_1,create_else_block],o=[];function u(e){return e[9].length>0?0:1}return t=u(e,-1),n=o[t]=d[t](e),{c(){create_component(s.$$.fragment),a=space(),n.c(),i=empty()},l(e){claim_component(s.$$.fragment,e),a=claim_space(e),n.l(e),i=empty()},m(e,n){mount_component(s,e,n),insert_hydration(e,a,n),o[t].m(e,n),insert_hydration(e,i,n),r=!0},p(e,a){const r={};a&32&&(r.user=e[5]),!c&&a&1&&(c=!0,r.commitList=e[0],add_flush_callback(()=>c=!1)),s.$set(r);let l=t;t=u(e,a),t===l?o[t].p(e,a):(group_outros(),transition_out(o[l],1,1,()=>{o[l]=null}),check_outros(),n=o[t],n?n.p(e,a):(n=o[t]=d[t](e),n.c()),transition_in(n,1),n.m(i.parentNode,i))},i(e){if(r)return;transition_in(s.$$.fragment,e),transition_in(n),r=!0},o(e){transition_out(s.$$.fragment,e),transition_out(n),r=!1},d(e){destroy_component(s,e),e&&detach(a),o[t].d(e),e&&detach(i)}}}function create_fragment(e){let s,t,n,i;const a=[create_if_block,create_else_block_1],o=[];function r(e){return e[0].length>0?0:1}return t=r(e,-1),n=o[t]=a[t](e),{c(){s=element("div"),n.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var t=children(s);n.l(t),t.forEach(detach),this.h()},h(){attr(s,"class","upload-wrapper svelte-6x59kg")},m(e,n){insert_hydration(e,s,n),o[t].m(s,null),i=!0},p(e,[i]){let c=t;t=r(e,i),t===c?o[t].p(e,i):(group_outros(),transition_out(o[c],1,1,()=>{o[c]=null}),check_outros(),n=o[t],n?n.p(e,i):(n=o[t]=a[t](e),n.c()),transition_in(n,1),n.m(s,null))},i(){if(i)return;transition_in(n),i=!0},o(){transition_out(n),i=!1},d(e){e&&detach(s),o[t].d()}}}function instance(e,t,n){let{media:a,changingMedia:l,showMediaModal:d,localMediaList:s,mediaPrefix:i,user:g}=t,o=[];const p=e=>{let t=new FileReader;t.readAsDataURL(e),t.onload=t=>{n(0,s=[...s,{file:i+"media/"+e.name,contents:t.target.result}])}},f=e=>{Array.from(e).forEach(e=>{p(e)})};let c=i+"media/",u;const _=()=>{n(8,u=!u)},h=e=>{if(e.dataTransfer.items)for(let t=0;t<e.dataTransfer.items.length;t++)if(e.dataTransfer.items[t].kind==="file"){let n=e.dataTransfer.items[t].getAsFile();p(n)}};let r=[];const j=()=>{r.forEach(e=>{n(0,s=s.filter(t=>t.contents!==e)),n(9,r=[])})},b=e=>e.map(e=>e.contents),m=()=>{s.forEach(e=>{n(1,a=[...a,e.contents])})};function y(t){bubble.call(this,e,t)}function v(e){a=e,n(1,a)}function w(e){o=e,n(6,o)}function O(e){r=e,n(9,r)}function x(e){s=e,n(0,s)}const C=()=>{m(),n(6,o=[]),n(7,c=i+"media/"),l&&(n(2,l=s[0].file),n(3,d=!1))},E=()=>n(0,s=[]),k=e=>h(e),A=e=>f(e.target.files);return e.$$set=e=>{"media"in e&&n(1,a=e.media),"changingMedia"in e&&n(2,l=e.changingMedia),"showMediaModal"in e&&n(3,d=e.showMediaModal),"localMediaList"in e&&n(0,s=e.localMediaList),"mediaPrefix"in e&&n(4,i=e.mediaPrefix),"user"in e&&n(5,g=e.user)},e.$$.update=()=>{if(e.$$.dirty&209)$:if(o&&o.length>0){let t=o[0].join("/")+"/",e=i+"media/"+t;s.forEach(t=>{t.file=t.file.replace(c,e)}),n(7,c=e)}},[s,a,l,d,i,g,o,c,u,r,f,_,h,j,b,m,y,v,w,O,x,C,E,k,A]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{media:1,changingMedia:2,showMediaModal:3,localMediaList:0,mediaPrefix:4,user:5})}}export default Component