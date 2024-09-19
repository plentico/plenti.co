import{SvelteComponent,append_hydration,attr,children,claim_svg_element,detach,init,insert_hydration,noop,safe_not_equal,svg_element,xlink_attr}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let t,c,r,n,s,o,i,a;return{c(){t=svg_element("svg"),c=svg_element("defs"),r=svg_element("path"),n=svg_element("g"),s=svg_element("use"),o=svg_element("use"),i=svg_element("use"),a=svg_element("use"),this.h()},l(e){t=claim_svg_element(e,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0,preserveAspectRatio:!0,"shape-rendering":!0});var l,u,d=children(t);c=claim_svg_element(d,"defs",{}),u=children(c),r=claim_svg_element(u,"path",{id:!0,d:!0}),children(r).forEach(detach),u.forEach(detach),n=claim_svg_element(d,"g",{class:!0}),l=children(n),s=claim_svg_element(l,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0}),children(s).forEach(detach),o=claim_svg_element(l,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0}),children(o).forEach(detach),i=claim_svg_element(l,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0}),children(i).forEach(detach),a=claim_svg_element(l,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0}),children(a).forEach(detach),l.forEach(detach),d.forEach(detach),this.h()},h(){attr(r,"id","gentle-wave"),attr(r,"d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"),xlink_attr(s,"xlink:href","#gentle-wave"),attr(s,"x","48"),attr(s,"y","0"),attr(s,"fill","rgba(34,166,237,0.7"),attr(s,"class","svelte-y5tonm"),xlink_attr(o,"xlink:href","#gentle-wave"),attr(o,"x","48"),attr(o,"y","3"),attr(o,"fill","rgba(34,166,237,0.5)"),attr(o,"class","svelte-y5tonm"),xlink_attr(i,"xlink:href","#gentle-wave"),attr(i,"x","48"),attr(i,"y","5"),attr(i,"fill","rgba(34,166,237,0.3)"),attr(i,"class","svelte-y5tonm"),xlink_attr(a,"xlink:href","#gentle-wave"),attr(a,"x","48"),attr(a,"y","7"),attr(a,"fill","rgba(34,166,237,0)"),attr(a,"class","svelte-y5tonm"),attr(n,"class","parallax svelte-y5tonm"),attr(t,"class","waves svelte-y5tonm"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),attr(t,"viewBox","0 24 150 28"),attr(t,"preserveAspectRatio","none"),attr(t,"shape-rendering","auto")},m(e,l){insert_hydration(e,t,l),append_hydration(t,c),append_hydration(c,r),append_hydration(t,n),append_hydration(n,s),append_hydration(n,o),append_hydration(n,i),append_hydration(n,a)},p:noop,i:noop,o:noop,d(e){e&&detach(t)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component