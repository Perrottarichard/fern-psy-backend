(this["webpackJsonpfern-psy"]=this["webpackJsonpfern-psy"]||[]).push([[0],{104:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(13),i=a(35),u=a(68),s=a(69),m=a(6),d=a.n(m),f=a(8),p=a(25),b=a(19),g=a.n(b),E="/api/forum",y=null,h={getPending:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(E,"/pending"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAnswered:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(E,"/answered"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,g.a.post(E,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e){return g.a.put("".concat(E,"/").concat(e._id),e).data},setToken:function(e){y="bearer ".concat(e)},remove:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:y}},e.next=3,g.a.delete("".concat(E,"/").concat(t.id),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),like:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.next=3,g.a.put("".concat(E,"/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=a(9),w=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.update(e);case 2:a({type:"POST_ANSWER",data:e}),v.b.success("You answered a question!");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.create(e);case 2:n=t.sent,a({type:"NEW_QUESTION",data:n}),v.b.success("You submitted a question!");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_QUESTION":return e;case"INIT_FORUM_PENDING":case"INIT_FORUM_ANSWERED":return t.data;case"LIKE":var a=t.data.id,n=e.find((function(e){return e.id===a})),r=Object(p.a)(Object(p.a)({},n),{},{likes:n.likes+1});return e.map((function(e){return e.id===a?r:e}));case"POST_ANSWER":var l=t.data._id,c=e.find((function(e){return e._id===l})),o=Object(p.a)(Object(p.a)({},c),{},{isAnswered:!0,answer:t.data.answer});return e.map((function(e){return e._id===l?o:e}));case"DELETE_QUESTION":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},O=function(e){return{type:"SET_USER",data:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"CLEAR_USER":return t.data;default:return e}},C={sendContact:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/contact",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/contact");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),hideContact:function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t._id,e.next=3,g.a.put("".concat("/api/contact","/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_CONTACTS":return t.data;case"SET_CONTACT_HIDDEN":return e.filter((function(e){return e._id!==t.data._id}));default:return e}},A={registerUser:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("/api/users","/register"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllUsers:function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_ALL_USERS":return t.data;default:return e}},T=Object(i.combineReducers)({forum:k,activeUser:j,contact:S,userInfoForAdmin:F}),M=Object(i.createStore)(T,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),N=(a(103),a(104),a(12)),I=a(20),L=a(16),_=(a(105),a(29)),U=a(32),B=a(123),R=function(e){var t=e.setLoggedIn,a=Object(L.f)(),n=Object(o.b)();return r.a.createElement("div",{id:"nav-logout-button"},r.a.createElement(B.a,{onClick:function(){window.localStorage.clear(),t(!1),v.b.info("Logged out"),n({type:"CLEAR_USER",data:null}),a.push("/")},outline:!0,color:"secondary",size:"sm"},"Logout"))},D=a(124),P=a(125),q=a(126),W=a(70),z=a(127),Y=a(128),G=a(129),Q=a(130),V=function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),l=a[0],c=a[1],o=e.activeUser,i=e.setLoggedIn,u=e.loggedIn;return r.a.createElement("div",null,r.a.createElement(D.a,{color:"dark",id:"navbar",dark:!0,expand:"md"},r.a.createElement(P.a,{id:"navbrand",href:"/"},"Fern's Counseling"),r.a.createElement(q.a,{id:"dropdownmenu",onClick:function(){return c(!l)}}),r.a.createElement(W.a,{isOpen:l,navbar:!0},r.a.createElement(z.a,{className:"mr-auto",navbar:!0},r.a.createElement(Y.a,null,r.a.createElement(G.a,{tag:I.b,id:"NavLink",to:"/forum"},"Forum")),r.a.createElement(Y.a,null,r.a.createElement(G.a,{tag:I.b,id:"NavLink",to:"/about"},"About")),r.a.createElement(Y.a,null,o&&"Fern-Admin"===o.username?r.a.createElement(G.a,{tag:I.b,id:"NavLink",to:"/admin/dashboard"},"Dashboard"):r.a.createElement(G.a,{tag:I.b,id:"NavLink",to:"/contact"},"Contact Fern")),o&&u?null:r.a.createElement(Y.a,null,r.a.createElement(G.a,{tag:I.b,id:"NavLink",to:"/admin"},"Admin"))),o&&u?null:r.a.createElement("div",{id:"nav-login-button"},r.a.createElement(I.b,{to:"/login"},r.a.createElement(B.a,{outline:!0,color:"secondary",size:"sm"},"Login"))),o&&u?r.a.createElement("div",null,r.a.createElement(Q.a,{id:"NavBarText"},r.a.createElement(_.a,{id:"fa-user-icon",icon:U.d}),r.a.createElement("br",null),o.username),r.a.createElement(R,{setLoggedIn:i})):null)))},Z=a(131),H=a(132),J=a(133),$=a(71),K=a.n($);a(116);var X=function(){return r.a.createElement(Z.a,{id:"about",className:"themed-container",fluid:!0},r.a.createElement("div",{id:"heading"},r.a.createElement("h1",{id:"name"},"Nilubon Sukawanich"),r.a.createElement("h4",{id:"title"},"Counselor")),r.a.createElement("div",{style:{marginBottom:"80px"}},r.a.createElement("img",{src:K.a,alt:"fern"})),r.a.createElement("hr",null),r.a.createElement(H.a,{flush:!0},r.a.createElement("div",{id:"about-me"},r.a.createElement("h5",null,"Education:")),r.a.createElement(J.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32 (2557 - 2559)",r.a.createElement("br",null),"Chiangmai University Master of Science in Counseling Psychology (2014 - 2016)"),r.a.createElement(J.a,{id:"list"},"\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e40\u0e0a\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e1a\u0e31\u0e13\u0e11\u0e34\u0e15 \u0e2a\u0e32\u0e02\u0e32\u0e08\u0e34\u0e15\u0e27\u0e34\u0e17\u0e22\u0e32 (2544 - 2547)",r.a.createElement("br",null),"Chiangmai University Bachelor of Science in Counseling Psychology (2001 - 2004)")))},ee={userlogin:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),adminLogin:function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/admin",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=a(136),ae=a(137),ne=a(138),re=a(139),le=a(42),ce=a.n(le),oe=a(149),ie=a(135),ue=a(140),se=a(46),me=a(134),de=function(){return r.a.createElement("div",null,"Loading...",r.a.createElement(me.a,{type:"grow",color:"primary",style:{width:"5rem",height:"5rem"}}))},fe={textAlign:"center",fontFamily:"Montserrat"},pe={display:"inline-block",fontFamily:"Montserrat",float:"center",width:"100px"},be={display:"block",textAlign:"center",fontFamily:"Montserrat"},ge={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Montserrat"},Ee={marginRight:"20px",float:"left",fontFamily:"Montserrat"},ye=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(N.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!1),p=Object(N.a)(m,2),b=p[0],g=p[1],E=Object(n.useState)(""),y=Object(N.a)(E,2),h=y[0],w=y[1],x=Object(n.useState)(""),k=Object(N.a)(x,2),O=k[0],j=k[1],C=Object(n.useState)(""),S=Object(N.a)(C,2),F=S[0],T=S[1],M=Object(n.useState)(""),I=Object(N.a)(M,2),L=I[0],_=I[1],U=Object(n.useState)(""),R=Object(N.a)(U,2),D=R[0],P=R[1],q=Object(n.useState)(""),W=Object(N.a)(q,2),z=W[0],Y=W[1],G=Object(n.useState)(""),Q=Object(N.a)(G,2),V=Q[0],Z=Q[1],H=(Object(o.b)(),function(){return l(!a)}),J=["fern","Fern","admin","Admin","administrator","Administrator","nilubon","Nilubon","Fern-Admin","Fern-admin","fern-admin","fern-Admin","Fern Admin","fern Admin","Fern admin","fern admin","FernAdmin","fernAdmin","fern_admin","Fern_Admin"],$=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!J.includes(O)&&!J.map((function(e){return e.toLowerCase})).includes(O)){e.next=5;break}v.b.warn("Sorry, that username is restricted"),e.next=45;break;case 5:if(h&&O&&z&&V&&L){e.next=9;break}v.b.warn("You must fill all fields"),e.next=45;break;case 9:if(!(L.length<5||O.length<5)){e.next=13;break}v.b.warn("Your username and password must be at least 5 characters long"),e.next=45;break;case 13:if(L===D){e.next=17;break}v.b.warn("Your passwords are not the same. Try again."),e.next=45;break;case 17:if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(F)){e.next=21;break}v.b.warn("Your email address is not valid"),e.next=45;break;case 21:if(b){e.next=25;break}v.b.warn("Please verify that you are a human"),e.next=45;break;case 25:return H(),e.prev=26,s(!0),e.next=30,A.registerUser({name:h,username:O,password:L,email:F,selectedGender:z,dateOfBirth:V});case 30:s(!1),j(""),_(""),P(""),w(""),Y(""),T(""),Z(""),e.next=45;break;case 40:e.prev=40,e.t0=e.catch(26),console.log(e.t0),v.b.error("Something went wrong..."),s(!1);case 45:case"end":return e.stop()}}),e,null,[[26,40]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"register-form"},u?r.a.createElement("div",null,r.a.createElement(de,null)):r.a.createElement("div",{style:be},r.a.createElement(B.a,{style:pe,color:"secondary",onClick:H},"Sign up"),r.a.createElement(oe.a,{autoFocus:!0,isOpen:a,toggle:H,modalTransition:{timeout:300}},r.a.createElement(ie.a,null,r.a.createElement("h2",{style:fe},"Register"),r.a.createElement(te.a,{onSubmit:$},r.a.createElement(ae.a,null,r.a.createElement(ne.a,{style:ge},"Name:"),r.a.createElement(re.a,{onChange:function(e){w(e.target.value)},value:h}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:ge},"Username:"),r.a.createElement(re.a,{onChange:function(e){j(e.target.value)},value:O}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:ge},"Password:")," ",r.a.createElement(re.a,{id:"password",type:"password",onChange:function(e){_(e.target.value)},value:L}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:ge},"Confirm Password:"),r.a.createElement(re.a,{onChange:function(e){P(e.target.value)},type:"password",value:D}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:ge},"Email:")," ",r.a.createElement(re.a,{id:"email",type:"text",onChange:function(e){T(e.target.value)},value:F}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:Ee},"Gender:"),r.a.createElement(se.a,{options:[{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Other",label:"Other"}],value:z,onChange:function(e){Y(e)}}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:ge},"Date of Birth:")," ",r.a.createElement(re.a,{id:"dateOfBirth",type:"date",onChange:function(e){Z(e.target.value)},value:V}),r.a.createElement("br",null)))),r.a.createElement(ce.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:function(){console.log("captcha loaded successfully")},verifyCallback:function(e){e&&g(!0)}}),r.a.createElement(ue.a,null,r.a.createElement(B.a,{type:"submit",color:"secondary",onClick:$},"Sign Up"),r.a.createElement(B.a,{onClick:H},"Cancel")))))},he={textAlign:"center",fontFamily:"Montserrat",color:"black"},ve={display:"block",textAlign:"center"},we={width:"70%",display:"inline-block"},xe={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Montserrat",color:"white"},ke={float:"center",width:"200px",backgroundColor:"#288046",fontFamily:"Montserrat"},Oe=function(e){var t=e.setLoggedIn,a=Object(n.useState)(""),l=Object(N.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(N.a)(u,2),m=s[0],p=s[1],b=Object(o.b)(),g=Object(L.f)(),E=function(){var e=Object(f.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c&&m){e.next=5;break}v.b.warn("You must enter a username and password"),e.next=23;break;case 5:return e.prev=5,e.next=8,ee.userlogin({username:c,password:m});case 8:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),b(O(n)),v.b.info("Welcome back ".concat(n.username)),t(!0),i(""),p(""),g.push("/forum"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.log(e.t0.message),e.t0.message.includes("401")?v.b.error("Check your username and password again"):v.b.error("Something went wrong...");case 23:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"login-form"},r.a.createElement("h2",{style:he},"Login"),r.a.createElement("div",{id:"form-div",style:ve},r.a.createElement(te.a,{style:we,onSubmit:E},r.a.createElement(ae.a,null,r.a.createElement(ne.a,{style:xe},"Username:"),r.a.createElement(re.a,{onChange:function(e){i(e.target.value)},value:c}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:xe},"Password:")," ",r.a.createElement(re.a,{id:"password",type:"password",onChange:function(e){p(e.target.value)},value:m}),r.a.createElement("br",null),r.a.createElement(B.a,{style:ke,id:"submit-login",type:"submit"},"Enter")))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"no-account-div"},r.a.createElement("p",{style:he},"Don't have an account? "),r.a.createElement(ye,null)))},je=a(77),Ce={fontFamily:"Montserrat",fontVariant:"small-caps",fontWeight:400,fontSize:"1.5rem",marginBottom:"0px",marginTop:"30px"},Se={marginTop:"20px",width:"200px",backgroundColor:"#288046",fontFamily:"Montserrat"},Ae=[{value:"sex",label:"Sex"},{value:"dating",label:"Dating"},{value:"illegal drugs",label:"Illegal Drugs"},{value:"friendship",label:"Friendship"},{value:"lgbt",label:"LGBT"},{value:"depression",label:"Depression"},{value:"anxiety",label:"Anxiety"},{value:"bipolar",label:"Bipolar"},{value:"relationships",label:"Relationships"},{value:"career",label:"Career"},{value:"mentalHealth",label:"Mental Health"},{value:"bullying",label:"Bullying"},{value:"family",label:"Family"},{value:"peerPressure",label:"Peer Pressure"},{value:"parenting",label:"Parenting"},{value:"other",label:"Other"}],Fe=function(e){var t=e.activeUser,a=Object(n.useState)(""),l=Object(N.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(N.a)(u,2),m=s[0],p=s[1],b=Object(n.useState)([]),g=Object(N.a)(b,2),E=g[0],y=g[1],h=Object(je.a)(),w=Object(o.b)(),k=Object(L.f)(),O=function(){var e=Object(f.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),m&&c&&E)if("Fern-Admin"===t.username||"Richard-Admin"===t.username)v.b.warn("Why are you trying to ask yourself a question?");else{n={title:m,question:c,answer:"",isAnswered:!1,tags:E.map((function(e){return e.value})),likes:0};try{w(x(n)),p(""),i(""),y([]),k.push("/forum")}catch(r){console.log(r)}}else v.b.warn("Please make sure you have a title, a question, and some tags");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,null,r.a.createElement("div",{id:"forum-title-div"},r.a.createElement(ne.a,{style:Ce},"Title:"),r.a.createElement("p",{style:{fontFamily:"Montserrat"}},"Give your post an interesting title."),r.a.createElement(re.a,{placeholder:"My Awesome Title!",onChange:function(e){p(e.target.value)},value:m,style:{marginBottom:"20px",fontFamily:"Montserrat"}})),r.a.createElement("div",{id:"forum-question-div"},r.a.createElement(ne.a,{style:Ce},"Question:"),r.a.createElement("p",{style:{fontFamily:"Montserrat"}},"Reminder: This forum is anonymous. Although you must have an account to post, your name and username will NOT show on the forum, so feel free to ask anything."),r.a.createElement(re.a,{type:"textarea",placeholder:"I have a question about...",onChange:function(e){i(e.target.value)},value:c,onSubmit:O,style:{fontFamily:"Montserrat"}}),r.a.createElement(ne.a,{style:Ce},"Tags:"),r.a.createElement("p",{style:{fontFamily:"Montserrat"}},"Select some tags to help other people know what your question is about!"),r.a.createElement(se.a,{options:Ae,onChange:function(e){y(e)},closeMenuOnSelect:!1,components:h,style:{fontFamily:"Montserrat"},defaultValue:[],isMulti:!0}),r.a.createElement("div",{style:{display:"block",textAlign:"center"}},r.a.createElement(B.a,{style:Se,onClick:O},"Ask Fern!"))))},Te=a(141),Me=a(142),Ne=a(143),Ie=a(144),Le=a(145),_e=a(146),Ue=[{tag:"sex",backgroundColor:"#343a40"},{tag:"dating",backgroundColor:"#288046"},{tag:"relationships",backgroundColor:"#ffa64d"},{tag:"lgbt",backgroundColor:"#ff4da6"},{tag:"friendship",backgroundColor:"#5050ff"},{tag:"depression",backgroundColor:"#ff5c4d"},{tag:"anxiety",backgroundColor:"#a6ff4d"},{tag:"bipolar",backgroundColor:"#f347ff"},{tag:"career",backgroundColor:"#8e2bff"},{tag:"mentalHealth",backgroundColor:"#1e45a8"},{tag:"bullying",backgroundColor:"#5e320f"},{tag:"family",backgroundColor:"#ffa64d"},{tag:"peerPressure",backgroundColor:"#288046"},{tag:"parenting",backgroundColor:"#6da870"},{tag:"other",backgroundColor:"#707571"},{tag:"illegal drugs",backgroundColor:"#40073d"}],Be=function(e){var t=Ue.find((function(t){return t.tag===e}));return t?{backgroundColor:t.backgroundColor,width:"80px",verticalAlign:"middle",postition:"relative"}:{backgroundColor:"magenta",width:"80px"}},Re={fontFamily:"Montserrat",fontSize:"14px",backgroundColor:"#343a40",color:"white",marginTop:"10px",paddingTop:"6px",paddingBottom:"6px"},De={fontSize:"14px",fontFamily:"Montserrat",padding:"10px"},Pe={fontFamily:"Montserrat"},qe={fontFamily:"Montserrat"},We={float:"right"},ze={backgroundColor:"#4da6ff",height:"28px",width:"35px",lineHeight:"5px",paddingRight:"25px",borderRadius:"20px"},Ye=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.forum}));return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAnswered();case 2:a=e.sent,t({type:"INIT_FORUM_ANSWERED",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(Z.a,null,t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(Te.a,null,r.a.createElement(Me.a,{style:Re,tag:"h5"},e.title,r.a.createElement("small",{className:"text-muted",style:We},e.date.slice(0,10))),r.a.createElement(Ne.a,{style:De},r.a.createElement(Ie.a,{style:Pe},e.question),r.a.createElement(Le.a,{style:qe},e.answer),r.a.createElement(B.a,{style:ze},r.a.createElement(_.a,{icon:U.c}))),r.a.createElement("div",{style:{display:"block"}},e.tags.map((function(e){return r.a.createElement(_e.a,{style:Be(e),pill:!0},e)})))))})),"Have a question?",r.a.createElement("br",null),r.a.createElement(I.b,{to:"/forum/post"},r.a.createElement(B.a,{style:{fontFamily:"Montserrat"}},"Submit a Post")))},Ge=a(76),Qe=a(75),Ve={textAlign:"center",fontFamily:"Montserrat",fontVariant:"small-caps"},Ze={display:"block",textAlign:"center",marginTop:"50px",fontFamily:"Montserrat"},He={width:"90%",display:"inline-block"},Je={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Montserrat",fontVariant:"small-caps"},$e={float:"center",width:"200px",marginBottom:"20px",fontFamily:"Montserrat",backgroundColor:"#288046"},Ke=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1],c=Object(L.f)(),o=function(){console.log("captcha loaded successfully")},i=function(e){e&&l(!0)};return r.a.createElement("div",null,r.a.createElement(Ge.a,{initialValues:{name:"",email:"",LINE:"",message:""},onSubmit:function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.setSubmitting,l=n.resetForm,t.email){e.next=5;break}v.b.warn("Email required"),e.next=23;break;case 5:if(t.message){e.next=9;break}v.b.warn("Message required"),e.next=23;break;case 9:if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t.email)){e.next=13;break}v.b.warn("Invalid email address"),e.next=23;break;case 13:if(a){e.next=17;break}v.b.warn("Please verify that you are a human"),e.next=23;break;case 17:return e.next=19,C.sendContact(t);case 19:v.b.success("Request sent"),r(!1),l({}),c.push("/forum");case 23:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.handleChange,n=e.handleBlur,l=e.handleSubmit;e.isSubmitting;return r.a.createElement(Z.a,{style:Ze},r.a.createElement("p",{style:{fontFamily:"Montserrat"}}," We understand if you don't want to post on the forum just yet.  Instead, you can use this form to contact Fern privately, or add her on social media."),r.a.createElement("div",{id:"NavBarText"},r.a.createElement("a",{href:"mailto:furbynilu@gmail.com"}," ",r.a.createElement(_.a,{id:"fa-contact-form",icon:U.a})),r.a.createElement("a",{href:"https://www.facebook.com/NiluAcounselor"}," ",r.a.createElement(_.a,{id:"fa-contact-form",icon:Qe.a}))),r.a.createElement("br",null),r.a.createElement("h3",{style:Ve},"Enter your information: "),r.a.createElement(te.a,{style:He,onSubmit:l,className:"form-ui"},r.a.createElement(ae.a,{style:{marginBottom:"0"}},r.a.createElement(ne.a,{style:Je,for:"name"},"Name"),r.a.createElement(re.a,{type:"Name",name:"name",onChange:a,onBlur:n,value:t.name}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:Je,for:"email"},"Email"),r.a.createElement(re.a,{placeholder:"You@example.com",type:"Email",name:"email",onChange:a,onBlur:n,value:t.email}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:Je,for:"Line"},"LINE"),r.a.createElement(re.a,{placeholder:"Line ID",type:"Line",name:"LINE",onChange:a,onBlur:n,value:t.LINE}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:Je,for:"message"},"Message"),r.a.createElement(re.a,{placeholder:"I have a question about...",type:"Message",name:"message",onChange:a,onBlur:n,value:t.message}),r.a.createElement("br",null)),r.a.createElement(ce.a,{sitekey:"6LcL060ZAAAAABmkdF8vTezZgafAVQo1WoGgGNDT",render:"explicit",onloadCallback:o,verifyCallback:i}),r.a.createElement(B.a,{style:$e,type:"submit"},"Send"),r.a.createElement("br",null)))})))},Xe={textAlign:"center",fontFamily:"Montserrat",fontVariant:"small-caps"},et={fontFamily:"Montserrat",fontVariant:"small-caps",display:"block",textAlign:"center"},tt={width:"70%",display:"inline-block"},at={float:"left",marginBottom:"0px",padding:"0px",fontFamily:"Montserrat"},nt={float:"center",width:"200px",backgroundColor:"#28804b",fontFamily:"Montserrat"},rt={float:"center"},lt=function(e){var t=e.setLoggedIn,a=Object(n.useState)(""),l=Object(N.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)(""),s=Object(N.a)(u,2),m=s[0],p=s[1],b=Object(o.b)(),g=Object(L.f)(),E=function(){var e=Object(f.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c&&m){e.next=5;break}v.b.warn("You must enter a username and password"),e.next=21;break;case 5:return e.prev=5,e.next=8,ee.adminLogin({username:c,password:m});case 8:n=e.sent,window.localStorage.setItem("loggedForumUser",JSON.stringify(n)),h.setToken(n.token),b(O(n)),t(!0),i(""),p(""),g.push("/admin/dashboard"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container",id:"admin-login-form"},r.a.createElement("div",null,r.a.createElement("h2",{style:Xe},r.a.createElement(_.a,{icon:U.b,style:rt})," ","Admin"," ")),r.a.createElement("div",{id:"form-div",style:et},r.a.createElement(te.a,{style:tt,onSubmit:E},r.a.createElement(ae.a,null,r.a.createElement(ne.a,{style:at},"Username:"),r.a.createElement(re.a,{onChange:function(e){i(e.target.value)},value:c}),r.a.createElement("br",null),r.a.createElement(ne.a,{style:at},"Password:")," ",r.a.createElement(re.a,{id:"password",type:"password",onChange:function(e){p(e.target.value)},value:m}),r.a.createElement("br",null),r.a.createElement(B.a,{color:"none",style:nt,id:"admin-submit-login",type:"submit"},"Enter")))))},ct=a(147),ot={fontFamily:"Montserrat"},it=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.contact})),a=function(t){e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(p.a)(Object(p.a)({},e),{},{hidden:!0}),t.next=3,C.hideContact(n);case 3:a({type:"SET_CONTACT_HIDDEN",data:n}),v.b.success("Contact hidden. Contact the IT department to restore");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll();case 2:a=e.sent,t({type:"INIT_CONTACTS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(Z.a,null,r.a.createElement(ct.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"LINE"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Message"))),r.a.createElement("tbody",null,t.map((function(e){return!1===e.hidden?r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.LINE),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.date.slice(0,10)),r.a.createElement("td",null,e.message),r.a.createElement("td",null,r.a.createElement(B.a,{style:ot,onClick:function(){return a(e)},size:"sm"},"Remove"))):null})))))},ut={fontFamily:"Montserrat"},st=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.userInfoForAdmin})),a=Object(n.useState)(!1),l=Object(N.a)(a,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAllUsers();case 2:a=e.sent,t({type:"INIT_ALL_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(Z.a,null,r.a.createElement(ct.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB(yyyy-mm-dd)"),r.a.createElement("th",null,"Questions"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dateOfBirth.slice(0,10)),r.a.createElement("td",null,r.a.createElement(B.a,{style:ut,size:"sm",onClick:function(){return i(!c)}},"Questions")))})))))},mt={fontFamily:"Montserrat",fontVariant:"small-caps",fontWeight:400,fontSize:"1.5rem",marginBottom:"0px",marginTop:"30px"},dt={fontFamily:"Montserrat",backgroundColor:"#288046",marginTop:"15px",marginBottom:"15px"},ft=function(e){var t=e.setAnswering,a=e.answering,l=Object(n.useState)(""),c=Object(N.a)(l,2),i=c[0],u=c[1],s=Object(o.b)(),m=function(){var e=Object(f.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i)try{r=Object(p.a)(Object(p.a)({},a),{},{answer:i,isAnswered:!0}),s(w(r)),u(""),t("")}catch(l){console.log(l)}else v.b.warn("You must have an answer");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"forum-response-div"},r.a.createElement(Z.a,null,r.a.createElement(ne.a,{style:mt},"Question:"),r.a.createElement("p",{style:{fontFamily:"Montserrat"}},"Reminder: This forum is anonymous."),a.question?r.a.createElement("div",{style:{borderColor:"red",borderStyle:"solid",padding:"10px",borderWidth:"1px"}},r.a.createElement("p",{style:{fontFamily:"Montserrat"}},r.a.createElement("em",null,"You are answering the following question:")),a.question):r.a.createElement("h3",{style:{color:"red",fontFamily:"Montserrat"}},"You must first select a post"),r.a.createElement(re.a,{style:{fontFamily:"Montserrat",marginTop:"15px"},type:"textarea",onChange:function(e){u(e.target.value)},value:i,onSubmit:m}),r.a.createElement(B.a,{style:dt,onClick:m},"Submit Answer")))},pt={fontFamily:"Montserrat",backgroundColor:"rgb(187, 97, 157)"},bt=function(){var e=Object(o.b)(),t=Object(n.useState)({}),a=Object(N.a)(t,2),l=a[0],c=a[1],i=Object(o.c)((function(e){return e.forum}));return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getPending();case 2:a=e.sent,t({type:"INIT_FORUM_PENDING",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(Z.a,null,r.a.createElement(ct.a,{striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Question"))),r.a.createElement("tbody",null,i.map((function(e){return!1===e.isAnswered?r.a.createElement("tr",{key:e._id},r.a.createElement("td",{style:{fontFamily:"Montserrat"}},e.user.email),r.a.createElement("td",{style:{fontFamily:"Montserrat"}},e.date.slice(0,10)),r.a.createElement("td",{style:{fontFamily:"Montserrat"}},e.question),r.a.createElement("td",null,r.a.createElement(B.a,{style:pt,onClick:function(){return c(e)}},"Answer"))):null})))),r.a.createElement(ft,{answering:l,setAnswering:c}))},gt=function(){return r.a.createElement("div",{style:{fontFamily:"Montserrat",fontWeight:"700",textAlign:"center",marginTop:"300px"}},r.a.createElement("h1",null,"Sorry, but this page doesn't exist..."))},Et=a(148),yt=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],l=t[1],c=Object(o.c)((function(e){return e.activeUser})),i=Object(o.b)();return console.log(c.username),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedForumUser");if(e){var t=JSON.parse(e);i(O(t)),l(!0),h.setToken(t.token)}}),[i]),r.a.createElement(I.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(V,{activeUser:c,setLoggedIn:l,loggedIn:a}),r.a.createElement(v.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/about"},r.a.createElement(X,null)),r.a.createElement(L.a,{path:"/contact"},r.a.createElement(Ke,null)),r.a.createElement(L.a,{exact:!0,path:"/forum/post"},r.a.createElement(Fe,{activeUser:c})),r.a.createElement(L.a,{path:"/forum"},r.a.createElement(Ye,{activeUser:c})),r.a.createElement(L.a,{path:"/login"},r.a.createElement(Oe,{setLoggedIn:l})),r.a.createElement(L.a,{path:"/admin/dashboard"},c&&"Fern-Admin"!==!c.username&&"Richard-Admin"!==!c.username?r.a.createElement("div",null,r.a.createElement(B.a,{color:"secondary",id:"pendingToggler",style:{margin:"0.5rem",position:"relative",fontFamily:"Montserrat"}},"Show Pending"),r.a.createElement(B.a,{color:"secondary",id:"contactsToggler",style:{margin:"0.5rem",position:"relative",fontFamily:"Montserrat"}},"Show Contacts"),r.a.createElement(B.a,{color:"secondary",id:"usersToggler",style:{margin:"0.5rem",position:"relative",fontFamily:"Montserrat"}},"Show Users"),r.a.createElement(Et.a,{toggler:"#pendingToggler"},r.a.createElement(bt,null)),r.a.createElement(Et.a,{toggler:"#contactsToggler"},r.a.createElement(it,null)),r.a.createElement(Et.a,{toggler:"#usersToggler"},r.a.createElement(st,null))):r.a.createElement(gt,null)),r.a.createElement(L.a,{path:"/admin"},r.a.createElement(lt,{setLoggedIn:l})))))};c.a.render(r.a.createElement(o.a,{store:M},r.a.createElement(yt,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/fern-logo-350.0eb8aaf4.png"},78:function(e,t,a){e.exports=a(118)}},[[78,1,2]]]);
//# sourceMappingURL=main.2cb0f599.chunk.js.map