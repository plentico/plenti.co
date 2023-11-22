import{SvelteComponent,append_hydration,attr,children,claim_svg_element,claim_text,detach,init,insert_hydration,noop,safe_not_equal,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let t,m,h,s,f,v,p,g,n,d,u,l,o,i,c,r,a;return{c(){t=svg_element("svg"),m=svg_element("metadata"),h=svg_element("rdf:RDF"),s=svg_element("cc:Work"),f=svg_element("dc:format"),v=text("image/svg+xml"),p=svg_element("dc:type"),g=svg_element("dc:title"),n=svg_element("g"),d=svg_element("g"),u=svg_element("polygon"),l=svg_element("g"),o=svg_element("polygon"),i=svg_element("g"),c=svg_element("polygon"),r=svg_element("g"),a=svg_element("polygon"),this.h()},l(e){t=claim_svg_element(e,"svg",{"enable-background":!0,version:!0,viewBox:!0,"xml:space":!0,xmlns:!0,"xmlns:cc":!0,"xmlns:dc":!0,"xmlns:rdf":!0});var b,j,_,w,O,x,C,E,k,y=children(t);m=claim_svg_element(y,"metadata",{}),_=children(m),h=claim_svg_element(_,"rdf:RDF",{}),w=children(h),s=claim_svg_element(w,"cc:Work",{"rdf:about":!0}),j=children(s),f=claim_svg_element(j,"dc:format",{}),O=children(f),v=claim_text(O,"image/svg+xml"),O.forEach(detach),p=claim_svg_element(j,"dc:type",{"rdf:resource":!0}),children(p).forEach(detach),g=claim_svg_element(j,"dc:title",{}),children(g).forEach(detach),j.forEach(detach),w.forEach(detach),_.forEach(detach),n=claim_svg_element(y,"g",{fill:!0}),b=children(n),d=claim_svg_element(b,"g",{fill:!0}),x=children(d),u=claim_svg_element(x,"polygon",{points:!0,fill:!0}),children(u).forEach(detach),x.forEach(detach),l=claim_svg_element(b,"g",{fill:!0}),C=children(l),o=claim_svg_element(C,"polygon",{points:!0,fill:!0}),children(o).forEach(detach),C.forEach(detach),i=claim_svg_element(b,"g",{fill:!0}),E=children(i),c=claim_svg_element(E,"polygon",{points:!0,fill:!0}),children(c).forEach(detach),E.forEach(detach),r=claim_svg_element(b,"g",{fill:!0}),k=children(r),a=claim_svg_element(k,"polygon",{points:!0,fill:!0}),children(a).forEach(detach),k.forEach(detach),b.forEach(detach),y.forEach(detach),this.h()},h(){attr(p,"rdf:resource","http://purl.org/dc/dcmitype/StillImage"),attr(s,"rdf:about",""),attr(u,"points","224 52 0 80 0 240 224 240"),attr(u,"fill","#3c3c3c"),attr(d,"fill","#3c3c3c"),attr(o,"points","512 240 512 16 256 48 256 240"),attr(o,"fill","#3c3c3c"),attr(l,"fill","#3c3c3c"),attr(c,"points","512 272 256 272 256 464 512 496"),attr(c,"fill","#3c3c3c"),attr(i,"fill","#3c3c3c"),attr(a,"points","224 272 0 272 0 432 224 460"),attr(a,"fill","#3c3c3c"),attr(r,"fill","#3c3c3c"),attr(n,"fill","#3c3c3c"),attr(t,"enable-background","new 0 0 512 512"),attr(t,"version","1.1"),attr(t,"viewBox","0 0 512 512"),attr(t,"xml:space","preserve"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"xmlns:cc","http://creativecommons.org/ns#"),attr(t,"xmlns:dc","http://purl.org/dc/elements/1.1/"),attr(t,"xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#")},m(e,b){insert_hydration(e,t,b),append_hydration(t,m),append_hydration(m,h),append_hydration(h,s),append_hydration(s,f),append_hydration(f,v),append_hydration(s,p),append_hydration(s,g),append_hydration(t,n),append_hydration(n,d),append_hydration(d,u),append_hydration(n,l),append_hydration(l,o),append_hydration(n,i),append_hydration(i,c),append_hydration(n,r),append_hydration(r,a)},p:noop,i:noop,o:noop,d(e){e&&detach(t)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component