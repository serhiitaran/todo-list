(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),c=n.n(i),l=n(7),r=n(1),s=n(4),m=n(5),d=n(8),u=n(6),f=(n(15),function(e){var t=e.done,n=e.active;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"To do List"),o.a.createElement("p",{className:"header__info"},o.a.createElement("span",null,"Done: ",t)," ",o.a.createElement("span",null,"Active: ",n)))}),b=n(9),h=(n(16),function(e){var t=e.label,n=e.done,a=e.onDelete,i=e.onDone,c="todo-item";return n&&(c+=" todo-item--done"),o.a.createElement("li",{className:c},o.a.createElement("p",{className:"todo-item__label",onClick:i},t),o.a.createElement("button",{className:"todo-item__delete",type:"button",onClick:a},"Delete"))}),p=(n(17),function(e){var t=e.items,n=e.onItemDelete,a=e.onToggleDone,i=t.map((function(e){var t=e.id,i=Object(b.a)(e,["id"]);return o.a.createElement(h,Object.assign({key:t},i,{onDelete:function(){return n(t)},onDone:function(){return a(t)}}))}));return o.a.createElement("ul",{className:"todo-list"},i)}),v=(n(18),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={items:[{id:1,label:"First to do item",done:!0},{id:2,label:"Second to do item",done:!0},{id:3,label:"Third to do item",done:!1}]},e.handleItemDelete=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(r.a)(e.items.slice(0,n)),Object(r.a)(e.items.slice(n+1)))}}))},e.handleToggleDone=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t})),a=e.items[n],o=!a.done,i=Object(l.a)({},a,{done:o});return{items:[].concat(Object(r.a)(e.items.slice(0,n)),[i],Object(r.a)(e.items.slice(n+1)))}}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.items;return o.a.createElement("div",{className:"app"},o.a.createElement(f,{done:1,active:2}),o.a.createElement("main",null,o.a.createElement(p,{items:e,onItemDelete:this.handleItemDelete,onToggleDone:this.handleToggleDone})))}}]),n}(a.Component));c.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8f0defe1.chunk.js.map