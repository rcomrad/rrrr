import{j as s,L as r,c,b as l}from"./index-648ea929.js";import{C as m}from"./Card-0cfb9c76.js";import{F as d}from"./Form-4cab7a04.js";import{E as a}from"./config-a5b38a07.js";import{A as h}from"./utils-e98f4032.js";import{u as p}from"./useDispatch-a1c30dc4.js";import"./Grow-c1eb770b.js";function w(){const t=p();function i({login:e,password:n}){h({login:e,password:n}).then(o=>{localStorage.setItem("user",JSON.stringify(o)),t(c({type:"success",text:"Авторизация прошла успешно"})),window.location.href="/"}).catch(()=>{t(l({type:"danger",text:"Неправильный логин или пароль"}))})}return s.jsx("div",{className:"full-height container",children:s.jsx("div",{className:"row h-100 justify-content-center align-items-center",children:s.jsx("div",{className:"col-lg-4",children:s.jsxs(m,{children:[s.jsxs("div",{className:"alert alert-primary",children:["Контакт для связи ",s.jsx("a",{href:"https://t.me/rcomrad",children:"@rcomrad"})]}),s.jsxs("div",{className:"alert alert-primary",children:["Зеркало системы ",s.jsx("a",{href:"https://kusmirror.ru",children:"kusmirror.ru"})]}),s.jsx("h3",{children:"Авторизация"}),s.jsx(d,{elements:[{label:"Логин",name:"login",type:a.INPUT,settings:{}},{label:"Пароль",name:"password",type:a.INPUT,settings:{type:"password"}}],onSubmit:e=>{i(e)},buttonText:"Войти"}),s.jsxs("p",{className:"text-secondary m-0 mt-3",children:["Ещё нет аккаунта? ",s.jsx(r,{to:"/registration",children:"Зарегистрироваться"})]}),s.jsxs("p",{className:"text-secondary m-0 mt-3",children:["Забыли пароль? ",s.jsx(r,{to:"/password_restoring",children:"Востановить"})]})]})})})})}export{w as default};
