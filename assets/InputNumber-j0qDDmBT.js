import{d as j,P as u,Q as Me,R as Se,S as Te,U as Pe,V as De,W as Q,X as Ce,Y as le,Z as Fe,$ as Oe,r as B,a0 as ke,a1 as Ae,a2 as g,D as Ue,a3 as _e,f as $e,a4 as Ee,a5 as Le,a6 as Y,a7 as Z,a8 as q,a9 as J,aa as ee,ab as w,ac as He}from"./index-IKBqo79c.js";const je=j({name:"Add",render(){return u("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ze=j({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Me({name:"InputNumber",common:Se,peers:{Button:Te,Input:Pe},self:Ge}),We=Ke;function Xe(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function Qe(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ne(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const Ye=De([Q("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),Q("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),te=800,re=100,Ze=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),Je=j({name:"InputNumber",props:Ze,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:P}=Ce(n),a=le("InputNumber","-input-number",Ye,We,n,p),{localeRef:v}=Fe("InputNumber"),R=Oe(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=R,d=B(null),z=B(null),G=B(null),D=B(n.defaultValue),oe=ke(n,"value"),f=Ae(oe,D),h=B(""),C=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:C(r));return Math.max(...t)},de=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=g(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),K=g(()=>{const e=H(n.min);return e!==null?e:null}),W=g(()=>{const e=H(n.max);return e!==null?e:null}),I=e=>{const{value:t}=f;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:l,onChange:s}=n,{nTriggerFormInput:c,nTriggerFormChange:x}=R;s&&w(s,e),l&&w(l,e),r&&w(r,e),D.value=e,c(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:l})=>{const{value:s}=h;if(l&&Qe(s))return!1;const c=(n.parse||Xe)(s);if(c===null)return t&&I(null),null;if(L(c)){const x=C(c),{precision:N}=n;if(N!==void 0&&N<x&&!r)return!1;let m=parseFloat((c+e).toFixed(N??se(c)));if(L(m)){const{value:$}=W,{value:E}=K;if($!==null&&m>$){if(!t||l)return!1;m=$}if(E!==null&&m<E){if(!t||l)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&I(m),m)}}return!1},b=()=>{const{value:e}=f;if(L(e)){const{format:t,precision:r}=n;t?h.value=t(e):e===null||r===void 0||C(e)>r?h.value=ne(e,void 0):h.value=ne(e,r)}else h.value=String(e)};b();const fe=g(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),F=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=R;t&&w(t,e),r()}function me(e){var t,r;if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;const l=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(r=d.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(l||"")),f.value===l&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:c}=R;s&&w(s,e),c(),He(()=>{b()})}function ve(e){const{onClear:t}=n;t&&w(t,e)}function k(){const{value:e}=O;if(!e){_();return}const{value:t}=f;if(t===null)n.validator||I(X());else{const{value:r}=M;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function A(){const{value:e}=F;if(!e){U();return}const{value:t}=f;if(t===null)n.validator||I(X());else{const{value:r}=M;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const he=ce,ge=me;function X(){if(n.validator)return null;const{value:e}=K,{value:t}=W;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ve(e),I(null)}function be(e){var t,r,l;!((t=G.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=z.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(l=d.value)===null||l===void 0||l.activate()}let V=null,y=null,S=null;function U(){S&&(window.clearTimeout(S),S=null),V&&(window.clearInterval(V),V=null)}function _(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function xe(){U(),S=window.setTimeout(()=>{V=window.setInterval(()=>{A()},re)},te),Z("mouseup",document,U,{once:!0})}let T=null;function we(){_(),T=window.setTimeout(()=>{y=window.setInterval(()=>{k()},re)},te),Z("mouseup",document,_,{once:!0})}const Ie=()=>{y||k()},Ve=()=>{V||A()};function ye(e){var t,r;if(e.key==="Enter"){if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=d.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}else if(e.key==="ArrowDown"){if(!F.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}}function Ne(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ue(f,()=>{b()});const Be={focus:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.blur()},select:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.select()}},Re=_e("InputNumber",P,p);return Object.assign(Object.assign({},Be),{rtlEnabled:Re,inputInstRef:d,minusButtonInstRef:z,addButtonInstRef:G,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:D,mergedValue:f,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:h,addable:O,minusable:F,mergedStatus:ae,handleFocus:he,handleBlur:ge,handleClear:pe,handleMouseDown:be,handleAddClick:Ie,handleMinusClick:Ve,handleAddMousedown:we,handleMinusMousedown:xe,handleKeyDown:ye,handleUpdateDisplayedValue:Ne,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:$e(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,l,s]=Ee(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(ee,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>q(i["minus-icon"],()=>[u(J,{clsPrefix:n},{default:()=>u(ze,null)})])}),P=()=>u(ee,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>q(i["add-icon"],()=>[u(J,{clsPrefix:n},{default:()=>u(je,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(Le,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),Y(i.prefix,v=>v?u("span",{class:`${n}-input-number-prefix`},v):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[Y(i.suffix,v=>v?u("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,P()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{Je as N};
