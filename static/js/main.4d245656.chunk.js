(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=n(8),i=n(5),s=n(1),u=n(2),d=n(4),m=n(3),f=(n(15),function(e){var t=e.done,n=e.active;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},"To do List"),o.a.createElement("p",{className:"header__info"},o.a.createElement("span",null,"Done: ",t)," ",o.a.createElement("span",null,"Active: ",n)))}),h=n(9),v=(n(16),function(e){var t=e.label,n=e.done,a=e.onDelete,c=e.onDone,r="todo-item";return n&&(r+=" todo-item--done"),o.a.createElement("li",{className:r},o.a.createElement("p",{className:"todo-item__label",onClick:c},t),o.a.createElement("button",{className:"todo-item__delete",type:"button",onClick:a},"Delete"))}),b=(n(17),function(e){var t=e.items,n=e.onItemDelete,a=e.onToggleDone,c=t.map((function(e){var t=e.id,c=Object(h.a)(e,["id"]);return o.a.createElement(v,Object.assign({key:t},c,{onDelete:function(){return n(t)},onDone:function(){return a(t)}}))}));return o.a.createElement("ul",{className:"todo-list"},c)}),p=(n(18),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChange=function(t){var n=t.target.value;e.setState({value:n})},e.handleSubmit=function(t){t.preventDefault();var n=e.props.onItemAdd,a=e.state.value;e.state.value&&(n(a),e.setState({value:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{class:"todo-add"},o.a.createElement("form",{class:"todo-add__form",onSubmit:this.handleSubmit},o.a.createElement("input",{class:"todo-add__input",placeholder:"Add new task",onChange:this.handleChange,value:this.state.value})))}}]),n}(a.Component)),E=(n(19),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-search"},o.a.createElement("input",{className:"todo-search__input",placeholder:"Search"}))}}]),n}(a.Component)),j=(n(20),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={items:[{id:1,label:"First to do item",done:!0},{id:2,label:"Second to do item",done:!0},{id:3,label:"Third to do item",done:!1}]},e.idCounter=100,e.createItem=function(t){return{id:++e.idCounter,label:t,done:!1}},e.handleItemAdd=function(t){e.setState((function(n){var a=e.createItem(t);return{items:[].concat(Object(i.a)(n.items),[a])}}))},e.handleItemDelete=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(i.a)(e.items.slice(0,n)),Object(i.a)(e.items.slice(n+1)))}}))},e.handleToggleDone=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t})),a=e.items[n],o=!a.done,c=Object(l.a)({},a,{done:o});return{items:[].concat(Object(i.a)(e.items.slice(0,n)),[c],Object(i.a)(e.items.slice(n+1)))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.items,t=e.filter((function(e){return e.done})).length,n=e.length-t;return o.a.createElement("div",{className:"app"},o.a.createElement(f,{done:t,active:n}),o.a.createElement("main",null,o.a.createElement(E,null),o.a.createElement(b,{items:e,onItemDelete:this.handleItemDelete,onToggleDone:this.handleToggleDone}),o.a.createElement(p,{onItemAdd:this.handleItemAdd})))}}]),n}(a.Component));r.a.render(o.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4d245656.chunk.js.map