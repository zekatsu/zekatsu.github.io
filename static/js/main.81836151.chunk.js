(this["webpackJsonpscore-calculator"]=this["webpackJsonpscore-calculator"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(4),a=n(8),i=n(5),l=n(6),u=n(1),c=n(10),r=n(9),h=n(2),o=n.n(h),b=n(7),j=n.n(b),p=n(0),v=function(t){Object(c.a)(n,t);var e=Object(r.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={status:[0,0,0,0,0],rarity:3,uniqueLevel:4,skill:{129:0,174:0,180:0,191:0,217:0,239:0,288:0,394:0,508:0,559:0},result:"\u672a\u8a08\u7b97"},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(l.a)(n,[{key:"calcStatus_",value:function(t){var e=[5,8,10,13,16,18,21,24,26,28,29,30,31,33,34,35,39,41,42,43,52,55,66,68,60],n=Math.floor(t/50),s=t%50,a=e.slice(0,n).reduce((function(t,e){return t+e}),0);return Math.floor(5*a+(s+1)*e[n]/10)}},{key:"calcStatus",value:function(){var t=this;return this.state.status.reduce((function(e,n){return e+t.calcStatus_(n)}),0)}},{key:"calcUnique",value:function(){return(this.state.rarity<3?120:170)*this.state.uniqueLevel}},{key:"calcSkill",value:function(){for(var t=0,e=0,n=Object.entries(this.state.skill);e<n.length;e++){var s=Object(a.a)(n[e],2);t+=s[0]*s[1]}return t}},{key:"calcScore",value:function(){return(this.calcStatus()+this.calcUnique()+this.calcSkill()).toString()}},{key:"handleChange",value:function(t){this.setState(Object(s.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.setState({result:this.calcScore()}),t.preventDefault()}},{key:"statusInput",value:function(t){var e=this;return Object(p.jsx)("input",{name:"status"+t.toString(),type:"number",min:0,max:1200,onChange:function(n){var s=e.state.status;s[t]=parseInt(n.target.value,10),e.setState({status:s})}})}},{key:"skillInput",value:function(t,e){var n=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{name:"skill"+t.toString(),type:"number",min:0,max:10,value:this.state.skill[t],onChange:function(e){var s=n.state.skill;s[t]=parseInt(e.target.value,10),n.setState({skill:s})}}),t.toString()+": "+e]})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Main",children:[Object(p.jsx)("div",{className:"Control",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(p.jsxs)("div",{className:"statusInput",children:[Object(p.jsx)("label",{children:"\u30b9\u30c6\u30fc\u30bf\u30b9"}),this.statusInput(0),this.statusInput(1),this.statusInput(2),this.statusInput(3),this.statusInput(4)]}),Object(p.jsxs)("div",{className:"uniqueInput",children:[Object(p.jsx)("label",{children:"\u661f"}),Object(p.jsx)("input",{type:"number",name:"rarity",min:1,max:5,value:3,onChange:this.handleChange}),Object(p.jsx)("label",{children:"\u56fa\u6709\u30ec\u30d9\u30eb"}),Object(p.jsx)("input",{type:"number",name:"uniqueLevel",min:1,max:6,value:4,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"skillInput",children:[this.skillInput(129,"\u7dd1\u4e38\u3001\u96c6\u4e2d\u529b"),this.skillInput(174,"\u7dd1\u4e8c\u91cd\u4e38"),this.skillInput(180,"\u7d99\u627f\u56fa\u6709"),this.skillInput(191,"\u30b3\u30c4\u4e38"),this.skillInput(217,"\u6c4e\u7528"),this.skillInput(239,"\u8ddd\u96e2\u811a\u8cea\u4e38\u3001\u30b3\u30c4\u4e8c\u91cd\u4e38"),this.skillInput(288,"\u8ddd\u96e2\u811a\u8cea\u4e8c\u91cd\u4e38"),this.skillInput(394,"\u30b3\u30f3\u30bb\u30f3\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3"),this.skillInput(508,"\u6c4e\u7528\u91d1"),this.skillInput(559,"\u8ddd\u96e2\u811a\u8cea\u91d1")]}),Object(p.jsx)("input",{type:"submit",value:"calc"})]})}),Object(p.jsx)("div",{className:"Result",children:this.state.result})]})}}]),n}(o.a.Component);j.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.81836151.chunk.js.map