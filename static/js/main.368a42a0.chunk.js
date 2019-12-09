(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(289)},197:function(e,t){},249:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),u=n.n(c),o=n(142),l=n(133),i=n(134),d=n(143),s=n(135),p=n(144),m=n(291),f=(n(83),n(249),Object(c.connect)(function(e){var t,n,a=e.products;return{products:(t=a.byId,n=a.result,n.map(function(e){return t[e]}))}},function(e){return{addToCart:function(t){return e({type:"cart/add",payload:{id:t}})}}})(function(e){var t=e.products,n=e.addToCart,a=(t||[]).map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"pname"},r.a.createElement("img",{src:e.src,alt:""}),r.a.createElement("span",null,e.title),"-",r.a.createElement("span",null,"$",e.price)," ",r.a.createElement("span",null,"x",e.inventory)),r.a.createElement("div",null,r.a.createElement(m.a,{type:"primary",onClick:function(){return n(e.id)},disabled:!e.inventory},"\u6dfb\u52a0\u8d2d\u7269\u8f66")))});return r.a.createElement("div",null,r.a.createElement("h1",null,"Products"),r.a.createElement("ul",{className:"item"},a))})),y=n(12),b=(n(269),Object(c.connect)(function(e){var t=e.cart,n=e.products,a=e.loading;return{products:t.added.map(function(e){return Object(y.a)({},n.byId[e],{quantity:t.quantities[e]})}),subtotal:t.added.reduce(function(e,a){return n.byId[a].price*t.quantities[a]+e},0).toFixed(2),loading:a.models.cart,checking:a.effects["cart/checkout"]}},function(e){return{onCheckout:function(){return e({type:"cart/checkout"})}}})(function(e){var t=e.products,n=e.subtotal,a=e.onCheckout,c=e.loading,u=e.checking,o=t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("img",{src:e.src,alt:""}),e.title,"-$ ",e.price," x ",e.quantity)});return r.a.createElement("div",null,r.a.createElement("h1",{className:"cart-title"},"Your Cart"),r.a.createElement("ul",{className:"cart-item"},o),r.a.createElement("div",{className:"total"},"Total: ",n),r.a.createElement("div",null,u&&r.a.createElement("div",{style:{color:"red"}},"Checking ..."),r.a.createElement(m.a,{type:"danger",onClick:a,disabled:n<=0||c},"Checkout")))})),v=n(293),E=(n(270),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"products/query"})}},{key:"render",value:function(){var e=v.a.Header,t=v.a.Footer,n=v.a.Content;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(v.a,null,r.a.createElement(e,null,r.a.createElement("h1",null,"Shopping-Cart")),r.a.createElement(n,null,r.a.createElement(f,null)),r.a.createElement(t,null," ",r.a.createElement(b,null))))}}]),t}(r.a.Component)),h=Object(c.connect)()(E),k=n(35),j=n(18),O=n.n(j),x=n(88),C=n(141),g=n.n(C),w=function(){return g.a.get("./products.json")},I=function(e){return new Promise(function(t,n){return setTimeout(function(){return t(e)},2e3)})},q=new x.b.Entity("products"),T={namespace:"products",state:{result:[],byId:{}},effects:{query:O.a.mark(function e(t,n){var a,r,c;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.call,r=n.put,e.next=3,a(w);case 3:return c=e.sent,e.next=6,r({type:"setProducts",payload:Object(x.a)(c.data,[q])});case 6:case"end":return e.stop()}},e)})},reducers:{setProducts:function(e,t){var n=t.payload;return Object(y.a)({},e,{byId:n.entities.products,result:n.result})},decInventory:function(e,t){var n=t.payload.id,a=e.byId[n];return Object(y.a)({},e,{byId:Object(y.a)({},e.byId,Object(k.a)({},n,Object(y.a)({},a,{inventory:a.inventory-1})))})}}},N=n(90),P={added:[],quantities:{}},F={namespace:"cart",state:P,effects:{add:O.a.mark(function e(t,n){var a,r,c,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.id,n.call,r=n.put,c=n.select,e.next=4,c(function(e){return e.products.byId[a]});case 4:if(u=e.sent,console.log("product",u),!(u.inventory>0)){e.next=11;break}return e.next=9,r({type:"products/decInventory",payload:{id:a}});case 9:return e.next=11,r({type:"addToCart",payload:{id:a}});case 11:case"end":return e.stop()}},e)}),checkout:O.a.mark(function e(t,n){var a,r,c,u,o,l;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.call,r=n.put,c=n.select,e.next=3,c();case 3:return u=e.sent,o=u.cart,console.log("checkout cart",o),e.next=8,a(I,o);case 8:return l=e.sent,e.next=11,r({type:"checkoutCompleted",payload:l});case 11:case"end":return e.stop()}},e)})},reducers:{addToCart:function(e,t){var n=t.payload.id;return Object(y.a)({},e,{added:e.added.includes(n)?Object(N.a)(e.added):[].concat(Object(N.a)(e.added),[n]),quantities:Object(y.a)({},e.quantities,Object(k.a)({},n,(e.quantities[n]||0)+1))})},checkoutCompleted:function(){return P}}},J=u()();J.model(T),J.model(F),J.use(Object(o.a)()),J.router(function(){return r.a.createElement(h,null)}),J.start("#root")}},[[147,1,2]]]);
//# sourceMappingURL=main.368a42a0.chunk.js.map