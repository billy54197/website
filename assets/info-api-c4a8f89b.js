import{y as l,z as r,__tla as i}from"./index-d3bcbf6c.js";let s,o,h,m=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{let c;c="/portalMemberInfo",o=async t=>new Promise((e,n)=>{r(`${c}/registerAccount`,t).then(a=>{e(a.data)}).catch(a=>{n(a)})}),s=async t=>new Promise((e,n)=>{l(`${c}/getAccountInfo/${t}`).then(a=>{e(a.data)}).catch(a=>{n(a)})}),h=async t=>new Promise((e,n)=>{r(`${c}/update`,t).then(a=>{e(a.data)}).catch(a=>{n(a)})})});export{m as __tla,s as g,o as r,h as u};
