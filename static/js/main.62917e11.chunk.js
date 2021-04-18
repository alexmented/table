(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(87),i=a(16),l=a.n(i),o=a(88),s=Object(o.a)({app:{display:"flex",flexDirection:"column"},columnLabels:{position:"absolute !important",borderLeft:"1px solid black"}}),u=a(28),d=a(36),b=a.n(d),j=a(41),h=[{label:"Name",dataKey:"name"},{label:"Surname",dataKey:"surname"},{label:"Dates",dataKey:"dates"},{label:"Time",dataKey:"time"},{label:"Something",dataKey:"something"}],m=a(85),g=a(86),f=a(82),O=a(83),x=a(84),p=a(42),v=a(33),D=a(80),y=a(81),k=Object(o.a)((function(){return{root:{"&:hover > div":{color:"magenta",cursor:"pointer"}},cell:{height:48,minWidth:150,wordBreak:"break-word"},button:{textTransform:"lowercase",background:"aqua",height:20}}})),S=a(89),N=a(13),F=a(23),w=Object(F.b)({name:"table",initialState:{dataFetching:[],loading:!1,error:null},reducers:{changingDataSuccess:function(e,t){e.dataFetching=t.payload,e.loading=!1,e.error=null},changingDataFailure:function(e,t){e.dataFetching=[],e.loading=!1,e.error=t.payload},changingDataFetch:function(e){e.dataFetching=[],e.loading=!0,e.error=null},addData:function(e,t){e.dataFetching=[].concat(Object(u.a)(e.dataFetching),[t.payload]),e.loading=!1,e.error=null},deleteData:function(e,t){e.dataFetching=e.dataFetching.filter((function(e){return e.id!==t.payload})),e.loading=!1,e.error=null}}}),C=w.actions,E=w.reducer,K=C.changingDataSuccess,W=C.addData,B=C.deleteData,L=C.changingDataFailure,q=C.changingDataFetch,R=E,T=Object(F.b)({name:"sort",initialState:[],reducers:{sortData:function(e,t){return t.payload}}}),z=T.actions,I=T.reducer,J=z.sortData,G=I,M=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e})).regularData.dataFetching,a=Object(N.c)((function(e){return e})).regularData.loading,c=Object(N.c)((function(e){return e})).regularData.error,r=Object(N.c)((function(e){return e})).sortedData,i=Object(n.useCallback)((function(t){return e(W(t))}),[e]),l=Object(n.useCallback)((function(t){return e(B(t))}),[e]),o=Object(n.useCallback)((function(t){return e(K(t))}),[e]),s=Object(n.useCallback)((function(t){return e(L(t))}),[e]),u=Object(n.useCallback)((function(){return e(q())}),[e]);return{addNewElement:i,tableData:t,loadingData:a,errorData:c,deleteElement:l,changingElementsSuccess:o,sortedData:r,sortingElements:Object(n.useCallback)((function(t){return e(J(t))}),[e]),changingElementsFailure:s,changingElementsFetch:u}},A=a(2),H=Object(n.memo)((function(e){var t=e.index,a=e.style,n=e.data.data,c=k(),r=M().deleteElement;return Object(A.jsxs)(D.a,{component:"div",style:a,className:c.root,children:[h.map((function(e,a){return Object(A.jsx)(y.a,{component:"div",variant:"body",className:c.cell,children:n[t][e.dataKey]},e.label+a)})),Object(A.jsx)(y.a,{component:"div",variant:"body",className:c.cell,children:Object(A.jsx)(S.a,{className:c.button,onClick:function(){return r(n[t].id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})}),v.b),P=a(18),Q=Object(o.a)((function(){return{cell:{height:48,width:150,fontWeight:"bold","&:hover":{cursor:"pointer"}}}})),U=function(e){var t=e.columns,a=e.onSortClick,c=Object(n.useState)(!1),r=Object(P.a)(c,2),i=r[0],l=r[1],o=Q();return Object(A.jsxs)(D.a,{component:"div",children:[t.map((function(e,t){return Object(A.jsx)(y.a,{component:"div",variant:"head",className:o.cell,scope:"col",onClick:function(){return t=e.dataKey,a(t,i),void l(!i);var t},children:e.label},t)})),Object(A.jsx)(y.a,{component:"div",variant:"head",className:o.cell,scope:"col",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},V=Object(o.a)((function(){return{root:{display:"block",flex:1},table:{height:"100%",minWidth:900},tbody:{width:"100%"},row:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",boxSizing:"border-box",minWidth:"100%",width:"100%"},cell:{display:"block",flexGrow:0,flexShrink:0},expandingCell:{flex:1}}})),X=function(e){var t=e.data,a=e.columns,n=e.onSortClick,c=V(),r=function(e,t){return t.data[e].name};return Object(A.jsx)("div",{className:c.root,children:Object(A.jsxs)(f.a,{className:c.table,component:"div",children:[Object(A.jsx)(O.a,{component:"div",children:Object(A.jsx)(U,{classes:c,columns:a,onSortClick:n})}),Object(A.jsx)(x.a,{component:"div",className:c.tbody,children:Object(A.jsx)(p.a,{children:function(e){var a=e.height;return Object(A.jsx)(v.a,{height:a,width:900,itemCount:t.length,itemSize:48,itemKey:r,itemData:{data:t},children:H})}})})]})})},Y=Object(o.a)((function(){return{root:{display:"flex"},container:{height:500,minWidth:950},paper:{height:"100%",display:"flex",flexDirection:"column",marginBottom:"20px"},error:{color:"red"}}})),Z=a(90),$=Object(o.a)((function(){return{button:{background:"aqua",marginLeft:"10px"}}})),_=a(20),ee=function(){var e=Object(n.useState)(""),t=Object(P.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(P.a)(r,2),l=i[0],o=i[1],s=M().sortingElements,u=$(),d=function(e){var t=Object(N.c)((function(e){return e})).regularData.dataFetching,a=Object(_.a)((function(e){return e.regularData.dataFetching}),(function(t){return t.filter((function(t){return Object.values(t).filter((function(t){return t.toString().includes(e)})).length}))})),n=Object(N.c)(a),c=Object(_.a)((function(e){return e.regularData.dataFetching}),(function(t){var a=new RegExp(e);return t.filter((function(e){return Object.values(e).filter((function(e){return a.test(e.toString())})).length}))}));return{tableDataElementsSearch:n,tableDataRegSearch:Object(N.c)(c),tableData:t}}(a),b=d.tableData,j=d.tableDataRegSearch,h=d.tableDataElementsSearch;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h4",{children:"\u041f\u043e\u0438\u0441\u043a \u0441\u0442\u0440\u043e\u043a \u043f\u043e \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438"}),Object(A.jsx)(Z.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"text",onChange:function(e){return c(e.target.value)},value:a}),Object(A.jsx)(S.a,{onClick:function(){c(""),h.length?(o(!1),s(h)):o(!0)},className:u.button,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(A.jsx)(S.a,{onClick:function(){c(""),j.length?(o(!1),s(j)):o(!0)},className:u.button,children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443"}),Object(A.jsx)(S.a,{onClick:function(){return s(b)},className:u.button,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}),Object(A.jsx)("p",{children:l?"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e":""})]})},te=a(32),ae=a(38),ne=Object(o.a)((function(){return{root:{display:"flex",flexDirection:"column",marginBottom:"30px"},elements:{width:"20%"},button:{background:"aqua",width:"100px",color:"black",marginTop:"10px"}}})),ce={name:"",surname:"",dates:"",time:"",something:""},re=function(){var e=Object(n.useState)(ce),t=Object(P.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(P.a)(r,2),l=i[0],o=i[1],s=ne(),u=M(),d=u.addNewElement,b=u.tableData;return Object(A.jsxs)("div",{className:s.root,children:[Object.keys(ce).map((function(e,t){return Object(A.jsx)(Z.a,{type:"text",placeholder:e,className:s.elements,onChange:function(t){return c((function(a){return Object(ae.a)(Object(ae.a)({},a),{},Object(te.a)({},e,t.target.value))}))},value:a[e]},e+t)})),Object(A.jsx)(S.a,{color:"primary",onClick:function(){var e={id:b[b.length-1].id+1,name:a.name,surname:a.surname,dates:a.dates,time:a.time,something:a.something},t=Object.values(e);t.filter((function(e){return e})).length===t.length&&(c(ce),o("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),d(e)),o("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")},className:s.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(A.jsx)("p",{children:l})]})},ie=function(){var e=M(),t=e.tableData,a=e.changingElementsSuccess,c=e.loadingData,r=e.errorData,i=e.sortedData,l=e.sortingElements,o=e.changingElementsFetch,s=e.changingElementsFailure,d=Y();Object(n.useEffect)(Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("bigdata.json").then((function(e){return o(),e.json()})).then((function(e){a(e)})).catch((function(e){return s("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}));case 2:case"end":return e.stop()}}),e)}))),[]);return Object(A.jsx)("div",{className:d.root,children:Object(A.jsx)(m.a,{fixed:!0,maxWidth:"sm",className:d.container,children:r?Object(A.jsx)("div",{className:d.error,children:r}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(g.a,{className:d.paper,children:c?Object(A.jsx)("div",{children:"Loading"}):Object(A.jsx)(X,{data:i.length?i:t,onSortClick:function(e,a){var n=i.length?Object(u.a)(i):Object(u.a)(t);l(a?[]:n.sort((function(t,a){return t[e]>a[e]})))},columns:h})}),Object(A.jsx)(re,{}),Object(A.jsx)(ee,{})]})})})};var le=function(){var e=s();return Object(A.jsx)("div",{className:e.app,children:Object(A.jsx)(ie,{})})},oe=Object(F.a)({reducer:{regularData:R,sortedData:G}});l.a.render(Object(A.jsxs)(c.a.StrictMode,{children:[Object(A.jsx)(r.a,{}),Object(A.jsx)(N.a,{store:oe,children:Object(A.jsx)(le,{})})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.62917e11.chunk.js.map