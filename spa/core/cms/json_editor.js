import{SvelteComponent,append_hydration,attr,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,init,insert_hydration,listen,mount_component,run_all,safe_not_equal,space,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import ButtonWrapper from"./button_wrapper.js";import Button from"./button.js";function create_default_slot(e){let t,s,n,o;return t=new Button({props:{commitList:[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}],buttonText:"Save",action:e[0].isNew?"create":"update",encoding:"text",user:e[1]}}),n=new Button({props:{commitList:[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}],buttonText:"Delete",buttonStyle:"secondary",action:"delete",encoding:"text",user:e[1]}}),{c(){create_component(t.$$.fragment),s=space(),create_component(n.$$.fragment)},l(e){claim_component(t.$$.fragment,e),s=claim_space(e),claim_component(n.$$.fragment,e)},m(e,i){mount_component(t,e,i),insert_hydration(e,s,i),mount_component(n,e,i),o=!0},p(e,s){const o={};s&1&&(o.commitList=[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}]),s&1&&(o.action=e[0].isNew?"create":"update"),s&2&&(o.user=e[1]),t.$set(o);const i={};s&1&&(i.commitList=[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}]),s&2&&(i.user=e[1]),n.$set(i)},i(e){if(o)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),o=!1},d(e){destroy_component(t,e),e&&detach(s),destroy_component(n,e)}}}function create_fragment(e){let n,t,i,s,o,a,r;return s=new ButtonWrapper({props:{$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){n=element("form"),t=element("div"),i=space(),create_component(s.$$.fragment),this.h()},l(e){n=claim_element(e,"FORM",{class:!0});var a,o=children(n);t=claim_element(o,"DIV",{class:!0,contenteditable:!0}),a=children(t),a.forEach(detach),i=claim_space(o),claim_component(s.$$.fragment,o),o.forEach(detach),this.h()},h(){attr(t,"class","json-editor svelte-nwrl91"),attr(t,"contenteditable","true"),attr(n,"class","svelte-nwrl91")},m(c,l){insert_hydration(c,n,l),append_hydration(n,t),t.innerHTML=e[2],append_hydration(n,i),mount_component(s,n,null),o=!0,a||(r=[listen(t,"input",e[4]),listen(t,"keydown",e[5])],a=!0)},p(e,[n]){(!o||n&4)&&(t.innerHTML=e[2]);const i={};n&131&&(i.$$scope={dirty:n,ctx:e}),s.$set(i)},i(e){if(o)return;transition_in(s.$$.fragment,e),o=!0},o(e){transition_out(s.$$.fragment,e),o=!1},d(e){e&&detach(n),destroy_component(s),a=!1,run_all(r)}}}function instance(e,t,n){let{content:s,user:i}=t,a,o;const r=e=>(e=JSON.stringify(e,null,4),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|(true|false|null)|(-?[0-9]*\.?[0-9]*))/g,e=>{let t="syntax";return/^"/.test(e)?/:$/.test(e)?t="key":t="string":/true|false/.test(e)?t="boolean":/[0-9]/.test(e)?t="number":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})),c=e=>n(0,s.fields=JSON.parse(e.target.textContent),s),l=e=>{e.key==="Tab"&&(document.execCommand("insertHTML",!1,"&#32;&#32;&#32;&#32;"),e.preventDefault())};return e.$$set=e=>{"content"in e&&n(0,s=e.content),"user"in e&&n(1,i=e.user)},e.$$.update=()=>{if(e.$$.dirty&9)$:s.filepath!==o&&(n(2,a=r(s.fields)),n(3,o=s.filepath))},[s,i,a,o,c,l]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,user:1})}}export default Component