import{d as y,r as _,o as f,c as w,a as e,t as c,u as o,q as a,m as t,g as n,ah as r,F as h}from"./index-cgOjhSOl.js";const k=e("h1",null,"url参数",-1),v=e("h1",null,"window.history",-1),C=e("h1",null,"window.navigator",-1),B=y({__name:"2.window-api",setup(b){const l=new URLSearchParams(location.search);console.log(l);const p=()=>{history.forward()},g=()=>{history.back()},i=(u=0)=>{history.go(u)};console.warn("提醒"),console.error("你错了"),console.table({name:"张三",age:18}),console.table(["451515","48489489"]);const d=_(window.navigator);return console.log(d),(u,s)=>(f(),w(h,null,[k,e("div",null,c(o(l).get("name")),1),e("div",null,c(o(l).get("age")),1),v,a(o(r),{onClick:p,type:"primary"},{default:t(()=>[n("forward")]),_:1}),a(o(r),{onClick:g,type:"primary"},{default:t(()=>[n("back")]),_:1}),a(o(r),{onClick:i,type:"primary"},{default:t(()=>[n("go0")]),_:1}),a(o(r),{onClick:s[0]||(s[0]=m=>i(1)),type:"primary"},{default:t(()=>[n("go1")]),_:1}),a(o(r),{onClick:s[1]||(s[1]=m=>i(-1)),type:"primary"},{default:t(()=>[n("go-2")]),_:1}),C,e("div",null,c(d.value),1)],64))}});export{B as default};
