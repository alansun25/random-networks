(this["webpackJsonpinfection-networks"]=this["webpackJsonpinfection-networks"]||[]).push([[0],{107:function(e,o,r){},120:function(e,o,r){"use strict";r.r(o);var t=r(0),a=r(42),n=r.n(a),c=(r(107),r(3)),s=r(140),i=r(135),d=r(133),l=r(134),b=r(53),j=r.n(b),g=[{selector:"node",style:{"background-color":function(e){return"infected"===e.data("status")?"#E53E3E":"#b6b6b6"},height:20,width:20}},{selector:"edge",style:{width:.5,"line-color":"#a5a5a5","curve-style":"bezier"}}];var h=r(2);function f(e){var o=e.algo,r=e.randSettings,a=e.swSettings,n=Object(t.useRef)(null);return Object(t.useEffect)((function(){0!==r.nodes&&"Random"===o?(!function(e,o,r,t){new Set;for(var a=j()({container:t.current,elements:[],style:g}),n=1;n<=e;n++)a.add({group:"nodes",data:{id:"".concat(n)}});for(var c=1;c<=e;c++)for(var s=a.$("#".concat(c)).neighborhood(),i=c;i<=e;i++){var d=Math.random();c!==i&&d<o&&!s.contains(a.$("#".concat(i)))&&a.add({group:"edges",data:{id:"".concat(c,"-").concat(i),source:"".concat(c),target:"".concat(i)}})}a.layout({name:"".concat(r)}).run(),a.fit(void 0,50)}(r.nodes,parseFloat(r.prob),r.layout,n),console.log("Graph has rendered.")):0!==a.nodes&&"Small-world"===o&&(!function(e,o,r,t,a){new Set;for(var n=j()({container:a.current,elements:[],style:g,maxZoom:1}),c=1;c<=e;c++)n.add({group:"nodes",data:{id:"".concat(c),status:"normal"}});if(e%2===0&&o>=e/2||e%2===1&&o>=e/2-1)for(var s=1;s<e;s++)for(var i=s+1;i<=e;i++){var d=n.nodes().$id("".concat(s)),l=n.nodes().$id("".concat(i));s===i||d.neighborhood().contains(l)||n.add({group:"edges",data:{id:"".concat(s,"-").concat(i),source:"".concat(s),target:"".concat(i)}})}else for(var b=1;b<=e;b++)for(var h=b+1;h<=b+o;h++){var f=(h-1)%e+1,u=Math.random(),y=n.nodes().$id("".concat(b)),O=n.nodes().$id("".concat(f));if(u<r||y.neighborhood().contains(O)){var x=[y,O][Math.floor(2*Math.random())];y.degree(!1)===e-1?x=O:O.degree(!1)===e-1&&(x=y);var m=n.nodes().difference("#".concat(b,", #").concat(f)),p=m.nodes().toArray()[Math.floor(Math.random()*m.length)];if(y.degree(!1)===e-1&&O.degree(!1)===e-1)p=n.nodes().$id("".concat(Math.floor(Math.random()*e)+1));else{var v=x.neighborhood().nodes();if(!v.empty()){var C=n.nodes().difference(v);for(p=C.nodes().toArray()[Math.floor(Math.random()*C.length)];p.same(x);)p=C.nodes().toArray()[Math.floor(Math.random()*C.length)]}}n.add({group:"edges",data:{id:"".concat(x.id(),"-").concat(p.id()),source:"".concat(x.id()),target:"".concat(p.id())}})}else n.add({group:"edges",data:{id:"".concat(y.id(),"-").concat(O.id()),source:"".concat(y.id()),target:"".concat(O.id())}})}n.layout({name:"".concat(t)}).run(),n.fit(void 0,50)}(a.nodes,a.knei,parseFloat(a.prob),a.layout,n),console.log("Graph has rendered."))}),[o,r.nodes,r.prob,r.layout,a.nodes,a.knei,a.prob,a.layout]),0===r.nodes?Object(h.jsx)(d.a,{h:900,children:Object(h.jsx)(l.a,{color:"gray.700",fontSize:"3xl",children:"Generate a random graph by editing parameters in the form!"})}):Object(h.jsx)(i.a,{ref:n,zIndex:"0",h:900})}var u=r(7),y=r(87),O=r(141),x=r(137),m=r(148),p=r(150);function v(e){var o=Object(p.a)(e),r=o.getInputProps,t=o.getCheckboxProps,a=r(),n=t();return Object(h.jsxs)(i.a,{as:"label",children:[Object(h.jsx)("input",Object(u.a)({},a)),Object(h.jsx)(i.a,Object(u.a)(Object(u.a)({},n),{},{color:"gray.700",cursor:"pointer",borderWidth:1,borderColor:"#f0f0f0",borderRadius:"md",boxShadow:"md",_checked:{bg:"gray.700",color:"#f8f8ff",borderColor:"gray.700"},px:5,py:3,transition:"0.3s",children:e.children}))]})}var C=r(45),w=r(146),k=r(139),S=r(149);function R(e){var o=e.randSettings,r=e.setRandSettings,a=Object(t.useState)({nodes:0,prob:"0",layout:"random"}),n=Object(c.a)(a,2),i=n[0],d=n[1];return Object(h.jsxs)("form",{children:[Object(h.jsxs)(C.a,{id:"nodes",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Number of Nodes"}),Object(h.jsxs)(w.c,{value:i.nodes,onChange:function(e,o){isNaN(o)&&(o=0),d(Object(u.a)(Object(u.a)({},i),{},{nodes:o}))},min:0,max:200,inputMode:"numeric",children:[Object(h.jsx)(w.d,{color:"gray.700",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"}}),Object(h.jsxs)(w.e,{children:[Object(h.jsx)(w.b,{color:"gray.700"}),Object(h.jsx)(w.a,{color:"gray.700"})]})]}),Object(h.jsx)(C.b,{color:"gray.500",children:"0 to 200"})]}),Object(h.jsxs)(C.a,{id:"prob",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Probability of an Edge Between Two Nodes"}),Object(h.jsxs)(w.c,{value:i.prob,onChange:function(e,o){d(Object(u.a)(Object(u.a)({},i),{},{prob:e}))},step:.01,min:0,max:1,inputMode:"decimal",children:[Object(h.jsx)(w.d,{color:"gray.700",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"}}),Object(h.jsxs)(w.e,{children:[Object(h.jsx)(w.b,{color:"gray.700"}),Object(h.jsx)(w.a,{color:"gray.700"})]})]}),Object(h.jsx)(C.b,{color:"gray.500",children:"0 to 1"})]}),Object(h.jsxs)(C.a,{id:"layout",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Layout"}),Object(h.jsxs)(k.a,{value:i.layout,onChange:function(e){d(Object(u.a)(Object(u.a)({},i),{},{layout:e.target.value}))},color:"gray.700",backgroundColor:"#f8f8ff",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"},children:[Object(h.jsx)("option",{value:"random",style:{backgroundColor:"#f8f8ff"},children:"Random"}),Object(h.jsx)("option",{value:"grid",style:{backgroundColor:"#f8f8ff"},children:"Grid"}),Object(h.jsx)("option",{value:"circle",style:{backgroundColor:"#f8f8ff"},children:"Circle"}),Object(h.jsx)("option",{value:"concentric",style:{backgroundColor:"#f8f8ff"},children:"Concentric"}),Object(h.jsx)("option",{value:"breadthfirst",style:{backgroundColor:"#f8f8ff"},children:"Breadthfirst"}),Object(h.jsx)("option",{value:"cose",style:{backgroundColor:"#f8f8ff"},children:"Cose"})]})]}),Object(h.jsx)(s.a,{justify:"end",children:Object(h.jsx)(S.a,{mt:6,mb:4,color:"#f8f8ff",bgColor:"gray.700",fontWeight:"normal",_hover:{bg:"gray.600"},_active:{bg:"gray.800"},type:"button",onClick:function(){return e=i.nodes,t=i.prob,a=i.layout,void r(Object(u.a)(Object(u.a)({},o),{},{nodes:e,prob:t,layout:a}));var e,t,a},children:"Generate"})})]})}function _(e){var o=e.swSettings,r=e.setSwSettings,a=Object(t.useState)({nodes:0,prob:"0",knei:0,layout:"random"}),n=Object(c.a)(a,2),i=n[0],d=n[1];return Object(h.jsxs)("form",{children:[Object(h.jsxs)(C.a,{id:"nodes",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Number of Nodes"}),Object(h.jsxs)(w.c,{value:i.nodes,onChange:function(e,o){isNaN(o)&&(o=0),d(Object(u.a)(Object(u.a)({},i),{},{nodes:o}))},min:0,max:200,inputMode:"numeric",children:[Object(h.jsx)(w.d,{color:"gray.700",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"}}),Object(h.jsxs)(w.e,{children:[Object(h.jsx)(w.b,{color:"gray.700"}),Object(h.jsx)(w.a,{color:"gray.700"})]})]}),Object(h.jsx)(C.b,{color:"gray.500",children:"0 to 200"})]}),Object(h.jsxs)(C.a,{id:"nei",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Neighborhood"}),Object(h.jsxs)(w.c,{value:i.knei,onChange:function(e,o){isNaN(o)&&(o=0),d(Object(u.a)(Object(u.a)({},i),{},{knei:o}))},min:0,max:i.nodes%2===0?i.nodes/2:Math.floor(i.nodes/2),inputMode:"numeric",children:[Object(h.jsx)(w.d,{color:"gray.700",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"}}),Object(h.jsxs)(w.e,{children:[Object(h.jsx)(w.b,{color:"gray.700"}),Object(h.jsx)(w.a,{color:"gray.700"})]})]}),Object(h.jsxs)(C.b,{color:"gray.500",children:["0 to ",i.nodes%2===0?"".concat(i.nodes/2):"".concat(Math.floor(i.nodes/2))]})]}),Object(h.jsxs)(C.a,{id:"prob",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Rewiring Probability"}),Object(h.jsxs)(w.c,{value:i.prob,onChange:function(e,o){d(Object(u.a)(Object(u.a)({},i),{},{prob:e}))},step:.01,min:0,max:1,inputMode:"decimal",children:[Object(h.jsx)(w.d,{color:"gray.700",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"}}),Object(h.jsxs)(w.e,{children:[Object(h.jsx)(w.b,{color:"gray.700"}),Object(h.jsx)(w.a,{color:"gray.700"})]})]}),Object(h.jsx)(C.b,{color:"gray.500",children:"0 to 1"})]}),Object(h.jsxs)(C.a,{id:"layout",isRequired:!0,mt:3,children:[Object(h.jsx)(x.a,{color:"gray.700",children:"Layout"}),Object(h.jsxs)(k.a,{value:i.layout,onChange:function(e){d(Object(u.a)(Object(u.a)({},i),{},{layout:e.target.value}))},color:"gray.700",backgroundColor:"#f8f8ff",border:"1px",borderColor:"gray.700",_hover:{borderColor:"gray.400"},_focus:{borderColor:"gray.400"},children:[Object(h.jsx)("option",{value:"random",style:{backgroundColor:"#f8f8ff"},children:"Random"}),Object(h.jsx)("option",{value:"grid",style:{backgroundColor:"#f8f8ff"},children:"Grid"}),Object(h.jsx)("option",{value:"circle",style:{backgroundColor:"#f8f8ff"},children:"Circle"}),Object(h.jsx)("option",{value:"concentric",style:{backgroundColor:"#f8f8ff"},children:"Concentric"}),Object(h.jsx)("option",{value:"breadthfirst",style:{backgroundColor:"#f8f8ff"},children:"Breadthfirst"}),Object(h.jsx)("option",{value:"cose",style:{backgroundColor:"#f8f8ff"},children:"Cose"})]})]}),Object(h.jsx)(s.a,{justify:"end",children:Object(h.jsx)(S.a,{mt:6,mb:4,color:"#f8f8ff",bgColor:"gray.700",fontWeight:"normal",_hover:{bg:"gray.600"},_active:{bg:"gray.800"},type:"button",onClick:function(){return e=i.nodes,t=i.prob,a=i.knei,n=i.layout,void r(Object(u.a)(Object(u.a)({},o),{},{nodes:e,prob:t,knei:a,layout:n}));var e,t,a,n},children:"Generate"})})]})}function M(){return Object(h.jsx)(O.a,{as:"h1",size:"md",color:"gray.700",mt:4,children:"~ Coming soon ~"})}function E(e){var o=Object(y.a)({name:"framework",defaultValue:"Random",onChange:e.setAlgo}),r=o.getRootProps,t=o.getRadioProps,a=r();return Object(h.jsxs)(i.a,{p:4,m:4,border:"1px",borderColor:"gray.700",borderRadius:"md",shadow:"xl",bg:"#f8f8ff",children:[Object(h.jsx)(O.a,{as:"h1",size:"md",color:"gray.700",children:"Graph Settings"}),Object(h.jsx)(x.a,{color:"gray.700",mt:3,children:"Generation Algorithm"}),Object(h.jsx)(m.a,Object(u.a)(Object(u.a)({},a),{},{children:["Random","Small-world"].map((function(e){var o=t({value:e});return Object(h.jsx)(v,Object(u.a)(Object(u.a)({},o),{},{children:e}),e)}))})),Object(h.jsx)(i.a,{mb:-3,children:"Random"===e.algo?Object(h.jsx)(R,{randSettings:e.randSettings,setRandSettings:e.setRandSettings}):"Small-world"===e.algo?Object(h.jsx)(_,{swSettings:e.swSettings,setSwSettings:e.setSwSettings}):Object(h.jsx)(M,{})})]})}var N=r(142),z=r(145),I=r(143),A=r(151);function G(){var e=Object(N.a)(),o=e.isOpen,r=e.onOpen,t=e.onClose;return Object(h.jsxs)(i.a,{pt:2,pr:4,children:[Object(h.jsx)(A.a,{onClick:r,h:5,w:5,color:"gray.700",_hover:{color:"gray.500"},transition:"0.1s",cursor:"pointer"}),Object(h.jsxs)(z.a,{onClose:t,isOpen:o,size:"xl",isCentered:!0,children:[Object(h.jsx)(z.g,{}),Object(h.jsxs)(z.d,{bg:"#f8f8ff",children:[Object(h.jsx)(z.f,{color:"gray.700",children:"About"}),Object(h.jsx)(z.c,{color:"gray.700"}),Object(h.jsxs)(z.b,{children:[Object(h.jsxs)(l.a,{color:"gray.700",children:["Hi! I'm Alan, a college student studying Computer Science and Statistics. In the summer of 2021, I worked with a professor on some research in the field of ",Object(h.jsx)(I.a,{isExternal:!0,href:"https://en.wikipedia.org/wiki/Network_science",color:"gray.600",textDecor:"underline",children:"network science"})," and studied some pretty interesting models for generating random graphs \u2013 namely, the ",Object(h.jsx)(I.a,{isExternal:!0,href:"https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93R%C3%A9nyi_model",color:"gray.600",textDecor:"underline",children:"Erd\u0151s\u2013R\xe9nyi"})," (random)  and ",Object(h.jsx)(I.a,{isExternal:!0,href:"https://en.wikipedia.org/wiki/Watts%E2%80%93Strogatz_model",color:"gray.600",textDecor:"underline",children:"Watts-Strogatz"})," (small-world) models. My research inspired me to build this web app to help you visualize any random network (up to n = 500) that can be generated using either of these models (I'm also self-studying a third model and will be adding that one soon)."]}),Object(h.jsx)(l.a,{color:"gray.700",mt:2,children:"Random graphs are extremely useful for modeling a wide array of real-life networks. Most of my summer research focused on one category of real-life networks: social networks. Social networks are extremely relevant in daily life and are especially of interest right now due to the COVID-19 pandemic and contact tracing. This is essentially the premise of this web app: a tool to enable you to visualize how a hypothetical disease will spread through a randomly generated social network."}),Object(h.jsx)(l.a,{color:"gray.700",mt:2,children:"Currently, you can generate the random graphs. I'm still working on adding the ability to create diseases. Later on, you will also be able create an account and save populations/diseases that you create."}),Object(h.jsxs)(l.a,{color:"gray.700",mt:2,children:["Here is the ",Object(h.jsx)(I.a,{isExternal:!0,href:"https://github.com/alansun25/infection-networks",color:"gray.600",textDecor:"underline",children:"source code"})," for this project. If you have any questions, ideas, or comments, feel free to contact me at ",Object(h.jsx)(I.a,{isExternal:!0,href:"mailto:as50@williams.edu",color:"gray.600",textDecor:"underline",children:"as50@williams.edu"}),"."]})]}),Object(h.jsx)(z.e,{children:Object(h.jsx)(S.a,{onClick:t,color:"#f8f8ff",bgColor:"gray.700",fontWeight:"normal",_hover:{bg:"gray.600"},_active:{bg:"gray.800"},children:"Close"})})]})]})]})}var q=function(){var e=Object(t.useState)("Random"),o=Object(c.a)(e,2),r=o[0],a=o[1],n=Object(t.useState)({nodes:0,prob:"0",layout:"random"}),d=Object(c.a)(n,2),l=d[0],b=d[1],j=Object(t.useState)({nodes:0,prob:"0",knei:0,layout:"random"}),g=Object(c.a)(j,2),u=g[0],y=g[1];return Object(h.jsxs)(s.a,{flexDirection:"row",children:[Object(h.jsx)(i.a,{h:"auto",w:"50%",children:Object(h.jsx)(E,{algo:r,setAlgo:a,randSettings:l,setRandSettings:b,swSettings:u,setSwSettings:y})}),Object(h.jsx)(i.a,{w:"100%",children:Object(h.jsx)(f,{algo:r,randSettings:l,swSettings:u})}),Object(h.jsx)(i.a,{pos:"fixed",right:0,children:Object(h.jsx)(G,{})})]})},D=r(144),$=r(147),P=Object(D.a)({styles:{global:{body:{bg:"#f8f8ff"}}}});n.a.render(Object(h.jsx)($.a,{theme:P,children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.d3feb458.chunk.js.map