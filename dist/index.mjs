import e,{memo as n,forwardRef as t,useRef as r,useImperativeHandle as o,useState as i,useMemo as a,useCallback as l,useEffect as c}from"react";import s from"@tippyjs/react";import u from"clsx";import m from"prop-types";import{styled as f}from"@mui/material/styles";import{Box as p}from"@mui/system";import d from"@mui/material/Icon";import{includes as h,replace as v,some as y,isEmpty as g}from"lodash";import{Box as b,MenuItem as E,ListItemIcon as w,ListItemText as I,Divider as N,Menu as x}from"@mui/material";import z from"@mui/material/Menu";import{ChevronRight as M}from"@mui/icons-material";function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var j=["title","children"],A=n(function(n){var t=n.title,r=n.children,o=C(n,j);if(!t)return r;var i=O({theme:"light",animation:"scale",content:t,trigger:"mouseenter"},o);/*#__PURE__*/return e.createElement(s,i,r)}),F=["theme"],P=["children","className","size"],S=f(p)(function(e){var n=e.theme,t=C(e,F);return{width:t.size,height:t.size,minWidth:t.size,minHeight:t.size,fontSize:t.size,lineHeight:t.size,color:{primary:n.palette.primary.main,secondary:n.palette.secondary.main,info:n.palette.info.main,success:n.palette.success.main,warning:n.palette.warning.main,action:n.palette.action.active,error:n.palette.error.main,disabled:n.palette.action.disabled,inherit:void 0}[t.color]}}),T=t(function(n,t){if(!n.children.includes(":"))/*#__PURE__*/return e.createElement(d,O({ref:t},n));var r=n.children.replace(":",".svg#");/*#__PURE__*/return e.createElement(S,O({},n,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:u("shrink-0 fill-current ",n.className),ref:t,size:n.size,sx:n.sx,color:n.color}),/*#__PURE__*/e.createElement("use",{xlinkHref:"assets/icons/"+r}))});function R(n){var t=n.children,r=n.className,o=n.size,i=C(n,P),a={children:t};return t&&h(t,"fontawesome-")&&(a.children=void 0,a.baseClassName="",a.className=v(t,"fontawesome-","fa-"),a.className=v(a.className,":"," fa-"),a.className=["w-inherit",a.className,r].join(" "),o&&(a.sx={width:o,height:o,minWidth:o,minHeight:o,fontSize:o})),r&&y(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],function(e){return h(r,e)})&&(a.baseClassName=""),/*#__PURE__*/e.createElement(T,O({className:r},a,{size:o},i))}T.propTypes={children:m.string,size:m.oneOfType([m.number,m.string]),sx:m.object,color:m.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},T.defaultProps={children:"",size:24,sx:{},color:"inherit"};var D={};function H(e,n){D[e]=n}function L(e){var n=D[e.name];return n?/*#__PURE__*/React.createElement(n,e):/*#__PURE__*/React.createElement(b,{p:2},"Not Found")}var X=["leftIcon","rightIcon","label","MenuItemProps","className"],Y=f(E)({}),B=t(function(n,t){var r=n.leftIcon,o=n.rightIcon,i=n.label,a=n.className,l=C(n,X);/*#__PURE__*/return e.createElement(Y,O({ref:t,className:a},l),r&&/*#__PURE__*/e.createElement(w,null,r),/*#__PURE__*/e.createElement(I,null,i),o&&/*#__PURE__*/e.createElement(w,{className:"flex justify-end"},o))}),W=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],K=["ref"],U=e.forwardRef(function(n,t){var a=n.parentMenuOpen,l=n.label,c=n.rightIcon,s=void 0===c?/*#__PURE__*/e.createElement(M,{color:"disabled",fontSize:"small"}):c,u=n.leftIcon,m=void 0===u?null:u,f=n.children,p=n.className,d=n.tabIndex,h=n.ContainerProps,v=void 0===h?{}:h,y=C(n,W),g=v.ref,b=C(v,K),E=r(null);o(t,function(){return E.current});var w=r(null);o(g,function(){return w.current});var I,N=r(null),x=i(!1),j=x[1],A=function(){for(var e,n=w.current.ownerDocument.activeElement,t=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return k(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(e,n):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(N.current.children);!(e=t()).done;)if(e.value===n)return!0;return!1},F=x[0]&&a;return n.disabled||(I=void 0!==d?d:-1),/*#__PURE__*/e.createElement("div",O({},b,{ref:w,onFocus:function(e){e.target===w.current&&j(!0),b.onFocus&&b.onFocus(e)},tabIndex:I,onMouseEnter:function(e){j(!0),b.onMouseEnter&&b.onMouseEnter(e)},onMouseLeave:function(e){j(!1),b.onMouseLeave&&b.onMouseLeave(e)},onKeyDown:function(e){if("Escape"!==e.key){A()&&e.stopPropagation();var n=w.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&A()&&w.current.focus(),"ArrowRight"===e.key&&e.target===w.current&&e.target===n&&N.current.children[0].focus()}}}),/*#__PURE__*/e.createElement(B,{MenuItemProps:y,className:p,ref:E,leftIcon:m,rightIcon:s,label:l}),/*#__PURE__*/e.createElement(z,{style:{pointerEvents:"none"},anchorEl:E.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:F,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){j(!1)}},/*#__PURE__*/e.createElement("div",{ref:N,style:{pointerEvents:"auto"}},f)))}),$=["divider"],q=["items","callback"];function G(n){var t=n.onClose,r=n.open;return n.items.map(function(n,o){var i=n.divider,a=C(n,$);if(i)/*#__PURE__*/return e.createElement(N,{key:o,sx:{my:.5}});var l=a.items,c=a.callback,s=C(a,q);return l&&l.length>0?/*#__PURE__*/e.createElement(U,O({key:o},s,{parentMenuOpen:r}),/*#__PURE__*/e.createElement(G,{open:r,items:l,onClose:t})):/*#__PURE__*/e.createElement(B,O({key:o},s,{onClick:function(){t(),c&&c()}}))})}function J(n){var t=n.position,o=n.items,s=n.children,u=n.onClose,m=r(null),f=i(null),p=f[0],d=f[1],h=a(function(){return null!==p},[p]),v=a(function(){return h?{top:p.mouseY,left:p.mouseX}:void 0},[h,p]),y=l(function(){u(),h&&d(null)},[h]);return c(function(){d(t)},[t]),/*#__PURE__*/e.createElement("div",{ref:m,onContextMenu:function(e){e.preventDefault(),d(null===p?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)}},/*#__PURE__*/e.createElement(x,{open:h,onClose:y,anchorReference:"anchorPosition",anchorPosition:v,disableAutoFocusItem:!0},!g(o)&&/*#__PURE__*/e.createElement(G,{open:h,items:o,onClose:y})),s)}G.propTypes={items:m.array},J.propTypes={items:m.array};export{J as ContextMenu,R as FuseSvgIcon,L as Layout,A as Tooltip,D as layoutComponents,H as registerLayout};
//# sourceMappingURL=index.mjs.map
