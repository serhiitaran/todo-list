(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),r=a.n(l),c=a(3),i=a(4),s=a(6),m=a(5),d=(a(13),function(e){var t=e.done,a=e.active;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"To do List"),o.a.createElement("p",{className:"header__info"},o.a.createElement("span",null,"Done: ",t)," ",o.a.createElement("span",null,"Active: ",a)))}),u=a(7),p=(a(14),function(e){var t=e.label,a="todo-item";return e.done&&(a+=" todo-item--done"),o.a.createElement("li",{className:a},o.a.createElement("p",{className:"todo-item__label"},t),o.a.createElement("button",{className:"todo-item__delete",type:"button"},"Delete"))}),E=(a(15),function(e){var t=e.items.map((function(e){var t=e.id,a=Object(u.a)(e,["id"]);return o.a.createElement(p,Object.assign({key:t},a))}));return o.a.createElement("ul",{class:"todo-list"},t)}),b=(a(16),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={items:[{id:1,label:"First to do item",done:!0},{id:2,label:"Second to do item",done:!0},{id:3,label:"Third to do item",done:!1}]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.items;return o.a.createElement("div",{className:"app"},o.a.createElement(d,{done:1,active:2}),o.a.createElement("main",null,o.a.createElement(E,{items:e})))}}]),a}(n.Component));r.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a014df7e.chunk.js.map