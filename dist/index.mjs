import e,{memo as t,forwardRef as r,useRef as n,useImperativeHandle as o,useState as i,useMemo as a,useCallback as l,useEffect as c,isValidElement as s}from"react";import u from"@tippyjs/react";import{jsx as f,jsxs as m,Fragment as d}from"react/jsx-runtime";import p from"clsx";import*as h from"prop-types";import b from"prop-types";import{styled as g}from"@mui/material/styles";import{Box as v}from"@mui/system";import y from"@mui/material/Icon";import{includes as I,replace as S,some as T,isEmpty as C,isBoolean as w,pick as x,map as P}from"lodash";import{Box as O,MenuItem as z,ListItemIcon as N,ListItemText as j,Divider as k,Menu as M,IconButton as W,Stack as E,styled as A,LinearProgress as F}from"@mui/material";import H from"zustand";import D from"immer";import{createNanoEvents as R}from"nanoevents";import L from"@mui/material/Menu";import{ChevronRight as Y}from"@mui/icons-material";function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}function X(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var K=["title","children"];function U(e){var t=e.title,r=e.children,n=X(e,K);if(!t)return r;var o=B({theme:"light",animation:"scale",content:t,trigger:"mouseenter"},n);/*#__PURE__*/return f(u,B({},o,{children:r}))}var $=/*#__PURE__*/t(U),q=["theme"],G=["children","className","size"],J=g(v)(function(e){var t=e.theme,r=X(e,q);return{width:r.size,height:r.size,minWidth:r.size,minHeight:r.size,fontSize:r.size,lineHeight:r.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),Q=/*#__PURE__*/r(function(e,t){if(!e.children.includes(":"))/*#__PURE__*/return f(y,B({ref:t},e));var r=e.children.replace(":",".svg#");/*#__PURE__*/return f(J,B({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:p("shrink-0 fill-current ",e.className),ref:t,size:e.size,sx:e.sx,color:e.color,children:/*#__PURE__*/f("use",{xlinkHref:"assets/icons/"+r})}))});function Z(e){var t=e.children,r=e.className,n=e.size,o=X(e,G),i={children:t};return t&&I(t,"fontawesome-")&&(i.children=void 0,i.baseClassName="",i.className=S(t,"fontawesome-","fa-"),i.className=S(i.className,":"," fa-"),i.className=["w-inherit",i.className,r].join(" "),n&&(i.sx={width:n,height:n,minWidth:n,minHeight:n,fontSize:n})),r&&T(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],function(e){return I(r,e)})&&(i.baseClassName=""),/*#__PURE__*/f(Q,B({className:r},i,{size:n},o))}Q.propTypes={children:b.string,size:b.oneOfType([b.number,b.string]),sx:b.object,color:b.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},Q.defaultProps={children:"",size:24,sx:{},color:"inherit"};var _={};function ee(e,t){_[e]=t}function te(e){var t=_[e.name];return t?/*#__PURE__*/f(t,B({},e)):/*#__PURE__*/f(O,{p:2,children:"Not Found"})}var re=["leftIcon","rightIcon","label","MenuItemProps","className"],ne=g(z)({}),oe=/*#__PURE__*/r(function(e,t){var r=e.leftIcon,n=e.rightIcon,o=e.label,i=e.className,a=X(e,re);/*#__PURE__*/return m(ne,B({ref:t,className:i},a,{children:[r&&/*#__PURE__*/f(N,{children:r}),/*#__PURE__*/f(j,{children:o}),n&&/*#__PURE__*/f(N,{className:"flex justify-end",children:n})]}))}),ie=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],ae=["ref"],le=/*#__PURE__*/e.forwardRef(function(e,t){var r=e.parentMenuOpen,a=e.label,l=e.rightIcon,c=void 0===l?/*#__PURE__*/f(Y,{color:"disabled",fontSize:"small"}):l,s=e.leftIcon,u=void 0===s?null:s,d=e.children,p=e.className,h=e.tabIndex,b=e.ContainerProps,g=void 0===b?{}:b,v=X(e,ie),y=g.ref,I=X(g,ae),S=n(null);o(t,function(){return S.current});var T=n(null);o(y,function(){return T.current});var C,w=n(null),x=i(!1),P=x[1],O=function(){for(var e,t=T.current.ownerDocument.activeElement,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}(e))){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(w.current.children);!(e=r()).done;)if(e.value===t)return!0;return!1},z=x[0]&&r;return e.disabled||(C=void 0!==h?h:-1),/*#__PURE__*/m("div",B({},I,{ref:T,onFocus:function(e){e.target===T.current&&P(!0),I.onFocus&&I.onFocus(e)},tabIndex:C,onMouseEnter:function(e){P(!0),I.onMouseEnter&&I.onMouseEnter(e)},onMouseLeave:function(e){P(!1),I.onMouseLeave&&I.onMouseLeave(e)},onKeyDown:function(e){if("Escape"!==e.key){O()&&e.stopPropagation();var t=T.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&O()&&T.current.focus(),"ArrowRight"===e.key&&e.target===T.current&&e.target===t&&w.current.children[0].focus()}},children:[/*#__PURE__*/f(oe,{MenuItemProps:v,className:p,ref:S,leftIcon:u,rightIcon:c,label:a}),/*#__PURE__*/f(L,{style:{pointerEvents:"none"},anchorEl:S.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:z,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){P(!1)},children:/*#__PURE__*/f("div",{ref:w,style:{pointerEvents:"auto"},children:d})})]}))}),ce=["divider"],se=["items","callback"];function ue(e){var t=e.onClose,r=e.open;return e.items.map(function(e,n){var o=e.divider,i=X(e,ce);if(o)/*#__PURE__*/return f(k,{sx:{my:.5}},n);var a=i.items,l=i.callback,c=X(i,se);return a&&a.length>0?/*#__PURE__*/f(le,B({},c,{parentMenuOpen:r,children:/*#__PURE__*/f(ue,{open:r,items:a,onClose:t})}),n):/*#__PURE__*/f(oe,B({},c,{onClick:function(){t(),l&&l()}}),n)})}function fe(e){var t=e.position,r=e.items,o=e.children,s=e.onClose,u=n(null),d=i(null),p=d[0],h=d[1],b=a(function(){return null!==p},[p]),g=a(function(){return b?{top:p.mouseY,left:p.mouseX}:void 0},[b,p]),v=l(function(){s(),b&&h(null)},[b]);return c(function(){h(t)},[t]),/*#__PURE__*/m("div",{ref:u,onContextMenu:function(e){e.preventDefault(),h(null===p?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)},children:[/*#__PURE__*/f(M,{open:b,onClose:v,anchorReference:"anchorPosition",anchorPosition:g,disableAutoFocusItem:!0,children:!C(r)&&/*#__PURE__*/f(ue,{open:b,items:r,onClose:v})}),o]})}ue.propTypes={items:b.array},fe.propTypes={items:b.array};var me=["icon","label","visible","onClick","btnSize","iconSize","items","color"];function de(e){var t=e.icon,r=e.label,n=e.visible,o=void 0===n||n,l=e.onClick,c=e.btnSize,s=e.iconSize,u=e.items,p=void 0===u?[]:u,h=e.color;X(e,me);var b=w(e.tooltip)?r:e.tooltip,g=a(function(){return o&&t},[o,t]),v=i(null),y=v[0],I=v[1],S=Boolean(y),T=function(e,t){I(null),t&&t()},x=g&&/*#__PURE__*/f(W,{size:c,onClick:function(e){return C(p)?l&&l(e):I(e.currentTarget)},color:h,children:t&&/*#__PURE__*/f(Z,{size:s,children:t})}),P=g&&!C(p)&&/*#__PURE__*/f(M,{open:S,anchorEl:y,onClose:function(e){return T()},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:p.map(function(e,t){/*#__PURE__*/return m(z,{onClick:function(t){return T(0,e.onClick)},children:[e.icon&&/*#__PURE__*/f(N,{children:/*#__PURE__*/f(Z,{children:e.icon})}),e.label&&/*#__PURE__*/f(j,{children:e.label})]},t)})});/*#__PURE__*/return m(d,b&&g?{children:[/*#__PURE__*/f($,{title:b,children:x}),P]}:{children:[x,P]})}function pe(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}de.defautProps={iconSize:18};var he=["case","defaultCase"];function be(e){var t,r=e.case,n=e.defaultCase,o=X(e,he);/*#__PURE__*/return s(r)?r:function(e){return"function"==typeof e&&!!e.prototype.isReactComponent}(t=r)||function(e){return"function"==typeof e&&String(e).includes("return React.createElement")}(t)?/*#__PURE__*/f(r,{}):/*#__PURE__*/f(n,B({},o,r))}function ge(e){var t=e.sx,r=e.contentProps,n=e.leftItems,o=e.leftContentProps,i=e.centerItems,a=e.centerContentProps,l=e.rightItems,c=e.rightContentProps,s=x(e,["btnSize","iconSize"]);/*#__PURE__*/return m(E,{sx:t,direction:"row",justifyContent:"space-between",alignItems:"center",children:[/*#__PURE__*/f(E,B({direction:"row"},r,o,{children:n.length>0&&n.map(function(e,t){/*#__PURE__*/return f(be,B({case:e,defaultCase:de},s),t)})})),/*#__PURE__*/f(E,B({direction:"row"},r,a,{children:i.length>0&&i.map(function(e,t){/*#__PURE__*/return f(be,B({case:e,defaultCase:de},s),t)})})),/*#__PURE__*/f(E,B({direction:"row"},r,c,{children:l.length>0&&l.map(function(e,t){/*#__PURE__*/return f(be,B({case:e,defaultCase:de},s),t)})}))]})}ge.propTypes={leftItems:b.array,centerItems:b.array,rightItems:b.array},ge.defaultProps={sx:{p:1},contentProps:{spacing:.5},leftItems:[],centerItems:[],rightItems:[]};var ve=H(function(e){return{components:{},registerComponent:function(t,r){return e(D(function(e){e.components[t]=r}))}}}),ye=ve.getState().components;function Ie(e,t){ve.getState().registerComponent(e,t)}function Se(e){var t=ve(function(t){return t.components[e.type]},pe);return t?/*#__PURE__*/f(t,B({},e)):null}var Te=["theme"],Ce=A("div")(function(e){var t=e.theme,r=X(e,Te);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.paper,"& .PageSide-wrapper":B({display:"flex",flexDirection:"row",flex:"1 1 auto",minWidth:0,height:"100%"},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0}),"& .PageSide-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1 1 auto"},"& .PageSide-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",minHeight:0,overflowY:"auto",backgroundColor:t.palette.background.default}}});function we(e){var t,r,o,i;n(null),n(null),n(null);var l=a(function(){return T([e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems],function(e){return!C(e)})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),c=a(function(){return B({},e.toolbarProps,{leftItems:e.leftToolbarItems,centerItems:e.centerToolbarItems,rightItems:e.rightToolbarItems})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),s=a(function(){return T([e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems],function(e){return!C(e)})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),u=a(function(){return B({},e.subToolbarProps,{leftItems:e.leftSubToolbarItems,centerItems:e.centerSubToolbarItems,rightItems:e.rightSubToolbarItems})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),d={title:e.headerTitle};/*#__PURE__*/return m(Ce,{className:p("PageSide-root","PageSide-scroll-"+e.scroll,e.className),scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[/*#__PURE__*/m("div",{className:"PageSide-wrapper",children:[e.leftSidebarContent&&/*#__PURE__*/f("div",{children:"leftSidebarContent"}),/*#__PURE__*/m(E,B({},e.contentWrapperProps,{className:p("PageSide-contentWrapper",null==(t=e.contentWrapperProps)?void 0:t.className),divider:/*#__PURE__*/f(k,{}),children:[e.header&&(w(e.header)?/*#__PURE__*/f(Se,B({type:"PageSideHeader"},d)):e.header),e.subHeader&&e.subHeader,(e.toolbar||l)&&(null!=(r=e.toolbar)?r:/*#__PURE__*/f(ge,B({},c))),(e.subToolbar||s)&&(null!=(o=e.subToolbar)?o:/*#__PURE__*/f(ge,B({},u))),e.content&&/*#__PURE__*/m("div",{className:p(p("PageSide-content container",null==(i=e.contentProps)?void 0:i.className)),children:[e.loading&&/*#__PURE__*/f(F,{}),e.content]}),e.footer&&/*#__PURE__*/f("div",{children:"Footer"})]}))]}),e.rightSidebarContent&&/*#__PURE__*/f("div",{children:"rightSidebarContent"})]})}we.propTypes={contentWrapperProps:h.object,leftSidebarContent:h.node,leftSidebarVariant:h.node,rightSidebarContent:h.node,rightSidebarVariant:h.node,header:h.oneOfType([h.node,h.bool]),subHeader:h.node,toolbar:h.node,toolbarProps:h.object,leftToolbarItems:h.array,centerToolbarItems:h.array,rightToolbarItems:h.array,subToolbar:h.node,subToolbarProps:h.object,leftSubToolbarItems:h.array,centerSubToolbarItems:h.array,rightSubToolbarItems:h.array,content:h.node,scroll:h.oneOf(["normal","page","content"]),leftSidebarOpen:h.bool,rightSidebarOpen:h.bool,leftSidebarWidth:h.number,rightSidebarWidth:h.number,rightSidebarOnClose:h.func,leftSidebarOnClose:h.func},we.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var xe=R();function Pe(e){c(function(){return P(e,function(e,t){return xe.on(t,e)}),function(){P(e,function(e,t){return delete xe[t]})}},[xe,e])}export{Se as Component,fe as ContextMenu,Z as FuseSvgIcon,te as Layout,we as PageSide,ge as Toolbar,de as ToolbarItem,$ as Tooltip,ye as components,xe as emitter,_ as layoutComponents,Ie as registerComponent,ee as registerLayout,Pe as useEvents};
//# sourceMappingURL=index.mjs.map
