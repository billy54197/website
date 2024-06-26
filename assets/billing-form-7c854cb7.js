import{d as E,r as f,u as Q,o as q,b as _,c as A,k as P,t as B,e,w as a,h as b,E as c,q as k,P as F,f as r,F as J,g as O,i as V,__tla as G}from"./index-8cd0153a.js";import{_ as M,__tla as T}from"./index-9937b50a.js";import{a as D,u as H,c as R,__tla as W}from"./billing-api-e270b533.js";import{g as $,__tla as j}from"./prd-province-api-bc5c62ce.js";let U,K=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return j}catch{}})()]).then(async()=>{let h,N;h={style:{width:"800px",margin:"10px auto","text-align":"center"}},N={style:{"margin-bottom":"30px","text-align":"right"}},U=E({__name:"billing-form",setup(X){const u=f({guid:null,emailAddress:null,billingName:null,companyName:null,addressLine1:null,addressLine2:null,addressLine3:null,city:null,stateProvince:null,postalCode:null,cellPhone:null,faxNumber:null}),x=f({billingName:[{required:!0,message:"Please input name",trigger:"blur"}],emailAddress:[{required:!0,validator:(o,l,d)=>{if(l==="")d(new Error("Please input email address!"));else{let s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,n=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;!s.test(l)||!n.test(l)?d(new Error("Please enter valid email\uFF01")):d()}},trigger:"blur"}]}),p=f(),v=f(),C=async()=>{await v.value.validate(async o=>{if(o){let l=await D(u.value);l.ok?(c.success("Successfully submitted."),g()):c.error(l.message)}else console.log("error submit!")})},z=async()=>{await v.value.validate(async o=>{if(o){let l=await H(u.value);l.ok?(c.success("Successfully submitted."),g()):c.error(l.message)}else console.log("error submit!")})},i=Q();async function L(o){var l,d;if(((l=i==null?void 0:i.info)==null?void 0:l.userId)!=null&&((d=i==null?void 0:i.info)==null?void 0:d.userId)!=""){u.value.guid=o;let s=await R(o);s.ok?u.value=JSON.parse(JSON.stringify(s.data)):c.error(s.message)}else k.push({name:F.SIGN_IN_PATH})}const w=f([]);q(async()=>{const o=M.parseUrl(window.location.href);o&&o.hashQuery&&o.hashQuery.guid&&o.hashQuery.guid.trim()!=""?(await L(o.hashQuery.guid),p.value="Modify Billing Information"):p.value="Add Billing Information",w.value=await $()});function g(){k.go(-1)}return(o,l)=>{const d=r("el-input"),s=r("el-form-item"),n=r("el-col"),m=r("el-row"),Z=r("el-option"),I=r("el-select"),S=r("el-form"),y=r("el-button");return _(),A("div",h,[P("h2",null,B(p.value),1),e(S,{ref_key:"refForm",ref:v,model:u.value,"label-position":"top",size:"large",rules:x.value},{default:a(()=>[e(m,{gutter:20},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(s,{label:"Name",prop:"billingName"},{default:a(()=>[e(d,{modelValue:u.value.billingName,"onUpdate:modelValue":l[0]||(l[0]=t=>u.value.billingName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(s,{label:"Email",prop:"emailAddress"},{default:a(()=>[e(d,{modelValue:u.value.emailAddress,"onUpdate:modelValue":l[1]||(l[1]=t=>u.value.emailAddress=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:20},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(s,{label:"Company Name"},{default:a(()=>[e(d,{modelValue:u.value.companyName,"onUpdate:modelValue":l[2]||(l[2]=t=>u.value.companyName=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(s,{label:"Address"},{default:a(()=>[e(d,{modelValue:u.value.addressLine1,"onUpdate:modelValue":l[3]||(l[3]=t=>u.value.addressLine1=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:20},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(s,{label:"Address 2"},{default:a(()=>[e(d,{modelValue:u.value.addressLine2,"onUpdate:modelValue":l[4]||(l[4]=t=>u.value.addressLine2=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(s,{label:"City"},{default:a(()=>[e(d,{modelValue:u.value.city,"onUpdate:modelValue":l[5]||(l[5]=t=>u.value.city=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:20},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(s,{label:"State/Province"},{default:a(()=>[e(I,{modelValue:u.value.stateProvince,"onUpdate:modelValue":l[6]||(l[6]=t=>u.value.stateProvince=t),filterable:"",style:{width:"100%"},placeholder:""},{default:a(()=>[(_(!0),A(J,null,O(w.value,t=>(_(),b(Z,{key:t.code,label:t.displayName,value:t.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(s,{label:"Zip/Postal Code"},{default:a(()=>[e(d,{modelValue:u.value.postalCode,"onUpdate:modelValue":l[7]||(l[7]=t=>u.value.postalCode=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{gutter:20},{default:a(()=>[e(n,{span:12},{default:a(()=>[e(s,{label:"Phone"},{default:a(()=>[e(d,{modelValue:u.value.cellPhone,"onUpdate:modelValue":l[8]||(l[8]=t=>u.value.cellPhone=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:a(()=>[e(s,{label:"Fax"},{default:a(()=>[e(d,{modelValue:u.value.faxNumber,"onUpdate:modelValue":l[9]||(l[9]=t=>u.value.faxNumber=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),P("div",N,[e(y,{onClick:g},{default:a(()=>[V("Back")]),_:1}),u.value.guid&&u.value.guid.trim()!=""?(_(),b(y,{key:0,type:"warning",onClick:z},{default:a(()=>[V(" Update your billing info ")]),_:1})):(_(),b(y,{key:1,type:"primary",onClick:C},{default:a(()=>[V(" Add to your billing info ")]),_:1}))])])}}})});export{K as __tla,U as default};
