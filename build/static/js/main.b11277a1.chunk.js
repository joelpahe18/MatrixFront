(this.webpackJsonpmatrix=this.webpackJsonpmatrix||[]).push([[0],{360:function(e,t,c){},367:function(e,t,c){},371:function(e,t,c){},373:function(e,t,c){},374:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(41),s=c.n(a),i=c(37),r=c(40),o=c(11),j=c(386),l=c(211),u=c.p+"static/media/Matrix.b4b8426d.png",b=c(387),d=c(388),h=c(17),O=c(157),x=c(103),p=c.n(x),m=c(158),f=c.n(m),v="acces_token";function g(e){localStorage.setItem(v,e)}var N="http://localhost/tareaslv/public/api",k=f.a.create({baseURL:N,headers:{"Content-type":"application/json"}}),w=localStorage.getItem(v)||"",y=f.a.create({baseURL:N,headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(w)}}),_="[auth] Finissh chcking login state",C="[auth] Login",E="[auth] Logout",S=c(201),I=c.n(S),A=function(){return{type:_}},q=function(e){return{type:C,payload:e}},L=function(){return{type:E}},D=c(210),P=c(140),M=(c(360),c(2));function R(){var e=Object(D.a)({initialValues:{Codigo:"",Password:""},validationSchema:P.b({Codigo:P.a("Debes ingresar un c\xf3digo v\xe1lido").required("El c\xf3digo es requerido"),Password:P.c().required("La contrase\xf1a es requerida")}),onSubmit:function(e){t(function(e){return function(){var t=Object(O.a)(p.a.mark((function t(c){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.post("/login",e);case 3:n=t.sent,(a=n.data).res&&(g(a.acces_token),c(q({user:Object(h.a)({},a.user),res:a.res}))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),I.a.fire("Error","C\xf3digo\xa0o\xa0Contrase\xf1a\xa0inv\xe1lida","error");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}),t=Object(i.b)();return Object(M.jsxs)(b.a,{className:"login-form",onSubmit:e.handleSubmit,children:[Object(M.jsx)("h1",{children:"Iniciar sesi\xf3n"}),Object(M.jsxs)("div",{className:"input-box",children:[Object(M.jsx)("input",{type:"text",name:"Codigo",value:e.values.Codigo,onChange:e.handleChange,required:!0}),Object(M.jsx)("label",{children:"Ingresa tu c\xf3digo"})]}),Object(M.jsxs)("div",{className:"input-box",children:[Object(M.jsx)("input",{name:"Password",value:e.values.Password,onChange:e.handleChange,type:"password",required:!0}),Object(M.jsx)("label",{children:"Ingresa tu contrase\xf1a"})]}),Object(M.jsx)(d.a,{type:"submit",className:"btn-submit",children:"Entrar"})]})}c(367);function U(){return Object(M.jsx)(j.a,{fluid:!0,className:"auth",children:Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)(l.a,{src:u}),Object(M.jsx)("div",{className:"container-form",children:Object(M.jsx)(R,{})})]})})}function B(e){e.history;var t=Object(o.g)(),c=t.acces_token,n=t.ruta;t.wemp_pmla;g(c),window.location.replace("/".concat(n))}var F=c(129),J=["isAuthenticated","component"],T=function(e){var t=e.isAuthenticated,c=e.component,n=Object(F.a)(e,J);return Object(M.jsx)(o.b,Object(h.a)(Object(h.a)({},n),{},{component:function(e){return t?Object(M.jsx)(c,Object(h.a)({},e)):Object(M.jsx)(o.a,{to:"/login"})}}))},V=["isAuthenticated","component"],X=function(e){var t=e.isAuthenticated,c=e.component,n=Object(F.a)(e,V);return Object(M.jsx)(o.b,Object(h.a)(Object(h.a)({},n),{},{component:function(e){return t?Object(M.jsx)(o.a,{to:"/"}):Object(M.jsx)(c,Object(h.a)({},e))}}))},z=c.p+"static/media/avatar.7a7185a6.png";c(371);function G(){var e=Object(i.c)((function(e){return e.auth})).user,t=Object(i.b)();return Object(M.jsxs)("div",{className:"sidebar",children:[Object(M.jsx)("div",{className:"logo-details",children:Object(M.jsx)(l.a,{src:u,width:"70%"})}),Object(M.jsxs)("ul",{className:"nav-links",children:[Object(M.jsxs)("li",{children:[Object(M.jsxs)(r.b,{to:"/",children:[Object(M.jsx)("i",{className:"far fa-tachometer-slowest"}),Object(M.jsx)("span",{className:"link_name",children:"Dashboard"})]}),Object(M.jsx)("ul",{className:"sub-menu blank",children:Object(M.jsx)("li",{children:Object(M.jsx)(r.b,{to:"/",className:"link_name",children:"Dashboard"})})})]}),Object(M.jsx)("li",{children:Object(M.jsxs)("div",{className:"profile-details",children:[Object(M.jsxs)("div",{className:"profile-content",children:[Object(M.jsx)(l.a,{src:z}),"s"]}),Object(M.jsxs)("div",{className:"name-job",children:[Object(M.jsx)("div",{className:"profile_name",children:e.descripcion}),Object(M.jsx)("div",{className:"job",children:e.codigo})]}),Object(M.jsx)("i",{onClick:function(){t((function(e){localStorage.clear(),e(L())}))},className:"fal fa-sign-out-alt"})]})})]})]})}function H(){return Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Inicio"})})}function K(){return Object(M.jsx)("div",{children:Object(M.jsx)("h1",{children:"Manual"})})}function Q(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(G,{}),Object(M.jsx)("div",{className:"home-section",children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{exact:!0,path:"/manual",component:K}),Object(M.jsx)(o.b,{exact:!0,patch:"/inicio",component:H}),Object(M.jsx)(o.a,{to:"/inicio"})]})})]})}function W(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),c=t.checking,a=t.res;return Object(n.useEffect)((function(){e(function(){var e=Object(O.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/validartoken");case 3:c=e.sent,n=c.data,t(q(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(A());case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c?Object(M.jsx)("h1",{children:"Cargando..."}):Object(M.jsx)(r.a,{children:Object(M.jsx)("div",{children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(X,{exact:!0,path:"/login",component:U,isAuthenticated:!!a}),Object(M.jsx)(o.b,{exact:!0,path:"/login/:acces_token/:ruta/:wemp_pmla",component:B}),Object(M.jsx)(T,{path:"/",component:Q,isAuthenticated:!!a})]})})})}var Y=c(93),Z=c(209),$={checking:!0},ee=Object(Y.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{checking:!1});case _:return Object(h.a)(Object(h.a)({},e),{},{checking:!1});case E:return{checking:!1};default:return e}}}),te="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,ce=Object(Y.d)(ee,te(Object(Y.a)(Z.a)));function ne(){return Object(M.jsx)(i.a,{store:ce,children:Object(M.jsx)(W,{})})}c(372),c(373);s.a.render(Object(M.jsx)(ne,{}),document.getElementById("root"))}},[[374,1,2]]]);
//# sourceMappingURL=main.b11277a1.chunk.js.map