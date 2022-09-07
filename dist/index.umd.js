!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@tippyjs/react"),require("clsx"),require("prop-types"),require("@mui/material/styles"),require("@mui/system"),require("@mui/material/Icon"),require("lodash"),require("@mui/material"),require("@mui/material/Menu"),require("@mui/icons-material")):"function"==typeof define&&define.amd?define(["exports","react","@tippyjs/react","clsx","prop-types","@mui/material/styles","@mui/system","@mui/material/Icon","lodash","@mui/material","@mui/material/Menu","@mui/icons-material"],t):t((e||self).fuseBase={},e.react,e.Tippy,e.clsx,e.propTypes,e.styles,e.system,e.Icon,e.lodash,e.material,e.Menu,e.iconsMaterial)}(this,function(e,t,n,r,a,o,i,l,u,s,c,f){function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=/*#__PURE__*/m(t),p=/*#__PURE__*/m(n),h=/*#__PURE__*/m(r),v=/*#__PURE__*/m(a),y=/*#__PURE__*/m(l),g=/*#__PURE__*/m(c);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=["title","children"],w=t.memo(function(e){var t=e.title,n=e.children,r=E(e,x);if(!t)return n;var a=b({theme:"light",animation:"scale",content:t,trigger:"mouseenter"},r);/*#__PURE__*/return d.default.createElement(p.default,a,n)}),M=["theme"],N=["children","className"],C=o.styled(i.Box)(function(e){var t=e.theme,n=E(e,M);return{width:n.size,height:n.size,minWidth:n.size,minHeight:n.size,fontSize:n.size,lineHeight:n.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[n.color]}}),O=t.forwardRef(function(e,t){if(!e.children.includes(":"))/*#__PURE__*/return d.default.createElement(y.default,b({ref:t},e));var n=e.children.replace(":",".svg#");/*#__PURE__*/return d.default.createElement(C,b({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:h.default("shrink-0 fill-current ",e.className),ref:t,size:e.size,sx:e.sx,color:e.color}),/*#__PURE__*/d.default.createElement("use",{xlinkHref:"assets/icons/"+n}))});O.propTypes={children:v.default.string,size:v.default.oneOfType([v.default.number,v.default.string]),sx:v.default.object,color:v.default.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},O.defaultProps={children:"",size:24,sx:{},color:"inherit"};var j={},z=["leftIcon","rightIcon","label","MenuItemProps","className"],k=o.styled(s.MenuItem)({}),R=t.forwardRef(function(e,t){var n=e.leftIcon,r=e.rightIcon,a=e.label,o=e.className,i=E(e,z);/*#__PURE__*/return d.default.createElement(k,b({ref:t,className:o},i),n&&/*#__PURE__*/d.default.createElement(s.ListItemIcon,null,n),/*#__PURE__*/d.default.createElement(s.ListItemText,null,a),r&&/*#__PURE__*/d.default.createElement(s.ListItemIcon,{className:"flex justify-end"},r))}),q=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],T=["ref"],A=d.default.forwardRef(function(e,n){var r=e.parentMenuOpen,a=e.label,o=e.rightIcon,i=void 0===o?/*#__PURE__*/d.default.createElement(f.ChevronRight,{color:"disabled",fontSize:"small"}):o,l=e.leftIcon,u=void 0===l?null:l,s=e.children,c=e.className,m=e.tabIndex,p=e.ContainerProps,h=void 0===p?{}:p,v=E(e,q),y=h.ref,x=E(h,T),w=t.useRef(null);t.useImperativeHandle(n,function(){return w.current});var M=t.useRef(null);t.useImperativeHandle(y,function(){return M.current});var N,C=t.useRef(null),O=t.useState(!1),j=O[1],z=function(){for(var e,t=M.current.ownerDocument.activeElement,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(C.current.children);!(e=n()).done;)if(e.value===t)return!0;return!1},k=O[0]&&r;return e.disabled||(N=void 0!==m?m:-1),/*#__PURE__*/d.default.createElement("div",b({},x,{ref:M,onFocus:function(e){e.target===M.current&&j(!0),x.onFocus&&x.onFocus(e)},tabIndex:N,onMouseEnter:function(e){j(!0),x.onMouseEnter&&x.onMouseEnter(e)},onMouseLeave:function(e){j(!1),x.onMouseLeave&&x.onMouseLeave(e)},onKeyDown:function(e){if("Escape"!==e.key){z()&&e.stopPropagation();var t=M.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&z()&&M.current.focus(),"ArrowRight"===e.key&&e.target===M.current&&e.target===t&&C.current.children[0].focus()}}}),/*#__PURE__*/d.default.createElement(R,{MenuItemProps:v,className:c,ref:w,leftIcon:u,rightIcon:i,label:a}),/*#__PURE__*/d.default.createElement(g.default,{style:{pointerEvents:"none"},anchorEl:w.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:k,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){j(!1)}},/*#__PURE__*/d.default.createElement("div",{ref:C,style:{pointerEvents:"auto"}},s)))}),S=["divider"],F=["items","callback"];function L(e){var t=e.onClose,n=e.open;return e.items.map(function(e,r){var a=e.divider,o=E(e,S);if(a)/*#__PURE__*/return d.default.createElement(s.Divider,{key:r,sx:{my:.5}});var i=o.items,l=o.callback,u=E(o,F);return i&&i.length>0?/*#__PURE__*/d.default.createElement(A,b({key:r},u,{parentMenuOpen:n}),/*#__PURE__*/d.default.createElement(L,{open:n,items:i,onClose:t})):/*#__PURE__*/d.default.createElement(R,b({key:r},u,{onClick:function(){t(),l&&l()}}))})}function P(e){var n=e.position,r=e.items,a=e.children,o=e.onClose,i=t.useRef(null),l=t.useState(null),c=l[0],f=l[1],m=t.useMemo(function(){return null!==c},[c]),p=t.useMemo(function(){return m?{top:c.mouseY,left:c.mouseX}:void 0},[m,c]),h=t.useCallback(function(){o(),m&&f(null)},[m]);return t.useEffect(function(){f(n)},[n]),/*#__PURE__*/d.default.createElement("div",{ref:i,onContextMenu:function(e){e.preventDefault(),f(null===c?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)}},/*#__PURE__*/d.default.createElement(s.Menu,{open:m,onClose:h,anchorReference:"anchorPosition",anchorPosition:p,disableAutoFocusItem:!0},!u.isEmpty(r)&&/*#__PURE__*/d.default.createElement(L,{open:m,items:r,onClose:h})),a)}L.propTypes={items:v.default.array},P.propTypes={items:v.default.array},e.ContextMenu=P,e.FuseSvgIcon=function(e){var t=e.children,n=e.className,r=E(e,N),a={children:t};return t&&u.includes(t,"fontawesome-")&&(a.children=void 0,a.baseClassName="",a.className=u.replace(t,"fontawesome-","fa-"),a.className=u.replace(a.className,":"," fa-"),a.className=["w-inherit",a.className,n].join(" ")),n&&u.some(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],function(e){return u.includes(n,e)})&&(a.baseClassName=""),/*#__PURE__*/d.default.createElement(O,b({className:n},a,r))},e.Layout=function(e){var t=j[e.name];return t?/*#__PURE__*/React.createElement(t,e):/*#__PURE__*/React.createElement(s.Box,{p:2},"Not Found")},e.Tooltip=w,e.layoutComponents=j,e.registerLayout=function(e,t){j[e]=t}});
//# sourceMappingURL=index.umd.js.map
