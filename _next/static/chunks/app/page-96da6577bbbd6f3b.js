(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3222:function(e,t,s){Promise.resolve().then(s.bind(s,8598))},8598:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return W}});var a=s(9268),n=s(3936),r=s.n(n),l=s(2936),i=s.n(l),c=s(9572),o=s.n(c),d=s(6394),u=s.n(d);function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"relative h-96 w-96 max-w-[90vw] max-h-[90vw]",children:[(0,a.jsxs)("div",{className:"z-10 absolute inset-[-18%]",children:[(0,a.jsx)(u(),{src:"/star.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"absolute z-10 saturate-[1.8] animate-[star-pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] drop-shadow-[0_0_0.3rem_#03d3fc] select-none pointer-events-none"}),(0,a.jsx)(u(),{src:"/Logo_Hollow.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Ring of Sanctuary logo",className:"select-none saturate-[1.2] pointer-events-none"})]}),(0,a.jsx)("div",{className:"w-full h-full rounded-full relative overflow-hidden",children:(0,a.jsx)("div",{className:"z-0 absolute inset-[-18%]",children:(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"h-full w-full absolute saturate-[1.2] inset-0 select-none pointer-events-none animate-[zoom-in-move_60s_ease-in-out_infinite_2s_forwards]",children:(0,a.jsx)("source",{src:"/Logo.webm",type:"video/webm"})})})}),(0,a.jsx)("div",{className:"rounded-full animate-[aura-pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] absolute inset-0 overflow-hidden shadow-[0px_0px_10rem_-5px_#259777]"})]}),(0,a.jsxs)("div",{className:"mt-10 text-center z-20",children:[(0,a.jsx)("h1",{className:o().className+" text-5xl md:text-7xl",children:"Sanctuary"}),(0,a.jsx)("h4",{className:"",children:"A Vanilla Server"})]})]})}var x=s(6341),h=s.n(x);function f(){return(0,a.jsxs)("div",{className:"z-[-1]",children:[(0,a.jsx)(h(),{onReady:function(){particlesJS("particles-js",{particles:{number:{value:3e3,density:{enable:!0,value_area:8e3}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!0,anim:{enable:!0,speed:.2,opacity_min:0}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0}},line_linked:{enable:!1},move:{enable:!0,speed:.2,direction:"none",random:!0,straight:!1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"}},modes:{bubble:{distance:80,size:1,duration:3,opacity:1,speed:3},push:{particles_nb:4}}},retina_detect:!0})},src:"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"}),(0,a.jsx)("div",{id:"particles-js",className:"fixed inset-0"})]})}var p=s(6403),j=s(6006);function b(){let e=(0,j.useRef)(),[t,s]=(0,j.useState)(!0);return(0,j.useEffect)(()=>{let e=()=>{window.scrollY>0?s(!1):s(!0)};return document.addEventListener("scroll",e),()=>{document.removeEventListener("scroll",e)}},[]),(0,a.jsx)("div",{ref:e,className:"absolute bottom-0 w-16 h-16 "+(t?"animate-[fade-in_1s_ease-in-out_1_forwards,bounce_1s_infinite]":"animate-[fade-out_1s_ease-in-out_1_forwards]"),children:(0,a.jsx)(p.Z,{})})}var v=s(753),g=s.n(v);function N(){return(0,a.jsx)("div",{className:g().className+" text-3xl pt-5 text-center",children:"Now Open"})}function w(){return(0,a.jsxs)("header",{className:"flex relative min-h-screen flex-col items-center pt-[20vh] section overflow-x-hidden",children:[(0,a.jsx)(f,{}),(0,a.jsx)(m,{}),(0,a.jsx)(N,{}),(0,a.jsx)(b,{})]})}var y=s(3898),_=s.n(y),k=s(8870);function S(e){let{title:t,opened:s,onClick:n}=e;return(0,a.jsxs)("div",{className:"flex flex-row px-4 py-3 font-extralight cursor-pointer bg-gradient-to-r from-gray-950/50 to-gray-700/50 rounded-md my-5 animate-[gradient_15s_ease_infinite] bg-[length:400%_400%]",onClick:n,children:[(0,a.jsx)("h3",{className:"grow",children:t}),(0,a.jsxs)("div",{className:"h-6 w-6",children:[s&&(0,a.jsx)(k.Z,{}),!s&&(0,a.jsx)(p.Z,{})]})]})}function P(e){let{answers:t}=e;return(0,a.jsx)("div",{className:"px-10 py-2",children:(0,a.jsx)("ul",{className:"list-disc",children:t.map((e,t)=>(0,a.jsx)("li",{children:e},t))})})}function C(e){let{question:t,answers:s}=e,[n,r]=(0,j.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S,{onClick:function(){r(e=>!e)},title:t,opened:n}),n&&(0,a.jsx)(P,{answers:s})]})}function z(e){let{children:t,title:s}=e;return(0,a.jsxs)("div",{className:"border-t border-slate-600 px-4 my-16 rounded-lg relative",children:[(0,a.jsx)("div",{className:"border-t border-slate-600 h-2 border-b-0 rounded-t-lg p-1 absolute top-[-2.1rem]",children:s}),t]})}function E(){let[e,t]=(0,j.useState)([]);return(0,j.useEffect)(()=>{fetch("/faq.json").then(e=>e.json()).then(e=>{t(e)}).catch(e=>{console.error("Error:",e)})},[]),(0,a.jsxs)("div",{className:_().className,children:[(0,a.jsx)("h1",{className:" text-5xl text-center mb-5",children:"FAQs"}),e.map((e,t)=>(0,a.jsx)(z,{title:e.title,children:e.questions.map((e,t)=>(0,a.jsx)(C,{question:e.question,answers:e.answers},t))},t)),(0,a.jsx)("h6",{className:"text-sm mb-5 opacity-60",children:"Note: Many of these points will continued to be discussed as further development occurs"})]})}var F=s(2252),q=s.n(F);function A(e){let{children:t,onClick:s,className:n}=e;return(0,a.jsx)("button",{className:n+" text-xl px-4 py-3 bg-gradient-to-r from-gray-950/50 to-gray-700/50 rounded-md m-5 animate-[gradient_15s_ease_infinite] bg-[length:400%_400%]",onClick:s,children:t})}function I(e){let{whitelist:t}=e;return(0,a.jsxs)("div",{className:q().className,children:[(0,a.jsx)("h1",{className:" text-5xl text-center mb-5",children:"Menu"}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)(A,{className:"cursor-not-allowed",children:"Manage Account (soon)"}),(0,a.jsx)(A,{className:"cursor-not-allowed",children:"Forum (soon)"}),(0,a.jsx)(A,{onClick:t,className:"col-span-2 font-bold",children:"Connect to Server (Whitelist IP)"})]})]})}var R=s(4214),L=s(9855);function Z(){let e=(0,j.useRef)(),t=(0,j.useRef)(),[s,n]=(0,j.useState)(),[r,l]=(0,j.useState)(),[i,c]=(0,j.useState)(),[o,d]=(0,j.useState)(!1),[u,m]=(0,j.useState)(""),[x,h]=(0,j.useState)(""),[f,p]=(0,j.useState)(""),[b,v]=(0,j.useState)(""),[g,N]=(0,j.useState)(!0),[w,y]=(0,j.useState)("Loading...");function _(){e.current.innerText="Register",e.current.disabled=!1}function k(){n(""),l(""),c("")}function S(e){k(),n(e)}return(0,j.useEffect)(()=>{(0,R.Z)({method:"get",url:"https://manage.sanctuarywow.com/banned.php"}).then(e=>{if(d(!0),!e.data.success){N(!0),y(e.data.msg);return}N(e.data.found),y(e.data.msg),e.data.found&&d(!1)}).catch(e=>{console.error(e),d(!0),N(!1),y("Failed to connect.")})},[]),(0,a.jsxs)("div",{className:"text-center ",children:[(0,a.jsxs)("h1",{className:"pb-0 "+(g?"text-rose-600":"text-green-600"),children:["IP Status: ",w]}),(0,a.jsx)("h1",{className:"pb-5 text-amber-400 text-xs",children:"Notice: If you're behind a VPN and appears as valid, VPN IP blocks will continue to be added. VPNs are banned and you could be locked out. If your IP is invalid but isn't a VPN, datacenter, or China we will make sure to fix that."}),i&&(0,a.jsx)("h1",{className:"pb-5 text-green-600",children:i}),o&&(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsxs)("h1",{className:"pb-5 text-amber-200",children:["Notice: ",s]}),r&&(0,a.jsxs)("h1",{className:"pb-5 text-rose-600",children:["Error: ",r]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-3 pb-3 place-content-center",children:[(0,a.jsx)("label",{htmlFor:"username",children:"Username (3-16 characters, alphanumeric):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"text",id:"username",required:"",name:"username",value:u,onChange:e=>{m(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"password",children:"Password (8+ characters, alphanumeric + specials):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"password",id:"password",required:"",name:"password",value:x,onChange:e=>{h(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"email",children:"Email (valid format):"}),(0,a.jsx)("input",{className:"text-black p-1",type:"text",id:"email",required:"",name:"email",value:f,onChange:e=>{p(e.target.value)}})]}),(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsx)(L.Z,{ref:t,sitekey:"6LfD6kgoAAAAAIsZBevxwY0Xt8WDorfzNxsDLwkq",onChange:v})}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{ref:e,type:"button",value:"Register",className:"mb-10 p-3 rounded bg-slate-800",onClick:function(){if(e.current.innerText="Loading...",e.current.disabled=!0,k(),!b){S("Please use Recaptcha"),_();return}if(!u){S("Please specify a username"),_();return}if(!x){S("Please specify a password"),_();return}if(!f){S("Please specify an email"),_();return}t.current.reset(),(0,R.Z)({method:"post",url:"https://manage.sanctuarywow.com/register.php",data:{username:u,password:x,email:f,token:b},headers:{"Content-Type":"multipart/form-data"}}).then(e=>{var t,s;if(e.data.success){d(!1),t=e.data.res,k(),c(t);return}s=e.data.res,k(),l(s),_()}).catch(e=>{k(),l("Failed to connect."),console.log(e),_()})},children:"Register"}),(0,a.jsx)("br",{})]})]})]})}var D=s(2529),T=s.n(D);function M(){let e=(0,j.useRef)(),[t,s]=(0,j.useState)(0);return(0,j.useEffect)(()=>{(0,R.Z)({method:"get",url:"https://manage.sanctuarywow.com/factionbalance.php"}).then(t=>{t.data.success&&(e.current.style.width=100*t.data.ratio+"%",s(t.data.ratio))}).catch(e=>{console.error(e)})},e),(0,a.jsxs)("div",{className:T().className,children:[(0,a.jsx)("h1",{className:" text-5xl text-center mb-5",children:"Faction Meter"}),(0,a.jsxs)("div",{className:"overflow-hidden flex w-[80%] opacity-75 mb-5 mx-auto rounded-md text-center",children:[(0,a.jsxs)("div",{ref:e,className:"bg-rose-600 py-2 align-middle",children:[Math.round(100*t),"%"]}),(0,a.jsxs)("div",{className:"flex-auto py-2 bg-blue-600",children:[Math.round((1-t)*100),"%"]})]})]})}function V(e){let{children:t,onClose:s,title:n}=e;return(0,a.jsx)("div",{className:"fixed w-full h-full bg-black/70 z-50 flex",children:(0,a.jsxs)("div",{className:"m-auto rounded-lg overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex px-3 py-1 bg-black/80",children:[(0,a.jsx)("div",{className:"float-left pr-2 grow",children:n}),(0,a.jsx)("button",{onClick:s,className:"float-right",children:"X"})]}),(0,a.jsx)("div",{className:"relative px-3 pb-2 bg-black/90",children:t})]})})}function O(){let e=(0,j.useRef)(),t=(0,j.useRef)(),[s,n]=(0,j.useState)(),[r,l]=(0,j.useState)(),[i,c]=(0,j.useState)(),[o,d]=(0,j.useState)(""),[u,m]=(0,j.useState)(""),[x,h]=(0,j.useState)(""),[f,p]=(0,j.useState)("0.0.0.0");function b(){e.current.innerText="Validate My IP",e.current.disabled=!1}function v(){n(""),l(""),c("")}function g(e){v(),n(e)}async function N(){let{ip:e}=await fetch("https://api.ipify.org?format=json",{method:"GET"}).then(e=>e.json()).catch(e=>console.error(e));return e||"0.0.0.0"}return(0,j.useEffect)(()=>{N().then(e=>{p(e)})},[]),(0,a.jsxs)("div",{class:"text-center p-1",children:[(0,a.jsxs)("h1",{class:"pb-5 text-amber-400 text-xs max-w-md",children:["By default, IP addresses are blocked from communicating with our server to prevent DDOS attacks. To connect you will need to log in here to allow you account to connect to our server.",(0,a.jsx)("br",{}),(0,a.jsx)("span",{class:"underline",children:"If you are unable to connect, try logging in here again first before opening a ticket."})]}),i&&(0,a.jsx)("h1",{className:"pb-5 text-green-600",children:i}),s&&(0,a.jsxs)("h1",{className:"pb-5 text-amber-200",children:["Notice: ",s]}),r&&(0,a.jsxs)("h1",{className:"pb-5 text-rose-600",children:["Error: ",r]}),(0,a.jsxs)("div",{class:"grid grid-cols-2 gap-3 pb-3 place-content-center",children:[(0,a.jsx)("label",{htmlFor:"username",children:"Username:"}),(0,a.jsx)("input",{className:"text-black p-1",type:"text",id:"username",required:"",name:"username",value:o,onChange:e=>{d(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,a.jsx)("input",{className:"text-black p-1",type:"password",id:"password",required:"",name:"password",value:u,onChange:e=>{m(e.target.value)}})]}),(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsx)(L.Z,{ref:t,sitekey:"6LfD6kgoAAAAAIsZBevxwY0Xt8WDorfzNxsDLwkq",onChange:h})}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{ref:e,type:"button",onClick:function(){if(e.current.innerText="Loading...",e.current.disabled=!0,v(),!x){g("Please use Recaptcha"),b();return}if(!o){g("Please specify a username"),b();return}if(!u){g("Please specify a password"),b();return}if("0.0.0.0"==!f){g("Your IP didn't set. Please refresh the page."),b();return}t.current.reset(),(0,R.Z)({method:"post",url:"https://manage.sanctuarywow.com/whitelist.php",data:{username:o,password:u,token:x,ip:f},headers:{"Content-Type":"multipart/form-data"}}).then(e=>{var t,s;if(e.data.success){t=e.data.res,v(),c(t);return}s=e.data.res,v(),l(s)}).catch(e=>{v(),l("Failed to connect."),console.log(e)}).finally(()=>{b()})},class:"p-3 rounded bg-slate-800",children:"Validate My Ip"})]})}function W(){let[e,t]=(0,j.useState)(),[s,n]=(0,j.useState)();return(0,a.jsxs)(a.Fragment,{children:[e&&(0,a.jsx)(V,{onClose:function(){t(void 0)},title:s,children:"whitelist"==e&&(0,a.jsx)(O,{})}),(0,a.jsx)(w,{}),(0,a.jsxs)("main",{className:"section py-10 mx-auto lg:max-w-4xl md:max-w-3xl",children:[(0,a.jsx)(I,{whitelist:function(){t("whitelist"),n("Authorize IP for server")}}),(0,a.jsx)(M,{}),(0,a.jsx)(E,{})]}),(0,a.jsxs)("footer",{className:"section pt-10 pb-20 mx-auto lg:max-w-4xl md:max-w-3xl",children:[(0,a.jsx)("h1",{className:r().className+" text-5xl text-center mb-10",children:"Welcome to our Sanctuary"}),(0,a.jsx)(Z,{}),(0,a.jsx)("div",{className:i().className,children:(0,a.jsx)("h2",{className:"text-2xl text-center mb-5",children:"set realmlist logon.sanctuarywow.com"})}),(0,a.jsx)("div",{className:"relative mx-auto h-10 w-14",children:(0,a.jsx)("a",{href:"https://discord.gg/cXDeQSajrT",children:(0,a.jsx)(u(),{src:"/discord.png",fill:!0,quality:100,priority:!0,unoptimized:!0,alt:"Discord Logo",className:"m-x-auto"})})})]})]})}}},function(e){e.O(0,[772,783,253,769,744],function(){return e(e.s=3222)}),_N_E=e.O()}]);