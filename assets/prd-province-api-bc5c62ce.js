import{y as n,__tla as o}from"./index-8cd0153a.js";let e,c=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{let a;a="/portalPrdProvince",e=async()=>new Promise((r,l)=>{n(`${a}/getProvinceData`).then(t=>{r(t.data)}).catch(t=>{l(t)})})});export{c as __tla,e as g};
