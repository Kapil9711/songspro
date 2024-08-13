import{e as o,r as n,j as e,A as r}from"./index-6KbCI4VE.js";import{d as c}from"./styled-components.browser.esm-CCr2FCtm.js";import{u as i,g,E as d}from"./index-BVu4N6nf.js";const x="/assets/landingPagebg-Bi3d_ctO.jpg",l="/assets/bgm-Dyhjn3Ps.mp3",m=c.div`
  height: 100vh;
  background-image: url(${x});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* object-fit: cover; */
`,u=()=>{const t=o(),s=n.useRef(null);return i(()=>{g.from(".heading",{duration:2,opacity:0,y:-30,delay:1,ease:d.easeOut,stagger:.2})}),n.useEffect(()=>{const a=document.getElementById("audio-playback");a.src=l,s.current.addEventListener("mousemove",()=>a.play())},[]),e.jsxs(m,{ref:s,className:"flex justify-center items-center flex-col gap-2 sm:gap-6",children:[e.jsxs("h1",{className:"heading text-white text-3xl  sm:text-6xl font-bold tracking-wide text-center max-w-[700px]",children:["Explore the Depths of"," ",e.jsx("span",{className:"heading text-orange-600 text-2xl sm:text-[55px] block w-fit mx-auto py-5",children:"Mindful Musings"})]}),e.jsx("button",{onClick:()=>{t("/auth")},className:"heading text-white bg-orange-600 py-3 sm:py-4 rounded-sm px-5 sm:px-12 text-xl sm:text-3xl font-bold hover:bg-orange-500",children:"Get Started"})]})},b=()=>{const t=o();return n.useEffect(()=>{(async()=>{(await r.isUserLoggedin()).success?t("/dashboard/content"):t("/")})()},[]),e.jsx("section",{children:e.jsx(u,{})})};export{b as default};
