import{r as a,G as l,j as r,h as d}from"./index-d7b616ef.js";import{E as n}from"./config-16fea0ec.js";import{F as p}from"./Form-8d86b9e5.js";import{a as b}from"./utils-efc83923.js";function G({GetJournal:o}){const[s,i]=a.useState([{id:-1,grade:"",subject:""}]),u=l();a.useEffect(()=>{b({teacher_id:u.id}).then(e=>{i(e)})},[]);function m(e){return e.map((t,j)=>({label:t.grade,id:t.grade}))}function c(e){return e.map(t=>({label:t.subject,id:t.subject}))}return r.jsx("div",{className:"text-center",children:s[0]?s[0].id!==-1?r.jsx(p,{additionalClasses:"mt-3",elements:[{type:n.COMBOBOX,name:"grade",label:"Класс",settings:{options:[...m(s)]}},{type:n.COMBOBOX,name:"subject",label:"Предмет",settings:{options:[...c(s)]}}],onSubmit:e=>{o(s.filter(t=>t.grade===e.grade&&t.subject===e.subject))},buttonText:"Открыть журнал"}):r.jsx(d,{}):r.jsx("h3",{className:"text-center m-0",children:"У вас нет журналов!"})})}export{G as J};
