import{j as t,O as c,a as n,L as o}from"./index-MaS97gey.js";import{ShowSongs as m}from"./Show-Albums-Dj_8Bk4w.js";import"./Show-All-Songs-BEuEuJJ2.js";import"./Notify-C8VHsc28.js";import"./DashboardPage-DTGrdqii.js";import"./index-C7QLzcs0.js";const g=()=>t.jsxs(t.Fragment,{children:[t.jsx(c,{}),t.jsx(x,{})]}),x=()=>{const s=n(r=>r.song.value),e=(s==null?void 0:s.singleSongs.slice(0,3))||[],l=(s==null?void 0:s.albums.slice(0,3))||[],i=(s==null?void 0:s.playlist.slice(0,3))||[];return t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Songs",songs:e}),t.jsx(a,{title:"Albums",songs:l}),t.jsx(a,{title:"Playlists",songs:i})]})},a=({title:s="Songs",songs:e})=>{let l="/dashboard/content/search/"+s;return t.jsxs(o,{to:l,className:"grid gap-2 max-w-[100%] scroll  mx-auto  relative",children:[t.jsx("h2",{className:"text-center sm:mt-4 font-bold capitalize md:text-xl",children:s}),t.jsx("div",{className:"flex  gap-5 sm:gap-8",children:e.length?e.map(i=>t.jsx(d,{song:i},i.id)):t.jsx("h1",{className:"mt-5",children:"No playlist found"})})]})},d=({song:s})=>{var e;return t.jsxs("div",{children:[t.jsx(m,{className:"w-[100px] h-[100px]  rounded-sm",link:(e=s==null?void 0:s.image[2])==null?void 0:e.url}),t.jsx("p",{className:" text-xs font-semibold tracking-wide overflow-hidden",children:s.title.slice(0,12)})]},s.id)};export{g as default};
