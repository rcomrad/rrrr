import{d as i,s as o,r as l,e as r,f as d,j as n}from"./index-b129b865.js";import{u}from"./useDispatch-6201ab63.js";function f(){const s=i(o),a=u();l.useEffect(()=>{s.map(t=>{t.constant||(t.need_to_delete?a(r(t)):a(d(t)))})},[]);function c(){const t=[];for(let e=0;e<s.length;e++)t.push(n.jsxs("div",{className:`d-flex justify-content-between alert alert-${s[e].type?s[e].type:"primary"}`,children:[n.jsxs("div",{children:[s[e].constant?n.jsx("i",{className:"bi bi-pin-angle-fill me-3"}):null,s[e].text]}),n.jsx("div",{children:n.jsx("button",{type:"button",className:"btn-close",onClick:()=>{a(r(s[e]))}})})]},e));return t}return n.jsx(n.Fragment,{children:c()})}export{f as M};
