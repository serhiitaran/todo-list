(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),l=n(8),r=n(1),s=n(2),d=n(3),m=n(5),u=n(4),f=(n(15),function(e){var t=e.done,n=e.active;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"To do List"),o.a.createElement("p",{className:"header__info"},o.a.createElement("span",null,"Done: ",t)," ",o.a.createElement("span",null,"Active: ",n)))}),b=n(9),p=(n(16),function(e){var t=e.label,n=e.done,a=e.onDelete,c=e.onDone,i="todo-item";return n&&(i+=" todo-item--done"),o.a.createElement("li",{className:i},o.a.createElement("p",{className:"todo-item__label",onClick:c},t),o.a.createElement("button",{className:"todo-item__delete",type:"button",onClick:a},"Delete"))}),h=(n(17),function(e){var t=e.items,n=e.onItemDelete,a=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(b.a)(e,["id"]);return o.a.createElement(p,Object.assign({key:t},c,{onDelete:function(){return n(t)},onDone:function(){return a(t)}}))}));return o.a.createElement("ul",{className:"todo-list"},c)}),E=(n(18),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{class:"todo-add"},o.a.createElement("form",{class:"todo-add__form"},o.a.createElement("input",{class:"todo-add__input",placeholder:"Add new task"})))}}]),n}(a.Component)),v=(n(19),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={items:[{id:1,label:"First to do item",done:!0},{id:2,label:"Second to do item",done:!0},{id:3,label:"Third to do item",done:!1}]},e.handleItemDelete=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(r.a)(e.items.slice(0,n)),Object(r.a)(e.items.slice(n+1)))}}))},e.handleToggleDone=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t})),a=e.items[n],o=!a.done,c=Object(l.a)({},a,{done:o});return{items:[].concat(Object(r.a)(e.items.slice(0,n)),[c],Object(r.a)(e.items.slice(n+1)))}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.items;return o.a.createElement("div",{className:"app"},o.a.createElement(f,{done:1,active:2}),o.a.createElement("main",null,o.a.createElement(h,{items:e,onItemDelete:this.handleItemDelete,onToggleDone:this.handleToggleDone}),o.a.createElement(E,null)))}}]),n}(a.Component));i.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d4366bbc.chunk.js.map