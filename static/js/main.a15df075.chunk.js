(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(87),i=n(16),o=n.n(i),l=n(88),s=Object(l.a)({app:{display:"flex",flexDirection:"column"},columnLabels:{position:"absolute !important",borderLeft:"1px solid black"}}),u=n(28),b=n(36),d=n.n(b),j=n(41),m=[{label:"Name",dataKey:"name"},{label:"Surname",dataKey:"surname"},{label:"Dates",dataKey:"dates"},{label:"Time",dataKey:"time"},{label:"Something",dataKey:"something"}],h=n(85),f=n(86),O=n(82),x=n(83),p=n(84),g=n(42),v=n(33),D=n(80),y=n(81),k=Object(l.a)((function(){return{root:{"&:hover > div":{color:"magenta",cursor:"pointer"}},cell:{height:48,minWidth:150,wordBreak:"break-word"},button:{textTransform:"lowercase",background:"aqua",height:20}}})),N=n(89),S=n(14),w=n(23),C=Object(w.b)({name:"table",initialState:[],reducers:{changingData:function(e,t){return t.payload},addData:function(e,t){return[].concat(Object(u.a)(e),[t.payload])},deleteData:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),E=C.actions,K=C.reducer,W=E.changingData,B=E.addData,q=E.deleteData,L=K,R=Object(w.b)({name:"sort",initialState:[],reducers:{sortData:function(e,t){return t.payload}}}),T=R.actions,z=R.reducer,I=T.sortData,J=z,F=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e})).regularData,n=Object(S.c)((function(e){return e})).sortedData;return{addNewElement:Object(a.useCallback)((function(t){return e(B(t))}),[e]),tableData:t,deleteElement:Object(a.useCallback)((function(t){return e(q(t))}),[e]),changingElements:Object(a.useCallback)((function(t){return e(W(t))}),[e]),sortedData:n,sortingElements:Object(a.useCallback)((function(t){return e(I(t))}),[e])}},G=n(2),M=Object(a.memo)((function(e){var t=e.index,n=e.style,a=e.data.data,c=k(),r=F().deleteElement;return Object(G.jsxs)(D.a,{component:"div",style:n,className:c.root,children:[m.map((function(e,n){return Object(G.jsx)(y.a,{component:"div",variant:"body",className:c.cell,children:a[t][e.dataKey]},e.label+n)})),Object(G.jsx)(y.a,{component:"div",variant:"body",className:c.cell,children:Object(G.jsx)(N.a,{className:c.button,onClick:function(){return r(a[t].id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})}),v.b),A=n(20),H=Object(l.a)((function(){return{cell:{height:48,width:150,fontWeight:"bold","&:hover":{cursor:"pointer"}}}})),P=function(e){var t=e.columns,n=e.onSortClick,c=Object(a.useState)(!1),r=Object(A.a)(c,2),i=r[0],o=r[1],l=H();return Object(G.jsxs)(D.a,{component:"div",children:[t.map((function(e,t){return Object(G.jsx)(y.a,{component:"div",variant:"head",className:l.cell,scope:"col",onClick:function(){return t=e.dataKey,n(t,i),void o(!i);var t},children:e.label},t)})),Object(G.jsx)(y.a,{component:"div",variant:"head",className:l.cell,scope:"col",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},Q=Object(l.a)((function(){return{root:{display:"block",flex:1},table:{height:"100%",minWidth:900},tbody:{width:"100%"},row:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",boxSizing:"border-box",minWidth:"100%",width:"100%"},cell:{display:"block",flexGrow:0,flexShrink:0},expandingCell:{flex:1}}})),U=function(e){var t=e.data,n=e.columns,a=e.onSortClick,c=Q(),r=function(e,t){return t.data[e].name};return Object(G.jsx)("div",{className:c.root,children:Object(G.jsxs)(O.a,{className:c.table,component:"div",children:[Object(G.jsx)(x.a,{component:"div",children:Object(G.jsx)(P,{classes:c,columns:n,onSortClick:a})}),Object(G.jsx)(p.a,{component:"div",className:c.tbody,children:Object(G.jsx)(g.a,{children:function(e){var n=e.height;return Object(G.jsx)(v.a,{height:n,width:900,itemCount:t.length,itemSize:48,itemKey:r,itemData:{data:t},children:M})}})})]})})},V=Object(l.a)((function(){return{root:{display:"flex"},container:{height:500,minWidth:950},paper:{height:"100%",display:"flex",flexDirection:"column",marginBottom:"20px"}}})),X=n(90),Y=Object(l.a)((function(){return{button:{background:"aqua",marginLeft:"10px"}}})),Z=n(19),$=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(A.a)(r,2),o=i[0],l=i[1],s=F().sortingElements,u=Y(),b=function(e){var t=Object(S.c)((function(e){return e})).regularData,n=Object(Z.a)((function(e){return e.regularData}),(function(t){return t.filter((function(t){return Object.values(t).filter((function(t){return t.toString().includes(e)})).length}))})),a=Object(S.c)(n),c=Object(Z.a)((function(e){return e.regularData}),(function(t){var n=new RegExp(e);return t.filter((function(e){return Object.values(e).filter((function(e){return n.test(e.toString())})).length}))}));return{tableDataElementsSearch:a,tableDataRegSearch:Object(S.c)(c),tableData:t}}(n),d=b.tableData,j=b.tableDataRegSearch,m=b.tableDataElementsSearch;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h4",{children:"\u041f\u043e\u0438\u0441\u043a \u0441\u0442\u0440\u043e\u043a \u043f\u043e \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438"}),Object(G.jsx)(X.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"text",onChange:function(e){return c(e.target.value)},value:n}),Object(G.jsx)(N.a,{onClick:function(){c(""),m.length?(l(!1),s(m)):l(!0)},className:u.button,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(G.jsx)(N.a,{onClick:function(){c(""),j.length?(l(!1),s(j)):l(!0)},className:u.button,children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443"}),Object(G.jsx)(N.a,{onClick:function(){return s(d)},className:u.button,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),Object(G.jsx)("p",{children:o?"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":""})]})},_=n(32),ee=n(38),te=Object(l.a)((function(){return{root:{display:"flex",flexDirection:"column",marginBottom:"30px"},elements:{width:"20%"},button:{background:"aqua",width:"100px",color:"black",marginTop:"10px"}}})),ne={name:"",surname:"",dates:"",time:"",something:""},ae=function(){var e=Object(a.useState)(ne),t=Object(A.a)(e,2),n=t[0],c=t[1],r=te(),i=F(),o=i.addNewElement,l=i.tableData;return Object(G.jsxs)("div",{className:r.root,children:[Object.keys(ne).map((function(e,t){return Object(G.jsx)(X.a,{type:"text",placeholder:e,className:r.elements,onChange:function(t){return c((function(n){return Object(ee.a)(Object(ee.a)({},n),{},Object(_.a)({},e,t.target.value))}))},value:n[e]},e+t)})),Object(G.jsx)(N.a,{color:"primary",onClick:function(){var e={id:l[l.length-1].id+1,name:n.name,surname:n.surname,dates:n.dates,time:n.time,something:n.something};c(ne),o(e)},className:r.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},ce=function(){var e=F(),t=e.tableData,n=e.changingElements,c=e.sortedData,r=e.sortingElements,i=V();Object(a.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("bigdata.json").then((function(e){return e.json()})).then((function(e){return n(e)}));case 2:case"end":return e.stop()}}),e)}))),[]);return Object(G.jsx)("div",{className:i.root,children:Object(G.jsxs)(h.a,{fixed:!0,maxWidth:"sm",className:i.container,children:[Object(G.jsx)(f.a,{className:i.paper,children:Object(G.jsx)(U,{data:c.length?c:t,onSortClick:function(e,n){var a=c.length?Object(u.a)(c):Object(u.a)(t);r(n?[]:a.sort((function(t,n){return t[e]>n[e]})))},columns:m})}),Object(G.jsx)(ae,{}),Object(G.jsx)($,{})]})})};var re=function(){var e=s();return Object(G.jsx)("div",{className:e.app,children:Object(G.jsx)(ce,{})})},ie=Object(w.a)({reducer:{regularData:L,sortedData:J}});o.a.render(Object(G.jsxs)(c.a.StrictMode,{children:[Object(G.jsx)(r.a,{}),Object(G.jsx)(S.a,{store:ie,children:Object(G.jsx)(re,{})})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a15df075.chunk.js.map