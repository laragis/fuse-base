import e,{memo as r,forwardRef as t,useRef as n,useImperativeHandle as o,useState as i,useMemo as a,useCallback as l,useEffect as c}from"react";import s from"@tippyjs/react";import{jsx as u,jsxs as m,Fragment as f}from"react/jsx-runtime";import d from"clsx";import*as p from"prop-types";import h from"prop-types";import{styled as b}from"@mui/material/styles";import{Box as g}from"@mui/system";import v from"@mui/material/Icon";import{includes as y,replace as I,some as S,isEmpty as T,isBoolean as w,pick as x}from"lodash";import{Box as C,MenuItem as P,ListItemIcon as O,ListItemText as z,Divider as N,Menu as j,IconButton as k,Stack as M}from"@mui/material";import W from"zustand";import E from"immer";import{createNanoEvents as A}from"nanoevents";import F from"@mui/material/Menu";import{ChevronRight as H}from"@mui/icons-material";function D(){return D=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},D.apply(this,arguments)}function L(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function Y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var B=["title","children"];function R(e){var r=e.title,t=e.children,n=L(e,B);if(!r)return t;var o=D({theme:"light",animation:"scale",content:r,trigger:"mouseenter"},n);/*#__PURE__*/return u(s,D({},o,{children:t}))}var X=/*#__PURE__*/r(R),V=["theme"],K=["children","className","size"],U=b(g)(function(e){var r=e.theme,t=L(e,V);return{width:t.size,height:t.size,minWidth:t.size,minHeight:t.size,fontSize:t.size,lineHeight:t.size,color:{primary:r.palette.primary.main,secondary:r.palette.secondary.main,info:r.palette.info.main,success:r.palette.success.main,warning:r.palette.warning.main,action:r.palette.action.active,error:r.palette.error.main,disabled:r.palette.action.disabled,inherit:void 0}[t.color]}}),$=/*#__PURE__*/t(function(e,r){if(!e.children.includes(":"))/*#__PURE__*/return u(v,D({ref:r},e));var t=e.children.replace(":",".svg#");/*#__PURE__*/return u(U,D({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:d("shrink-0 fill-current ",e.className),ref:r,size:e.size,sx:e.sx,color:e.color,children:/*#__PURE__*/u("use",{xlinkHref:"assets/icons/"+t})}))});function q(e){var r=e.children,t=e.className,n=e.size,o=L(e,K),i={children:r};return r&&y(r,"fontawesome-")&&(i.children=void 0,i.baseClassName="",i.className=I(r,"fontawesome-","fa-"),i.className=I(i.className,":"," fa-"),i.className=["w-inherit",i.className,t].join(" "),n&&(i.sx={width:n,height:n,minWidth:n,minHeight:n,fontSize:n})),t&&S(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],function(e){return y(t,e)})&&(i.baseClassName=""),/*#__PURE__*/u($,D({className:t},i,{size:n},o))}$.propTypes={children:h.string,size:h.oneOfType([h.number,h.string]),sx:h.object,color:h.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},$.defaultProps={children:"",size:24,sx:{},color:"inherit"};var G={};function J(e,r){G[e]=r}function Q(e){var r=G[e.name];return r?/*#__PURE__*/u(r,D({},e)):/*#__PURE__*/u(C,{p:2,children:"Not Found"})}var Z=["leftIcon","rightIcon","label","MenuItemProps","className"],_=b(P)({}),ee=/*#__PURE__*/t(function(e,r){var t=e.leftIcon,n=e.rightIcon,o=e.label,i=e.className,a=L(e,Z);/*#__PURE__*/return m(_,D({ref:r,className:i},a,{children:[t&&/*#__PURE__*/u(O,{children:t}),/*#__PURE__*/u(z,{children:o}),n&&/*#__PURE__*/u(O,{className:"flex justify-end",children:n})]}))}),re=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],te=["ref"],ne=/*#__PURE__*/e.forwardRef(function(e,r){var t=e.parentMenuOpen,a=e.label,l=e.rightIcon,c=void 0===l?/*#__PURE__*/u(H,{color:"disabled",fontSize:"small"}):l,s=e.leftIcon,f=void 0===s?null:s,d=e.children,p=e.className,h=e.tabIndex,b=e.ContainerProps,g=void 0===b?{}:b,v=L(e,re),y=g.ref,I=L(g,te),S=n(null);o(r,function(){return S.current});var T=n(null);o(y,function(){return T.current});var w,x=n(null),C=i(!1),P=C[1],O=function(){for(var e,r=T.current.ownerDocument.activeElement,t=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return Y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y(e,r):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(x.current.children);!(e=t()).done;)if(e.value===r)return!0;return!1},z=C[0]&&t;return e.disabled||(w=void 0!==h?h:-1),/*#__PURE__*/m("div",D({},I,{ref:T,onFocus:function(e){e.target===T.current&&P(!0),I.onFocus&&I.onFocus(e)},tabIndex:w,onMouseEnter:function(e){P(!0),I.onMouseEnter&&I.onMouseEnter(e)},onMouseLeave:function(e){P(!1),I.onMouseLeave&&I.onMouseLeave(e)},onKeyDown:function(e){if("Escape"!==e.key){O()&&e.stopPropagation();var r=T.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&O()&&T.current.focus(),"ArrowRight"===e.key&&e.target===T.current&&e.target===r&&x.current.children[0].focus()}},children:[/*#__PURE__*/u(ee,{MenuItemProps:v,className:p,ref:S,leftIcon:f,rightIcon:c,label:a}),/*#__PURE__*/u(F,{style:{pointerEvents:"none"},anchorEl:S.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:z,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){P(!1)},children:/*#__PURE__*/u("div",{ref:x,style:{pointerEvents:"auto"},children:d})})]}))}),oe=["divider"],ie=["items","callback"];function ae(e){var r=e.onClose,t=e.open;return e.items.map(function(e,n){var o=e.divider,i=L(e,oe);if(o)/*#__PURE__*/return u(N,{sx:{my:.5}},n);var a=i.items,l=i.callback,c=L(i,ie);return a&&a.length>0?/*#__PURE__*/u(ne,D({},c,{parentMenuOpen:t,children:/*#__PURE__*/u(ae,{open:t,items:a,onClose:r})}),n):/*#__PURE__*/u(ee,D({},c,{onClick:function(){r(),l&&l()}}),n)})}function le(e){var r=e.position,t=e.items,o=e.children,s=e.onClose,f=n(null),d=i(null),p=d[0],h=d[1],b=a(function(){return null!==p},[p]),g=a(function(){return b?{top:p.mouseY,left:p.mouseX}:void 0},[b,p]),v=l(function(){s(),b&&h(null)},[b]);return c(function(){h(r)},[r]),/*#__PURE__*/m("div",{ref:f,onContextMenu:function(e){e.preventDefault(),h(null===p?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)},children:[/*#__PURE__*/u(j,{open:b,onClose:v,anchorReference:"anchorPosition",anchorPosition:g,disableAutoFocusItem:!0,children:!T(t)&&/*#__PURE__*/u(ae,{open:b,items:t,onClose:v})}),o]})}ae.propTypes={items:h.array},le.propTypes={items:h.array};var ce=["icon","label","visible","onClick","btnSize","iconSize","items","color"];function se(e){var r=e.icon,t=e.label,n=e.visible,o=void 0===n||n,l=e.onClick,c=e.btnSize,s=e.iconSize,d=e.items,p=void 0===d?[]:d,h=e.color;L(e,ce);var b=w(e.tooltip)?t:e.tooltip,g=a(function(){return o&&r},[o,r]),v=i(null),y=v[0],I=v[1],S=Boolean(y),x=function(e,r){I(null),r&&r()},C=g&&/*#__PURE__*/u(k,{size:c,onClick:function(e){return T(p)?l&&l(e):I(e.currentTarget)},color:h,children:r&&/*#__PURE__*/u(q,{size:s,children:r})}),N=g&&!T(p)&&/*#__PURE__*/u(j,{open:S,anchorEl:y,onClose:function(e){return x()},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:p.map(function(e,r){/*#__PURE__*/return m(P,{onClick:function(r){return x(0,e.onClick)},children:[e.icon&&/*#__PURE__*/u(O,{children:/*#__PURE__*/u(q,{children:e.icon})}),e.label&&/*#__PURE__*/u(z,{children:e.label})]},r)})});/*#__PURE__*/return m(f,b&&g?{children:[/*#__PURE__*/u(X,{title:b,children:C}),N]}:{children:[C,N]})}function ue(e){var r=e.sx,t=e.contentProps,n=e.leftItems,o=e.leftContentProps,i=e.centerItems,a=e.centerContentProps,l=e.rightItems,c=e.rightContentProps,s=x(e,["btnSize","iconSize"]);/*#__PURE__*/return m(M,{sx:r,direction:"row",justifyContent:"space-between",alignItems:"center",children:[/*#__PURE__*/u(M,D({direction:"row"},t,o,{children:n.length>0&&n.map(function(e,r){/*#__PURE__*/return u(se,D({},s,e),r)})})),/*#__PURE__*/u(M,D({direction:"row"},t,a,{children:i.length>0&&i.map(function(e,r){/*#__PURE__*/return u(se,D({},s,e),r)})})),/*#__PURE__*/u(M,D({direction:"row"},t,c,{children:l.length>0&&l.map(function(e,r){/*#__PURE__*/return u(se,D({},s,e),r)})}))]})}function me(e,r){if(Object.is(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e);if(t.length!==Object.keys(r).length)return!1;for(var n=0;n<t.length;n++)if(!Object.prototype.hasOwnProperty.call(r,t[n])||!Object.is(e[t[n]],r[t[n]]))return!1;return!0}se.defautProps={iconSize:18},ue.propTypes={leftItems:h.array,centerItems:h.array,rightItems:h.array},ue.defaultProps={sx:{p:1},contentProps:{spacing:.5},leftItems:[],centerItems:[],rightItems:[]};var fe=W(function(e){return{components:{},registerComponent:function(r,t){return e(E(function(e){e.components[r]=t}))}}}),de=fe.getState().components;function pe(e,r){fe.getState().registerComponent(e,r)}function he(e){var r=fe(function(r){return r.components[e.type]},me);return r?/*#__PURE__*/u(r,D({},e)):null}var be=["theme"],ge=b("div")(function(e){var r=e.theme,t=L(e,be);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:r.palette.background.paper,"& .PageSide-wrapper":D({display:"flex",flexDirection:"row",flex:"1 1 auto",minWidth:0,height:"100%"},"content"===t.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0}),"& .PageSide-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1 1 auto"},"& .PageSide-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",minHeight:0,overflowY:"auto"}}});function ve(e){var r,t,o;n(null),n(null),n(null);var i=a(function(){return S([e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems],function(e){return!T(e)})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),l=a(function(){return D({},e.toolbarProps,{leftItems:e.leftToolbarItems,centerItems:e.centerToolbarItems,rightItems:e.rightToolbarItems})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),c=a(function(){return S([e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems],function(e){return!T(e)})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),s=a(function(){return D({},e.subToolbarProps,{leftItems:e.leftSubToolbarItems,centerItems:e.centerSubToolbarItems,rightItems:e.rightSubToolbarItems})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),f={title:e.headerTitle};/*#__PURE__*/return m(ge,{className:d("PageSide-root","PageSide-scroll-"+e.scroll,e.className),scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[/*#__PURE__*/m("div",{className:"PageSide-wrapper",children:[e.leftSidebarContent&&/*#__PURE__*/u("div",{children:"leftSidebarContent"}),/*#__PURE__*/m(M,D({},e.contentWrapperProps,{className:d("PageSide-contentWrapper",null==(r=e.contentWrapperProps)?void 0:r.className),divider:/*#__PURE__*/u(N,{}),children:[e.header&&(w(e.header)?/*#__PURE__*/u(he,D({type:"PageSideHeader"},f)):e.header),e.subHeader&&e.subHeader,(e.toolbar||i)&&(null!=(t=e.toolbar)?t:/*#__PURE__*/u(ue,D({},l))),(e.subToolbar||c)&&(null!=(o=e.subToolbar)?o:/*#__PURE__*/u(ue,D({},s))),e.content&&/*#__PURE__*/u("div",{className:d("PageSide-content container"),children:e.content}),e.footer&&/*#__PURE__*/u("div",{children:"Footer"})]}))]}),e.rightSidebarContent&&/*#__PURE__*/u("div",{children:"rightSidebarContent"})]})}ve.propTypes={contentWrapperProps:p.object,leftSidebarContent:p.node,leftSidebarVariant:p.node,rightSidebarContent:p.node,rightSidebarVariant:p.node,header:p.oneOfType([p.node,p.bool]),subHeader:p.node,toolbar:p.node,toolbarProps:p.object,leftToolbarItems:p.array,centerToolbarItems:p.array,rightToolbarItems:p.array,subToolbar:p.node,subToolbarProps:p.object,leftSubToolbarItems:p.array,centerSubToolbarItems:p.array,rightSubToolbarItems:p.array,content:p.node,scroll:p.oneOf(["normal","page","content"]),leftSidebarOpen:p.bool,rightSidebarOpen:p.bool,leftSidebarWidth:p.number,rightSidebarWidth:p.number,rightSidebarOnClose:p.func,leftSidebarOnClose:p.func},ve.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var ye=A();export{he as Component,le as ContextMenu,q as FuseSvgIcon,Q as Layout,ve as PageSide,ue as Toolbar,se as ToolbarItem,X as Tooltip,de as components,ye as emitter,G as layoutComponents,pe as registerComponent,J as registerLayout};
//# sourceMappingURL=index.mjs.map
