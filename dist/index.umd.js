!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@tippyjs/react"),require("react/jsx-runtime"),require("clsx"),require("prop-types"),require("@mui/material/styles"),require("@mui/system"),require("@mui/material/Icon"),require("lodash"),require("@mui/material"),require("zustand"),require("immer"),require("nanoevents"),require("@mui/material/Menu"),require("@mui/icons-material")):"function"==typeof define&&define.amd?define(["exports","react","@tippyjs/react","react/jsx-runtime","clsx","prop-types","@mui/material/styles","@mui/system","@mui/material/Icon","lodash","@mui/material","zustand","immer","nanoevents","@mui/material/Menu","@mui/icons-material"],t):t((e||self).fuseBase={},e.react,e.Tippy,e.jsxRuntime,e.clsx,e.propTypes,e.styles,e.system,e.Icon,e.lodash,e.material,e.zustand,e.immer,e.nanoevents,e.Menu,e.iconsMaterial)}(this,function(e,t,r,n,o,i,a,s,l,c,u,f,d,m,p,h){function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function g(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,t}var v=/*#__PURE__*/b(t),x=/*#__PURE__*/b(r),y=/*#__PURE__*/b(o),j=/*#__PURE__*/b(i),I=/*#__PURE__*/g(i),S=/*#__PURE__*/b(l),T=/*#__PURE__*/b(f),C=/*#__PURE__*/b(d),w=/*#__PURE__*/b(p);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=["title","children"];function k(e){var t=e.title,r=e.children,o=O(e,M);if(!t)return r;var i=P({theme:"light",animation:"scale",content:t,trigger:"mouseenter"},o);/*#__PURE__*/return n.jsx(x.default,P({},i,{children:r}))}var N=/*#__PURE__*/t.memo(k),E=["theme"],R=["children","className","size"],q=a.styled(s.Box)(function(e){var t=e.theme,r=O(e,E);return{width:r.size,height:r.size,minWidth:r.size,minHeight:r.size,fontSize:r.size,lineHeight:r.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),W=/*#__PURE__*/t.forwardRef(function(e,t){if(!e.children.includes(":"))/*#__PURE__*/return n.jsx(S.default,P({ref:t},e));var r=e.children.replace(":",".svg#");/*#__PURE__*/return n.jsx(q,P({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:y.default("shrink-0 fill-current ",e.className),ref:t,size:e.size,sx:e.sx,color:e.color,children:/*#__PURE__*/n.jsx("use",{xlinkHref:"assets/icons/"+r})}))});function H(e){var t=e.children,r=e.className,o=e.size,i=O(e,R),a={children:t};return t&&c.includes(t,"fontawesome-")&&(a.children=void 0,a.baseClassName="",a.className=c.replace(t,"fontawesome-","fa-"),a.className=c.replace(a.className,":"," fa-"),a.className=["w-inherit",a.className,r].join(" "),o&&(a.sx={width:o,height:o,minWidth:o,minHeight:o,fontSize:o})),r&&c.some(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],function(e){return c.includes(r,e)})&&(a.baseClassName=""),/*#__PURE__*/n.jsx(W,P({className:r},a,{size:o},i))}W.propTypes={children:j.default.string,size:j.default.oneOfType([j.default.number,j.default.string]),sx:j.default.object,color:j.default.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},W.defaultProps={children:"",size:24,sx:{},color:"inherit"};var L={},D=["leftIcon","rightIcon","label","MenuItemProps","className"],F=a.styled(u.MenuItem)({}),A=/*#__PURE__*/t.forwardRef(function(e,t){var r=e.leftIcon,o=e.rightIcon,i=e.label,a=e.className,s=O(e,D);/*#__PURE__*/return n.jsxs(F,P({ref:t,className:a},s,{children:[r&&/*#__PURE__*/n.jsx(u.ListItemIcon,{children:r}),/*#__PURE__*/n.jsx(u.ListItemText,{children:i}),o&&/*#__PURE__*/n.jsx(u.ListItemIcon,{className:"flex justify-end",children:o})]}))}),B=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],Y=["ref"],V=/*#__PURE__*/v.default.forwardRef(function(e,r){var o=e.parentMenuOpen,i=e.label,a=e.rightIcon,s=void 0===a?/*#__PURE__*/n.jsx(h.ChevronRight,{color:"disabled",fontSize:"small"}):a,l=e.leftIcon,c=void 0===l?null:l,u=e.children,f=e.className,d=e.tabIndex,m=e.ContainerProps,p=void 0===m?{}:m,b=O(e,B),g=p.ref,v=O(p,Y),x=t.useRef(null);t.useImperativeHandle(r,function(){return x.current});var y=t.useRef(null);t.useImperativeHandle(g,function(){return y.current});var j,I=t.useRef(null),S=t.useState(!1),T=S[1],C=function(){for(var e,t=y.current.ownerDocument.activeElement,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e))){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(I.current.children);!(e=r()).done;)if(e.value===t)return!0;return!1},M=S[0]&&o;return e.disabled||(j=void 0!==d?d:-1),/*#__PURE__*/n.jsxs("div",P({},v,{ref:y,onFocus:function(e){e.target===y.current&&T(!0),v.onFocus&&v.onFocus(e)},tabIndex:j,onMouseEnter:function(e){T(!0),v.onMouseEnter&&v.onMouseEnter(e)},onMouseLeave:function(e){T(!1),v.onMouseLeave&&v.onMouseLeave(e)},onKeyDown:function(e){if("Escape"!==e.key){C()&&e.stopPropagation();var t=y.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&C()&&y.current.focus(),"ArrowRight"===e.key&&e.target===y.current&&e.target===t&&I.current.children[0].focus()}},children:[/*#__PURE__*/n.jsx(A,{MenuItemProps:b,className:f,ref:x,leftIcon:c,rightIcon:s,label:i}),/*#__PURE__*/n.jsx(w.default,{style:{pointerEvents:"none"},anchorEl:x.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:M,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:function(){T(!1)},children:/*#__PURE__*/n.jsx("div",{ref:I,style:{pointerEvents:"auto"},children:u})})]}))}),X=["divider"],_=["items","callback"];function K(e){var t=e.onClose,r=e.open;return e.items.map(function(e,o){var i=e.divider,a=O(e,X);if(i)/*#__PURE__*/return n.jsx(u.Divider,{sx:{my:.5}},o);var s=a.items,l=a.callback,c=O(a,_);return s&&s.length>0?/*#__PURE__*/n.jsx(V,P({},c,{parentMenuOpen:r,children:/*#__PURE__*/n.jsx(K,{open:r,items:s,onClose:t})}),o):/*#__PURE__*/n.jsx(A,P({},c,{onClick:function(){t(),l&&l()}}),o)})}function U(e){var r=e.position,o=e.items,i=e.children,a=e.onClose,s=t.useRef(null),l=t.useState(null),f=l[0],d=l[1],m=t.useMemo(function(){return null!==f},[f]),p=t.useMemo(function(){return m?{top:f.mouseY,left:f.mouseX}:void 0},[m,f]),h=t.useCallback(function(){a(),m&&d(null)},[m]);return t.useEffect(function(){d(r)},[r]),/*#__PURE__*/n.jsxs("div",{ref:s,onContextMenu:function(e){e.preventDefault(),d(null===f?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)},children:[/*#__PURE__*/n.jsx(u.Menu,{open:m,onClose:h,anchorReference:"anchorPosition",anchorPosition:p,disableAutoFocusItem:!0,children:!c.isEmpty(o)&&/*#__PURE__*/n.jsx(K,{open:m,items:o,onClose:h})}),i]})}K.propTypes={items:j.default.array},U.propTypes={items:j.default.array};var $=["icon","label","visible","onClick","btnSize","iconSize","items","color"];function G(e){var r=e.icon,o=e.label,i=e.visible,a=void 0===i||i,s=e.onClick,l=e.btnSize,f=e.iconSize,d=e.items,m=void 0===d?[]:d,p=e.color;O(e,$);var h=c.isBoolean(e.tooltip)?o:e.tooltip,b=t.useMemo(function(){return a&&r},[a,r]),g=t.useState(null),v=g[0],x=g[1],y=Boolean(v),j=function(e,t){x(null),t&&t()},I=b&&/*#__PURE__*/n.jsx(u.IconButton,{size:l,onClick:function(e){return c.isEmpty(m)?s&&s(e):x(e.currentTarget)},color:p,children:r&&/*#__PURE__*/n.jsx(H,{size:f,children:r})}),S=b&&!c.isEmpty(m)&&/*#__PURE__*/n.jsx(u.Menu,{open:y,anchorEl:v,onClose:function(e){return j()},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:m.map(function(e,t){/*#__PURE__*/return n.jsxs(u.MenuItem,{onClick:function(t){return j(0,e.onClick)},children:[e.icon&&/*#__PURE__*/n.jsx(u.ListItemIcon,{children:/*#__PURE__*/n.jsx(H,{children:e.icon})}),e.label&&/*#__PURE__*/n.jsx(u.ListItemText,{children:e.label})]},t)})});/*#__PURE__*/return n.jsxs(n.Fragment,h&&b?{children:[/*#__PURE__*/n.jsx(N,{title:h,children:I}),S]}:{children:[I,S]})}function J(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}G.defautProps={iconSize:18};var Q=["case","defaultCase"];function Z(e){var r,o=e.case,i=e.defaultCase,a=O(e,Q);/*#__PURE__*/return t.isValidElement(o)?o:function(e){return"function"==typeof e&&!!e.prototype.isReactComponent}(r=o)||function(e){return"function"==typeof e&&String(e).includes("return React.createElement")}(r)?/*#__PURE__*/n.jsx(o,{}):/*#__PURE__*/n.jsx(i,P({},a,o))}function ee(e){var t=e.sx,r=e.contentProps,o=e.leftItems,i=e.leftContentProps,a=e.centerItems,s=e.centerContentProps,l=e.rightItems,f=e.rightContentProps,d=c.pick(e,["btnSize","iconSize"]);/*#__PURE__*/return n.jsxs(u.Stack,{sx:t,direction:"row",justifyContent:"space-between",alignItems:"center",children:[/*#__PURE__*/n.jsx(u.Stack,P({direction:"row"},r,i,{children:o.length>0&&o.map(function(e,t){/*#__PURE__*/return n.jsx(Z,P({case:e,defaultCase:G},d),t)})})),/*#__PURE__*/n.jsx(u.Stack,P({direction:"row"},r,s,{children:a.length>0&&a.map(function(e,t){/*#__PURE__*/return n.jsx(Z,P({case:e,defaultCase:G},d),t)})})),/*#__PURE__*/n.jsx(u.Stack,P({direction:"row"},r,f,{children:l.length>0&&l.map(function(e,t){/*#__PURE__*/return n.jsx(Z,P({case:e,defaultCase:G},d),t)})}))]})}ee.propTypes={leftItems:j.default.array,centerItems:j.default.array,rightItems:j.default.array},ee.defaultProps={sx:{p:1},contentProps:{spacing:.5},leftItems:[],centerItems:[],rightItems:[]};var te=T.default(function(e){return{components:{},registerComponent:function(t,r){return e(C.default(function(e){e.components[t]=r}))}}}),re=te.getState().components;function ne(e){var t=te(function(t){return t.components[e.type]},J);return t?/*#__PURE__*/n.jsx(t,P({},e)):null}var oe=["theme"],ie=u.styled("div")(function(e){var t=e.theme,r=O(e,oe);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.paper,"& .PageSide-wrapper":P({display:"flex",flexDirection:"row",flex:"1 1 auto",minWidth:0,height:"100%",backgroundColor:t.palette.background.default},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0}),"& .PageSide-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1 1 auto"},"& .PageSide-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",minHeight:0,overflowY:"auto"}}});function ae(e){var r,o,i;t.useRef(null),t.useRef(null),t.useRef(null);var a=t.useMemo(function(){return c.some([e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems],function(e){return!c.isEmpty(e)})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),s=t.useMemo(function(){return P({},e.toolbarProps,{leftItems:e.leftToolbarItems,centerItems:e.centerToolbarItems,rightItems:e.rightToolbarItems})},[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),l=t.useMemo(function(){return c.some([e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems],function(e){return!c.isEmpty(e)})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),f=t.useMemo(function(){return P({},e.subToolbarProps,{leftItems:e.leftSubToolbarItems,centerItems:e.centerSubToolbarItems,rightItems:e.rightSubToolbarItems})},[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),d={title:e.headerTitle};/*#__PURE__*/return n.jsxs(ie,{className:y.default("PageSide-root","PageSide-scroll-"+e.scroll,e.className),scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[/*#__PURE__*/n.jsxs("div",{className:"PageSide-wrapper",children:[e.leftSidebarContent&&/*#__PURE__*/n.jsx("div",{children:"leftSidebarContent"}),/*#__PURE__*/n.jsxs(u.Stack,P({},e.contentWrapperProps,{className:y.default("PageSide-contentWrapper",null==(r=e.contentWrapperProps)?void 0:r.className),divider:/*#__PURE__*/n.jsx(u.Divider,{}),children:[e.header&&(c.isBoolean(e.header)?/*#__PURE__*/n.jsx(ne,P({type:"PageSideHeader"},d)):e.header),e.subHeader&&e.subHeader,(e.toolbar||a)&&(null!=(o=e.toolbar)?o:/*#__PURE__*/n.jsx(ee,P({},s))),(e.subToolbar||l)&&(null!=(i=e.subToolbar)?i:/*#__PURE__*/n.jsx(ee,P({},f))),e.content&&/*#__PURE__*/n.jsxs("div",{className:y.default("PageSide-content container"),children:[e.loading&&/*#__PURE__*/n.jsx(u.LinearProgress,{}),e.content]}),e.footer&&/*#__PURE__*/n.jsx("div",{children:"Footer"})]}))]}),e.rightSidebarContent&&/*#__PURE__*/n.jsx("div",{children:"rightSidebarContent"})]})}ae.propTypes={contentWrapperProps:I.object,leftSidebarContent:I.node,leftSidebarVariant:I.node,rightSidebarContent:I.node,rightSidebarVariant:I.node,header:I.oneOfType([I.node,I.bool]),subHeader:I.node,toolbar:I.node,toolbarProps:I.object,leftToolbarItems:I.array,centerToolbarItems:I.array,rightToolbarItems:I.array,subToolbar:I.node,subToolbarProps:I.object,leftSubToolbarItems:I.array,centerSubToolbarItems:I.array,rightSubToolbarItems:I.array,content:I.node,scroll:I.oneOf(["normal","page","content"]),leftSidebarOpen:I.bool,rightSidebarOpen:I.bool,leftSidebarWidth:I.number,rightSidebarWidth:I.number,rightSidebarOnClose:I.func,leftSidebarOnClose:I.func},ae.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240};var se=m.createNanoEvents();e.Component=ne,e.ContextMenu=U,e.FuseSvgIcon=H,e.Layout=function(e){var t=L[e.name];return t?/*#__PURE__*/n.jsx(t,P({},e)):/*#__PURE__*/n.jsx(u.Box,{p:2,children:"Not Found"})},e.PageSide=ae,e.Toolbar=ee,e.ToolbarItem=G,e.Tooltip=N,e.components=re,e.emitter=se,e.layoutComponents=L,e.registerComponent=function(e,t){te.getState().registerComponent(e,t)},e.registerLayout=function(e,t){L[e]=t},e.useEvents=function(e){t.useEffect(function(){return c.map(e,function(e,t){return se.on(t,e)}),function(){c.map(e,function(e,t){return delete se[t]})}},[se,e])}});
//# sourceMappingURL=index.umd.js.map
