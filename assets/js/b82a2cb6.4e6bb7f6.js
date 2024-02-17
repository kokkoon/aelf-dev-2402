"use strict";(self.webpackChunkaelf_dev_2402=self.webpackChunkaelf_dev_2402||[]).push([[7831],{455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=o(4848),s=o(8453);const r={sidebar_position:1},d="Tools and Platforms",l={id:"prerequisites/1.1 tools-and-platforms",title:"Tools and Platforms",description:"General Tools / Platforms",source:"@site/docs/1. prerequisites/1.1 tools-and-platforms.md",sourceDirName:"1. prerequisites",slug:"/prerequisites/1.1 tools-and-platforms",permalink:"/aelf-dev-2402/docs/prerequisites/1.1 tools-and-platforms",draft:!1,unlisted:!1,editUrl:"https://github.com/kokkoon/aelf-dev-2402/tree/main/docs/1. prerequisites/1.1 tools-and-platforms.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Preparation",permalink:"/aelf-dev-2402/docs/prerequisites/"},next:{title:"Setting up Portkey wallet for testnet",permalink:"/aelf-dev-2402/docs/prerequisites/1.2 Portkey"}},i={},a=[{value:"General Tools / Platforms",id:"general-tools--platforms",level:2},{value:"Developer Tools",id:"developer-tools",level:2},{value:"1. <code>dotnet SDK</code>",id:"1-dotnet-sdk",level:2},{value:"2. <code>node</code> and <code>npm</code>",id:"2-node-and-npm",level:2},{value:"3. IDE",id:"3-ide",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tools-and-platforms",children:"Tools and Platforms"}),"\n",(0,n.jsx)(t.h2,{id:"general-tools--platforms",children:"General Tools / Platforms"}),"\n",(0,n.jsx)(t.p,{children:"We will be using the following tools / platforms in our workshop."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Item"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://portkey.finance",children:"Portkey"})}),(0,n.jsx)(t.td,{children:"Portkey Wallet to allow us to transact on the aelf blockchain."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://test.eforest.finance/symbolmarket",children:"Token Symbol Market (TSM)"})}),(0,n.jsx)(t.td,{children:"Marketplace to get SEED for tokens/NFT on aelf blockchain."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://test.eforest.finance",children:"Forest"})}),(0,n.jsx)(t.td,{children:"Marketplace to create NFT on aelf blockchain."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Since aelf has a singleton ",(0,n.jsx)(t.code,{children:"MultiToken"})," system contract serving all the tokens, tokens are identified by their unique symbols. This is unlike on Ethereum or other EVM based blockchains where\na fresh ERC20 or ERC721 contract has to be deployed if you want to issue your own tokens. To guard the rarity of symbols and avoid abuse, a marketplace called the ",(0,n.jsx)(t.code,{children:"Token Symbol Market"})," was introduced to provide a mechanism\nfor developer who wish to issue their own tokens to grab the symbols they desire."]})}),"\n",(0,n.jsx)(t.h2,{id:"developer-tools",children:"Developer Tools"}),"\n",(0,n.jsx)(t.p,{children:"Below are the tools that we need in our development."}),"\n",(0,n.jsxs)(t.h2,{id:"1-dotnet-sdk",children:["1. ",(0,n.jsx)(t.code,{children:"dotnet SDK"})]}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"dotnet SDK"})," by visiting ",(0,n.jsx)(t.a,{href:"https://dotnet.microsoft.com/en-us/download",children:"https://dotnet.microsoft.com/en-us/download"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Smart contracts on aelf are written in C#. We need dotnet sdks for smart contract development."})}),"\n",(0,n.jsxs)(t.h2,{id:"2-node-and-npm",children:["2. ",(0,n.jsx)(t.code,{children:"node"})," and ",(0,n.jsx)(t.code,{children:"npm"})]}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"node"})," and ",(0,n.jsx)(t.code,{children:"npm"})," by visiting ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"https://nodejs.org/en/download"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"node"})," and ",(0,n.jsx)(t.code,{children:"npm"})," are required for developing the DApp front end."]})}),"\n",(0,n.jsx)(t.h2,{id:"3-ide",children:"3. IDE"}),"\n",(0,n.jsxs)(t.p,{children:["If not installed, you may install the Visual Studio Code IDE: ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"https://code.visualstudio.com/"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>l});var n=o(6540);const s={},r=n.createContext(s);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);