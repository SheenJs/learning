import{d as m,o as i,c as p,a as e,t as a,F as r,r as d,q as c}from"./index-IKBqo79c.js";const v=e("div",null,"11",-1),f={class:"box",style:{color:"red"}},V={class:"box"},$=m({__name:"vModelTest",emits:["update:modelValue","update:title","update:name"],setup(_,{emit:o}){const t=o,n=()=>{t("update:modelValue",5),t("update:title","我系古天乐"),t("update:name","gh")};return(u,l)=>(i(),p(r,null,[v,e("div",f,[e("div",V,[e("p",null,a(u.$attrs.modelValue),1),e("p",null,a(u.$attrs.title),1),e("p",null,a(u.$attrs.name),1)]),e("button",{onClick:n},"点击更新父组件变量")])],64))}}),g=e("h3",null,"父组件v-model绑定给子组件的变量",-1),h=e("h3",null,"子组件",-1),k=m({__name:"16.comp_message_v-model",setup(_){const o=d(1),t=d("我系渣渣辉"),n=d("wgh");return(u,l)=>(i(),p(r,null,[g,e("div",null,a(o.value)+a(t.value)+a(n.value),1),h,c($,{class:"com",style:{"font-size":"10px"},modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),title:t.value,"onUpdate:title":l[1]||(l[1]=s=>t.value=s),name:n.value,"onUpdate:name":l[2]||(l[2]=s=>n.value=s)},null,8,["modelValue","title","name"])],64))}});export{k as default};
