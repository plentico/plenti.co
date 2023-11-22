import{SvelteComponent,append_hydration,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,group_outros,init,insert_hydration,is_function,listen,mount_component,noop,prevent_default,safe_not_equal,set_data,space,src_url_equal,subscribe,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Linux from"../components/linux.js";import Mac from"../components/mac.js";import Windows from"../components/windows.js";import{onMount}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[12]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[15]=t[n],s}function get_each_context_2(e,t,n){const s=e.slice();return s[15]=t[n],s}function get_each_context_3(e,t,n){const s=e.slice();return s[20]=t[n],s}function create_if_block_12(e){let n,s=e[1],t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_3(get_each_context_3(e,s,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){n=claim_element(e,"DIV",{});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach)},m(e,s){insert_hydration(e,n,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(e,o){if(o&2){s=e[1];let i;for(i=0;i<s.length;i+=1){const a=get_each_context_3(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block_3(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_each_block_3(e){let t,n=e[20]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert_hydration(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[20]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block_11(e){let t,n,s,o;return{c(){t=element("button"),n=text("Login")},l(e){t=claim_element(e,"BUTTON",{});var s=children(t);n=claim_text(s,"Login"),s.forEach(detach)},m(i,a){insert_hydration(i,t,a),append_hydration(t,n),s||(o=listen(t,"click",prevent_default(function(){is_function(e[10].login)&&e[10].login.apply(this,arguments)})),s=!0)},p(t){e=t},d(e){e&&detach(t),s=!1,o()}}}function create_if_block_10(e){let n,s=e[7].filter(func),t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_2(get_each_context_2(e,s,n));return{c(){n=element("section");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"SECTION",{id:!0,class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"id","themes"),attr(n,"class","svelte-mkvtgb")},m(e,s){insert_hydration(e,n,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(e,o){if(o&128){s=e[7].filter(func);let i;for(i=0;i<s.length;i+=1){const a=get_each_context_2(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block_2(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_each_block_2(e){let t,n,s,o,a,i;return{c(){t=element("a"),n=element("img"),a=space(),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var s=children(t);n=claim_element(s,"IMG",{src:!0,alt:!0,class:!0}),a=claim_space(s),s.forEach(detach),this.h()},h(){src_url_equal(n.src,s="/media/themes/"+e[15].fields.name.toLowerCase().replaceAll(" ","-")+".webp")||attr(n,"src",s),attr(n,"alt",o="Screenshot for "+e[15].fields.name),attr(n,"class","svelte-mkvtgb"),attr(t,"href",i="/themes/"+e[15].fields.name.toLowerCase().replaceAll(" ","-")),attr(t,"class","svelte-mkvtgb")},m(e,s){insert_hydration(e,t,s),append_hydration(t,n),append_hydration(t,a)},p(e,a){a&128&&!src_url_equal(n.src,s="/media/themes/"+e[15].fields.name.toLowerCase().replaceAll(" ","-")+".webp")&&attr(n,"src",s),a&128&&o!==(o="Screenshot for "+e[15].fields.name)&&attr(n,"alt",o),a&128&&i!==(i="/themes/"+e[15].fields.name.toLowerCase().replaceAll(" ","-"))&&attr(t,"href",i)},d(e){e&&detach(t)}}}function create_if_block_9(e){let s,a,i,n,o=e[4],t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block_1(get_each_context_1(e,o,n));return{c(){s=element("div"),a=text("(More themes coming soon)"),i=space(),n=element("section");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var o,r=children(s);a=claim_text(r,"(More themes coming soon)"),r.forEach(detach),i=claim_space(e),n=claim_element(e,"SECTION",{id:!0,class:!0}),o=children(n);for(let e=0;e<t.length;e+=1)t[e].l(o);o.forEach(detach),this.h()},h(){attr(s,"class","upcoming-themes svelte-mkvtgb"),attr(n,"id","themes"),attr(n,"class","svelte-mkvtgb")},m(e,o){insert_hydration(e,s,o),append_hydration(s,a),insert_hydration(e,i,o),insert_hydration(e,n,o);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(e,s){if(s&16){o=e[4];let i;for(i=0;i<o.length;i+=1){const a=get_each_context_1(e,o,i);t[i]?t[i].p(a,s):(t[i]=create_each_block_1(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=o.length}},d(e){e&&detach(s),e&&detach(i),e&&detach(n),destroy_each(t,e)}}}function create_each_block_1(e){let t,n,s;return{c(){t=element("img"),this.h()},l(e){t=claim_element(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){src_url_equal(t.src,n="/media/themes/"+e[15])||attr(t,"src",n),attr(t,"alt",s="Screenshot for "+e[15]),attr(t,"class","svelte-mkvtgb")},m(e,n){insert_hydration(e,t,n)},p(e,o){o&16&&!src_url_equal(t.src,n="/media/themes/"+e[15])&&attr(t,"src",n),o&16&&s!==(s="Screenshot for "+e[15])&&attr(t,"alt",s)},d(e){e&&detach(t)}}}function create_if_block(e){let i,h,o,c,a,d,r=e[3],t=[];for(let n=0;n<r.length;n+=1)t[n]=create_each_block(get_each_context(e,r,n));const p=e=>transition_out(t[e],1,1,()=>{t[e]=null});function m(e){return e[8]=="Linux"||e[8]=="Mac"?create_if_block_4:e[8]=="Windows"?create_if_block_5:create_else_block_1}let l=m(e,-1),n=l(e);function f(e){return e[8]=="Linux"?create_if_block_1:e[8]=="Mac"?create_if_block_2:e[8]=="Windows"?create_if_block_3:create_else_block}let u=f(e,-1),s=u(e);return{c(){i=element("section");for(let e=0;e<t.length;e+=1)t[e].c();h=space(),o=element("section"),n.c(),c=space(),a=element("section"),s.c(),this.h()},l(e){i=claim_element(e,"SECTION",{id:!0,class:!0});var r,l,d=children(i);for(let e=0;e<t.length;e+=1)t[e].l(d);d.forEach(detach),h=claim_space(e),o=claim_element(e,"SECTION",{id:!0,class:!0}),r=children(o),n.l(r),r.forEach(detach),c=claim_space(e),a=claim_element(e,"SECTION",{id:!0}),l=children(a),s.l(l),l.forEach(detach),this.h()},h(){attr(i,"id","download"),attr(i,"class","svelte-mkvtgb"),attr(o,"id","detection"),attr(o,"class","svelte-mkvtgb"),attr(a,"id","instructions")},m(e,r){insert_hydration(e,i,r);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null);insert_hydration(e,h,r),insert_hydration(e,o,r),n.m(o,null),insert_hydration(e,c,r),insert_hydration(e,a,r),s.m(a,null),d=!0},p(e,c){if(c&264){r=e[3];let n;for(n=0;n<r.length;n+=1){const s=get_each_context(e,r,n);t[n]?(t[n].p(s,c),transition_in(t[n],1)):(t[n]=create_each_block(s),t[n].c(),transition_in(t[n],1),t[n].m(i,null))}group_outros();for(n=r.length;n<t.length;n+=1)p(n);check_outros()}l===(l=m(e,c))&&n?n.p(e,c):(n.d(1),n=l(e),n&&(n.c(),n.m(o,null))),u!==(u=f(e,c))&&(s.d(1),s=u(e),s&&(s.c(),s.m(a,null)))},i(){if(d)return;for(let e=0;e<r.length;e+=1)transition_in(t[e]);d=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);d=!1},d(e){e&&detach(i),destroy_each(t,e),e&&detach(h),e&&detach(o),n.d(),e&&detach(c),e&&detach(a),s.d()}}}function create_else_block_2(){let t,n;return{c(){t=element("strong"),n=text("We can't determine what Operating System you're on.")},l(e){t=claim_element(e,"STRONG",{});var s=children(t);n=claim_text(s,"We can't determine what Operating System you're on."),s.forEach(detach)},m(e,s){insert_hydration(e,t,s),append_hydration(t,n)},i:noop,o:noop,d(e){e&&detach(t)}}}function create_if_block_8(){let t,n;return t=new Windows({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_7(){let t,n;return t=new Mac({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_6(){let t,n;return t=new Linux({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_each_block(e){let t,n,s,d,i,r=e[12].title+"",l,u,c,a,h,m;const f=[create_if_block_6,create_if_block_7,create_if_block_8,create_else_block_2],o=[];function p(e){return e[12].title=="Linux"?0:e[12].title=="Mac"?1:e[12].title=="Windows"?2:3}n=p(e,-1),s=o[n]=f[n](e);function g(){return e[11](e[12])}return{c(){t=element("div"),s.c(),d=space(),i=element("div"),l=text(r),u=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var o,n=children(t);s.l(n),d=claim_space(n),i=claim_element(n,"DIV",{class:!0}),o=children(i),l=claim_text(o,r),o.forEach(detach),u=claim_space(n),n.forEach(detach),this.h()},h(){attr(i,"class","os-name svelte-mkvtgb"),attr(t,"class",c="os"+(e[12].title==e[8]?" primary":"")+" svelte-mkvtgb")},m(e,s){insert_hydration(e,t,s),o[n].m(t,null),append_hydration(t,d),append_hydration(t,i),append_hydration(i,l),append_hydration(t,u),a=!0,h||(m=listen(t,"click",g),h=!0)},p(i,u){e=i;let h=n;n=p(e,u),n!==h&&(group_outros(),transition_out(o[h],1,1,()=>{o[h]=null}),check_outros(),s=o[n],s||(s=o[n]=f[n](e),s.c()),transition_in(s,1),s.m(t,d)),(!a||u&8)&&r!==(r=e[12].title+"")&&set_data(l,r),(!a||u&264&&c!==(c="os"+(e[12].title==e[8]?" primary":"")+" svelte-mkvtgb"))&&attr(t,"class",c)},i(){if(a)return;transition_in(s),a=!0},o(){transition_out(s),a=!1},d(e){e&&detach(t),o[n].d(),h=!1,m()}}}function create_else_block_1(){let t,n,i,o,s,a;return{c(){t=element("div"),n=element("a"),i=text("See the latest releases"),o=space(),s=element("div"),a=text("Or use one of the package managers below..."),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var r,c,l=children(t);n=claim_element(l,"A",{href:!0,class:!0}),r=children(n),i=claim_text(r,"See the latest releases"),r.forEach(detach),l.forEach(detach),o=claim_space(e),s=claim_element(e,"DIV",{class:!0}),c=children(s),a=claim_text(c,"Or use one of the package managers below..."),c.forEach(detach),this.h()},h(){attr(n,"href","https://github.com/plentico/plenti/releases/latest"),attr(n,"class","svelte-mkvtgb"),attr(t,"class","selected svelte-mkvtgb"),attr(s,"class","instructions svelte-mkvtgb")},m(e,r){insert_hydration(e,t,r),append_hydration(t,n),append_hydration(n,i),insert_hydration(e,o,r),insert_hydration(e,s,r),append_hydration(s,a)},p:noop,d(e){e&&detach(t),e&&detach(o),e&&detach(s)}}}function create_if_block_5(e){let s,m,c,d,a,o,i,u,r,t,h,n,f,p,l;return{c(){s=element("div"),m=text("It looks like you're using a "),c=text(e[8]),d=text(" computer."),a=space(),o=element("div"),i=element("strong"),u=text("Unfortunately Windows is not currently supported."),r=space(),t=element("div"),h=text("If you'd like to help add Windows support, please see more details "),n=element("a"),f=text("here"),p=text("."),l=element("strong"),this.h()},l(g){s=claim_element(g,"DIV",{class:!0});var v,j,y,_,b=children(s);m=claim_text(b,"It looks like you're using a "),c=claim_text(b,e[8]),d=claim_text(b," computer."),b.forEach(detach),a=claim_space(g),o=claim_element(g,"DIV",{class:!0}),j=children(o),i=claim_element(j,"STRONG",{}),y=children(i),u=claim_text(y,"Unfortunately Windows is not currently supported."),y.forEach(detach),j.forEach(detach),r=claim_space(g),t=claim_element(g,"DIV",{class:!0}),v=children(t),h=claim_text(v,"If you'd like to help add Windows support, please see more details "),n=claim_element(v,"A",{href:!0,target:!0,rel:!0,class:!0}),_=children(n),f=claim_text(_,"here"),_.forEach(detach),p=claim_text(v,"."),l=claim_element(v,"STRONG",{}),children(l).forEach(detach),v.forEach(detach),this.h()},h(){attr(s,"class","selected svelte-mkvtgb"),attr(o,"class","selected svelte-mkvtgb"),attr(n,"href","https://github.com/plentico/plenti/issues/45"),attr(n,"target","blank"),attr(n,"rel","noopener noreferrer"),attr(n,"class","svelte-mkvtgb"),attr(t,"class","selected svelte-mkvtgb")},m(e,g){insert_hydration(e,s,g),append_hydration(s,m),append_hydration(s,c),append_hydration(s,d),insert_hydration(e,a,g),insert_hydration(e,o,g),append_hydration(o,i),append_hydration(i,u),insert_hydration(e,r,g),insert_hydration(e,t,g),append_hydration(t,h),append_hydration(t,n),append_hydration(n,f),append_hydration(t,p),append_hydration(t,l)},p(e,t){t&256&&set_data(c,e[8])},d(e){e&&detach(s),e&&detach(a),e&&detach(o),e&&detach(r),e&&detach(t)}}}function create_if_block_4(e){let n,w,l,y,c,o,f,d,t,j,b,a,v,r,p,g,m,h,u,s,_,i,O,x;return{c(){n=element("div"),w=text("It looks like you're using a "),l=text(e[8]),y=text(" computer."),c=space(),o=element("div"),f=text("If that's not the case, choose a different Operating System above."),d=space(),t=element("a"),j=text("Download"),b=element("br"),a=element("strong"),v=text("version "),r=text(e[9]),p=element("br"),g=text("for 64-bit "),m=text(e[8]),u=space(),s=element("div"),_=text("("),i=element("a"),O=text("See more options"),x=text(")"),this.h()},l(h){n=claim_element(h,"DIV",{class:!0});var C,E,A,S,M,k=children(n);w=claim_text(k,"It looks like you're using a "),l=claim_text(k,e[8]),y=claim_text(k," computer."),k.forEach(detach),c=claim_space(h),o=claim_element(h,"DIV",{class:!0}),S=children(o),f=claim_text(S,"If that's not the case, choose a different Operating System above."),S.forEach(detach),d=claim_space(h),t=claim_element(h,"A",{class:!0,href:!0}),C=children(t),j=claim_text(C,"Download"),b=claim_element(C,"BR",{}),a=claim_element(C,"STRONG",{}),A=children(a),v=claim_text(A,"version "),r=claim_text(A,e[9]),A.forEach(detach),p=claim_element(C,"BR",{}),g=claim_text(C,"for 64-bit "),m=claim_text(C,e[8]),C.forEach(detach),u=claim_space(h),s=claim_element(h,"DIV",{}),E=children(s),_=claim_text(E,"("),i=claim_element(E,"A",{href:!0,class:!0}),M=children(i),O=claim_text(M,"See more options"),M.forEach(detach),x=claim_text(E,")"),E.forEach(detach),this.h()},h(){attr(n,"class","selected svelte-mkvtgb"),attr(o,"class","instructions svelte-mkvtgb"),attr(t,"class","cta svelte-mkvtgb"),attr(t,"href",h="https://github.com/plentico/plenti/releases/download/v"+e[9]+"/plenti_"+e[9]+"_"+e[8]+"_64-bit.tar.gz"),attr(i,"href","https://github.com/plentico/plenti/releases/latest"),attr(i,"class","svelte-mkvtgb")},m(e,h){insert_hydration(e,n,h),append_hydration(n,w),append_hydration(n,l),append_hydration(n,y),insert_hydration(e,c,h),insert_hydration(e,o,h),append_hydration(o,f),insert_hydration(e,d,h),insert_hydration(e,t,h),append_hydration(t,j),append_hydration(t,b),append_hydration(t,a),append_hydration(a,v),append_hydration(a,r),append_hydration(t,p),append_hydration(t,g),append_hydration(t,m),insert_hydration(e,u,h),insert_hydration(e,s,h),append_hydration(s,_),append_hydration(s,i),append_hydration(i,O),append_hydration(s,x)},p(e,n){n&256&&set_data(l,e[8]),n&512&&set_data(r,e[9]),n&256&&set_data(m,e[8]),n&768&&h!==(h="https://github.com/plentico/plenti/releases/download/v"+e[9]+"/plenti_"+e[9]+"_"+e[8]+"_64-bit.tar.gz")&&attr(t,"href",h)},d(e){e&&detach(n),e&&detach(c),e&&detach(o),e&&detach(d),e&&detach(t),e&&detach(u),e&&detach(s)}}}function create_else_block(){let i,x,g,f,m,a,O,v,s,w,u,h,r,n,_,j,b,c,o,y,p,d,l,t,C,E,k;return{c(){i=element("strong"),x=text("Install using Snap:"),g=element("br"),f=element("br"),m=space(),a=element("codeblock"),O=text("sudo snap install plenti"),v=space(),s=element("strong"),w=text("Install using Homebrew:"),u=element("br"),h=element("br"),r=space(),n=element("codeblock"),_=text(`brew tap plentico/homebrew-plenti
          `),j=element("br"),b=text("brew install plenti"),c=space(),o=element("strong"),y=text("Install using Scoop:"),p=element("br"),d=element("br"),l=space(),t=element("codeblock"),C=text(`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),E=element("br"),k=text("scoop install plentico/scoop-plenti")},l(e){i=claim_element(e,"STRONG",{});var A,S,M,F,T,z=children(i);x=claim_text(z,"Install using Snap:"),z.forEach(detach),g=claim_element(e,"BR",{}),f=claim_element(e,"BR",{}),m=claim_space(e),a=claim_element(e,"CODEBLOCK",{}),M=children(a),O=claim_text(M,"sudo snap install plenti"),M.forEach(detach),v=claim_space(e),s=claim_element(e,"STRONG",{}),F=children(s),w=claim_text(F,"Install using Homebrew:"),F.forEach(detach),u=claim_element(e,"BR",{}),h=claim_element(e,"BR",{}),r=claim_space(e),n=claim_element(e,"CODEBLOCK",{}),A=children(n),_=claim_text(A,`brew tap plentico/homebrew-plenti
          `),j=claim_element(A,"BR",{}),b=claim_text(A,"brew install plenti"),A.forEach(detach),c=claim_space(e),o=claim_element(e,"STRONG",{}),T=children(o),y=claim_text(T,"Install using Scoop:"),T.forEach(detach),p=claim_element(e,"BR",{}),d=claim_element(e,"BR",{}),l=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),S=children(t),C=claim_text(S,`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),E=claim_element(S,"BR",{}),k=claim_text(S,"scoop install plentico/scoop-plenti"),S.forEach(detach)},m(e,A){insert_hydration(e,i,A),append_hydration(i,x),insert_hydration(e,g,A),insert_hydration(e,f,A),insert_hydration(e,m,A),insert_hydration(e,a,A),append_hydration(a,O),insert_hydration(e,v,A),insert_hydration(e,s,A),append_hydration(s,w),insert_hydration(e,u,A),insert_hydration(e,h,A),insert_hydration(e,r,A),insert_hydration(e,n,A),append_hydration(n,_),append_hydration(n,j),append_hydration(n,b),insert_hydration(e,c,A),insert_hydration(e,o,A),append_hydration(o,y),insert_hydration(e,p,A),insert_hydration(e,d,A),insert_hydration(e,l,A),insert_hydration(e,t,A),append_hydration(t,C),append_hydration(t,E),append_hydration(t,k)},d(e){e&&detach(i),e&&detach(g),e&&detach(f),e&&detach(m),e&&detach(a),e&&detach(v),e&&detach(s),e&&detach(u),e&&detach(h),e&&detach(r),e&&detach(n),e&&detach(c),e&&detach(o),e&&detach(p),e&&detach(d),e&&detach(l),e&&detach(t)}}}function create_if_block_3(){let n,a,s,o,i,t,r,c,l;return{c(){n=element("strong"),a=text("Or you can install using Scoop (Currently not supported):"),s=element("br"),o=element("br"),i=space(),t=element("codeblock"),r=text(`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),c=element("br"),l=text("scoop install plentico/scoop-plenti")},l(e){n=claim_element(e,"STRONG",{});var d,u=children(n);a=claim_text(u,"Or you can install using Scoop (Currently not supported):"),u.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),d=children(t),r=claim_text(d,`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),c=claim_element(d,"BR",{}),l=claim_text(d,"scoop install plentico/scoop-plenti"),d.forEach(detach)},m(e,d){insert_hydration(e,n,d),append_hydration(n,a),insert_hydration(e,s,d),insert_hydration(e,o,d),insert_hydration(e,i,d),insert_hydration(e,t,d),append_hydration(t,r),append_hydration(t,c),append_hydration(t,l)},d(e){e&&detach(n),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(t)}}}function create_if_block_2(){let n,a,s,o,i,t,r,c,l;return{c(){n=element("strong"),a=text("Or you can install using Homebrew:"),s=element("br"),o=element("br"),i=space(),t=element("codeblock"),r=text(`brew tap plentico/homebrew-plenti
          `),c=element("br"),l=text("brew install plenti")},l(e){n=claim_element(e,"STRONG",{});var d,u=children(n);a=claim_text(u,"Or you can install using Homebrew:"),u.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),d=children(t),r=claim_text(d,`brew tap plentico/homebrew-plenti
          `),c=claim_element(d,"BR",{}),l=claim_text(d,"brew install plenti"),d.forEach(detach)},m(e,d){insert_hydration(e,n,d),append_hydration(n,a),insert_hydration(e,s,d),insert_hydration(e,o,d),insert_hydration(e,i,d),insert_hydration(e,t,d),append_hydration(t,r),append_hydration(t,c),append_hydration(t,l)},d(e){e&&detach(n),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(t)}}}function create_if_block_1(){let t,a,s,o,i,n,r;return{c(){t=element("strong"),a=text("Or you can install using Snap:"),s=element("br"),o=element("br"),i=space(),n=element("codeblock"),r=text("sudo snap install plenti")},l(e){t=claim_element(e,"STRONG",{});var c,l=children(t);a=claim_text(l,"Or you can install using Snap:"),l.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),n=claim_element(e,"CODEBLOCK",{}),c=children(n),r=claim_text(c,"sudo snap install plenti"),c.forEach(detach)},m(e,c){insert_hydration(e,t,c),append_hydration(t,a),insert_hydration(e,s,c),insert_hydration(e,o,c),insert_hydration(e,i,c),insert_hydration(e,n,c),append_hydration(n,r)},d(e){e&&detach(t),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(n)}}}function create_fragment(e){let t,r,m,f,h,u,l,d,c,a=e[1]&&create_if_block_12(e),i=e[5]&&create_if_block_11(e),o=e[2]&&create_if_block_10(e),s=e[4]&&create_if_block_9(e),n=e[3]&&create_if_block(e);return{c(){t=element("div"),r=element("h1"),m=text(e[0]),f=space(),a&&a.c(),h=space(),i&&i.c(),u=space(),o&&o.c(),l=space(),s&&s.c(),d=space(),n&&n.c(),this.h()},l(c){t=claim_element(c,"DIV",{class:!0});var g,p=children(t);r=claim_element(p,"H1",{class:!0}),g=children(r),m=claim_text(g,e[0]),g.forEach(detach),f=claim_space(p),a&&a.l(p),h=claim_space(p),i&&i.l(p),u=claim_space(p),o&&o.l(p),l=claim_space(p),s&&s.l(p),d=claim_space(p),n&&n.l(p),p.forEach(detach),this.h()},h(){attr(r,"class","svelte-mkvtgb"),attr(t,"class","container")},m(e,p){insert_hydration(e,t,p),append_hydration(t,r),append_hydration(r,m),append_hydration(t,f),a&&a.m(t,null),append_hydration(t,h),i&&i.m(t,null),append_hydration(t,u),o&&o.m(t,null),append_hydration(t,l),s&&s.m(t,null),append_hydration(t,d),n&&n.m(t,null),c=!0},p(e,[r]){(!c||r&1)&&set_data(m,e[0]),e[1]?a?a.p(e,r):(a=create_if_block_12(e),a.c(),a.m(t,h)):a&&(a.d(1),a=null),e[5]?i?i.p(e,r):(i=create_if_block_11(e),i.c(),i.m(t,u)):i&&(i.d(1),i=null),e[2]?o?o.p(e,r):(o=create_if_block_10(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),e[4]?s?s.p(e,r):(s=create_if_block_9(e),s.c(),s.m(t,d)):s&&(s.d(1),s=null),e[3]?n?(n.p(e,r),r&8&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(t,null)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros())},i(){if(c)return;transition_in(n),c=!0},o(){transition_out(n),c=!1},d(e){e&&detach(t),a&&a.d(),i&&i.d(),o&&o.d(),s&&s.d(),n&&n.d()}}}const func=e=>e.type=="themes";function instance(e,t,n){let h,i=noop,f=()=>(i(),i=subscribe(o,e=>n(10,h=e)),o);e.$$.on_destroy.push(()=>i());let{title:a,description:r,themes:c,os:l,upcoming_themes:d,login:u,user:o,allContent:m}=t;f();let s="",p="";onMount(async()=>{const e=await navigator.appVersion;e.indexOf("Win")!=-1&&n(8,s="Windows"),e.indexOf("Mac")!=-1&&n(8,s="Mac"),(e.indexOf("Linux")!=-1||e.indexOf("5.0 (X11)")!=-1)&&n(8,s="Linux");try{let e=await fetch("https://api.github.com/repos/plentico/plenti/releases",{mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});if(e.ok){let t=await e.json();n(9,p=t[0].name.substr(1))}else alert("HTTP-Error: "+e.status)}catch(e){console.log(e)}});const g=e=>n(8,s=e.title);return e.$$set=e=>{"title"in e&&n(0,a=e.title),"description"in e&&n(1,r=e.description),"themes"in e&&n(2,c=e.themes),"os"in e&&n(3,l=e.os),"upcoming_themes"in e&&n(4,d=e.upcoming_themes),"login"in e&&n(5,u=e.login),"user"in e&&f(n(6,o=e.user)),"allContent"in e&&n(7,m=e.allContent)},[a,r,c,l,d,u,o,m,s,p,h,g]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,themes:2,os:3,upcoming_themes:4,login:5,user:6,allContent:7})}}export default Component