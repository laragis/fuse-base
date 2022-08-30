import e,{memo as t,forwardRef as r}from"react";import n from"@tippyjs/react";import i from"clsx";import a from"prop-types";import{styled as s}from"@mui/material/styles";import{Box as o}from"@mui/system";import l from"@mui/material/Icon";import{includes as c,replace as m,some as f}from"lodash";import{Box as p}from"@mui/material";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}const d=["title","children"];var g=t(function(t){let{title:r,children:i}=t,a=h(t,d);if(!r)return i;const s=u({theme:"light",animation:"scale",content:r,trigger:"mouseenter"},a);/*#__PURE__*/return e.createElement(n,s,i)});const y=["theme"],v=["children","className"],w=s(o)(e=>{let{theme:t}=e,r=h(e,y);return{width:r.size,height:r.size,minWidth:r.size,minHeight:r.size,fontSize:r.size,lineHeight:r.size,color:{primary:t.palette.primary.main,secondary:t.palette.secondary.main,info:t.palette.info.main,success:t.palette.success.main,warning:t.palette.warning.main,action:t.palette.action.active,error:t.palette.error.main,disabled:t.palette.action.disabled,inherit:void 0}[r.color]}}),N=r((t,r)=>{if(!t.children.includes(":"))/*#__PURE__*/return e.createElement(l,u({ref:r},t));const n=t.children.replace(":",".svg#");/*#__PURE__*/return e.createElement(w,u({},t,{component:"svg",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",className:i("shrink-0 fill-current ",t.className),ref:r,size:t.size,sx:t.sx,color:t.color}),/*#__PURE__*/e.createElement("use",{xlinkHref:`assets/icons/${n}`}))});function b(t){let{children:r,className:n}=t,i=h(t,v),a={children:r};return r&&c(r,"fontawesome-")&&(a.children=void 0,a.baseClassName="",a.className=m(r,"fontawesome-","fa-"),a.className=m(a.className,":"," fa-"),a.className=["w-inherit",a.className,n].join(" ")),n&&f(["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone"],e=>c(n,e))&&(a.baseClassName=""),/*#__PURE__*/e.createElement(N,u({className:n},a,i))}N.propTypes={children:a.string,size:a.oneOfType([a.number,a.string]),sx:a.object,color:a.oneOf(["inherit","disabled","primary","secondary","action","error","info","success","warning"])},N.defaultProps={children:"",size:24,sx:{},color:"inherit"};const x={};function z(e,t){x[e]=t}function O(e){const t=x[e.name];return t?/*#__PURE__*/React.createElement(t,e):/*#__PURE__*/React.createElement(p,{p:2},"Not Found")}export{b as FuseSvgIcon,O as Layout,g as Tooltip,x as layoutComponents,z as registerLayout};
//# sourceMappingURL=index.js.map