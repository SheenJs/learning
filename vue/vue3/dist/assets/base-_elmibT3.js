import{S as I,P as S,W as B,q as L,r as j,T as E,R as w,b as g,A as G,B as O,M as b,O as W}from"./OrbitControls-PK4fmBsq.js";import{_ as k,r as P,y as R,o as T,c as q,a as e,p as z,l as A}from"./index-VScr8L-_.js";const i=p=>(z("data-v-1acb13fb"),p=p(),A(),p),H={class:"box"},N={class:"option-container"},U={class:"flex-between"},V=i(()=>e("span",null,"渲染器背景色:",-1)),X={class:"flex-between"},Y=i(()=>e("span",null,"模型颜色:",-1)),Z={class:"position_opt flex-between"},$=i(()=>e("span",null,"相机位置:",-1)),D={class:"position_opt_right"},F=i(()=>e("span",null,"X:",-1)),J=i(()=>e("span",null,"Y:",-1)),K=i(()=>e("span",null,"Z:",-1)),Q={__name:"base",setup(p){P("#ff000");let r,d,s,f,u,c,h,a;const x=()=>{r=new I,r.background="red",a=document.querySelector(".box"),d=new S(35,a.clientWidth/a.clientHeight,1,1e3),d.position.set(0,-14,3),s=new B,s.setClearColor("#000000"),s.setSize(a.clientWidth,a.clientHeight),a.appendChild(s.domElement);const o=new L(100,100),t=new j({roughness:.8,color:16777215,bumpScale:5e-4});new E().load("/hdrls/jpg/neon_photostudio_1k.jpg",function(_){_.wrapS=w,_.wrapT=w,t.map=_,t.needsUpdate=!0,l()});const M=new g(o,t);r.add(M,new G(3355443)),f=new O(1,1,1),u=new b({color:"red"}),c=new g(f,u),c.position.set(0,0,1.5),c.name="ctrlObj",r.add(c);const v=()=>{l()};v(),l(),h=new W(d,s.domElement),h.addEventListener("change",v),a.appendChild(s.domElement)},y=o=>{s.setClearColor(o.target.value),l()},C=o=>{u=new b({color:o.target.value}),r.getObjectByName("ctrlObj").material=new b({color:o.target.value}),l()},m=(o,t)=>{d.position[t]=o.target.value,l()},l=()=>{s.render(r,d)};return R(()=>{x(),l()}),(o,t)=>(T(),q("div",H,[e("div",N,[e("div",U,[V,e("input",{onInput:t[0]||(t[0]=n=>y(n)),value:"#000000",type:"color"},null,32)]),e("div",X,[Y,e("input",{onInput:t[1]||(t[1]=n=>C(n)),value:"#ff0000",type:"color"},null,32)]),e("div",Z,[$,e("div",D,[e("div",null,[F,e("input",{onInput:t[2]||(t[2]=n=>m(n,"x")),value:"1",type:"number"},null,32)]),e("div",null,[J,e("input",{onInput:t[3]||(t[3]=n=>m(n,"y")),value:"1",type:"number"},null,32)]),e("div",null,[K,e("input",{onInput:t[4]||(t[4]=n=>m(n,"z")),value:"5",type:"number"},null,32)])])])])]))}},ne=k(Q,[["__scopeId","data-v-1acb13fb"]]);export{ne as default};
