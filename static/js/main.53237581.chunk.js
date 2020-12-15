(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n);a(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(28),s=a(19),i=a.n(s),c=a(25),l=a(2),u=a(3),m=a(4),d=a(5),p=a(0),h=a.n(p),b=a(7),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"TopNavLinkButtons"},h.a.createElement(b.b,{className:"theLink",to:"./"},"Go to Home Page"),h.a.createElement(b.b,{className:"theLink",to:"./TodoApp"},"Go to Todo App"),h.a.createElement(b.b,{className:"theLink",to:"./SpeedCountApp"},"Go to SpeedCount App"),h.a.createElement(b.b,{className:"theLink",to:"./GitHubApp"},"Go to GitHub App"),h.a.createElement(b.b,{className:"theLink",to:"./SudokuApp"},"Go to Sudoku App")))}}]),a}(h.a.Component),v=(a(41),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){"\n    Bio: ".concat(this.props.bio," <br />Public Repos: ").concat(this.props.public_repos,"     | Followers: ").concat(this.props.followers);return h.a.createElement("div",{className:"imgandcard"},h.a.createElement("div",{className:"imgCard"},h.a.createElement("img",{src:this.props.avatar_url,alt:""})),h.a.createElement("div",{className:"github-profile"},h.a.createElement("div",{className:"info"},h.a.createElement("div",{className:"name"},this.props.name),h.a.createElement("div",{className:"company"},h.a.createElement("span",{className:"textDesc"},"Bio:")," ",this.props.bio," ",h.a.createElement("br",null),h.a.createElement("span",{className:"textDesc"},"Public Repos:")," ",this.props.public_repos," ",h.a.createElement("br",null),h.a.createElement("span",{className:"textDesc"},"Followers:")," ",this.props.followers," ",h.a.createElement("br",null)))))}}]),a}(h.a.Component)),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://api.github.com/users/".concat(n.state.username));case 3:if(404===(a=e.sent).status){e.next=14;break}return e.next=7,a.json();case 7:r=e.sent,n.props.onSubmit(r),console.log(r),n.setState({username:""}),n.setState({errorMessage:""}),e.next=15;break;case 14:n.setState({errorMessage:"API fetch failed. Enter a valid GitHub user."});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onNameChange=function(e){n.setState({username:e.target.value})},n.state={username:"",errorMessage:""},n}return Object(u.a)(a,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("form",{type:"submit",className:"git-form-box",onSubmit:this.handleSubmit},h.a.createElement("input",{className:"inputGit",type:"text",onChange:this.onNameChange,value:this.state.username,placeholder:"GitHub username",required:!0}),h.a.createElement("button",{className:"buttonGit"},"Add User")),h.a.createElement("div",{className:"error-message"},this.state.errorMessage))}}]),a}(h.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addNewProfile=function(e){n.setState((function(t){return{profiles:[].concat(Object(o.a)(t.profiles),[e])}}))},n.state={profiles:k},n}return Object(u.a)(a,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(f,null),h.a.createElement("div",{className:"GitHubApp"},h.a.createElement("div",{id:"titleApp"},"GitHub Cards"),h.a.createElement(g,{onSubmit:this.addNewProfile}),h.a.createElement(j,{data:this.state.profiles})),h.a.createElement("div",{id:"help-note"},h.a.createElement("b",null,"Note:")," Add a GitHub username to include their information in this card."))}}]),a}(h.a.Component),j=function(e){return h.a.createElement(h.a.Fragment,null,e.data.map((function(e){return h.a.createElement(v,Object.assign({key:e.id},e))})))},k=[{name:"John Smith",avatar_url:"https://raw.githubusercontent.com/kah-ve/kah-ve.github.io/gh-pages/thumbnaildemo.jpg",bio:"Software Engineer at Earth Labs",public_repos:3,followers:5}],y=E,C=(a(42),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={history:0},n}return Object(u.a)(a,[{key:"buttonIsClicked",value:function(e){this.setState({history:this.state.history+1})}},{key:"resetIndividual",value:function(e){this.setState({history:0})}},{key:"render",value:function(){var e=this;return this.props.clearAll&&this.setState({history:0}),h.a.createElement("td",{id:"squareButton",onClick:function(t){return e.buttonIsClicked(t)},onContextMenu:function(t){return e.resetIndividual(t)}},this.state.history+this.props.text)}}]),a}(h.a.Component)),S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).contextMenu=function(e){e.preventDefault()},n.state={incrementAmount:0,clearAll:!1},n}return Object(u.a)(a,[{key:"makeBoard",value:function(){for(var e=[],t=0,a=0;a<5;a++){for(var n=[],r=0;r<5;r++)n.push(h.a.createElement(C,{key:t,clearAll:this.state.clearAll,text:this.state.incrementAmount})),t+=1;e.push(h.a.createElement("tr",{key:t},n)),t+=1}return this.state.clearAll&&this.setState({clearAll:!1}),e}},{key:"incrementAll",value:function(e){var t=this.state.incrementAmount;this.setState({incrementAmount:t+1})}},{key:"clearAll",value:function(e){this.setState({clearAll:!0,incrementAmount:0})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement(f,null),h.a.createElement("h1",{style:{color:"red",margin:"50px auto"},id:"greeting"}," In Progress "),h.a.createElement("table",{id:"myTableId",className:"myTable",onContextMenu:this.contextMenu},h.a.createElement("tbody",null,this.makeBoard())),h.a.createElement("div",{className:"botOfGrid"},h.a.createElement("div",null,h.a.createElement("br",null),h.a.createElement("button",{id:"incrementAll",onClick:function(t){return e.incrementAll(t)}},"Increment All"),h.a.createElement("div",null,"Increment Amount: ",this.state.incrementAmount),h.a.createElement("br",null)),h.a.createElement("button",{id:"clearAll",onClick:function(t){return e.clearAll(t)}},"Clear All"),h.a.createElement("div",null,"Right Click Individual Box to Reset Individual History")))}}]),a}(h.a.Component),N=(a(43),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return h.a.createElement("div",{id:"front-page-container"},h.a.createElement("div",{id:"greeting"},"My React Apps"),h.a.createElement("div",{class:"linkButtons"},h.a.createElement(b.b,{className:"theLink",to:"./TodoApp"},"Go to Todo App"),h.a.createElement(b.b,{className:"theLink",to:"./SpeedCountApp"},"Go to SpeedCount App"),h.a.createElement(b.b,{className:"theLink",to:"./GitHubApp"},"Go to GitHub App"),h.a.createElement(b.b,{className:"theLink",to:"./SudokuApp"},"Go to Sudoku App")))}}]),a}(h.a.Component)),O=a(14),A=function(e){return Object(p.useEffect)((function(){if(e.secondsLeft>0&&e.availableNums.length>0){var t=setInterval((function(){e.setSecondsLeft(e.secondsLeft-1)}),1e3);return function(){return clearInterval(t)}}}),[e.secondsLeft,e.availableNums.length]),h.a.createElement("div",{className:"timer"},"Time Remaining: ",h.a.createElement("span",{id:"timer-number"},e.secondsLeft))},L={available:"rgb(85, 38, 0)",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},G={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var a=[[]],n=[],r=0;r<e.length;r++)for(var o=0,s=a.length;o<s;o++){var i=a[o].concat(e[r]),c=G.sum(i);c<=t&&(a.push(i),n.push(c))}return n[G.random(0,n.length-1)]}},I=function(e){return h.a.createElement(h.a.Fragment,null,G.range(1,e.count).map((function(e){return h.a.createElement("div",{key:e,className:"sun"})})))},w=function(e){return h.a.createElement("button",{className:"number",style:{backgroundColor:L[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},T=function(e){return h.a.createElement("div",{className:"game-done"},h.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"That was fast! You won!"),h.a.createElement("button",{id:"play-again-btn",onClick:e.onClick},"Play Again"))},x=function(e){var t=function(){var e=Object(p.useState)(G.random(1,9)),t=Object(O.a)(e,2),a=t[0],n=t[1],r=Object(p.useState)(G.range(1,9)),o=Object(O.a)(r,2),s=o[0],i=o[1],c=Object(p.useState)([]),l=Object(O.a)(c,2),u=l[0],m=l[1],d=Object(p.useState)(10),h=Object(O.a)(d,2),b=h[0],f=h[1];return{suns:a,availableNums:s,candidateNums:u,secondsLeft:b,setSecondsLeft:f,setGameState:function(e){if(G.sum(e)!==a)m(e);else{var t=s.filter((function(t){return!e.includes(t)}));n(G.randomSumIn(t,9)),i(t),m([])}}}}(),a=t.suns,n=t.availableNums,r=t.candidateNums,o=t.secondsLeft,s=t.setSecondsLeft,i=t.setGameState,c=G.sum(r)>a,l=0===n.length?"won":0===o?"lost":"active",u=function(e){return n.includes(e)?r.includes(e)?c?"wrong":"candidate":"available":"used"},m=function(e,t){if("used"!==t&&"active"===l){var a="available"===t?r.concat(e):r.filter((function(t){return t!==e}));i(a)}};return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"game"},h.a.createElement("div",{className:"help"},"Count the Number of Suns!"),h.a.createElement("div",{className:"body"},h.a.createElement("div",{className:"left"},"active"!==l?h.a.createElement(T,{onClick:e.startNewGame,gameStatus:l}):h.a.createElement(I,{count:a})),h.a.createElement("div",{className:"right"},G.range(1,9).map((function(e){return h.a.createElement(w,{key:e,status:u(e),number:e,onClick:m})})))),h.a.createElement(A,{secondsLeft:o,setSecondsLeft:s,availableNums:n}),h.a.createElement("div",{className:"help-note"},h.a.createElement("b",null,"Note:")," Select the number(s) that adds up to equal the count of the suns. You can also deselect a number you've selected by clicking on it again. ")))},P=(a(44),function(e){var t=Object(p.useState)(1),a=Object(O.a)(t,2),n=a[0],r=a[1];return h.a.createElement(h.a.Fragment,null,h.a.createElement(f,null),h.a.createElement(x,{key:n,startNewGame:function(){return r(n+1)}}))}),D=a(9),M=(a(45),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toggleDisplay:"hidden"},n.toggleCloseDisplay=n.toggleCloseDisplay.bind(Object(D.a)(n)),n}return Object(u.a)(a,[{key:"toggleCloseDisplay",value:function(){this.setState({toggleDisplay:"hidden"===this.state.toggleDisplay?"visible":"hidden"})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"project-item",onClick:this.props.onClick,onMouseEnter:this.toggleCloseDisplay,onMouseLeave:this.toggleCloseDisplay},this.props.projectStr,h.a.createElement("div",{className:"project-close-button",style:{visibility:this.state.toggleDisplay},onClick:function(){return e.props.projectCloseClicked(e.props.projectStr)}}))}}]),a}(h.a.Component)),B=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toggleDisplay:"hidden"},n.toggleCloseDisplay=n.toggleCloseDisplay.bind(Object(D.a)(n)),n}return Object(u.a)(a,[{key:"toggleCloseDisplay",value:function(){this.setState({toggleDisplay:"hidden"===this.state.toggleDisplay?"visible":"hidden"})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"todo-item",onMouseEnter:this.toggleCloseDisplay,onMouseLeave:this.toggleCloseDisplay},this.props.todosStr,h.a.createElement("div",{className:"close-button",style:{visibility:this.state.toggleDisplay},onClick:function(){return e.props.closeClicked(e.props.todosStr)}}))}}]),a}(h.a.Component),H=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:[["Grocery Shopping","Get Peanut Butter","Remember Trail Mix"],["School Preparation","Get 0.5in Pen","5 Subject Notebook","Some snacks..."]],projectInput:"Grocery Shopping",todoInput:"",errorMessage:"",reloadTodo:1},n.getProjectsList=n.getProjectsList.bind(Object(D.a)(n)),n.getTodosList=n.getTodosList.bind(Object(D.a)(n)),n.onChangeTodo=n.onChangeTodo.bind(Object(D.a)(n)),n.onChangeProject=n.onChangeProject.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n.onProjectClick=n.onProjectClick.bind(Object(D.a)(n)),n.closeClicked=n.closeClicked.bind(Object(D.a)(n)),n.projectCloseClicked=n.projectCloseClicked.bind(Object(D.a)(n)),n}return Object(u.a)(a,[{key:"projectCloseClicked",value:function(e){var t=this.state.data;t.forEach((function(a,n){a[0]===e&&t.splice(n,1)})),this.setState({data:t})}},{key:"closeClicked",value:function(e){var t=this.state.data;t.forEach((function(a,n){a.forEach((function(a,r){a===e&&t[n].splice(r,1)}))})),this.setState({data:t,reloadTodo:this.state.reloadTodo+1})}},{key:"onProjectClick",value:function(e){this.setState({projectInput:e,reloadTodo:this.state.reloadTodo+1})}},{key:"getProjectsList",value:function(){var e=this;return this.state.data.map((function(t){return h.a.createElement(M,{onClick:function(){return e.onProjectClick(t[0])},projectStr:t[0],projectCloseClicked:e.projectCloseClicked})}))}},{key:"getTodosList",value:function(e){var t=this,a=this.state.data.filter((function(e){return e[0]===t.state.projectInput}));return 1===a.length?(a=a[0].slice(1)).map((function(e){return h.a.createElement(B,{closeClicked:t.closeClicked,todosStr:e})})):[]}},{key:"onChangeTodo",value:function(e){this.setState({todoInput:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({projectInput:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),""!=this.state.projectInput&&""!=this.state.todoInput){this.setState({errorMessage:""});var a=-1;this.state.data.forEach((function(e,n){e[0]===t.state.projectInput&&(a=n)}));var n=this.state.data;if(-1!==a)n[a].push(this.state.todoInput);else{var r=[this.state.projectInput,this.state.todoInput];n.push(r)}this.setState({data:n,reloadTodo:this.state.reloadTodo+1,todoInput:""})}else this.setState({errorMessage:"Both fields must be filled to create a todo."})}},{key:"render",value:function(){var e=""!==this.state.errorMessage?"inherit":"none";return h.a.createElement(p.Fragment,null,h.a.createElement(f,null),h.a.createElement("h1",{style:{color:"black",margin:"100px auto -100px auto",width:"600px"},id:"greeting"},"Todo List"),h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"top-bar"},h.a.createElement("form",{type:"submit",className:"todo-form-box"},h.a.createElement("input",{type:"text",placeholder:"Add todo",value:this.state.todoInput,onChange:this.onChangeTodo}),h.a.createElement("input",{type:"text",placeholder:"Add to a Project",value:this.state.projectInput,onChange:this.onChangeProject,required:!0}),h.a.createElement("input",{type:"submit",value:"Submit",onClick:this.onSubmit})),h.a.createElement("div",{style:{display:e},className:"error-message"},this.state.errorMessage)),h.a.createElement("div",{className:"todo-body"},h.a.createElement("div",{className:"left-nav"},h.a.createElement("div",{className:"title-bar"},h.a.createElement("h4",{className:"todo-titles"},"Projects")),h.a.createElement("div",{id:"projects-list"},this.getProjectsList())),h.a.createElement("div",{className:"seperator"}),h.a.createElement("div",{className:"right-nav"},h.a.createElement("div",{className:"title-bar"},h.a.createElement("h4",{className:"todo-titles"},"Todos")),h.a.createElement("div",{key:this.state.reloadTodo,id:"todos-list"},this.getTodosList())))))}}]),a}(h.a.Component),F=a(12),R=a(6),_=a(16);_.a.initialize("UA-165682331-1"),_.a.pageview("/homepage");var q=Object(R.a)();q.listen((function(e){_.a.set({page:e.pathname}),_.a.pageview(e.pathname)}));var J=h.a.createElement(b.a,{history:q},h.a.createElement("div",null,h.a.createElement(F.a,{exact:!0,path:"/",component:N}),h.a.createElement(F.a,{path:"/GitHubApp",component:y}),h.a.createElement(F.a,{path:"/SudokuApp",component:S}),h.a.createElement(F.a,{path:"/SpeedCountApp",component:P}),h.a.createElement(F.a,{path:"/TodoApp",component:H})));r.a.render(J,document.getElementById("reactSide")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.53237581.chunk.js.map