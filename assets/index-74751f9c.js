import{y as l,__tla as h}from"./index-8cd0153a.js";import{g,__tla as _}from"./prd-color-api-61448a5f.js";let m,e,p,o,L=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let s,c,i,d,n;s="/portalPrdCategories",c=async()=>new Promise((t,r)=>{l(`${s}/getCategoriesTreeData`).then(a=>{t(a.data)}).catch(a=>{r(a)})}),i="/portalPrdTheme",d=async()=>new Promise((t,r)=>{l(`${i}/getThemeData`).then(a=>{t(a.data)}).catch(a=>{r(a)})}),p={POSTER:{code:"poster",name:"Poster"},FEATURED_PRODUCTS:{code:"featured_products",name:"Featured Products"},FEATURED_CATEGORIES:{code:"featured_categories",name:"Featured Categories"},OUR_WORK:{code:"our_work",name:"Our Work"}},o={RECOMMEND:{code:"recommend",name:"Recommended Products"},HOT:{code:"hot",name:"Hot Products"},NEW:{code:"new",name:"New Arrivals"},EXCLUSIVE:{code:"exclusive",name:"Exclusive Products"},TOP:{code:"top",name:"Top Products"},BEST:{code:"best",name:"Best Seller"}},m=t=>o[t.toUpperCase()].name,e={prdTypeList:[],prdCategoriesList:[],themeList:[],colorList:[]},n=async()=>{if(e.prdTypeList.length==0||e.prdCategoriesList.length==0){const t=await c();e.prdTypeList=t.prdTypeList,e.prdCategoriesList=t.prdCategoriesList}(e.themeList.length==0||e.themeList.length==0)&&(e.themeList=await d()),(e.colorList.length==0||e.colorList.length==0)&&(e.colorList=await g())},await n()});export{m as G,e as W,L as __tla,p as a,o as b};
