(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=(n(12),n(0));function i(e){var t=e.children;return a.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(14);var s=n(6),u=n(2);var d=r.a.createContext();function j(e){var t=function(e,t){var n=r.a.useState(!0),o=Object(u.a)(n,2),c=o[0],a=o[1],l=r.a.useState(!1),i=Object(u.a)(l,2),s=i[0],d=i[1],j=r.a.useState(t),f=Object(u.a)(j,2),b=f[0],O=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),a(!1)}catch(s){d(s),a(!1)}}),2e3)}),[]),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(s){d(s)}},loading:c,error:s}}("TODOS_V1",[]),n=t.item,o=t.saveItem,c=t.loading,a=t.error,i=r.a.useState(""),j=Object(u.a)(i,2),f=j[0],b=j[1],O=r.a.useState(!1),p=Object(u.a)(O,2),m=p[0],x=p[1],h=n.filter((function(e){return e.completed})).length,v=n.length,g=[];g=0===f.length?n:n.filter((function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)}));return Object(l.jsx)(d.Provider,{value:{loading:c,error:a,totalTodos:v,completedTodos:h,searchValue:f,searchedTodos:g,setSearchValue:b,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(s.a)(n);r[t].completed=!0,o(r)},addTodo:function(e){var t=Object(s.a)(n);t.push({text:e,completed:!1}),o(t)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(s.a)(n);r.splice(t,1),o(r)},openModal:m,setOpenModal:x,todos:n},children:e.children})}function f(){var e=r.a.useContext(d),t=e.completedTodos,n=e.totalTodos;return Object(l.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",t," de ",n," TODOs"]})}n(15);function b(){var e=r.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return Object(l.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})}n(16);function O(e){return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:e.children})})}n(17);var p,m=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function v(e,t){var n=e.title,r=e.titleId,c=h(e,m);return o.createElement("svg",x({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,p||(p=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))}var g,y=o.forwardRef(v),T=(n.p,["title","titleId"]);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){var n=e.title,r=e.titleId,c=I(e,T);return o.createElement("svg",C({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,g||(g=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))}var N=o.forwardRef(S);n.p;function k(e){var t=e.type,n=e.color,o=e.onClick,r={check:function(e){return Object(l.jsx)(y,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(l.jsx)(N,{className:"Icon-svg Icon-svg--delete",fill:e})}};return Object(l.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:r[t](n)})}function w(e){var t=e.completed,n=e.onComplete;return Object(l.jsx)(k,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function L(e){var t=e.onDelete;return Object(l.jsx)(k,{type:"delete",onClick:t,color:"gray"})}n(18);function E(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)(w,{completed:e.completed,onComplete:e.onComplete}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)(L,{onDelete:e.onDelete})]})}n(19);function D(e){var t=r.a.useContext(d).setOpenModal;return Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){t((function(e){return!e}))},children:"+"})}n(20);function P(){var e=r.a.useContext(d),t=e.addTodo,n=e.setOpenModal,o=r.a.useState(""),c=Object(u.a)(o,2),a=c[0],i=c[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===a?alert("Por favor escribe una tarea \ud83d\ude0b"):(t(a),n(!1))},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(l.jsx)("textarea",{value:a,onChange:function(e){i(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){n(!1)},children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}function M(e){e.error;return Object(l.jsx)("p",{children:"ERROR!! \u274c\u274c"})}n(21);function B(){return Object(l.jsxs)("div",{className:"LoadingTodo-container",children:[Object(l.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(l.jsx)("span",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(l.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function F(){return Object(l.jsx)("p",{children:"\xa1Crea tu primer TODO! \ud83d\udc9a"})}function J(){var e=r.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,s=e.openModal,u=e.todos;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(b,{}),Object(l.jsxs)(O,{children:[t&&Object(l.jsx)(M,{error:t}),n&&Object(l.jsx)(B,{}),!n&&0===u.length&&Object(l.jsx)(F,{}),o.map((function(e){return Object(l.jsx)(E,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),Object(l.jsx)(D,{}),s&&Object(l.jsx)(i,{children:Object(l.jsx)(P,{})})]})}var R=function(){return Object(l.jsx)(j,{children:Object(l.jsx)(J,{})})};n(22);a.a.render(Object(l.jsx)(R,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.b5495d02.chunk.js.map