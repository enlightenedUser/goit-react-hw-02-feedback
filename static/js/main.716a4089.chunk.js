(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),o=a.n(c),r=a(6),s=a(7),i=a(10),d=a(9),u=(a(15),a(16),a(8)),b=a.n(u),l=a(0),j=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object.keys(t).map((function(e){return Object(l.jsx)("button",{name:e,className:"buttonReview",type:"button",onClick:a,children:e},b.a.generate())}))})},h=function(e){var t=e.good,a=e.neutral,n=e.bad;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",a]}),Object(l.jsxs)("p",{children:["Bad: ",n]})]})},g=a(4),p=a.n(g);p.a.propTypes={countTotalFeedback:p.a.func};var v=function(e){var t=e.countTotalFeedback,a=e.countPositiveFeedbackPercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Total: ",t().total]}),Object(l.jsxs)("p",{children:["Positive: ",a().procent]})]})},O=function(e){var t=e.title;return Object(l.jsx)("h2",{children:t})},f=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=e.state;"good"===t.target.name?e.setState({good:a.good+1}):"neutral"===t.target.name?e.setState({neutral:a.neutral+1}):e.setState({bad:a.bad+1})},e.countTotalFeedback=function(){return{total:e.state.good+e.state.neutral+e.state.bad}},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,n=a+t.neutral+t.bad;return{procent:Math.floor(100*a/n)+"%"}},e.isFeedbackClear=function(){var t=e.state;return t.good+t.neutral+t.bad===0},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("options",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){this.setState(JSON.parse(localStorage.getItem("options")))}},{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{title:"Please leave feedback"}),Object(l.jsx)(j,{options:this.state,onLeaveFeedback:this.onLeaveFeedback}),this.isFeedbackClear()?Object(l.jsx)(f,{message:"No feedback given"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{title:"Statistics"}),Object(l.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad}),Object(l.jsx)(v,{countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage})]})]})}}]),a}(n.Component);o.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.716a4089.chunk.js.map