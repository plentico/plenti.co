import{env}from"../../generated/env.js";export default function(e){let n=e.file.split("/")[1],s=e.file.split("/")[2],o=s.substring(0,s.lastIndexOf(".json")),i=e.file,a=JSON.parse(e.contents),r="/"+n+"/"+o,c=env?.routes?.[n]??r,t=replaceRouteFields(c,a);return t=t.replace(":filename",o),t=t.replace(":filepath",i),t}function replaceRouteFields(e,t){const n=/:fields\((\w+)\)/g;return e.replace(n,(e,n)=>n in t?slugify(t[n]):e)}function slugify(e){return e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase(),e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e}