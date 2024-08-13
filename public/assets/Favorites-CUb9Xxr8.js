import{a as c,u as m,j as e,w as o,x as b,q as v,r as i,A as j}from"./index-nO-H62NG.js";import{ShowAllSongs as g}from"./Show-All-Songs-Dh1ZS6Qa.js";import{N as u}from"./Notify-DFKgAlbX.js";import"./Favorite-QXLk7CVh.js";const C=()=>{const l=c(a=>a.fav.favList),t=c(a=>a.song.isPlaylistOrFav),r=m();return e.jsxs("div",{style:{scrollbarWidth:"none",width:"min(100%,600px)"},className:"h-screen overflow-scroll  flex flex-col   gap-5 mt-20 mx-auto   items-center  ",children:[e.jsx("h2",{onClick:()=>{r(o("playlist")),r(b())},className:` py-1 w-[90%] text-center border-l-[5px] border-r-[6px] border-t-2 border-b-2 rounded-lg  border-gray-300 cursor-pointer ${t==="playlist"&&"bg-pink-600"}  hover:bg-pink-500`,children:"All Playlists"}),e.jsx("h2",{onClick:()=>{if(t==="favorite")return r(o(""));r(v()),r(o("favorite"))},className:`py-1 w-[90%] text-center border-l-[6px] border-r-[5px] border-t-2 border-b-2  rounded-xl border-gray-300 ${t==="favorite"&&"bg-pink-600"} hover:bg-pink-500  cursor-pointer`,children:"Favorites"}),t==="favorite"&&e.jsx(g,{songs:l,type:"album"}),t==="playlist"&&e.jsx(k,{})]})},k=()=>{const l=c(s=>s.fav.customPlaylists),t=m(),[r,a]=i.useState(!1),d=i.useRef(null),[n,p]=i.useState(""),[y,f]=i.useState(null),h=async()=>{const s=await j.addNewPlaylist("/playlist/new",{name:d.current.value});s.success?u("success",s.message):u("error",s.message),t(b())};return e.jsxs("div",{style:{width:"min(99%,600px)"},className:"h-screen relative",children:[e.jsx("button",{className:"bg-pink-500 py-1 px-2 rounded-lg absolute right-5",onClick:()=>a(s=>!s),children:"+Add"}),r&&e.jsxs("div",{className:"w-fit ml-5 mb-2",children:[e.jsx("input",{ref:d,type:"text",className:"w-48 h-8 border-2 border-pink-600 rounded-xl text-black px-2 font-bold tracking-wide "}),e.jsx("button",{onClick:h,className:"bg-pink-500 py-1 px-2 rounded-lg ml-2",children:"create"})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"bg-pink-600 text-center w-32 mb-2 mx-auto capitalize py-1 px-4 rounded-xl cursor-pointer ",onClick:()=>p(""),children:n}),e.jsx(g,{songs:l[y].songs,type:"album"})]}),!n&&e.jsx("ul",{className:"flex flex-col gap-2 mt-10",children:l==null?void 0:l.map((s,x)=>e.jsxs("li",{onClick:()=>{p(s.name),f(x)},className:"bg-pink-600 capitalize py-1 px-4 rounded-xl cursor-pointer flex gag-2 justify-between items-center",children:[x+1,". ",s.name]},s._id))})]})};export{C as default};
