(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{300:function(){},5427:function(){},7837:function(){},406:function(){},5633:function(){},6633:function(e,s,t){Promise.resolve().then(t.bind(t,5957))},5957:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return w}});var r=t(7437),n=t(9778),i=t(9672),l=t(9376),a=t(2265),c=t(7648);function o(e){let{href:s,icon:t,variant:n="primary",isActive:i,children:l}=e;return(0,r.jsxs)(c.default,{href:s,className:"".concat("group flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"," ").concat({primary:"text-gray-700 hover:text-gray-900",secondary:i?"bg-blue-500 text-white shadow-md":"bg-white/80 text-gray-600 hover:bg-white shadow-sm hover:shadow-md"}[n]),children:[(0,r.jsx)(t,{className:"h-4 w-4 transition-transform group-hover:scale-110"}),l]})}let d={ZOOM_STEP:.25,MIN_SCALE:.5,MAX_SCALE:3,CONTAINER_PADDING:32};var u=t(1988),f=t(4593),h=t(5444),m=t(586),x=t(1823);function b(e){let{size:s="md",className:t=""}=e;return(0,r.jsx)("div",{className:"inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] ".concat({sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"}[s]," ").concat(t),role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"로딩중..."})})}function p(e){let{message:s}=e;return(0,r.jsxs)("div",{className:"flex h-full flex-col items-center justify-center gap-3",children:[(0,r.jsx)(b,{size:"lg",className:"text-blue-500"}),(0,r.jsx)("p",{className:"text-gray-500",children:s})]})}function g(e){let{onClick:s,disabled:t,icon:n,label:i,scale:l}=e;return(0,r.jsxs)("button",{onClick:s,disabled:t,className:"group relative flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:text-white/30 disabled:hover:bg-transparent sm:h-9 sm:w-9","aria-label":i,children:[(0,r.jsx)(n,{className:"h-4 w-4 sm:h-5 sm:w-5"}),(0,r.jsxs)("span",{className:"absolute right-full mr-2 hidden rounded bg-blue-500 px-2 py-1 text-xs text-white group-hover:block",children:[Math.round(100*l),"%"]})]})}function j(e){let{file:s}=e,[t,n]=(0,a.useState)(0),[i,l]=(0,a.useState)(1),c=(0,a.useRef)(null),o=function(e){let[s,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let s=()=>{e.current&&t(e.current.clientWidth-d.CONTAINER_PADDING)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[e]),s}(c),h=s.startsWith("/")?s:"/".concat(s);return(0,r.jsxs)("div",{className:"relative flex h-full flex-col",ref:c,children:[(0,r.jsx)("div",{className:"relative flex-1 overflow-auto bg-gray-400 px-2",children:(0,r.jsx)(m.Z,{file:h,onLoadSuccess:function(e){let{numPages:s}=e;n(s)},loading:(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:(0,r.jsx)(p,{message:"PDF 로딩 중..."})}),children:Array.from(Array(t),(e,s)=>(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(x.Z,{pageNumber:s+1,width:o,scale:i,loading:(0,r.jsx)(p,{message:"페이지 로딩 중..."}),renderTextLayer:!1,renderAnnotationLayer:!1},"page_".concat(s+1))},"page_".concat(s+1)))})}),(0,r.jsxs)("div",{className:"fixed bottom-6 right-6 flex flex-col items-center gap-1 rounded-full bg-blue-500/90 p-1.5 backdrop-blur-sm sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2",children:[(0,r.jsx)(g,{onClick:()=>{i>=d.MAX_SCALE||l(e=>Math.min(e+d.ZOOM_STEP,d.MAX_SCALE))},disabled:i>=d.MAX_SCALE,icon:u.Z,label:"확대",scale:i}),(0,r.jsx)("div",{className:"h-px w-4 bg-white/20"}),(0,r.jsx)(g,{onClick:()=>{i<=d.MIN_SCALE||l(e=>Math.max(e-d.ZOOM_STEP,d.MIN_SCALE))},disabled:i<=d.MIN_SCALE,icon:f.Z,label:"축소",scale:i})]})]})}function v(){let e=(0,l.useSearchParams)().get("file")||"resume.pdf";return(0,r.jsxs)("div",{className:"flex h-screen flex-col",children:[(0,r.jsxs)("nav",{className:"sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/30 bg-white/80 px-4 py-2 backdrop-blur-lg",children:[(0,r.jsx)(o,{href:"/",icon:n.Z,variant:"primary",children:"홈으로"}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(o,{href:"/view?file=resume.pdf",icon:i.Z,variant:"secondary",isActive:"resume.pdf"===e,children:"이력서"}),(0,r.jsx)(o,{href:"/view?file=portfolio.pdf",icon:i.Z,variant:"secondary",isActive:"portfolio.pdf"===e,children:"포트폴리오"})]})]}),(0,r.jsx)("div",{className:"relative flex-1",children:(0,r.jsx)(j,{file:e})})]})}function N(){return(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("div",{className:"flex h-screen items-center justify-center",children:(0,r.jsx)("div",{className:"text-lg",children:"로딩 중..."})}),children:(0,r.jsx)(v,{})})}function w(){return(0,r.jsx)(N,{})}t(2610),t(8194),h.default.GlobalWorkerOptions.workerSrc="//unpkg.com/pdfjs-dist@".concat(h.default.version,"/build/pdf.worker.min.js")}},function(e){e.O(0,[84,527,943,686,971,117,744],function(){return e(e.s=6633)}),_N_E=e.O()}]);