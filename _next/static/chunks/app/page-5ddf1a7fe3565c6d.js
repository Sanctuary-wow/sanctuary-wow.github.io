(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8208:function(e,s,t){Promise.resolve().then(t.t.bind(t,5962,23)),Promise.resolve().then(t.bind(t,9899)),Promise.resolve().then(t.bind(t,850)),Promise.resolve().then(t.bind(t,63)),Promise.resolve().then(t.bind(t,2716)),Promise.resolve().then(t.bind(t,2051)),Promise.resolve().then(t.bind(t,7343)),Promise.resolve().then(t.t.bind(t,3936,23)),Promise.resolve().then(t.t.bind(t,2936,23)),Promise.resolve().then(t.t.bind(t,753,23))},7343:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n=t(9268),a=t(6006),r=t(4214),i=t(9855);function l(){let e=(0,a.useRef)(),s=(0,a.useRef)(),[t,l]=(0,a.useState)(),[o,c]=(0,a.useState)(),[d,u]=(0,a.useState)(),[m,h]=(0,a.useState)(!0),[f,x]=(0,a.useState)(""),[p,b]=(0,a.useState)(""),[v,j]=(0,a.useState)(""),[_,g]=(0,a.useState)("");function N(){e.current.innerText="Register",e.current.disabled=!1}function w(){l(""),c(""),u("")}function y(e){w(),l(e)}return(0,n.jsxs)("div",{className:"text-center ",children:[t&&(0,n.jsxs)("h1",{className:"pb-5 text-amber-200",children:["Notice: ",t]}),o&&(0,n.jsxs)("h1",{className:"pb-5 text-rose-600",children:["Error: ",o]}),d&&(0,n.jsx)("h1",{className:"pb-5 text-green-600",children:d}),m&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-3 pb-3 place-content-center",children:[(0,n.jsx)("label",{htmlFor:"username",children:"Username (3-16 characters, alphanumeric):"}),(0,n.jsx)("input",{className:"text-black p-1",type:"text",id:"username",required:"",name:"username",value:f,onChange:e=>{x(e.target.value)}}),(0,n.jsx)("label",{htmlFor:"password",children:"Password (8+ characters, alphanumeric + specials):"}),(0,n.jsx)("input",{className:"text-black p-1",type:"password",id:"password",required:"",name:"password",value:p,onChange:e=>{b(e.target.value)}}),(0,n.jsx)("label",{htmlFor:"email",children:"Email (valid format):"}),(0,n.jsx)("input",{className:"text-black p-1",type:"text",id:"email",required:"",name:"email",value:v,onChange:e=>{j(e.target.value)}})]}),(0,n.jsx)("div",{className:"inline-block",children:(0,n.jsx)(i.Z,{ref:s,sitekey:"6LfD6kgoAAAAAIsZBevxwY0Xt8WDorfzNxsDLwkq",onChange:g})}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{ref:e,type:"button",value:"Register",className:"mb-10 p-3 rounded bg-slate-800",onClick:function(){if(e.current.innerText="Loading...",e.current.disabled=!0,w(),!_){y("Please use Recaptcha"),N();return}if(!f){y("Please specify a username"),N();return}if(!p){y("Please specify a password"),N();return}if(!v){y("Please specify an email"),N();return}s.current.reset(),(0,r.Z)({method:"post",url:"https://manage.sanctuarywow.com/register.php",data:{username:f,password:p,email:v,token:_},headers:{"Content-Type":"multipart/form-data"}}).then(e=>{var s,t;if(e.data.success){h(!1),s=e.data.res,w(),u(s);return}t=e.data.res,w(),c(t),N()}).catch(e=>{w(),c("Failed to connect."),console.log(e),N()})},children:"Register"}),(0,n.jsx)("br",{})]})]})}},2716:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var n=t(9268),a=t(3898),r=t.n(a),i=t(6006),l=t(8870),o=t(6403);function c(e){let{title:s,opened:t,onClick:a}=e;return(0,n.jsxs)("div",{className:"flex flex-row px-4 py-3 font-extralight cursor-pointer bg-gradient-to-r from-gray-950/50 to-gray-700/50 rounded-md my-5 animate-[gradient_15s_ease_infinite] bg-[length:400%_400%]",onClick:a,children:[(0,n.jsx)("h3",{className:"grow",children:s}),(0,n.jsxs)("div",{className:"h-6 w-6",children:[t&&(0,n.jsx)(l.Z,{}),!t&&(0,n.jsx)(o.Z,{})]})]})}function d(e){let{answers:s}=e;return(0,n.jsx)("div",{className:"px-10 py-2",children:(0,n.jsx)("ul",{className:"list-disc",children:s.map((e,s)=>(0,n.jsx)("li",{children:e},s))})})}function u(e){let{question:s,answers:t}=e,[a,r]=(0,i.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{onClick:function(){r(e=>!e)},title:s,opened:a}),a&&(0,n.jsx)(d,{answers:t})]})}function m(e){let{children:s,title:t}=e;return(0,n.jsxs)("div",{className:"border-t border-slate-600 px-4 my-16 rounded-lg relative",children:[(0,n.jsx)("div",{className:"border-t border-slate-600 h-2 border-b-0 rounded-t-lg p-1 absolute top-[-2.1rem]",children:t}),s]})}function h(){let[e,s]=(0,i.useState)([]);return(0,i.useEffect)(()=>{fetch("/faq.json").then(e=>e.json()).then(e=>{s(e)}).catch(e=>{console.error("Error:",e)})},[]),(0,n.jsxs)("div",{className:r().className,children:[(0,n.jsx)("h1",{className:" text-5xl text-center mb-5",children:"FAQs"}),e.map((e,s)=>(0,n.jsx)(m,{title:e.title,children:e.questions.map((e,s)=>(0,n.jsx)(u,{question:e.question,answers:e.answers},s))},s)),(0,n.jsx)("h6",{className:"text-sm mb-5 opacity-60",children:"Note: Many of these points will continued to be discussed as further development occurs"})]})}},850:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var n=t(9268),a=t(6341),r=t.n(a);function i(){return(0,n.jsxs)("div",{className:"z-[-1]",children:[(0,n.jsx)(r(),{onReady:function(){particlesJS("particles-js",{particles:{number:{value:3e3,density:{enable:!0,value_area:8e3}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!0,anim:{enable:!0,speed:.2,opacity_min:0}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0}},line_linked:{enable:!1},move:{enable:!0,speed:.2,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{bubble:{distance:80,size:1,duration:3,opacity:1,speed:3},push:{particles_nb:4}}},retina_detect:!0})},src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"}),(0,n.jsx)("div",{id:"particles-js",className:"fixed inset-0"})]})}},9899:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t(9268),a=t(9572),r=t.n(a),i=t(6394),l=t.n(i);function o(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"relative h-96 w-96 max-w-[90vw] max-h-[90vw]",children:[(0,n.jsxs)("div",{className:"z-10 absolute inset-[-18%]",children:[(0,n.jsx)(l(),{src:"/star.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"absolute z-10 saturate-[1.8] animate-[star-pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-[0_0_0.3rem_#03d3fc] select-none pointer-events-none"}),(0,n.jsx)(l(),{src:"/Logo_Hollow.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"select-none saturate-[1.2] pointer-events-none"})]}),(0,n.jsx)("div",{className:"w-full h-full rounded-full relative overflow-hidden",children:(0,n.jsx)("div",{className:"z-0 absolute inset-[-18%]",children:(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"h-full w-full absolute saturate-[1.2] inset-0 select-none pointer-events-none animate-[zoom-in-move_60s_ease-in-out_infinite_2s_forwards]",children:(0,n.jsx)("source",{src:"/Logo.webm",type:"video/webm"})})})}),(0,n.jsx)("div",{className:"rounded-full animate-[aura-pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] absolute inset-0 overflow-hidden shadow-[0px_0px_10rem_-5px_#259777]"})]}),(0,n.jsxs)("div",{className:"mt-10 text-center z-20",children:[(0,n.jsx)("h1",{className:r().className+" text-5xl md:text-7xl",children:"Sanctuary"}),(0,n.jsx)("h4",{className:"",children:"A Vanilla Server"})]})]})}},63:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return i}});var n=t(9268),a=t(6403),r=t(6006);function i(){let e=(0,r.useRef)(),[s,t]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=()=>{window.scrollY>0?t(!1):t(!0)};return document.addEventListener("scroll",e),()=>{document.removeEventListener("scroll",e)}},[]),(0,n.jsx)("div",{ref:e,className:"absolute bottom-0 w-16 h-16 "+(s?"animate-[fade-in_1s_ease-in-out_1_forwards,bounce_1s_infinite]":"animate-[fade-out_1s_ease-in-out_1_forwards]"),children:(0,n.jsx)(a.Z,{})})}},2051:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n=t(9268),a=t(2252),r=t.n(a);function i(e){let{children:s,onClick:t,className:a}=e;return(0,n.jsx)("button",{className:a+" text-xl px-4 py-3 bg-gradient-to-r from-gray-950/50 to-gray-700/50 rounded-md m-5 animate-[gradient_15s_ease_infinite] bg-[length:400%_400%]",onClick:t,children:s})}function l(){return(0,n.jsxs)("div",{className:r().className,children:[(0,n.jsx)("h1",{className:" text-5xl text-center mb-5",children:"Menu"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(i,{className:"flex-1 cursor-not-allowed",children:"Manage Account (soon)"}),(0,n.jsx)(i,{className:"flex-1 cursor-not-allowed",children:"Forum (soon)"})]})]})}}},function(e){e.O(0,[772,203,253,769,744],function(){return e(e.s=8208)}),_N_E=e.O()}]);