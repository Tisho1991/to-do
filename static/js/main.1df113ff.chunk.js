(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},17:function(e,t,o){},19:function(e,t,o){"use strict";o.r(t);var c=o(0),s=o.n(c),n=o(4),a=o.n(n),i=(o(14),o(3)),l=(o(15),o(9)),d=o(6),r=(o(16),o(17),o(1)),u=function(e){var t=e.setInputText,o=e.todos,c=e.setTodos,s=e.inputText,n=e.setStatus;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{value:s,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),Object(r.jsx)("button",{onClick:function(e){var n=new Date,a=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear();e.preventDefault(),""!==s?c([].concat(Object(l.a)(o),[{text:s,completed:!1,id:1e3*Math.random(),dateAdded:a}])):d.c.error("Task name is required!",{position:"top-center",autoClose:3e3,transition:d.a,closeOnClick:!0,draggable:!0,hideProgressBar:!1}),t("")},className:"todo-button",type:"submit",children:Object(r.jsx)("i",{className:"fas fa-plus-square"})}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{onChange:function(e){n(e.target.value)},name:"todos",className:"filter-todo",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]}),Object(r.jsx)(d.b,{position:"top-center",autoClose:4e3,limit:1})]})},j=o(8),b=function(e){var t=e.text,o=e.todo,c=e.todos,s=e.setTodos;return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsx)("div",{className:"date",children:Object(r.jsx)("p",{style:{marginLeft:"1rem"},children:o.dateAdded})}),Object(r.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:t}),Object(r.jsx)("button",{onClick:function(){console.log(o.dateAdded),s(c.map((function(e){return e.id===o.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn",children:Object(r.jsx)("i",{className:"fas fa-check"})}),Object(r.jsx)("button",{onClick:function(){s(c.filter((function(e){return e.id!==o.id})))},className:"trash-btn",children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})},f=function(e){var t=e.todos,o=e.setTodos,c=e.filteredTodos;return Object(r.jsx)("div",{className:"todo-container",children:Object(r.jsx)("ul",{className:"todo-list",children:c.map((function(e){return Object(r.jsx)(b,{setTodos:o,todos:t,todo:e,text:e.text},e.id)}))})})};var m=function(){var e=["Welcome!","This is a simple 'To-do' list app."],t=Object(c.useState)(""),o=Object(i.a)(t,2),s=o[0],n=o[1],a=Object(c.useState)([]),l=Object(i.a)(a,2),d=l[0],j=l[1],b=Object(c.useState)("all"),m=Object(i.a)(b,2),O=m[0],p=m[1],x=Object(c.useState)([]),h=Object(i.a)(x,2),g=h[0],v=h[1],N=Object(c.useCallback)((function(){localStorage.setItem("todos",JSON.stringify(d))}),[d]);return Object(c.useEffect)((function(){!function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));j(e)}}()}),[]),Object(c.useEffect)((function(){!function(){switch(O){case"completed":v(d.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(d.filter((function(e){return!1===e.completed})));break;default:v(d)}}(),N()}),[d,O,N]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:e[0]}),Object(r.jsx)("p",{children:e[1]})]}),Object(r.jsx)(u,{inputText:s,todos:d,setTodos:j,setInputText:n,setStatus:p}),Object(r.jsx)(f,{setTodos:j,todos:d,filteredTodos:g})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,20)).then((function(t){var o=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;o(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.1df113ff.chunk.js.map