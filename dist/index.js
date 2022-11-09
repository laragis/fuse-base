import*as e from"react";import t,{memo as r,forwardRef as n,useRef as o,useImperativeHandle as i,useState as l,useMemo as a,useCallback as s,useEffect as c,isValidElement as d}from"react";import m from"@tippyjs/react";import{isMobile as u}from"react-device-detect";import{jsx as p,jsxs as h,Fragment as f}from"react/jsx-runtime";import b from"clsx";import*as g from"prop-types";import y from"prop-types";import{styled as v}from"@mui/material/styles";import{Box as I}from"@mui/system";import S from"@mui/material/Icon";import{includes as C,replace as T,some as w,isEmpty as P,isBoolean as x,pick as z,reject as O,isArray as N,map as k}from"lodash";import{Box as j,MenuItem as E,ListItemIcon as W,ListItemText as M,Divider as F,Menu as H,IconButton as D,Stack as B,styled as R,LinearProgress as A,Typography as Y}from"@mui/material";import X from"zustand";import L from"immer";import{createNanoEvents as V}from"nanoevents";import{useDebounce as $}from"react-use";import K from"@mui/material/Menu";import{ChevronRight as q}from"@mui/icons-material";function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const Q=["title","children"];function U(e){let{title:t,children:r}=e,n=J(e,Q);if(!t)return r;const o=G({theme:"light",animation:"scale",content:t,trigger:"mouseenter",disabled:u},n);/*#__PURE__*/return p(m,G({},o,{children:r}))}var Z=/*#__PURE__*/r(U);const _=["theme"],ee=["children","className","size"],te=v(I)(e=>{let{theme:t}=e,r=J(e,_);return{width:r.size,height:r.size,minWidth:r.size,minHeight:r.size,fontSize:r.size,lineHeight:r.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),re=/*#__PURE__*/n((e,t)=>{if(!e.children.includes(":"))/*#__PURE__*/return p(S,G({ref:t},e));const r=e.children.replace(":",".svg#");/*#__PURE__*/return p(te,G({},e,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:b("shrink-0 fill-current ",e.className),ref:t,size:e.size,sx:e.sx,color:e.color,children:/*#__PURE__*/p("use",{xlinkHref:`assets/icons/${r}`})}))});function ne(e){let{children:t,className:r,size:n}=e,o=J(e,ee),i={children:t};return t&&C(t,"fontawesome-")&&(i.children=void 0,i.baseClassName="",i.className=T(t,"fontawesome-","fa-"),i.className=T(i.className,":"," fa-"),i.className=["w-inherit",i.className,r].join(" "),n&&(i.sx={width:n,height:n,minWidth:n,minHeight:n,fontSize:n})),r&&w(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],e=>C(r,e))&&(i.baseClassName=""),/*#__PURE__*/p(re,G({className:r},i,{size:n},o))}re.propTypes={children:y.string,size:y.oneOfType([y.number,y.string]),sx:y.object,color:y.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},re.defaultProps={children:"",size:24,sx:{},color:"inherit"};const oe={};function ie(e,t){oe[e]=t}function le(e){const t=oe[e.name];return t?/*#__PURE__*/p(t,G({},e)):/*#__PURE__*/p(j,{p:2,children:"Not Found"})}const ae=["leftIcon","rightIcon","label","MenuItemProps","className","visible"],se=v(E)({});var ce=/*#__PURE__*/n((e,t)=>{let{leftIcon:r,rightIcon:n,label:o,className:i}=e,l=J(e,ae);/*#__PURE__*/return h(se,G({ref:t,className:i},l,{children:[r&&/*#__PURE__*/p(W,{children:r}),/*#__PURE__*/p(M,{children:o}),n&&/*#__PURE__*/p(W,{className:"flex justify-end",children:n})]}))});const de=["parentMenuOpen","label","rightIcon","leftIcon","children","className","tabIndex","ContainerProps"],me=["ref"];var ue=/*#__PURE__*/t.forwardRef(function(e,t){const{parentMenuOpen:r,label:n,rightIcon:a=/*#__PURE__*/p(q,{color:"disabled",fontSize:"small"}),leftIcon:s=null,children:c,className:d,tabIndex:m,ContainerProps:u={}}=e,f=J(e,de),{ref:b}=u,g=J(u,me),y=o(null);i(t,()=>y.current);const v=o(null);i(b,()=>v.current);const I=o(null),[S,C]=l(!1),T=()=>{const e=v.current.ownerDocument.activeElement;for(const t of I.current.children)if(t===e)return!0;return!1},w=S&&r;let P;return e.disabled||(P=void 0!==m?m:-1),/*#__PURE__*/h("div",G({},g,{ref:v,onFocus:e=>{e.target===v.current&&C(!0),g.onFocus&&g.onFocus(e)},tabIndex:P,onMouseEnter:e=>{C(!0),g.onMouseEnter&&g.onMouseEnter(e)},onMouseLeave:e=>{C(!1),g.onMouseLeave&&g.onMouseLeave(e)},onKeyDown:e=>{if("Escape"===e.key)return;T()&&e.stopPropagation();const t=v.current.ownerDocument.activeElement;"ArrowLeft"===e.key&&T()&&v.current.focus(),"ArrowRight"===e.key&&e.target===v.current&&e.target===t&&I.current.children[0].focus()},children:[/*#__PURE__*/p(ce,{MenuItemProps:f,className:d,ref:y,leftIcon:s,rightIcon:a,label:n}),/*#__PURE__*/p(K,{style:{pointerEvents:"none"},anchorEl:y.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},open:w,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:()=>{C(!1)},children:/*#__PURE__*/p("div",{ref:I,style:{pointerEvents:"auto"},children:c})})]}))});const pe=["divider"],he=["items","onClick"];function fe({items:e,onClose:t,open:r}){return e.map((e,n)=>{let{divider:o}=e,i=J(e,pe);if(o)/*#__PURE__*/return p(F,{sx:{my:.5}},n);const{items:l,onClick:a}=i,s=J(i,he);return l&&l.length>0?/*#__PURE__*/p(ue,G({},s,{parentMenuOpen:r,children:/*#__PURE__*/p(fe,{open:r,items:l,onClose:t})}),n):/*#__PURE__*/p(ce,G({},s,{onClick:()=>{t(),a&&a()}}),n)})}function be({position:e,items:t,children:r,onClose:n}){const i=o(null),[d,m]=l(null),u=a(()=>null!==d,[d]),f=a(()=>u?{top:d.mouseY,left:d.mouseX}:void 0,[u,d]),b=s(()=>{n&&n(),u&&m(null)},[u]);return c(()=>{e&&m({mouseX:e.clientX+2,mouseY:e.clientY-6})},[e]),/*#__PURE__*/h("div",{ref:i,onContextMenu:e=>{e.preventDefault(),m(null===d?{mouseX:e.clientX+2,mouseY:e.clientY-6}:null)},children:[!P(t)&&/*#__PURE__*/p(H,{open:u,onClose:b,anchorReference:"anchorPosition",anchorPosition:f,disableAutoFocusItem:!0,children:/*#__PURE__*/p(fe,{open:u,items:t,onClose:b})}),r]})}fe.propTypes={items:y.array},be.propTypes={items:y.array};const ge=["icon","label","visible","onClick","btnSize","iconSize","items","color"];function ye(e){const{icon:t,label:r,visible:n=!0,onClick:o,btnSize:i,iconSize:s,items:c=[],color:d}=e;J(e,ge);const m=x(e.tooltip)?r:e.tooltip,u=a(()=>n&&t,[n,t]),[b,g]=l(null),y=Boolean(b),v=(e,t)=>{g(null),t&&t()},I=u&&/*#__PURE__*/p(D,{size:i,onClick:e=>P(c)?o&&o(e):g(e.currentTarget),color:d,children:t&&/*#__PURE__*/p(ne,{size:s,children:t})}),S=u&&!P(c)&&/*#__PURE__*/p(H,{open:y,anchorEl:b,onClose:e=>v(),transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:c.map((e,t)=>/*#__PURE__*/h(E,{onClick:t=>v(0,e.onClick),children:[e.icon&&/*#__PURE__*/p(W,{children:/*#__PURE__*/p(ne,{children:e.icon})}),e.label&&/*#__PURE__*/p(M,{children:e.label})]},t))});/*#__PURE__*/return h(f,m&&u?{children:[/*#__PURE__*/p(Z,{title:m,children:I}),S]}:{children:[I,S]})}function ve(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}ye.defautProps={iconSize:18};const Ie=["case","defaultCase"];function Se(e){let{case:t,defaultCase:r}=e,n=J(e,Ie);/*#__PURE__*/return d(t)?t:function(e){return"function"==typeof e&&!!e.prototype.isReactComponent}(o=t)||function(e){return"function"==typeof e&&String(e).includes("return React.createElement")}(o)?/*#__PURE__*/p(t,{}):/*#__PURE__*/p(r,G({},n,t));var o}function Ce(e){const{sx:t,contentProps:r,leftItems:n,leftContentProps:o,centerItems:i,centerContentProps:l,rightItems:a,rightContentProps:s}=e,c=z(e,["btnSize","iconSize"]);/*#__PURE__*/return h(B,{sx:t,direction:"row",justifyContent:"space-between",alignItems:"center",children:[/*#__PURE__*/p(B,G({direction:"row"},r,o,{children:n.length>0&&n.map((e,t)=>/*#__PURE__*/p(Se,G({case:e,defaultCase:ye},c),t))})),/*#__PURE__*/p(B,G({direction:"row"},r,l,{children:i.length>0&&i.map((e,t)=>/*#__PURE__*/p(Se,G({case:e,defaultCase:ye},c),t))})),/*#__PURE__*/p(B,G({direction:"row"},r,s,{children:a.length>0&&a.map((e,t)=>/*#__PURE__*/p(Se,G({case:e,defaultCase:ye},c),t))}))]})}function Te({items:e,anchorEl:t,setAnchorEl:r}){const n=Boolean(t),o=(e,t)=>{r(null),t&&t()};/*#__PURE__*/return p(H,{open:n,anchorEl:t,onClose:e=>o(),transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:null==e?void 0:e.map((e,t)=>/*#__PURE__*/h(E,{onClick:t=>o(0,e.onClick),children:[e.icon&&/*#__PURE__*/p(W,{children:/*#__PURE__*/p(ne,{children:e.icon})}),e.label&&/*#__PURE__*/p(M,{children:e.label})]},t))})}Ce.propTypes={leftItems:y.array,centerItems:y.array,rightItems:y.array},Ce.defaultProps={sx:{p:1},contentProps:{spacing:.5},leftItems:[],centerItems:[],rightItems:[]};const we=/*#__PURE__*/e.forwardRef((e,t)=>{const{tooltip:r,color:n,icon:o,onClick:i,children:s,visible:c,items:d,type:m,disabled:u}=e,[b,g]=l(null),y=a(()=>O(d,e=>!1===e.visible),[d]),v=a(()=>N(d)?!P(y):c,[c,d,y]),I=a(()=>v&&o,[v,o]),S={sx:z(e,["fontSize"])};return I&&/*#__PURE__*/h(f,{children:[/*#__PURE__*/p(Z,{title:r,children:/*#__PURE__*/p(D,{onClick:e=>P(y)?i&&i(e):g(e.currentTarget),color:n,type:m,ref:t,disabled:u,children:s||/*#__PURE__*/p(ne,G({},S,{children:o}))})}),I&&!P(y)&&/*#__PURE__*/p(Te,{items:y,anchorEl:b,setAnchorEl:g})]})});we.defaultProps={visible:!0,onClick:()=>{}},we.propTypes={tooltip:y.string,color:y.string,icon:y.string,visible:y.bool,fontSize:y.number,onClick:y.func,items:y.array};var Pe=we;const xe=X(e=>({components:{},registerComponent:(t,r)=>e(L(e=>{e.components[t]=r}))})),ze=xe.getState().components;function Oe(e,t){xe.getState().registerComponent(e,t)}function Ne(e){const t=xe(t=>t.components[e.type],ve);return t?/*#__PURE__*/p(t,G({},e)):null}const ke=["theme"],je=R("div")(e=>{let{theme:t}=e,r=J(e,ke);return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.paper,"& .PageSide-wrapper":G({display:"flex",flexDirection:"row",flex:"1 1 auto",minWidth:0,height:"100%"},"content"===r.scroll&&{position:"absolute",top:0,bottom:0,right:0,left:0}),"& .PageSide-contentWrapper":{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1 1 auto"},"& .PageSide-content":{display:"flex",flexDirection:"column",flex:"1 1 auto",minHeight:0,overflowY:"auto",backgroundColor:t.palette.background.default}}});function Ee(e){var t,r,n,o;const i=a(()=>w([e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems],e=>!P(e)),[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),l=a(()=>G({},e.toolbarProps,{leftItems:e.leftToolbarItems,centerItems:e.centerToolbarItems,rightItems:e.rightToolbarItems}),[e.leftToolbarItems,e.centerToolbarItems,e.rightToolbarItems]),s=a(()=>w([e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems],e=>!P(e)),[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),c=a(()=>G({},e.subToolbarProps,{leftItems:e.leftSubToolbarItems,centerItems:e.centerSubToolbarItems,rightItems:e.rightSubToolbarItems}),[e.leftSubToolbarItems,e.centerSubToolbarItems,e.rightSubToolbarItems]),d={title:e.headerTitle};/*#__PURE__*/return h(je,{className:b("PageSide-root",`PageSide-scroll-${e.scroll}`,e.className),scroll:e.scroll,leftsidebarwidth:e.leftSidebarWidth,rightsidebarwidth:e.rightSidebarWidth,children:[/*#__PURE__*/h("div",{className:"PageSide-wrapper",children:[e.leftSidebarContent&&/*#__PURE__*/p("div",{children:"leftSidebarContent"}),/*#__PURE__*/h(B,G({},e.contentWrapperProps,{className:b("PageSide-contentWrapper",null==(t=e.contentWrapperProps)?void 0:t.className),divider:/*#__PURE__*/p(F,{}),children:[e.header&&(x(e.header)?/*#__PURE__*/p(Ne,G({type:"PageSideHeader"},d)):e.header),e.subHeader&&e.subHeader,(e.toolbar||i)&&(null!=(r=e.toolbar)?r:/*#__PURE__*/p(Ce,G({},l))),(e.subToolbar||s)&&(null!=(n=e.subToolbar)?n:/*#__PURE__*/p(Ce,G({},c))),e.content&&/*#__PURE__*/h("div",{className:b(b("PageSide-content container",null==(o=e.contentProps)?void 0:o.className)),children:[e.loading&&/*#__PURE__*/p(A,{}),e.content]}),e.footer&&/*#__PURE__*/p("div",{children:"Footer"})]}))]}),e.rightSidebarContent&&/*#__PURE__*/p("div",{children:"rightSidebarContent"})]})}function We(e){const t=z(e,["direction","spacing"]),r=z(e,["size","color","fontSize","visible"]);/*#__PURE__*/return p(B,G({},t,{children:e.items.map((e,t)=>/*#__PURE__*/p(Pe,G({},r,e),t))}))}Ee.propTypes={contentWrapperProps:g.object,leftSidebarContent:g.node,leftSidebarVariant:g.node,rightSidebarContent:g.node,rightSidebarVariant:g.node,header:g.oneOfType([g.node,g.bool]),subHeader:g.node,toolbar:g.node,toolbarProps:g.object,leftToolbarItems:g.array,centerToolbarItems:g.array,rightToolbarItems:g.array,subToolbar:g.node,subToolbarProps:g.object,leftSubToolbarItems:g.array,centerSubToolbarItems:g.array,rightSubToolbarItems:g.array,content:g.node,scroll:g.oneOf(["normal","page","content"]),leftSidebarOpen:g.bool,rightSidebarOpen:g.bool,leftSidebarWidth:g.number,rightSidebarWidth:g.number,rightSidebarOnClose:g.func,leftSidebarOnClose:g.func},Ee.defaultProps={classes:{},scroll:"page",leftSidebarOpen:!1,rightSidebarOpen:!1,rightSidebarWidth:240,leftSidebarWidth:240},We.defaultProps={direction:"row",spacing:.5},Ee.propTypes={direction:y.string,spacing:y.number,items:y.array};const Me=["theme"],Fe=["content","classes","className"],He=v(j)(e=>{let{theme:t}=e,r=J(e,Me);return{display:"inline-block",justifyContent:"center",alignContent:"center",color:"white",borderRadius:10,padding:"0 6px",minWidth:20,height:20,backgroundColor:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),De=/*#__PURE__*/n((e,t)=>{const{content:r,classes:n,className:o}=e,i=J(e,Fe);/*#__PURE__*/return p(He,G({className:b(null==n?void 0:n.root,o)},i,{ref:t,children:r}))});De.defaultProps={component:Y};var Be=De,Re=V();function Ae(e){c(function(){return k(e,(e,t)=>Re.on(t,e)),function(){k(e,(e,t)=>delete Re[t])}},[Re,e])}function Ye(e="",{wait:t=500}={}){const[r,n]=l(e),[o,i]=l("");return $(()=>i(r),t,[r]),[o,n,{value:r,onChange:e=>n(e.target.value)}]}export{Be as Badge,Ne as Component,be as ContextMenu,ne as FuseSvgIcon,Pe as IconButton,We as IconButtonGroup,le as Layout,Ee as PageSide,Ce as Toolbar,ye as ToolbarItem,Z as Tooltip,ze as components,Re as emitter,oe as layoutComponents,Oe as registerComponent,ie as registerLayout,Ye as useDebouncedInput,Ae as useEvents};
//# sourceMappingURL=index.js.map
