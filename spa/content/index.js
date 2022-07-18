import{SvelteComponent,add_render_callback,append,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,globals,init,insert,listen,mount_component,safe_not_equal,set_data,set_style,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";const{setTimeout:setTimeout_1}=globals;import Waves from"../components/waves.js";import{onMount}from"../web_modules/svelte/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[16]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[19]=t[n],s}function get_each_context_2(e,t,n){const s=e.slice();return s[5]=t[n],s}function create_if_block(){let t;return{c(){t=text(".")},l(e){t=claim_text(e,".")},m(e,n){insert(e,t,n)},d(e){e&&detach(t)}}}function create_each_block_2(e){let t,n=e[5].text+"",s,o;return{c(){t=element("a"),s=text(n),this.h()},l(e){t=claim_element(e,"A",{href:!0,class:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"href",o=e[5].link),attr(t,"class","button svelte-db4j0k")},m(e,n){insert(e,t,n),append(t,s)},p(e,i){i&2&&n!==(n=e[5].text+"")&&set_data(s,n),i&2&&o!==(o=e[5].link)&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_each_block_1(e){let t,n,i,a,c,s,o=e[19].title+"",r,l;return{c(){t=element("div"),n=element("img"),c=space(),s=element("div"),r=text(o),l=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var a,i=children(t);n=claim_element(i,"IMG",{src:!0,alt:!0,class:!0}),c=claim_space(i),s=claim_element(i,"DIV",{class:!0}),a=children(s),r=claim_text(a,o),a.forEach(detach),l=claim_space(i),i.forEach(detach),this.h()},h(){n.src!==(i=e[19].img)&&attr(n,"src",i),attr(n,"alt",a=e[19].title),attr(n,"class","svelte-db4j0k"),attr(s,"class","title svelte-db4j0k"),attr(t,"class","feature svelte-db4j0k")},m(e,o){insert(e,t,o),append(t,n),append(t,c),append(t,s),append(s,r),append(t,l)},p(e,t){t&8&&n.src!==(i=e[19].img)&&attr(n,"src",i),t&8&&a!==(a=e[19].title)&&attr(n,"alt",a),t&8&&o!==(o=e[19].title+"")&&set_data(r,o)},d(e){e&&detach(t)}}}function create_each_block(e){let t,n,o,c,u=e[16].title_accent+"",p,b,r,d=e[16].title+"",h,v,i,l=e[16].body+"",f,g,a,s,m,j;return{c(){t=element("div"),n=element("div"),o=element("strong"),c=element("span"),p=text(u),b=space(),r=element("span"),h=text(d),v=space(),i=element("p"),f=text(l),g=space(),a=element("div"),s=element("img"),j=space(),this.h()},l(e){t=claim_element(e,"DIV",{class:!0});var y,_,w,O,x,C,m=children(t);n=claim_element(m,"DIV",{class:!0}),y=children(n),o=claim_element(y,"STRONG",{}),_=children(o),c=claim_element(_,"SPAN",{class:!0}),w=children(c),p=claim_text(w,u),w.forEach(detach),b=claim_space(_),r=claim_element(_,"SPAN",{class:!0}),O=children(r),h=claim_text(O,d),O.forEach(detach),_.forEach(detach),v=claim_space(y),i=claim_element(y,"P",{class:!0}),x=children(i),f=claim_text(x,l),x.forEach(detach),y.forEach(detach),g=claim_space(m),a=claim_element(m,"DIV",{class:!0}),C=children(a),s=claim_element(C,"IMG",{src:!0,class:!0}),C.forEach(detach),j=claim_space(m),m.forEach(detach),this.h()},h(){attr(c,"class","accent svelte-db4j0k"),attr(r,"class","title svelte-db4j0k"),attr(i,"class","svelte-db4j0k"),attr(n,"class","content svelte-db4j0k"),s.src!==(m=e[16].img)&&attr(s,"src",m),attr(s,"class","svelte-db4j0k"),attr(a,"class","img svelte-db4j0k"),attr(t,"class","item svelte-db4j0k")},m(e,l){insert(e,t,l),append(t,n),append(n,o),append(o,c),append(c,p),append(o,b),append(o,r),append(r,h),append(n,v),append(n,i),append(i,f),append(t,g),append(t,a),append(a,s),append(t,j)},p(e,t){t&16&&u!==(u=e[16].title_accent+"")&&set_data(p,u),t&16&&d!==(d=e[16].title+"")&&set_data(h,d),t&16&&l!==(l=e[16].body+"")&&set_data(f,l),t&16&&s.src!==(m=e[16].img)&&attr(s,"src",m)},d(e){e&&detach(t)}}}function create_fragment(e){let V=!1,ge=()=>{V=!1},U,x,d,a,u,L,I=e[1].title+"",K,le,m,k,q,y,de,F,X=e[1].body+"",oe,ue,_,w,pe,Z,j,Q,f,g,S,O,fe,re,p,z,N=e[2].title+"",W,ae,M,H=e[2].body+"",Y,ne,r,$,h,l,R,se,ce,G,v,C,c,P,B=e[5].title+"",te,he,b,D=e[5].link.text+"",ee,J,i,ie,me;add_render_callback(e[8]);let o=e[7]===e[6]&&create_if_block(e),E=e[1].cta,s=[];for(let t=0;t<E.length;t+=1)s[t]=create_each_block_2(get_each_context_2(e,E,t));j=new Waves({});let A=e[3],n=[];for(let t=0;t<A.length;t+=1)n[t]=create_each_block_1(get_each_context_1(e,A,t));let T=e[4],t=[];for(let n=0;n<T.length;n+=1)t[n]=create_each_block(get_each_context(e,T,n));return{c(){x=element("div"),d=element("section"),a=element("div"),u=element("h1"),L=element("div"),K=text(I),le=space(),m=element("div"),k=element("span"),q=text(e[7]),o&&o.c(),y=element("span"),de=space(),F=element("p"),oe=space();for(let e=0;e<s.length;e+=1)s[e].c();ue=space(),_=element("div"),w=element("img"),Z=space(),create_component(j.$$.fragment),Q=space(),f=element("section"),g=element("div"),S=element("div"),O=element("img"),re=space(),p=element("div"),z=element("h3"),W=text(N),ae=space(),M=element("p"),Y=text(H),ne=space(),r=element("section");for(let e=0;e<n.length;e+=1)n[e].c();$=space(),h=element("section"),l=element("div"),R=element("h3"),se=text("Minimal Setup Required"),ce=space();for(let e=0;e<t.length;e+=1)t[e].c();G=space(),v=element("section"),C=element("div"),c=element("div"),P=element("h3"),te=text(B),he=space(),b=element("a"),ee=text(D),this.h()},l(i){x=claim_element(i,"DIV",{class:!0});var E,A,T,V,U,X,J,Ae=children(x),Ee,we,ke,pe,fe,ge,ie,be,je,ye,_e,Oe,xe,Ce,ve,me;d=claim_element(Ae,"SECTION",{id:!0,class:!0}),T=children(d),a=claim_element(T,"DIV",{id:!0,class:!0}),E=children(a),u=claim_element(E,"H1",{class:!0}),V=children(u),L=claim_element(V,"DIV",{}),Ee=children(L),K=claim_text(Ee,I),Ee.forEach(detach),le=claim_space(V),m=claim_element(V,"DIV",{}),X=children(m),k=claim_element(X,"SPAN",{class:!0}),we=children(k),q=claim_text(we,e[7]),we.forEach(detach),o&&o.l(X),y=claim_element(X,"SPAN",{id:!0,class:!0}),children(y).forEach(detach),X.forEach(detach),V.forEach(detach),de=claim_space(E),F=claim_element(E,"P",{}),ke=children(F),ke.forEach(detach),oe=claim_space(E);for(let e=0;e<s.length;e+=1)s[e].l(E);E.forEach(detach),ue=claim_space(T),_=claim_element(T,"DIV",{id:!0,class:!0}),pe=children(_),w=claim_element(pe,"IMG",{src:!0,alt:!0,class:!0}),pe.forEach(detach),T.forEach(detach),Ae.forEach(detach),Z=claim_space(i),claim_component(j.$$.fragment,i),Q=claim_space(i),f=claim_element(i,"SECTION",{id:!0,class:!0}),fe=children(f),g=claim_element(fe,"DIV",{class:!0}),A=children(g),S=claim_element(A,"DIV",{class:!0}),ge=children(S),O=claim_element(ge,"IMG",{src:!0,alt:!0,class:!0}),ge.forEach(detach),re=claim_space(A),p=claim_element(A,"DIV",{class:!0}),ie=children(p),z=claim_element(ie,"H3",{class:!0}),be=children(z),W=claim_text(be,N),be.forEach(detach),ae=claim_space(ie),M=claim_element(ie,"P",{contenteditable:!0}),je=children(M),Y=claim_text(je,H),je.forEach(detach),ie.forEach(detach),A.forEach(detach),fe.forEach(detach),ne=claim_space(i),r=claim_element(i,"SECTION",{id:!0,style:!0,class:!0}),ye=children(r);for(let e=0;e<n.length;e+=1)n[e].l(ye);ye.forEach(detach),$=claim_space(i),h=claim_element(i,"SECTION",{id:!0,class:!0}),_e=children(h),l=claim_element(_e,"DIV",{class:!0}),J=children(l),R=claim_element(J,"H3",{}),Oe=children(R),se=claim_text(Oe,"Minimal Setup Required"),Oe.forEach(detach),ce=claim_space(J);for(let e=0;e<t.length;e+=1)t[e].l(J);J.forEach(detach),_e.forEach(detach),G=claim_space(i),v=claim_element(i,"SECTION",{id:!0,class:!0}),xe=children(v),C=claim_element(xe,"DIV",{class:!0}),Ce=children(C),c=claim_element(Ce,"DIV",{id:!0,class:!0}),U=children(c),P=claim_element(U,"H3",{}),ve=children(P),te=claim_text(ve,B),ve.forEach(detach),he=claim_space(U),b=claim_element(U,"A",{href:!0,class:!0}),me=children(b),ee=claim_text(me,D),me.forEach(detach),U.forEach(detach),Ce.forEach(detach),xe.forEach(detach),this.h()},h(){attr(k,"class","text-accent-dark"),attr(y,"id","cursor"),attr(y,"class","svelte-db4j0k"),attr(u,"class","svelte-db4j0k"),attr(a,"id","intro-text"),attr(a,"class","svelte-db4j0k"),w.src!==(pe="/assets/hero.svg")&&attr(w,"src",pe),attr(w,"alt","planarian looking at screen"),attr(w,"class","svelte-db4j0k"),attr(_,"id","intro-hero"),attr(_,"class","svelte-db4j0k"),attr(d,"id","intro"),attr(d,"class","svelte-db4j0k"),attr(x,"class","container"),O.src!==(fe="/assets/edit.gif")&&attr(O,"src",fe),attr(O,"alt","Animation of typing on a computer"),attr(O,"class","svelte-db4j0k"),attr(S,"class","editor-graphic svelte-db4j0k"),attr(z,"class","svelte-db4j0k"),attr(M,"contenteditable","true"),attr(p,"class","editor-content svelte-db4j0k"),attr(g,"class","container svelte-db4j0k"),attr(f,"id","editor"),attr(f,"class","svelte-db4j0k"),attr(r,"id","features"),set_style(r,"background-position-y",e[0]/5-300+"px"),attr(r,"class","svelte-db4j0k"),attr(l,"class","container"),attr(h,"id","setup"),attr(h,"class","svelte-db4j0k"),attr(b,"href",J=e[5].link.url),attr(b,"class","svelte-db4j0k"),attr(c,"id","cta"),attr(c,"class","svelte-db4j0k"),attr(C,"class","container"),attr(v,"id","cta-wrapper"),attr(v,"class","svelte-db4j0k")},m(E,A){insert(E,x,A),append(x,d),append(d,a),append(a,u),append(u,L),append(L,K),append(u,le),append(u,m),append(m,k),append(k,q),o&&o.m(m,null),append(m,y),append(a,de),append(a,F),F.innerHTML=X,append(a,oe);for(let e=0;e<s.length;e+=1)s[e].m(a,null);append(d,ue),append(d,_),append(_,w),insert(E,Z,A),mount_component(j,E,A),insert(E,Q,A),insert(E,f,A),append(f,g),append(g,S),append(S,O),append(g,re),append(g,p),append(p,z),append(z,W),append(p,ae),append(p,M),append(M,Y),insert(E,ne,A),insert(E,r,A);for(let e=0;e<n.length;e+=1)n[e].m(r,null);insert(E,$,A),insert(E,h,A),append(h,l),append(l,R),append(R,se),append(l,ce);for(let e=0;e<t.length;e+=1)t[e].m(l,null);insert(E,G,A),insert(E,v,A),append(v,C),append(C,c),append(c,P),append(P,te),append(c,he),append(c,b),append(b,ee),i=!0,ie||(me=listen(window,"scroll",()=>{V=!0,clearTimeout(U),U=setTimeout_1(ge,100),e[8]()}),ie=!0)},p(e,[c]){if(c&1&&!V&&(V=!0,clearTimeout(U),scrollTo(window.pageXOffset,e[0]),U=setTimeout_1(ge,100)),(!i||c&2)&&I!==(I=e[1].title+"")&&set_data(K,I),(!i||c&128)&&set_data(q,e[7]),e[7]===e[6]?o||(o=create_if_block(e),o.c(),o.m(m,y)):o&&(o.d(1),o=null),(!i||c&2)&&X!==(X=e[1].body+"")&&(F.innerHTML=X),c&2){E=e[1].cta;let t;for(t=0;t<E.length;t+=1){const n=get_each_context_2(e,E,t);s[t]?s[t].p(n,c):(s[t]=create_each_block_2(n),s[t].c(),s[t].m(a,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=E.length}if((!i||c&4)&&N!==(N=e[2].title+"")&&set_data(W,N),(!i||c&4)&&H!==(H=e[2].body+"")&&set_data(Y,H),c&8){A=e[3];let t;for(t=0;t<A.length;t+=1){const s=get_each_context_1(e,A,t);n[t]?n[t].p(s,c):(n[t]=create_each_block_1(s),n[t].c(),n[t].m(r,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=A.length}if((!i||c&1)&&set_style(r,"background-position-y",e[0]/5-300+"px"),c&16){T=e[4];let n;for(n=0;n<T.length;n+=1){const s=get_each_context(e,T,n);t[n]?t[n].p(s,c):(t[n]=create_each_block(s),t[n].c(),t[n].m(l,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=T.length}(!i||c&32)&&B!==(B=e[5].title+"")&&set_data(te,B),(!i||c&32)&&D!==(D=e[5].link.text+"")&&set_data(ee,D),(!i||c&32&&J!==(J=e[5].link.url))&&attr(b,"href",J)},i(e){if(i)return;transition_in(j.$$.fragment,e),i=!0},o(e){transition_out(j.$$.fragment,e),i=!1},d(e){e&&detach(x),o&&o.d(),destroy_each(s,e),e&&detach(Z),destroy_component(j,e),e&&detach(Q),e&&detach(f),e&&detach(ne),e&&detach(r),destroy_each(n,e),e&&detach($),e&&detach(h),destroy_each(t,e),e&&detach(G),e&&detach(v),ie=!1,me()}}}function instance(e,t,n){let{intro:i}=t,{editor:u}=t,{features:h}=t,{setup:d}=t,{cta:p}=t,{by:l=0}=t,v=i.phrases.length,o=i.phrases[0],s=o,r=0,a=0,f,c;const g=()=>{s===o&&(clearInterval(f),setTimeout(m,5e3),c=!0,r=0),s.length===0&&(c=!1,a<v?a+=1:a=0,n(6,o=i.phrases[a])),c?s===o?setTimeout(()=>{n(7,s=s.slice(0,-1))},5e3):n(7,s=s.slice(0,-1)):(n(7,s+=o[r]),r+=1)},m=()=>f=setInterval(g,50);onMount(async()=>{m()});function b(){n(0,l=window.pageYOffset)}return e.$$set=e=>{"intro"in e&&n(1,i=e.intro),"editor"in e&&n(2,u=e.editor),"features"in e&&n(3,h=e.features),"setup"in e&&n(4,d=e.setup),"cta"in e&&n(5,p=e.cta),"by"in e&&n(0,l=e.by)},[l,i,u,h,d,p,o,s,b]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{intro:1,editor:2,features:3,setup:4,cta:5,by:0})}}export default Component