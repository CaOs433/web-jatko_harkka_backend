(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(22),s=r.n(c),i=(r(84),r(10)),o=r.n(i),l=r(19),d=r(4),j=(r(86),r(117),r(46)),h=r(7),p=r(128),x=r(129),b=r(130),u=r(135),g=r(136),f=r(36),O=r.n(f);function m(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t);case 2:if(200!==(r=e.sent).status){e.next=20;break}return console.log("(200): success"),e.next=7,r.data;case 7:return n=e.sent,e.prev=8,console.log("data: ".concat(n)),a=JSON.parse(JSON.stringify(n)),console.log("parsed ok"),e.abrupt("return",a);case 15:e.prev=15,e.t0=e.catch(8),console.log("Error while parsing JSON: ".concat(e.t0));case 18:e.next=22;break;case 20:return console.log("status (".concat(r.status,"): ").concat(r.statusText)),e.abrupt("return",void 0);case 22:case"end":return e.stop()}}),e,null,[[8,15]])})))).apply(this,arguments)}var v=function(e){return m("https://crypto-web-projekti.herokuapp.com/get/history/"+e)};function k(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://crypto-web-projekti.herokuapp.com/get/exchanges",e.next=3,O.a.get("https://crypto-web-projekti.herokuapp.com/get/exchanges");case 3:if(200!==(t=e.sent).status){e.next=21;break}return console.log("(200): success"),e.next=8,t.data;case 8:return r=e.sent,e.prev=9,console.log("data: ".concat(r)),n=JSON.parse(JSON.stringify(r)),console.log("parsed ok"),e.abrupt("return",n);case 16:e.prev=16,e.t0=e.catch(9),console.log("Error while parsing JSON: ".concat(e.t0));case 19:e.next=23;break;case 21:return console.log("status (".concat(t.status,"): ").concat(t.statusText)),e.abrupt("return",void 0);case 23:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}var C=r(2);function w(){return Object(C.jsxs)("div",{style:{backgroundColor:"#ffccffaa",minHeight:"320px"},children:[Object(C.jsx)("h1",{style:{fontWeight:"bolder",textShadow:"-2px -2px 3px #999999aa"},children:"Home"}),Object(C.jsx)("h2",{children:"Welcome to my website!"}),Object(C.jsxs)("div",{style:{color:"#fafaff",backgroundColor:"#333333aa",padding:"12px",borderRadius:"12px",width:"fit-content",margin:"auto"},children:[Object(C.jsx)("h3",{children:"Site map"}),Object(C.jsxs)("ul",{style:{textAlign:"left"},children:[Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{style:{fontWeight:"bolder"},children:"Assets"}),": List of cryptocurrencies and their details like value, market cap, etc."]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{style:{fontWeight:"bolder"},children:"Exchanges"}),": List of crypto currency exchanges and some statics of them"]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{style:{fontWeight:"bolder"},children:"Rates"}),": List of crypto- and fiat currency rates against USD"]})]})]})]})}var N=r(15),R=r(131),L=r(132),T=r(134),B=r(78),F=r(77),A=r(51);A.registerTheme("my_theme",{backgroundColor:"#f4ccffee"});var E={width:"600px",height:"320px"};function H(e){var t=Object.assign(E,e),r=a.a.useState(),n=Object(d.a)(r,2),c=n[0],s=n[1],i=a.a.useCallback((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.asset.id);case 2:r=e.sent,s(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.asset.id]);return a.a.useEffect((function(){i()}),[i]),Object(C.jsx)("div",{className:"col-sm-5",id:"chart",style:{width:t.width,height:t.height},children:Object(C.jsx)(F.a,{option:c?function(e){var r=[];return e.data.forEach((function(e,t){var n=new Date(e.time);r.push([n,Number(e.priceUsd)])})),{title:{text:"History",left:10},toolbox:{feature:{saveAsImage:{pixelRatio:2}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:90},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:{type:"time",boundaryGap:!1},yAxis:{type:"value"},series:[{name:t.asset.name,data:r,type:"line",smooth:!1,symbol:"none",itemStyle:{color:"rgb(255, 70, 131)"},areaStyle:{color:new A.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 158, 68)"},{offset:1,color:"rgb(255, 70, 131)"}])}}]}}(c):{},className:"echarts-for-echarts",theme:"my_theme"})})}var U=r(126),_=r(127),D=r(133);function I(e){var t=a.a.useState([]),r=Object(d.a)(t,2),n=r[0],c=r[1],s=function(e){var t,r,n,a,c=null===(t=e.supply)||void 0===t?void 0:t.replace(/\.0+$/,""),s=null===(r=e.maxSupply)||void 0===r?void 0:r.replace(/\.0+$/,""),i=Number(e.marketCapUsd).toFixed(2).replace(/\.0+$/,""),o=Number(e.volumeUsd24Hr).toFixed(2).replace(/\.0+$/,""),l=null===(n=e.priceUsd)||void 0===n?void 0:n.replace(/\.0+$/,""),d=Math.round(100*parseFloat(void 0!==e.changePercent24Hr?e.changePercent24Hr:"0"))/100,j=0===d?"":d<0?"red":"green",h=null===(a=e.explorer)||void 0===a?void 0:a.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h3",{style:{textShadow:"-1px -1px 2px #BCDBFC99"},children:[e.name," (",e.symbol,")"]}),Object(C.jsxs)("ul",{style:{textAlign:"left",backgroundColor:"#212529",borderRadius:"12px",paddingTop:"8px",paddingBottom:"8px"},children:[Object(C.jsxs)("li",{children:["Rank: ",e.rank]}),Object(C.jsxs)("li",{children:["Supply: ",c]}),Object(C.jsxs)("li",{children:["Max. Supply: ",s]}),Object(C.jsxs)("li",{children:["Market cap: ",i," $"]}),Object(C.jsxs)("li",{children:["Last 24H Volume: ",o," $"]}),Object(C.jsxs)("li",{children:["Price: ",l," $"]}),Object(C.jsxs)("li",{children:["Last 24H Change: ",Object(C.jsx)("span",{style:{color:j},children:d})," %"]}),Object(C.jsxs)("li",{children:["Explorer: ",Object(C.jsx)("a",{href:e.explorer,rel:"noreferrer",target:"_blank",children:h})]})]})]})},i=function(e,t){var r=Math.round(100*parseFloat(e))/100,n=0===r?"":r<0?"red":"green";return Object(C.jsx)("td",{style:{margin:0,padding:0},children:Object(C.jsxs)("div",{style:{backgroundColor:"#212529",margin:0,padding:0,textAlign:"center",alignItems:"center"},children:[Object(C.jsx)("span",{style:{color:n},children:r}),t?" "+t:""]})})},o=function(e,t,r){var a,s=null===e.id?"".concat(t,"_null"):"".concat(t,"_").concat(e.id),o=Object(C.jsx)("span",{style:{color:"#BCDBFC",fontStyle:"italic"},children:e.symbol}),l=(null===(a=e.priceUsd?e.priceUsd:"")||void 0===a?void 0:a.length)>0&&"0"===a[0]?parseFloat(a):Math.round(100*parseFloat(a))/100,d=Object(C.jsx)("span",{style:{color:isNaN(l)?"#F22":"#4C7"},children:l});return Object(C.jsxs)("tr",{className:"clickable",onClick:function(){return function(e){var t=n;t.includes(e)?c(t.filter((function(t){return t!==e}))):c([].concat(Object(N.a)(n),[e]))}(e.id?e.id:"")},children:[Object(C.jsx)("td",{children:r}),Object(C.jsxs)("td",{style:{textShadow:"-1px -1px 1px #BCDBFC33"},children:[e.name," (",o,")"]}),Object(C.jsxs)("td",{style:{textAlign:"left",paddingLeft:"20px"},children:[d," $"]}),i(e.changePercent24Hr?e.changePercent24Hr:"","%"),Object(C.jsx)("td",{children:n.includes(e.id)?Object(C.jsx)(U.a,{}):Object(C.jsx)(_.a,{})})]},s)},l=function(e,t){var r,a=null===e.id?"".concat(t,"_null_collapse"):"".concat(t,"_").concat(e.id,"_collapse"),c=(r=e.id,n.includes(r)?"":"collapse"),i="collapse"!==c?Object(C.jsx)(H,{asset:e}):Object(C.jsx)(C.Fragment,{});return Object(C.jsx)("tr",{className:c,children:Object(C.jsx)("td",{colSpan:5,children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{children:i}),Object(C.jsx)(b.a,{children:s(e)})]}),"Click the row again to hide me"]})})},a)};return Object(C.jsxs)("div",{style:{backgroundColor:"#ffccffaa"},children:[Object(C.jsx)("h1",{style:{fontWeight:"bolder",textShadow:"-2px -2px 3px #999999aa"},children:"Assets"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),function(){var t;if(void 0!==(null===(t=e.assets)||void 0===t?void 0:t.timestamp)){var r=new Date(e.assets.timestamp);return Object(C.jsxs)("div",{style:{backgroundColor:"#ffffff99",textAlign:"left",paddingLeft:"12px"},children:[Object(C.jsxs)("span",{style:{alignSelf:"left"},children:["Last updated: ",r.toLocaleString()]}),Object(C.jsx)(R.a,{style:{margin:"4px"},onClick:function(){return e.updateAssetsData()},variant:"primary",children:"Update"})]})}}(),Object(C.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Coin"}),Object(C.jsx)("th",{children:"Value"}),Object(C.jsx)("th",{colSpan:1,children:"24h"}),Object(C.jsxs)("th",{children:[Object(C.jsx)(T.a,{trigger:"click",placement:"top",overlay:Object(C.jsxs)(B.a,{id:"popover-positioned-right",children:[Object(C.jsx)(B.a.Header,{as:"h3",children:"Table"}),Object(C.jsx)(B.a.Body,{children:"Click table row for details"})]}),children:Object(C.jsx)(D.a,{})})," "]})]})}),Object(C.jsx)("tbody",{children:function(){var t,r,n=[],a=0;return void 0===e.assets||e.assets.data!==[]||null===(t=e.assets)||void 0===t||null===(r=t.data)||void 0===r||r.forEach((function(e,t){null!==e.id&&(n.push(o(e,t,a)),n.push(l(e,t)),a++)})),n}()})]})]})}function $(e){var t=a.a.useState([]),r=Object(d.a)(t,2),n=r[0],c=r[1],s=function(e,t){var r=Math.round(100*parseFloat(e))/100,n=0===r?"":r<0||Number.isNaN(r)?"red":"green";return Object(C.jsx)("td",{style:{margin:0,padding:0},children:Object(C.jsxs)("div",{style:{backgroundColor:"#212529",margin:0,padding:0,textAlign:"center",alignItems:"center"},children:[Object(C.jsx)("span",{style:{color:n},children:String(r)}),t?" "+t:""]})})},i=function(e,t,r){var a,i=null===e.exchangeId?"".concat(t,"_null"):"".concat(t,"_").concat(e.exchangeId),o=(null===(a=e.volumeUsd)||void 0===a?void 0:a.length)>0&&"0"===a[0]?String(parseFloat(a)):String(Math.round(100*parseFloat(a))/100),l=isNaN(Number(o))?"#F22":"#4C7",d=n.includes(e.exchangeId)?Object(C.jsx)(U.a,{}):Object(C.jsx)(_.a,{});return Object(C.jsxs)("tr",{className:"clickable",onClick:function(){return function(e){var t=n;t.includes(e)?c(t.filter((function(t){return t!==e}))):c([].concat(Object(N.a)(n),[e]))}(e.exchangeId)},children:[Object(C.jsx)("td",{children:r}),Object(C.jsx)("td",{children:e.name}),Object(C.jsxs)("td",{children:[Object(C.jsx)("span",{style:{color:l},children:o})," $"]}),s(e.percentTotalVolume,"%"),Object(C.jsx)("td",{children:d})]},i)},o=function(e,t){var r,a=null===e.exchangeId?"".concat(t,"_null_collapse"):"".concat(t,"_").concat(e.exchangeId,"_collapse"),c=(r=e.exchangeId,n.includes(r)?"":"collapse"),s=new Date(e.updated),i=Number(e.percentTotalVolume).toFixed(3).replace(/\.0+$/,""),o=Number(e.volumeUsd).toFixed(2).replace(/\.0+$/,"");return Object(C.jsx)("tr",{className:c,children:Object(C.jsx)("td",{colSpan:5,children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)("h3",{children:e.name}),Object(C.jsxs)("ul",{style:{textAlign:"left"},children:[Object(C.jsxs)("li",{children:["Rank: ",e.rank]}),Object(C.jsxs)("li",{children:["Total Volume: ",i," %"]}),Object(C.jsxs)("li",{children:["Volume: ",o," $"]}),Object(C.jsxs)("li",{children:["Trading Pairs: ",e.tradingPairs," pcs"]}),Object(C.jsxs)("li",{children:["Website: ",Object(C.jsx)("a",{href:e.exchangeUrl,rel:"noreferrer",target:"_blank",children:e.exchangeUrl})]}),Object(C.jsxs)("li",{children:["Updated: ",s.toLocaleString()]})]}),"Click the row again to hide me"]})})},a)};return Object(C.jsxs)("div",{style:{backgroundColor:"#ffccffaa"},children:[Object(C.jsx)("h1",{style:{fontWeight:"bolder",textShadow:"-2px -2px 3px #999999aa"},children:"Exchanges"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),function(){var t;if(void 0!==(null===(t=e.exchanges)||void 0===t?void 0:t.timestamp)){var r=new Date(e.exchanges.timestamp);return Object(C.jsxs)("div",{style:{backgroundColor:"#ffffff99",textAlign:"left",paddingLeft:"12px"},children:[Object(C.jsxs)("span",{style:{alignSelf:"left"},children:["Last updated: ",r.toLocaleString()]}),Object(C.jsx)(R.a,{style:{margin:"4px"},onClick:function(){return e.updateExchangesData()},variant:"primary",children:"Update"})]})}}(),Object(C.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Volume"}),Object(C.jsx)("th",{colSpan:1,children:"Total Volume"}),Object(C.jsxs)("th",{children:[Object(C.jsx)(T.a,{trigger:"click",placement:"top",overlay:Object(C.jsxs)(B.a,{id:"popover-positioned-right",children:[Object(C.jsx)(B.a.Header,{as:"h3",children:"Table"}),Object(C.jsx)(B.a.Body,{children:"Click table row for details"})]}),children:Object(C.jsx)(D.a,{})})," "]})]})}),Object(C.jsx)("tbody",{children:function(){var t,r=[],n=0;return void 0===e.exchanges||e.exchanges.data!==[]||null===(t=e.exchanges)||void 0===t||t.data.forEach((function(e,t){null!==e.exchangeId&&(r.push(i(e,t,n)),r.push(o(e,t)),n++)})),r}()})]})]})}function W(e){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(o.a.mark((function e(t){var r,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://crypto-web-projekti.herokuapp.com/get/rates/".concat(void 0!==t?t:""),e.next=3,O.a.get(r);case 3:if(200!==(n=e.sent).status){e.next=21;break}return console.log("(200): success"),e.next=8,n.data;case 8:return a=e.sent,e.prev=9,console.log("data: ".concat(a)),c=JSON.parse(JSON.stringify(a)),console.log("parsed ok"),e.abrupt("return",c);case 16:e.prev=16,e.t0=e.catch(9),console.log("Error while parsing JSON: ".concat(e.t0));case 19:e.next=23;break;case 21:return console.log("status (".concat(n.status,"): ").concat(n.statusText)),e.abrupt("return",void 0);case 23:case"end":return e.stop()}}),e,null,[[9,16]])})))).apply(this,arguments)}function P(){var e=a.a.useState(),t=Object(d.a)(e,2),r=t[0],n=t[1],c=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.a.useEffect((function(){c()}),[]);var s=void 0===r||r.data!==[]?[]:r.data;return Object(C.jsxs)("div",{style:{backgroundColor:"#ffccffaa"},children:[Object(C.jsx)("h1",{style:{fontWeight:"bolder",textShadow:"-2px -2px 3px #999999aa"},children:"Rates"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),function(){if(void 0!==(null===r||void 0===r?void 0:r.timestamp)){var e=new Date(r.timestamp);return Object(C.jsxs)("div",{style:{backgroundColor:"#ffffff99",textAlign:"left",paddingLeft:"12px"},children:[Object(C.jsxs)("span",{style:{alignSelf:"left"},children:["Last updated: ",e.toLocaleString()]}),Object(C.jsx)(R.a,{style:{margin:"4px"},onClick:function(){return c()},variant:"primary",children:"Update"})]})}}(),Object(C.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Symbol"}),Object(C.jsx)("th",{children:"Currency Symbol"}),Object(C.jsx)("th",{children:"Type"}),Object(C.jsx)("th",{children:"Value"})]})}),Object(C.jsx)("tbody",{children:s.map((function(e,t){return function(e,t){var r=null===e.id?"".concat(t,"_null"):"".concat(t,"_").concat(e.id),n=e.id.replace(/-/g," ").toUpperCase(),a=e.currencySymbol?e.currencySymbol:"-",c="crypto"===e.type?"Crypto":"Fiat",s="Crypto"===c?"orange":"cyan";return Object(C.jsxs)("tr",{style:{textShadow:"-1px -1px 1px #BCDBFC33"},children:[Object(C.jsx)("td",{children:t}),Object(C.jsx)("td",{children:n}),Object(C.jsx)("td",{children:Object(C.jsx)("span",{style:{color:"#BCDBFC",fontStyle:"italic"},children:e.symbol})}),Object(C.jsx)("td",{children:a}),Object(C.jsx)("td",{children:Object(C.jsx)("span",{style:{color:s},children:c})}),Object(C.jsxs)("td",{children:[Object(C.jsx)("span",{style:{color:isNaN(Number(e.rateUsd))?"#F22":"#4C7"},children:e.rateUsd})," $"]})]},r)}(e,t)}))})]})]})}var V=function(){var e=a.a.useState(),t=Object(d.a)(e,2),r=t[0],n=t[1],c=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://crypto-web-projekti.herokuapp.com/get/assets");case 2:void 0!==(t=e.sent)&&n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=a.a.useState(),i=Object(d.a)(s,2),f=i[0],O=i[1],y=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:void 0!==(t=e.sent)&&O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){c(),y()}),[]),Object(C.jsx)("div",{style:M.body,children:Object(C.jsx)("main",{role:"main",className:"container-fluid",style:M.main,children:Object(C.jsx)(p.a,{fluid:!0,className:"text-center",children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{sm:1}),Object(C.jsxs)(b.a,{sm:10,style:{minWidth:"fit-content"},children:[Object(C.jsxs)(j.a,{children:[Object(C.jsx)(u.a,{className:"navbar-inverse",bg:"dark",variant:"dark",expand:"lg",style:M.header,children:Object(C.jsxs)(p.a,{style:{position:"relative"},children:[Object(C.jsx)(u.a.Brand,{children:Object(C.jsx)(p.a,{style:M.textLogo,id:"text-logo",children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{style:M.logoSymbol,id:"logo-symbol",children:"C"}),Object(C.jsx)(b.a,{style:M.logoText,id:"logo-text",children:"rypto"})]})})}),Object(C.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(g.a,{className:"mr-auto",style:M.headerItems,children:[Object(C.jsx)(j.b,{to:"/",className:"nav-link",children:"Home"}),Object(C.jsx)(j.b,{to:"/Assets",className:"nav-link",children:"Assets"}),Object(C.jsx)(j.b,{to:"/Exchanges",className:"nav-link",children:"Exchanges"}),Object(C.jsx)(j.b,{to:"/Rates",className:"nav-link",children:"Rates"})]})})]})}),Object(C.jsxs)(h.c,{children:[Object(C.jsx)(h.a,{path:"/",element:Object(C.jsx)(w,{})}),Object(C.jsx)(h.a,{path:"/Assets",element:Object(C.jsx)(I,{assets:r,updateAssetsData:c})}),Object(C.jsx)(h.a,{path:"/Exchanges",element:Object(C.jsx)($,{exchanges:f,updateExchangesData:y})}),Object(C.jsx)(h.a,{path:"/Rates",element:Object(C.jsx)(P,{})})]})]}),Object(C.jsx)("footer",{id:"sticky-footer",className:"site-footer clearfix py-2 bg-dark text-white-50 mr-auto",style:M.footer,children:Object(C.jsx)(p.a,{className:"text-center",children:Object(C.jsx)("small",{children:"Oskari Saarinen \xa9 2021"})})})]}),Object(C.jsx)(b.a,{sm:1})]})})})})},M={body:{height:"100%",paddingTop:20},main:{marginLeft:"0px",marginBottom:"40px",marginTop:"0px"},jumbotron:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px",backgroundColor:"rgba(255, 255, 255, 0.7)",marginBottom:"0px"},footer:{borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px",marginTop:"-16px",backgroundColor:"rgba(200,200,200,0.2)"},header:{borderTopLeftRadius:"40px",borderTopRightRadius:"40px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"},headerContainer:{backgroundColor:"rgba(128, 72, 255, 0.7)",marginLeft:"8px"},textLogo:{backgroundColor:"rgba(128, 72, 255, 0.9)",height:"44px",backgroundWidth:"100%",borderTopLeftRadius:"25px",borderTopRightRadius:"0px",borderBottomLeftRadius:"25px",borderBottomRightRadius:"0px",paddingLeft:0,paddingRight:"8px"},logoSymbol:{width:"44px",height:"44px",lineHeight:"44px",backgroundColor:"#7066ff",borderRadius:"100px",color:"#fff",fontSize:"28px",fontWeight:800,marginRight:"-12px",marginTop:0,marginBottom:0,marginLeft:"8px",paddingTop:0,paddingBottom:0,fontFamily:"Poppins, Helvetica, sans-serif"},logoText:{lineHeight:"50px",fontSize:"20px",color:"#fff",fontWeight:600,display:"block",marginLeft:"-12px",marginBottom:"-6px",paddingTop:0,paddingBottom:0},headerItems:{lineHeight:"50px",fontSize:"18px",display:"flex",paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0},heaterItemLink:{backgroundColor:"rgba(0, 0, 255, 0.5)",height:"50px",lineHeight:"50px",paddingTop:0,paddingBottom:0}},z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,137)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(V,{})}),document.getElementById("root")),z()},84:function(e,t,r){}},[[116,1,2]]]);
//# sourceMappingURL=main.789865ad.chunk.js.map