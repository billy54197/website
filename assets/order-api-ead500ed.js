import{v as n,z as h,__tla as y}from"./index-d2e32ea4.js";let c,l,m,o,i=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{let r;r="/portalMemberOrder",l=async t=>new Promise((s,a)=>{h(`${r}/submit`,t).then(e=>{s(e)}).catch(e=>{a(e)})}),m=async()=>new Promise((t,s)=>{n(`${r}/queryAllByUserId`).then(a=>{t(a.data)}).catch(a=>{s(a)})}),o=async t=>new Promise((s,a)=>{n(`${r}/singleRemove/${t}`).then(e=>{s(e)}).catch(e=>{a(e)})}),c=async t=>new Promise((s,a)=>{n(`${r}/queryInfo/${t}`).then(e=>{s(e)}).catch(e=>{a(e)})})});export{i as __tla,c as a,l as b,m as q,o as s};
