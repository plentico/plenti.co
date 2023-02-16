import{SvelteComponent,add_flush_callback,add_render_callback,append,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_animation,create_bidirectional_transition,create_component,destroy_component,destroy_each,detach,element,empty,fix_and_outro_and_destroy_block,fix_position,group_outros,init,insert,is_function,listen,mount_component,noop,null_to_empty,prevent_default,run_all,safe_not_equal,set_data,space,svg_element,text,transition_in,transition_out,update_keyed_each}from"../../../web_modules/svelte/internal/index.mjs";import DynamicFormInput from"../dynamic_form_input.js";import allComponentDefaults from"../../../generated/component_defaults.js";import allComponentSchemas from"../../../generated/component_schemas.js";import{slide}from"../../../web_modules/svelte/transition/index.mjs";import{flip}from"../../../web_modules/svelte/animate/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[51]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[54]=t[n],s[55]=t,s[56]=n,s}function create_else_block(e){let s,t=e[56]+"",n;return{c(){s=text("Component "),n=text(t)},l(e){s=claim_text(e,"Component "),n=claim_text(e,t)},m(e,t){insert(e,s,t),insert(e,n,t)},p(e,s){s[0]&1&&t!==(t=e[56]+"")&&set_data(n,t)},d(e){e&&detach(s),e&&detach(n)}}}function create_if_block_8(e){let t=(Object.values(e[54])[0].constructor==="".constructor?Object.values(e[54])[0].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[54].length>20?"...":""):Object.keys(e[54])[0])+"",n;return{c(){n=text(t)},l(e){n=claim_text(e,t)},m(e,t){insert(e,n,t)},p(e,s){s[0]&1&&t!==(t=(Object.values(e[54])[0].constructor==="".constructor?Object.values(e[54])[0].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[54].length>20?"...":""):Object.keys(e[54])[0])+"")&&set_data(n,t)},d(e){e&&detach(n)}}}function create_if_block_7(e){let t=e[54].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[54].length>20?"...":"")+"",n;return{c(){n=text(t)},l(e){n=claim_text(e,t)},m(e,t){insert(e,n,t)},p(e,s){s[0]&1&&t!==(t=e[54].replace(/<[^>]*>?/gm,"").slice(0,20).concat(e[54].length>20?"...":"")+"")&&set_data(n,t)},d(e){e&&detach(n)}}}function create_if_block_6(e){let n,t,s,o,i,a;function r(){return e[37](e[54])}return{c(){n=element("button"),t=svg_element("svg"),s=svg_element("path"),o=svg_element("path"),this.h()},l(e){n=claim_element(e,"BUTTON",{class:!0});var i,a=children(n);t=claim_element(a,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0},1),i=children(t),s=claim_element(i,"path",{d:!0,fill:!0},1),children(s).forEach(detach),o=claim_element(i,"path",{d:!0},1),children(o).forEach(detach),i.forEach(detach),a.forEach(detach),this.h()},h(){attr(s,"d","M0 0h24v24H0z"),attr(s,"fill","none"),attr(o,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"height","16"),attr(t,"viewBox","0 0 24 24"),attr(t,"width","16"),attr(n,"class","close svelte-1r2hyh9")},m(e,c){insert(e,n,c),append(n,t),append(t,s),append(t,o),i||(a=listen(n,"click",prevent_default(r)),i=!0)},p(t){e=t},d(e){e&&detach(n),i=!1,a()}}}function create_if_block_5(e){let s,t,l,a,r,c,n,i;function d(t){e[38](t,e[56])}function u(t){e[39](t)}function h(t){e[40](t)}function m(t){e[41](t)}let o={label:null,parentKeys:"",schema:e[8]};return e[0][e[56]]!==void 0&&(o.field=e[0][e[56]]),e[1]!==void 0&&(o.showMediaModal=e[1]),e[2]!==void 0&&(o.changingMedia=e[2]),e[3]!==void 0&&(o.localMediaList=e[3]),t=new DynamicFormInput({props:o}),binding_callbacks.push(()=>bind(t,"field",d)),binding_callbacks.push(()=>bind(t,"showMediaModal",u)),binding_callbacks.push(()=>bind(t,"changingMedia",h)),binding_callbacks.push(()=>bind(t,"localMediaList",m)),{c(){s=element("div"),create_component(t.$$.fragment)},l(e){s=claim_element(e,"DIV",{});var n=children(s);claim_component(t.$$.fragment,n),n.forEach(detach)},m(e,n){insert(e,s,n),mount_component(t,s,null),i=!0},p(n,s){e=n;const o={};s[0]&256&&(o.schema=e[8]),!l&&s[0]&1&&(l=!0,o.field=e[0][e[56]],add_flush_callback(()=>l=!1)),!a&&s[0]&2&&(a=!0,o.showMediaModal=e[1],add_flush_callback(()=>a=!1)),!r&&s[0]&4&&(r=!0,o.changingMedia=e[2],add_flush_callback(()=>r=!1)),!c&&s[0]&8&&(c=!0,o.localMediaList=e[3],add_flush_callback(()=>c=!1)),t.$set(o)},i(e){if(i)return;transition_in(t.$$.fragment,e),add_render_callback(()=>{n||(n=create_bidirectional_transition(s,slide,{duration:300},!0)),n.run(1)}),i=!0},o(e){transition_out(t.$$.fragment,e),n||(n=create_bidirectional_transition(s,slide,{duration:300},!1)),n.run(0),i=!1},d(e){e&&detach(s),destroy_component(t),e&&n&&n.end()}}}function create_each_block_1(e,t){let s,a,l,n,w,b,_,y,O,v,g,L,f,m,d,x,E,S,R,h,c,C,k,A,P,u,I,j,D,N=t[10].includes(t[56]),M,F,T,W,B=noop,p,H,$;function U(...e){return t[35](t[56],...e)}function K(...e){return t[36](t[56],...e)}function V(e){return e[54].constructor==="".constructor?create_if_block_7:e[54].constructor==={}.constructor?create_if_block_8:create_else_block}let z=V(t,[-1,-1]),r=z(t),i=t[7]&&create_if_block_6(t),o=N&&create_if_block_5(t);return{key:e,first:null,c(){s=element("div"),a=element("div"),l=element("div"),n=svg_element("svg"),w=svg_element("path"),b=svg_element("circle"),_=svg_element("circle"),y=svg_element("circle"),O=svg_element("circle"),v=svg_element("circle"),g=svg_element("circle"),L=space(),f=element("div"),m=element("button"),d=svg_element("svg"),x=svg_element("path"),E=svg_element("path"),R=space(),h=element("button"),c=svg_element("svg"),C=svg_element("path"),k=svg_element("path"),P=space(),u=element("div"),r.c(),I=space(),j=element("div"),i&&i.c(),D=space(),o&&o.c(),M=space(),this.h()},l(e){s=claim_element(e,"DIV",{id:!0,"data-index":!0,"data-id":!0,"data-graby":!0,class:!0});var t,p,S,F,T,z,N,H,B,V,A=children(s);a=claim_element(A,"DIV",{class:!0}),t=children(a),l=claim_element(t,"DIV",{class:!0}),H=children(l),n=claim_element(H,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),p=children(n),w=claim_element(p,"path",{stroke:!0,d:!0,fill:!0},1),children(w).forEach(detach),b=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(b).forEach(detach),_=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(_).forEach(detach),y=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(y).forEach(detach),O=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(O).forEach(detach),v=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(v).forEach(detach),g=claim_element(p,"circle",{cx:!0,cy:!0,r:!0},1),children(g).forEach(detach),p.forEach(detach),H.forEach(detach),L=claim_space(t),f=claim_element(t,"DIV",{class:!0}),S=children(f),m=claim_element(S,"BUTTON",{class:!0,style:!0}),z=children(m),d=claim_element(z,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1),T=children(d),x=claim_element(T,"path",{d:!0,fill:!0},1),children(x).forEach(detach),E=claim_element(T,"path",{d:!0},1),children(E).forEach(detach),T.forEach(detach),z.forEach(detach),R=claim_space(S),h=claim_element(S,"BUTTON",{class:!0,style:!0}),N=children(h),c=claim_element(N,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1),F=children(c),C=claim_element(F,"path",{d:!0,fill:!0},1),children(C).forEach(detach),k=claim_element(F,"path",{d:!0},1),children(k).forEach(detach),F.forEach(detach),N.forEach(detach),S.forEach(detach),P=claim_space(t),u=claim_element(t,"DIV",{class:!0}),B=children(u),r.l(B),B.forEach(detach),I=claim_space(t),j=claim_element(t,"DIV",{class:!0}),V=children(j),i&&i.l(V),V.forEach(detach),t.forEach(detach),D=claim_space(A),o&&o.l(A),M=claim_space(A),A.forEach(detach),this.h()},h(){attr(w,"stroke","none"),attr(w,"d","M0 0h24v24H0z"),attr(w,"fill","none"),attr(b,"cx","5"),attr(b,"cy","9"),attr(b,"r","1"),attr(_,"cx","5"),attr(_,"cy","15"),attr(_,"r","1"),attr(y,"cx","12"),attr(y,"cy","9"),attr(y,"r","1"),attr(O,"cx","12"),attr(O,"cy","15"),attr(O,"r","1"),attr(v,"cx","19"),attr(v,"cy","9"),attr(v,"r","1"),attr(g,"cx","19"),attr(g,"cy","15"),attr(g,"r","1"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon icon-tabler icon-tabler-grip-horizontal"),attr(n,"width","30"),attr(n,"height","30"),attr(n,"viewBox","0 0 24 24"),attr(n,"stroke-width","1.5"),attr(n,"stroke","#2c3e50"),attr(n,"fill","none"),attr(n,"stroke-linecap","round"),attr(n,"stroke-linejoin","round"),attr(l,"class","grip svelte-1r2hyh9"),attr(x,"d","M0 0h24v24H0V0z"),attr(x,"fill","none"),attr(E,"d","M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"),attr(d,"xmlns","http://www.w3.org/2000/svg"),attr(d,"viewBox","0 0 24 24"),attr(d,"width","16px"),attr(d,"height","16px"),attr(m,"class","up svelte-1r2hyh9"),attr(m,"style",S="visibility: "+(t[56]>0?"":"hidden")+";"),attr(C,"d","M0 0h24v24H0V0z"),attr(C,"fill","none"),attr(k,"d","M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"),attr(c,"xmlns","http://www.w3.org/2000/svg"),attr(c,"viewBox","0 0 24 24"),attr(c,"width","16px"),attr(c,"height","16px"),attr(h,"class","down svelte-1r2hyh9"),attr(h,"style",A="visibility: "+(t[56]<t[0].length-1?"":"hidden")+";"),attr(f,"class","buttons svelte-1r2hyh9"),attr(u,"class","content svelte-1r2hyh9"),attr(j,"class","buttons svelte-1r2hyh9"),attr(a,"class","item svelte-1r2hyh9"),attr(s,"id",F=t[12]&&t[19]==t[12].dataset.id?"grabbed":""),attr(s,"data-index",T=t[56]),attr(s,"data-id",t[19]),attr(s,"data-graby","0"),attr(s,"class","item-wrapper svelte-1r2hyh9"),this.first=s},m(e,A){insert(e,s,A),append(s,a),append(a,l),append(l,n),append(n,w),append(n,b),append(n,_),append(n,y),append(n,O),append(n,v),append(n,g),append(a,L),append(a,f),append(f,m),append(m,d),append(d,x),append(d,E),append(f,R),append(f,h),append(h,c),append(c,C),append(c,k),append(a,P),append(a,u),r.m(u,null),append(a,I),append(a,j),i&&i.m(j,null),append(s,D),o&&o.m(s,null),append(s,M),p=!0,H||($=[listen(l,"mousedown",t[31]),listen(l,"touchstart",t[32]),listen(l,"mouseenter",t[33]),listen(l,"touchmove",t[34]),listen(m,"click",prevent_default(U)),listen(h,"click",prevent_default(K)),listen(u,"click",prevent_default(function(){is_function(t[18](t[56],t[54]))&&t[18](t[56],t[54]).apply(this,arguments)})),listen(u,"click",function(){is_function(t[29](t[54]))&&t[29](t[54]).apply(this,arguments)})],H=!0)},p(e,n){t=e,(!p||n[0]&1&&S!==(S="visibility: "+(t[56]>0?"":"hidden")+";"))&&attr(m,"style",S),(!p||n[0]&1&&A!==(A="visibility: "+(t[56]<t[0].length-1?"":"hidden")+";"))&&attr(h,"style",A),z===(z=V(t,n))&&r?r.p(t,n):(r.d(1),r=z(t),r&&(r.c(),r.m(u,null))),t[7]?i?i.p(t,n):(i=create_if_block_6(t),i.c(),i.m(j,null)):i&&(i.d(1),i=null),n[0]&1025&&(N=t[10].includes(t[56])),N?o?(o.p(t,n),n[0]&1025&&transition_in(o,1)):(o=create_if_block_5(t),o.c(),transition_in(o,1),o.m(s,M)):o&&(group_outros(),transition_out(o,1,1,()=>{o=null}),check_outros()),(!p||n[0]&4096&&F!==(F=t[12]&&t[19]==t[12].dataset.id?"grabbed":""))&&attr(s,"id",F),(!p||n[0]&1&&T!==(T=t[56]))&&attr(s,"data-index",T)},r(){W=s.getBoundingClientRect()},f(){fix_position(s),B()},a(){B(),B=create_animation(s,W,flip,{duration:t[9]?null:200})},i(){if(p)return;transition_in(o),p=!0},o(){transition_out(o),p=!1},d(e){e&&detach(s),r.d(),i&&i.d(),o&&o.d(),H=!1,run_all($)}}}function create_if_block(e){let o,t,a,r,i,h,d,u,l,c,m,f,s=!e[16]&&create_if_block_4(e),n=e[16]&&create_if_block_1(e);return{c(){o=element("button"),t=svg_element("svg"),a=svg_element("path"),r=svg_element("circle"),i=svg_element("line"),s&&s.c(),h=text(`
            Add new `),d=text(e[4]),l=space(),n&&n.c(),c=empty(),this.h()},l(u){o=claim_element(u,"BUTTON",{class:!0});var m,f=children(o);t=claim_element(f,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),m=children(t),a=claim_element(m,"path",{stroke:!0,d:!0,fill:!0},1),children(a).forEach(detach),r=claim_element(m,"circle",{cx:!0,cy:!0,r:!0},1),children(r).forEach(detach),i=claim_element(m,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(i).forEach(detach),s&&s.l(m),m.forEach(detach),h=claim_text(f,`
            Add new `),d=claim_text(f,e[4]),f.forEach(detach),l=claim_space(u),n&&n.l(u),c=empty(),this.h()},h(){attr(a,"stroke","none"),attr(a,"d","M0 0h24v24H0z"),attr(a,"fill","none"),attr(r,"cx","12"),attr(r,"cy","12"),attr(r,"r","9"),attr(i,"x1","9"),attr(i,"y1","12"),attr(i,"x2","15"),attr(i,"y2","12"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-circle-plus"),attr(t,"width","24"),attr(t,"height","24"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#1c7fc7"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(o,"class",u="add"+(e[16]?" open":"")+" svelte-1r2hyh9")},m(u,p){insert(u,o,p),append(o,t),append(t,a),append(t,r),append(t,i),s&&s.m(t,null),append(o,h),append(o,d),insert(u,l,p),n&&n.m(u,p),insert(u,c,p),m||(f=listen(o,"click",prevent_default(e[27])),m=!0)},p(e,i){e[16]?s&&(s.d(1),s=null):s||(s=create_if_block_4(e),s.c(),s.m(t,null)),i[0]&16&&set_data(d,e[4]),i[0]&65536&&u!==(u="add"+(e[16]?" open":"")+" svelte-1r2hyh9")&&attr(o,"class",u),e[16]?n?(n.p(e,i),i[0]&65536&&transition_in(n,1)):(n=create_if_block_1(e),n.c(),transition_in(n,1),n.m(c.parentNode,c)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros())},d(e){e&&detach(o),s&&s.d(),e&&detach(l),n&&n.d(e),e&&detach(c),m=!1,f()}}}function create_if_block_4(){let t;return{c(){t=svg_element("line"),this.h()},l(e){t=claim_element(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(t).forEach(detach),this.h()},h(){attr(t,"x1","12"),attr(t,"y1","9"),attr(t,"x2","12"),attr(t,"y2","15")},m(e,n){insert(e,t,n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let n,s,i,o=e[6][e[5]].options,t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block(get_each_context(e,o,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","add-list svelte-1r2hyh9")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null);i=!0},p(e,s){if(s[0]&268566624){o=e[6][e[5]].options;let i;for(i=0;i<o.length;i+=1){const a=get_each_context(e,o,i);t[i]?t[i].p(a,s):(t[i]=create_each_block(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=o.length}},i(e){if(i)return;e&&add_render_callback(()=>{s||(s=create_bidirectional_transition(n,slide,{duration:300},!0)),s.run(1)}),i=!0},o(e){e&&(s||(s=create_bidirectional_transition(n,slide,{duration:300},!1)),s.run(0)),i=!1},d(e){e&&detach(n),destroy_each(t,e),e&&s&&s.end()}}}function create_if_block_3(){let t,o,n,s;return{c(){t=svg_element("svg"),o=svg_element("path"),n=svg_element("line"),s=svg_element("line"),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var i=children(t);o=claim_element(i,"path",{stroke:!0,d:!0,fill:!0},1),children(o).forEach(detach),n=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(n).forEach(detach),s=claim_element(i,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(s).forEach(detach),i.forEach(detach),this.h()},h(){attr(o,"stroke","none"),attr(o,"d","M0 0h24v24H0z"),attr(o,"fill","none"),attr(n,"x1","18"),attr(n,"y1","6"),attr(n,"x2","6"),attr(n,"y2","18"),attr(s,"x1","6"),attr(s,"y1","6"),attr(s,"x2","18"),attr(s,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x"),attr(t,"width","15"),attr(t,"height","15"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#ed0f0f"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,i){insert(e,t,i),append(t,o),append(t,n),append(t,s)},d(e){e&&detach(t)}}}function create_if_block_2(){let t,n,s;return{c(){t=svg_element("svg"),n=svg_element("path"),s=svg_element("path"),this.h()},l(e){t=claim_element(e,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var o=children(t);n=claim_element(o,"path",{stroke:!0,d:!0,fill:!0},1),children(n).forEach(detach),s=claim_element(o,"path",{d:!0},1),children(s).forEach(detach),o.forEach(detach),this.h()},h(){attr(n,"stroke","none"),attr(n,"d","M0 0h24v24H0z"),attr(n,"fill","none"),attr(s,"d","M5 12l5 5l10 -10"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-check"),attr(t,"width","15"),attr(t,"height","15"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#4bb543"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round")},m(e,o){insert(e,t,o),append(t,n),append(t,s)},d(e){e&&detach(t)}}}function create_each_block(e){let n,i,o=e[51]+"",a,r,c,l;function d(e){if(e[17]===e[51])return create_if_block_2;if(e[17]===e[51]+"not_found")return create_if_block_3}let s=d(e,[-1,-1]),t=s&&s(e);function u(){return e[46](e[51])}return{c(){n=element("button"),t&&t.c(),i=space(),a=text(o),r=space(),this.h()},l(e){n=claim_element(e,"BUTTON",{class:!0});var s=children(n);t&&t.l(s),i=claim_space(s),a=claim_text(s,o),r=claim_space(s),s.forEach(detach),this.h()},h(){attr(n,"class","add-name svelte-1r2hyh9")},m(e,s){insert(e,n,s),t&&t.m(n,null),append(n,i),append(n,a),append(n,r),c||(l=listen(n,"click",prevent_default(u)),c=!0)},p(r,c){e=r,s!==(s=d(e,c))&&(t&&t.d(1),t=s&&s(e),t&&(t.c(),t.m(n,i))),c[0]&96&&o!==(o=e[51]+"")&&set_data(a,o)},d(e){e&&detach(n),t&&t.d(),c=!1,l()}}}function create_fragment(e){let s,i,c,d,l,m,o,t=[],g=new Map,u,a,h,f,r=e[0];const p=e=>e[19]=e[9]?e[56]:JSON.stringify(e[54]);for(let n=0;n<r.length;n+=1){let s=get_each_context_1(e,r,n),o=p(s);g.set(o,t[n]=create_each_block_1(o,s))}let n=e[6]&&e[6][e[5]]?.options.length>0&&create_if_block(e);return{c(){s=element("div"),i=element("div"),c=element("p"),m=space(),o=element("div");for(let e=0;e<t.length;e+=1)t[e].c();u=space(),n&&n.c(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var r,l,a=children(s);i=claim_element(a,"DIV",{id:!0,class:!0,style:!0}),r=children(i),c=claim_element(r,"P",{class:!0}),children(c).forEach(detach),r.forEach(detach),m=claim_space(a),o=claim_element(a,"DIV",{class:!0}),l=children(o);for(let e=0;e<t.length;e+=1)t[e].l(l);l.forEach(detach),u=claim_space(a),n&&n.l(a),a.forEach(detach),this.h()},h(){attr(c,"class","svelte-1r2hyh9"),attr(i,"id","ghost"),attr(i,"class",d=""+(null_to_empty(e[12]?"item haunting":"item")+" svelte-1r2hyh9")),attr(i,"style",l="top: "+(e[13]+e[14]-e[15])+"px"),attr(o,"class","list svelte-1r2hyh9"),attr(s,"class","dragdroplist svelte-1r2hyh9")},m(r,l){insert(r,s,l),append(s,i),append(i,c),e[30](i),append(s,m),append(s,o);for(let e=0;e<t.length;e+=1)t[e].m(o,null);append(s,u),n&&n.m(s,null),a=!0,h||(f=[listen(o,"mousemove",e[42]),listen(o,"touchmove",e[43]),listen(o,"mouseup",e[44]),listen(o,"touchend",e[45])],h=!0)},p(e,c){if((!a||c[0]&4096&&d!==(d=""+(null_to_empty(e[12]?"item haunting":"item")+" svelte-1r2hyh9")))&&attr(i,"class",d),(!a||c[0]&57344&&l!==(l="top: "+(e[13]+e[14]-e[15])+"px"))&&attr(i,"style",l),c[0]&635180943){r=e[0],group_outros();for(let e=0;e<t.length;e+=1)t[e].r();t=update_keyed_each(t,c,p,1,e,r,g,o,fix_and_outro_and_destroy_block,create_each_block_1,null,get_each_context_1);for(let e=0;e<t.length;e+=1)t[e].a();check_outros()}e[6]&&e[6][e[5]]?.options.length>0?n?n.p(e,c):(n=create_if_block(e),n.c(),n.m(s,null)):n&&(n.d(1),n=null)},i(){if(a)return;for(let e=0;e<r.length;e+=1)transition_in(t[e]);a=!0},o(){for(let e=0;e<t.length;e+=1)transition_out(t[e]);a=!1},d(o){o&&detach(s),e[30](null);for(let e=0;e<t.length;e+=1)t[e].d();n&&n.d(),h=!1,run_all(f)}}}function instance(e,t,n){let{field:s}=t,{label:S}=t,{showMediaModal:c}=t,{changingMedia:d}=t,{localMediaList:l}=t,{parentKeys:k}=t,{schema:F}=t;const C=(e,t)=>{let s=Object.keys(e).sort(),o=Object.keys(t).sort(),n=JSON.stringify(s)===JSON.stringify(o);if(n)for(let[s,o]of Object.entries(e))if(o.constructor==={}.constructor&&t.hasOwnProperty(s)&&t[s].constructor==={}.constructor&&(n=C(o,t[s]),!n))break;return n};let x;const N=e=>{let t=structuredClone(allComponentDefaults),o=structuredClone(allComponentSchemas),s=structuredClone(e);delete s.plenti_salt;for(const e in t)C(t[e],s)&&n(8,x=o[e])};let f=!1,i=[];const D=(e,t)=>{N(t),i.length===1&&i.includes(e)&&setTimeout(()=>{n(9,f=!1)},300),i.includes(e)?n(10,i=i.filter(t=>t!==e)):(n(10,i=[...i,e]),n(9,f=!0))};let{removesItems:b=!0}=t,z,a,o,y,_=0,A=0,O=0;const m=(e,t)=>{n(12,o=t),n(12,o.dataset.grabY=e,o),n(11,a.innerHTML=o.innerHTML,a),n(14,A=o.getBoundingClientRect().y-e),r(e)},r=e=>{o&&(n(13,_=e),n(15,O=a.parentNode.getBoundingClientRect().y))},E=e=>{r(e.clientY);let t=document.elementFromPoint(e.clientX,e.clientY).closest(".item-wrapper");t&&t!=y&&(y=t,p(e,t))},p=(e,t)=>{o&&t!=o&&t.classList.contains("item-wrapper")&&u(parseInt(o.dataset.index),parseInt(t.dataset.index))},u=(e,t)=>{let o=s[e];n(0,s[e]=s[t],s),n(0,s[t]=o,s)},g=e=>{n(12,o=null)},M=e=>{n(0,s=s.filter(t=>t!==e))};let v=!1;const T=()=>{n(16,v=!v)};let h;const j=e=>{let t=structuredClone(allComponentDefaults);e in t?(s.forEach(n=>{JSON.stringify(n)===JSON.stringify(t[e])&&(t[e].plenti_salt=w())}),n(0,s=[...s,t[e]]),n(17,h=e)):n(17,h=e+"not_found"),setTimeout(()=>{n(17,h="")},250)},w=()=>(Math.random()+1).toString(36).substring(7),L=e=>{if(e.constructor!=={}.constructor)return;if("plenti_salt"in e){for(const n of s){let t=structuredClone(e);if(delete t.plenti_salt,JSON.stringify(n)===JSON.stringify(t))return}delete e.plenti_salt,e=e}else s.filter(t=>JSON.stringify(t)===JSON.stringify(e)).length>1&&(e.plenti_salt=w())};function R(e){binding_callbacks[e?"unshift":"push"](()=>{a=e,n(11,a)})}const P=function(e){m(e.clientY,this.closest(".item-wrapper"))},H=function(e){m(e.touches[0].clientY,this.closest(".item-wrapper"))},I=function(e){e.stopPropagation(),p(e,e.target.closest(".item-wrapper"))},B=function(e){e.stopPropagation(),e.preventDefault(),E(e.touches[0])},V=function(e){u(e,e-1)},$=function(e){u(e,e+1)},W=e=>M(e);function U(t,o){e.$$.not_equal(s[o],t)&&(s[o]=t,n(0,s))}function K(e){c=e,n(1,c)}function q(e){d=e,n(2,d)}function Y(e){l=e,n(3,l)}const G=function(e){e.stopPropagation(),r(e.clientY)},X=function(e){e.stopPropagation(),r(e.touches[0].clientY)},Q=function(e){e.stopPropagation(),g(e)},Z=function(e){e.stopPropagation(),g(e.touches[0])},J=e=>j(e);return e.$$set=e=>{"field"in e&&n(0,s=e.field),"label"in e&&n(4,S=e.label),"showMediaModal"in e&&n(1,c=e.showMediaModal),"changingMedia"in e&&n(2,d=e.changingMedia),"localMediaList"in e&&n(3,l=e.localMediaList),"parentKeys"in e&&n(5,k=e.parentKeys),"schema"in e&&n(6,F=e.schema),"removesItems"in e&&n(7,b=e.removesItems)},[s,c,d,l,S,k,F,b,x,f,i,a,o,_,A,O,v,h,D,z,m,r,E,p,u,g,M,T,j,L,R,P,H,I,B,V,$,W,U,K,q,Y,G,X,Q,Z,J]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,label:4,showMediaModal:1,changingMedia:2,localMediaList:3,parentKeys:5,schema:6,removesItems:7},[-1,-1])}}export default Component