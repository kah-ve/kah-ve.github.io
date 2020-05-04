(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=(a(33),a(27)),l=a(19),i=a.n(l),u=a(24),m=a(2),d=a(3),p=a(4),h=a(5),b=a(6),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TopNavLinkButtons"},r.a.createElement(b.b,{className:"theLink",to:"./"},"Go to Home Page"),r.a.createElement(b.b,{className:"theLink",to:"./GitHubApp"},"Go to GitHub App"),r.a.createElement(b.b,{className:"theLink",to:"./SudokuApp"},"Go to Sudoku App"),r.a.createElement(b.b,{className:"theLink",to:"./SpeedCountApp"},"Go to SpeedCount App"),r.a.createElement(b.b,{className:"theLink",to:"./TodoApp"},"Go to Todo App")))}}]),a}(r.a.Component),v=(a(40),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){"\n    Bio: ".concat(this.props.bio," <br />Public Repos: ").concat(this.props.public_repos,"     | Followers: ").concat(this.props.followers);return r.a.createElement("div",{className:"imgandcard"},r.a.createElement("div",{className:"imgCard"},r.a.createElement("img",{src:this.props.avatar_url,alt:""})),r.a.createElement("div",{className:"github-profile"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},this.props.name),r.a.createElement("div",{className:"company"},r.a.createElement("span",{className:"textDesc"},"Bio:")," ",this.props.bio," ",r.a.createElement("br",null),r.a.createElement("span",{className:"textDesc"},"Public Repos:")," ",this.props.public_repos," ",r.a.createElement("br",null),r.a.createElement("span",{className:"textDesc"},"Followers:")," ",this.props.followers," ",r.a.createElement("br",null)))))}}]),a}(r.a.Component)),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://api.github.com/users/".concat(n.state.username));case 3:if(404===(a=e.sent).status){e.next=14;break}return e.next=7,a.json();case 7:r=e.sent,n.props.onSubmit(r),console.log(r),n.setState({username:""}),n.setState({errorMessage:""}),e.next=15;break;case 14:n.setState({errorMessage:"API fetch failed. Enter a valid GitHub user."});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onNameChange=function(e){n.setState({username:e.target.value})},n.state={username:"",errorMessage:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{type:"submit",className:"git-form-box",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"inputGit",type:"text",onChange:this.onNameChange,value:this.state.username,placeholder:"GitHub username",required:!0}),r.a.createElement("button",{className:"buttonGit"},"Add User")),r.a.createElement("div",{className:"error-message"},this.state.errorMessage))}}]),a}(r.a.Component),g=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).addNewProfile=function(e){n.setState((function(t){return{profiles:[].concat(Object(s.a)(t.profiles),[e])}}))},n.state={profiles:k},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"GitHubApp"},r.a.createElement("div",{id:"titleApp"},"GitHub Cards"),r.a.createElement(E,{onSubmit:this.addNewProfile}),r.a.createElement(j,{data:this.state.profiles})),r.a.createElement("div",{id:"help-note"},r.a.createElement("b",null,"Note:")," Add a GitHub username to include their information in this card."))}}]),a}(r.a.Component),j=function(e){return r.a.createElement(r.a.Fragment,null,e.data.map((function(e){return r.a.createElement(v,Object.assign({key:e.id},e))})))},k=[{name:"John Smith",avatar_url:"https://wallpaperhd.wiki/wp-content/uploads/4k-wallpaper-minimalist-the-witcher-3-wild-hunt-minimalist-uhdpaper.com-4k-5.1321-wp.thumbnail.jpg",bio:"Software Engineer at Earth Labs",public_repos:3,followers:5}],N=g,y=(a(41),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={history:0},n}return Object(d.a)(a,[{key:"buttonIsClicked",value:function(e){this.setState({history:this.state.history+1})}},{key:"resetIndividual",value:function(e){this.setState({history:0})}},{key:"render",value:function(){var e=this;return this.props.clearAll&&this.setState({history:0}),r.a.createElement("td",{id:"squareButton",onClick:function(t){return e.buttonIsClicked(t)},onContextMenu:function(t){return e.resetIndividual(t)}},this.state.history+this.props.text)}}]),a}(r.a.Component)),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).contextMenu=function(e){e.preventDefault()},n.state={incrementAmount:0,clearAll:!1},n}return Object(d.a)(a,[{key:"makeBoard",value:function(){for(var e=[],t=0,a=0;a<5;a++){for(var n=[],o=0;o<5;o++)n.push(r.a.createElement(y,{key:t,clearAll:this.state.clearAll,text:this.state.incrementAmount})),t+=1;e.push(r.a.createElement("tr",{key:t},n)),t+=1}return this.state.clearAll&&this.setState({clearAll:!1}),e}},{key:"incrementAll",value:function(e){var t=this.state.incrementAmount;this.setState({incrementAmount:t+1})}},{key:"clearAll",value:function(e){this.setState({clearAll:!0,incrementAmount:0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("h1",{style:{color:"red",margin:"50px auto"},id:"greeting"}," In Progress "),r.a.createElement("table",{id:"myTableId",className:"myTable",onContextMenu:this.contextMenu},r.a.createElement("tbody",null,this.makeBoard())),r.a.createElement("div",{className:"botOfGrid"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("button",{id:"incrementAll",onClick:function(t){return e.incrementAll(t)}},"Increment All"),r.a.createElement("div",null,"Increment Amount: ",this.state.incrementAmount),r.a.createElement("br",null)),r.a.createElement("button",{id:"clearAll",onClick:function(t){return e.clearAll(t)}},"Clear All"),r.a.createElement("div",null,"Right Click Individual Box to Reset Individual History")))}}]),a}(r.a.Component),O=(a(42),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"front-page-container"},r.a.createElement("div",{id:"greeting"},"My React Apps"),r.a.createElement("div",{class:"linkButtons"},r.a.createElement(b.b,{className:"theLink",to:"./GitHubApp"},"Go to GitHub App"),r.a.createElement(b.b,{className:"theLink",to:"./SudokuApp"},"Go to Sudoku App"),r.a.createElement(b.b,{className:"theLink",to:"./SpeedCountApp"},"Go to SpeedCount App"),r.a.createElement(b.b,{className:"theLink",to:"./TodoApp"},"Go to Todo App")))}}]),a}(r.a.Component)),A=a(13),C=function(e){return Object(n.useEffect)((function(){if(e.secondsLeft>0&&e.availableNums.length>0){var t=setInterval((function(){e.setSecondsLeft(e.secondsLeft-1)}),1e3);return function(){return clearInterval(t)}}}),[e.secondsLeft,e.availableNums.length]),r.a.createElement("div",{className:"timer"},"Time Remaining: ",r.a.createElement("span",{id:"timer-number"},e.secondsLeft))},w={available:"rgb(85, 38, 0)",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},L={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var a=[[]],n=[],r=0;r<e.length;r++)for(var o=0,c=a.length;o<c;o++){var s=a[o].concat(e[r]),l=L.sum(s);l<=t&&(a.push(s),n.push(l))}return n[L.random(0,n.length-1)]}},I=function(e){return r.a.createElement(r.a.Fragment,null,L.range(1,e.count).map((function(e){return r.a.createElement("div",{key:e,className:"sun"})})))},G=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:w[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},x=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"That was fast! You won!"),r.a.createElement("button",{id:"play-again-btn",onClick:e.onClick},"Play Again"))},P=function(e){var t=function(){var e=Object(n.useState)(L.random(1,9)),t=Object(A.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(L.range(1,9)),c=Object(A.a)(o,2),s=c[0],l=c[1],i=Object(n.useState)([]),u=Object(A.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(10),h=Object(A.a)(p,2),b=h[0],f=h[1];return{suns:a,availableNums:s,candidateNums:m,secondsLeft:b,setSecondsLeft:f,setGameState:function(e){if(L.sum(e)!==a)d(e);else{var t=s.filter((function(t){return!e.includes(t)}));r(L.randomSumIn(t,9)),l(t),d([])}}}}(),a=t.suns,o=t.availableNums,c=t.candidateNums,s=t.secondsLeft,l=t.setSecondsLeft,i=t.setGameState,u=L.sum(c)>a,m=0===o.length?"won":0===s?"lost":"active",d=function(e){return o.includes(e)?c.includes(e)?u?"wrong":"candidate":"available":"used"},p=function(e,t){if("used"!==t&&"active"===m){var a="available"===t?c.concat(e):c.filter((function(t){return t!==e}));i(a)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Count the Number of Suns!"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==m?r.a.createElement(x,{onClick:e.startNewGame,gameStatus:m}):r.a.createElement(I,{count:a})),r.a.createElement("div",{className:"right"},L.range(1,9).map((function(e){return r.a.createElement(G,{key:e,status:d(e),number:e,onClick:p})})))),r.a.createElement(C,{secondsLeft:s,setSecondsLeft:l,availableNums:o}),r.a.createElement("div",{className:"help-note"},r.a.createElement("b",null,"Note:")," Select the number(s) that adds up to equal the count of the suns. You can also deselect a number you've selected by clicking on it again. ")))},T=(a(43),function(e){var t=Object(n.useState)(1),a=Object(A.a)(t,2),o=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(P,{key:o,startNewGame:function(){return c(o+1)}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(10),F=a(11),M=(a(44),function(e){return r.a.createElement("div",{className:"project-item"},e.projectStr)}),B=function(e){return r.a.createElement("div",{className:"todo-item"},r.a.createElement("li",null,e.todosStr))},D=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={data:[["Default Project","First Todo","Second Todo"]],projectInput:"Default Project",todoInput:""},n.getProjectsList=n.getProjectsList.bind(Object(F.a)(n)),n.getTodosList=n.getTodosList.bind(Object(F.a)(n)),n.onChangeTodo=n.onChangeTodo.bind(Object(F.a)(n)),n.onChangeProject=n.onChangeProject.bind(Object(F.a)(n)),n.onSubmit=n.onSubmit.bind(Object(F.a)(n)),n}return Object(d.a)(a,[{key:"getProjectsList",value:function(){return console.log(this.state.data),this.state.data.map((function(e){return r.a.createElement(M,{projectStr:e[0]})}))}},{key:"getTodosList",value:function(e){var t=this,a=this.state.data.filter((function(e){return e[0]===t.state.projectInput}));return 1===a.length?(a=a[0].slice(1)).map((function(e){return r.a.createElement(B,{todosStr:e})})):[]}},{key:"onChangeTodo",value:function(e){this.setState({todoInput:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({projectInput:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=-1;this.state.data.forEach((function(e,n){e[0]===t.state.projectInput&&(a=n)}));var n=this.state.data;if(-1!==a)n[a].push(this.state.todoInput);else{var r=[this.state.projectInput,this.state.todoInput];n.push(r)}this.setState({data:n}),this.setState({todoInput:""})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement("h1",{style:{color:"red",margin:"50px auto -80px auto"},id:"greeting"}," In Progress "),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"top-bar"},r.a.createElement("form",{type:"submit",className:"todo-form-box"},r.a.createElement("input",{type:"text",placeholder:"Add todo",value:this.state.todoInput,onChange:this.onChangeTodo,required:!0}),r.a.createElement("input",{type:"text",placeholder:"Add to a Project",value:this.state.projectInput,onChange:this.onChangeProject,required:!0}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this.onSubmit}))),r.a.createElement("div",{className:"todo-body"},r.a.createElement("div",{className:"left-nav"},r.a.createElement("div",{className:"title-bar"},r.a.createElement("h4",{className:"todo-titles"},"Projects")),r.a.createElement("div",{id:"projects-list"},this.getProjectsList())),r.a.createElement("div",{className:"seperator"}),r.a.createElement("div",{className:"right-nav"},r.a.createElement("div",{className:"title-bar"},r.a.createElement("h4",{className:"todo-titles"},"Todos")),r.a.createElement("div",{id:"todos-list"},this.getTodosList())))))}}]),a}(r.a.Component),R=r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(H.b,{exact:!0,path:"/",component:O}),r.a.createElement(H.b,{path:"/GitHubApp",component:N}),r.a.createElement(H.b,{path:"/SudokuApp",component:S}),r.a.createElement(H.b,{path:"/SpeedCountApp",component:T}),r.a.createElement(H.b,{path:"/TodoApp",component:D}),r.a.createElement(H.a,{to:"/"})));c.a.render(R,document.getElementById("reactSide")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.463a9dfb.chunk.js.map