import{i as e,G as t}from"./layout.2423e19b.js";import{X as r,p as n,l,q as o,c as a,j as s,r as i,o as c,h as d,y as p,t as b}from"./mermaid.core.92843d0f.js";import{f}from"./flowDb-52e24d17.53f6c0f1.js";import{r as w}from"./index-5219d011.c73a46ed.js";import{s as h}from"./selectAll.4e821b9e.js";function u(e,t){return!!e.children(t).length}function g(e){return k(e.v)+":"+k(e.w)+":"+k(e.name)}var y=/:/g;function k(e){return e?String(e).replace(y,"\\:"):""}function x(e,t){t&&e.attr("style",t)}function m(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function v(t,n){var l=n.graph();if(e(l)){var o=l.transition;if(r(o))return o(t)}return t}function S(e,t){var r=e.append("foreignObject").attr("width","100000"),n=r.append("xhtml:div");n.attr("xmlns","http://www.w3.org/1999/xhtml");var l=t.label;switch(typeof l){case"function":n.insert(l);break;case"object":n.insert((function(){return l}));break;default:n.html(l)}x(n,t.labelStyle),n.style("display","inline-block"),n.style("white-space","nowrap");var o=n.node().getBoundingClientRect();return r.attr("width",o.width).attr("height",o.height),r}const T={},_=function(e,t,r,i,c,d){const p=i.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const i=e[r];let b="default";i.classes.length>0&&(b=i.classes.join(" ")),b+=" flowchart-label";const f=n(i.styles);let w,h=void 0!==i.text?i.text:i.id;if(l.info("vertex",i,i.labelType),"markdown"===i.labelType)l.info("vertex",i,i.labelType);else if(o(a().flowchart.htmlLabels)){const e={label:h.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};w=S(p,e).node(),w.parentNode.removeChild(w)}else{const e=c.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",f.labelStyle.replace("color:","fill:"));const t=h.split(s.lineBreakRegex);for(const r of t){const t=c.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}w=e}let u=0,g="";switch(i.type){case"round":u=5,g="rect";break;case"square":g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"odd_right":g="rect_left_inv_arrow";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"group":g="rect";break;case"doublecircle":g="doublecircle";break;default:g="rect"}t.setNode(i.id,{labelStyle:f.labelStyle,shape:g,labelText:h,labelType:i.labelType,rx:u,ry:u,class:b,style:f.style,id:i.id,link:i.link,linkTarget:i.linkTarget,tooltip:d.db.getTooltip(i.id)||"",domId:d.db.lookUpDomId(i.id),haveCallback:i.haveCallback,width:"group"===i.type?500:void 0,dir:i.dir,type:i.type,props:i.props,padding:a().flowchart.padding}),l.info("setNode",{labelStyle:f.labelStyle,labelType:i.labelType,shape:g,labelText:h,rx:u,ry:u,class:b,style:f.style,id:i.id,domId:d.db.lookUpDomId(i.id),width:"group"===i.type?500:void 0,type:i.type,dir:i.dir,props:i.props,padding:a().flowchart.padding})}))},C=function(e,t,r){l.info("abc78 edges = ",e);let o,a,d=0,p={};if(void 0!==e.defaultStyle){const t=n(e.defaultStyle);o=t.style,a=t.labelStyle}e.forEach((function(r){d++;var b="L-"+r.start+"-"+r.end;void 0===p[b]?(p[b]=0,l.info("abc78 new entry",b,p[b])):(p[b]++,l.info("abc78 new entry",b,p[b]));let f=b+"-"+p[b];l.info("abc78 new link id to be used is",b,f,p[b]);var w="LS-"+r.start,h="LE-"+r.end;const u={style:"",labelStyle:""};switch(u.minlen=r.length||1,"arrow_open"===r.type?u.arrowhead="none":u.arrowhead="normal",u.arrowTypeStart="arrow_open",u.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":u.arrowTypeStart="arrow_cross";case"arrow_cross":u.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":u.arrowTypeStart="arrow_point";case"arrow_point":u.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":u.arrowTypeStart="arrow_circle";case"arrow_circle":u.arrowTypeEnd="arrow_circle"}let g="",y="";switch(r.stroke){case"normal":g="fill:none;",void 0!==o&&(g=o),void 0!==a&&(y=a),u.thickness="normal",u.pattern="solid";break;case"dotted":u.thickness="normal",u.pattern="dotted",u.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u.thickness="thick",u.pattern="solid",u.style="stroke-width: 3.5px;fill:none;";break;case"invisible":u.thickness="invisible",u.pattern="solid",u.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=n(r.style);g=e.style,y=e.labelStyle}u.style=u.style+=g,u.labelStyle=u.labelStyle+=y,void 0!==r.interpolate?u.curve=i(r.interpolate,c):void 0!==e.defaultInterpolate?u.curve=i(e.defaultInterpolate,c):u.curve=i(T.curve,c),void 0===r.text?void 0!==r.style&&(u.arrowheadStyle="fill: #333"):(u.arrowheadStyle="fill: #333",u.labelpos="c"),u.labelType=r.labelType,u.label=r.text.replace(s.lineBreakRegex,"\n"),void 0===r.style&&(u.style=u.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),u.labelStyle=u.labelStyle.replace("color:","fill:"),u.id=f,u.classes="flowchart-link "+w+" "+h,t.setEdge(r.start,r.end,u,d)}))},$={setConf:function(e){const t=Object.keys(e);for(const r of t)T[r]=e[r]},addVertices:_,addEdges:C,getClasses:function(e,t){l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(r){return}},draw:function(e,r,n,o){l.info("Drawing flowchart"),o.db.clear(),f.setGen("gen-2"),o.parser.parse(e);let s=o.db.getDirection();void 0===s&&(s="TD");const{securityLevel:i,flowchart:c}=a(),u=c.nodeSpacing||50,g=c.rankSpacing||50;let y;"sandbox"===i&&(y=d("#i"+r));const k=d("sandbox"===i?y.nodes()[0].contentDocument.body:"body"),x="sandbox"===i?y.nodes()[0].contentDocument:document,m=new t({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:u,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let v;const S=o.db.getSubGraphs();l.info("Subgraphs - ",S);for(let t=S.length-1;t>=0;t--)v=S[t],l.info("Subgraph - ",v),o.db.addVertex(v.id,{text:v.title,type:v.labelType},"group",void 0,v.classes,v.dir);const T=o.db.getVertices(),$=o.db.getEdges();l.info("Edges",$);let E=0;for(E=S.length-1;E>=0;E--){v=S[E],h("cluster").append("text");for(let e=0;e<v.nodes.length;e++)l.info("Setting up subgraphs",v.nodes[e],v.id),m.setParent(v.nodes[e],v.id)}_(T,m,r,k,x,o),C($,m);const A=k.select(`[id="${r}"]`),N=k.select("#"+r+" g");if(w(N,m,["point","circle","cross"],"flowchart",r),p.insertTitle(A,"flowchartTitleText",c.titleTopMargin,o.db.getDiagramTitle()),b(m,A,c.diagramPadding,c.useMaxWidth),o.db.indexNodes("subGraph"+E),!c.htmlLabels){const e=x.querySelectorAll('[id="'+r+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=x.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(T).forEach((function(e){const t=T[e];if(t.link){const n=d("#"+r+' [id="'+e+'"]');if(n){const e=x.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",t.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",t.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===i?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):t.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",t.linkTarget);const r=n.insert((function(){return e}),":first-child"),l=n.select(".label-container");l&&r.append((function(){return l.node()}));const o=n.select(".label");o&&r.append((function(){return o.node()}))}}}))}},E=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`;export{x as a,S as b,v as c,m as d,g as e,$ as f,E as g,u as i};
