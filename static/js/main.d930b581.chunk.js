(this.webpackJsonpreactthapaapp=this.webpackJsonpreactthapaapp||[]).push([[0],{12:function(i,e,t){},14:function(i,e,t){"use strict";t.r(e);var a=t(1),s=t.n(a),c=t(6),u=t.n(c),n=t(5),r=t(7),o=(t(12),[{id:1,image:"images/maggi.jpg",name:"maggi",category:"breakfast",price:"12\u20b9",description:"I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:2,image:"images/allupakoida.jpg",name:"allu pakoida",category:"evening",price:"20\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:3,image:"images/corn.jpg",name:"corn",category:"breakfast",price:"10\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:4,image:"../images/chola.jpg",name:"chola",category:"lunch",price:"50\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:5,image:"../images/pizza.jpg",name:"pizza",category:"evening",price:"80\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:6,image:"../images/nonvegthali.jpg",name:"Non-Veg Thali",category:"dinner",price:"180\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:7,image:"../images/sweet.jpg",name:"Sweets",category:"dinner",price:"60\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:8,image:"../images/rajmarice.jpg",name:"Rajma Rice",category:"lunch",price:"60\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:9,image:"../images/samosa.jpg",name:"samaso",category:"evening",price:"10\u20b9",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "}]),m=t(0),l=function(i){var e=i.menuData;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("section",{className:"main-card--cointainer",children:e.map((function(i){var e=i.id,t=i.name,a=i.category,s=i.image,c=i.description;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"card-container",children:Object(m.jsxs)("div",{className:"card ",children:[Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("span",{className:"card-number card-circle subtle",children:e}),Object(m.jsxs)("span",{className:"card-author subtle",children:[" ",a]}),Object(m.jsxs)("h2",{className:"card-title",children:[" ",t," "]}),Object(m.jsx)("span",{className:"card-description subtle",children:c}),Object(m.jsx)("div",{className:"card-read",children:"Read"})]}),Object(m.jsx)("img",{src:s,alt:"images",className:"card-media"}),Object(m.jsx)("span",{className:"card-tag  subtle",children:"Order Now"})]})},e)})}))})})},d=function(i){var e=i.filterItem,t=i.menuList;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"navbar",children:Object(m.jsx)("div",{className:"btn-group",children:t.map((function(i){return Object(m.jsx)("button",{className:"btn-group__item",onClick:function(){return e(i)},children:i})}))})})})},p=[].concat(Object(r.a)(new Set(o.map((function(i){return i.category})))),["All"]);console.log(p);var g=function(){var i=Object(a.useState)(o),e=Object(n.a)(i,2),t=e[0],s=e[1],c=Object(a.useState)(p),u=Object(n.a)(c,2),r=u[0];u[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{filterItem:function(i){if("All"!==i){var e=o.filter((function(e){return e.category===i}));s(e)}else s(o)},menuList:r}),Object(m.jsx)(l,{menuData:t})]})},b=function(){return Object(m.jsx)(g,{})};u.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d930b581.chunk.js.map