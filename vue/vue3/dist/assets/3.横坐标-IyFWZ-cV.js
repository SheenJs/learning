import{d as n,r as i,y as s,ad as c,o as m,c as l,_ as f}from"./index-WJebj2m3.js";import{a as e}from"./mock-0PiHM-V7.js";import{c as p,a as u,r as d,t as y}from"./thundershower-qlMwaYeS.js";const h=n({__name:"3.横坐标",setup(_){const o=[p,u,d,y],t=i();return s(()=>{c(t.value,{grid:{left:10,right:10,bottom:50,top:50},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun1"],position:"bottom",name:"x轴基本配置练习",nameLocation:"center",nameTextStyle:{color:"red"},nameGap:-5,nameRotate:45},{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun66"],position:"bottom",offset:-100,name:"轴线配置练习",nameLocation:"center",axisLine:{symbol:"arrow",lineStyle:{color:"pink"}},axisTick:{lineStyle:{color:"blue"}}},{type:"category",data:Array.from({length:15},()=>["小雨","阴","多云","小雨","晴","雨夹雪"][e.Random.integer(0,5)]),name:"标签相关设置",nameLocation:"center",position:"top",nameGap:-20,offset:-200,axisLabel:{interval:0,formatter:function(r,a){return"{"+a+"| }"},rich:{...Array.from({length:15},()=>({backgroundColor:{image:o[e.Random.integer(0,3)]},height:16})),b:{fontSize:11,lineHeight:30,height:20}}}},{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun3"],position:"bottom",offset:-300},{type:"category",data:Array.from({length:15},()=>e.mock("@ctitle")),position:"bottom",offset:-400,axisLabel:{rotate:80}}],yAxis:{type:"value",show:!1},series:[]})}),(r,a)=>(m(),l("div",{ref_key:"xAxisChartRef",ref:t,class:"chart"},null,512))}}),S=f(h,[["__scopeId","data-v-a2c768ca"]]);export{S as default};
