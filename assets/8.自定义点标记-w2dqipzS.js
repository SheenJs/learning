import{ag as s,y as d,z as i,o as c,c as p,R as m,ah as u}from"./index-ArmOtO4R.js";import{u as l}from"./useAMap-zT5870BU.js";const _=""+new URL("_yy-location-_KhRoIXd.png",import.meta.url).href,f={id:"container"},k={__name:"8.自定义点标记",setup(v){s();let o,n=null;d(()=>{l(e=>{o=new e.Map("container",{viewMode:"3D",zoom:11,center:[102.8495453,24.892828]}),t(),o.on("click",({lnglat:r})=>{t([r.lng,r.lat])})})});function t(e=[102.8495453,24.892828]){n&&(n.setMap(null),n=null),new AMap.Geocoder().getAddress(new AMap.LngLat(e[0],e[1]),(M,a)=>{n=new AMap.Marker({position:new AMap.LngLat(e[0],e[1]),content:`<div class="bmap marker">
                    <img src="${_}" alt="">
                    <div class="info">
                      <div>地址:${a.regeocode.formattedAddress}</div>
                      <div>经纬度:${e[0]},${e[1]}</div>
                    <div>${()=>m(u)}</div>
                    </div>
                  </div>`,offset:new AMap.Pixel(-15,-38)}),o.add(n),o.setCenter(e)})}return i(()=>{o==null||o.destroy()}),(e,r)=>(c(),p("div",f))}};export{k as default};
