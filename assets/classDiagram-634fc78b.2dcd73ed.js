import{p as t,d as e,s as r}from"./styles-16907e1b.0cc5ee75.js";import{c as a,l as d,h as n,i}from"./mermaid.core.92843d0f.js";import{G as o,l as s}from"./layout.2423e19b.js";import{s as p}from"./svgDraw-2526cba0.c17b412d.js";import"./app.4de9b7d6.js";import"./line.ae316075.js";import"./array.999c8e45.js";import"./constant.4f073c13.js";let c={};const f=function(t){const e=Object.entries(c).find((e=>e[1].label===t));if(e)return e[0]},g={parser:t,db:e,renderer:{draw:function(t,e,r,g){const m=a().class;c={},d.info("Rendering diagram "+t);const h=a().securityLevel;let l;"sandbox"===h&&(l=n("#i"+e));const u=n("sandbox"===h?l.nodes()[0].contentDocument.body:"body"),k=u.select(`[id='${e}']`);var b;(b=k).append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),b.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),b.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),b.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),b.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),b.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),b.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),b.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");const L=new o({multigraph:!0});L.setGraph({isMultiGraph:!0}),L.setDefaultEdgeLabel((function(){return{}}));const y=g.db.getClasses(),x=Object.keys(y);for(const a of x){const t=y[a],e=p.drawClass(k,t,m,g);c[e.id]=e,L.setNode(e.id,e),d.info("Org height: "+e.height)}g.db.getRelations().forEach((function(t){d.info("tjoho"+f(t.id1)+f(t.id2)+JSON.stringify(t)),L.setEdge(f(t.id1),f(t.id2),{relation:t},t.title||"DEFAULT")}));g.db.getNotes().forEach((function(t){d.debug(`Adding note: ${JSON.stringify(t)}`);const e=p.drawNote(k,t,m,g);c[e.id]=e,L.setNode(e.id,e),t.class&&t.class in y&&L.setEdge(t.id,f(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),s(L),L.nodes().forEach((function(t){void 0!==t&&void 0!==L.node(t)&&(d.debug("Node "+t+": "+JSON.stringify(L.node(t))),u.select("#"+(g.db.lookUpDomId(t)||t)).attr("transform","translate("+(L.node(t).x-L.node(t).width/2)+","+(L.node(t).y-L.node(t).height/2)+" )"))})),L.edges().forEach((function(t){void 0!==t&&void 0!==L.edge(t)&&(d.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(L.edge(t))),p.drawEdge(k,L.edge(t),L.edge(t).relation,m,g))}));const E=k.node().getBBox(),w=E.width+40,M=E.height+40;i(k,M,w,m.useMaxWidth);const j=`${E.x-20} ${E.y-20} ${w} ${M}`;d.debug(`viewBox ${j}`),k.attr("viewBox",j)}},styles:r,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,e.clear()}};export{g as diagram};
