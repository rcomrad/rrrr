import{G as J,j as t,L as Ae,r as i,D as go,a as bo,O as xo,b as To}from"./index-648ea929.js";import"./bootstrap.bundle.min-8af756cc.js";import{g as vo,a as yo,s as Q,P as We,_ as s,c as Ue,b as ze,u as wo,d as Po,e as jo,f as Co,h as No,i as Ro,j as Mo,k as Oo,l as S,G as De,m as k,n as $o}from"./Grow-c1eb770b.js";import{M as Lo}from"./MessageBlock-9b080a4d.js";import{u as Eo}from"./useDispatch-a1c30dc4.js";function _o({title:o,bootstrap_icon_name:e}){const n=J();return t.jsx("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:t.jsxs("div",{className:"container-fluid",children:[t.jsxs(Ae,{className:"navbar-brand",to:"/",children:[t.jsx("i",{className:`bi ${e} me-3`}),o]}),t.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:t.jsx("span",{className:"navbar-toggler-icon"})}),t.jsxs("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[t.jsx("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),t.jsx("p",{className:"p-0 m-0",children:n?`${n.surname} ${n.name[0]}.`:""})]})]})})}function So(o){return yo("MuiTooltip",o)}const ko=vo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),f=ko,Bo=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Io(o){return Math.round(o*1e5)/1e5}const Fo=o=>{const{classes:e,disableInteractive:n,arrow:c,touch:a,placement:p}=o,T={popper:["popper",!n&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",a&&"touch",`tooltipPlacement${Ue(p.split("-")[0])}`],arrow:["arrow"]};return $o(T,So,e)},Do=Q(We,{name:"MuiTooltip",slot:"Popper",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:o,ownerState:e,open:n})=>s({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${f.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${f.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${f.arrow}`]:s({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${f.arrow}`]:s({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Ao=Q("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Ue(n.placement.split("-")[0])}`]]}})(({theme:o,ownerState:e})=>s({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:ze(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:`${Io(16/14)}em`,fontWeight:o.typography.fontWeightRegular},{[`.${f.popper}[data-popper-placement*="left"] &`]:s({transformOrigin:"right center"},e.isRtl?s({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):s({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${f.popper}[data-popper-placement*="right"] &`]:s({transformOrigin:"left center"},e.isRtl?s({marginRight:"14px"},e.touch&&{marginRight:"24px"}):s({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${f.popper}[data-popper-placement*="top"] &`]:s({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${f.popper}[data-popper-placement*="bottom"] &`]:s({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),Wo=Q("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(o,e)=>e.arrow})(({theme:o})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:ze(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let B=!1,q=null,N={x:0,y:0};function I(o,e){return n=>{e&&e(n),o(n)}}const Uo=i.forwardRef(function(e,n){var c,a,p,T,Z,ee,oe,te,re,ne,se,ie,ae,le,pe,ce,ue,de,me;const F=wo({props:e,name:"MuiTooltip"}),{arrow:fe=!1,children:D,components:R={},componentsProps:h={},describeChild:Ve=!1,disableFocusListener:Ge=!1,disableHoverListener:he=!1,disableInteractive:He=!1,disableTouchListener:Ke=!1,enterDelay:ge=100,enterNextDelay:be=0,enterTouchDelay:Xe=700,followCursor:A=!1,id:Ye,leaveDelay:xe=0,leaveTouchDelay:qe=1500,onClose:Te,onOpen:ve,open:Je,placement:ye="bottom",PopperComponent:W,PopperProps:g={},slotProps:b={},slots:M={},title:v,TransitionComponent:Qe=De,TransitionProps:Ze}=F,we=Po(F,Bo),m=i.isValidElement(D)?D:t.jsx("span",{children:D}),U=jo(),eo=U.direction==="rtl",[y,Pe]=i.useState(),[z,oo]=i.useState(null),O=i.useRef(!1),V=He||A,$=i.useRef(),L=i.useRef(),x=i.useRef(),je=i.useRef(),[to,Ce]=Co({controlled:Je,default:!1,name:"Tooltip",state:"open"});let d=to;const G=No(Ye),w=i.useRef(),E=i.useCallback(()=>{w.current!==void 0&&(document.body.style.WebkitUserSelect=w.current,w.current=void 0),clearTimeout(je.current)},[]);i.useEffect(()=>()=>{clearTimeout($.current),clearTimeout(L.current),clearTimeout(x.current),E()},[E]);const Ne=r=>{clearTimeout(q),B=!0,Ce(!0),ve&&!d&&ve(r)},_=Ro(r=>{clearTimeout(q),q=setTimeout(()=>{B=!1},800+xe),Ce(!1),Te&&d&&Te(r),clearTimeout($.current),$.current=setTimeout(()=>{O.current=!1},U.transitions.duration.shortest)}),H=r=>{O.current&&r.type!=="touchstart"||(y&&y.removeAttribute("title"),clearTimeout(L.current),clearTimeout(x.current),ge||B&&be?L.current=setTimeout(()=>{Ne(r)},B?be:ge):Ne(r))},Re=r=>{clearTimeout(L.current),clearTimeout(x.current),x.current=setTimeout(()=>{_(r)},xe)},{isFocusVisibleRef:Me,onBlur:ro,onFocus:no,ref:so}=Mo(),[,Oe]=i.useState(!1),$e=r=>{ro(r),Me.current===!1&&(Oe(!1),Re(r))},Le=r=>{y||Pe(r.currentTarget),no(r),Me.current===!0&&(Oe(!0),H(r))},Ee=r=>{O.current=!0;const l=m.props;l.onTouchStart&&l.onTouchStart(r)},_e=H,Se=Re,io=r=>{Ee(r),clearTimeout(x.current),clearTimeout($.current),E(),w.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",je.current=setTimeout(()=>{document.body.style.WebkitUserSelect=w.current,H(r)},Xe)},ao=r=>{m.props.onTouchEnd&&m.props.onTouchEnd(r),E(),clearTimeout(x.current),x.current=setTimeout(()=>{_(r)},qe)};i.useEffect(()=>{if(!d)return;function r(l){(l.key==="Escape"||l.key==="Esc")&&_(l)}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[_,d]);const lo=Oo(m.ref,so,Pe,n);!v&&v!==0&&(d=!1);const K=i.useRef(),po=r=>{const l=m.props;l.onMouseMove&&l.onMouseMove(r),N={x:r.clientX,y:r.clientY},K.current&&K.current.update()},P={},X=typeof v=="string";Ve?(P.title=!d&&X&&!he?v:null,P["aria-describedby"]=d?G:null):(P["aria-label"]=X?v:null,P["aria-labelledby"]=d&&!X?G:null);const u=s({},P,we,m.props,{className:S(we.className,m.props.className),onTouchStart:Ee,ref:lo},A?{onMouseMove:po}:{}),j={};Ke||(u.onTouchStart=io,u.onTouchEnd=ao),he||(u.onMouseOver=I(_e,u.onMouseOver),u.onMouseLeave=I(Se,u.onMouseLeave),V||(j.onMouseOver=_e,j.onMouseLeave=Se)),Ge||(u.onFocus=I(Le,u.onFocus),u.onBlur=I($e,u.onBlur),V||(j.onFocus=Le,j.onBlur=$e));const co=i.useMemo(()=>{var r;let l=[{name:"arrow",enabled:!!z,options:{element:z,padding:4}}];return(r=g.popperOptions)!=null&&r.modifiers&&(l=l.concat(g.popperOptions.modifiers)),s({},g.popperOptions,{modifiers:l})},[z,g]),C=s({},F,{isRtl:eo,arrow:fe,disableInteractive:V,placement:ye,PopperComponentProp:W,touch:O.current}),Y=Fo(C),ke=(c=(a=M.popper)!=null?a:R.Popper)!=null?c:Do,Be=(p=(T=(Z=M.transition)!=null?Z:R.Transition)!=null?T:Qe)!=null?p:De,Ie=(ee=(oe=M.tooltip)!=null?oe:R.Tooltip)!=null?ee:Ao,Fe=(te=(re=M.arrow)!=null?re:R.Arrow)!=null?te:Wo,uo=k(ke,s({},g,(ne=b.popper)!=null?ne:h.popper,{className:S(Y.popper,g==null?void 0:g.className,(se=(ie=b.popper)!=null?ie:h.popper)==null?void 0:se.className)}),C),mo=k(Be,s({},Ze,(ae=b.transition)!=null?ae:h.transition),C),fo=k(Ie,s({},(le=b.tooltip)!=null?le:h.tooltip,{className:S(Y.tooltip,(pe=(ce=b.tooltip)!=null?ce:h.tooltip)==null?void 0:pe.className)}),C),ho=k(Fe,s({},(ue=b.arrow)!=null?ue:h.arrow,{className:S(Y.arrow,(de=(me=b.arrow)!=null?me:h.arrow)==null?void 0:de.className)}),C);return t.jsxs(i.Fragment,{children:[i.cloneElement(m,u),t.jsx(ke,s({as:W??We,placement:ye,anchorEl:A?{getBoundingClientRect:()=>({top:N.y,left:N.x,right:N.x,bottom:N.y,width:0,height:0})}:y,popperRef:K,open:y?d:!1,id:G,transition:!0},j,uo,{popperOptions:co,children:({TransitionProps:r})=>t.jsx(Be,s({timeout:U.transitions.duration.shorter},r,mo,{children:t.jsxs(Ie,s({},fo,{children:[v,fe?t.jsx(Fe,s({},ho,{ref:oo})):null]}))}))}))]})}),zo=Uo;function Vo({tooltipOpen:o,text:e,icon:n,href:c}){return t.jsx("li",{className:"nav-item",children:t.jsx(Ae,{to:c,className:"nav-link py-3 border-bottom rounded-0",children:t.jsx("div",{className:"d-flex align-items-center justify-content-center",children:t.jsx(zo,{title:t.jsx("div",{className:"fs-6",children:e}),placement:"right",children:t.jsx("i",{className:`bi ${n}`,style:{fontSize:"24px"}})})})})})}function Go({elements:o}){const[e,n]=i.useState(!1),c=J();return t.jsxs("div",{className:"d-flex flex-column flex-shrink-0 bg-body-tertiary full-height",onMouseEnter:a=>{n(!0)},onMouseLeave:()=>{n(!1)},children:[t.jsx("ul",{className:"nav nav-pills nav-flush flex-column mb-auto text-center",children:o.map((a,p)=>t.jsx(Vo,{text:a.text,icon:a.icon,tooltipOpen:e,href:a.href},p))}),t.jsxs("div",{className:"dropdown border-top",children:[t.jsx("a",{href:"#",className:"d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:t.jsx("i",{className:"bi bi-person-circle",style:{fontSize:"24px"}})}),t.jsx("ul",{className:"dropdown-menu text-small shadow",children:c?t.jsx("li",{children:t.jsx("a",{className:"dropdown-item",href:"#",onClick:()=>{go(),window.location.reload()},children:"Выход"})}):""})]})]})}function Ho(o){bo.interceptors.response.use(function(e){return e},function(e){return e.response.status==403&&(o("Пожалуйста перезайдите на сайт"),setTimeout(()=>{window.location.href="/"},2e3)),Promise.reject(e)})}function Qo(){const[o,e]=i.useState([{text:"Домашняя страница",icon:"bi-house",href:"/"}]),n=Eo();function c(a){n(To({type:"danger",text:a}))}return i.useEffect(()=>{Ho(c);const a=J(),p=[];a&&(a.role.includes("teacher")&&p.push({text:"Журнал",icon:"bi-book",href:"/journal"}),a.role.some(T=>T.includes("add"))&&p.push({text:"Управление",icon:"bi-gear",href:"/admin"}),a.role.includes("submitor")&&p.push({text:"Соревнования",icon:"bi-trophy",href:"/contest"}),p.push({text:"Прочие функции",icon:"bi-card-list",href:"/other"})),e([...o,...p])},[]),t.jsxs(t.Fragment,{children:[t.jsx(_o,{title:"KysSys",bootstrap_icon_name:"bi-cpu"}),t.jsxs("div",{className:"d-flex full-height",children:[t.jsx("div",{className:"full-height",children:t.jsx(Go,{elements:o})}),t.jsxs("div",{className:"flex-grow-1 overflowable mx-5",children:[t.jsx(Lo,{}),t.jsx(xo,{})]})]})]})}export{Qo as default};
