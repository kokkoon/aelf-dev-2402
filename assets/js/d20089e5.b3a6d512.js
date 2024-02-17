"use strict";(self.webpackChunkaelf_dev_2402=self.webpackChunkaelf_dev_2402||[]).push([[9018],{6481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(4848),i=t(8453);const a={sidebar_position:5},s="Events",d={id:"additional/more-about-contract/5.5 events",title:"Events",description:"Contracts can emit events that signal that changes have occurred. Unlink building view methods and waiting for external calls to expose states, events are stored in the blockchain transaction log, so they become part of the permanent record.",source:"@site/docs/5. additional/more-about-contract/5.5 events.md",sourceDirName:"5. additional/more-about-contract",slug:"/additional/more-about-contract/5.5 events",permalink:"/aelf-dev-2402/docs/additional/more-about-contract/5.5 events",draft:!1,unlisted:!1,editUrl:"https://github.com/kokkoon/aelf-dev-2402/tree/main/docs/5. additional/more-about-contract/5.5 events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Inline Contract Call",permalink:"/aelf-dev-2402/docs/additional/more-about-contract/5.4 inline-contract-call"},next:{title:"Documentations",permalink:"/aelf-dev-2402/docs/additional/a documentation"}},r={},c=[];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.p,{children:"Contracts can emit events that signal that changes have occurred. Unlink building view methods and waiting for external calls to expose states, events are stored in the blockchain transaction log, so they become part of the permanent record."}),"\n",(0,o.jsx)(n.p,{children:"Once those events are added to the chain, an off-chain application can listen to events."}),"\n",(0,o.jsxs)(n.p,{children:["For example, in the implementation of the Update method in the ",(0,o.jsx)(n.strong,{children:"HelloWorld"})," contract, you can emit (fire) an event to notify the outside world that the status of the Message has changed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"// A method that modifies the contract state\npublic override Empty Update(StringValue input)\n{\n    // Set the message value in the contract state\n    State.Message.Value = input.Value;\n    // Emit an event to notify listeners about something happened during the execution of this method\n    Context.Fire(new UpdatedMessage\n    {\n        Value = input.Value\n    });\n    return new Empty();\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"The definition of UpdatedMessage is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"// An event that will be emitted from contract method call\nmessage UpdatedMessage {\n  option (aelf.is_event) = true;\n  string value = 1;\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Remember to add option ",(0,o.jsx)(n.code,{children:"option (aelf.is_event) = true;"})," to ensure that this message will be emitted as an event."]})}),"\n",(0,o.jsxs)(n.p,{children:["We have designed the ",(0,o.jsx)(n.code,{children:"aelf.is_indexed"})," option for the fields of event message, but in reality, it has no effect."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"// An event that will be emitted from contract method call\nmessage UpdatedMessage {\n  option (aelf.is_event) = true;\n  string value = 1 [(aelf.is_indexed) = true];\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It's just that when reading events, their information is included in two properties: ",(0,o.jsx)(n.strong,{children:"Indexed"})," and ",(0,o.jsx)(n.strong,{children:"NonIndexed"}),". Like in the above definition, after adding ",(0,o.jsx)(n.code,{children:"[(aelf.is_indexed) = true]"}),", the value field will go from ",(0,o.jsx)(n.strong,{children:"NonIndexed"})," to ",(0,o.jsx)(n.strong,{children:"Indexed"}),"."]}),"\n",(0,o.jsx)(n.h1,{id:"definition-of-event",children:"Definition of event"}),"\n",(0,o.jsx)(n.p,{children:"The following is the definition of event on aelf."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:"message LogEvent {\n    // The contract address.\n    Address address = 1;\n    // The name of the log event.\n    string name = 2;\n    // The indexed data, used to calculate bloom.\n    repeated bytes indexed = 3;\n    // The non indexed data.\n    bytes non_indexed = 4;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Indexed"})," is a list, ",(0,o.jsx)(n.strong,{children:"NonIndexed"})," is a single object."]}),"\n",(0,o.jsx)(n.p,{children:"And to encode an event, the proto file that defines this event must be known."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);