(this["webpackJsonpfern-psy"]=this["webpackJsonpfern-psy"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(12),i=a(28),u=a(59),s=a(60),m=a(6),d=a.n(m),p=a(7),f=a(31),E=a(14),g=a.n(E),b="/api/forum",v=null,h={getAll:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,g.a.post(b,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat(b,"/").concat(e.id),t).data},setToken:function(e){v="bearer ".concat(e)},remove:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},e.next=3,g.a.delete("".concat(b,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),like:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,g.a.put("".concat(b,"/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_QUESTION":return e.concat(t.data);case"INIT_QUESTIONS":return console.log(t.data),t.data;case"LIKE":var a=t.data.id,n=e.find((function(e){return e.id===a})),r=Object(f.a)(Object(f.a)({},n),{},{likes:n.likes+1});return e.map((function(e){return e.id===a?r:e}));case"DELETE_QUESTION":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},O=function(e){return{type:"GOOD_LOGIN",message:e}},w=function(e){return{type:"BAD_LOGIN",message:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKE_QUESTION":case"CREATE_QUESTION":case"DELETE_QUESTION":case"GOOD_LOGIN":case"GOOD_REGISTER":case"BAD_LOGIN":case"BAD_REGISTER":case"LOGOUT":return t.message;case"RESET":return"";default:return e}},k=function(e){return console.log(e),{type:"SET_USER",data:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"CLEAR_USER":return t.data;default:return e}},S={sendContact:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/contact",t);case 2:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/contact");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_CONTACTS":return t.data;default:return e}},I={registerUser:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("/api/users","/register"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllUsers:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ALL_USERS":return t.data;default:return e}},N=Object(i.combineReducers)({forum:y,notifications:x,activeUser:j,contact:A,userInfoForAdmin:L}),T=Object(i.createStore)(N,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),C=(a(92),a(93),a(9)),F=a(17),U=a(11),_=a(30),R=a(34),B=a(107),D=function(e){var t=e.setLoggedIn,a=Object(U.f)(),n=Object(o.b)();return r.a.createElement("div",{id:"nav-logout-button"},r.a.createElement(B.a,{onClick:function(){window.localStorage.clear(),t(!1),n({type:"CLEAR_USER",data:null}),n({type:"LOGOUT",message:"You have logged out"}),setTimeout((function(){n({type:"RESET",message:""})}),3e3),a.push("/")},outline:!0,color:"secondary",size:"sm"},"Logout"))},G=a(108),P=a(109),Z=a(110),M=a(111),Q=a(112),W=a(113),Y=a(114),z=a(115),J=function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),l=a[0],c=a[1],o=e.activeUser,i=e.setLoggedIn,u=e.loggedIn;return r.a.createElement("div",null,r.a.createElement(G.a,{id:"navbar",color:"dark",dark:!0,expand:"md"},r.a.createElement(P.a,{id:"navbrand",href:"/"},"Fern's Counseling"),r.a.createElement(Z.a,{id:"dropdownmenu",onClick:function(){return c(!l)}}),r.a.createElement(M.a,{isOpen:l,navbar:!0},r.a.createElement(Q.a,{className:"mr-auto",navbar:!0},r.a.createElement(W.a,null,r.a.createElement(Y.a,{tag:F.b,id:"NavLink",to:"/forum"},"Forum")),r.a.createElement(W.a,null,r.a.createElement(Y.a,{tag:F.b,id:"NavLink",to:"/about"},"About")),r.a.createElement(W.a,null,o&&"Fern-Admin"===o.username?r.a.createElement(Y.a,{tag:F.b,id:"NavLink",to:"/admin/dashboard"},"Dashboard"):r.a.createElement(Y.a,{tag:F.b,id:"NavLink",to:"/contact"},"Contact Fern")),o&&u?null:r.a.createElement(W.a,null,r.a.createElement(Y.a,{tag:F.b,id:"NavLink",to:"/admin"},"Admin"))),o&&u?null:r.a.createElement("div",{id:"nav-login-button"},r.a.createElement(F.b,{to:"/login"},r.a.createElement(B.a,{outline:!0,color:"primary"},"Login"))),o&&u?r.a.createElement("div",null,r.a.createElement(z.a,{id:"NavBarText"},r.a.createElement(_.a,{id:"fa",icon:R.b}),r.a.createElement("br",null),o.username),r.a.createElement(D,{setLoggedIn:i})):null)))},q=a(116),V=a(117),H=a(118);a(104);var K=function(){return r.a.createElement(q.a,{id:"about",className:"themed-container",fluid:!0},r.a.createElement("div",{id:"heading"},r.a.createElement("h1",{id:"name"},"Nilubon Sukawanich"),r.a.createElement("h4",{id:"title"},"Counselor")),r.a.createElement(V.a,{flush:!0},r.a.createElement("div",{id:"about-me"},r.a.createElement("h5",null,"Education:")),r.a.createElement(H.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32 (2557 - 2559)",r.a.createElement("br",null),"Chiangmai University Master of Science in Counseling Psychology (2014 - 2016)"),r.a.createElement(H.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32 (2544 - 2547)",r.a.createElement("br",null),"Chiangmai University Bachelor of Science in Counseling Psychology (2001 - 2004)")))},$={userlogin:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/admin",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=a(121),ee=a(122),te=a(123),ae=a(124),ne=a(35),re=a.n(ne),le=a(128),ce=a(120),oe=a(125),ie=a(66),ue=a(119),se=function(){return r.a.createElement("div",null,"Loading...",r.a.createElement(ue.a,{type:"grow",color:"primary",style:{width:"5rem",height:"5rem"}}))},me={textAlign:"center",fontFamily:"Poppins"},de={display:"inline-block",width:"100px"},pe={display:"block",textAlign:"center"},fe={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},Ee={marginRight:"20px",float:"left",fontFamily:"Poppins"},ge=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(C.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!1),f=Object(C.a)(m,2),E=f[0],g=f[1],b=Object(n.useState)(""),v=Object(C.a)(b,2),h=v[0],y=v[1],O=Object(n.useState)(""),w=Object(C.a)(O,2),x=w[0],k=w[1],j=Object(n.useState)(""),S=Object(C.a)(j,2),A=S[0],L=S[1],N=Object(n.useState)(""),T=Object(C.a)(N,2),F=T[0],U=T[1],_=Object(n.useState)(""),R=Object(C.a)(_,2),D=R[0],G=R[1],P=Object(n.useState)(""),Z=Object(C.a)(P,2),M=Z[0],Q=Z[1],W=Object(n.useState)(""),Y=Object(C.a)(W,2),z=Y[0],J=Y[1],q=Object(o.b)(),V=function(){return l(!a)},H=["fern","Fern","admin","Admin","administrator","Administrator","nilubon","Nilubon","Fern-Admin","Fern-admin","fern-admin","fern-Admin","Fern Admin","fern Admin","Fern admin","fern admin","FernAdmin","fernAdmin","fern_admin","Fern_Admin"],K=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!H.includes(x)&&!H.map((function(e){return e.toLowerCase})).includes(x)){e.next=5;break}alert("Sorry, that username is restricted"),e.next=46;break;case 5:if(h&&x&&M&&z&&F){e.next=9;break}alert("You must fill all fields"),e.next=46;break;case 9:if(!(F.length<5||x.length<5)){e.next=13;break}alert("Your username and password must be at least 5 characters long"),e.next=46;break;case 13:if(F===D){e.next=17;break}alert("Your passwords are not the same. Try again."),e.next=46;break;case 17:if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(A)){e.next=21;break}alert("Your email address is not valid"),e.next=46;break;case 21:if(E){e.next=25;break}alert("Please verify that you are a human"),e.next=46;break;case 25:return V(),e.prev=26,s(!0),e.next=30,I.registerUser({name:h,username:x,password:F,email:A,selectedGender:M,dateOfBirth:z});case 30:s(!1),q({type:"GOOD_REGISTER",message:"Successfully registered! You can now log in."}),k(""),U(""),G(""),y(""),Q(""),L(""),J(""),e.next=46;break;case 41:e.prev=41,e.t0=e.catch(26),console.log(e.t0),s(!1),q({type:"BAD_REGISTER",message:"Something went wrong..."});case 46:case"end":return e.stop()}}),e,null,[[26,41]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"register-form"},u?r.a.createElement("div",null,r.a.createElement(se,null)):r.a.createElement("div",{style:pe},r.a.createElement(B.a,{style:de,color:"primary",onClick:V},"Sign up"),r.a.createElement(le.a,{autoFocus:!0,isOpen:a,toggle:V,modalTransition:{timeout:300}},r.a.createElement(ce.a,null,r.a.createElement("h2",{style:me},"Register"),r.a.createElement(X.a,{onSubmit:K},r.a.createElement(ee.a,null,r.a.createElement(te.a,{style:fe},"Name:"),r.a.createElement(ae.a,{onChange:function(e){y(e.target.value)},value:h}),r.a.createElement("br",null),r.a.createElement(te.a,{style:fe},"Username:"),r.a.createElement(ae.a,{onChange:function(e){k(e.target.value)},value:x}),r.a.createElement("br",null),r.a.createElement(te.a,{style:fe},"Password:")," ",r.a.createElement(ae.a,{id:"password",type:"password",onChange:function(e){U(e.target.value)},value:F}),r.a.createElement("br",null),r.a.createElement(te.a,{style:fe},"Confirm Password:"),r.a.createElement(ae.a,{onChange:function(e){G(e.target.value)},type:"password",value:D}),r.a.createElement("br",null),r.a.createElement(te.a,{style:fe},"Email:")," ",r.a.createElement(ae.a,{id:"email",type:"text",onChange:function(e){L(e.target.value)},value:A}),r.a.createElement("br",null),r.a.createElement(te.a,{style:Ee},"Gender:"),r.a.createElement(ie.a,{options:[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Other",label:"Other"}],value:M,onChange:function(e){Q(e)}}),r.a.createElement("br",null),r.a.createElement(te.a,{style:fe},"Date of Birth:")," ",r.a.createElement(ae.a,{id:"dateOfBirth",type:"date",onChange:function(e){J(e.target.value)},value:z}),r.a.createElement("br",null)))),r.a.createElement(re.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:function(){console.log("captcha loaded successfully")},verifyCallback:function(e){e&&g(!0)}}),r.a.createElement(oe.a,null,r.a.createElement(B.a,{color:"primary",type:"submit",onClick:K},"Sign Up"),r.a.createElement(B.a,{color:"secondary",onClick:V},"Cancel")))))},be={textAlign:"center",fontFamily:"Poppins"},ve={display:"block",textAlign:"center"},he={width:"70%",display:"inline-block"},ye={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},Oe={float:"center",width:"100px"},we=function(e){var t=e.setLoggedIn,a=Object(n.useState)(""),l=Object(C.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(C.a)(u,2),m=s[0],f=s[1],E=Object(o.b)(),g=Object(U.f)(),b=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c&&m){e.next=5;break}alert("You must enter a username and password"),e.next=24;break;case 5:return e.prev=5,e.next=8,$.userlogin({username:c,password:m});case 8:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),E(k(n)),t(!0),E(O("Welcome back ".concat(n.username))),setTimeout((function(){E({type:"RESET",message:""})}),3e3),i(""),f(""),g.push("/forum"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0.message),e.t0.message.includes("401")?E(w("Make sure your username and password are correct...")):E(w("Something went wrong..."));case 24:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"login-form"},r.a.createElement("h2",{style:be},"Login"),r.a.createElement("div",{id:"form-div",style:ve},r.a.createElement(X.a,{style:he,onSubmit:b},r.a.createElement(ee.a,null,r.a.createElement(te.a,{style:ye},"Username:"),r.a.createElement(ae.a,{onChange:function(e){i(e.target.value)},value:c}),r.a.createElement("br",null),r.a.createElement(te.a,{style:ye},"Password:")," ",r.a.createElement(ae.a,{id:"password",type:"password",onChange:function(e){f(e.target.value)},value:m}),r.a.createElement("br",null),r.a.createElement(B.a,{color:"primary",style:Oe,id:"submit-login",type:"submit"},"Enter")))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"no-account-div"},r.a.createElement("p",{style:be},"Don't have an account? "),r.a.createElement(ge,null)))},xe=function(){return r.a.createElement("div",null,"THE FORUM WILL GO HERE")},ke=a(65),je=a(64),Se={textAlign:"center",fontFamily:"Poppins"},Ae={display:"block",textAlign:"center",marginTop:"50px"},Ie={width:"90%",display:"inline-block"},Le={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},Ne={float:"center",width:"200px",marginBottom:"20px"},Te=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(U.f)(),o=function(){console.log("captcha loaded successfully")},i=function(e){e&&l(!0)};return r.a.createElement("div",null,r.a.createElement(ke.a,{initialValues:{name:"",email:"",LINE:"",message:""},validate:function(e){var t={};return e.email||(t.email="Required"),e.message?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.message="Required",t},onSubmit:function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.setSubmitting,l=n.resetForm,a){e.next=5;break}alert("Please verify that you are a human"),e.next=12;break;case 5:return e.next=7,S.sendContact(t);case 7:o=e.sent,console.log(o.message),r(!1),l({}),c.push("/forum");case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.errors,n=e.touched,l=e.handleChange,c=e.handleBlur,u=e.handleSubmit;e.isSubmitting;return r.a.createElement(q.a,{style:Ae},r.a.createElement("p",{style:{fontFamily:"Poppins"}}," We understand if you don't want to post on the forum just yet.  Instead, you can use this form to contact Fern privately, or add her on social media."),r.a.createElement("div",{id:"NavBarText"},r.a.createElement("a",{href:"mailto:furbynilu@gmail.com"}," ",r.a.createElement(_.a,{id:"fa-contact-form",icon:R.a})),r.a.createElement("a",{href:"https://www.facebook.com/NiluAcounselor"}," ",r.a.createElement(_.a,{id:"fa-contact-form",icon:je.a}))),r.a.createElement("br",null),r.a.createElement("h3",{style:Se},"Enter your information: "),r.a.createElement(X.a,{style:Ie,onSubmit:u,className:"form-ui"},r.a.createElement(ee.a,{style:{marginBottom:"0"}},r.a.createElement(te.a,{style:Le,for:"name"},"Name"),r.a.createElement(ae.a,{type:"Name",name:"name",onChange:l,onBlur:c,value:t.name}),r.a.createElement("br",null),r.a.createElement(te.a,{style:Le,for:"email"},"Email"),r.a.createElement(ae.a,{placeholder:"You@example.com",type:"Email",name:"email",onChange:l,onBlur:c,value:t.email}),r.a.createElement("br",null),a.email&&n.email&&a.email,r.a.createElement(te.a,{style:Le,for:"Line"},"LINE"),r.a.createElement(ae.a,{placeholder:"Line ID",type:"Line",name:"LINE",onChange:l,onBlur:c,value:t.LINE}),r.a.createElement("br",null),r.a.createElement(te.a,{style:Le,for:"message"},"Message"),r.a.createElement(ae.a,{placeholder:"I have a question about...",type:"Message",name:"message",onChange:l,onBlur:c,value:t.message}),r.a.createElement("br",null),a.message&&n.message&&a.message),r.a.createElement(re.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:o,verifyCallback:i}),r.a.createElement(B.a,{style:Ne,type:"submit",color:"primary"},"Send"),r.a.createElement("br",null)))})))},Ce=a(127),Fe={textAlign:"center",fontFamily:"Poppins"},Ue=function(){var e=Object(o.c)((function(e){return e.notifications}));return r.a.createElement("div",null,""!==e?r.a.createElement(Ce.a,{style:Fe,variant:"info"},r.a.createElement("h4",null,e)):null)},_e={textAlign:"center",fontFamily:"Poppins"},Re={display:"block",textAlign:"center"},Be={width:"70%",display:"inline-block"},De={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Poppins"},Ge={float:"center",width:"200px"},Pe=function(e){var t=e.setLoggedIn,a=Object(n.useState)(""),l=Object(C.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(C.a)(u,2),m=s[0],f=s[1],E=Object(o.b)(),g=Object(U.f)(),b=function(){var e=Object(p.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c&&m){e.next=5;break}alert("You must enter a username and password"),e.next=24;break;case 5:return e.prev=5,e.next=8,$.adminLogin({username:c,password:m});case 8:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),E(k(n)),t(!0),E(O("Welcome back ".concat(n.username))),setTimeout((function(){E({type:"RESET",message:""})}),3e3),i(""),f(""),g.push("/admin/dashboard"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0.message),e.t0.message.includes("401")?E(w("Are you sure you are the admin? Check your username and password again...")):E(w("Something went wrong..."));case 24:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"admin-login-form"},r.a.createElement("h2",{style:_e},"Admin Login"),r.a.createElement("div",{id:"form-div",style:Re},r.a.createElement(X.a,{style:Be,onSubmit:b},r.a.createElement(ee.a,null,r.a.createElement(te.a,{style:De},"Username:"),r.a.createElement(ae.a,{onChange:function(e){i(e.target.value)},value:c}),r.a.createElement("br",null),r.a.createElement(te.a,{style:De},"Password:")," ",r.a.createElement(ae.a,{id:"password",type:"password",onChange:function(e){f(e.target.value)},value:m}),r.a.createElement("br",null),r.a.createElement(B.a,{color:"none",style:Ge,id:"admin-submit-login",type:"submit"},"Enter")))))},Ze=a(126),Me={marginTop:"20px"},Qe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.contact})),a=Object(n.useState)(!1),l=Object(C.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:a=e.sent,t({type:"INIT_CONTACTS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(q.a,null,r.a.createElement(B.a,{style:Me,outline:!0,color:"primary",onClick:function(){return i(!c)}},"Show messages"),c?r.a.createElement(Ze.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"LINE"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Message"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.LINE),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.message))})))):null)},We={marginTop:"20px"},Ye=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userInfoForAdmin})),a=Object(n.useState)(!1),l=Object(C.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getAllUsers();case 2:a=e.sent,t({type:"INIT_ALL_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(q.a,null,r.a.createElement(B.a,{style:We,outline:!0,color:"success",onClick:function(){return i(!c)}},"Show Users"),c?r.a.createElement(Ze.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Birthday"),r.a.createElement("th",null,"Questions"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dateOfBirth),r.a.createElement("td",null,e.questions.map((function(e){return r.a.createElement("li",{key:e.id},e)}))))})))):null)},ze=function(){return r.a.createElement("div",{style:{fontFamily:"Poppins",fontWeight:"700",textAlign:"center",marginTop:"300px"}},r.a.createElement("h1",null,"Sorry, but this page doesn't exist..."))},Je=function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(o.c)((function(e){return e.activeUser})),i=Object(o.b)();return Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedForumUser");if(e){var t=JSON.parse(e);i(k(t)),l(!0),h.setToken(t.token)}}),[i]),r.a.createElement(F.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,{activeUser:c,setLoggedIn:l,loggedIn:a}),r.a.createElement(Ue,null),r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/about"},r.a.createElement(K,null)),r.a.createElement(U.a,{path:"/contact"},r.a.createElement(Te,null)),r.a.createElement(U.a,{path:"/forum"},r.a.createElement(xe,null)),r.a.createElement(U.a,{path:"/login"},r.a.createElement(we,{setLoggedIn:l})),r.a.createElement(U.a,{path:"/admin/dashboard"},c&&"Fern-Admin"===c.username?r.a.createElement("div",null,r.a.createElement(Qe,null),r.a.createElement(Ye,null)):r.a.createElement(ze,null)),r.a.createElement(U.a,{path:"/admin"},r.a.createElement(Pe,{setLoggedIn:l})))))};c.a.render(r.a.createElement(o.a,{store:T},r.a.createElement(Je,null)),document.getElementById("root"))},67:function(e,t,a){e.exports=a(106)},93:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.ad59c87c.chunk.js.map