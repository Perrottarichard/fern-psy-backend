(this["webpackJsonpfern-psy"]=this["webpackJsonpfern-psy"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(13),i=a(28),u=a(59),s=a(60),m=a(6),d=a.n(m),p=a(9),f=a(31),E=a(19),g=a.n(E),b="/api/forum",v=null,h={getAll:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,g.a.post(b,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(b,"/").concat(e.id),t).data},setToken:function(e){v="bearer ".concat(e)},remove:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,g.a.delete("".concat(b,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),like:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,g.a.put("".concat(b,"/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_QUESTION":return e.concat(t.data);case"INIT_QUESTIONS":return console.log(t.data),t.data;case"LIKE":var a=t.data.id,n=e.find((function(e){return e.id===a})),r=Object(f.a)(Object(f.a)({},n),{},{likes:n.likes+1});return e.map((function(e){return e.id===a?r:e}));case"DELETE_QUESTION":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},O=function(e){return{type:"BAD_LOGIN",message:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKE_QUESTION":case"CREATE_QUESTION":case"DELETE_QUESTION":case"GOOD_LOGIN":case"GOOD_REGISTER":case"BAD_LOGIN":case"BAD_REGISTER":case"LOGOUT":return t.message;case"RESET":return"";default:return e}},w=function(e){return console.log(e),{type:"SET_USER",data:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"CLEAR_USER":return t.data;default:return e}},j=Object(i.combineReducers)({forum:y,notifications:k,user:x}),S=Object(i.createStore)(j,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),A=(a(92),a(93),a(12)),I=a(30),L=a(34),T=a(10),N=a(107),C=function(e){var t=e.setLoggedIn,a=Object(T.f)(),n=Object(o.b)();return r.a.createElement("div",{id:"nav-logout-button"},r.a.createElement(N.a,{onClick:function(){window.localStorage.clear(),t(!1),n({type:"CLEAR_USER",data:null}),n({type:"LOGOUT",message:"You have logged out"}),setTimeout((function(){n({type:"RESET",message:""})}),3e3),a.push("/")},outline:!0,color:"secondary",size:"sm"},"Logout"))},R=a(22),B=a(108),F=a(109),U=a(110),G=a(111),_=a(112),D=a(113),P=a(114),M=a(115),Z=function(e){var t=Object(n.useState)(!1),a=Object(A.a)(t,2),l=a[0],c=a[1],o=e.user,i=e.setLoggedIn,u=e.loggedIn;return r.a.createElement("div",null,r.a.createElement(B.a,{id:"navbar",color:"dark",dark:!0,expand:"md"},r.a.createElement(F.a,{id:"navbrand",href:"/"},"Fern's Counseling"),r.a.createElement(U.a,{id:"dropdownmenu",onClick:function(){return c(!l)}}),r.a.createElement(G.a,{isOpen:l,navbar:!0},r.a.createElement(_.a,{className:"mr-auto",navbar:!0},r.a.createElement(D.a,null,r.a.createElement(P.a,{tag:R.b,id:"NavLink",to:"/forum"},"Forum")),r.a.createElement(D.a,null,r.a.createElement(P.a,{tag:R.b,id:"NavLink",to:"/about"},"About")),r.a.createElement(D.a,null,r.a.createElement(P.a,{tag:R.b,id:"NavLink",to:"/contact"},"Contact Fern"))),o&&u?null:r.a.createElement("div",{id:"nav-login-button"},r.a.createElement(R.b,{to:"/login"},r.a.createElement(N.a,{outline:!0,color:"primary"},"Login"))),o&&u?r.a.createElement("div",null,r.a.createElement(M.a,{id:"NavBarText"},r.a.createElement(I.a,{id:"fa",icon:L.b}),r.a.createElement("br",null),o.username),r.a.createElement(C,{setLoggedIn:i})):null)))},Q=a(116),Y=a(117),W=a(118);a(104);var z=function(){return r.a.createElement(Q.a,{id:"about",className:"themed-container",fluid:!0},r.a.createElement("div",{id:"heading"},r.a.createElement("h1",{id:"name"},"Nilubon Sukawanich"),r.a.createElement("h4",{id:"title"},"Counselor")),r.a.createElement(Y.a,{flush:!0},r.a.createElement("div",{id:"about-me"},r.a.createElement("h5",null,"Education:")),r.a.createElement(W.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32 (2557 - 2559)",r.a.createElement("br",null),"Chiangmai University Master of Science in Counseling Psychology (2014 - 2016)"),r.a.createElement(W.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32 (2544 - 2547)",r.a.createElement("br",null),"Chiangmai University Bachelor of Science in Counseling Psychology (2001 - 2004)")))},J={login:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=a(121),V=a(122),H=a(123),K=a(124),$=a(35),X=a.n($),ee=a(119),te=function(){return r.a.createElement("div",null,"Loading...",r.a.createElement(ee.a,{type:"grow",color:"primary",style:{width:"5rem",height:"5rem"}}))},ae=a(66),ne={registerUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("/api/users","/register"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=a(127),le=a(120),ce=a(125),oe={textAlign:"center",fontFamily:"Poppins"},ie={display:"inline-block",width:"100px"},ue={display:"block",textAlign:"center"},se={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},me={marginRight:"20px",float:"left",fontFamily:"Poppins"},de=function(){var e=Object(n.useState)(!1),t=Object(A.a)(e,2),a=t[0],l=t[1],c=function(){return l(!a)},i=Object(n.useState)(!1),u=Object(A.a)(i,2),s=u[0],m=u[1],f=Object(n.useState)(!1),E=Object(A.a)(f,2),g=E[0],b=E[1],v=Object(n.useState)(""),h=Object(A.a)(v,2),y=h[0],O=h[1],k=Object(n.useState)(""),w=Object(A.a)(k,2),x=w[0],j=w[1],S=Object(n.useState)(""),I=Object(A.a)(S,2),L=I[0],T=I[1],C=Object(n.useState)(""),R=Object(A.a)(C,2),B=R[0],F=R[1],U=Object(n.useState)(""),G=Object(A.a)(U,2),_=G[0],D=G[1],P=Object(n.useState)(""),M=Object(A.a)(P,2),Z=M[0],Q=M[1],Y=Object(n.useState)(""),W=Object(A.a)(Y,2),z=W[0],J=W[1],$=Object(o.b)(),ee=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y&&x&&Z&&z&&B){e.next=5;break}alert("You must fill all fields"),e.next=42;break;case 5:if(!(B.length<5||x.length<5)){e.next=9;break}alert("Your username and password must be at least 5 characters long"),e.next=42;break;case 9:if(B===_){e.next=13;break}alert("Your passwords are not the same. Try again."),e.next=42;break;case 13:if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(L)){e.next=17;break}alert("Your email address is not valid"),e.next=42;break;case 17:if(s){e.next=21;break}alert("Please verify that you are a human"),e.next=42;break;case 21:return c(),e.prev=22,b(!0),e.next=26,ne.registerUser({name:y,username:x,password:B,email:L,selectedGender:Z,dateOfBirth:z});case 26:b(!1),$({type:"GOOD_REGISTER",message:"Successfully registered! You can now log in."}),j(""),F(""),D(""),O(""),Q(""),T(""),J(""),e.next=42;break;case 37:e.prev=37,e.t0=e.catch(22),console.log(e.t0),b(!1),$({type:"BAD_REGISTER",message:"Something went wrong..."});case 42:case"end":return e.stop()}}),e,null,[[22,37]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"register-form"},g?r.a.createElement("div",null,r.a.createElement(te,null)):r.a.createElement("div",{style:ue},r.a.createElement(N.a,{style:ie,color:"primary",onClick:c},"Sign up"),r.a.createElement(re.a,{autoFocus:!0,isOpen:a,toggle:c,modalTransition:{timeout:300}},r.a.createElement(le.a,null,r.a.createElement("h2",{style:oe},"Register"),r.a.createElement(q.a,{onSubmit:ee},r.a.createElement(V.a,null,r.a.createElement(H.a,{style:se},"Name:"),r.a.createElement(K.a,{onChange:function(e){O(e.target.value)},value:y}),r.a.createElement("br",null),r.a.createElement(H.a,{style:se},"Username:"),r.a.createElement(K.a,{onChange:function(e){j(e.target.value)},value:x}),r.a.createElement("br",null),r.a.createElement(H.a,{style:se},"Password:")," ",r.a.createElement(K.a,{id:"password",type:"password",onChange:function(e){F(e.target.value)},value:B}),r.a.createElement("br",null),r.a.createElement(H.a,{style:se},"Confirm Password:"),r.a.createElement(K.a,{onChange:function(e){D(e.target.value)},type:"password",value:_}),r.a.createElement("br",null),r.a.createElement(H.a,{style:se},"Email:")," ",r.a.createElement(K.a,{id:"email",type:"text",onChange:function(e){T(e.target.value)},value:L}),r.a.createElement("br",null),r.a.createElement(H.a,{style:me},"Gender:"),r.a.createElement(ae.a,{options:[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Other",label:"Other"}],value:Z,onChange:function(e){Q(e)}}),r.a.createElement("br",null),r.a.createElement(H.a,{style:se},"Date of Birth:")," ",r.a.createElement(K.a,{id:"dateOfBirth",type:"date",onChange:function(e){J(e.target.value)},value:z}),r.a.createElement("br",null)))),r.a.createElement(X.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:function(){console.log("captcha loaded successfully")},verifyCallback:function(e){e&&m(!0)}}),r.a.createElement(ce.a,null,r.a.createElement(N.a,{color:"primary",type:"submit",onClick:ee},"Sign Up"),r.a.createElement(N.a,{color:"secondary",onClick:c},"Cancel")))))},pe={textAlign:"center",fontFamily:"Poppins"},fe={display:"block",textAlign:"center"},Ee={width:"70%",display:"inline-block"},ge={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},be={float:"center",width:"100px"},ve=function(e){var t=e.setLoggedIn,a=Object(n.useState)(""),l=Object(A.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(A.a)(u,2),m=s[0],f=s[1],E=Object(o.b)(),g=Object(T.f)(),b=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c&&m){e.next=5;break}alert("You must enter a username and password"),e.next=24;break;case 5:return e.prev=5,e.next=8,J.login({username:c,password:m});case 8:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),E(w(n)),t(!0),E({type:"GOOD_LOGIN",message:"Welcome back ".concat(n.username)}),setTimeout((function(){E({type:"RESET",message:""})}),3e3),i(""),f(""),g.push("/forum"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0.message),e.t0.message.includes("401")?E(O("Make sure your username and password are correct...")):E(O("Something went wrong..."));case 24:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"login-form"},r.a.createElement("h2",{style:pe},"Login"),r.a.createElement("div",{id:"form-div",style:fe},r.a.createElement(q.a,{style:Ee,onSubmit:b},r.a.createElement(V.a,null,r.a.createElement(H.a,{style:ge},"Username:"),r.a.createElement(K.a,{onChange:function(e){i(e.target.value)},value:c}),r.a.createElement("br",null),r.a.createElement(H.a,{style:ge},"Password:")," ",r.a.createElement(K.a,{id:"password",type:"password",onChange:function(e){f(e.target.value)},value:m}),r.a.createElement("br",null),r.a.createElement(N.a,{color:"primary",style:be,id:"submit-login",type:"submit"},"Enter")))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"no-account-div"},r.a.createElement("p",{style:pe},"Don't have an account? "),r.a.createElement(de,null)))},he=function(){return r.a.createElement("div",null,"THE FORUM WILL GO HERE")},ye={sendMessage:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/contact",t);case 2:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=a(65),ke=a(64),we={textAlign:"center",fontFamily:"Poppins"},xe={display:"block",textAlign:"center",marginTop:"50px"},je={width:"90%",display:"inline-block"},Se={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},Ae={float:"center",width:"200px",marginBottom:"20px"},Ie=function(){var e=Object(n.useState)(!1),t=Object(A.a)(e,2),a=t[0],l=t[1],c=Object(T.f)(),o=function(){console.log("captcha loaded successfully")},i=function(e){e&&l(!0)};return r.a.createElement("div",null,r.a.createElement(Oe.a,{initialValues:{name:"",email:"",LINE:"",message:""},validate:function(e){var t={};return e.email||(t.email="Required"),e.message?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.message="Required",t},onSubmit:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.setSubmitting,l=n.resetForm,a){e.next=5;break}alert("Please verify that you are a human"),e.next=12;break;case 5:return e.next=7,ye.sendMessage(t);case 7:o=e.sent,console.log(o.message),r(!1),l({}),c.push("/forum");case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.errors,n=e.touched,l=e.handleChange,c=e.handleBlur,u=e.handleSubmit;e.isSubmitting;return r.a.createElement(Q.a,{style:xe},r.a.createElement("p",{style:{fontFamily:"Poppins"}}," We understand if you don't want to post on the forum just yet.  Instead, you can use this form to contact Fern privately, or add her on social media."),r.a.createElement("div",{id:"NavBarText"},r.a.createElement("a",{href:"mailto:furbynilu@gmail.com"}," ",r.a.createElement(I.a,{id:"fa-contact-form",icon:L.a})),r.a.createElement("a",{href:"https://www.facebook.com/NiluAcounselor"}," ",r.a.createElement(I.a,{id:"fa-contact-form",icon:ke.a}))),r.a.createElement("br",null),r.a.createElement("h3",{style:we},"Enter your information: ")," ",r.a.createElement(q.a,{style:je,onSubmit:u,className:"form-ui"},r.a.createElement(V.a,{style:{marginBottom:"0"}},r.a.createElement(H.a,{style:Se,for:"name"},"Name"),r.a.createElement(K.a,{type:"Name",name:"name",onChange:l,onBlur:c,value:t.name}),r.a.createElement("br",null),r.a.createElement(H.a,{style:Se,for:"email"},"Email"),r.a.createElement(K.a,{placeholder:"You@example.com",type:"Email",name:"email",onChange:l,onBlur:c,value:t.email}),r.a.createElement("br",null),a.email&&n.email&&a.email,r.a.createElement(H.a,{style:Se,for:"Line"},"LINE"),r.a.createElement(K.a,{placeholder:"Line ID",type:"Line",name:"LINE",onChange:l,onBlur:c,value:t.LINE}),r.a.createElement("br",null),r.a.createElement(H.a,{style:Se,for:"message"},"Message")," ",r.a.createElement(K.a,{placeholder:"I have a question about...",type:"Message",name:"message",onChange:l,onBlur:c,value:t.message}),r.a.createElement("br",null),a.message&&n.message&&a.message),r.a.createElement(X.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:o,verifyCallback:i}),r.a.createElement(N.a,{style:Ae,type:"submit",color:"primary"},"Send"),r.a.createElement("br",null)))})))},Le=a(126),Te={textAlign:"center",fontFamily:"Poppins"},Ne=function(){var e=Object(o.c)((function(e){return e.notifications}));return r.a.createElement("div",null,""!==e?r.a.createElement(Le.a,{style:Te,variant:"info"},r.a.createElement("h4",null,e)):null)},Ce=function(){var e=Object(n.useState)(!1),t=Object(A.a)(e,2),a=t[0],l=t[1],c=(Object(o.c)((function(e){return e.forum})),Object(o.c)((function(e){return e.user}))),i=Object(o.b)();return Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedForumUser");if(e){var t=JSON.parse(e);i(w(t)),l(!0),h.setToken(t.token)}}),[i]),r.a.createElement(R.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Z,{user:c,setLoggedIn:l,loggedIn:a}),r.a.createElement(Ne,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/about"},r.a.createElement(z,null)),r.a.createElement(T.a,{path:"/contact"},r.a.createElement(Ie,null)),r.a.createElement(T.a,{path:"/forum"},r.a.createElement(he,null)),r.a.createElement(T.a,{path:"/login"},r.a.createElement(ve,{setLoggedIn:l})),r.a.createElement(T.a,{path:"api/admin"}))))};c.a.render(r.a.createElement(o.a,{store:S},r.a.createElement(Ce,null)),document.getElementById("root"))},67:function(e,t,a){e.exports=a(106)},93:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.220754cb.chunk.js.map