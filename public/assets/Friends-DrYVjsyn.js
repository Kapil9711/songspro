import{j as s,u as i,e as d,r,A as t}from"./index-mRWYclsR.js";/* empty css                      */import{d as c}from"./styled-components.browser.esm-Bs0rB1Ne.js";const x=c.li`
  .friends-span {
    width: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
  }
`,m=()=>s.jsxs("div",{className:"h-screen py-16 px-2 max-w-[600px] mx-auto",children:[s.jsx("h1",{className:"text-center",children:"Add Friends"}),s.jsx(p,{})]}),p=()=>{const l=i(e=>e.user.allUser),o=d();r.useState(!1),console.log(l);const a=r.useMemo(()=>l.filter(e=>e.isverified),[l]);return r.useEffect(()=>{(async()=>{const e=await t.getAllFollowerReq(),n=await t.getAllFollowingReq();console.log(e,n)})()},[]),s.jsx("ul",{onClick:()=>o("/dashboard/addFriends"),style:{scrollbarWidth:window.innerWidth<500?"none":4},className:"h-20 w-full border-2 border-white  gap-5 overflow-x-auto py-2 px-8 flex  items-center",children:a.map(e=>s.jsxs(x,{children:[s.jsx("span",{children:s.jsx("img",{src:"",alt:"s"})}),s.jsx("span",{className:"text-xs friends-span",children:e.username})]},e._id))})};export{m as default};
