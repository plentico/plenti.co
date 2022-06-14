import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,group_outros,init,insert,listen,mount_component,noop,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Linux from"../components/linux.js";import Mac from"../components/mac.js";import Windows from"../components/windows.js";import{onMount}from"../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[9]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[12]=t[n],s}function get_each_context_2(e,t,n){const s=e.slice();return s[12]=t[n],s}function get_each_context_3(e,t,n){const s=e.slice();return s[17]=t[n],s}function create_if_block_11(e){let n,s=e[1],t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_3(get_each_context_3(e,s,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){n=claim_element(e,"DIV",{});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach)},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,o){if(o&2){s=e[1];let i;for(i=0;i<s.length;i+=1){const a=get_each_context_3(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block_3(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_each_block_3(e){let t,n=e[17]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[17]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block_10(e){let n,s=e[5].filter(func),t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_2(get_each_context_2(e,s,n));return{c(){n=element("section");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"SECTION",{id:!0,class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"id","themes"),attr(n,"class","svelte-1evadm")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,o){if(o&32){s=e[5].filter(func);let i;for(i=0;i<s.length;i+=1){const a=get_each_context_2(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block_2(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_each_block_2(e){let t,n,s,o;return{c(){t=element("a"),n=element("img"),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var s=children(t);n=claim_element(s,"IMG",{src:!0,class:!0}),s.forEach(detach),this.h()},h(){n.src!==(s="/assets/themes/"+e[12].fields.name.toLowerCase()+".png")&&attr(n,"src",s),attr(n,"class","svelte-1evadm"),attr(t,"href",o="/themes/"+e[12].fields.name.toLowerCase()),attr(t,"class","svelte-1evadm")},m(e,s){insert(e,t,s),append(t,n)},p(e,i){i&32&&n.src!==(s="/assets/themes/"+e[12].fields.name.toLowerCase()+".png")&&attr(n,"src",s),i&32&&o!==(o="/themes/"+e[12].fields.name.toLowerCase())&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_if_block_9(e){let s,a,i,n,o=e[4],t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block_1(get_each_context_1(e,o,n));return{c(){s=element("div"),a=text("(More themes coming soon)"),i=space(),n=element("section");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var o,r=children(s);a=claim_text(r,"(More themes coming soon)"),r.forEach(detach),i=claim_space(e),n=claim_element(e,"SECTION",{id:!0,class:!0}),o=children(n);for(let e=0;e<t.length;e+=1)t[e].l(o);o.forEach(detach),this.h()},h(){attr(s,"class","upcoming-themes svelte-1evadm"),attr(n,"id","themes"),attr(n,"class","svelte-1evadm")},m(e,o){insert(e,s,o),append(s,a),insert(e,i,o),insert(e,n,o);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,s){if(s&16){o=e[4];let i;for(i=0;i<o.length;i+=1){const a=get_each_context_1(e,o,i);t[i]?t[i].p(a,s):(t[i]=create_each_block_1(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=o.length}},d(e){e&&detach(s),e&&detach(i),e&&detach(n),destroy_each(t,e)}}}function create_each_block_1(e){let t,n;return{c(){t=element("img"),this.h()},l(e){t=claim_element(e,"IMG",{src:!0,class:!0}),this.h()},h(){t.src!==(n="/assets/themes/"+e[12])&&attr(t,"src",n),attr(t,"class","svelte-1evadm")},m(e,n){insert(e,t,n)},p(e,s){s&16&&t.src!==(n="/assets/themes/"+e[12])&&attr(t,"src",n)},d(e){e&&detach(t)}}}function create_if_block(e){let o,u,s,l,a,c,r=e[3],t=[];for(let n=0;n<r.length;n+=1)t[n]=create_each_block(get_each_context(e,r,n));const p=e=>transition_out(t[e],1,1,()=>{t[e]=null});function m(e){return e[6]=="Linux"||e[6]=="Mac"?create_if_block_4:e[6]=="Windows"?create_if_block_5:create_else_block_1}let d=m(e,-1),n=d(e);function f(e){return e[6]=="Linux"?create_if_block_1:e[6]=="Mac"?create_if_block_2:e[6]=="Windows"?create_if_block_3:create_else_block}let h=f(e,-1),i=h(e);return{c(){o=element("section");for(let e=0;e<t.length;e+=1)t[e].c();u=space(),s=element("section"),n.c(),l=space(),a=element("section"),i.c(),this.h()},l(e){o=claim_element(e,"SECTION",{id:!0,class:!0});var r,c,d=children(o);for(let e=0;e<t.length;e+=1)t[e].l(d);d.forEach(detach),u=claim_space(e),s=claim_element(e,"SECTION",{id:!0,class:!0}),r=children(s),n.l(r),r.forEach(detach),l=claim_space(e),a=claim_element(e,"SECTION",{id:!0}),c=children(a),i.l(c),c.forEach(detach),this.h()},h(){attr(o,"id","download"),attr(o,"class","svelte-1evadm"),attr(s,"id","detection"),attr(s,"class","svelte-1evadm"),attr(a,"id","instructions")},m(e,r){insert(e,o,r);for(let e=0;e<t.length;e+=1)t[e].m(o,null);insert(e,u,r),insert(e,s,r),n.m(s,null),insert(e,l,r),insert(e,a,r),i.m(a,null),c=!0},p(e,c){if(c&72){r=e[3];let n;for(n=0;n<r.length;n+=1){const s=get_each_context(e,r,n);t[n]?(t[n].p(s,c),transition_in(t[n],1)):(t[n]=create_each_block(s),t[n].c(),transition_in(t[n],1),t[n].m(o,null))}group_outros();for(n=r.length;n<t.length;n+=1)p(n);check_outros()}d===(d=m(e,c))&&n?n.p(e,c):(n.d(1),n=d(e),n&&(n.c(),n.m(s,null))),h!==(h=f(e,c))&&(i.d(1),i=h(e),i&&(i.c(),i.m(a,null)))},i(){if(c)return;for(let e=0;e<r.length;e+=1)transition_in(t[e]);c=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);c=!1},d(e){e&&detach(o),destroy_each(t,e),e&&detach(u),e&&detach(s),n.d(),e&&detach(l),e&&detach(a),i.d()}}}function create_else_block_2(){let t,n;return{c(){t=element("strong"),n=text("We can't determine what Operating System you're on.")},l(e){t=claim_element(e,"STRONG",{});var s=children(t);n=claim_text(s,"We can't determine what Operating System you're on."),s.forEach(detach)},m(e,s){insert(e,t,s),append(t,n)},i:noop,o:noop,d(e){e&&detach(t)}}}function create_if_block_8(){let t,n;return t=new Windows({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_7(){let t,n;return t=new Mac({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_6(){let t,n;return t=new Linux({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_each_block(e){let t,n,s,c,a,r=e[9].title+"",l,h,d,i,u,m;const f=[create_if_block_6,create_if_block_7,create_if_block_8,create_else_block_2],o=[];function p(e){return e[9].title=="Linux"?0:e[9].title=="Mac"?1:e[9].title=="Windows"?2:3}n=p(e,-1),s=o[n]=f[n](e);function g(){return e[8](e[9])}return{c(){t=element("div"),s.c(),c=space(),a=element("div"),l=text(r),h=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var o,n=children(t);s.l(n),c=claim_space(n),a=claim_element(n,"DIV",{class:!0}),o=children(a),l=claim_text(o,r),o.forEach(detach),h=claim_space(n),n.forEach(detach),this.h()},h(){attr(a,"class","os-name svelte-1evadm"),attr(t,"class",d="os"+(e[9].title==e[6]?" primary":"")+" svelte-1evadm")},m(e,s){insert(e,t,s),o[n].m(t,null),append(t,c),append(t,a),append(a,l),append(t,h),i=!0,u||(m=listen(t,"click",g),u=!0)},p(a,u){e=a;let h=n;n=p(e,u),n!==h&&(group_outros(),transition_out(o[h],1,1,()=>{o[h]=null}),check_outros(),s=o[n],s||(s=o[n]=f[n](e),s.c()),transition_in(s,1),s.m(t,c)),(!i||u&8)&&r!==(r=e[9].title+"")&&set_data(l,r),(!i||u&72&&d!==(d="os"+(e[9].title==e[6]?" primary":"")+" svelte-1evadm"))&&attr(t,"class",d)},i(){if(i)return;transition_in(s),i=!0},o(){transition_out(s),i=!1},d(e){e&&detach(t),o[n].d(),u=!1,m()}}}function create_else_block_1(){let t,n,i,o,s,a;return{c(){t=element("div"),n=element("a"),i=text("See the latest releases"),o=space(),s=element("div"),a=text("Or use one of the package managers below..."),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var r,c,l=children(t);n=claim_element(l,"A",{href:!0,class:!0}),r=children(n),i=claim_text(r,"See the latest releases"),r.forEach(detach),l.forEach(detach),o=claim_space(e),s=claim_element(e,"DIV",{class:!0}),c=children(s),a=claim_text(c,"Or use one of the package managers below..."),c.forEach(detach),this.h()},h(){attr(n,"href","https://github.com/plentico/plenti/releases/latest"),attr(n,"class","svelte-1evadm"),attr(t,"class","selected svelte-1evadm"),attr(s,"class","instructions svelte-1evadm")},m(e,r){insert(e,t,r),append(t,n),append(n,i),insert(e,o,r),insert(e,s,r),append(s,a)},p:noop,d(e){e&&detach(t),e&&detach(o),e&&detach(s)}}}function create_if_block_5(e){let s,h,a,d,r,o,i,p,c,t,u,n,m,f,l;return{c(){s=element("div"),h=text("It looks like you're using a "),a=text(e[6]),d=text(" computer."),r=space(),o=element("div"),i=element("strong"),p=text("Unfortunately Windows is not currently supported."),c=space(),t=element("div"),u=text("If you'd like to help add Windows support, please see more details "),n=element("a"),m=text("here"),f=text("."),l=element("strong"),this.h()},l(g){s=claim_element(g,"DIV",{class:!0});var v,j,y,_,b=children(s);h=claim_text(b,"It looks like you're using a "),a=claim_text(b,e[6]),d=claim_text(b," computer."),b.forEach(detach),r=claim_space(g),o=claim_element(g,"DIV",{class:!0}),j=children(o),i=claim_element(j,"STRONG",{}),y=children(i),p=claim_text(y,"Unfortunately Windows is not currently supported."),y.forEach(detach),j.forEach(detach),c=claim_space(g),t=claim_element(g,"DIV",{class:!0}),v=children(t),u=claim_text(v,"If you'd like to help add Windows support, please see more details "),n=claim_element(v,"A",{href:!0,target:!0,rel:!0,class:!0}),_=children(n),m=claim_text(_,"here"),_.forEach(detach),f=claim_text(v,"."),l=claim_element(v,"STRONG",{}),children(l).forEach(detach),v.forEach(detach),this.h()},h(){attr(s,"class","selected svelte-1evadm"),attr(o,"class","selected svelte-1evadm"),attr(n,"href","https://github.com/plentico/plenti/issues/45"),attr(n,"target","blank"),attr(n,"rel","noopener noreferrer"),attr(n,"class","svelte-1evadm"),attr(t,"class","selected svelte-1evadm")},m(e,g){insert(e,s,g),append(s,h),append(s,a),append(s,d),insert(e,r,g),insert(e,o,g),append(o,i),append(i,p),insert(e,c,g),insert(e,t,g),append(t,u),append(t,n),append(n,m),append(t,f),append(t,l)},p(e,t){t&64&&set_data(a,e[6])},d(e){e&&detach(s),e&&detach(r),e&&detach(o),e&&detach(c),e&&detach(t)}}}function create_if_block_4(e){let n,w,h,y,l,i,j,c,t,b,v,a,f,m,p,g,u,d,r,s,_,o,O,x;return{c(){n=element("div"),w=text("It looks like you're using a "),h=text(e[6]),y=text(" computer."),l=space(),i=element("div"),j=text("If that's not the case, choose a different Operating System above."),c=space(),t=element("a"),b=text("Download"),v=element("br"),a=element("strong"),f=text("version "),m=text(e[7]),p=element("br"),g=text("for 64-bit "),u=text(e[6]),r=space(),s=element("div"),_=text("("),o=element("a"),O=text("See more options"),x=text(")"),this.h()},l(d){n=claim_element(d,"DIV",{class:!0});var C,E,A,S,M,k=children(n);w=claim_text(k,"It looks like you're using a "),h=claim_text(k,e[6]),y=claim_text(k," computer."),k.forEach(detach),l=claim_space(d),i=claim_element(d,"DIV",{class:!0}),S=children(i),j=claim_text(S,"If that's not the case, choose a different Operating System above."),S.forEach(detach),c=claim_space(d),t=claim_element(d,"A",{class:!0,href:!0}),C=children(t),b=claim_text(C,"Download"),v=claim_element(C,"BR",{}),a=claim_element(C,"STRONG",{}),A=children(a),f=claim_text(A,"version "),m=claim_text(A,e[7]),A.forEach(detach),p=claim_element(C,"BR",{}),g=claim_text(C,"for 64-bit "),u=claim_text(C,e[6]),C.forEach(detach),r=claim_space(d),s=claim_element(d,"DIV",{}),E=children(s),_=claim_text(E,"("),o=claim_element(E,"A",{href:!0,class:!0}),M=children(o),O=claim_text(M,"See more options"),M.forEach(detach),x=claim_text(E,")"),E.forEach(detach),this.h()},h(){attr(n,"class","selected svelte-1evadm"),attr(i,"class","instructions svelte-1evadm"),attr(t,"class","cta svelte-1evadm"),attr(t,"href",d="https://github.com/plentico/plenti/releases/download/v"+e[7]+"/plenti_"+e[7]+"_"+e[6]+"_64-bit.tar.gz"),attr(o,"href","https://github.com/plentico/plenti/releases/latest"),attr(o,"class","svelte-1evadm")},m(e,d){insert(e,n,d),append(n,w),append(n,h),append(n,y),insert(e,l,d),insert(e,i,d),append(i,j),insert(e,c,d),insert(e,t,d),append(t,b),append(t,v),append(t,a),append(a,f),append(a,m),append(t,p),append(t,g),append(t,u),insert(e,r,d),insert(e,s,d),append(s,_),append(s,o),append(o,O),append(s,x)},p(e,n){n&64&&set_data(h,e[6]),n&128&&set_data(m,e[7]),n&64&&set_data(u,e[6]),n&192&&d!==(d="https://github.com/plentico/plenti/releases/download/v"+e[7]+"/plenti_"+e[7]+"_"+e[6]+"_64-bit.tar.gz")&&attr(t,"href",d)},d(e){e&&detach(n),e&&detach(l),e&&detach(i),e&&detach(c),e&&detach(t),e&&detach(r),e&&detach(s)}}}function create_else_block(){let a,x,v,f,l,s,b,c,i,O,u,h,m,n,w,_,j,r,o,y,g,p,d,t,C,E,k;return{c(){a=element("strong"),x=text("Install using Snap:"),v=element("br"),f=element("br"),l=space(),s=element("codeblock"),b=text("sudo snap install plenti"),c=space(),i=element("strong"),O=text("Install using Homebrew:"),u=element("br"),h=element("br"),m=space(),n=element("codeblock"),w=text(`brew tap plentico/homebrew-plenti
          `),_=element("br"),j=text("brew install plenti"),r=space(),o=element("strong"),y=text("Install using Scoop:"),g=element("br"),p=element("br"),d=space(),t=element("codeblock"),C=text(`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),E=element("br"),k=text("scoop install plentico/scoop-plenti")},l(e){a=claim_element(e,"STRONG",{});var A,S,M,F,T,z=children(a);x=claim_text(z,"Install using Snap:"),z.forEach(detach),v=claim_element(e,"BR",{}),f=claim_element(e,"BR",{}),l=claim_space(e),s=claim_element(e,"CODEBLOCK",{}),M=children(s),b=claim_text(M,"sudo snap install plenti"),M.forEach(detach),c=claim_space(e),i=claim_element(e,"STRONG",{}),F=children(i),O=claim_text(F,"Install using Homebrew:"),F.forEach(detach),u=claim_element(e,"BR",{}),h=claim_element(e,"BR",{}),m=claim_space(e),n=claim_element(e,"CODEBLOCK",{}),A=children(n),w=claim_text(A,`brew tap plentico/homebrew-plenti
          `),_=claim_element(A,"BR",{}),j=claim_text(A,"brew install plenti"),A.forEach(detach),r=claim_space(e),o=claim_element(e,"STRONG",{}),T=children(o),y=claim_text(T,"Install using Scoop:"),T.forEach(detach),g=claim_element(e,"BR",{}),p=claim_element(e,"BR",{}),d=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),S=children(t),C=claim_text(S,`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),E=claim_element(S,"BR",{}),k=claim_text(S,"scoop install plentico/scoop-plenti"),S.forEach(detach)},m(e,A){insert(e,a,A),append(a,x),insert(e,v,A),insert(e,f,A),insert(e,l,A),insert(e,s,A),append(s,b),insert(e,c,A),insert(e,i,A),append(i,O),insert(e,u,A),insert(e,h,A),insert(e,m,A),insert(e,n,A),append(n,w),append(n,_),append(n,j),insert(e,r,A),insert(e,o,A),append(o,y),insert(e,g,A),insert(e,p,A),insert(e,d,A),insert(e,t,A),append(t,C),append(t,E),append(t,k)},d(e){e&&detach(a),e&&detach(v),e&&detach(f),e&&detach(l),e&&detach(s),e&&detach(c),e&&detach(i),e&&detach(u),e&&detach(h),e&&detach(m),e&&detach(n),e&&detach(r),e&&detach(o),e&&detach(g),e&&detach(p),e&&detach(d),e&&detach(t)}}}function create_if_block_3(){let n,a,s,o,i,t,r,c,l;return{c(){n=element("strong"),a=text("Or you can install using Scoop (Currently not supported):"),s=element("br"),o=element("br"),i=space(),t=element("codeblock"),r=text(`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),c=element("br"),l=text("scoop install plentico/scoop-plenti")},l(e){n=claim_element(e,"STRONG",{});var d,u=children(n);a=claim_text(u,"Or you can install using Scoop (Currently not supported):"),u.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),d=children(t),r=claim_text(d,`scoop bucket add org https://github.com/plentico/scoop-plenti.git
          `),c=claim_element(d,"BR",{}),l=claim_text(d,"scoop install plentico/scoop-plenti"),d.forEach(detach)},m(e,d){insert(e,n,d),append(n,a),insert(e,s,d),insert(e,o,d),insert(e,i,d),insert(e,t,d),append(t,r),append(t,c),append(t,l)},d(e){e&&detach(n),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(t)}}}function create_if_block_2(){let n,a,s,o,i,t,r,c,l;return{c(){n=element("strong"),a=text("Or you can install using Homebrew:"),s=element("br"),o=element("br"),i=space(),t=element("codeblock"),r=text(`brew tap plentico/homebrew-plenti
          `),c=element("br"),l=text("brew install plenti")},l(e){n=claim_element(e,"STRONG",{});var d,u=children(n);a=claim_text(u,"Or you can install using Homebrew:"),u.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),t=claim_element(e,"CODEBLOCK",{}),d=children(t),r=claim_text(d,`brew tap plentico/homebrew-plenti
          `),c=claim_element(d,"BR",{}),l=claim_text(d,"brew install plenti"),d.forEach(detach)},m(e,d){insert(e,n,d),append(n,a),insert(e,s,d),insert(e,o,d),insert(e,i,d),insert(e,t,d),append(t,r),append(t,c),append(t,l)},d(e){e&&detach(n),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(t)}}}function create_if_block_1(){let t,a,s,o,i,n,r;return{c(){t=element("strong"),a=text("Or you can install using Snap:"),s=element("br"),o=element("br"),i=space(),n=element("codeblock"),r=text("sudo snap install plenti")},l(e){t=claim_element(e,"STRONG",{});var c,l=children(t);a=claim_text(l,"Or you can install using Snap:"),l.forEach(detach),s=claim_element(e,"BR",{}),o=claim_element(e,"BR",{}),i=claim_space(e),n=claim_element(e,"CODEBLOCK",{}),c=children(n),r=claim_text(c,"sudo snap install plenti"),c.forEach(detach)},m(e,c){insert(e,t,c),append(t,a),insert(e,s,c),insert(e,o,c),insert(e,i,c),insert(e,n,c),append(n,r)},d(e){e&&detach(t),e&&detach(s),e&&detach(o),e&&detach(i),e&&detach(n)}}}function create_fragment(e){let n,a,l,h,d,u,c,r,s=e[1]&&create_if_block_11(e),o=e[2]&&create_if_block_10(e),i=e[4]&&create_if_block_9(e),t=e[3]&&create_if_block(e);return{c(){n=element("div"),a=element("h1"),l=text(e[0]),h=space(),s&&s.c(),d=space(),o&&o.c(),u=space(),i&&i.c(),c=space(),t&&t.c(),this.h()},l(r){n=claim_element(r,"DIV",{class:!0});var f,m=children(n);a=claim_element(m,"H1",{class:!0}),f=children(a),l=claim_text(f,e[0]),f.forEach(detach),h=claim_space(m),s&&s.l(m),d=claim_space(m),o&&o.l(m),u=claim_space(m),i&&i.l(m),c=claim_space(m),t&&t.l(m),m.forEach(detach),this.h()},h(){attr(a,"class","svelte-1evadm"),attr(n,"class","container")},m(e,m){insert(e,n,m),append(n,a),append(a,l),append(n,h),s&&s.m(n,null),append(n,d),o&&o.m(n,null),append(n,u),i&&i.m(n,null),append(n,c),t&&t.m(n,null),r=!0},p(e,[a]){(!r||a&1)&&set_data(l,e[0]),e[1]?s?s.p(e,a):(s=create_if_block_11(e),s.c(),s.m(n,d)):s&&(s.d(1),s=null),e[2]?o?o.p(e,a):(o=create_if_block_10(e),o.c(),o.m(n,u)):o&&(o.d(1),o=null),e[4]?i?i.p(e,a):(i=create_if_block_9(e),i.c(),i.m(n,c)):i&&(i.d(1),i=null),e[3]?t?(t.p(e,a),a&8&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(n,null)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(r)return;transition_in(t),r=!0},o(){transition_out(t),r=!1},d(e){e&&detach(n),s&&s.d(),o&&o.d(),i&&i.d(),t&&t.d()}}}const func=e=>e.type=="themes";function instance(e,t,n){let{title:l}=t,{description:o}=t,{themes:i}=t,{os:a}=t,{upcoming_themes:r}=t,{allContent:c}=t,s="",d="";onMount(async()=>{const e=await navigator.appVersion;e.indexOf("Win")!=-1&&n(6,s="Windows"),e.indexOf("Mac")!=-1&&n(6,s="Mac"),(e.indexOf("Linux")!=-1||e.indexOf("5.0 (X11)")!=-1)&&n(6,s="Linux");try{let e=await fetch("https://api.github.com/repos/plentico/plenti/releases",{mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});if(e.ok){let t=await e.json();n(7,d=t[0].name.substr(1))}else alert("HTTP-Error: "+e.status)}catch(e){console.log(e)}});const u=e=>n(6,s=e.title);return e.$$set=e=>{"title"in e&&n(0,l=e.title),"description"in e&&n(1,o=e.description),"themes"in e&&n(2,i=e.themes),"os"in e&&n(3,a=e.os),"upcoming_themes"in e&&n(4,r=e.upcoming_themes),"allContent"in e&&n(5,c=e.allContent)},[l,o,i,a,r,c,s,d,u]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,themes:2,os:3,upcoming_themes:4,allContent:5})}}export default Component