import{d as i,j as m,o as _,c as a,_ as p}from"./index-VScr8L-_.js";const d={class:"drag-test"},f=i({__name:"21.custom_instruction",setup(r){const n={mounted:t=>{t.onmousedown=o=>{console.log(o),console.log(t.clientWidth,t.offsetWidth);const s=o.clientX-t.offsetLeft,c=o.clientY-t.offsetTop;document.onmousemove=e=>{let u=e.clientX-s,l=e.clientY-c;t.style.left=u+"px",t.style.top=l+"px"},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}}}};return(t,o)=>m((_(),a("div",d,null,512)),[[n]])}}),h=p(f,[["__scopeId","data-v-8dfea07a"]]);export{h as default};
