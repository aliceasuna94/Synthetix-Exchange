(this["webpackJsonpsynthetix.exchange"]=this["webpackJsonpsynthetix.exchange"]||[]).push([[14],{774:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=Date.now(),a=[],o=0;o<e;o++)a.unshift({timestamp:r,rate:n}),r-=6e4*t;return a}},775:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),a=e.n(r),o=e(19),i=e(17),c=e(49),l=e(119),u=function(t){var n=t.currencyKey;return a.a.createElement(a.a.Fragment,null,o.a.filter((function(t){return t!==n})).map((function(t){var e=Object(o.k)(n,t),r=e.base,u=e.quote;return a.a.createElement(c.a,{to:Object(i.b)(r,u),key:"".concat(n,"-").concat(t)},a.a.createElement(l.a.Pair,{key:t,baseCurrencyKey:r,quoteCurrencyKey:u}))})))}},890:function(t,n,e){"use strict";var r=e(3),a=e(36),o=e(0),i=(e(7),e(32));var c=e(158),l=e(88),u=e(264),s=e(126),f=e(248),d=e(706),m=e(731),p=o.forwardRef((function(t,n){var e=t.classes,i=t.className,l=t.component,u=void 0===l?"div":l,s=t.square,f=void 0!==s&&s,d=t.elevation,m=void 0===d?1:d,p=t.variant,h=void 0===p?"elevation":p,b=Object(a.a)(t,["classes","className","component","square","elevation","variant"]);return o.createElement(u,Object(r.a)({className:Object(c.a)(e.root,i,"outlined"===h?e.outlined:e["elevation".concat(m)],!f&&e.rounded),ref:n},b))})),h=Object(f.a)((function(t){var n={};return t.shadows.forEach((function(t,e){n["elevation".concat(e)]={boxShadow:t}})),Object(r.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},n)}),{name:"MuiPaper"})(p);function b(t,n){var e=0;return"number"===typeof n?e=n:"center"===n?e=t.height/2:"bottom"===n&&(e=t.height),e}function v(t,n){var e=0;return"number"===typeof n?e=n:"center"===n?e=t.width/2:"right"===n&&(e=t.width),e}function g(t){return[t.horizontal,t.vertical].map((function(t){return"number"===typeof t?"".concat(t,"px"):t})).join(" ")}function O(t){return"function"===typeof t?t():t}var E=o.forwardRef((function(t,n){var e=t.action,f=t.anchorEl,p=t.anchorOrigin,E=void 0===p?{vertical:"top",horizontal:"left"}:p,j=t.anchorPosition,y=t.anchorReference,x=void 0===y?"anchorEl":y,w=t.children,C=t.classes,k=t.className,R=t.container,z=t.elevation,P=void 0===z?8:z,D=t.getContentAnchorEl,N=t.marginThreshold,T=void 0===N?16:N,F=t.onEnter,A=t.onEntered,S=t.onEntering,H=t.onExit,W=t.onExited,M=t.onExiting,K=t.open,Y=t.PaperProps,L=void 0===Y?{}:Y,q=t.transformOrigin,_=void 0===q?{vertical:"top",horizontal:"left"}:q,B=t.TransitionComponent,J=void 0===B?m.a:B,I=t.transitionDuration,Q=void 0===I?"auto":I,U=t.TransitionProps,G=void 0===U?{}:U,X=Object(a.a)(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),V=o.useRef(),Z=o.useCallback((function(t){if("anchorPosition"===x)return j;var n=O(f),e=(n&&1===n.nodeType?n:Object(l.a)(V.current).body).getBoundingClientRect(),r=0===t?E.vertical:"center";return{top:e.top+b(e,r),left:e.left+v(e,E.horizontal)}}),[f,E.horizontal,E.vertical,j,x]),$=o.useCallback((function(t){var n=0;if(D&&"anchorEl"===x){var e=D(t);if(e&&t.contains(e)){var r=function(t,n){for(var e=n,r=0;e&&e!==t;)r+=(e=e.parentElement).scrollTop;return r}(t,e);n=e.offsetTop+e.clientHeight/2-r||0}0}return n}),[E.vertical,x,D]),tt=o.useCallback((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:b(t,_.vertical)+n,horizontal:v(t,_.horizontal)}}),[_.horizontal,_.vertical]),nt=o.useCallback((function(t){var n=$(t),e={width:t.offsetWidth,height:t.offsetHeight},r=tt(e,n);if("none"===x)return{top:null,left:null,transformOrigin:g(r)};var a=Z(n),o=a.top-r.vertical,i=a.left-r.horizontal,c=o+e.height,l=i+e.width,s=Object(u.a)(O(f)),d=s.innerHeight-T,m=s.innerWidth-T;if(o<T){var p=o-T;o-=p,r.vertical+=p}else if(c>d){var h=c-d;o-=h,r.vertical+=h}if(i<T){var b=i-T;i-=b,r.horizontal+=b}else if(l>m){var v=l-m;i-=v,r.horizontal+=v}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:g(r)}}),[f,x,Z,$,tt,T]),et=o.useCallback((function(){var t=V.current;if(t){var n=nt(t);null!==n.top&&(t.style.top=n.top),null!==n.left&&(t.style.left=n.left),t.style.transformOrigin=n.transformOrigin}}),[nt]),rt=o.useCallback((function(t){V.current=i.findDOMNode(t)}),[]);o.useEffect((function(){K&&et()})),o.useImperativeHandle(e,(function(){return K?{updatePosition:function(){et()}}:null}),[K,et]),o.useEffect((function(){if(K){var t=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=this,c=function(){t.apply(i,a)};clearTimeout(n),n=setTimeout(c,e)}return r.clear=function(){clearTimeout(n)},r}((function(){et()}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[K,et]);var at=Q;"auto"!==Q||J.muiSupportAuto||(at=void 0);var ot=R||(f?Object(l.a)(O(f)).body:void 0);return o.createElement(d.a,Object(r.a)({container:ot,open:K,ref:n,BackdropProps:{invisible:!0},className:Object(c.a)(C.root,k)},X),o.createElement(J,Object(r.a)({appear:!0,in:K,onEnter:F,onEntered:A,onExit:H,onExited:W,onExiting:M,timeout:at},G,{onEntering:Object(s.a)((function(t,n){S&&S(t,n),et()}),G.onEntering)}),o.createElement(h,Object(r.a)({elevation:P,ref:rt},L,{className:Object(c.a)(C.paper,L.className)}),w)))}));n.a=Object(f.a)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(E)},897:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return Vt}));var r=e(0),a=e.n(r),o=e(269),i=e(1),c=e(101),l=e(16),u=e(26),s=e(2),f=e(24),d=e(10),m=e(18),p=e(249),h=e(252),b=e(72),v=e(33),g=e(112),O=e(23),E=e(13),j=e(55),y=e(29),x=e.n(y),w=e(890),C=e(19),k=e(84),R=e(66),z=e(17),P=e(156),D=e(119),N=e(141),T=e(178),F=e(79),A=e(255);function S(){var t=Object(i.a)(["\n\twidth: 100%;\n\theight: 100%;\n"]);return S=function(){return t},t}var H=s.e.div(S()),W=function(t){var n=t.change,e=t.chartData,o=void 0===e?[]:e,i=t.onClick,c=t.className,l=Object(r.useContext)(s.a).colors;return a.a.createElement(H,{onClick:i,className:c},a.a.createElement(A.a,{width:"100%",height:"100%"},a.a.createElement(F.f,{data:o},a.a.createElement(F.l,{dataKey:"timestamp",hide:!0}),a.a.createElement(F.m,{type:"number",domain:["auto","auto"],hide:!0}),a.a.createElement(F.e,{dataKey:"rate",stroke:n>=0?l.green:l.red,dot:!1,strokeWidth:1.5,activeDot:!1,isAnimationActive:!1}))))},M=e(775),K=e(774),Y=e(60),L=e(145),q=e(270);function _(){var t=Object(i.a)(["\n\tdisplay: grid;\n\t> * {\n\t\tpadding: 10px 15px;\n\t\t&:hover {\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"]);return _=function(){return t},t}function B(){var t=Object(i.a)(["\n\tmargin-top: 8px;\n\t.paper {\n\t\tbox-shadow: 0px 4px 11px rgba(188, 99, 255, 0.15442);\n\t\tborder: 1px solid #f2f2f6;\n\t}\n"]);return B=function(){return t},t}function J(){var t=Object(i.a)(["\n\t",";\n\t.currency-desc {\n\t\tmax-width: 180px;\n\t}\n"]);return J=function(){return t},t}function I(){var t=Object(i.a)(["\n\t.table-row,\n\t.table-body-row {\n\t\t& > :last-child {\n\t\t\tjustify-content: flex-end;\n\t\t}\n\t}\n"]);return I=function(){return t},t}var Q=Object(r.memo)((function(t){var n=t.synthsMap,e=t.synthsWithRates,o=t.noResultsMessage,i=Object(f.c)().t,c=Object(r.useState)(null),u=Object(l.a)(c,2),s=u[0],d=u[1],m=Object(r.useState)(null),p=Object(l.a)(m,2),h=p[0],b=p[1],v=Boolean(h),g=v?"trade-button-popover":void 0;return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.L,null,a.a.createElement(U,{palette:"light-secondary",columns:[{Header:a.a.createElement(a.a.Fragment,null,i("synths.home.table.synth-col")),accessor:"name",Cell:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{currencyKey:t.cell.value,currencyDesc:t.row.original.description,showIcon:!0,iconProps:{width:"24px",height:"24px"}}),t.row.original.isFrozen?a.a.createElement(q.a,{left:"10px",right:"10px"},a.a.createElement(L.b,{currencyKey:t.row.original.name})):null)},width:220,sortable:!0},{Header:a.a.createElement(a.a.Fragment,null,i("synths.home.table.last-price-col")),accessor:"lastPrice",sortType:"basic",Cell:function(t){var e;return a.a.createElement(N.a,{sign:null===(e=n[C.f.sUSD])||void 0===e?void 0:e.sign,value:t.cell.value})},width:100,sortable:!0},{Header:a.a.createElement(a.a.Fragment,null,i("synths.home.table.24h-change-col")),sortType:"basic",accessor:function(t){return x()(t.historicalRates,"ONE_DAY.data.change",null)},id:"24change-col",Cell:function(t){return null==t.cell.value?a.a.createElement("span",null,k.a):a.a.createElement(T.a,{isLabel:!0,value:t.cell.value})},sortable:!0,width:100},{Header:a.a.createElement(a.a.Fragment,null,i("synths.home.table.24h-trend-col")),id:"24trend-col",Cell:function(t){if(t.row.original.name===C.f.sUSD)return a.a.createElement(W,{change:0,chartData:Object(K.a)(R.a.ONE_DAY,C.m)});var n=x()(t.row.original.historicalRates,"ONE_DAY.data",null);return null==n?a.a.createElement("span",null,k.a):a.a.createElement(W,{change:n.change,chartData:n.rates||[]})},width:150},{Header:a.a.createElement(a.a.Fragment,null,i("synths.home.table.trade-now-col")),id:"trade-col",Cell:function(t){return a.a.createElement(j.a,{size:"sm",palette:"outline",onClick:function(n){n.stopPropagation(),b(n.currentTarget),d(t.row.original.name)}},i("common.actions.trade"))}}],columnsDeps:[n],data:e,noResultsMessage:o,onTableRowClick:function(t){return Object(z.f)(t.original.name)}})),a.a.createElement(X,{classes:{paper:"paper"},id:g,open:v,anchorEl:h,onClose:function(){b(null),d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},a.a.createElement(V,null,s&&a.a.createElement(M.a,{currencyKey:s}))))})),U=Object(s.e)(P.a)(I()),G=Object(s.e)(D.a.Name)(J(),Y.a),X=Object(s.e)(w.a)(B()),V=s.e.div(_(),(function(t){return t.theme.colors.accentL1})),Z=Object(u.b)((function(t){return{synthsMap:Object(b.c)(t)}}))(Q),$=e(260),tt=e(11);function nt(){var t=Object(i.a)(["\n\theight: 130px;\n\tbackground-color: ",";\n\t",";\n\t.chart-data {\n\t\theight: 50px;\n\t}\n"]);return nt=function(){return t},t}function et(){var t=Object(i.a)(["\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-gap: 30px;\n\t"]);return et=function(){return t},t}function rt(){var t=Object(i.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-gap: 12px;\n\tjustify-content: center;\n\n\t","\n"]);return rt=function(){return t},t}function at(){var t=Object(i.a)(["\n\t\tjustify-self: initial;\n\t"]);return at=function(){return t},t}function ot(){var t=Object(i.a)(["\n\t\tjustify-self: flex-start;\n\t"]);return ot=function(){return t},t}function it(){var t=Object(i.a)(["\n\t\tjustify-self: flex-start;\n\t"]);return it=function(){return t},t}function ct(){var t=Object(i.a)(["\n\tbackground-color: ",";\n\tjustify-self: flex-end;\n\n\t","\n\n\t","\n\n\t","\n"]);return ct=function(){return t},t}function lt(){var t=Object(i.a)(["\n\tbackground-color: ",";\n"]);return lt=function(){return t},t}function ut(){var t=Object(i.a)(["\n\t\tjustify-self: initial;\n\t"]);return ut=function(){return t},t}function st(){var t=Object(i.a)(["\n\t",";\n\tcolor: ",";\n\tpadding: 5px 10px;\n\tmin-width: 181px;\n\tbox-sizing: border-box;\n\tborder-radius: 1px;\n\ttext-align: center;\n\tjustify-self: flex-start;\n\n\t","\n"]);return st=function(){return t},t}function ft(){var t=Object(i.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: auto 1fr;\n\tgrid-gap: 20px;\n"]);return ft=function(){return t},t}function dt(){var t=Object(i.a)(["\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr 1fr;\n\t\tgrid-gap: 30px;\n\t"]);return dt=function(){return t},t}function mt(){var t=Object(i.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-gap: 12px;\n\tjustify-content: center;\n\n\t","\n"]);return mt=function(){return t},t}var pt=s.e.div(mt(),d.b.large(dt())),ht=s.e.div(ft()),bt=s.e.div(st(),Y.b,(function(t){return t.theme.colors.white}),d.b.small(ut())),vt=Object(s.e)(bt)(lt(),(function(t){return t.theme.colors.green})),gt=Object(s.e)(bt)(ct(),(function(t){return t.theme.colors.red}),d.b.large(it()),d.b.medium(ot()),d.b.small(at())),Ot=s.e.div(rt(),d.b.small(et())),Et=Object(s.e)($.a)(nt(),(function(t){return t.theme.colors.white}),E.Q),jt=function(t){var n=t.synthsWithRates,e=t.maxTopSynths,r=Object(f.c)().t,o=n.map((function(t){var n=t.name,e=t.historicalRates,r=t.lastPrice,o=x()(e,"ONE_DAY.data",null),i=null!=o?o.rates:null,c=null!=o?o.change:null;return a.a.createElement(Et,{key:n,currencyLabel:n,price:null!=r?Object(tt.i)(C.g,r):null,change:c,chartData:i||[],onClick:function(){return Object(z.f)(n)},variableGradient:!0,labelPosition:"down"})})),i=o.slice(0,e),c=o.slice(-e);return a.a.createElement(pt,null,a.a.createElement(ht,null,a.a.createElement(vt,null,r("synths.home.charts.biggest-gainers-24h")),a.a.createElement(Ot,null,i)),a.a.createElement(ht,null,a.a.createElement(gt,null,r("synths.home.charts.biggest-losers-24h")),a.a.createElement(Ot,null,c)))},yt=[C.b.crypto,C.b.forex,C.b.equities,C.b.commodity];function xt(){var t=Object(i.a)(["\n\t\ttransform: translateY(50%);\n\t\ttransform: none;\n\t\tpadding: 40px 24px;\n\t"]);return xt=function(){return t},t}function wt(){var t=Object(i.a)(["\n\t\ttransform: translateY(50%);\n\t\ttransform: none;\n\t\tpadding: 73px 24px;\n\t"]);return wt=function(){return t},t}function Ct(){var t=Object(i.a)(["\n\tposition: relative;\n\tz-index: ",";\n\ttransform: translateY(calc(50% - 20px));\n\t","\n\t","\n"]);return Ct=function(){return t},t}function kt(){var t=Object(i.a)(["\n\t\t    flex-basis: 100%;\n\t\t"]);return kt=function(){return t},t}function Rt(){var t=Object(i.a)(["\n\t\tpadding: 32px 24px;\n\t"]);return Rt=function(){return t},t}function zt(){var t=Object(i.a)(["\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 32px 0;\n\t","\n\tmargin-top: -20px;\n\t> * {\n\t\tmargin-top: 20px;\n\t\t","\n\t}\n"]);return zt=function(){return t},t}function Pt(){var t=Object(i.a)(["\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\t"]);return Pt=function(){return t},t}function Dt(){var t=Object(i.a)(["\n\tdisplay: inline-grid;\n\tgrid-auto-flow: column;\n\tgrid-gap: 8px;\n\t","\n"]);return Dt=function(){return t},t}function Nt(){var t=Object(i.a)(["\n\t\t\tpadding-top: 0;\n\t\t\tpadding-bottom: 90px;\n\t\t"]);return Nt=function(){return t},t}function Tt(){var t=Object(i.a)(["\n\tbackground-color: ",";\n\tposition: relative;\n\tpadding-top: 120px;\n\tpadding-bottom: 110px;\n\t","\n"]);return Tt=function(){return t},t}var Ft=s.e.div(Tt(),(function(t){return t.theme.colors.white}),d.b.large(Nt())),At=s.e.div(Dt(),d.b.small(Pt())),St=Object(s.e)(E.j)(zt(),d.b.large(Rt()),d.b.small(kt())),Ht=Object(s.e)(E.F)(Ct(),O.j.BASE,d.b.large(wt()),d.b.medium(xt())),Wt={fetchHistoricalRatesRequest:g.b,setSynthsCategoryFilter:v.i},Mt=Object(u.b)((function(t){return{synths:Object(b.b)(t),synthsWithRates:Object(b.e)(t),filteredSynthsWithRates:Object(b.d)(t),synthsCategoryFilter:Object(v.f)(t)}}),Wt)((function(t){var n=t.synths,e=t.synthsWithRates,o=t.filteredSynthsWithRates,i=t.fetchHistoricalRatesRequest,u=t.synthsCategoryFilter,d=t.setSynthsCategoryFilter,b=Object(r.useState)(""),v=Object(l.a)(b,2),g=v[0],y=v[1],x=Object(f.c)().t,w=Object(r.useMemo)((function(){return n.map((function(t){return t.name}))}),[n]);Object(r.useEffect)((function(){i({currencyKeys:w,periods:["ONE_DAY"]})}),[i,w]),Object(p.a)((function(){i({currencyKeys:w,periods:["ONE_DAY"]})}),3e4);var C=Object(h.a)((function(){return g?o.filter((function(t){var n=t.name,e=t.description,r=g.toLowerCase();return n.toLowerCase().includes(r)||e.toLowerCase().includes(r)})):o}),[o,g],O.g),k=Object(r.useMemo)((function(){return[].concat(Object(c.a)(e.slice(0,3)),Object(c.a)(e.slice(-3)))}),[e]);return a.a.createElement(s.b,{theme:m.e},a.a.createElement(Ht,null,a.a.createElement(jt,{synthsWithRates:k,maxTopSynths:3})),a.a.createElement(Ft,null,a.a.createElement(E.F,null,a.a.createElement(St,null,a.a.createElement(At,null,a.a.createElement(j.a,{size:"md",palette:"toggle",isActive:null==u,onClick:function(){return d({category:null})}},x("common.filters.all")),yt.map((function(t){return a.a.createElement(j.a,{size:"md",palette:"toggle",isActive:u===t,onClick:function(){return d({category:t})},key:t},x("common.currency-category.".concat(t)))}))),a.a.createElement(E.a,{onChange:function(t){return y(t.target.value)},value:g})),a.a.createElement(Z,{synthsWithRates:C,noResultsMessage:g&&0===C.length?a.a.createElement(E.E,null,a.a.createElement(f.a,{i18nKey:"common.search-results.no-results-for-query",values:{searchQuery:g},components:[a.a.createElement(E.J,null)]})):void 0}))))})),Kt=e(47);function Yt(){var t=Object(i.a)(["\n\t\tfont-size: 32px;\n\t\tline-height: 32px;\n\t"]);return Yt=function(){return t},t}function Lt(){var t=Object(i.a)(["\n\t\tfont-size: 40px;\n\t\tline-height: 40px;\n\t"]);return Lt=function(){return t},t}function qt(){var t=Object(i.a)(["\n\t",";\n\tcolor: ",";\n\tmax-width: 850px;\n\tmargin: 0 auto;\n\tpadding-bottom: 24px;\n\t","\n\t","\n"]);return qt=function(){return t},t}function _t(){var t=Object(i.a)(["\n\tmargin: 0 auto;\n"]);return _t=function(){return t},t}function Bt(){var t=Object(i.a)(["\n\t\tpadding: 45px 24px 0 24px;\n\t"]);return Bt=function(){return t},t}function Jt(){var t=Object(i.a)(["\n\t\tpadding: 80px 24px 0 24px;\n\t"]);return Jt=function(){return t},t}function It(){var t=Object(i.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\n\tpadding: 125px 24px 0 24px;\n\t","\n\t","\n"]);return It=function(){return t},t}var Qt=s.e.div(It(),d.b.large(Jt()),d.b.medium(Bt())),Ut=s.e.div(_t()),Gt=s.e.div(qt(),Kt.b,m.b.colors.fontPrimary,d.b.large(Lt()),d.b.medium(Yt())),Xt=function(){var t=Object(f.c)().t;return a.a.createElement(Qt,null,a.a.createElement(Ut,null,a.a.createElement(Gt,null,t("synths.home.hero.title"))))},Vt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Xt,null),a.a.createElement(Mt,null),a.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=14.6e74ac2e.chunk.js.map