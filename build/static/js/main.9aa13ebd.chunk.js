(this["webpackJsonpfern-psy"]=this["webpackJsonpfern-psy"]||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),u=t(17),o=t(26),i=t(56),s=t(57),m=t(6),E=t.n(m),d=t(11),p=t(30),f=t(20),g=t.n(f),v="/api/forum",b=null,h={getAll:function(){var e=Object(d.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(v);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:b}},e.next=3,g.a.post(v,a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),update:function(e,a){return g.a.put("".concat(v,"/").concat(e.id),a).data},setToken:function(e){b="bearer ".concat(e)},remove:function(){var e=Object(d.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:b}},e.next=3,g.a.delete("".concat(v,"/").concat(a.id),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),like:function(){var e=Object(d.a)(E.a.mark((function e(a){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id,e.next=3,g.a.put("".concat(v,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"NEW_QUESTION":return e.concat(a.data);case"INIT_QUESTIONS":return console.log(a.data),a.data;case"LIKE":var t=a.data.id,n=e.find((function(e){return e.id===t})),r=Object(p.a)(Object(p.a)({},n),{},{likes:n.likes+1});return e.map((function(e){return e.id===t?r:e}));case"DELETE_QUESTION":return e.filter((function(e){return e.id!==a.data.id}));default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LIKE_QUESTION":case"CREATE_QUESTION":case"DELETE_QUESTION":case"GOOD_LOGIN":case"GOOD_REGISTER":case"BAD_LOGIN":case"BAD_REGISTER":return a.message;case"RESET":return"";default:return e}},y=function(e){return console.log(e),{type:"SET_USER",data:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":case"CLEAR_USER":return a.data;default:return e}},j=Object(o.combineReducers)({forum:O,notifications:S,user:w}),k=Object(o.createStore)(j,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),N=(t(88),t(89),t(12)),T=t(36),I=t(59),C=t(58),x=t(27),L=t(103),R=t(104),U=t(105),_=t(106),B=t(107),D=t(108),A=t(109),G=t(110),J=function(e){var a=Object(n.useState)(!1),t=Object(N.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(L.a,{id:"navbar",color:"dark",dark:!0,expand:"md"},r.a.createElement(R.a,{id:"navbrand",href:"/"},"Fern's Counseling"),r.a.createElement(U.a,{id:"dropdownmenu",onClick:function(){return l(!c)}}),r.a.createElement(_.a,{isOpen:c,navbar:!0},r.a.createElement(B.a,{className:"mr-auto",navbar:!0},r.a.createElement(D.a,null,r.a.createElement(A.a,{tag:x.b,id:"NavLink",to:"/forum"},"Forum")),r.a.createElement(D.a,null,r.a.createElement(A.a,{tag:x.b,id:"NavLink",to:"/about"},"About")),r.a.createElement(D.a,null,r.a.createElement(A.a,{tag:x.b,id:"NavLink",to:"/contact"},"Contact")),r.a.createElement(D.a,null,r.a.createElement(A.a,{tag:x.b,id:"NavLink",to:"/login"},"Login"))),r.a.createElement(G.a,{id:"NavBarText"},r.a.createElement("a",{href:"mailto:furbynilu@gmail.com"}," ",r.a.createElement(T.a,{id:"fa",icon:C.a})),r.a.createElement("a",{href:"https://www.facebook.com/NiluAcounselor"}," ",r.a.createElement(T.a,{id:"fa",icon:I.a}))))))},F=t(111),P=t(112),Q=t(113);t(100);var M=function(){return r.a.createElement(F.a,{id:"about",className:"themed-container",fluid:!0},r.a.createElement("div",{id:"heading"},r.a.createElement("h1",{id:"name"},"Nilubon Sukawanich"),r.a.createElement("h4",{id:"title"},"Counselor")),r.a.createElement(P.a,{flush:!0},r.a.createElement("div",{id:"about-me"},r.a.createElement("h5",null,"Education:")),r.a.createElement(Q.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32 (2557 - 2559)",r.a.createElement("br",null),"Chiangmai University Master of Science in Counseling Psychology (2014 - 2016)"),r.a.createElement(Q.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32 (2544 - 2547)",r.a.createElement("br",null),"Chiangmai University Bachelor of Science in Counseling Psychology (2001 - 2004)")))},W={login:function(){var e=Object(d.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},q=t(116),Z=t(117),z=t(118),H=t(119),K=t(114),V={signUp:function(){var e=Object(d.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("/api/users","/signUp"),a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},$=t(122),X=t(115),Y=t(120),ee=function(e){var a=Object(n.useState)(!1),t=Object(N.a)(a,2),c=t[0],l=t[1],o=function(){return l(!c)},i=Object(n.useState)(""),s=Object(N.a)(i,2),m=s[0],p=s[1],f=Object(n.useState)(""),g=Object(N.a)(f,2),v=g[0],b=g[1],O=Object(n.useState)(""),S=Object(N.a)(O,2),w=S[0],j=S[1],k=Object(n.useState)(""),T=Object(N.a)(k,2),I=T[0],C=T[1],x=Object(n.useState)(""),L=Object(N.a)(x,2),R=L[0],U=L[1],_=Object(n.useState)(""),B=Object(N.a)(_,2),D=B[0],A=B[1],G=Object(n.useState)(""),J=Object(N.a)(G,2),F=J[0],P=J[1],Q=Object(u.b)(),M=function(){var e=Object(d.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o(),I===R){e.next=4;break}throw new Error("passwords are not the same");case 4:return e.prev=4,e.next=7,V.signUp({name:m,username:v,password:I,email:w,gender:D,dateOfBirth:F});case 7:t=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(t)),h.setToken(t.token),Q(y(t)),Q({type:"GOOD_REGISTER",message:"Successfully registered!"}),setTimeout((function(){Q({type:"RESET",message:""})}),5e3),b(""),C(""),U(""),p(""),A(""),j(""),P(""),console.log(t),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(4),console.log(e.t0),Q({type:"BAD_REGISTER",message:"Sorry. Please try again"}),setTimeout((function(){Q({type:"RESET",message:""})}),3e3);case 28:case"end":return e.stop()}}),e,null,[[4,23]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(K.a,{color:"primary",onClick:o},"Sign up"),r.a.createElement($.a,{autoFocus:!0,isOpen:c,toggle:o,modalTransition:{timeout:300}},r.a.createElement(X.a,null,r.a.createElement("h2",null,"Register"),r.a.createElement(q.a,{onSubmit:M},r.a.createElement(Z.a,null,r.a.createElement(z.a,null,"Name:"),r.a.createElement(H.a,{onChange:function(e){p(e.target.value)},value:m}),r.a.createElement(z.a,null,"Username:"),r.a.createElement(H.a,{onChange:function(e){b(e.target.value)},value:v}),r.a.createElement(z.a,null,"Password:")," ",r.a.createElement(H.a,{id:"password",type:"password",onChange:function(e){C(e.target.value)},value:I}),r.a.createElement(z.a,null,"Confirm Password:"),r.a.createElement(H.a,{onChange:function(e){U(e.target.value)},type:"password",value:R}),r.a.createElement(z.a,null,"Gender:")," ",r.a.createElement(H.a,{id:"gender",type:"text",onChange:function(e){A(e.target.value)},value:D}),r.a.createElement(z.a,null,"Email:")," ",r.a.createElement(H.a,{id:"email",type:"text",onChange:function(e){j(e.target.value)},value:w}),r.a.createElement(z.a,null,"Date of Birth:")," ",r.a.createElement(H.a,{id:"dateOfBirth",type:"date",onChange:function(e){P(e.target.value)},value:F})))),r.a.createElement(Y.a,null,r.a.createElement(K.a,{color:"success",type:"submit",onClick:M},"Sign Up!"),r.a.createElement(K.a,{color:"secondary",onClick:o},"Cancel"))))},ae=function(e){var a=e.setLoggedIn,t=Object(n.useState)(""),c=Object(N.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(N.a)(i,2),m=s[0],p=s[1],f=Object(u.b)(),g=function(){var e=Object(d.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,W.login({username:l,password:m});case 4:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),f(y(n)),a(!0),f({type:"GOOD_LOGIN",message:"Welcome back!"}),setTimeout((function(){f({type:"RESET",message:""})}),1e3),o(""),p(""),console.log(n),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),f({type:"BAD_LOGIN",message:"Sorry. Please try again"}),setTimeout((function(){f({type:"RESET",message:""})}),3e3);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Login"),r.a.createElement(q.a,{onSubmit:g},r.a.createElement(Z.a,null,r.a.createElement(z.a,null,"Username:"),r.a.createElement(H.a,{onChange:function(e){o(e.target.value)},value:l}),r.a.createElement(z.a,null,"Password:")," ",r.a.createElement(H.a,{id:"password",type:"password",onChange:function(e){p(e.target.value)},value:m}),r.a.createElement(K.a,{id:"submit-login",type:"submit"},"Login"),r.a.createElement("hr",null))),r.a.createElement("p",null,"Don't have an account? "),r.a.createElement(ee,null))},te=t(9),ne=function(){return r.a.createElement("div",null,"THE FORUM WILL GO HERE")},re=t(62),ce={marginTop:"40px",marginBottom:"20px"},le=function(){return r.a.createElement("div",null,r.a.createElement(re.a,{initialValues:{name:"",email:"",LINE:"",message:""},validate:function(e){var a={};return e.email||(a.email="Required"),e.message?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.message="Required",a},onSubmit:function(e,a){var t=a.setSubmitting;console.log("submit clicked do something"),setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),400)}},(function(e){var a=e.values,t=e.errors,n=e.touched,c=e.handleChange,l=e.handleBlur,u=e.handleSubmit;e.isSubmitting;return r.a.createElement(F.a,{style:ce},r.a.createElement("h5",null,"Enter your information: ")," ",r.a.createElement(q.a,{onSubmit:u,action:"mailto:perrottarichard@gmail.com",className:"form-ui"},r.a.createElement(Z.a,null,r.a.createElement(z.a,{for:"name"},"Name"),r.a.createElement(H.a,{placeholder:"Jane",type:"Name",name:"name",onChange:c,onBlur:l,value:a.name}),r.a.createElement(z.a,{for:"email"},"Email"),r.a.createElement(H.a,{placeholder:"Jane@example.com",type:"Email",name:"email",onChange:c,onBlur:l,value:a.email}),t.email&&n.email&&t.email,r.a.createElement(z.a,{for:"Line"},"LINE"),r.a.createElement(H.a,{placeholder:"Line ID",type:"Line",name:"LINE",onChange:c,onBlur:l,value:a.LINE}),r.a.createElement(z.a,{for:"message"},"Message")," ",r.a.createElement(H.a,{placeholder:"I have a question about...",type:"Message",name:"message",onChange:c,onBlur:l,value:a.message}),t.message&&n.message&&t.message)))})))},ue=t(121),oe=function(){var e=Object(u.c)((function(e){return e.notifications}));return r.a.createElement("div",null,""!==e?r.a.createElement(ue.a,{variant:"success"},e):null)},ie=function(){var e=Object(n.useState)(!1),a=Object(N.a)(e,2),t=(a[0],a[1]),c=(Object(u.c)((function(e){return e.forum})),Object(u.c)((function(e){return e.user})),Object(u.b)());return Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedForumUser");if(e){var a=JSON.parse(e);c(y(a)),t(!0),h.setToken(a.token)}}),[c]),r.a.createElement(x.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement(oe,null),r.a.createElement(te.c,null,r.a.createElement(te.a,{path:"/about"},r.a.createElement(M,null)),r.a.createElement(te.a,{path:"/contact"},r.a.createElement(le,null)),r.a.createElement(te.a,{path:"/forum"},r.a.createElement(ne,null)),r.a.createElement(te.a,{path:"/login"},r.a.createElement(ae,null)),r.a.createElement(te.a,{path:"api/admin"}))))};l.a.render(r.a.createElement(u.a,{store:k},r.a.createElement(ie,null)),document.getElementById("root"))},63:function(e,a,t){e.exports=t(102)},89:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.9aa13ebd.chunk.js.map