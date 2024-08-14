import{a as x,j as a,m as b,n as w,o as y,p as I,r as v,q as j,A as h,u as N,l as f,k as P}from"./index-B5qGu9zl.js";import{N as n}from"./Notify-C95uOg02.js";import{I as k,d as S,a as C}from"./DashboardPage-yFd8cmFs.js";import"./index-CNMPY8p1.js";const T=({songs:t,allSongs:l,dispatch:o,song:e,customtheme:c,handleFav:r,favSongs:s,i})=>{var g;const p=x(m=>m.song.playSong);let u=e.id||e.songId;const d=((g=p[0])==null?void 0:g.id)===u||!1;return a.jsxs("div",{onClick:()=>{o(t?b(!0):b(!1)),o(w(!0)),o(y(l)),o(I(t?e.songId:e.id))},style:{width:"min(99%,500px)",background:"linear-gradient(to right, rgba(0,0,0,.55),rgba(0,0,0,.55))"},className:`${d&&"gradient"} text-[${c.text}] bg-[${c.surface}] shadow-black border-[1px] border-pink-600 h-[56px]  flex rounded-[28px] gap-3  cursor-pointer items-center relative  z-0`,children:[a.jsx(k,{id:(e==null?void 0:e.id)||(e==null?void 0:e.songId),className:`w-[54px] h-[54px] rounded-[100%] ${d&&"active"} `,src:t?e.songImage:e.image[2].url,alt:""}),a.jsxs("h2",{className:"text-lg capitalize ",children:[i+1,". ",t?e.songName.slice(0,16):e.name.slice(0,16)]}),a.jsx(S,{onClick:m=>r(m,e),style:{position:"absolute",right:"60px",color:s.some(m=>t?m.songId===e.songId:m.songId===e.id)?"#ea0b91":"white"}}),a.jsx(A,{song:e,songs:t})]},t?e.songId:e.id)},A=({songs:t,song:l})=>{const[o,e]=v.useState("");return a.jsxs(a.Fragment,{children:[a.jsx(C,{onClick:c=>{c.stopPropagation(),e(!0)},className:"absolute right-5 w-5 "}),o&&a.jsx(F,{setIsActive:e,song:l,songs:t})]})},F=({setIsActive:t,song:l,songs:o})=>{const e=x(r=>r.fav.customPlaylists),c=async r=>{t(!1),n("success","Please wait...",1300);const s={songId:o?l.songId:l.id,songName:o?l.songName:l.name,songImage:o?l.songImage:l.image[2].url},i=await h.addSongToPlaylist("/addSong/"+r,s);i.success?setTimeout(()=>n("success",i.message),2e3):setTimeout(()=>{n("error",i.message)},2e3)};return j.createPortal(a.jsx("div",{onClick:r=>{r.stopPropagation(),t(!1)},className:"h-screen w-screen bg-[rgba(0,0,0,.7)] fixed top-0 left-0",children:a.jsxs("div",{onClick:r=>{r.stopPropagation()},style:{scrollbarWidth:"none"},className:"w-48 px-2 py-1 h-48 z-90 bg-white rounded-lg text-black fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ",children:[a.jsx("h2",{className:"",children:"Add to"}),a.jsx("ul",{className:"overflow-scroll h-[100%]  flex flex-col justify-center items-start px-4 gap-2 py-5",children:e==null?void 0:e.map((r,s)=>a.jsx(a.Fragment,{children:a.jsxs("li",{style:{scrollbarWidth:"2px"},onClick:()=>c(r._id),className:"text-center text-sm p-1 font-semibold hover:font-extraboldx hover:bg-pink-400 rounded-lg",children:[s+1,". ",r.name]},r._id)}))}),a.jsx("button",{className:"absolute right-2 top-1 rounded-xl bg-red-600 text-white px-1 py-[2px]",onClick:()=>{t(!1)},children:"close"})]})}),document.getElementById("portals"))},z=({songs:t})=>{const l=N(),o=x(s=>s.theme.value);let e=x(s=>s.song.allSongs);const c=x(s=>s.fav.favList);v.useEffect(()=>{l(f()),l(P())},[]);const r=async(s,i)=>{if(n("success","Please wait...",1300),s.stopPropagation(),c.some(d=>d.songId===i.songId)){const d=await h.removeFav("/fav/"+i._id);return d.success?n("success",d.message):n("error",d.message),l(f())}let p={songId:i.id,songName:i.name,songImage:i.image[2].url};const u=await h.addNewFav("/fav/new",p);u.success?setTimeout(()=>{n("success",u.message)},2e3):setTimeout(()=>n("error",u.message),2e3),l(f())};return t&&(e=t),a.jsx("div",{style:{width:"min(100vw,600px)",scrollbarWidth:"none"},className:"flex flex-col gap-2 items-center  h-[85vh]  overflow-scroll pb-[310px]",children:e&&e.map((s,i)=>a.jsx(T,{songs:t,allSongs:e,dispatch:l,song:s,customtheme:o,handleFav:r,favSongs:c,i},t?s.songId+i:s.id+i))})};export{z as ShowAllSongs,z as default};
