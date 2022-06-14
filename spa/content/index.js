import{SvelteComponent,add_render_callback,append,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,globals,init,insert,listen,mount_component,safe_not_equal,set_data,set_style,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";const{setTimeout:setTimeout_1}=globals;import Waves from"../components/waves.js";import{onMount}from"../web_modules/svelte/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[16]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[19]=t[n],s}function get_each_context_2(e,t,n){const s=e.slice();return s[5]=t[n],s}function create_if_block(){let t;return{c(){t=text(".")},l(e){t=claim_text(e,".")},m(e,n){insert(e,t,n)},d(e){e&&detach(t)}}}function create_each_block_2(e){let t,n=e[5].text+"",s,o;return{c(){t=element("a"),s=text(n),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"href",o=e[5].link),attr(t,"class","button svelte-1giuk3v")},m(e,n){insert(e,t,n),append(t,s)},p(e,i){i&2&&n!==(n=e[5].text+"")&&set_data(s,n),i&2&&o!==(o=e[5].link)&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_each_block_1(e){let t,n,i,a,c,s,o=e[19].title+"",r,l;return{c(){t=element("div"),n=element("img"),c=space(),s=element("div"),r=text(o),l=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var a,i=children(t);n=claim_element(i,"IMG",{src:!0,alt:!0,class:!0}),c=claim_space(i),s=claim_element(i,"DIV",{class:!0}),a=children(s),r=claim_text(a,o),a.forEach(detach),l=claim_space(i),i.forEach(detach),this.h()},h(){n.src!==(i=e[19].img)&&attr(n,"src",i),attr(n,"alt",a=e[19].title),attr(n,"class","svelte-1giuk3v"),attr(s,"class","title svelte-1giuk3v"),attr(t,"class","feature svelte-1giuk3v")},m(e,o){insert(e,t,o),append(t,n),append(t,c),append(t,s),append(s,r),append(t,l)},p(e,t){t&8&&n.src!==(i=e[19].img)&&attr(n,"src",i),t&8&&a!==(a=e[19].title)&&attr(n,"alt",a),t&8&&o!==(o=e[19].title+"")&&set_data(r,o)},d(e){e&&detach(t)}}}function create_each_block(e){let t,s,o,i,l=e[16].title_accent+"",h,v,c=e[16].title+"",u,p,a,d=e[16].body+"",m,g,r,n,f,b;return{c(){t=element("div"),s=element("div"),o=element("strong"),i=element("span"),h=text(l),v=text(" "),u=text(c),p=space(),a=element("p"),m=text(d),g=space(),r=element("div"),n=element("img"),b=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var j,y,_,w,O,f=children(t);s=claim_element(f,"DIV",{class:!0}),j=children(s),o=claim_element(j,"STRONG",{}),y=children(o),i=claim_element(y,"SPAN",{class:!0}),_=children(i),h=claim_text(_,l),_.forEach(detach),v=claim_text(y," "),u=claim_text(y,c),y.forEach(detach),p=claim_space(j),a=claim_element(j,"P",{class:!0}),w=children(a),m=claim_text(w,d),w.forEach(detach),j.forEach(detach),g=claim_space(f),r=claim_element(f,"DIV",{class:!0}),O=children(r),n=claim_element(O,"IMG",{src:!0,class:!0}),O.forEach(detach),b=claim_space(f),f.forEach(detach),this.h()},h(){attr(i,"class","svelte-1giuk3v"),attr(a,"class","svelte-1giuk3v"),attr(s,"class","content svelte-1giuk3v"),n.src!==(f=e[16].img)&&attr(n,"src",f),attr(n,"class","svelte-1giuk3v"),attr(r,"class","img svelte-1giuk3v"),attr(t,"class","item svelte-1giuk3v")},m(e,c){insert(e,t,c),append(t,s),append(s,o),append(o,i),append(i,h),append(o,v),append(o,u),append(s,p),append(s,a),append(a,m),append(t,g),append(t,r),append(r,n),append(t,b)},p(e,t){t&16&&l!==(l=e[16].title_accent+"")&&set_data(h,l),t&16&&c!==(c=e[16].title+"")&&set_data(u,c),t&16&&d!==(d=e[16].body+"")&&set_data(m,d),t&16&&n.src!==(f=e[16].img)&&attr(n,"src",f)},d(e){e&&detach(t)}}}function create_fragment(e){let V=!1,ge=()=>{V=!1},U,x,c,a,O,L,I=e[1].title+"",K,le,h,C,q,y,de,A,X=e[1].body+"",oe,ue,_,w,pe,Z,b,Q,u,g,T,j,fe,re,m,D,N=e[2].title+"",W,ae,M,H=e[2].body+"",Y,ne,r,$,p,d,z,se,ce,G,f,E,l,R,B=e[5].title+"",te,he,v,P=e[5].link.text+"",ee,J,i,ie,me;add_render_callback(e[8]);let o=e[7]===e[6]&&create_if_block(e),S=e[1].cta,n=[];for(let t=0;t<S.length;t+=1)n[t]=create_each_block_2(get_each_context_2(e,S,t));b=new Waves({});let k=e[3],s=[];for(let t=0;t<k.length;t+=1)s[t]=create_each_block_1(get_each_context_1(e,k,t));let F=e[4],t=[];for(let n=0;n<F.length;n+=1)t[n]=create_each_block(get_each_context(e,F,n));return{c(){x=element("div"),c=element("section"),a=element("div"),O=element("h1"),L=element("div"),K=text(I),le=space(),h=element("div"),C=element("span"),q=text(e[7]),o&&o.c(),y=element("span"),de=space(),A=element("p"),oe=space();for(let e=0;e<n.length;e+=1)n[e].c();ue=space(),_=element("div"),w=element("img"),Z=space(),create_component(b.$$.fragment),Q=space(),u=element("section"),g=element("div"),T=element("div"),j=element("img"),re=space(),m=element("div"),D=element("h3"),W=text(N),ae=space(),M=element("p"),Y=text(H),ne=space(),r=element("section");for(let e=0;e<s.length;e+=1)s[e].c();$=space(),p=element("section"),d=element("div"),z=element("h3"),se=text("Minimal Setup Required"),ce=space();for(let e=0;e<t.length;e+=1)t[e].c();G=space(),f=element("section"),E=element("div"),l=element("div"),R=element("h3"),te=text(B),he=space(),v=element("a"),ee=text(P),this.h()},l(i){x=claim_element(i,"DIV",{class:!0});var k,S,F,V,U,X,J,Ae=children(x),Ee,we,ke,pe,fe,ge,ie,be,je,ye,_e,Oe,xe,Ce,ve,me;c=claim_element(Ae,"SECTION",{id:!0,class:!0}),F=children(c),a=claim_element(F,"DIV",{id:!0,class:!0}),k=children(a),O=claim_element(k,"H1",{}),V=children(O),L=claim_element(V,"DIV",{}),Ee=children(L),K=claim_text(Ee,I),Ee.forEach(detach),le=claim_space(V),h=claim_element(V,"DIV",{}),X=children(h),C=claim_element(X,"SPAN",{class:!0}),we=children(C),q=claim_text(we,e[7]),we.forEach(detach),o&&o.l(X),y=claim_element(X,"SPAN",{id:!0,class:!0}),children(y).forEach(detach),X.forEach(detach),V.forEach(detach),de=claim_space(k),A=claim_element(k,"P",{}),ke=children(A),ke.forEach(detach),oe=claim_space(k);for(let e=0;e<n.length;e+=1)n[e].l(k);k.forEach(detach),ue=claim_space(F),_=claim_element(F,"DIV",{id:!0,class:!0}),pe=children(_),w=claim_element(pe,"IMG",{src:!0,alt:!0,class:!0}),pe.forEach(detach),F.forEach(detach),Ae.forEach(detach),Z=claim_space(i),claim_component(b.$$.fragment,i),Q=claim_space(i),u=claim_element(i,"SECTION",{id:!0,class:!0}),fe=children(u),g=claim_element(fe,"DIV",{class:!0}),S=children(g),T=claim_element(S,"DIV",{class:!0}),ge=children(T),j=claim_element(ge,"IMG",{src:!0,alt:!0,class:!0}),ge.forEach(detach),re=claim_space(S),m=claim_element(S,"DIV",{class:!0}),ie=children(m),D=claim_element(ie,"H3",{}),be=children(D),W=claim_text(be,N),be.forEach(detach),ae=claim_space(ie),M=claim_element(ie,"P",{contenteditable:!0}),je=children(M),Y=claim_text(je,H),je.forEach(detach),ie.forEach(detach),S.forEach(detach),fe.forEach(detach),ne=claim_space(i),r=claim_element(i,"SECTION",{id:!0,style:!0,class:!0}),ye=children(r);for(let e=0;e<s.length;e+=1)s[e].l(ye);ye.forEach(detach),$=claim_space(i),p=claim_element(i,"SECTION",{id:!0,class:!0}),_e=children(p),d=claim_element(_e,"DIV",{class:!0}),J=children(d),z=claim_element(J,"H3",{}),Oe=children(z),se=claim_text(Oe,"Minimal Setup Required"),Oe.forEach(detach),ce=claim_space(J);for(let e=0;e<t.length;e+=1)t[e].l(J);J.forEach(detach),_e.forEach(detach),G=claim_space(i),f=claim_element(i,"SECTION",{id:!0,class:!0}),xe=children(f),E=claim_element(xe,"DIV",{class:!0}),Ce=children(E),l=claim_element(Ce,"DIV",{id:!0,class:!0}),U=children(l),R=claim_element(U,"H3",{}),ve=children(R),te=claim_text(ve,B),ve.forEach(detach),he=claim_space(U),v=claim_element(U,"A",{href:!0,class:!0}),me=children(v),ee=claim_text(me,P),me.forEach(detach),U.forEach(detach),Ce.forEach(detach),xe.forEach(detach),this.h()},h(){attr(C,"class","text-accent-dark"),attr(y,"id","cursor"),attr(y,"class","svelte-1giuk3v"),attr(a,"id","intro-text"),attr(a,"class","svelte-1giuk3v"),w.src!==(pe="/assets/hero.svg")&&attr(w,"src",pe),attr(w,"alt","planarian looking at screen"),attr(w,"class","svelte-1giuk3v"),attr(_,"id","intro-hero"),attr(_,"class","svelte-1giuk3v"),attr(c,"id","intro"),attr(c,"class","svelte-1giuk3v"),attr(x,"class","container"),j.src!==(fe="/assets/edit.gif")&&attr(j,"src",fe),attr(j,"alt","Animation of typing on a computer"),attr(j,"class","svelte-1giuk3v"),attr(T,"class","editor-graphic svelte-1giuk3v"),attr(M,"contenteditable","true"),attr(m,"class","editor-content svelte-1giuk3v"),attr(g,"class","container svelte-1giuk3v"),attr(u,"id","editor"),attr(u,"class","svelte-1giuk3v"),attr(r,"id","features"),set_style(r,"background-position-y",e[0]/5-300+"px"),attr(r,"class","svelte-1giuk3v"),attr(d,"class","container"),attr(p,"id","setup"),attr(p,"class","svelte-1giuk3v"),attr(v,"href",J=e[5].link.url),attr(v,"class","svelte-1giuk3v"),attr(l,"id","cta"),attr(l,"class","svelte-1giuk3v"),attr(E,"class","container"),attr(f,"id","cta-wrapper"),attr(f,"class","svelte-1giuk3v")},m(k,S){insert(k,x,S),append(x,c),append(c,a),append(a,O),append(O,L),append(L,K),append(O,le),append(O,h),append(h,C),append(C,q),o&&o.m(h,null),append(h,y),append(a,de),append(a,A),A.innerHTML=X,append(a,oe);for(let e=0;e<n.length;e+=1)n[e].m(a,null);append(c,ue),append(c,_),append(_,w),insert(k,Z,S),mount_component(b,k,S),insert(k,Q,S),insert(k,u,S),append(u,g),append(g,T),append(T,j),append(g,re),append(g,m),append(m,D),append(D,W),append(m,ae),append(m,M),append(M,Y),insert(k,ne,S),insert(k,r,S);for(let e=0;e<s.length;e+=1)s[e].m(r,null);insert(k,$,S),insert(k,p,S),append(p,d),append(d,z),append(z,se),append(d,ce);for(let e=0;e<t.length;e+=1)t[e].m(d,null);insert(k,G,S),insert(k,f,S),append(f,E),append(E,l),append(l,R),append(R,te),append(l,he),append(l,v),append(v,ee),i=!0,ie||(me=listen(window,"scroll",()=>{V=!0,clearTimeout(U),U=setTimeout_1(ge,100),e[8]()}),ie=!0)},p(e,[c]){if(c&1&&!V&&(V=!0,clearTimeout(U),scrollTo(window.pageXOffset,e[0]),U=setTimeout_1(ge,100)),(!i||c&2)&&I!==(I=e[1].title+"")&&set_data(K,I),(!i||c&128)&&set_data(q,e[7]),e[7]===e[6]?o||(o=create_if_block(e),o.c(),o.m(h,y)):o&&(o.d(1),o=null),(!i||c&2)&&X!==(X=e[1].body+"")&&(A.innerHTML=X),c&2){S=e[1].cta;let t;for(t=0;t<S.length;t+=1){const s=get_each_context_2(e,S,t);n[t]?n[t].p(s,c):(n[t]=create_each_block_2(s),n[t].c(),n[t].m(a,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=S.length}if((!i||c&4)&&N!==(N=e[2].title+"")&&set_data(W,N),(!i||c&4)&&H!==(H=e[2].body+"")&&set_data(Y,H),c&8){k=e[3];let t;for(t=0;t<k.length;t+=1){const n=get_each_context_1(e,k,t);s[t]?s[t].p(n,c):(s[t]=create_each_block_1(n),s[t].c(),s[t].m(r,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=k.length}if((!i||c&1)&&set_style(r,"background-position-y",e[0]/5-300+"px"),c&16){F=e[4];let n;for(n=0;n<F.length;n+=1){const s=get_each_context(e,F,n);t[n]?t[n].p(s,c):(t[n]=create_each_block(s),t[n].c(),t[n].m(d,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=F.length}(!i||c&32)&&B!==(B=e[5].title+"")&&set_data(te,B),(!i||c&32)&&P!==(P=e[5].link.text+"")&&set_data(ee,P),(!i||c&32&&J!==(J=e[5].link.url))&&attr(v,"href",J)},i(e){if(i)return;transition_in(b.$$.fragment,e),i=!0},o(e){transition_out(b.$$.fragment,e),i=!1},d(e){e&&detach(x),o&&o.d(),destroy_each(n,e),e&&detach(Z),destroy_component(b,e),e&&detach(Q),e&&detach(u),e&&detach(ne),e&&detach(r),destroy_each(s,e),e&&detach($),e&&detach(p),destroy_each(t,e),e&&detach(G),e&&detach(f),ie=!1,me()}}}function instance(e,t,n){let{intro:i}=t,{editor:u}=t,{features:h}=t,{setup:d}=t,{cta:p}=t,{by:l=0}=t,v=i.phrases.length,o=i.phrases[0],s=o,r=0,a=0,f,c;const g=()=>{s===o&&(clearInterval(f),setTimeout(m,5e3),c=!0,r=0),s.length===0&&(c=!1,a<v?a+=1:a=0,n(6,o=i.phrases[a])),c?s===o?setTimeout(()=>{n(7,s=s.slice(0,-1))},5e3):n(7,s=s.slice(0,-1)):(n(7,s+=o[r]),r+=1)},m=()=>f=setInterval(g,50);onMount(async()=>{m()});function b(){n(0,l=window.pageYOffset)}return e.$$set=e=>{"intro"in e&&n(1,i=e.intro),"editor"in e&&n(2,u=e.editor),"features"in e&&n(3,h=e.features),"setup"in e&&n(4,d=e.setup),"cta"in e&&n(5,p=e.cta),"by"in e&&n(0,l=e.by)},[l,i,u,h,d,p,o,s,b]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{intro:1,editor:2,features:3,setup:4,cta:5,by:0})}}export default Component