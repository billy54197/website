import{v as m,__tla as p}from"./index-d2e32ea4.js";let c,t,n,r,_=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{let o,s,d;o="/portalPrdCategories",s=async()=>new Promise((e,i)=>{m(`${o}/getCategoriesTreeData`).then(a=>{e(a.data)}).catch(a=>{i(a)})}),n={POSTER:{code:"poster",name:"Poster"},FEATURED_PRODUCTS:{code:"featured_products",name:"Featured Products"},FEATURED_CATEGORIES:{code:"featured_categories",name:"Featured Categories"},OUR_WORK:{code:"our_work",name:"Our Work"},WEB_CARD_5:{code:"web_card_5",name:"\u5361\u72475"},WEB_CARD_6:{code:"web_card_6",name:"\u5361\u72476"}},r={RECOMMEND:{code:"recommend",name:"Recommended Products"},HOT:{code:"hot",name:"Hot Products"},NEW:{code:"new",name:"New Arrivals"},EXCLUSIVE:{code:"exclusive",name:"Exclusive Products"},TOP:{code:"top",name:"Top Products"},BEST:{code:"best",name:"Best Seller"}},c=e=>r[e.toUpperCase()].name,t={prdTypeList:[],prdCategoriesList:[]},d=async()=>{if(t.prdTypeList.length==0||t.prdCategoriesList.length==0){const e=await s();t.prdTypeList=e.prdTypeList,t.prdCategoriesList=e.prdCategoriesList}},await d()});export{c as G,t as W,_ as __tla,n as a,r as b};
