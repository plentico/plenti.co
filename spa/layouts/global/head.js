import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";import{makeTitle}from"../scripts/make_title.js";function create_if_block_1(e){let t,s,o,n,i;return{c(){t=element("meta"),o=space(),n=element("meta"),this.h()},l(e){t=claim_element(e,"META",{name:!0,content:!0}),o=claim_space(e),n=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(t,"name","description"),attr(t,"content",s=e[0].fields.meta.desc),attr(n,"name","keywords"),attr(n,"content",i=e[0].fields.meta.keywords)},m(e,s){insert_hydration(e,t,s),insert_hydration(e,o,s),insert_hydration(e,n,s)},p(e,o){o&1&&s!==(s=e[0].fields.meta.desc)&&attr(t,"content",s),o&1&&i!==(i=e[0].fields.meta.keywords)&&attr(n,"content",i)},d(e){e&&detach(t),e&&detach(o),e&&detach(n)}}}function create_else_block(e){let t,s,o,n;return{c(){t=element("meta"),o=space(),n=element("meta"),this.h()},l(e){t=claim_element(e,"META",{name:!0,content:!0}),o=claim_space(e),n=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(t,"name","twitter:title"),attr(t,"content",s=e[0].fields.title),attr(n,"name","twitter:description"),attr(n,"content","Build more sites, manage less overhead.")},m(e,s){insert_hydration(e,t,s),insert_hydration(e,o,s),insert_hydration(e,n,s)},p(e,n){n&1&&s!==(s=e[0].fields.title)&&attr(t,"content",s)},d(e){e&&detach(t),e&&detach(o),e&&detach(n)}}}function create_if_block(e){let t,o,i,n,a,r,s,c;return{c(){t=element("meta"),i=space(),n=element("meta"),r=space(),s=element("meta"),this.h()},l(e){t=claim_element(e,"META",{name:!0,content:!0}),i=claim_space(e),n=claim_element(e,"META",{name:!0,content:!0}),r=claim_space(e),s=claim_element(e,"META",{name:!0,content:!0}),this.h()},h(){attr(t,"name","twitter:title"),attr(t,"content",o=e[0].fields.name),attr(n,"name","twitter:description"),attr(n,"content",a="Check out the "+e[0].fields.name+" Plenti theme!"),attr(s,"name","twitter:image"),attr(s,"content",c="https://plenti.co/media/themes/"+e[0].fields.name.toLowerCase()+".png")},m(e,o){insert_hydration(e,t,o),insert_hydration(e,i,o),insert_hydration(e,n,o),insert_hydration(e,r,o),insert_hydration(e,s,o)},p(e,i){i&1&&o!==(o=e[0].fields.name)&&attr(t,"content",o),i&1&&a!==(a="Check out the "+e[0].fields.name+" Plenti theme!")&&attr(n,"content",a),i&1&&c!==(c="https://plenti.co/media/themes/"+e[0].fields.name.toLowerCase()+".png")&&attr(s,"content",c)},d(e){e&&detach(t),e&&detach(i),e&&detach(n),e&&detach(r),e&&detach(s)}}}function create_fragment(e){let t,_,C,g,D,a,m=(e[0].type=="_index"?"Home":makeTitle(e[0].filename))+"",y,z,F,b,h,S,f,k,v,o,L,w,i,R,O,p,x,l,E,c,A,r,M,u,T,d,n=e[0].fields.meta&&create_if_block_1(e);function N(e){return e[0].type=="themes"?create_if_block:create_else_block}let j=N(e,-1),s=j(e);return{c(){t=element("head"),_=element("meta"),C=space(),g=element("meta"),D=space(),a=element("title"),y=text(m),z=text(" | Plenti - A Static Site Generator for Svelte"),F=space(),n&&n.c(),b=space(),h=element("meta"),S=space(),f=element("meta"),k=space(),s.c(),v=space(),o=element("script"),w=space(),i=element("script"),O=space(),p=element("link"),x=space(),l=element("link"),E=space(),c=element("link"),A=space(),r=element("link"),M=space(),u=element("link"),T=space(),d=element("link"),this.h()},l(e){t=claim_element(e,"HEAD",{});var N,L,R,j=children(t);_=claim_element(j,"META",{charset:!0}),C=claim_space(j),g=claim_element(j,"META",{name:!0,content:!0}),D=claim_space(j),a=claim_element(j,"TITLE",{}),N=children(a),y=claim_text(N,m),z=claim_text(N," | Plenti - A Static Site Generator for Svelte"),N.forEach(detach),F=claim_space(j),n&&n.l(j),b=claim_space(j),h=claim_element(j,"META",{name:!0,content:!0}),S=claim_space(j),f=claim_element(j,"META",{name:!0,content:!0}),k=claim_space(j),s.l(j),v=claim_space(j),o=claim_element(j,"SCRIPT",{src:!0}),L=children(o),L.forEach(detach),w=claim_space(j),i=claim_element(j,"SCRIPT",{type:!0,src:!0}),R=children(i),R.forEach(detach),O=claim_space(j),p=claim_element(j,"LINK",{href:!0,rel:!0}),x=claim_space(j),l=claim_element(j,"LINK",{href:!0,rel:!0}),E=claim_space(j),c=claim_element(j,"LINK",{href:!0,rel:!0}),A=claim_space(j),r=claim_element(j,"LINK",{rel:!0,type:!0,href:!0}),M=claim_space(j),u=claim_element(j,"LINK",{rel:!0,href:!0}),T=claim_space(j),d=claim_element(j,"LINK",{rel:!0,href:!0}),j.forEach(detach),this.h()},h(){attr(_,"charset","utf-8"),attr(g,"name","viewport"),attr(g,"content","width=device-width,initial-scale=1"),attr(h,"name","twitter:card"),attr(h,"content","summary"),attr(f,"name","twitter:site"),attr(f,"content","@plentico"),o.async=!0,o.defer=!0,src_url_equal(o.src,L="https://nullitics.com/script.js")||attr(o,"src",L),attr(i,"type","module"),src_url_equal(i.src,R="/spa/core/main.js")||attr(i,"src",R),attr(p,"href","https://fonts.googleapis.com/css2?family=NTR&display=swap&family=Heebo:wght@900&family=Kalam&display=swap"),attr(p,"rel","stylesheet"),attr(l,"href","https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"),attr(l,"rel","stylesheet"),attr(c,"href","https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"),attr(c,"rel","stylesheet"),attr(r,"rel","icon"),attr(r,"type","image/svg+xml"),attr(r,"href","/p.svg"),attr(u,"rel","stylesheet"),attr(u,"href","/global.css"),attr(d,"rel","stylesheet"),attr(d,"href","/spa/bundle.css")},m(e,m){insert_hydration(e,t,m),append_hydration(t,_),append_hydration(t,C),append_hydration(t,g),append_hydration(t,D),append_hydration(t,a),append_hydration(a,y),append_hydration(a,z),append_hydration(t,F),n&&n.m(t,null),append_hydration(t,b),append_hydration(t,h),append_hydration(t,S),append_hydration(t,f),append_hydration(t,k),s.m(t,null),append_hydration(t,v),append_hydration(t,o),append_hydration(t,w),append_hydration(t,i),append_hydration(t,O),append_hydration(t,p),append_hydration(t,x),append_hydration(t,l),append_hydration(t,E),append_hydration(t,c),append_hydration(t,A),append_hydration(t,r),append_hydration(t,M),append_hydration(t,u),append_hydration(t,T),append_hydration(t,d)},p(e,[o]){o&1&&m!==(m=(e[0].type=="_index"?"Home":makeTitle(e[0].filename))+"")&&set_data(y,m),e[0].fields.meta?n?n.p(e,o):(n=create_if_block_1(e),n.c(),n.m(t,b)):n&&(n.d(1),n=null),j===(j=N(e,o))&&s?s.p(e,o):(s.d(1),s=j(e),s&&(s.c(),s.m(t,v)))},i:noop,o:noop,d(e){e&&detach(t),n&&n.d(),s.d()}}}function instance(e,t,n){let{content:s}=t;return e.$$set=e=>{"content"in e&&n(0,s=e.content)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0})}}export default Component