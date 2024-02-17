"use strict";(self.webpackChunkaelf_dev_2402=self.webpackChunkaelf_dev_2402||[]).push([[410],{9530:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=e(4848),o=e(8453);const a={sidebar_position:2},i="Smart Contract on Frontend",c={id:"frontend/4.2 smart-contract-frontend",title:"Smart Contract on Frontend",description:"The code in this example can be cloned from//github.com/gldeng/aelf-nus-workshop-2024-example-code/tree/main/frontend.",source:"@site/docs/4. frontend/4.2 smart-contract-frontend.md",sourceDirName:"4. frontend",slug:"/frontend/4.2 smart-contract-frontend",permalink:"/aelf-dev-2402/docs/frontend/4.2 smart-contract-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/kokkoon/aelf-dev-2402/tree/main/docs/4. frontend/4.2 smart-contract-frontend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Portkey Sign In",permalink:"/aelf-dev-2402/docs/frontend/4.1 sign-in"},next:{title:"Deployment [Optional]",permalink:"/aelf-dev-2402/docs/frontend/4.3 deployment"}},s={},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Add new files",id:"2-add-new-files",level:2},{value:"2.1. Add a new file <code>src/useSmartContract.ts</code> and copy/paste the following:",id:"21-add-a-new-file-srcusesmartcontractts-and-copypaste-the-following",level:3},{value:"3.2. Add a new file <code>src/SmartContract.tsx</code> and copy/paste the following:",id:"32-add-a-new-file-srcsmartcontracttsx-and-copypaste-the-following",level:3},{value:"4. Edit <code>src/App.tsx</code>:",id:"4-edit-srcapptsx",level:2}];function l(n){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"smart-contract-on-frontend",children:"Smart Contract on Frontend"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The code in this example can be cloned from: ",(0,r.jsx)(t.a,{href:"https://github.com/gldeng/aelf-nus-workshop-2024-example-code/tree/main/frontend",children:"https://github.com/gldeng/aelf-nus-workshop-2024-example-code/tree/main/frontend"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Now that a smart contract has been deployed successfully, it might be desireable to call the smart contract on the frontend."}),"\n",(0,r.jsx)(t.p,{children:"This example will demonstrate how to do this."}),"\n",(0,r.jsx)(t.h2,{id:"2-add-new-files",children:"2. Add new files"}),"\n",(0,r.jsxs)(t.h3,{id:"21-add-a-new-file-srcusesmartcontractts-and-copypaste-the-following",children:["2.1. Add a new file ",(0,r.jsx)(t.code,{children:"src/useSmartContract.ts"})," and copy/paste the following:"]}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsx)(t.p,{children:"Amend the address highlighted below to your own."}),(0,r.jsx)(t.p,{children:"This is the address that has been deployed."})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/useSmartContract.ts" showLineNumbers',children:'import { IPortkeyProvider, IChain } from "@portkey/provider-types";\nimport { useEffect, useState } from "react";\n\nfunction useSmartContract(provider: IPortkeyProvider | null) {\n  const [smartContract, setSmartContract] =\n    useState<ReturnType<IChain["getContract"]>>();\n\n  useEffect(() => {\n    (async () => {\n      if (!provider) return null;\n\n      try {\n        // 1. get the sidechain tDVW using provider.getChain\n        const chain = await provider?.getChain("tDVW");\n        if (!chain) throw new Error("No chain");\n\n        // highlight-next-line\n        const address = "2od863gNGon8cwzRWfVqVH2XgDzrePXEiZwyY6PfEYM8sFnbYw";\n\n        // 2. get the character contract\n        const characterContract = chain?.getContract(address);\n        setSmartContract(characterContract);\n      } catch (error) {\n        console.log(error, "====error");\n      }\n    })();\n  }, [provider]);\n\n  return smartContract;\n}\n\nexport default useSmartContract;\n'})}),"\n",(0,r.jsxs)(t.h3,{id:"32-add-a-new-file-srcsmartcontracttsx-and-copypaste-the-following",children:["3.2. Add a new file ",(0,r.jsx)(t.code,{children:"src/SmartContract.tsx"})," and copy/paste the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/SmartContract.tsx" showLineNumbers',children:'import { IPortkeyProvider, MethodsBase } from "@portkey/provider-types";\nimport useSmartContract from "./useSmartContract";\nimport { useState } from "react";\n\nfunction Pie({\n  number,\n  color,\n  display,\n}: {\n  number: number;\n  color: string;\n  display: number;\n}) {\n  return (\n    <svg height="200" width="200" viewBox="0 0 20 20">\n      <circle r="10" cx="10" cy="10" fill="transparent" />\n      <circle\n        r="5"\n        cx="10"\n        cy="10"\n        fill="transparent"\n        stroke={color}\n        stroke-width="10"\n        stroke-dasharray={`calc(${number} * 31.4 / 100) 31.4`}\n        transform="rotate(-90) translate(-20)"\n      />\n      <text\n        x="10"\n        y="15"\n        style={{\n          fill: "white",\n          fontSize: "3px",\n        }}\n      >\n        {display}\n      </text>\n    </svg>\n  );\n}\n\ninterface ICharacter {\n  health: number;\n  strength: number;\n  speed: number;\n}\n\nfunction SmartContract({ provider }: { provider: IPortkeyProvider | null }) {\n  const characterContract = useSmartContract(provider);\n  const [result, setResult] = useState<ICharacter>();\n  const [initialized, setInitialized] = useState(false);\n\n  const onClick = async () => {\n    try {\n      const accounts = await provider?.request({\n        method: MethodsBase.ACCOUNTS,\n      });\n      if (!accounts) throw new Error("No accounts");\n\n      const account = accounts?.tDVW?.[0]!;\n      if (!account) throw new Error("No account");\n\n      // 1. if not initialized, it will be initialized\n      if (!initialized) {\n        await characterContract?.callSendMethod("Initialize", account, {});\n        setInitialized(true);\n      }\n\n      // 2. if a character has not been created yet, it will create a character\n      await characterContract?.callSendMethod("CreateCharacter", account, {});\n\n      // 3. get character\n      const result = await characterContract?.callViewMethod<ICharacter>(\n        "GetMyCharacter",\n        account\n      );\n\n      setResult(result?.data);\n    } catch (error) {\n      console.error(error, "====error");\n    }\n  };\n\n  if (!provider) return null;\n\n  return (\n    <div>\n      <button onClick={onClick}>Get Character</button>\n      <div style={{ display: "flex" }}>\n        <div>\n          Health:\n          <br />\n          <Pie\n            number={result?.health ?? 0}\n            color="tomato"\n            display={result?.health ?? 0}\n          />\n        </div>\n        <div>\n          Strength:\n          <br />\n          <Pie\n            number={result?.strength ?? 0}\n            color="green"\n            display={result?.strength ?? 0}\n          />\n        </div>\n        <div>\n          Speed:\n          <br />\n          <Pie\n            number={(result?.speed ?? 0) / 2.0}\n            color="blue"\n            display={result?.speed ?? 0}\n          />\n        </div>\n      </div>\n    </div>\n  );\n}\n\nexport default SmartContract;\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"4-edit-srcapptsx",children:["4. Edit ",(0,r.jsx)(t.code,{children:"src/App.tsx"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="src/App.tsx" showLineNumbers',children:'import { useEffect, useState } from "react";\nimport { IPortkeyProvider, MethodsBase } from "@portkey/provider-types";\nimport "./App.css";\nimport detectProvider from "@portkey/detect-provider";\n// highlight-next-line\nimport SmartContract from "./SmartContract";\n\nfunction App() {\n  const [provider, setProvider] = useState<IPortkeyProvider | null>(null);\n\n  const init = async () => {\n    try {\n      setProvider(await detectProvider());\n    } catch (error) {\n      console.log(error, "=====error");\n    }\n  };\n\n  const connect = async () => {\n    await provider?.request({\n      method: MethodsBase.REQUEST_ACCOUNTS,\n    });\n  };\n\n  useEffect(() => {\n    if (!provider) init();\n  }, [provider]);\n\n  if (!provider) return <>Provider not found.</>;\n\n  return (\n    <>\n      <button onClick={connect}>Connect</button>\n      // highlight-next-line\n      <SmartContract provider={provider} />\n    </>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["After Sign in, click on the ",(0,r.jsx)(t.code,{children:"Get Character"})," button."]}),"\n",(0,r.jsx)(t.p,{children:"If the character exists, it will be displayed in the page."})]})}function h(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var r=e(6540);const o={},a=r.createContext(o);function i(n){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(a.Provider,{value:t},n.children)}}}]);