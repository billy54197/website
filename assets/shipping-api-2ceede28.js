import{y as n,z as h,__tla as $}from"./index-d3bcbf6c.js";let r,l,i,o,y,m,P=Promise.all([(()=>{try{return $}catch{}})()]).then(async()=>{let c;c="/portalMemberShipping",r=async t=>new Promise((s,a)=>{h(`${c}/add`,t).then(e=>{s(e)}).catch(e=>{a(e)})}),m=async t=>new Promise((s,a)=>{h(`${c}/update`,t).then(e=>{s(e)}).catch(e=>{a(e)})}),o=async()=>new Promise((t,s)=>{n(`${c}/queryAll`).then(a=>{t(a.data)}).catch(a=>{s(a)})}),i=async t=>new Promise((s,a)=>{n(`${c}/queryInfo/${t}`).then(e=>{s(e)}).catch(e=>{a(e)})}),y=async t=>new Promise((s,a)=>{n(`${c}/singleDelete/${t}`).then(e=>{s(e)}).catch(e=>{a(e)})}),l=async t=>new Promise((s,a)=>{h(`${c}/batchDelete`,t).then(e=>{s(e)}).catch(e=>{a(e)})})});export{P as __tla,r as a,l as b,i as c,o as q,y as s,m as u};
