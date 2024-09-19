import{SvelteComponent,claim_component,component_subscribe,create_component,destroy_component,init,mount_component,safe_not_equal,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Html from"../layouts/global/html.js";import Navaid from"../web_modules/navaid/dist/navaid.mjs";import{user}from"./cms/auth.js";import allDefaults from"../generated/defaults.js";function create_fragment(e){let t,n;return t=new Html({props:{path:e[2],params:e[3],content:e[0],layout:e[1],allContent:e[4],allLayouts:e[5],env:e[6],user,shadowContent:e[7]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,[n]){const s={};n&4&&(s.path=e[2]),n&8&&(s.params=e[3]),n&1&&(s.content=e[0]),n&2&&(s.layout=e[1]),n&16&&(s.allContent=e[4]),n&32&&(s.allLayouts=e[5]),n&64&&(s.env=e[6]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function instance(e,t,n){let l;component_subscribe(e,user,e=>n(8,l=e));let{content:s,layout:i,path:u,params:r,allContent:c,allLayouts:m,env:o}=t,f={};l.isBeingAuthenticated&&l.finishAuthentication(r);function d(e){e?.uri?.isNew&&h.on(e?.uri?.route,()=>{n(0,s.isNew=!1,s)}),n(2,u=e.state||e.uri||location.pathname),n(3,r=new URLSearchParams(location.search))}addEventListener("replacestate",d),addEventListener("pushstate",d),addEventListener("popstate",d);const a=()=>{n(0,s=c.find(e=>e.filepath==="content/404.json")),s===void 0&&n(0,s={path:"/404",type:"404",filename:"404.json",fields:{}}),import("../layouts/content/404.js").then(e=>{n(1,i=e.default)}).catch(e=>{console.log("Add a '/layouts/content/404.svelte' file to handle Page Not Found errors."),console.log("If you want to pass data to your 404 component, you can also add a '/content/404.json' file."),console.log(e)})},p=()=>{let e=o.baseurl?o.baseurl:"/";if(location.pathname!==e)return!1;if(location.hash.startsWith("#add/")&&l.isAuthenticated){const[e,t]=location.hash.substring("#add/".length).split("/"),o=allDefaults.find(t=>t.type==e);return e&&t&&o?(import("../layouts/content/"+e+".js").then(e=>{n(0,s=structuredClone(o)),n(0,s.isNew=!0,s),n(0,s.filename=t+".json",s),n(0,s.filepath=s.filepath.replace("_defaults.json",t+".json"),s),n(1,i=e.default)}).catch(a),!0):(a(),!0)}return!1},h=Navaid("/",a);return c.forEach(e=>{h.on(o.baseurl+e.path,()=>{if(p())return;import("../layouts/content/"+e.type+".js").then(t=>{s.filepath!==e.filepath&&window.scrollTo(0,0),n(0,s=e),n(1,i=t.default)}).catch(a)})}),h.listen(),e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,i=e.layout),"path"in e&&n(2,u=e.path),"params"in e&&n(3,r=e.params),"allContent"in e&&n(4,c=e.allContent),"allLayouts"in e&&n(5,m=e.allLayouts),"env"in e&&n(6,o=e.env)},[s,i,u,r,c,m,o,f]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,path:2,params:3,allContent:4,allLayouts:5,env:6})}}export default Component