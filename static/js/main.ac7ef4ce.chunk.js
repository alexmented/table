(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(87),i=n(16),o=n.n(i),l=n(88),s=Object(l.a)({app:{display:"flex",flexDirection:"column"},columnLabels:{position:"absolute !important",borderLeft:"1px solid black"}}),u=n(31),b=n(35),j=n.n(b),d=n(39),m=n(18),h=[{label:"Name",dataKey:"name"},{label:"Surname",dataKey:"surname"},{label:"Dates",dataKey:"dates"},{label:"Time",dataKey:"time"},{label:"Something",dataKey:"something"}],f=n(85),O=n(86),x=n(11),p=n(82),g=n(83),v=n(84),y=n(41),k=n(32),N=n(80),w=n(81),S=Object(l.a)((function(){return{root:{"&:hover > div":{color:"magenta",cursor:"pointer"}},cell:{height:48}}})),C=n(42),D=Object(C.a)({name:"table",initialState:[],reducers:{changingData:function(e,t){return t.payload},addData:function(e,t){return[].concat(Object(u.a)(e),[t.payload])},deleteData:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),K=n(7),I=n(2),B=Object(a.memo)((function(e){var t=e.index,n=e.style,a=e.data.data,c=Object(x.b)(),r=S(),i=Object(K.b)(D.actions,c);return Object(I.jsxs)(N.a,{component:"div",style:n,className:r.root,children:[h.map((function(e,n){return Object(I.jsx)(w.a,{component:"div",variant:"body",className:r.cell,children:a[t][e.dataKey]},e.label+n)})),Object(I.jsx)(w.a,{component:"div",variant:"body",className:r.cell,children:Object(I.jsx)("button",{onClick:function(){return i.deleteData(a[t].id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})}),k.b),E=Object(l.a)((function(){return{cell:{height:48}}})),F=function(e){var t=e.columns,n=e.onSortClick,c=Object(a.useState)(!1),r=Object(m.a)(c,2),i=r[0],o=r[1],l=E();return Object(I.jsxs)(N.a,{component:"div",children:[t.map((function(e,t){return Object(I.jsx)(w.a,{component:"div",variant:"head",className:l.cell,scope:"col",onClick:function(){return t=e.dataKey,n(t,i),void o(!i);var t},children:e.label},t)})),Object(I.jsx)(w.a,{component:"div",variant:"head",className:l.cell,scope:"col",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},L=Object(l.a)((function(){return{root:{display:"block",flex:1},table:{height:"100%",width:"100%"},tbody:{width:"100%"},row:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",boxSizing:"border-box",minWidth:"100%",width:"100%"},cell:{display:"block",flexGrow:0,flexShrink:0},expandingCell:{flex:1}}})),W=function(e){var t=e.data,n=e.columns,a=e.onSortClick,c=L(),r=function(e,t){return t.data[e].name};return Object(I.jsx)("div",{className:c.root,children:Object(I.jsxs)(p.a,{className:c.table,component:"div",children:[Object(I.jsx)(g.a,{component:"div",children:Object(I.jsx)(F,{classes:c,columns:n,onSortClick:a})}),Object(I.jsx)(v.a,{component:"div",className:c.tbody,children:Object(I.jsx)(y.a,{children:function(e){var n=e.height,a=e.width;return Object(I.jsx)(k.a,{height:n,width:a,itemCount:t.length,itemSize:48,itemKey:r,itemData:{data:t},children:B})}})})]})})},q=Object(l.a)((function(){return{root:{display:"flex"},container:{flexGrow:1,height:500},paper:{height:"100%",display:"flex",flexDirection:"column",marginBottom:"20px"}}})),z=n(90),G=n(89),J=Object(l.a)((function(){return{button:{background:"aqua",marginLeft:"10px"}}})),T=n(20),M=function(e){var t=e.setIsFiltered,n=Object(a.useState)(""),c=Object(m.a)(n,2),r=c[0],i=c[1],o=J(),l=Object(x.c)((function(e){return e})),s=Object(T.a)((function(e){return e}),(function(e){return e.filter((function(e){return Object.values(e).filter((function(e){return e.toString().includes(r)})).length}))})),u=Object(x.c)(s),b=Object(T.a)((function(e){return e}),(function(e){var t=new RegExp(r);return e.filter((function(e){return Object.values(e).filter((function(e){return t.test(e.toString())})).length}))})),j=Object(x.c)(b);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(z.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"text",onChange:function(e){return i(e.target.value)},value:r}),Object(I.jsx)(G.a,{onClick:function(){i(""),t(u)},className:o.button,children:"\u041f\u043e\u0438\u0441\u043a"}),Object(I.jsx)(G.a,{onClick:function(){i(""),t(j)},className:o.button,children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443"}),Object(I.jsx)(G.a,{onClick:function(){return t(l)},className:o.button,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"})]})},R=n(30),A=n(37),H=Object(l.a)((function(){return{root:{display:"flex",flexDirection:"column",marginBottom:"30px"},elements:{width:"20%"},button:{background:"aqua",width:"100px",color:"black",marginTop:"10px"}}})),P={name:"",surname:"",dates:"",time:"",something:""},Q=function(){var e=Object(a.useState)(P),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(x.b)(),i=H(),o=Object(K.b)(D.actions,r),l=Object(x.c)((function(e){return e}));return Object(I.jsxs)("div",{className:i.root,children:[Object.keys(P).map((function(e,t){return Object(I.jsx)(z.a,{type:"text",placeholder:e,className:i.elements,onChange:function(t){return c((function(n){return Object(A.a)(Object(A.a)({},n),{},Object(R.a)({},e,t.target.value))}))},value:n[e]},e+t)})),Object(I.jsx)(G.a,{color:"primary",onClick:function(){var e={id:l[l.length-1].id+1,name:n.name,surname:n.surname,dates:n.dates,time:n.time,something:n.something};c(P),o.addData(e)},className:i.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},U=function(){var e=Object(x.c)((function(e){return e})),t=q(),n=Object(a.useState)([]),c=Object(m.a)(n,2),r=c[0],i=c[1],o=Object(x.b)(),l=Object(K.b)(D.actions,o);Object(a.useEffect)(Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("jj.json").then((function(e){return e.json()})).then((function(e){return l.changingData(e)}));case 2:case"end":return e.stop()}}),e)}))),[]);return Object(I.jsx)("div",{className:t.root,children:Object(I.jsxs)(f.a,{maxWidth:"lg",className:t.container,children:[Object(I.jsx)(O.a,{className:t.paper,children:Object(I.jsx)(W,{data:r.length?r:e,onSortClick:function(t,n){var a=r.length?r:Object(u.a)(e);i(n?[]:a.sort((function(e,n){return e[t]>n[t]})))},columns:h})}),Object(I.jsx)(Q,{}),Object(I.jsx)(M,{setIsFiltered:i})]})})};var V=function(){var e=s();return Object(I.jsx)("div",{className:e.app,children:Object(I.jsx)(U,{})})},X=Object(K.e)(D.reducer);o.a.render(Object(I.jsxs)(c.a.StrictMode,{children:[Object(I.jsx)(r.a,{}),Object(I.jsx)(x.a,{store:X,children:Object(I.jsx)(V,{})})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.ac7ef4ce.chunk.js.map