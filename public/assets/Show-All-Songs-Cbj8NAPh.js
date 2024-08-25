import{u,j as t,m as g,n as y,o as b,p as j,r as I,q as N,A as f,a as S,l as v}from"./index-1wBAx9-n.js";import{N as h}from"./Notify-Cghgtl9l.js";import{I as P,d as k,a as A}from"./DashboardPage-Dvnv5equ.js";import"./index-BBT2yVxp.js";const C=({songs:s,allSongs:i,dispatch:r,song:e,handleFav:c,favSongs:a,i:l})=>{var x;const d=u(o=>o.song.playSong);let n=e.id||e.songId;const m=((x=d[0])==null?void 0:x.id)===n||!1;return t.jsxs("div",{onClick:()=>{r(s?g(!0):g(!1)),r(y(!0)),r(b(i)),r(j(s?e.songId:e.id))},style:{width:"min(99%,500px)",background:"linear-gradient(to right, rgba(0,0,0,.55),rgba(0,0,0,.55))"},className:`${m&&"gradient"} text-white  shadow-black border-[1px] border-pink-600 h-[56px]  flex rounded-[28px] gap-3  cursor-pointer items-center relative  z-0`,children:[t.jsx(P,{id:(e==null?void 0:e.id)||(e==null?void 0:e.songId),className:`w-[54px] h-[54px] rounded-[100%] ${m&&"active"} `,src:s?e.songImage:e.image[2].url,alt:""}),t.jsxs("h2",{className:"text-lg capitalize ",children:[l+1,". ",s?e.songName.slice(0,16):e.name.slice(0,16)]}),t.jsx(k,{onClick:o=>c(o,e),style:{position:"absolute",right:"60px",color:a.some(o=>s?o.songId===e.songId:o.songId===e.id)?"#ea0b91":"white"}}),t.jsx(F,{song:e,songs:s})]},s?e.songId:e.id)},F=({songs:s,song:i})=>{const[r,e]=I.useState("");return t.jsxs(t.Fragment,{children:[t.jsx(A,{onClick:c=>{c.stopPropagation(),e(!0)},className:"absolute right-5 w-5 "}),r&&t.jsx(W,{setIsActive:e,song:i,songs:s})]})},W=({setIsActive:s,song:i,songs:r})=>{const e=u(a=>a.fav.customPlaylists),c=async a=>{s(!1);let l,d;const n=new Promise((o,p)=>{l=o,d=p}),m={songId:r?i.songId:i.id,songName:r?i.songName:i.name,songImage:r?i.songImage:i.image[2].url};h("promise",n,{pending:"Please Wait...",success:"Added Successfully",error:"Already added"}),(await f.addSongToPlaylist("/addSong/"+a,m)).success?l():d()};return N.createPortal(t.jsx("div",{onClick:a=>{a.stopPropagation(),s(!1)},className:"h-screen w-screen bg-[rgba(0,0,0,.7)] fixed top-0 left-0",children:t.jsxs("div",{onClick:a=>{a.stopPropagation()},style:{scrollbarWidth:"none"},className:"w-48 px-2 py-1 h-48 z-90 bg-white rounded-lg text-black fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ",children:[t.jsx("h2",{className:"",children:"Add to"}),t.jsx("ul",{className:"overflow-scroll h-[100%]  flex flex-col justify-center items-start px-4 gap-2 py-5",children:e==null?void 0:e.map((a,l)=>t.jsx(t.Fragment,{children:t.jsxs("li",{style:{scrollbarWidth:"2px"},onClick:()=>c(a._id),className:"text-center text-sm p-1 font-semibold hover:font-extraboldx hover:bg-pink-400 rounded-lg",children:[l+1,". ",a.name]},a._id)}))}),t.jsx("button",{className:"absolute right-2 top-1 rounded-xl bg-red-600 text-white px-1 py-[2px]",onClick:()=>{s(!1)},children:"close"})]})}),document.getElementById("portals"))},z=({songs:s})=>{const i=S();let r=u(a=>a.song.allSongs);const e=u(a=>a.fav.favList),c=async(a,l)=>{a.stopPropagation();let d,n;const m=new Promise((p,w)=>{d=p,n=w});if(e.some(p=>p.songId===l.songId))return h("promise",m,{pending:"Please Wait...",success:"Removed Successfully",error:"Something went wrong"}),(await f.removeFav("/fav/"+l._id)).success?d():n(),i(v());let x={songId:l.id,songName:l.name,songImage:l.image[2].url};h("promise",m,{pending:"Please Wait...",success:"Liked Successfully",error:"Already added"}),(await f.addNewFav("/fav/new",x)).success?d():n(),i(v())};return s&&(r=s),t.jsx("div",{style:{width:"min(100vw,600px)",scrollbarWidth:"none"},className:"flex flex-col gap-2 items-center  h-[85vh]  overflow-scroll pb-[310px]",children:r&&r.map((a,l)=>t.jsx(C,{songs:s,allSongs:r,dispatch:i,song:a,handleFav:c,favSongs:e,i:l},s?a.songId+l:a.id+l))})};export{z as ShowAllSongs,z as default};
