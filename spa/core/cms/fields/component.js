import{SvelteComponent,add_flush_callback,add_render_callback,append_hydration,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_svg_element,claim_text,create_animation,create_bidirectional_transition,create_component,destroy_component,destroy_each,detach,element,empty,fix_and_outro_and_destroy_block,fix_position,group_outros,init,insert_hydration,is_function,listen,mount_component,noop,null_to_empty,prevent_default,run_all,safe_not_equal,set_data,space,svg_element,text,transition_in,transition_out,update_keyed_each}from"../../../web_modules/svelte/internal/index.mjs";import{slide}from"../../../web_modules/svelte/transition/index.mjs";import{flip}from"../../../web_modules/svelte/animate/index.mjs";import DynamicFormInput from"../dynamic_form_input.js";import allComponentDefaults from"../../../generated/component_defaults.js";import allComponentSchemas from"../../../generated/component_schemas.js";function get_each_context(e,t,n){const s=e.slice();return s[50]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[53]=t[n],s[54]=t,s[55]=n,s}function create_else_block(e){let s,t=e[55]+"",n;return{c(){s=text("Component "),n=text(t)},l(e){s=claim_text(e,"Component "),n=claim_text(e,t)},m(e,t){insert_hydration(e,s,t),insert_hydration(e,n,t)},p(e,s){s[0]&1&&t!==(t=e[55]+"")&&set_data(n,t)},d(e){e&&detach(s),e&&detach(n)}}}function create_if_block_8(e){let t=(Object.values(e[53])[0].constructor==="".constructor?Object.values(e[53])[0].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[53].length>20?"...":""):Object.keys(e[53])[0])+"",n;return{c(){n=text(t)},l(e){n=claim_text(e,t)},m(e,t){insert_hydration(e,n,t)},p(e,s){s[0]&1&&t!==(t=(Object.values(e[53])[0].constructor==="".constructor?Object.values(e[53])[0].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[53].length>20?"...":""):Object.keys(e[53])[0])+"")&&set_data(n,t)},d(e){e&&detach(n)}}}function create_if_block_7(e){let t=e[53].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[53].length>20?"...":"")+"",n;return{c(){n=text(t)},l(e){n=claim_text(e,t)},m(e,t){insert_hydration(e,n,t)},p(e,s){s[0]&1&&t!==(t=e[53].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[53].length>20?"...":"")+"")&&set_data(n,t)},d(e){e&&detach(n)}}}function create_if_block_6(e){let n,t,s,o,i,a;function r(){return e[37](e[53])}return{c(){n=element("button"),t=svg_element("svg"),s=svg_element("path"),o=svg_element("path"),this.h()},l(e){n=claim_element(e,"BUTTON",{class:!0});var i,a=children(n);t=claim_svg_element(a,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0}),i=children(t),s=claim_svg_element(i,"path",{d:!0,fill:!0}),children(s).forEach(detach),o=claim_svg_element(i,"path",{d:!0}),children(o).forEach(detach),i.forEach(detach),a.forEach(detach),this.h()},h(){attr(s,"d","M0 0h24v24H0z"),attr(s,"fill","none"),attr(o,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"height","16"),attr(t,"viewBox","0 0 24 24"),attr(t,"width","16"),attr(n,"class","close svelte-12sypao")},m(e,c){insert_hydration(e,n,c),append_hydration(n,t),append_hydration(t,s),append_hydration(t,o),i||(a=listen(n,"click",prevent_default(r)),i=!0)},p(t){e=t},d(e){e&&detach(n),i=!1,a()}}}function create_if_block_5(e){let n,t,l,a,c,r,s,i;function d(t){e[38](t,e[55])}function u(t){e[39](t)}function h(t){e[40](t)}function m(t){e[41](t)}let o={label:null,parentKeys:"",schema:e[17](e[53])};return e[0][e[55]]!==void 0&&(o.field=e[0][e[55]]),e[1]!==void 0&&(o.showMediaModal=e[1]),e[2]!==void 0&&(o.changingMedia=e[2]),e[3]!==void 0&&(o.localMediaList=e[3]),t=new DynamicFormInput({props:o}),binding_callbacks.push(()=>bind(t,"field",d)),binding_callbacks.push(()=>bind(t,"showMediaModal",u)),binding_callbacks.push(()=>bind(t,"changingMedia",h)),binding_callbacks.push(()=>bind(t,"localMediaList",m)),{c(){n=element("div"),create_component(t.$$.fragment),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);claim_component(t.$$.fragment,s),s.forEach(detach),this.h()},h(){attr(n,"class","component-content")},m(e,s){insert_hydration(e,n,s),mount_component(t,n,null),i=!0},p(n,s){e=n;const o={};s[0]&1&&(o.schema=e[17](e[53])),!l&&s[0]&1&&(l=!0,o.field=e[0][e[55]],add_flush_callback(()=>l=!1)),!a&&s[0]&2&&(a=!0,o.showMediaModal=e[1],add_flush_callback(()=>a=!1)),!c&&s[0]&4&&(c=!0,o.changingMedia=e[2],add_flush_callback(()=>c=!1)),!r&&s[0]&8&&(r=!0,o.localMediaList=e[3],add_flush_callback(()=>r=!1)),t.$set(o)},i(e){if(i)return;transition_in(t.$$.fragment,e),add_render_callback(()=>{if(!i)return;s||(s=create_bidirectional_transition(n,slide,{duration:300},!0)),s.run(1)}),i=!0},o(e){transition_out(t.$$.fragment,e),s||(s=create_bidirectional_transition(n,slide,{duration:300},!1)),s.run(0),i=!1},d(e){e&&detach(n),destroy_component(t),e&&s&&s.end()}}}function create_each_block_1(e,t){let s,a,c,n,b,j,w,O,g,_,y,D,p,m,l,C,k,M,B,h,d,x,E,A,I,u,H,v,P,L=t[8]&&t[9].includes(t[55]),T,z,S,V,N=noop,f,R,$;function U(...e){return t[35](t[55],...e)}function K(...e){return t[36](t[55],...e)}function W(e){return e[53].constructor==="".constructor?create_if_block_7:e[53].constructor==={}.constructor?create_if_block_8:create_else_block}let F=W(t,[-1,-1]),r=F(t),i=t[7]&&create_if_block_6(t),o=L&&create_if_block_5(t);return{key:e,first:null,c(){s=element("div"),a=element("div"),c=element("div"),n=svg_element("svg"),b=svg_element("path"),j=svg_element("circle"),w=svg_element("circle"),O=svg_element("circle"),g=svg_element("circle"),_=svg_element("circle"),y=svg_element("circle"),D=space(),p=element("div"),m=element("button"),l=svg_element("svg"),C=svg_element("path"),k=svg_element("path"),B=space(),h=element("button"),d=svg_element("svg"),x=svg_element("path"),E=svg_element("path"),I=space(),u=element("div"),r.c(),H=space(),v=element("div"),i&&i.c(),P=space(),o&&o.c(),T=space(),this.h()},l(e){s=claim_element(e,"DIV",{id:!0,"data-index":!0,"data-id":!0,"data-graby":!0,class:!0});var t,f,S,M,F,z,N,L,R,V,A=children(s);a=claim_element(A,"DIV",{class:!0}),t=children(a),c=claim_element(t,"DIV",{class:!0}),z=children(c),n=claim_svg_element(z,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),f=children(n),b=claim_svg_element(f,"path",{stroke:!0,d:!0,fill:!0}),children(b).forEach(detach),j=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(j).forEach(detach),w=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(w).forEach(detach),O=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(O).forEach(detach),g=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(g).forEach(detach),_=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(_).forEach(detach),y=claim_svg_element(f,"circle",{cx:!0,cy:!0,r:!0}),children(y).forEach(detach),f.forEach(detach),z.forEach(detach),D=claim_space(t),p=claim_element(t,"DIV",{class:!0}),S=children(p),m=claim_element(S,"BUTTON",{class:!0,style:!0}),N=children(m),l=claim_svg_element(N,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0}),M=children(l),C=claim_svg_element(M,"path",{d:!0,fill:!0}),children(C).forEach(detach),k=claim_svg_element(M,"path",{d:!0}),children(k).forEach(detach),M.forEach(detach),N.forEach(detach),B=claim_space(S),h=claim_element(S,"BUTTON",{class:!0,style:!0}),L=children(h),d=claim_svg_element(L,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0}),F=children(d),x=claim_svg_element(F,"path",{d:!0,fill:!0}),children(x).forEach(detach),E=claim_svg_element(F,"path",{d:!0}),children(E).forEach(detach),F.forEach(detach),L.forEach(detach),S.forEach(detach),I=claim_space(t),u=claim_element(t,"DIV",{class:!0}),R=children(u),r.l(R),R.forEach(detach),H=claim_space(t),v=claim_element(t,"DIV",{class:!0}),V=children(v),i&&i.l(V),V.forEach(detach),t.forEach(detach),P=claim_space(A),o&&o.l(A),T=claim_space(A),A.forEach(detach),this.h()},h(){attr(b,"stroke","none"),attr(b,"d","M0 0h24v24H0z"),attr(b,"fill","none"),attr(j,"cx","5"),attr(j,"cy","9"),attr(j,"r","1"),attr(w,"cx","5"),attr(w,"cy","15"),attr(w,"r","1"),attr(O,"cx","12"),attr(O,"cy","9"),attr(O,"r","1"),attr(g,"cx","12"),attr(g,"cy","15"),attr(g,"r","1"),attr(_,"cx","19"),attr(_,"cy","9"),attr(_,"r","1"),attr(y,"cx","19"),attr(y,"cy","15"),attr(y,"r","1"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-grip-horizontal"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(c,"class","grip svelte-12sypao"),attr(C,"d","M0 0h24v24H0V0z"),attr(C,"fill","none"),attr(k,"d","M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"),attr(l,"xmlns","http://www.w3.org/2000/svg"),attr(l,"viewBox","0 0 24 24"),attr(l,"width","16px"),attr(l,"height","16px"),attr(m,"class","up svelte-12sypao"),attr(m,"style",M="visibility: "+(t[55]>0?"":"hidden")+";"),attr(x,"d","M0 0h24v24H0V0z"),attr(x,"fill","none"),attr(E,"d","M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"),attr(d,"xmlns","http://www.w3.org/2000/svg"),attr(d,"viewBox","0 0 24 24"),attr(d,"width","16px"),attr(d,"height","16px"),attr(h,"class","down svelte-12sypao"),attr(h,"style",A="visibility: "+(t[55]<t[0].length-1?"":"hidden")+";"),attr(p,"class","buttons svelte-12sypao"),attr(u,"class","content svelte-12sypao"),attr(v,"class","buttons svelte-12sypao"),attr(a,"class","item svelte-12sypao"),attr(s,"id",z=t[11]&&t[19]==t[11].dataset.id?"grabbed":""),attr(s,"data-index",S=t[55]),attr(s,"data-id",t[19]),attr(s,"data-graby","0"),attr(s,"class","item-wrapper svelte-12sypao"),this.first=s},m(e,A){insert_hydration(e,s,A),append_hydration(s,a),append_hydration(a,c),append_hydration(c,n),append_hydration(n,b),append_hydration(n,j),append_hydration(n,w),append_hydration(n,O),append_hydration(n,g),append_hydration(n,_),append_hydration(n,y),append_hydration(a,D),append_hydration(a,p),append_hydration(p,m),append_hydration(m,l),append_hydration(l,C),append_hydration(l,k),append_hydration(p,B),append_hydration(p,h),append_hydration(h,d),append_hydration(d,x),append_hydration(d,E),append_hydration(a,I),append_hydration(a,u),r.m(u,null),append_hydration(a,H),append_hydration(a,v),i&&i.m(v,null),append_hydration(s,P),o&&o.m(s,null),append_hydration(s,T),f=!0,R||($=[listen(c,"mousedown",t[31]),listen(c,"touchstart",t[32]),listen(c,"mouseenter",t[33]),listen(c,"touchmove",t[34]),listen(m,"click",prevent_default(U)),listen(h,"click",prevent_default(K)),listen(u,"click",prevent_default(function(){is_function(t[18](t[55]))&&t[18](t[55]).apply(this,arguments)})),listen(u,"click",function(){is_function(t[29](t[53]))&&t[29](t[53]).apply(this,arguments)})],R=!0)},p(e,n){t=e,(!f||n[0]&1&&M!==(M="visibility: "+(t[55]>0?"":"hidden")+";"))&&attr(m,"style",M),(!f||n[0]&1&&A!==(A="visibility: "+(t[55]<t[0].length-1?"":"hidden")+";"))&&attr(h,"style",A),F===(F=W(t,n))&&r?r.p(t,n):(r.d(1),r=F(t),r&&(r.c(),r.m(u,null))),t[7]?i?i.p(t,n):(i=create_if_block_6(t),i.c(),i.m(v,null)):i&&(i.d(1),i=null),n[0]&769&&(L=t[8]&&t[9].includes(t[55])),L?o?(o.p(t,n),n[0]&769&&transition_in(o,1)):(o=create_if_block_5(t),o.c(),transition_in(o,1),o.m(s,T)):o&&(group_outros(),transition_out(o,1,1,()=>{o=null}),check_outros()),(!f||n[0]&2048&&z!==(z=t[11]&&t[19]==t[11].dataset.id?"grabbed":""))&&attr(s,"id",z),(!f||n[0]&1&&S!==(S=t[55]))&&attr(s,"data-index",S)},r(){V=s.getBoundingClientRect()},f(){fix_position(s),N()},a(){N(),N=create_animation(s,V,flip,{duration:t[8]?null:200})},i(){if(f)return;transition_in(o),f=!0},o(){transition_out(o),f=!1},d(e){e&&detach(s),r.d(),i&&i.d(),o&&o.d(),R=!1,run_all($)}}}function create_if_block(e){let o,t,a,r,i,m,u,d,l,c,h,f,s=!e[15]&&create_if_block_4(e),n=e[15]&&create_if_block_1(e);return{c(){o=element("button"),t=svg_element("svg"),a=svg_element("path"),r=svg_element("circle"),i=svg_element("line"),s&&s.c(),m=text(`
            Add new `),u=text(e[4]),l=space(),n&&n.c(),c=empty(),this.h()},l(d){o=claim_element(d,"BUTTON",{class:!0});var h,f=children(o);t=claim_svg_element(f,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),h=children(t),a=claim_svg_element(h,"path",{stroke:!0,d:!0,fill:!0}),children(a).forEach(detach),r=claim_svg_element(h,"circle",{cx:!0,cy:!0,r:!0}),children(r).forEach(detach),i=claim_svg_element(h,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(i).forEach(detach),s&&s.l(h),h.forEach(detach),m=claim_text(f,`
            Add new `),u=claim_text(f,e[4]),f.forEach(detach),l=claim_space(d),n&&n.l(d),c=empty(),this.h()},h(){attr(a,"stroke","none"),attr(a,"d","M0 0h24v24H0z"),attr(a,"fill","none"),attr(r,"cx","12"),attr(r,"cy","12"),attr(r,"r","9"),attr(i,"x1","9"),attr(i,"y1","12"),attr(i,"x2","15"),attr(i,"y2","12"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-circle-plus"),attr(t,"width","24"),attr(t,"height","24"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#1c7fc7"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(o,"class",d="add"+(e[15]?" open":"")+" svelte-12sypao")},m(d,p){insert_hydration(d,o,p),append_hydration(o,t),append_hydration(t,a),append_hydration(t,r),append_hydration(t,i),s&&s.m(t,null),append_hydration(o,m),append_hydration(o,u),insert_hydration(d,l,p),n&&n.m(d,p),insert_hydration(d,c,p),h||(f=listen(o,"click",prevent_default(e[27])),h=!0)},p(e,i){e[15]?s&&(s.d(1),s=null):s||(s=create_if_block_4(e),s.c(),s.m(t,null)),i[0]&16&&set_data(u,e[4]),i[0]&32768&&d!==(d="add"+(e[15]?" open":"")+" svelte-12sypao")&&attr(o,"class",d),e[15]?n?(n.p(e,i),i[0]&32768&&transition_in(n,1)):(n=create_if_block_1(e),n.c(),transition_in(n,1),n.m(c.parentNode,c)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros())},d(e){e&&detach(o),s&&s.d(),e&&detach(l),n&&n.d(e),e&&detach(c),h=!1,f()}}}function create_if_block_4(){let t;return{c(){t=svg_element("line"),this.h()},l(e){t=claim_svg_element(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(t).forEach(detach),this.h()},h(){attr(t,"x1","12"),attr(t,"y1","9"),attr(t,"x2","12"),attr(t,"y2","15")},m(e,n){insert_hydration(e,t,n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let n,s,i,o=e[6][e[5]].options,t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block(get_each_context(e,o,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","add-list svelte-12sypao")},m(e,s){insert_hydration(e,n,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null);i=!0},p(e,s){if(s[0]&268501088){o=e[6][e[5]].options;let i;for(i=0;i<o.length;i+=1){const a=get_each_context(e,o,i);t[i]?t[i].p(a,s):(t[i]=create_each_block(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=o.length}},i(e){if(i)return;e&&add_render_callback(()=>{if(!i)return;s||(s=create_bidirectional_transition(n,slide,{duration:300},!0)),s.run(1)}),i=!0},o(e){e&&(s||(s=create_bidirectional_transition(n,slide,{duration:300},!1)),s.run(0)),i=!1},d(e){e&&detach(n),destroy_each(t,e),e&&s&&s.end()}}}function create_if_block_3(){let t,o,n,s;return{c(){t=svg_element("svg"),o=svg_element("path"),n=svg_element("line"),s=svg_element("line"),this.h()},l(e){t=claim_svg_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var i=children(t);o=claim_svg_element(i,"path",{stroke:!0,d:!0,fill:!0}),children(o).forEach(detach),n=claim_svg_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(n).forEach(detach),s=claim_svg_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(s).forEach(detach),i.forEach(detach),this.h()},h(){attr(o,"stroke","none"),attr(o,"d","M0 0h24v24H0z"),attr(o,"fill","none"),attr(n,"x1","18"),attr(n,"y1","6"),attr(n,"x2","6"),attr(n,"y2","18"),attr(s,"x1","6"),attr(s,"y1","6"),attr(s,"x2","18"),attr(s,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x"),attr(t,"width","15"),attr(t,"height","15"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#ed0f0f"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,i){insert_hydration(e,t,i),append_hydration(t,o),append_hydration(t,n),append_hydration(t,s)},d(e){e&&detach(t)}}}function create_if_block_2(){let t,n,s;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("path"),this.h()},l(e){t=claim_svg_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=children(t);n=claim_svg_element(o,"path",{stroke:!0,d:!0,fill:!0}),children(n).forEach(detach),s=claim_svg_element(o,"path",{d:!0}),children(s).forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"d","M5 12l5 5l10 -10"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-check"),attr(t,"width","15"),attr(t,"height","15"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#4bb543"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,o){insert_hydration(e,t,o),append_hydration(t,n),append_hydration(t,s)},d(e){e&&detach(t)}}}function create_each_block(e){let n,i,o=e[50]+"",a,r,c,l;function d(e){if(e[16]===e[50])return create_if_block_2;if(e[16]===e[50]+"not_found")return create_if_block_3}let s=d(e,[-1,-1]),t=s&&s(e);function u(){return e[46](e[50])}return{c(){n=element("button"),t&&t.c(),i=space(),a=text(o),r=space(),this.h()},l(e){n=claim_element(e,"BUTTON",{class:!0});var s=children(n);t&&t.l(s),i=claim_space(s),a=claim_text(s,o),r=claim_space(s),s.forEach(detach),this.h()},h(){attr(n,"class","add-name svelte-12sypao")},m(e,s){insert_hydration(e,n,s),t&&t.m(n,null),append_hydration(n,i),append_hydration(n,a),append_hydration(n,r),c||(l=listen(n,"click",prevent_default(u)),c=!0)},p(r,c){e=r,s!==(s=d(e,c))&&(t&&t.d(1),t=s&&s(e),t&&(t.c(),t.m(n,i))),c[0]&96&&o!==(o=e[50]+"")&&set_data(a,o)},d(e){e&&detach(n),t&&t.d(),c=!1,l()}}}function create_fragment(e){let s,o,r,l,d,h,i,t=[],f=new Map,u,a,m,g,c=e[0];const p=e=>e[19]=e[8]?e[55]:JSON.stringify(e[53]);for(let n=0;n<c.length;n+=1){let s=get_each_context_1(e,c,n),o=p(s);f.set(o,t[n]=create_each_block_1(o,s))}let n=e[6]&&e[6][e[5]]?.options.length>0&&create_if_block(e);return{c(){s=element("div"),o=element("div"),r=element("p"),h=space(),i=element("div");for(let e=0;e<t.length;e+=1)t[e].c();u=space(),n&&n.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var c,l,a=children(s);o=claim_element(a,"DIV",{id:!0,class:!0,style:!0}),c=children(o),r=claim_element(c,"P",{class:!0}),children(r).forEach(detach),c.forEach(detach),h=claim_space(a),i=claim_element(a,"DIV",{class:!0}),l=children(i);for(let e=0;e<t.length;e+=1)t[e].l(l);l.forEach(detach),u=claim_space(a),n&&n.l(a),a.forEach(detach),this.h()},h(){attr(r,"class","svelte-12sypao"),attr(o,"id","ghost"),attr(o,"class",l=""+(null_to_empty(e[11]?"item haunting":"item")+" svelte-12sypao")),attr(o,"style",d="top: "+(e[12]+e[13]-e[14])+"px"),attr(i,"class","list svelte-12sypao"),attr(s,"class","dragdroplist svelte-12sypao")},m(c,l){insert_hydration(c,s,l),append_hydration(s,o),append_hydration(o,r),e[30](o),append_hydration(s,h),append_hydration(s,i);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null);append_hydration(s,u),n&&n.m(s,null),a=!0,m||(g=[listen(i,"mousemove",e[42]),listen(i,"touchmove",e[43]),listen(i,"mouseup",e[44]),listen(i,"touchend",e[45])],m=!0)},p(e,r){if((!a||r[0]&2048&&l!==(l=""+(null_to_empty(e[11]?"item haunting":"item")+" svelte-12sypao")))&&attr(o,"class",l),(!a||r[0]&28672&&d!==(d="top: "+(e[12]+e[13]-e[14])+"px"))&&attr(o,"style",d),r[0]&635308943){c=e[0],group_outros();for(let e=0;e<t.length;e+=1)t[e].r();t=update_keyed_each(t,r,p,1,e,c,f,i,fix_and_outro_and_destroy_block,create_each_block_1,null,get_each_context_1);for(let e=0;e<t.length;e+=1)t[e].a();check_outros()}e[6]&&e[6][e[5]]?.options.length>0?n?n.p(e,r):(n=create_if_block(e),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i(){if(a)return;for(let e=0;e<c.length;e+=1)transition_in(t[e]);a=!0},o(){for(let e=0;e<t.length;e+=1)transition_out(t[e]);a=!1},d(o){o&&detach(s),e[30](null);for(let e=0;e<t.length;e+=1)t[e].d();n&&n.d(),m=!1,run_all(g)}}}function instance(e,t,n){let{field:s,label:E,showMediaModal:u,changingMedia:c,localMediaList:m,parentKeys:b,schema:k}=t;const x=(e,t)=>{let s=Object.keys(e).sort(),o=Object.keys(t).sort(),n=JSON.stringify(s)===JSON.stringify(o);if(n)for(let[s,o]of Object.entries(e))if(o.constructor==={}.constructor&&t.hasOwnProperty(s)&&t[s].constructor==={}.constructor&&(n=x(o,t[s]),!n))break;return n},D=e=>{let t=structuredClone(allComponentDefaults),s=structuredClone(allComponentSchemas),n=structuredClone(e);delete n.plenti_salt;for(const e in t)if(x(t[e],n))return s[e]};let h=!1,i=[];const F=e=>{i.length===1&&i.includes(e)&&setTimeout(()=>{n(8,h=!1)},300),i.includes(e)?n(9,i=i.filter(t=>t!==e)):(n(9,i=[...i,e]),n(8,h=!0))};let{removesItems:O=!0}=t,z,a,o,j,y=0,_=0,w=0;const f=(e,t)=>{if(i.length>0){setTimeout(()=>{n(8,h=!1)},300),n(9,i=[]);return}n(11,o=t),n(11,o.dataset.grabY=e,o),n(10,a.innerHTML=o.innerHTML,a),n(13,_=o.getBoundingClientRect().y-e),r(e)},r=e=>{o&&(n(12,y=e),n(14,w=a.parentNode.getBoundingClientRect().y))},C=e=>{r(e.clientY);let t=document.elementFromPoint(e.clientX,e.clientY).closest(".item-wrapper");t&&t!=j&&(j=t,p(e,t))},p=(e,t)=>{o&&t!=o&&t.classList.contains("item-wrapper")&&l(parseInt(o.dataset.index),parseInt(t.dataset.index))},l=(e,t)=>{let o=s[e];n(0,s[e]=s[t],s),n(0,s[t]=o,s)},v=e=>{n(11,o=null)},S=e=>{n(0,s=s.filter(t=>t!==e))};let g=!1;const T=()=>{n(15,g=!g)};let d;const M=e=>{let t=structuredClone(allComponentDefaults);e in t?(s.forEach(n=>{JSON.stringify(n)===JSON.stringify(t[e])&&(t[e].plenti_salt=A())}),n(0,s=[...s,t[e]]),n(16,d=e)):n(16,d=e+"not_found"),setTimeout(()=>{n(16,d="")},250)},A=()=>(Math.random()+1).toString(36).substring(7),N=e=>{if(e.constructor!=={}.constructor)return;if("plenti_salt"in e){for(const n of s){let t=structuredClone(e);if(delete t.plenti_salt,JSON.stringify(n)===JSON.stringify(t))return}delete e.plenti_salt,e=e}else s.filter(t=>JSON.stringify(t)===JSON.stringify(e)).length>1&&(e.plenti_salt=A())};function L(e){binding_callbacks[e?"unshift":"push"](()=>{a=e,n(10,a)})}const R=function(e){f(e.clientY,this.closest(".item-wrapper"))},P=function(e){f(e.touches[0].clientY,this.closest(".item-wrapper"))},H=function(e){e.stopPropagation(),p(e,e.target.closest(".item-wrapper"))},I=function(e){e.stopPropagation(),e.preventDefault(),C(e.touches[0])},B=function(e){l(e,e-1)},V=function(e){l(e,e+1)},$=e=>S(e);function W(t,o){e.$$.not_equal(s[o],t)&&(s[o]=t,n(0,s))}function U(e){u=e,n(1,u)}function K(e){c=e,n(2,c)}function q(e){m=e,n(3,m)}const Y=function(e){e.stopPropagation(),r(e.clientY)},G=function(e){e.stopPropagation(),r(e.touches[0].clientY)},X=function(e){e.stopPropagation(),v(e)},Q=function(e){e.stopPropagation(),v(e.touches[0])},Z=e=>M(e);return e.$$set=e=>{"field"in e&&n(0,s=e.field),"label"in e&&n(4,E=e.label),"showMediaModal"in e&&n(1,u=e.showMediaModal),"changingMedia"in e&&n(2,c=e.changingMedia),"localMediaList"in e&&n(3,m=e.localMediaList),"parentKeys"in e&&n(5,b=e.parentKeys),"schema"in e&&n(6,k=e.schema),"removesItems"in e&&n(7,O=e.removesItems)},[s,u,c,m,E,b,k,O,h,i,a,o,y,_,w,g,d,D,F,z,f,r,C,p,l,v,S,T,M,N,L,R,P,H,I,B,V,$,W,U,K,q,Y,G,X,Q,Z]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,label:4,showMediaModal:1,changingMedia:2,localMediaList:3,parentKeys:5,schema:6,removesItems:7},null,[-1,-1])}}export default Component