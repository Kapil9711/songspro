import{j as e,u as y,r,A as f,f as N,a as j,e as k,h as v}from"./index-MaS97gey.js";import{N as c}from"./Notify-C8VHsc28.js";import{u as g,g as p,E as b,d as R}from"./index-C7QLzcs0.js";const h=()=>e.jsx("div",{className:"flex justify-center h-16",children:e.jsx("span",{className:"loading loading-spinner loading-lg"})}),P=({setActive:t,firstRender:n})=>{const o=y(),l=r.useRef(null),d=r.useRef(null),[a,i]=r.useState(!1);g(()=>{p.from(".login",{delay:n?1.6:.2,duration:2,opacity:0,skewX:30,skewY:-20,scale:.7,x:-500,ease:b.easeOut})});const m=async x=>{i(!0),x.preventDefault();let s={password:d.current.value};l.current.value.includes("@")?s.email=l.current.value:s.username=l.current.value;let u;u=await f.login("/login",s),u.success?(c("success",u.message),i(!1),o(N()),t("profile")):(i(!1),c("error",u.message))};return e.jsxs("div",{style:{width:"min(95%,420px)",background:"hsl(11, 89%, 62%)"},className:"login border-r-[2px] border-l-[2px]  border-t-[10px] border-b-[10px] rounded-3xl py-8 px-5 shadow-lg shadow-black border-orange-950",children:[e.jsx("h2",{className:"text-3xl text-center underline text-white font-bold mb-8",children:"Login"}),e.jsxs("form",{onSubmit:m,className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"box1 flex flex-col ",children:[e.jsx("label",{className:"text-xl  font-bold tracking-wide text-gray-200 ",htmlFor:"name",children:"Username or Email"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"text",name:"username",id:"name",ref:l})]}),e.jsxs("div",{className:"box2 flex flex-col",children:[e.jsx("label",{className:"text-xl  font-bold tracking-wide text-gray-200  ",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl sm:font-bold tracking-wide focus:outline-none",type:"password",name:"password",id:"password",ref:d})]}),a?e.jsx(h,{}):e.jsx("button",{className:"bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200",children:"Login"})]}),e.jsxs("p",{className:"text-center mt-5 text-xl",children:["Do Not Have An Account ,"," ",e.jsx("span",{onClick:()=>t("register"),className:"text-white underline cursor-pointer",children:"Register."})]}),e.jsx("p",{className:"text-center mt-4 text-xl",children:e.jsx("span",{onClick:()=>t("forgotPassword"),className:"text-red-50 underline cursor-pointer",children:"Forgot Password"})})]})},S=({setActive:t})=>{const n=r.useRef(null),o=r.useRef(null),l=r.useRef(null),[d,a]=r.useState(!1);g(()=>{p.from(".register",{delay:.2,duration:2,skewX:-30,skewY:20,opacity:0,x:500,scale:.6,ease:b.easeOut})});const i=async m=>{m.preventDefault(),a(!0);const x={email:l.current.value,username:n.current.value,password:o.current.value},s=await f.register("/register",x);console.log(s),s.success?(c("success",s.message),a(!1)):(a(!1),c("error",s.message))};return e.jsxs("div",{style:{width:"min(95%,420px)",background:"hsl(11, 89%, 62%)"},className:"register border-r-[2px] border-l-[2px]  border-t-[10px] border-b-[10px] rounded-3xl py-8 px-5 shadow-lg shadow-black border-orange-950",children:[e.jsx("h2",{className:"text-3xl text-center underline text-white font-bold mb-8",children:"Register"}),e.jsxs("form",{autoComplete:"off",onSubmit:i,className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"box1 flex flex-col ",children:[e.jsx("label",{className:"text-xl  font-bold tracking-wide text-gray-200 ",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"email",name:"email",id:"email",ref:l})]}),e.jsxs("div",{className:"box2 flex flex-col",children:[e.jsx("label",{className:"text-xl   font-bold tracking-wide text-gray-200 ",htmlFor:"name",children:"Username"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"text",name:"username",id:"name",ref:n})]}),e.jsxs("div",{className:"box3 flex flex-col",children:[e.jsx("label",{className:"text-xl font-bold tracking-wide text-gray-200  ",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl sm:font-bold tracking-wide focus:outline-none",type:"password",name:"password",id:"password",ref:o})]}),d?e.jsx(h,{}):e.jsx("button",{className:"bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200",children:"Register"})]}),e.jsxs("p",{className:"text-center mt-5 text-xl",children:["Already Registered ,"," ",e.jsx("span",{onClick:()=>t("login"),className:" cursor-pointer text-white underline",children:"Login."})]})]})},L=({setActive:t,setResetToken:n})=>{const o=r.useRef(null),l=r.useRef(null),[d,a]=r.useState(!1);g(()=>{p.from(".forgotPassword",{delay:.2,skewX:-20,skewY:20,duration:2,opacity:0,scale:.6,x:500,ease:b.easeOut})});const i=async m=>{a(!0),m.preventDefault();const x={email:l.current.value,username:o.current.value},s=await f.forgotPassword("/password/forgot",x);s.success?(t("resetPassword"),n(s.resetToken),c("success",s.message),a(!1)):(a(!1),c("error",s.message))};return e.jsxs("div",{style:{width:"min(95%,420px)",background:"hsl(11, 89%, 62%)"},className:"forgotPassword border-r-[2px] border-l-[2px]  border-t-[10px] border-b-[10px] rounded-3xl py-8 px-5 shadow-lg shadow-black border-orange-950",children:[e.jsx("h2",{className:"text-3xl text-center underline text-white font-bold mb-8",children:"ForgotPassword"}),e.jsxs("form",{onSubmit:i,className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"box1 flex flex-col",children:[e.jsx("label",{className:"text-xl   font-bold tracking-wide text-gray-200 ",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"email",name:"email",id:"email",ref:l})]}),e.jsxs("div",{className:"box2 flex flex-col",children:[e.jsx("label",{className:"text-xl   font-bold tracking-wide text-gray-200 ",htmlFor:"name",children:"Username"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"text",name:"username",id:"name",ref:o})]}),d?e.jsx(h,{}):e.jsx("button",{className:"bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200",children:"Find User"})]}),e.jsx("p",{className:"text-center mt-5 text-xl",children:e.jsx("span",{onClick:()=>t("login"),className:"text-white underline cursor-pointer",children:"Login"})})]})},F=({setActive:t,resetToken:n})=>{const o=r.useRef(null),l=r.useRef(null),[d,a]=r.useState(!1);g(()=>{p.from(".resetPassword",{delay:.2,duration:2,skewX:-20,skewY:20,opacity:0,scale:.6,x:500,ease:b.easeOut})});const i=async m=>{if(m.preventDefault(),a(!0),o.current.value!=l.current.value)return a(!1),c("warning","Confirmed Password Not Matched");const x={password:o.current.value},s=await f.resetPassword(`/password/reset/${n}`,x);s.success?(a(!1),t("login"),c("success",s.message)):(a(!1),c("error"))};return e.jsxs("div",{style:{width:"min(95%,420px)",background:"hsl(11, 89%, 62%)"},className:"resetPassword border-r-[2px] border-l-[2px]  border-t-[10px] border-b-[10px] rounded-3xl py-8 px-5 shadow-lg shadow-black border-orange-950",children:[e.jsx("h2",{className:"text-3xl text-center underline text-white font-bold mb-8",children:"ResetPassword"}),e.jsxs("form",{onSubmit:i,className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"box1 flex flex-col",children:[e.jsx("label",{className:"text-xl  font-bold tracking-wide text-gray-200 ",htmlFor:"password",children:"New Password"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"password",name:"password",id:"password",ref:o})]}),e.jsxs("div",{className:"box2 flex flex-col",children:[e.jsx("label",{className:"text-xl  font-bold tracking-wide text-gray-200 ",htmlFor:"password",children:"Confirm Password"}),e.jsx("input",{className:"bg-transparent text-white py-2 pl-2 border-b-4 border-b-orange-900 text-xl sm:text-2xl tracking-wide focus:outline-none sm:font-bold",type:"password",name:"password",id:"password",ref:l})]}),d?e.jsx(h,{}):e.jsx("button",{className:"bg-gray-300 font-bold mt-4 tracking-wide text-orange-950  text-2xl py-2 px-10 w-fit mx-auto hover:bg-gray-200",children:"Reset-Password"})]}),e.jsx("p",{className:"text-center mt-5 text-xl",children:e.jsx("span",{onClick:()=>t("login"),className:"text-white underline cursor-pointer  ",children:"Login"})})]})},C=()=>{const t=j(s=>s.user.value),n=j(s=>s.user.refreshKey),[o,l]=r.useState(!1),d=y(),a=k(),[i,m]=r.useState(""),x=r.useRef(null);return console.log(t),t.image&&a("/dashboard/content",{replace:!0}),r.useEffect(()=>{if(!i)return;l(!0);const s=new FormData;s.append("image",i),(async()=>{const w=await f.uploadImage("/image",s);w.success?(c("success",w.message),d(v())):c("error",w.message),l(!1)})()},[i]),e.jsxs("div",{style:{width:"min(95%,420px)",background:"hsl(11, 89%, 62%)",display:t.image?"hidden":"flex"},className:"boder-2 border-black h-[300px] rounded-3xl text-white  flex-col gap-12 justify-center items-center",children:[e.jsx("h1",{className:"text-center text-xl font-bold ",children:"Add a profile picture"}),e.jsxs("div",{onClick:()=>x.current.click(),className:"flex gap-4 items-center cursor-pointer",children:[e.jsx("input",{ref:x,className:"w-12 h-12 rounded-[100%] hidden",type:"file",onChange:s=>{m(s.target.files[0])}}),e.jsx("img",{className:"border-white border-2 h-[55px] w-[55px] rounded-[100%]",alt:"profile",src:"/api/v1/image"},n),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl ",children:t.username}),e.jsx("h1",{children:t.email})]})]}),o?e.jsx(h,{}):e.jsx("button",{onClick:()=>a("/dashboard",{replace:!0}),className:"bg-gray-200 text-black font-bold py-2 px-6",children:"Continue"})]})},E=R.div`
  background-image: radial-gradient(
    circle 311px at 8.6% 27.9%,
    rgba(62, 147, 252, 0.57) 12.9%,
    rgba(239, 183, 192, 0.44) 91.2%
  );
`,I=()=>{const[t,n]=r.useState("login"),[o,l]=r.useState(!0),[d,a]=r.useState("");return r.useEffect(()=>{l(!1)},[]),g(()=>{p.from(".auth",{duration:1.6,scale:.5,y:600,ease:b.easeOut})}),e.jsxs(E,{className:"auth w-full  min-h-screen  flex justify-center items-center overflow-hidden",children:[t==="login"&&e.jsx(P,{firstRender:o,setActive:n}),t==="register"&&e.jsx(S,{setActive:n}),t==="forgotPassword"&&e.jsx(L,{setActive:n,setResetToken:a}),t==="resetPassword"&&e.jsx(F,{resetToken:d,setActive:n}),t==="profile"&&e.jsx(C,{})]})};export{I as default};
