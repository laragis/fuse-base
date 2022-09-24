import e,{memo as t,forwardRef as r,useRef as o,useImperativeHandle as n,useState as i,useMemo as l,useCallback as a,useEffect as s,isValidElement as c}from"react";import u from"@tippyjs/react";import{jsx as m,jsxs as d,Fragment as f}from"react/jsx-runtime";import p from"clsx";import*as h from"prop-types";import b from"prop-types";import{styled as g}from"@mui/material/styles";import{Box as I}from"@mui/system";import y from"@mui/material/Icon";import{includes as S,replace as v,some as T,isEmpty as C,isBoolean as w,pick as x,map as P}from"lodash";import{Box as z,MenuItem as O,ListItemIcon as N,ListItemText as j,Divider as k,Menu as M,IconButton as W,Stack as E,styled as F,LinearProgress as H}from"@mui/material";import D from"zustand";import R from"immer";import{createNanoEvents as A}from"nanoevents";import L from"@mui/material/Menu";import{ChevronRight as Y}from"@mui/icons-material";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},B.apply(this,arguments)}function X(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t.indexOf(r=i[o])>=0||(n[r]=e[r]);return n}const V=["title","children"];function $(e){let{title:t,children:r}=e,o=X(e,V);if(!t)return r;const n=B({theme:"light",animation:"scale",content:t,trigger:"mouseenter"},o);/*#__PURE__*/return m(u,B({},n,{children:r}))}var K=/*#__PURE__*/t($);const q=["theme"],G=["children","className","size"],J=g(I)(e=>{let{theme:t}=e,r=X(e,q);return{width:r.size,height:r.size,minWidth:r.size,minHeight:r.size,fontSize:r.size,lineHeight:r.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),Q=/*#__PURE__*/r((e,t)=>{if(!e.children.includes(":"))/*#__PURE__*/return m(y,B({ref:t},e));const r=e.children.replace(":",".svg#");/*#__PURE__*/return m(J,B({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:p("shrink-0 fill-current ",e.className),ref:t,size:e.size,sx:e.sx,color:e.color,children:/*#__PURE__*/m("use",{xlinkHref:`assets/icons/${r}`})}))});function U(e){let{children:t,className:r,size:o}=e,n=X(e,G),i={children:t};return t&&S(t,"fontawesome-")&&(i.children=void 0,i.baseClassName="",i.className=v(t,"fontawesome-","fa-"),i.className=v(i.className,":"," fa-"),i.className=["w-inherit",i.className,r].join(" "),o&&(i.sx={width:o,height:o,minWidth:o,minHeight:o,fontSize:o})),r&&T(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],e=>S(r,e))&&(i.baseClassName=""),/*#__PURE__*/m(Q,B({className:r},i,{size:o},n))}Q.propTypes={children:b.string,size:b.oneOfType([b.number,b.string]),sx:b.object,color:b.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},Q.defaultProps={children:"",size:24,sx:{},color:"inherit"};const Z={};function _(e,t){Z[e]=t}function ee(e){const t=Z[e.name];return t?/*#__PURE__*/m(t,B({},e)):/*#__PURE__*/m(z,{p:2,children:"Not Found"})}const te=["leftIcon","rightIcon","label","MenuItemProps","className"],re=g(O)({});var oe=/*#__PURE__*/r((e,t)=>{let{leftIcon:r,rightIcon:o,label:n,className:i}=e,l=X(e,te);/*#__PURE__*/return d(re,B({ref:t,className:i},l,{children:[r&&/*#__PURE__*/m(N,{children:r}),/*#__PURE__*/m(j,{children:n}),o&&/*#__PURE__*/m(N,{className:"flex justify-end",children:o})]}))});const ne=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],ie=["ref"];var le=/*#__PURE__*/e.forwardRef(function(e,t){const{parentMenuOpen:r,label:l,rightIcon:a=/*#__PURE__*/m(Y,{color:"disabled",fontSize:"small"}),leftIcon:s=null,children:c,className:u,tabIndex:f,ContainerProps:p={}}=e,h=X(e,ne),{ref:b}=p,g=X(p,ie),I=o(null);n(t,()=>I.current);const y=o(null);n(b,()=>y.current);const S=o(null),[v,T]=i(!1),C=()=>{const e=y.current.ownerDocument.activeElement;for(const t of S.current.children)if(t===e)return!0;return!1},w=v&&r;let x;return e.disabled||(x=void 0!==f?f:-1),/*#__PURE__*/d("div",B({},g,{ref:y,onFocus:e=>{e.target===y.current&&T(!0),g.onFocus&&g.onFocus(e)},tabIndex:x,onMouseEnter:e=>{T(!0),g.onMouseEnter&&g.onMouseEnter(e)},onMouseLeave:e=>{T(!1),g.onMouseLeave&&g.onMouseLeave(e)},onKeyDown:e=>{if("Escape"===e.key)return;C()&&e.stopPropagation();const t=y.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&C()&&y.current.focus(),"ArrowRight"===e.key&&e.target===y.current&&e.target===t&&S.current.children[0].focus()},children:[/*#__PURE__*/m(oe,{MenuItemProps:h,className:u,ref:I,leftIcon:s,rightIcon:a,label:l}),/*#__PURE__*/m(L,{style:{pointerEvents:"none"},anchorEl:I.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:w,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{T(!1)},children:/*#__PURE__*/m("div",{ref:S,style:{pointerEvents:"auto"},children:c})})]}))});const ae=["divider"],se=["items","callback"];function ce({items:e,onClose:t,open:r}){return e.map((e,o)=>{let{divider:n}=e,i=X(e,ae);if(n)/*#__PURE__*/return m(k,{sx:{my:.5}},o);const{items:l,callback:a}=i,s=X(i,se);return l&&l.length>0?/*#__PURE__*/m(le,B({},s,{parentMenuOpen:r,children:/*#__PURE__*/m(ce,{open:r,items:l,onClose:t})}),o):/*#__PURE__*/m(oe,B({},s,{onClick:()=>{t(),a&&a()}}),o)})}function ue({position:e,items:t,children:r,onClose:n}){const c=o(null),[u,f]=i(null),p=l(()=>null!==u,[u]),h=l(()=>p?{top:u.mouseY,left:u.mouseX}:void 0,[p,u]),b=a(()=>{n(),p&&f(null)},[p]);return s(()=>{f(e)},[e]),/*#__PURE__*/d("div",{ref:c,onContextMenu:e=>{e.preventDefault(),f(null===u?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)},children:[/*#__PURE__*/m(M,{open:p,onClose:b,anchorReference:"anchorPosition",anchorPosition:h,disableAutoFocusItem:!0,children:!C(t)&&/*#__PURE__*/m(ce,{open:p,items:t,onClose:b})}),r]})}ce.propTypes={items:b.array},ue.propTypes={items:b.array};const me=["icon","label","visible","onClick","btnSize","iconSize","items","color"];function de(e){const{icon:t,label:r,visible:o=!0,onClick:n,btnSize:a,iconSize:s,items:c=[],color:u}=e;X(e,me);const p=w(e.tooltip)?r:e.tooltip,h=l(()=>o&&t,[o,t]),[b,g]=i(null),I=Boolean(b),y=(e,t)=>{g(null),t&&t()},S=h&&/*#__PURE__*/m(W,{size:a,onClick:e=>C(c)?n&&n(e):g(e.currentTarget),color:u,children:t&&/*#__PURE__*/m(U,{size:s,children:t})}),v=h&&!C(c)&&/*#__PURE__*/m(M,{open:I,anchorEl:b,onClose:e=>y(),transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:c.map((e,t)=>/*#__PURE__*/d(O,{onClick:t=>y(0,e.onClick),children:[e.icon&&/*#__PURE__*/m(N,{children:/*#__PURE__*/m(U,{children:e.icon})}),e.label&&/*#__PURE__*/m(j,{children:e.label})]},t))});/*#__PURE__*/return d(f,p&&h?{children:[/*#__PURE__*/m(K,{title:p,children:S}),v]}:{children:[S,v]})}function fe(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Object.is(e[r[o]],t[r[o]]))return!1;return!0}de.defautProps={iconSize:18};const pe=["case","defaultCase"];function he(e){let{case:t,defaultCase:r}=e,o=X(e,pe);/*#__PURE__*/return c(t)?t:function(e){return"function"==typeof e&&!!e.prototype.isReactComponent}(n=t)||function(e){return"function"==typeof e&&String(e).includes("return React.createElement")}(n)?/*#__PURE__*/m(t,{}):/*#__PURE__*/m(r,B({},o,t));var n}function be(e){const{sx:t,contentProps:r,leftItems:o,leftContentProps:n,centerItems:i,centerContentProps:l,rightItems:a,rightContentProps:s}=e,c=x(e,["btnSize","iconSize"]);/*#__PURE__*/return d(E,{sx:t,direction:"row",justifyContent:"space-between",alignItems:"center",children:[/*#__PURE__*/m(E,B({direction:"row"},r,n,{children:o.length>0&&o.map((e,t)=>/*#__PURE__*/m(he,B({case:e,defaultCase:de},c),t))})),/*#__PURE__*/m(E,B({direction:"row"},r,l,{children:i.length>0&&i.map((e,t)=>/*#__PURE__*/m(he,B({case:e,defaultCase:de},c),t))})),/*#__PURE__*/m(E,B({direction:"row"},r,s,{children:a.length>0&&a.map((e,t)=>/*#__PURE__*/m(he,B({case:e,defaultCase:de},c),t))}))]})}be.propTypes={leftItems:b.array,centerItems:b.array,rightItems:b.array},be.defaultProps={sx:{p:1},contentProps:{spacing:.5},leftItems:[],centerItems:[],rightItems:[]};const ge=D(e=>({components:{},registerComponent:(t,r)=>e(R(e=>{e.components[t]=r}))})),Ie=ge.getState().components;function ye(e,t){ge.getState().registerComponent(e,t)}function Se(e){const t=ge(t=>t.components[e.type],fe);return t?/*#__PURE__*/m(t,B({},e)):null}const ve=["theme"],Te=F("div")(e=>{let{theme:t}=e,r=X(e,ve);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.paper,"& .PageSide-wrapper":B({display:"flex",flexDirection:"row",flex:"1 1 auto",minWidth:0,height:"100%",backgroundColor:t.palette.background.default},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0}),"& .PageSide-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1 1 auto"},"& .PageSide-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",minHeight:0,overflowY:"auto"}}});function Ce(e){var t,r,n;o(null),o(null),o(null);const i=l(()=>T([e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems],e=>!C(e)),[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),a=l(()=>B({},e.toolbarProps,{leftItems:e.leftToolbarItems,centerItems:e.centerToolbarItems,rightItems:e.rightToolbarItems}),[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),s=l(()=>T([e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems],e=>!C(e)),[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),c=l(()=>B({},e.subToolbarProps,{leftItems:e.leftSubToolbarItems,centerItems:e.centerSubToolbarItems,rightItems:e.rightSubToolbarItems}),[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),u={title:e.headerTitle};/*#__PURE__*/return d(Te,{className:p("PageSide-root",`PageSide-scroll-${e.scroll}`,e.className),scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[/*#__PURE__*/d("div",{className:"PageSide-wrapper",children:[e.leftSidebarContent&&/*#__PURE__*/m("div",{children:"leftSidebarContent"}),/*#__PURE__*/d(E,B({},e.contentWrapperProps,{className:p("PageSide-contentWrapper",null==(t=e.contentWrapperProps)?void 0:t.className),divider:/*#__PURE__*/m(k,{}),children:[e.header&&(w(e.header)?/*#__PURE__*/m(Se,B({type:"PageSideHeader"},u)):e.header),e.subHeader&&e.subHeader,(e.toolbar||i)&&(null!=(r=e.toolbar)?r:/*#__PURE__*/m(be,B({},a))),(e.subToolbar||s)&&(null!=(n=e.subToolbar)?n:/*#__PURE__*/m(be,B({},c))),e.content&&/*#__PURE__*/d("div",{className:p("PageSide-content container"),children:[e.loading&&/*#__PURE__*/m(H,{}),e.content]}),e.footer&&/*#__PURE__*/m("div",{children:"Footer"})]}))]}),e.rightSidebarContent&&/*#__PURE__*/m("div",{children:"rightSidebarContent"})]})}Ce.propTypes={contentWrapperProps:h.object,leftSidebarContent:h.node,leftSidebarVariant:h.node,rightSidebarContent:h.node,rightSidebarVariant:h.node,header:h.oneOfType([h.node,h.bool]),subHeader:h.node,toolbar:h.node,toolbarProps:h.object,leftToolbarItems:h.array,centerToolbarItems:h.array,rightToolbarItems:h.array,subToolbar:h.node,subToolbarProps:h.object,leftSubToolbarItems:h.array,centerSubToolbarItems:h.array,rightSubToolbarItems:h.array,content:h.node,scroll:h.oneOf(["normal","page","content"]),leftSidebarOpen:h.bool,rightSidebarOpen:h.bool,leftSidebarWidth:h.number,rightSidebarWidth:h.number,rightSidebarOnClose:h.func,leftSidebarOnClose:h.func},Ce.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var we=A();function xe(e){s(function(){return P(e,(e,t)=>we.on(t,e)),function(){P(e,(e,t)=>delete we[t])}},[we,e])}export{Se as Component,ue as ContextMenu,U as FuseSvgIcon,ee as Layout,Ce as PageSide,be as Toolbar,de as ToolbarItem,K as Tooltip,Ie as components,we as emitter,Z as layoutComponents,ye as registerComponent,_ as registerLayout,xe as useEvents};
//# sourceMappingURL=index.js.map
