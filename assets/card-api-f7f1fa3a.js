import{v as s,__tla as c}from"./index-d2e32ea4.js";let e,_=Promise.all([(()=>{try{return c}catch{}})()]).then(async()=>{let a;a="/portalWebCard",e=async()=>new Promise((r,l)=>{s(`${a}/getCardList`).then(t=>{r(t.data)}).catch(t=>{l(t)})})});export{_ as __tla,e as g};
