import{g as j,u as D,__tla as O}from"./info-api-c4a8f89b.js";import{d as Z,r as g,o as $,u as z,a as B,b as v,c as y,e,w as l,f as s,F as G,g as H,h as J,i as K,E as N,p as M,j as Q,k as f,__tla as R}from"./index-d3bcbf6c.js";import{g as W,__tla as X}from"./prd-province-api-70beb364.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";let P,ee=Promise.all([(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{const p=c=>(M("data-v-3a670d30"),c=c(),Q(),c),h={class:"page-register-form"},L=p(()=>f("h2",null,"Distributor Information ",-1)),U=p(()=>f("p",{class:"page-register-form-notes"},"This helps us match you with our existing system records.",-1)),w=p(()=>f("h2",null,"Address ",-1)),C=p(()=>f("h2",null,"Contact Information ",-1)),q=p(()=>f("p",{class:"page-register-form-notes"},"Phone numbers should consist of 10 digits only (e.g., 8005181234).",-1)),x=Z({__name:"index",setup(c){const t=g({numberType:"101"}),b=g(),F=async()=>{await b.value.validate(async m=>{m?await D(t.value)==null&&N.success("Successfully submitted."):N.error("error submit!")})},V=g([]);$(async()=>{V.value=await W(),await k()});const _=z(),k=async()=>{var a;const m=await j((a=_==null?void 0:_.info)==null?void 0:a.userId);m&&(t.value=m)},A=B({firstName:[{required:!0,message:"Please input first name!",trigger:"blur"}],lastName:[{required:!0,message:"Please input last name!",trigger:"blur"}],companyName:[{required:!0,message:"Please input company name!",trigger:"blur"}],country:[{required:!0,message:"Please input country!",trigger:"blur"}],addressLine1:[{required:!0,message:"Please input first address line 1!",trigger:"blur"}],city:[{required:!0,message:"Please input city!",trigger:"blur"}],stateProvince:[{required:!0,message:"Please input state province!",trigger:"blur"}],postalCode:[{required:!0,message:"Please input postal code!",trigger:"blur"}],officeNumber:[{required:!0,validator:(m,a,i)=>{a===""?i(new Error("Please input office number!")):/^[0-9]{10}$/.test(a)?i():i(new Error("Please enter valid 10-digit phone number (use numbers only)!"))},trigger:"blur"}],preferredLanguage:[{required:!0,message:"Please input preferred language!",trigger:"blur"}]});return(m,a)=>{const i=s("el-divider"),o=s("el-input"),r=s("el-form-item"),d=s("el-col"),n=s("el-row"),I=s("el-option"),S=s("el-select"),E=s("el-button"),T=s("el-form");return v(),y("div",h,[e(T,{ref_key:"refForm",ref:b,rules:A,model:t.value,"label-position":"top"},{default:l(()=>[e(i,{"content-position":"left"},{default:l(()=>[L]),_:1}),U,e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Title"},{default:l(()=>[e(o,{modelValue:t.value.title,"onUpdate:modelValue":a[0]||(a[0]=u=>t.value.title=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"First Name",prop:"firstName"},{default:l(()=>[e(o,{modelValue:t.value.firstName,"onUpdate:modelValue":a[1]||(a[1]=u=>t.value.firstName=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Last Name",prop:"lastName"},{default:l(()=>[e(o,{modelValue:t.value.lastName,"onUpdate:modelValue":a[2]||(a[2]=u=>t.value.lastName=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"Company Name",prop:"companyName"},{default:l(()=>[e(o,{modelValue:t.value.companyName,"onUpdate:modelValue":a[3]||(a[3]=u=>t.value.companyName=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{"content-position":"left"},{default:l(()=>[w]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Country",prop:"country"},{default:l(()=>[e(o,{modelValue:t.value.country,"onUpdate:modelValue":a[4]||(a[4]=u=>t.value.country=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"First Address Line 1",prop:"addressLine1"},{default:l(()=>[e(o,{modelValue:t.value.addressLine1,"onUpdate:modelValue":a[5]||(a[5]=u=>t.value.addressLine1=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Address Line 2"},{default:l(()=>[e(o,{modelValue:t.value.addressLine2,"onUpdate:modelValue":a[6]||(a[6]=u=>t.value.addressLine2=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"Address Line 3"},{default:l(()=>[e(o,{modelValue:t.value.addressLine3,"onUpdate:modelValue":a[7]||(a[7]=u=>t.value.addressLine3=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"City",prop:"city"},{default:l(()=>[e(o,{modelValue:t.value.city,"onUpdate:modelValue":a[8]||(a[8]=u=>t.value.city=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"State/Province",prop:"stateProvince"},{default:l(()=>[e(S,{modelValue:t.value.stateProvince,"onUpdate:modelValue":a[9]||(a[9]=u=>t.value.stateProvince=u),filterable:"",style:{width:"100%"},placeholder:"Select one"},{default:l(()=>[(v(!0),y(G,null,H(V.value,u=>(v(),J(I,{key:u.code,label:u.displayName,value:u.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Zip/Postal Code",prop:"postalCode"},{default:l(()=>[e(o,{modelValue:t.value.postalCode,"onUpdate:modelValue":a[10]||(a[10]=u=>t.value.postalCode=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12})]),_:1}),e(i,{"content-position":"left"},{default:l(()=>[C]),_:1}),e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Office Number",prop:"officeNumber"},{default:l(()=>[e(o,{modelValue:t.value.officeNumber,"onUpdate:modelValue":a[11]||(a[11]=u=>t.value.officeNumber=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"Cell Phone"},{default:l(()=>[e(o,{modelValue:t.value.cellPhone,"onUpdate:modelValue":a[12]||(a[12]=u=>t.value.cellPhone=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),q,e(n,{gutter:20},{default:l(()=>[e(d,{span:12},{default:l(()=>[e(r,{label:"Fax Number"},{default:l(()=>[e(o,{modelValue:t.value.faxNumber,"onUpdate:modelValue":a[13]||(a[13]=u=>t.value.faxNumber=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:l(()=>[e(r,{label:"Preferred Language",prop:"preferredLanguage"},{default:l(()=>[e(o,{modelValue:t.value.preferredLanguage,"onUpdate:modelValue":a[14]||(a[14]=u=>t.value.preferredLanguage=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(E,{type:"primary",onClick:a[15]||(a[15]=u=>F()),style:{margin:"0 auto"}},{default:l(()=>[K("Submit")]),_:1})]),_:1})]),_:1},8,["rules","model"])])}}});P=Y(x,[["__scopeId","data-v-3a670d30"]])});export{ee as __tla,P as default};
