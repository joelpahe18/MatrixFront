(this.webpackJsonpmatrix=this.webpackJsonpmatrix||[]).push([[0],{389:function(e,t,n){},396:function(e,t,n){},410:function(e,t,n){},414:function(e,t,n){},416:function(e,t,n){},418:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),o=n.n(r),s=n(81),i=n(84),u=n(14),b=n(446),j=n(239),l=n.p+"static/media/Matrix.b4b8426d.png",d=n(447),p=n(449),h=n(16),O=n(177),x=n(121),f=n.n(x),m=n(178),g=n.n(m),v="acces_token";function y(e){localStorage.setItem(v,e)}var w="http://matrixlav-back.lasamericas.com.co/api",C=g.a.create({baseURL:w,headers:{"Content-type":"application/json"}}),S=localStorage.getItem(v)||"",k=g.a.create({baseURL:w,headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(S)}}),N="[auth] Finissh chcking login state",T="[auth] Login",E="[auth] Logout",R=n(224),_=n.n(R),I=function(){return{type:N}},A=function(e){return{type:T,payload:e}},L=n(238),P=n(158),q=(n(389),n(3));function F(){var e=Object(L.a)({initialValues:{Codigo:"",Password:""},validationSchema:P.b({Codigo:P.a("Debes ingresar un c\xf3digo v\xe1lido").required("El c\xf3digo es requerido"),Password:P.c().required("La contrase\xf1a es requerida")}),onSubmit:function(e){t(function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.post("/login",e);case 3:a=t.sent,(c=a.data).res&&(y(c.acces_token),n(A({user:Object(h.a)({},c.user),res:c.res}))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),_.a.fire("Error","C\xf3digo\xa0o\xa0Contrase\xf1a\xa0inv\xe1lida","error");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}),t=Object(s.b)();return Object(q.jsxs)(d.a,{className:"login-form",onSubmit:e.handleSubmit,children:[Object(q.jsx)("h1",{children:"Iniciar sesi\xf3n"}),Object(q.jsxs)("div",{className:"input-box",children:[Object(q.jsx)("input",{type:"text",name:"Codigo",value:e.values.Codigo,onChange:e.handleChange,required:!0}),Object(q.jsx)("label",{children:"Ingresa tu c\xf3digo"})]}),Object(q.jsxs)("div",{className:"input-box",children:[Object(q.jsx)("input",{name:"Password",value:e.values.Password,onChange:e.handleChange,type:"password",required:!0}),Object(q.jsx)("label",{children:"Ingresa tu contrase\xf1a"})]}),Object(q.jsx)(p.a,{type:"submit",className:"btn-submit",children:"Entrar"})]})}n(396);function B(){return Object(q.jsx)(b.a,{fluid:!0,className:"auth",children:Object(q.jsxs)("div",{className:"content",children:[Object(q.jsx)(j.a,{src:l}),Object(q.jsx)("div",{className:"container-form",children:Object(q.jsx)(F,{})})]})})}function D(e){e.history;var t=Object(u.g)(),n=t.acces_token,a=t.ruta;y(n),window.location.replace("/".concat(a))}var H=n(10),M=["isAuthenticated","component"],U=function(e){var t=e.isAuthenticated,n=e.component,a=Object(H.a)(e,M);return Object(q.jsx)(u.b,Object(h.a)(Object(h.a)({},a),{},{component:function(e){return t?Object(q.jsx)(n,Object(h.a)({},e)):Object(q.jsx)(u.a,{to:"/login"})}}))},W=["isAuthenticated","component"],z=function(e){var t=e.isAuthenticated,n=e.component,a=Object(H.a)(e,W);return Object(q.jsx)(u.b,Object(h.a)(Object(h.a)({},a),{},{component:function(e){return t?Object(q.jsx)(u.a,{to:"/"}):Object(q.jsx)(n,Object(h.a)({},e))}}))};function J(){return Object(q.jsx)("div",{children:Object(q.jsx)("h1",{children:"Manual"})})}var V,X=n(23),G=n(232),K=n(233),Q=n.n(K),Y=n(448),Z=(n(410),function(e){return Object(q.jsx)("div",{className:"center",children:Object(q.jsxs)("div",{className:"lds-ripple",children:[Object(q.jsx)("div",{}),Object(q.jsx)("div",{})]})})}),$=n(176),ee=n(236),te=n.n(ee),ne=Object(q.jsx)(te.a,{}),ae={indeterminate:function(e){return e}},ce=$.default.input(V||(V=Object(G.a)(["\n\theight: 32px;\n\twidth: 200px;\n\tborder-radius: 3px;\n\tborder-top-left-radius: 5px;\n\tborder-bottom-left-radius: 5px;\n\tborder-top-right-radius: 0;\n\tborder-bottom-right-radius: 0;\n\tborder: 1px solid #e5e5e5;\n\tpadding: 0 32px 0 16px;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"]))),re=function(e){var t=e.filterText,n=e.onFilter;return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(ce,{id:"search",type:"text",placeholder:"Filter By Name","aria-label":"Search Input",value:t,onChange:n})})},oe={header:{style:{minHeight:"56px"}},headRow:{style:{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"gray"}},headCells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:"gray"}}},cells:{style:{"&:not(:last-of-type)":{borderRightStyle:"solid",borderRightWidth:"1px",borderRightColor:"gray"}}}},se=function(){return Object(q.jsx)(Z,{})};var ie=function(e){var t=Object(a.useState)(""),n=Object(X.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(!1),i=Object(X.a)(s,2),u=i[0],b=i[1],j=e.info.filter((function(e){return e.Tabopc&&e.Tabopc.toString().toLowerCase().includes(r.toLowerCase())})),l=c.a.useMemo((function(){return Object(q.jsx)(re,{onFilter:function(e){return o(e.target.value)},onClear:function(){r&&(b(!u),o(""))},filterText:r})}),[r,u]);return Object(q.jsx)(Q.a,Object(h.a)({progressComponent:Object(q.jsx)(se,{}),selectableRowsComponent:Y.a,data:j,pagination:!0,selectableRowsComponentProps:ae,sortIcon:ne,dense:!0,customStyles:oe,paginationResetDefaultPage:u,subHeader:!0,subHeaderComponent:l,persistTableHead:!0},e))},ue=function(e){var t=Object(a.useState)([]),n=Object(X.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){fetch(e,{headers:{Authorization:"Bearer ".concat(localStorage.acces_token)}}).then((function(e){return e.json()})).then((function(e){return r(e.data)}))}),[e]),c};n(414);var be=function(){var e=Object(a.useState)([]),t=Object(X.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),o=Object(X.a)(r,2),s=o[0],i=o[1],u=ue("http://localhost:8000/api/root/procesos/maestros-matrix/permisos");return Object(a.useEffect)((function(){var e=setTimeout((function(){c([{name:"Tabopc",selector:function(e){return e.Tabopc},sortable:!0},{name:"Tabtab",selector:function(e){return e.Tabtab},sortable:!0}]),i(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),Object(q.jsxs)("section",{children:[Object(q.jsx)("nav",{className:"nav justify-content-center",children:Object(q.jsx)("li",{className:"nav-item",children:"Editar tablas"})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"col",children:Object(q.jsx)(ie,{title:"Opciones",columns:n,info:u,progressPending:s})})})})]})};function je(){return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("div",{className:"home-section",children:Object(q.jsxs)(u.d,{children:[Object(q.jsx)(u.b,{exact:!0,path:"/manual",component:J}),Object(q.jsx)(u.b,{exact:!0,patch:"/root/procesos/maestros-matrix",component:be}),Object(q.jsx)(u.a,{to:"/root/procesos/maestros-matrix"})]})})})}function le(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.res;return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/validartoken");case 3:n=e.sent,a=n.data,t(A(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(I());case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(q.jsx)(Z,{}):Object(q.jsx)(i.a,{children:Object(q.jsx)("div",{children:Object(q.jsxs)(u.d,{children:[Object(q.jsx)(z,{exact:!0,path:"/login",component:B,isAuthenticated:!!c}),Object(q.jsx)(u.b,{exact:!0,path:"/login/:acces_token/:ruta/:wemp_pmla",component:D}),Object(q.jsx)(U,{path:"/",component:je,isAuthenticated:!!c})]})})})}var de=n(108),pe=n(237),he={checking:!0},Oe=Object(de.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{checking:!1});case N:return Object(h.a)(Object(h.a)({},e),{},{checking:!1});case E:return{checking:!1};default:return e}}}),xe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.c,fe=Object(de.d)(Oe,xe(Object(de.a)(pe.a)));function me(){return Object(q.jsx)(s.a,{store:fe,children:Object(q.jsx)(le,{})})}n(415),n(416),n(417);o.a.render(Object(q.jsx)(me,{}),document.getElementById("root"))}},[[418,1,2]]]);
//# sourceMappingURL=main.0f637f9e.chunk.js.map