(this["webpackJsonpsynthetix.exchange"]=this["webpackJsonpsynthetix.exchange"]||[]).push([[9],{737:function(t,e,n){"use strict";e.a={Synths:{HistoricalRates:function(t,e){return["synths","historicalRates",t,e]}},BinaryOptions:{Markets:["binaryOptions","markets"],Market:function(t){return["binaryOptions","markets",t]},AccountMarketInfo:function(t,e){return["binaryOptions","markets",t,e]},RecentTransactions:function(t){return["binaryOptions","transactions",t]},UserTransactions:function(t,e){return["binaryOptions","transactions",t,e]},UserMarkets:function(t){return["binaryOptions","userMarkets",t]},OptionPrices:function(t,e){return["binaryOptions",t,e]}},HistoricalTrades:{AllTrades:["historicalTrades","trades"],UserTrades:function(t){return["historicalTrades","trades",t]},UserSettledTrades:function(t){return["historicalSettledTrades","trades",t]}}}},744:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));var r=n(29),a=n.n(r),c=n(19),o=function(t,e){return["synths","balances",t,e]},i=function(t,e){return[t.toLowerCase(),e]},u=function(t,e){return Object(c.l)(e)?a()(t,o(e,"balance")):a()(t,i(e,"balance"))},l=function(t,e){return Object(c.l)(e)?a()(t,o(e,"balanceBN")):a()(t,i(e,"balanceBN"))}},750:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o}));var r={bidding:0,trading:1,maturity:2,expiry:3},a={long:0,short:1,0:"long",1:"short"},c=function(t,e,n){var r=Date.now();return t>r?{phase:"bidding",timeRemaining:t}:e>r?{phase:"trading",timeRemaining:e}:n>r?{phase:"maturity",timeRemaining:n}:{phase:"expiry",timeRemaining:n}},o=["bidding","trading","maturity","expiry"]},752:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n(1),a=n(16),c=n(30),o=n(0),i=n.n(o),u=n(2),l=n(24),s=n(764),f=n(759),m=n(760),d=n(31);var b=n(60),p=n(249),O=n(11);function g(){var t=Object(r.a)(["\n\t\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\t\tbackground: rgba(255, 0, 0, 0.12);\n\t\t\t\t\t  "]);return g=function(){return t},t}function h(){var t=Object(r.a)(["\n\t\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\t\tbackground: ",";\n\t\t\t\t\t  "]);return h=function(){return t},t}function v(){var t=Object(r.a)(["\n\t\t\tborder-radius: 2px;\n\t\t\tpadding: 4px 15px;\n\t\t\t","\n\t\t"]);return v=function(){return t},t}function j(){var t=Object(r.a)(["\n\t",";\n\tfont-size: 14px;\n\tcolor: ",";\n\ttext-align: center;\n\n\t","\n"]);return j=function(){return t},t}var y=u.e.div(j(),b.a,(function(t){return t.theme.colors.fontPrimary}),(function(t){return"ending-soon"===t.isLabel&&Object(u.d)(v(),(function(t){return t.palette&&"high-contrast"===t.palette?Object(u.d)(h(),(function(t){return t.theme.colors.surfaceL1}),(function(t){return t.theme.colors.red})):Object(u.d)(g(),(function(t){return t.theme.colors.red}))}))})),E=function(t){var e=t.end,n=t.onEnded,r=t.palette,u=void 0===r?"light":r,b=Object(c.a)(t,["end","onEnded","palette"]),g=Date.now(),h=g>=e,v=Math.abs(Object(f.a)(g,e))<48,j=Math.abs(function(t,e){Object(d.a)(2,arguments);var n=Object(m.a)(t,e)/7;return n>0?Math.floor(n):Math.ceil(n)}(g,e)),E=j>4,C=h||E,k=Object(o.useState)(C?null:1e3),x=Object(a.a)(k,2),w=x[0],L=x[1],M=Object(o.useState)(Object(s.a)({start:g,end:e})),R=Object(a.a)(M,2),S=R[0],B=R[1],P=Object(l.c)().t;return Object(o.useEffect)((function(){n&&h&&n()}),[n,h]),Object(p.a)((function(){g<=e?B(Object(s.a)({start:g,end:e})):L(null)}),w),i.a.createElement(y,Object.assign({isLabel:v?"ending-soon":void 0,palette:u},b),h?P("options.common.time-remaining.ended"):E?"".concat(j," weeks"):Object(O.n)(S))}},757:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(1),a=n(0),c=n.n(a),o=n(24),i=n(49),u=n(45);function l(){var t=Object(r.a)(["\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: underline;\n\t}\n"]);return l=function(){return t},t}var s=n(2).e.span(l(),(function(t){return t.theme.colors.buttonDefault})),f=function(t){return c.a.createElement(s,t,c.a.createElement(o.a,{i18nKey:"options.common.new-to-binary-options",components:[c.a.createElement(i.a,{to:u.a.Blog.HowBinaryOptionsWork,isExternal:!0})]}))}},763:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var r=n(1),a=n(0),c=n.n(a),o=n(2),i=n(24),u=n(17),l=n(19),s=n(13),f=n(11),m=n(18),d=n(156),b=n(141),p=n(119),O=n(60),g=n(752);function h(){var t=Object(r.a)(["\n\t\t\tcolor: ",";\n\t\t\tbackground-color: initial;\n\t\t"]);return h=function(){return t},t}function v(){var t=Object(r.a)(["\n\t\t\tbackground-color: #f5607066;\n\t\t"]);return v=function(){return t},t}function j(){var t=Object(r.a)(["\n\t\t\tbackground-color: #c5d5ff;\n\t\t"]);return j=function(){return t},t}function y(){var t=Object(r.a)(["\n\t\t\tbackground-color: #9fe3d5;\n\t\t"]);return y=function(){return t},t}function E(){var t=Object(r.a)(["\n\t\t\tbackground-color: #fbe6b8;\n\t\t"]);return E=function(){return t},t}function C(){var t=Object(r.a)(["\n\tborder-radius: 2px;\n\tpadding: 5px 8px;\n\ttext-transform: uppercase;\n\n\tcolor: ",";\n\t","\n\t","\n    ","\n\t\t","\n\t","\n"]);return C=function(){return t},t}function k(){var t=Object(r.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tborder-radius: 1px;\n\t\t\tpadding: 2px 8px;\n\t\t"]);return k=function(){return t},t}function x(){var t=Object(r.a)(["\n\tcolor: ",";\n\t","\n"]);return x=function(){return t},t}function w(){var t=Object(r.a)(["\n\t\t\tbackground-color: ",";\n\t\t\tborder-radius: 1px;\n\t\t\tpadding: 2px 4px;\n\t\t"]);return w=function(){return t},t}function L(){var t=Object(r.a)(["\n\tcolor: ",";\n\t","\n"]);return L=function(){return t},t}function M(){var t=Object(r.a)(["\n\t",";\n"]);return M=function(){return t},t}function R(){var t=Object(r.a)(["\n\tmin-height: 350px;\n\t.table-row,\n\t.table-body-row {\n\t\t& > :last-child {\n\t\t\tjustify-content: flex-end;\n\t\t}\n\t}\n"]);return R=function(){return t},t}var S=Object(a.memo)((function(t){var e=t.optionsMarkets,n=t.noResultsMessage,r=t.isLoading,a=t.palette,o=Object(i.c)().t;return c.a.createElement(s.L,null,c.a.createElement(B,{palette:a,columns:[{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.asset-col")),accessor:"currencyKey",Cell:function(t){return c.a.createElement(P,{currencyKey:t.cell.value,name:t.row.original.asset,showIcon:!0,iconProps:{type:"asset",width:"24px",height:"24px"}})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.strike-price-col",{currencyKey:"".concat(l.d.USD)})),accessor:"strikePrice",sortType:"basic",Cell:function(t){return c.a.createElement(b.a,{sign:l.g,value:t.cell.value})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.maturity-date-col")),accessor:"maturityDate",Cell:function(t){return c.a.createElement("span",null,Object(f.k)(t.cell.value))},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.long-short-col")),id:"long-short",Cell:function(t){var e="light-secondary"!==a;return c.a.createElement("div",null,c.a.createElement(D,{isLabel:e},o("common.val-in-cents",{val:Object(f.e)(100*t.row.original.longPrice)})),e?c.a.createElement("span",{style:{padding:"0 4px"}}):" / ",c.a.createElement(H,{isLabel:e},o("common.val-in-cents",{val:Object(f.e)(100*t.row.original.shortPrice)})))},width:150},{Header:c.a.createElement(i.a,{i18nKey:"options.home.markets-table.pool-size-col",values:{currencyKey:"".concat(l.f.sUSD)},components:[c.a.createElement(s.d,null)]}),accessor:"poolSize",sortType:"basic",Cell:function(t){return c.a.createElement(b.a,{sign:l.g,value:t.cell.value})},width:150,sortable:!0},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.phase-col")),accessor:"phase",Cell:function(t){return c.a.createElement(T,{phase:t.cell.value,isLabel:"light-secondary"===a},o("options.phases.".concat(t.cell.value)))},width:150},{Header:c.a.createElement(c.a.Fragment,null,o("options.home.markets-table.time-remaining-col")),accessor:"timeRemaining",Cell:function(t){return c.a.createElement(g.a,{end:t.cell.value,palette:"striped"===a?"high-contrast":"light"})},width:150}],data:e,onTableRowClick:function(t){Object(u.e)(t.original.address)},isLoading:r,noResultsMessage:n}))})),B=Object(o.e)(d.a)(R()),P=Object(o.e)(p.a.Name)(M(),O.a),D=o.e.span(L(),(function(t){return t.isLabel?t.theme.colors.surfaceL1:t.theme.colors.green}),(function(t){return t.isLabel&&Object(o.d)(w(),(function(t){return t.theme.colors.green}))})),H=o.e.span(x(),(function(t){return t.isLabel?t.theme.colors.surfaceL1:t.theme.colors.red}),(function(t){return t.isLabel&&Object(o.d)(k(),(function(t){return t.theme.colors.red}))})),T=o.e.div(C(),m.b.colors.accentL1,(function(t){return"bidding"===t.phase&&Object(o.d)(E())}),(function(t){return"trading"===t.phase&&Object(o.d)(y())}),(function(t){return"maturity"===t.phase&&Object(o.d)(j())}),(function(t){return"expiry"===t.phase&&Object(o.d)(v())}),(function(t){return!t.isLabel&&Object(o.d)(h(),(function(t){return t.theme.colors.fontPrimary}))}));e.b=S},769:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{d:"M0 15.8333V20H4.16666L16.4441 7.72246L12.2775 3.5559L0 15.8333ZM19.6668 4.49991C20.1111 4.05558 20.1111 3.38876 19.6668 2.94444L17.0556 0.333242C16.6112 -0.111081 15.9444 -0.111081 15.5001 0.333242L13.4445 2.38892L17.6111 6.55548L19.6668 4.49991Z",fill:"currentColor"}),u=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:20,height:20,viewBox:"0 0 20 20",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i)},l=a.a.forwardRef((function(t,e){return a.a.createElement(u,c({svgRef:e},t))}));n.p},770:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1429 18.5743C17.1429 18.9524 16.9926 19.315 16.7253 19.5824C16.4579 19.8498 16.0953 20 15.7171 20H1.43C1.24216 20.0002 1.05612 19.9633 0.882541 19.8915C0.708961 19.8197 0.551244 19.7144 0.418419 19.5816C0.285594 19.4488 0.180268 19.291 0.10847 19.1175C0.0366725 18.9439 -0.000187222 18.7578 7.15066e-07 18.57V17.1429C7.15066e-07 13.3814 5.71429 11.4286 5.71429 11.4286C5.71429 11.4286 6.04143 10.8443 5.71429 10C4.51286 9.11429 4.36571 7.72857 4.28571 4.28571C4.53286 0.838571 6.95286 0 8.57143 0C10.19 0 12.61 0.837143 12.8571 4.28571C12.7771 7.72857 12.63 9.11429 11.4286 10C11.1014 10.8429 11.4286 11.4286 11.4286 11.4286C11.4286 11.4286 17.1429 13.3814 17.1429 17.1429V18.5743Z",fill:"currentColor"}),u=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:18,height:20,viewBox:"0 0 18 20",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i)},l=a.a.forwardRef((function(t,e){return a.a.createElement(u,c({svgRef:e},t))}));n.p},771:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(0),a=n.n(r);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.4049 36.0763L37.4866 35.1908C40.7006 31.452 42.6356 26.5981 42.6356 21.3178C42.6356 9.54382 33.0918 0 21.3178 0C9.54382 0 0 9.54382 0 21.3178C0 33.0918 9.54382 42.6356 21.3178 42.6356C26.5981 42.6356 31.452 40.7006 35.1908 37.4866L36.0763 38.4049V40.9958L50.1467 55.0381C51.4328 56.3215 53.5154 56.3205 54.8002 55.0358L55.0358 54.8002C56.3205 53.5154 56.3215 51.4328 55.0381 50.1467L40.9958 36.0763H38.4049ZM6.55933 21.3178C6.55933 13.1514 13.1514 6.55933 21.3178 6.55933C29.4842 6.55933 36.0763 13.1514 36.0763 21.3178C36.0763 29.4842 29.4842 36.0763 21.3178 36.0763C13.1514 36.0763 6.55933 29.4842 6.55933 21.3178Z",fill:"#795DF5"}),u=a.a.createElement("path",{d:"M20.2922 23.3704C20.2922 23.5728 20.4612 23.7202 20.6636 23.7202H21.8958C22.0136 23.7202 22.1029 23.6116 22.1029 23.4938V23.3292C22.1029 22.9383 22.1646 22.5679 22.3086 22.2181C22.4527 21.8683 22.679 21.5802 23.0082 21.3539L23.9547 20.7161C24.5514 20.3251 25.0453 19.8313 25.4568 19.2551C25.8477 18.679 26.0535 17.9588 26.0535 17.1358C26.0535 16.6214 25.9506 16.107 25.7449 15.6132C25.5391 15.1193 25.251 14.6667 24.8807 14.2757C24.4897 13.9053 24.0165 13.5967 23.4609 13.3498C22.8848 13.1235 22.2469 13 21.5473 13C20.7449 13 20.0658 13.144 19.4897 13.3909C18.9136 13.6584 18.4609 13.9877 18.0905 14.3992C17.7202 14.8107 17.4321 15.284 17.2675 15.7778C17.0823 16.2716 17 16.7654 17 17.2181C17 17.3691 17.0068 17.5133 17.0205 17.6506C17.0545 17.9917 17.3444 18.2331 17.6845 18.2752L18.6571 18.3955C18.8649 18.4212 19.0373 18.2083 19.0165 18C18.9753 17.8148 18.9753 17.6296 18.9753 17.4444C18.9753 17.1152 19.0165 16.8066 19.1193 16.4774C19.2222 16.1687 19.3868 15.8807 19.5926 15.6337C19.7984 15.3868 20.0453 15.2016 20.3745 15.037C20.7037 14.893 21.0947 14.8107 21.5473 14.8107C21.9588 14.8107 22.3086 14.893 22.6173 15.0165C22.9259 15.1399 23.1728 15.3251 23.3786 15.5309C23.5844 15.7572 23.7284 16.0041 23.8313 16.2922C23.9342 16.5802 23.9959 16.8683 23.9959 17.1564C23.9959 17.5679 23.893 17.9383 23.7078 18.2881C23.5226 18.6584 23.2551 18.9465 22.9053 19.1728L22 19.7901C21.3827 20.2016 20.93 20.6749 20.6831 21.1893C20.4156 21.7243 20.2922 22.321 20.2922 23V23.3704ZM19.8601 26.6626C19.8601 27.0329 19.9835 27.3621 20.251 27.6091C20.4979 27.8765 20.8272 28 21.1975 28C21.5679 28 21.8765 27.8765 22.144 27.6091C22.4115 27.3621 22.5556 27.0329 22.5556 26.6626C22.5556 26.2922 22.4115 25.9835 22.144 25.716C21.8765 25.4486 21.5679 25.3045 21.1975 25.3045C20.8272 25.3045 20.4979 25.4486 20.251 25.716C19.9835 25.9835 19.8601 26.2922 19.8601 26.6626Z",fill:"#3B375B"}),l=function(t){var e=t.svgRef,n=t.title,r=o(t,["svgRef","title"]);return a.a.createElement("svg",c({width:56,height:56,viewBox:"0 0 56 56",fill:"none",ref:e},r),n?a.a.createElement("title",null,n):null,i,u)},s=a.a.forwardRef((function(t,e){return a.a.createElement(l,c({svgRef:e},t))}));n.p},772:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(6),a=n(95),c=n.n(a),o=n(750),i=function(t,e){return c()(t.map((function(t){var n,a=Object(o.d)(t.biddingEndDate,t.maturityDate,t.expiryDate),c=a.phase,i=a.timeRemaining;return Object(r.a)(Object(r.a)({},t),{},{phase:c,asset:(null===(n=e[t.currencyKey])||void 0===n?void 0:n.asset)||t.currencyKey,timeRemaining:i,phaseNum:o.a[c]})})),["phaseNum","timeRemaining"])}},901:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return gt}));var r=n(1),a=n(0),c=n.n(a),o=n(26),i=n(2),u=n(13),l=n(77),s=n.n(l),f=n(19),m=n(744),d=n(62),b=n(61),p=n(24),O=n(94),g=n(47),h=n(60),v=n(55),j=n(17),y=n(45),E=n(49),C=n(757);function k(){var t=Object(r.a)(["\n\tgrid-gap: 24px;\n\tbutton {\n\t\t/* max-width: 240px; */\n\t}\n"]);return k=function(){return t},t}function x(){var t=Object(r.a)(["\n\t",";\n\tcolor: ",";\n"]);return x=function(){return t},t}function w(){var t=Object(r.a)(["\n\t",";\n\tcolor: ",";\n\tpadding-bottom: 6px;\n"]);return w=function(){return t},t}function L(){var t=Object(r.a)(["\n\tdisplay: flex;\n\tpadding: 25px;\n\tjustify-content: space-between;\n\tbackground-color: ",";\n"]);return L=function(){return t},t}var M=Object(i.e)(O.a.Body)(L(),(function(t){return t.theme.colors.surfaceL3})),R=i.e.div(w(),g.e,(function(t){return t.theme.colors.fontPrimary})),S=i.e.div(x(),h.a,(function(t){return t.theme.colors.fontSecondary})),B=Object(i.e)(u.t)(k()),P=function(t){var e,n=t.hasMarkets,r=t.noSUSD,a=Object(p.c)().t,o=c.a.createElement(C.a,null);return n?(e=a("assets.options.banner.has-markets.title"),o=a("assets.options.banner.has-markets.subtitle")):e=r?a("assets.options.banner.no-susd.title",{currencyKey:f.f.sUSD}):a("assets.options.banner.no-markets.title"),c.a.createElement(O.a,null,c.a.createElement(M,null,c.a.createElement("div",null,c.a.createElement(R,null,e),c.a.createElement(S,null,o)),c.a.createElement(B,null,r?c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{to:y.a.Trading.OneInchLink(f.f.sUSD,f.c.ETH),isExternal:!0},c.a.createElement(v.a,{palette:"primary",size:"md"},c.a.createElement(p.a,{i18nKey:"common.currency.buy-currency",values:{currencyKey:f.f.sUSD},components:[c.a.createElement(u.d,null)]}))),c.a.createElement(v.a,{palette:"primary",size:"md",onClick:function(){return Object(j.d)(j.c.Trade)}},c.a.createElement(p.a,{i18nKey:"common.currency.trade-synths-for-currency",values:{currencyKey:f.f.sUSD},components:[c.a.createElement(u.d,null)]}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{palette:"primary",size:"md",onClick:function(){return Object(j.d)(j.c.Options.Home)}},a("assets.options.banner.common.buttons.view-all-markets-label")),c.a.createElement(v.a,{palette:"primary",size:"md",onClick:function(){return Object(j.d)(j.c.Assets.Options.CreateMarketModal)}},a("assets.options.banner.common.buttons.create-new-market-label"))))))},D=n(16),H=n(732),T=n(248),U=n(254),K=n(769),A=n(770),F=n(771),z=n(23),N=n(252),Z=n(763),I=n(159);function V(){var t=Object(r.a)(["\n\tpadding-top: 20px;\n\tpadding-bottom: 40px;\n"]);return V=function(){return t},t}function W(){var t=Object(r.a)(["\n\tpadding-top: 65px;\n\ttext-align: center;\n\tsvg {\n\t\tpath:last-child {\n\t\t\tfill: ",";\n\t\t}\n\t}\n\n\tbutton {\n\t\twidth: 240px;\n\t}\n"]);return W=function(){return t},t}function J(){var t=Object(r.a)(["\n\twidth: 240px;\n\t.search-input {\n\t\theight: 32px;\n\t\tfont-size: 12px;\n\t}\n"]);return J=function(){return t},t}function q(){var t=Object(r.a)(["\n\tgrid-template-columns: auto 1fr;\n\tgrid-gap: 15px;\n"]);return q=function(){return t},t}function G(){var t=Object(r.a)(["\n\tpadding: 0;\n"]);return G=function(){return t},t}function Q(){var t=Object(r.a)(["\n\theight: 56px;\n\tjustify-content: space-between;\n"]);return Q=function(){return t},t}function X(){var t=Object(r.a)(["\n\t",";\n\tcolor: ",";\n"]);return X=function(){return t},t}function Y(){var t=Object(r.a)(["\n\tpadding: 0 8px;\n"]);return Y=function(){return t},t}var $=Object(T.a)({tooltip:{width:"180px",textAlign:"center"}})(H.a),_=[{filterName:"user-bids",icon:c.a.createElement(A.a,{width:"16px"})},{filterName:"creator",icon:c.a.createElement(K.a,{width:"16px"})}],tt=Object(i.e)(v.a).attrs({size:"sm",palette:"outline-secondary"})(Y()),et=i.e.div(X(),I.c,(function(t){return t.theme.colors.fontPrimary})),nt=Object(i.e)(O.a.Header)(Q()),rt=Object(i.e)(O.a.Body)(G()),at=Object(i.e)(u.t)(q()),ct=Object(i.e)(U.a)(J()),ot=Object(i.e)(u.E)(W(),(function(t){return t.theme.colors.fontPrimary})),it=i.e.div(V()),ut=function(t){var e=t.creatorMarkets,n=t.userBidsMarkets,r=Object(p.c)().t,o=Object(a.useState)(""),i=Object(D.a)(o,2),u=i[0],l=i[1],s=Object(a.useState)({name:n.length?"user-bids":"creator"}),f=Object(D.a)(s,2),m=f[0],d=f[1],b="user-bids"===m.name?n:e,g=Object(N.a)((function(){return u?b.filter((function(t){return t.asset.toLowerCase().includes(u.toLowerCase())})):b}),[b,u],z.g);Object(a.useEffect)((function(){l("")}),[m,l]);var h="creator"===m.name,y="user-bids"===m.name;return c.a.createElement(O.a,null,c.a.createElement(nt,null,c.a.createElement(et,null,r("assets.options.table.title")),c.a.createElement(at,null,_.map((function(t){var e=t.filterName,n=t.icon,a=m.name===e;return c.a.createElement($,{key:e,title:c.a.createElement("span",null,r("options.home.explore-markets.table.filters.".concat(e,".tooltip-not-connected"))),placement:"top",arrow:!0},c.a.createElement(tt,{onClick:function(){d({name:e})},isActive:a},n))})),c.a.createElement(ct,{onChange:function(t){return l(t.target.value)},value:u}))),c.a.createElement(rt,null,c.a.createElement(Z.a,{palette:"striped",optionsMarkets:u?g:b,isLoading:!1,noResultsMessage:u&&0===g.length||0===b.length?c.a.createElement(ot,null,c.a.createElement(F.a,null),u?c.a.createElement(it,null,r("options.home.explore-markets.table.filters.markets.no-results")):c.a.createElement(c.a.Fragment,null,h&&c.a.createElement(c.a.Fragment,null,c.a.createElement(it,null,r("options.home.explore-markets.table.filters.creator.no-results")),c.a.createElement("div",null,c.a.createElement(v.a,{size:"lg",palette:"primary",onClick:function(){return Object(j.d)(j.c.Assets.Options.CreateMarketModal)}},r("options.home.market-creation.create-market-button-label")))),y&&c.a.createElement(it,null,r("options.home.explore-markets.table.filters.user-bids.no-results")))):void 0})))},lt=n(740),st=n(737),ft=n(20),mt=n(772),dt=n(72);function bt(){var t=Object(r.a)(["\n\tgrid-template-rows: auto 1fr;\n\theight: 100%;\n\tposition: relative;\n\tgrid-gap: 20px;\n"]);return bt=function(){return t},t}var pt=Object(o.b)((function(t){return{walletBalancesMap:Object(d.j)(t),isRefreshingWalletBalances:Object(d.e)(t),currentWalletAddress:Object(ft.b)(t),synthsMap:Object(dt.c)(t)}})),Ot=Object(i.e)(u.r)(bt()),gt=pt((function(t){var e=t.walletBalancesMap,n=t.isRefreshingWalletBalances,r=t.currentWalletAddress,o=t.synthsMap,i=Object(m.a)(e,f.f.sUSD)||0,u=Object(lt.b)(st.a.BinaryOptions.Markets,(function(){return s.a.binaryOptions.markets({max:1/0})})),l=Object(lt.b)(st.a.BinaryOptions.UserMarkets(r),(function(){return s.a.binaryOptions.marketsBidOn({account:r})})),d=Object(a.useMemo)((function(){return u.isSuccess&&Array.isArray(u.data)?Object(mt.a)(u.data,o):[]}),[u,o]),p=Object(a.useMemo)((function(){return d.filter((function(t){return t.creator.toLowerCase()===r.toLowerCase()}))}),[d,r]),O=Object(a.useMemo)((function(){return l.isSuccess&&Array.isArray(l.data)?d.filter((function(t){var e=t.address;return l.data.includes(e)})):[]}),[d,l.data,l.isSuccess]),g=Boolean(p.length||O.length),h=n||u.isLoading||l.isLoading;return c.a.createElement(Ot,null,h?c.a.createElement(b.a,{size:"sm",centered:!0}):c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{hasMarkets:g,noSUSD:!i}),g&&c.a.createElement(ut,{creatorMarkets:p,userBidsMarkets:O})))}))}}]);
//# sourceMappingURL=9.779c99e0.chunk.js.map