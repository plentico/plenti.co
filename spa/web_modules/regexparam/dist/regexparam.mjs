export default function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,o,a,r=[],i="",c=e.split("/");for(c[0]||c.shift();n=c.shift();)a=n[0],a==="*"?(r.push("wild"),i+="/(.*)"):a===":"?(o=n.indexOf("?",1),s=n.indexOf(".",1),r.push(n.substring(1,!!~o?o:!!~s?s:n.length)),i+=!!~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",!~s||(i+=(!!~o?"?":"")+"\\"+n.substring(s))):i+="/"+n;return{keys:r,pattern:new RegExp("^"+i+(t?"(?=$|/)":"/?$"),"i")}}