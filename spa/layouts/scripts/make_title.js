import{SvelteComponent,init,safe_not_equal}from"../../web_modules/svelte/internal/index.mjs";const makeTitle=e=>(e&&(e=e.split(".").slice(0,-1).join("."),e=e.replace(/_|-/g," "),e=e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.substring(1)).join(" ")),e);class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,null,safe_not_equal,{})}}export default Component;export{makeTitle}