import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_svg_element,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let s,i,t,g,h,l,c,ue,F,le,H,S,N,te,r,n,y,P,u,X,G,pe,U,x,B,d,z,R,Q,w,K,m,L,T,ne,o,A,I,ae,k,j,V,$,W,v,O,q,Y,a,E,_,Z,J,ee,C,b,se,oe,ie,M,re,ce,p,de,fe,he,f,me,D;return{c(){s=element("div"),i=element("a"),t=svg_element("svg"),g=svg_element("path"),h=svg_element("line"),l=svg_element("line"),c=svg_element("line"),ue=space(),F=element("span"),le=text("Back to themes list"),H=space(),S=element("h1"),N=text(e[0]),te=space(),r=element("div"),n=element("div"),y=element("div"),P=text("Repo: "),u=element("a"),X=text("https://github.com/plenti-themes/"),G=text(e[3]),U=space(),x=element("div"),B=text("Built by: "),d=element("a"),z=text(e[1]),Q=space(),w=element("div"),K=text("Designed by: "),m=element("a"),L=text(e[2]),ne=space(),o=element("div"),A=element("div"),I=text("Start a new project using this theme:"),ae=space(),k=element("div"),j=element("code"),V=text("plenti new site my-site --theme=https://github.com/plenti-themes/"),$=text(e[3]),W=space(),v=element("details"),O=element("summary"),q=text("Or add this theme to an existing project:"),Y=space(),a=element("ol"),E=element("li"),_=element("code"),Z=text("plenti theme add https://github.com/plenti-themes/"),J=text(e[3]),ee=space(),C=element("li"),b=element("code"),se=text("plenti theme enable "),oe=text(e[3]),ie=space(),M=element("li"),re=text("Make sure you manually copy any route overrides and delete conflicting content or layouts."),ce=space(),p=element("a"),de=text("See demo"),he=space(),f=element("img"),this.h()},l(T){s=claim_element(T,"DIV",{class:!0});var ge,fe,De,Te,be,D,Oe,_e,ye,Me,we,Ee,me,Ae,ke,Ce,ve,Se,R,Fe,xe,ze,je,Ne,Le,pe=children(s);i=claim_element(pe,"A",{href:!0,class:!0}),ge=children(i),t=claim_svg_element(ge,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),fe=children(t),g=claim_svg_element(fe,"path",{stroke:!0,d:!0,fill:!0}),children(g).forEach(detach),h=claim_svg_element(fe,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(h).forEach(detach),l=claim_svg_element(fe,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(l).forEach(detach),c=claim_svg_element(fe,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),children(c).forEach(detach),fe.forEach(detach),ue=claim_space(ge),F=claim_element(ge,"SPAN",{}),De=children(F),le=claim_text(De,"Back to themes list"),De.forEach(detach),ge.forEach(detach),H=claim_space(pe),S=claim_element(pe,"H1",{}),Te=children(S),N=claim_text(Te,e[0]),Te.forEach(detach),te=claim_space(pe),r=claim_element(pe,"DIV",{class:!0}),be=children(r),n=claim_element(be,"DIV",{class:!0}),D=children(n),y=claim_element(D,"DIV",{}),Oe=children(y),P=claim_text(Oe,"Repo: "),u=claim_element(Oe,"A",{href:!0,class:!0}),_e=children(u),X=claim_text(_e,"https://github.com/plenti-themes/"),G=claim_text(_e,e[3]),_e.forEach(detach),Oe.forEach(detach),U=claim_space(D),x=claim_element(D,"DIV",{}),ye=children(x),B=claim_text(ye,"Built by: "),d=claim_element(ye,"A",{href:!0,class:!0}),Me=children(d),z=claim_text(Me,e[1]),Me.forEach(detach),ye.forEach(detach),Q=claim_space(D),w=claim_element(D,"DIV",{}),we=children(w),K=claim_text(we,"Designed by: "),m=claim_element(we,"A",{href:!0,class:!0}),Ee=children(m),L=claim_text(Ee,e[2]),Ee.forEach(detach),we.forEach(detach),ne=claim_space(D),o=claim_element(D,"DIV",{class:!0}),me=children(o),A=claim_element(me,"DIV",{}),Ae=children(A),I=claim_text(Ae,"Start a new project using this theme:"),Ae.forEach(detach),ae=claim_space(me),k=claim_element(me,"DIV",{}),ke=children(k),j=claim_element(ke,"CODE",{}),Ce=children(j),V=claim_text(Ce,"plenti new site my-site --theme=https://github.com/plenti-themes/"),$=claim_text(Ce,e[3]),Ce.forEach(detach),ke.forEach(detach),W=claim_space(me),v=claim_element(me,"DETAILS",{}),ve=children(v),O=claim_element(ve,"SUMMARY",{class:!0}),Se=children(O),q=claim_text(Se,"Or add this theme to an existing project:"),Se.forEach(detach),Y=claim_space(ve),a=claim_element(ve,"OL",{}),R=children(a),E=claim_element(R,"LI",{}),Fe=children(E),_=claim_element(Fe,"CODE",{}),xe=children(_),Z=claim_text(xe,"plenti theme add https://github.com/plenti-themes/"),J=claim_text(xe,e[3]),xe.forEach(detach),Fe.forEach(detach),ee=claim_space(R),C=claim_element(R,"LI",{}),ze=children(C),b=claim_element(ze,"CODE",{}),je=children(b),se=claim_text(je,"plenti theme enable "),oe=claim_text(je,e[3]),je.forEach(detach),ze.forEach(detach),ie=claim_space(R),M=claim_element(R,"LI",{}),Ne=children(M),re=claim_text(Ne,"Make sure you manually copy any route overrides and delete conflicting content or layouts."),Ne.forEach(detach),R.forEach(detach),ve.forEach(detach),me.forEach(detach),ce=claim_space(D),p=claim_element(D,"A",{class:!0,href:!0}),Le=children(p),de=claim_text(Le,"See demo"),Le.forEach(detach),D.forEach(detach),he=claim_space(be),f=claim_element(be,"IMG",{src:!0,alt:!0,class:!0}),be.forEach(detach),pe.forEach(detach),this.h()},h(){attr(g,"stroke","none"),attr(g,"d","M0 0h24v24H0z"),attr(g,"fill","none"),attr(h,"x1","5"),attr(h,"y1","12"),attr(h,"x2","19"),attr(h,"y2","12"),attr(l,"x1","5"),attr(l,"y1","12"),attr(l,"x2","9"),attr(l,"y2","16"),attr(c,"x1","5"),attr(c,"y1","12"),attr(c,"x2","9"),attr(c,"y2","8"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-arrow-narrow-left"),attr(t,"width","25"),attr(t,"height","25"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","2"),attr(t,"stroke","#22a6ed"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(i,"href","/themes"),attr(i,"class","back svelte-lz6xih"),attr(u,"href",pe="https://github.com/plenti-themes/"+e[3]),attr(u,"class","svelte-lz6xih"),attr(d,"href",R="https://github.com/"+e[1]),attr(d,"class","svelte-lz6xih"),attr(m,"href",T="https://github.com/"+e[2]),attr(m,"class","svelte-lz6xih"),attr(O,"class","svelte-lz6xih"),attr(o,"class","install svelte-lz6xih"),attr(p,"class","button svelte-lz6xih"),attr(p,"href",fe="https://plenti-themes.github.io/"+e[3]),attr(n,"class","content svelte-lz6xih"),src_url_equal(f.src,me="/media/themes/"+e[3]+".webp")||attr(f,"src",me),attr(f,"alt",D=""+(e[0]+" Plenti theme")),attr(f,"class","svelte-lz6xih"),attr(r,"class","columns svelte-lz6xih"),attr(s,"class","container")},m(e,T){insert_hydration(e,s,T),append_hydration(s,i),append_hydration(i,t),append_hydration(t,g),append_hydration(t,h),append_hydration(t,l),append_hydration(t,c),append_hydration(i,ue),append_hydration(i,F),append_hydration(F,le),append_hydration(s,H),append_hydration(s,S),append_hydration(S,N),append_hydration(s,te),append_hydration(s,r),append_hydration(r,n),append_hydration(n,y),append_hydration(y,P),append_hydration(y,u),append_hydration(u,X),append_hydration(u,G),append_hydration(n,U),append_hydration(n,x),append_hydration(x,B),append_hydration(x,d),append_hydration(d,z),append_hydration(n,Q),append_hydration(n,w),append_hydration(w,K),append_hydration(w,m),append_hydration(m,L),append_hydration(n,ne),append_hydration(n,o),append_hydration(o,A),append_hydration(A,I),append_hydration(o,ae),append_hydration(o,k),append_hydration(k,j),append_hydration(j,V),append_hydration(j,$),append_hydration(o,W),append_hydration(o,v),append_hydration(v,O),append_hydration(O,q),append_hydration(v,Y),append_hydration(v,a),append_hydration(a,E),append_hydration(E,_),append_hydration(_,Z),append_hydration(_,J),append_hydration(a,ee),append_hydration(a,C),append_hydration(C,b),append_hydration(b,se),append_hydration(b,oe),append_hydration(a,ie),append_hydration(a,M),append_hydration(M,re),append_hydration(n,ce),append_hydration(n,p),append_hydration(p,de),append_hydration(r,he),append_hydration(r,f)},p(e,[t]){t&1&&set_data(N,e[0]),t&2&&set_data(z,e[1]),t&2&&R!==(R="https://github.com/"+e[1])&&attr(d,"href",R),t&4&&set_data(L,e[2]),t&4&&T!==(T="https://github.com/"+e[2])&&attr(m,"href",T),t&1&&D!==(D=""+(e[0]+" Plenti theme"))&&attr(f,"alt",D)},i:noop,o:noop,d(e){e&&detach(s)}}}function instance(e,t,n){let{name:s,built_by:o,designed_by:i}=t,a=s.toLowerCase().replaceAll(" ","-");return e.$$set=e=>{"name"in e&&n(0,s=e.name),"built_by"in e&&n(1,o=e.built_by),"designed_by"in e&&n(2,i=e.designed_by)},[s,o,i,a]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{name:0,built_by:1,designed_by:2})}}export default Component