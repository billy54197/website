import{v as l,z as n,__tla as h}from"./index-d2e32ea4.js";let c,i,o=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{let t;t="/portalWebExhibits",c=async()=>new Promise((e,s)=>{l(`${t}/queryWebExhibits`).then(a=>{e(a.data)}).catch(a=>{s(a)})}),i=async e=>new Promise((s,a)=>{n(`${t}/webQueryPage`,e).then(r=>{s(r.data)}).catch(r=>{a(r)})})});export{o as __tla,c as q,i as w};
