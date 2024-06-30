import{g as _e}from"./base64-ae67ffac.js";import{_ as V,__tla as be}from"./index-ee0ead7c.js";import{q as ye,__tla as Ie}from"./shipping-api-635cb86c.js";import{q as xe,__tla as Ne}from"./billing-api-db3e92fc.js";import{d as we,r as b,u as Pe,o as Se,s as A,q as k,P as L,b as I,c as O,k as s,e as l,w as a,t as n,F as q,f as d,g as $,h as j,i as p,m as z,G as ke,p as Qe,j as Ce,__tla as Ue}from"./index-b99f128f.js";import{d as Ve,__tla as Ae}from"./cart-api-253703c2.js";import{g as Le,__tla as Oe}from"./prd-province-api-091c3475.js";import{b as qe,__tla as Je}from"./order-api-c476880e.js";import{_ as Te}from"./_plugin-vue_export-helper-c27b6911.js";let B,Ge=Promise.all([(()=>{try{return be}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Ue}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return Oe}catch{}})(),(()=>{try{return Je}catch{}})()]).then(async()=>{const J=x=>(Qe("data-v-c5e5719f"),x=x(),Ce(),x),M={style:{display:"inline-flex"}},Z={class:"shipping-information-address-p"},D={class:"shipping-information-address-p"},K={class:"shipping-information-address-p"},R={style:{display:"inline-flex"}},W={class:"shipping-information-address-p"},X={class:"shipping-information-address-p"},Y={class:"shipping-information-address-p"},ee=["innerHTML"],le={style:{"font-weight":"bolder",color:"#e2231a"}},ae={style:{display:"inline-flex","margin-left":"calc(100% - 260px)","line-height":"60px"}},ie=J(()=>s("div",{style:{"margin-left":"12px",width:"90px"}}," Order Total: ",-1)),te={style:{"font-weight":"bolder","margin-left":"12px",width:"140px",color:"#e2231a"}},ne=J(()=>s("h2",null,"Additional Notes",-1)),re={style:{"margin-top":"30px","text-align":"right"}},ue={style:{"margin-bottom":"20px",color:"red","font-weight":"bolder"}},se=we({__name:"cart-checkout",setup(x){const y=b(),t=b({cartIds:[],shippingId:null,billingId:null,orderNotes:null}),u=Pe(),T=b([]);Se(async()=>{var i;const e=V.parseUrl(window.location.href);e&&e.hashQuery&&e.hashQuery.ids&&e.hashQuery.ids.trim()!=""?t.value.cartIds=(i=_e.decode(e.hashQuery.ids))==null?void 0:i.split("|"):C(),e&&e.hashQuery&&e.hashQuery.shippingId&&e.hashQuery.shippingId.trim()!=""&&(t.value.shippingId=e.hashQuery.shippingId),e&&e.hashQuery&&e.hashQuery.billingId&&e.hashQuery.billingId.trim()!=""&&(t.value.billingId=e.hashQuery.billingId),await oe(),await de(),await pe(),T.value=await Le()});const o=A(()=>{if(!t.value.shippingId||t.value.shippingId.trim()==""){const e=f.value.find(i=>i.defaultFlag==1);e?t.value.shippingId=e.guid:f.value.length>0&&(t.value.shippingId=f.value[0].guid)}if(t.value.shippingId&&t.value.shippingId!=""){const e=f.value.find(i=>i.guid==t.value.shippingId);if(e)return JSON.parse(JSON.stringify(e))}return{}}),f=b([]),de=async()=>{var e,i;((e=u==null?void 0:u.info)==null?void 0:e.userId)!=null&&((i=u==null?void 0:u.info)==null?void 0:i.userId)!=""?f.value=await ye():k.push({name:L.SIGN_IN_PATH})},v=b([]),pe=async()=>{var e,i;((e=u==null?void 0:u.info)==null?void 0:e.userId)!=null&&((i=u==null?void 0:u.info)==null?void 0:i.userId)!=""?v.value=await xe():k.push({name:L.SIGN_IN_PATH})},h=A(()=>{if(!t.value.billingId||t.value.billingId.trim()=="")if(o.value&&o.value.billingId&&o.value.billingId!="")t.value.billingId=o.value.billingId;else{const e=v.value.find(i=>i.defaultFlag==1);e?t.value.billingId=e.guid:v.value.length>0&&(t.value.billingId=v.value[0].guid)}if(t.value.billingId&&t.value.billingId!=""){const e=v.value.find(i=>i.guid==t.value.billingId);if(e)return JSON.parse(JSON.stringify(e))}return{}}),G=(e,i)=>{let c=[];if(e&&e!=""&&c.push(e),i&&i!=""){let m=T.value.find(N=>N.code==i);m&&c.push(m.displayName)}return c.join(",")},Q=b([]),oe=async()=>{var e,i;if(((e=u==null?void 0:u.info)==null?void 0:e.userId)!=null&&((i=u==null?void 0:u.info)==null?void 0:i.userId)!=""){let c=await Ve(t.value.cartIds);c.ok?Q.value=JSON.parse(JSON.stringify(c.data)):y.value=c.message}else k.push({name:L.SIGN_IN_PATH})},ge=e=>{let i=[];return i.push(`<p style="font-size: 20px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 5px;
    margin-bottom: 0px;
    color: #000;">`+e.productName+"</p>"),i.push('<p style="font-size: 14px; margin-block-start: 5px; color: #464646;"><span style="font-weight: bolder;">Item #: </span>'+e.productNumber+"</p>"),e.productColor&&e.productColor!=""&&i.push(`<p style="color: #000;
    font-size: 14px;margin-block-start: 3px; margin-block-end:  3px;"><span style="font-weight: bolder;">Details: </span>`+e.productColor+"</p>"),i.join("")},ce=A(()=>`$${Q.value.reduce((e,i)=>{const c=Number(i.productUnitPrice),m=Number(i.quantity);return!Number.isNaN(c)&&!Number.isNaN(m)?e+V.multiply(c,m):e},0)}`),he=async()=>{if(!t.value.shippingId||t.value.shippingId==""){y.value="Shipping id is empty.";return}if(!t.value.cartIds||t.value.cartIds.length==0){y.value="Shopping cart product information cannot be empty.";return}let e=await qe(t.value);e.ok?C():y.value=e.message};function C(){k.go(-1)}return(e,i)=>{const c=d("el-option"),m=d("el-select"),N=d("Plus"),w=d("el-icon"),_=d("el-button"),H=d("Edit"),g=d("el-descriptions-item"),E=d("el-descriptions"),P=d("el-col"),F=d("el-row"),U=d("el-card"),me=d("el-image"),S=d("el-table-column"),fe=d("el-table"),ve=d("el-input");return I(),O(q,null,[s("div",null,[l(U,{class:"shipping-information"},{default:a(()=>[l(F,{gutter:20},{default:a(()=>[l(P,{span:12},{default:a(()=>[l(E,{title:"Shipping Information",column:1,border:""},{extra:a(()=>[s("div",M,[l(m,{modelValue:t.value.shippingId,"onUpdate:modelValue":i[0]||(i[0]=r=>t.value.shippingId=r),filterable:"",clearable:"",style:{width:"160px","margin-right":"10px"},placeholder:" "},{default:a(()=>[(I(!0),O(q,null,$(f.value,r=>(I(),j(c,{key:r.guid,label:r.shippingName,value:r.guid},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(_,{type:"success",circle:"",disabled:""},{default:a(()=>[l(w,null,{default:a(()=>[l(N)]),_:1})]),_:1}),l(_,{type:"primary",circle:"",disabled:""},{default:a(()=>[l(w,null,{default:a(()=>[l(H)]),_:1})]),_:1})])]),default:a(()=>[l(g,{label:"Shipping Name","label-align":"right"},{default:a(()=>[p(n(o.value.shippingName),1)]),_:1}),l(g,{label:"Company Name","label-align":"right"},{default:a(()=>[p(n(o.value.companyName),1)]),_:1}),l(g,{label:"Phone","label-align":"right"},{default:a(()=>[p(n(o.value.cellPhone),1)]),_:1}),l(g,{label:"Email","label-align":"right"},{default:a(()=>[p(n(o.value.emailAddress),1)]),_:1}),l(g,{label:"Address","label-align":"right"},{default:a(()=>[s("p",Z,n(o.value.addressLine1),1),s("p",D,n(o.value.addressLine2),1),s("p",K,n(G(o.value.city,o.value.stateProvince)),1)]),_:1}),l(g,{label:"Zip/Postal Code","label-align":"right"},{default:a(()=>[p(n(o.value.postalCode),1)]),_:1}),l(g,{label:"Shipping Notes","label-align":"right"},{default:a(()=>[p(n(o.value.notes),1)]),_:1})]),_:1})]),_:1}),l(P,{span:12},{default:a(()=>[l(E,{title:"Billing Information",column:1,border:""},{extra:a(()=>[s("div",R,[l(m,{modelValue:t.value.billingId,"onUpdate:modelValue":i[1]||(i[1]=r=>t.value.billingId=r),filterable:"",clearable:"",style:{width:"160px","margin-right":"10px"},placeholder:" "},{default:a(()=>[(I(!0),O(q,null,$(v.value,r=>(I(),j(c,{key:r.guid,label:r.billingName,value:r.guid},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),l(_,{type:"success",circle:"",disabled:""},{default:a(()=>[l(w,null,{default:a(()=>[l(N)]),_:1})]),_:1}),l(_,{type:"primary",circle:"",disabled:""},{default:a(()=>[l(w,null,{default:a(()=>[l(H)]),_:1})]),_:1})])]),default:a(()=>[l(g,{label:"Billing Name","label-align":"right"},{default:a(()=>[p(n(h.value.billingName),1)]),_:1}),l(g,{label:"Company Name","label-align":"right"},{default:a(()=>[p(n(h.value.companyName),1)]),_:1}),l(g,{label:"Phone","label-align":"right"},{default:a(()=>[p(n(h.value.cellPhone),1)]),_:1}),l(g,{label:"Fax","label-align":"right"},{default:a(()=>[p(n(h.value.faxNumber),1)]),_:1}),l(g,{label:"Email","label-align":"right"},{default:a(()=>[p(n(h.value.emailAddress),1)]),_:1}),l(g,{label:"Address","label-align":"right"},{default:a(()=>[s("p",W,n(h.value.addressLine1),1),s("p",X,n(h.value.addressLine2),1),s("p",Y,n(G(h.value.city,h.value.stateProvince)),1)]),_:1}),l(g,{label:"Zip/Postal Code","label-align":"right"},{default:a(()=>[p(n(h.value.postalCode),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(U,{style:{margin:"20px 0px"}},{default:a(()=>[l(fe,{data:Q.value,style:{width:"100%"},stripe:""},{append:a(()=>[s("div",ae,[ie,s("div",te,n(ce.value),1)])]),default:a(()=>[l(S,{label:"Product"},{default:a(r=>[l(F,{gutter:15},{default:a(()=>[l(P,{style:{width:"100px","max-width":"100px",display:"inline-flex"}},{default:a(()=>[l(me,{style:{width:"100px",height:"120px",margin:"auto"},src:z(ke)(r.row.productImage),fit:"contain"},null,8,["src"])]),_:2},1024),l(P,{style:{width:"calc(100% - 110px)","max-width":"calc(100% - 110px)"}},{default:a(()=>[s("div",{innerHTML:ge(r.row)},null,8,ee)]),_:2},1024)]),_:2},1024)]),_:1}),l(S,{prop:"productUnitPrice",label:"Unit Price",width:"100"},{default:a(r=>[p(" $"+n(r.row.productUnitPrice),1)]),_:1}),l(S,{prop:"quantity",label:"Quantity",width:"100"}),l(S,{prop:"extPrice",label:"Ext. Price",width:"120"},{default:a(r=>[s("span",le," $"+n(z(V).multiply(r.row.productUnitPrice,r.row.quantity)),1)]),_:1})]),_:1},8,["data"])]),_:1}),l(U,null,{default:a(()=>[s("div",null,[ne,l(ve,{modelValue:t.value.orderNotes,"onUpdate:modelValue":i[2]||(i[2]=r=>t.value.orderNotes=r),rows:3,type:"textarea"},null,8,["modelValue"])])]),_:1})]),s("div",re,[l(_,{onClick:C},{default:a(()=>[p("Back")]),_:1}),l(_,{type:"primary",onClick:he},{default:a(()=>[p(" Submit ")]),_:1})]),s("div",ue,n(y.value),1)],64)}}});B=Te(se,[["__scopeId","data-v-c5e5719f"]])});export{Ge as __tla,B as default};
