import{d as ze,s as d,r as T,o as Ae,A as De,b as m,c as v,e as c,m as C,x as M,k as e,F as W,g as K,w as p,h as B,y as Me,f as u,G as N,i as R,t as f,B as Re,C as Ue,p as Fe,j as Ge,__tla as Ie}from"./index-d2e32ea4.js";import{g as He,__tla as je}from"./card-api-f7f1fa3a.js";import{W as U,a as _,b as S,__tla as Ve}from"./index-9e36fdd6.js";import{_ as w,__tla as qe}from"./index-3ecbe1e1.js";import{q as Ye,__tla as Je}from"./exhibits-api-781fe34a.js";import{_ as Qe}from"./_plugin-vue_export-helper-c27b6911.js";let F,Xe=Promise.all([(()=>{try{return Ie}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Ve}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{const h=E=>(Fe("data-v-7904048a"),E=E(),Ge(),E),G={key:0,class:"home-carousel"},I={style:{width:"100%",margin:"100px auto"}},H={style:{margin:"auto 40px",display:"flex","justify-content":"space-between"}},j={style:{"flex-wrap":"wrap","align-items":"center",margin:"100px auto","min-width":"600px","max-width":"1200px"}},V={style:{display:"flex",width:"100%"}},q={style:{width:"calc(100% - 440px)"}},Y=h(()=>e("div",{style:{"text-align":"center","font-size":"32px"}},[e("h2",null,"WELCOME TO Standard Promos")],-1)),J=h(()=>e("div",{style:{padding:"10px 30px 30px 30px","font-size":"16px"}},[e("p",null,"Standard Promos is obsessed with providing the best quality, service and experience for our clients."),e("p",null,"With over 30 years in the screen printing, embroidery, apparel and promotional merchandise industry, we can solve your all your Branded Merchandise needs."),e("p",null,"Whether you need Event Swag, Company Swag , or any other Swag, we deliver better branded products wherever your clients, employees and prospects are."),e("p",null,"We have created custom printed products for almost every industry, so we\u2019re confident we can help find the perfect product for your company logo or message. We have thousands of high-quality wearables and promotional items to choose from or we can create something completely custom.")],-1)),Q={style:{"text-align":"center"}},X={style:{"margin-left":"40px"}},Z=h(()=>e("div",{style:{width:"100%","text-align":"center","font-size":"40px"}},[e("h2",null,"GET A CUSTOM QUOTE")],-1)),$={style:{width:"100%",margin:"100px auto"}},ee={style:{margin:"auto 40px",display:"flex","justify-content":"space-between"}},te={style:{position:"absolute",bottom:"40px",width:"100%","text-align":"center"}},ie={style:{width:"100%",margin:"100px auto"}},ae=h(()=>e("div",{style:{width:"100%","text-align":"center","font-size":"36px"}},[e("h2",null,"Hear it from Our Clients!")],-1)),le={style:{padding:"10px 30px",display:"flex","flex-direction":"column","justify-content":"center",height:"430px"}},oe={style:{"overflow-y":"auto"}},re={style:{"font-size":"20px",color:"#5f727f","line-height":"30px","text-align":"center"}},se={style:{"flex-wrap":"wrap","align-items":"center",margin:"100px auto 40px auto","min-width":"600px","max-width":"1200px"}},ne={class:"home-bottom"},ce={class:"home-bottom-div"},de={class:"home-bottom-item"},ue={class:"home-bottom-item-icon"},me={class:"home-bottom-item-text"},pe={class:"home-bottom-item-text-title"},he=h(()=>e("div",null,"Working Days/Hours!",-1)),ge={class:"home-bottom-item"},ye={class:"home-bottom-item-icon"},ve={class:"home-bottom-item-text"},fe={class:"home-bottom-item-text-title"},xe=h(()=>e("div",null,"Free support line!",-1)),be={class:"home-bottom-item"},Te={class:"home-bottom-item-icon"},_e={class:"home-bottom-item-text"},we={class:"home-bottom-item-text-title"},Ee=h(()=>e("div",null,"Orders Support!",-1)),Ce=ze({__name:"index",setup(E){Me(i=>({"1ff25e5d":Oe.value,"18a08000":D.value}));const We=d(()=>{let i=g.value.filter(t=>t.cardType==_.FEATURED_PRODUCTS.code);return w.orderBy(i,[["cardSort","asc"]])}),L=d(()=>{let i=g.value.filter(t=>t.cardType==_.FEATURED_CATEGORIES.code);return w.orderBy(i,[["cardSort","asc"]])}),O=d(()=>{let i=g.value.filter(t=>t.cardType==_.OUR_WORK.code);return w.orderBy(i,[["cardSort","asc"]])}),Ne=d(()=>{let i=g.value.filter(t=>t.cardType==_.POSTER.code);return w.orderBy(i,[["cardSort","asc"]])}),Se=d(()=>{let i=g.value.filter(t=>t.cardType==_.WEB_CARD_5.code);return w.orderBy(i,[["cardSort","asc"]])}),x=T([]),g=T([]),z=T([]),Le=T([]);Ae(async()=>{x.value=await Ye(),g.value=await He(),z.value=U.prdTypeList,Le.value=U.prdCategoriesList}),d(()=>{let i=[];return x.value.forEach(t=>{var l;if(t.exhibitsType==S.NEW.code){let n=t.imageList.find(r=>r.imageMain==!0),o=9999999;t.pricingList.forEach(r=>{o>r.listPrice&&(o=new Number(r.listPrice).toFixed(2))}),o<9999999&&i.push({guid:t.productGuid,productName:t.productName,imageKeyThumb:n==null?(l=t.imageList[0])==null?void 0:l.imageKeyThumb:n.imageKeyThumb,pricing:o})}}),i}),d(()=>{let i=[];return x.value.forEach(t=>{var l;if(t.exhibitsType==S.BEST.code){let n=t.imageList.find(r=>r.imageMain==!0),o=9999999;t.pricingList.forEach(r=>{o>r.listPrice&&(o=new Number(r.listPrice).toFixed(2))}),o<9999999&&i.push({guid:t.productGuid,productName:t.productName,imageKeyThumb:n==null?(l=t.imageList[0])==null?void 0:l.imageKeyThumb:n.imageKeyThumb,pricing:o})}}),i}),d(()=>{let i=[];return x.value.forEach(t=>{var l;if(i.length<3&&t.exhibitsType==S.RECOMMEND.code){let n=t.imageList.find(o=>o.imageMain==!0);i.push({guid:t.productGuid,productName:t.productName,imageKeyThumb:n==null?(l=t.imageList[0])==null?void 0:l.imageKeyThumb:n.imageKeyThumb})}}),i});const b=T("");d(()=>{let i={};x.value.forEach(l=>{var n;if(l.exhibitsType==S.HOT.code){if(!i[l.productType]){let o=z.value.find(r=>r.code==l.productType);o&&(i[l.productType]={code:l.productType,displayName:o.displayName,children:[]})}if(i[l.productType]&&i[l.productType].children.length<4){let o=l.imageList.find(y=>y.imageMain==!0),r=9999999;l.pricingList.forEach(y=>{r>y.listPrice&&(r=new Number(y.listPrice).toFixed(2))}),r<9999999&&i[l.productType].children.push({guid:l.productGuid,productName:l.productName,imageKeyThumb:o==null?(n=l.imageList[0])==null?void 0:n.imageKeyThumb:o.imageKeyThumb,pricing:r})}}});let t=[];for(let l in i)b.value==""&&(b.value=l),t.push(i[l]);return t});const A=i=>{i&&i.trim()!=""&&(i.indexOf("detail")>-1?window.open(i):window.open(i,"_self"))},a=De(),k=d(()=>a==null?void 0:a.getWebsiteContact);d(()=>a!=null&&a.getWebsiteBackgroundColor&&(a==null?void 0:a.getWebsiteBackgroundColor)!=""?a==null?void 0:a.getWebsiteBackgroundColor:"");const D=d(()=>a!=null&&a.getWebsiteTheme&&(a==null?void 0:a.getWebsiteTheme)!=""?a==null?void 0:a.getWebsiteTheme:""),Oe=d(()=>a!=null&&a.getWebsiteNavigationColor&&(a==null?void 0:a.getWebsiteNavigationColor)!=""?a==null?void 0:a.getWebsiteNavigationColor:"");return(i,t)=>{const l=u("el-image"),n=u("el-divider"),o=u("el-button"),r=u("el-carousel-item"),y=u("el-carousel"),ke=u("Clock"),P=u("el-icon"),Pe=u("PhoneFilled"),Ke=u("Message"),Be=u("el-card");return m(),v(W,null,[L.value&&L.value.length>0?(m(),v("div",G,[c(l,{src:C(N)(L.value[0].cardImage),style:{width:"100%",height:"400px"},fit:"fill"},null,8,["src"])])):M("",!0),e("div",I,[e("div",H,[(m(!0),v(W,null,K(We.value,s=>(m(),B(l,{key:s.guid,src:C(N)(s.cardImage),style:{width:"120px"},fit:"fill"},null,8,["src"]))),128))])]),c(n),e("div",j,[e("div",V,[e("div",q,[Y,c(n),J,e("div",Q,[c(o,{type:"primary",size:"large",onClick:t[0]||(t[0]=s=>A("/#/contact"))},{default:p(()=>[R(" CONTACT US TODAY AND WE'LL HELP YOU GET STARTED! ")]),_:1})])]),e("div",X,[O.value&&O.value.length>0?(m(),B(l,{key:0,src:C(N)(O.value[0].cardImage),style:{width:"400px",height:"500px"},fit:"fill"},null,8,["src"])):M("",!0)])])]),c(n),Z,e("div",$,[e("div",ee,[(m(!0),v(W,null,K(Ne.value,s=>(m(),v("div",{key:s.guid,style:{position:"relative"}},[c(l,{src:C(N)(s.cardImage),style:{width:"400px",height:"480px"},fit:"fill"},null,8,["src"]),e("div",te,[c(o,{type:"primary",size:"large",onClick:Ze=>A(s.cardPath),style:{width:"360px"}},{default:p(()=>[R(f(s.cardTitle),1)]),_:2},1032,["onClick"])])]))),128))])]),e("div",ie,[ae,c(y,{modelValue:b.value,"onUpdate:modelValue":t[1]||(t[1]=s=>b.value=s),interval:4e3,type:"card",height:"450px"},{default:p(()=>[(m(!0),v(W,null,K(Se.value,s=>(m(),B(r,{name:s.guid,key:s.guid,class:Ue(b.value==s.guid?"carousel-item-active":"carousel-item-un-active")},{default:p(()=>[e("div",le,[e("div",{style:Re([{"font-size":"16px","text-align":"center"},{color:D.value}])},f(s.cardTitle),5),e("div",oe,[e("p",re,f(s.cardDescription),1)])])]),_:2},1032,["name","class"]))),128))]),_:1},8,["modelValue"])]),e("div",se,[e("div",ne,[c(Be,null,{default:p(()=>[e("div",ce,[e("div",de,[e("div",ue,[c(P,{size:"40"},{default:p(()=>[c(ke)]),_:1})]),e("div",me,[e("div",pe,f(k.value.working),1),he])]),e("div",ge,[e("div",ye,[c(P,{size:"40"},{default:p(()=>[c(Pe)]),_:1})]),e("div",ve,[e("div",fe,f(k.value.phone),1),xe])]),e("div",be,[e("div",Te,[c(P,{size:"40"},{default:p(()=>[c(Ke)]),_:1})]),e("div",_e,[e("div",we,f(k.value.email),1),Ee])])])]),_:1})])])],64)}}});F=Qe(Ce,[["__scopeId","data-v-7904048a"]])});export{Xe as __tla,F as default};
