import{W as f,__tla as O}from"./index-74751f9c.js";import{d as J,o as k,r as o,s as S,b as r,h as L,w as i,f as p,k as T,c as t,g as h,e as y,i as g,t as m,F as b,v as w,__tla as z}from"./index-8cd0153a.js";import{__tla as C}from"./prd-color-api-61448a5f.js";let x,E=Promise.all([(()=>{try{return O}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let u;u={key:0},x=J({__name:"index",setup(F){k(async()=>{await v()});const d=o([]),c=o([]),v=async()=>{d.value=f.prdTypeList,c.value=f.prdCategoriesList},N=S(()=>{let n=JSON.parse(JSON.stringify(d.value));return n.forEach(e=>{e.index=e.guid,e.label=e.displayName,e.type="type";let s=c.value.filter(l=>{var a;return l.index=l.guid,l.label=l.displayName,((a=l.productTypes)==null?void 0:a.indexOf(e.guid))>-1});e.children=JSON.parse(JSON.stringify(s))}),n});return(n,e)=>{const s=p("el-link"),l=p("el-card");return r(),L(l,null,{default:i(()=>[T("ul",null,[(r(!0),t(b,null,h(N.value,a=>(r(),t("li",null,[y(s,{underline:!1,style:{"font-size":"14px"},href:"/#/search?categories="+a.label},{default:i(()=>[g(m(a.label),1)]),_:2},1032,["href"]),a.children&&a.children.length>0?(r(),t("ul",u,[(r(!0),t(b,null,h(a.children,_=>(r(),t("li",null,[y(s,{underline:!1,style:{"font-size":"12px"},href:"/#/search?categories="+_.label},{default:i(()=>[g(m(_.label),1)]),_:2},1032,["href"])]))),256))])):w("",!0)]))),256))])]),_:1})}}})});export{E as __tla,x as default};
