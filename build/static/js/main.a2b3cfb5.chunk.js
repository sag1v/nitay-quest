(this["webpackJsonpnitay-sagiv"]=this["webpackJsonpnitay-sagiv"]||[]).push([[0],{76:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c(0),a=c(7),r=c.n(a),s=c(22),o=c(109),l=c(27),j=c(57),d=c(106),b=c(119),x=c(110),h=c(111),O=c(112),u=c(113),p=c(54),m=c.n(p),f=c(56),g=c.n(f),y=[{type:"book",text:"\u05de\u05d4\u05d5 \u05e9\u05de\u05d5 \u05e9\u05dc \u05d4\u05d0\u05e8\u05de\u05d5\u05df \u05d5\u05d1\u05d0\u05d9\u05d6\u05d4 \u05e2\u05de\u05e7 \u05d4\u05d5\u05d0 \u05e0\u05de\u05e6\u05d0?"},{type:"car",text:"\u05d9\u05e9\u05e0\u05d4 \u05d0\u05d9\u05e9\u05d4 \u05d6\u05d4\u05d1, \u05d9\u05e9 \u05dc\u05d4 \u05de\u05e7\u05d5\u05dd \u05e9\u05d1\u05d5 \u05de\u05db\u05d9\u05e0\u05d9\u05dd \u05e7\u05d9\u05e0\u05d5\u05d7\u05d9\u05dd \u05de\u05ea\u05d5\u05e7\u05d9\u05dd \u05d5\u05e7\u05e8\u05d9\u05dd \u05de\u05d0\u05d5\u05d3. \u05de\u05d4\u05d5 \u05de\u05e1\u05e4\u05e8 \u05d4\u05d8\u05dc\u05e4\u05d5\u05df \u05e9\u05dc\u05d4?"}],v=[[{text:"\u05d0\u05e8\u05de\u05d5\u05df \u05d2\u05d5\u05dc\u05d9 \u05d4\u05e0\u05de\u05e6\u05d0 \u05d1\u05e2\u05de\u05e7 \u05d4\u05d0\u05dc\u05d4"},{text:"\u05d0\u05e8\u05de\u05d5\u05df \u05d4\u05d2\u05f3\u05d9\u05d9\u05d3 \u05d4\u05e0\u05de\u05e6\u05d0 \u05d1\u05e2\u05de\u05e7 \u05d4\u05e9\u05dc\u05d5\u05d5\u05d4",correct:!0},{text:"\u05d0\u05e8\u05de\u05d5\u05df \u05d4\u05e9\u05dc\u05d5\u05d5\u05d4 \u05d4\u05e0\u05de\u05e6\u05d0 \u05d1\u05e2\u05de\u05e7 \u05d4\u05d2\u05f3\u05d9\u05d9\u05d3"}],[{text:"0528661994"},{text:"0478945612"},{text:"046126444",correct:!0}]],k="\u05e2\u05e0\u05d4 \u05e2\u05dc \u05d4\u05d7\u05d9\u05d3\u05d4",w="\u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05d4\u05ea\u05e9\u05d5\u05d1\u05d4",C=Object(d.a)((function(e){return{listTitle:{margin:e.spacing(4,0,2)},listItem:{textAlign:"right"}}})),I={book:m.a,car:g.a},S=function(e){var t=e.questionId,c=e.onAnswer,a=Object(i.useState)(-1),r=Object(s.a)(a,2),j=r[0],d=r[1],b=C();Object(i.useEffect)((function(){d(-1)}),[t]);var p=y[t],m=I[p.type]||i.Fragment;return Object(n.jsxs)(o.a,{item:!0,container:!0,spacing:1,children:[Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{children:k})}),Object(n.jsxs)(o.a,{item:!0,xs:12,children:[Object(n.jsx)(l.a,{variant:"h6",className:b.listTitle,children:p.text}),Object(n.jsx)(m,{}),Object(n.jsx)(x.a,{children:v[t].map((function(e,t){return Object(n.jsx)(h.a,{className:"".concat(b.listItem),button:!0,selected:t===j,onClick:function(){return d(t)},children:Object(n.jsx)(O.a,{children:"".concat(t+1,". ").concat(e.text)})},t)}))})]}),Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(u.a,{disabled:-1===j,color:"primary",variant:"contained",fullWidth:!0,onClick:function(){c(v[t][j].correct)},children:w})})]})},A=c(58),N=c(120),T=c(118),W=c(116),q=c(117),E=c(115),J=c(114),M=c.p+"static/media/sad.7dd4e3bb.gif",z=c.p+"static/media/happy.1061703d.gif",B={happy:{title:"\u05ea\u05e9\u05d5\u05d1\u05d4 \u05e0\u05db\u05d5\u05e0\u05d4!",content:"\u05d0\u05ea\u05d4 \u05d8\u05d5\u05d1, \u05d4\u05de\u05e9\u05da \u05db\u05da",action:"\u05d4\u05de\u05e9\u05da \u05dc\u05e9\u05d0\u05dc\u05d4 \u05d4\u05d1\u05d0\u05d4"},sad:{title:"\u05ea\u05e9\u05d5\u05d1\u05d4 \u05dc\u05d0 \u05e0\u05db\u05d5\u05e0\u05d4",content:"\u05dc\u05d0 \u05e0\u05d5\u05e8\u05d0, \u05ea\u05de\u05d9\u05d3 \u05d0\u05e4\u05e9\u05e8 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1",action:"\u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea"}},F=function(e){var t=e.type;return Object(n.jsx)("img",{style:{width:"100%"},src:"happy"===t?z:M})},G=Object(i.forwardRef)((function(e,t){return Object(n.jsx)(J.a,Object(A.a)({direction:"up",ref:t},e))})),L=function(e){var t=e.type,c=e.onClose,i=e.open;if(!t)return null;var a=B[t];return Object(n.jsxs)(N.a,{open:i,fullScreen:!0,TransitionComponent:G,keepMounted:!0,onClose:c,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(n.jsx)(E.a,{id:"alert-dialog-slide-title",children:Object(n.jsx)(l.a,{variant:"h4",children:a.title})}),Object(n.jsxs)(W.a,{children:[Object(n.jsx)(q.a,{id:"alert-dialog-slide-description",children:Object(n.jsx)(l.a,{variant:"h5",children:a.content})}),Object(n.jsx)(F,{type:t})]}),Object(n.jsx)(T.a,{children:Object(n.jsx)(u.a,{fullWidth:!0,size:"large",variant:"contained",onClick:c,color:"happy"===t?"primary":"secondary",children:a.action})})]})},R=c.p+"static/media/done.539d44c6.gif",$=c.p+"static/media/trophy.3409c7e6.png",D="\u05e0\u05d9\u05ea\u05d0\u05d9 \u05db\u05dc \u05d4\u05db\u05d1\u05d5\u05d3!!!",H="\u05d4\u05e6\u05dc\u05d7\u05ea \u05dc\u05e4\u05ea\u05d5\u05e8 \u05d0\u05ea \u05db\u05dc \u05d4\u05d7\u05d9\u05d3\u05d5\u05ea",K=function(){return Object(n.jsxs)(o.a,{item:!0,container:!0,xs:12,children:[Object(n.jsxs)(o.a,{item:!0,xs:12,alignItems:"center",direction:"column",children:[Object(n.jsx)(l.a,{color:"primary",variant:"h4",align:"center",children:D}),Object(n.jsx)(l.a,{color:"secondary",variant:"h5",align:"center",children:H})]}),Object(n.jsxs)(o.a,{item:!0,xs:12,children:[Object(n.jsx)("img",{style:{maxWidth:"100%"},src:R}),Object(n.jsx)("img",{style:{width:"100%"},src:$})]})]})},P=Object(j.a)({overrides:{MuiListItem:{root:{"&$selected":{backgroundColor:"#2196f3 !important",color:"#fff"}}}}}),Q="\u05e9\u05dc\u05d5\u05dd \u05e0\u05d9\u05ea\u05d0\u05d9",U="\u05de\u05e6\u05d0 \u05d0\u05ea \u05d4\u05de\u05d8\u05de\u05d5\u05df",V=Object(d.a)((function(e){return{root:{flexGrow:1},header:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}));var X=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)(!1),j=Object(s.a)(r,2),d=j[0],x=j[1],h=Object(i.useState)(""),O=Object(s.a)(h,2),u=O[0],p=O[1],m=Object(i.useState)(!1),f=Object(s.a)(m,2),g=f[0],v=f[1],k=V(),w=function(){x(!1),p("")};return Object(n.jsx)(b.a,{theme:P,children:Object(n.jsx)("div",{className:k.root,children:Object(n.jsx)(o.a,{container:!0,spacing:3,children:g?Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(K,{})}):Object(n.jsxs)(o.a,{item:!0,xs:12,children:[Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{variant:"h3",className:k.header,children:Q})}),Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(l.a,{variant:"h4",className:k.header,children:U})}),Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(S,{questionId:c,onAnswer:function(e){e?(x(!0),p("happy"),console.log(":)")):(x(!0),p("sad"),console.log(":("))}})}),Object(n.jsx)(L,{open:d,onClose:"happy"===u?function(){w(),c+1<y.length?a((function(e){return e+1})):(v(!0),console.log("All is done!!!!"))}:function(){w()},type:u})]})})})})};r.a.render(Object(n.jsx)(X,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.a2b3cfb5.chunk.js.map