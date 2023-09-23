(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3222:function(e,s,t){Promise.resolve().then(t.bind(t,7534))},7534:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return E}});var a=t(9268),n=t(3936),r=t.n(n),i=t(2936),l=t.n(i),c=t(9572),o=t.n(c),d=t(6394),u=t.n(d);function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"relative h-96 w-96 max-w-[90vw] max-h-[90vw]",children:[(0,a.jsxs)("div",{className:"z-10 absolute inset-[-18%]",children:[(0,a.jsx)(u(),{src:"/star.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"absolute z-10 animate-[star-pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-[0_0_0.3rem_#03d3fc] select-none pointer-events-none"}),(0,a.jsx)(u(),{src:"/Logo_Hollow.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"select-none pointer-events-none"})]}),(0,a.jsx)("div",{className:"w-full h-full rounded-full relative overflow-hidden",children:(0,a.jsx)("div",{className:"z-0 absolute inset-[-18%]",children:(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"h-full w-full absolute inset-0 select-none pointer-events-none animate-[zoom-in-move_60s_ease-in-out_infinite_2s_forwards]",children:(0,a.jsx)("source",{src:"/Logo.webm",type:"video/webm"})})})}),(0,a.jsx)("div",{className:"rounded-full animate-[aura-pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] absolute inset-0 overflow-hidden shadow-[0px_0px_10rem_-5px_#259777]"})]}),(0,a.jsxs)("div",{className:"mt-10 text-center z-20",children:[(0,a.jsx)("h1",{className:o().className+" text-5xl md:text-7xl",children:"Sanctuary"}),(0,a.jsx)("h4",{className:"",children:"A Vanilla Server"})]})]})}var x=t(6341),h=t.n(x);function p(){return(0,a.jsxs)("div",{className:"z-[-1]",children:[(0,a.jsx)(h(),{onReady:function(){particlesJS("particles-js",{particles:{number:{value:3e3,density:{enable:!0,value_area:8e3}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!0,anim:{enable:!0,speed:.2,opacity_min:0}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0}},line_linked:{enable:!1},move:{enable:!0,speed:.2,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{bubble:{distance:80,size:1,duration:3,opacity:1,speed:3},push:{particles_nb:4}}},retina_detect:!0})},src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"}),(0,a.jsx)("div",{id:"particles-js",className:"fixed inset-0"})]})}var f=t(6403),j=t(6006);function v(){let e=(0,j.useRef)(),[s,t]=(0,j.useState)(!0);return(0,j.useEffect)(()=>{let e=()=>{window.scrollY>0?t(!1):t(!0)};return document.addEventListener("scroll",e),()=>{document.removeEventListener("scroll",e)}},[]),(0,a.jsx)("div",{ref:e,className:"absolute bottom-0 w-16 h-16 "+(s?"animate-[fade-in_1s_ease-in-out_1_forwards,bounce_1s_infinite]":"animate-[fade-out_1s_ease-in-out_1_forwards]"),children:(0,a.jsx)(f.Z,{})})}function b(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,a.jsx)(m,{}),(0,a.jsx)(v,{})]})}var N=t(3898),g=t.n(N),_=t(8870);function w(e){let{title:s,opened:t,onClick:n}=e;return(0,a.jsxs)("div",{className:"flex flex-row px-4 py-3 font-extralight cursor-pointer bg-gradient-to-r from-gray-950/50 to-gray-700/50 rounded-md my-5 animate-[gradient_15s_ease_infinite] bg-[length:400%_400%]",onClick:n,children:[(0,a.jsx)("h3",{className:"grow",children:s}),(0,a.jsxs)("div",{className:"h-6 w-6",children:[t&&(0,a.jsx)(_.Z,{}),!t&&(0,a.jsx)(f.Z,{})]})]})}function y(e){let{answers:s}=e;return(0,a.jsx)("div",{className:"px-10 py-2",children:(0,a.jsx)("ul",{className:"list-disc",children:s.map((e,s)=>(0,a.jsx)("li",{children:e},s))})})}function S(e){let{question:s,answers:t}=e,[n,r]=(0,j.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{onClick:function(){r(e=>!e)},title:s,opened:n}),n&&(0,a.jsx)(y,{answers:t})]})}function k(e){let{children:s,title:t}=e;return(0,a.jsxs)("div",{className:"border-t border-slate-600 px-4 my-16 rounded-lg relative",children:[(0,a.jsx)("div",{className:"border-t border-slate-600 h-2 border-b-0 rounded-t-lg p-1 absolute top-[-2.1rem]",children:t}),s]})}function z(){let[e,s]=(0,j.useState)([]);return(0,j.useEffect)(()=>{fetch("/faq.json").then(e=>e.json()).then(e=>{s(e)}).catch(e=>{console.error("Error:",e)})},[]),(0,a.jsxs)("div",{className:g().className,children:[(0,a.jsx)("h1",{className:" text-5xl text-center mb-5",children:"FAQs"}),e.map((e,s)=>(0,a.jsx)(k,{title:e.title,children:e.questions.map((e,s)=>(0,a.jsx)(S,{question:e.question,answers:e.answers},s))},s)),(0,a.jsx)("h6",{className:"text-sm mb-5 opacity-60",children:"Note: Many of these points will continued to be discussed as further development occurs"})]})}var q=t(4214),C=t(9855);function E(){let e=(0,j.useRef)(),s=(0,j.useRef)(),[t,n]=(0,j.useState)(),[i,c]=(0,j.useState)(),[o,d]=(0,j.useState)(),[m,x]=(0,j.useState)(!0),[h,p]=(0,j.useState)(""),[f,v]=(0,j.useState)(""),[N,g]=(0,j.useState)(""),[_,w]=(0,j.useState)("");function y(){e.current.innerText="Register",e.current.disabled=!1}function S(){n(""),c(""),d("")}function k(e){S(),n(e)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{className:"flex relative min-h-screen flex-col items-center pt-[20vh] section overflow-x-hidden",children:(0,a.jsx)(b,{})}),(0,a.jsx)("main",{className:"section py-10 mx-auto lg:max-w-4xl md:max-w-3xl",children:(0,a.jsx)(z,{})}),(0,a.jsxs)("footer",{className:"section pt-10 pb-20 mx-auto lg:max-w-4xl md:max-w-3xl",children:[(0,a.jsx)("h1",{className:r().className+" text-5xl text-center mb-10",children:"Welcome to our Sanctuary"}),(0,a.jsxs)("div",{className:"text-center ",children:[t&&(0,a.jsxs)("h1",{className:"pb-5 text-amber-200",children:["Notice: ",t]}),i&&(0,a.jsxs)("h1",{className:"pb-5 text-rose-600",children:["Error: ",i]}),o&&(0,a.jsx)("h1",{className:"pb-5 text-green-600",children:o}),m&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-3 pb-3 place-content-center",children:[(0,a.jsx)("label",{htmlFor:"username",children:"Username (3-16 characters, alphanumeric):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"text",id:"username",required:"",name:"username",value:h,onChange:e=>{p(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"password",children:"Password (8+ characters, alphanumeric + specials):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"password",id:"password",required:"",name:"password",value:f,onChange:e=>{v(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"email",children:"Email (valid format):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"text",id:"email",required:"",name:"email",value:N,onChange:e=>{g(e.target.value)}})]}),(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsx)(C.Z,{ref:s,sitekey:"6LfD6kgoAAAAAIsZBevxwY0Xt8WDorfzNxsDLwkq",onChange:w})}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{ref:e,type:"button",value:"Register",className:"mb-10 p-3 rounded bg-slate-800",onClick:function(){if(e.current.innerText="Loading...",e.current.disabled=!0,S(),!_){k("Please use Recaptcha"),y();return}if(!h){k("Please specify a username"),y();return}if(!f){k("Please specify a password"),y();return}if(!N){k("Please specify an email"),y();return}s.current.reset(),(0,q.Z)({method:"post",url:"https://manage.sanctuarywow.com/register.php",data:{username:h,password:f,email:N,token:_},headers:{"Content-Type":"multipart/form-data"}}).then(e=>{var s,t;if(e.data.success){x(!1),s=e.data.res,S(),d(s);return}t=e.data.res,S(),c(t),y()}).catch(e=>{S(),c("Failed to connect."),console.log(e),y()})},children:"Register"}),(0,a.jsx)("br",{})]})]}),(0,a.jsx)("div",{className:l().className,children:(0,a.jsx)("h2",{className:"text-2xl text-center mb-5",children:"set realmlist logon.sanctuarywow.com"})}),(0,a.jsx)("div",{className:"relative mx-auto h-10 w-14",children:(0,a.jsx)("a",{href:"https://discord.gg/cXDeQSajrT",children:(0,a.jsx)(u(),{src:"/discord.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Discord Logo",className:"m-x-auto"})})})]})]})}}},function(e){e.O(0,[772,869,253,769,744],function(){return e(e.s=3222)}),_N_E=e.O()}]);