import{e as o,r as n,j as e,A as r}from"./index-D1OfDGO-.js";import{d as c,u as i,g,E as d}from"./index-67PkrThZ.js";const x="/assets/landingPagebg-Bi3d_ctO.jpg",l="/assets/bgm-Dyhjn3Ps.mp3",u=c.div`
  height: 100vh;
  background-image: url(${x});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: cover; */
`,m=()=>{const t=o(),s=n.useRef(null);return i(()=>{g.from(".heading",{duration:2,opacity:0,y:-30,delay:1,ease:d.easeOut,stagger:.2})}),n.useEffect(()=>{const a=document.getElementById("audio-playback");a.src=l,s.current.addEventListener("mousemove",()=>a.play())},[]),e.jsxs(u,{ref:s,className:"flex justify-center items-center flex-col gap-2 sm:gap-6",children:[e.jsxs("h1",{className:"heading text-white text-3xl  sm:text-6xl font-bold tracking-wide text-center max-w-[700px]",children:["Explore the Depths of"," ",e.jsx("span",{className:"heading text-orange-600 text-2xl sm:text-[55px] block w-fit mx-auto py-5",children:"Mindful Musings"})]}),e.jsx("button",{onClick:()=>{t("/auth")},className:"heading text-white bg-orange-600 py-3 sm:py-4 rounded-sm px-5 sm:px-12 text-xl sm:text-3xl font-bold hover:bg-orange-500",children:"Get Started"})]})},f=()=>{const t=o();return n.useEffect(()=>{(async()=>{(await r.isUserLoggedin()).success?t("/dashboard/content"):t("/")})()},[]),e.jsx("section",{children:e.jsx(m,{})})};export{f as default};
