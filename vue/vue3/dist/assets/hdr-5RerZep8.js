import{D as P,H as L,m as f,n as F,o as S,p as I,S as z,P as W,W as x,E as Y,O as $}from"./OrbitControls-PK4fmBsq.js";import{_ as O,y as j,o as q,c as X}from"./index-VScr8L-_.js";class J extends P{constructor(m){super(m),this.type=L}parse(m){const d=function(e,n){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(n||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(n||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(n||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(n||""))}return-1},U=`
`,A=function(e,n,i){n=n||1024;let l=e.pos,o=-1,r=0,s="",a=String.fromCharCode.apply(null,new Uint16Array(e.subarray(l,l+128)));for(;0>(o=a.indexOf(U))&&r<n&&l<e.byteLength;)s+=a,r+=a.length,l+=128,a+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(l,l+128)));return-1<o?(i!==!1&&(e.pos+=r+o+1),s+a.slice(0,o)):!1},H=function(e){const n=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,t=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,l=/^\s*FORMAT=(\S+)\s*$/,o=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,r={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let s,a;if(e.pos>=e.byteLength||!(s=A(e)))return d(1,"no header found");if(!(a=s.match(n)))return d(3,"bad initial token");for(r.valid|=1,r.programtype=a[1],r.string+=s+`
`;s=A(e),s!==!1;){if(r.string+=s+`
`,s.charAt(0)==="#"){r.comments+=s+`
`;continue}if((a=s.match(i))&&(r.gamma=parseFloat(a[1])),(a=s.match(t))&&(r.exposure=parseFloat(a[1])),(a=s.match(l))&&(r.valid|=2,r.format=a[1]),(a=s.match(o))&&(r.valid|=4,r.height=parseInt(a[1],10),r.width=parseInt(a[2],10)),r.valid&2&&r.valid&4)break}return r.valid&2?r.valid&4?r:d(3,"missing image size specifier"):d(3,"missing format specifier")},N=function(e,n,i){const t=n;if(t<8||t>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);if(t!==(e[2]<<8|e[3]))return d(3,"wrong scanline width");const l=new Uint8Array(4*n*i);if(!l.length)return d(4,"unable to allocate buffer space");let o=0,r=0;const s=4*t,a=new Uint8Array(4),_=new Uint8Array(s);let k=i;for(;k>0&&r<e.byteLength;){if(r+4>e.byteLength)return d(1);if(a[0]=e[r++],a[1]=e[r++],a[2]=e[r++],a[3]=e[r++],a[0]!=2||a[1]!=2||(a[2]<<8|a[3])!=t)return d(3,"bad rgbe scanline format");let w=0,p;for(;w<s&&r<e.byteLength;){p=e[r++];const h=p>128;if(h&&(p-=128),p===0||w+p>s)return d(3,"bad scanline data");if(h){const g=e[r++];for(let M=0;M<p;M++)_[w++]=g}else _.set(e.subarray(r,r+p),w),w+=p,r+=p}const C=t;for(let h=0;h<C;h++){let g=0;l[o]=_[h+g],g+=t,l[o+1]=_[h+g],g+=t,l[o+2]=_[h+g],g+=t,l[o+3]=_[h+g],o+=4}k--}return l},v=function(e,n,i,t){const l=e[n+3],o=Math.pow(2,l-128)/255;i[t+0]=e[n+0]*o,i[t+1]=e[n+1]*o,i[t+2]=e[n+2]*o,i[t+3]=1},V=function(e,n,i,t){const l=e[n+3],o=Math.pow(2,l-128)/255;i[t+0]=F.toHalfFloat(Math.min(e[n+0]*o,65504)),i[t+1]=F.toHalfFloat(Math.min(e[n+1]*o,65504)),i[t+2]=F.toHalfFloat(Math.min(e[n+2]*o,65504)),i[t+3]=F.toHalfFloat(1)},u=new Uint8Array(m);u.pos=0;const y=H(u);if(y!==-1){const e=y.width,n=y.height,i=N(u.subarray(u.pos),e,n);if(i!==-1){let t,l,o,r;switch(this.type){case f:r=i.length/4;const s=new Float32Array(r*4);for(let _=0;_<r;_++)v(i,_*4,s,_*4);t=s,o=f;break;case L:r=i.length/4;const a=new Uint16Array(r*4);for(let _=0;_<r;_++)V(i,_*4,a,_*4);t=a,o=L;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:e,height:n,data:t,header:y.string,gamma:y.gamma,exposure:y.exposure,format:l,type:o}}}return null}setDataType(m){return this.type=m,this}load(m,E,R,B){function b(c,d){switch(c.type){case f:c.encoding=S,c.minFilter=I,c.magFilter=I,c.generateMipmaps=!1,c.flipY=!0;break;case L:c.encoding=S,c.minFilter=I,c.magFilter=I,c.generateMipmaps=!1,c.flipY=!0;break}E&&E(c,d)}return super.load(m,b,R,B)}}const K={className:"box"},Q={__name:"hdr",setup(T){let m,E,R;const B=()=>{m=new z;const c=document.querySelector(".box");E=new W(75,c.clientWidth/c.clientHeight),E.position.set(0,0,5),R=new x,R.setSize(c.clientWidth,c.clientHeight),new J().load("/hdrls/hdr/venice_sunset_1k.hdr",G=>{G.mapping=Y,m.background=G,m.environment=G,b()});const d=()=>{b()};b(),new $(E,R.domElement).addEventListener("change",d),c.appendChild(R.domElement)},b=()=>{R.render(m,E)};return j(()=>{B()}),(c,d)=>(q(),X("div",K))}},ae=O(Q,[["__scopeId","data-v-127d1ef6"]]);export{ae as default};
