"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||s;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},78661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));n(44996);const s={title:"WebSockets"},r="WebSocket support",i={unversionedId:"guides/websockets",id:"guides/websockets",title:"WebSockets",description:"Wasp provides a fully integrated WebSocket experience by utilizing Socket.IO on the client and server.",source:"@site/docs/guides/websockets.md",sourceDirName:"guides",slug:"/guides/websockets",permalink:"/docs/guides/websockets",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/guides/websockets.md",tags:[],version:"current",frontMatter:{title:"WebSockets"},sidebar:"docs",previous:{title:"Automatic CRUD",permalink:"/docs/guides/crud"},next:{title:"Overview",permalink:"/docs/language/overview"}},l={},c=[{value:"Turn on WebSockets in your Wasp file",id:"turn-on-websockets-in-your-wasp-file",level:2},{value:"Implement the WebSocket server",id:"implement-the-websocket-server",level:2},{value:"Defining the events handler",id:"defining-the-events-handler",level:3},{value:"Using the WebSocket on the client",id:"using-the-websocket-on-the-client",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket-support"},"WebSocket support"),(0,a.kt)("p",null,"Wasp provides a fully integrated WebSocket experience by utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO")," on the client and server. "),(0,a.kt)("p",null,"We handle making sure your URLs are correctly setup, CORS is enabled, and provide a useful ",(0,a.kt)("inlineCode",{parentName:"p"},"useSocket")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useSocketListener")," abstractions for use in React components."),(0,a.kt)("p",null,"To get started, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define your WebSocket logic on the server."),(0,a.kt)("li",{parentName:"ol"},"Declare you are using WebSockets in your Wasp file, and connect it with your server logic."),(0,a.kt)("li",{parentName:"ol"},"Use WebSockets on the client, in React, via ",(0,a.kt)("inlineCode",{parentName:"li"},"useSocket")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"useSocketListener"),"."),(0,a.kt)("li",{parentName:"ol"},"Optionally, type the WebSocket events and payloads for full-stack type safety.")),(0,a.kt)("p",null,"We will cover all the steps above, but in an order that makes it easier to explain new concepts."),(0,a.kt)("h2",{id:"turn-on-websockets-in-your-wasp-file"},"Turn on WebSockets in your Wasp file"),(0,a.kt)("p",null,"We specify that we are using WebSockets by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"webSocket")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and providing the required ",(0,a.kt)("inlineCode",{parentName:"p"},"fn"),". You can optionally change the auto-connect behavior (on by default)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=todoApp.wasp",title:"todoApp.wasp"},'app todoApp {\n  // ...\n\n  webSocket: {\n    fn: import { webSocketFn } from "@server/webSocket.js",\n    autoConnect: true, // optional, default: true\n  },\n}\n')),(0,a.kt)("h2",{id:"implement-the-websocket-server"},"Implement the WebSocket server"),(0,a.kt)("p",null,"Let's define the server with all of the events and handler functions."),(0,a.kt)("admonition",{title:"Full-stack type safety",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are using TypeScript, you can define event names with the matching payload types on the server and have those types exposed automatically on the client. This helps you avoid mistakes when emitting events or handling them. Read more in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/typescript#websocket-full-stack-type-support"},"Typescript guide"),".")),(0,a.kt)("h3",{id:"defining-the-events-handler"},"Defining the events handler"),(0,a.kt)("p",null,"On the server, you will get Socket.IO ",(0,a.kt)("inlineCode",{parentName:"p"},"io: Server")," argument and ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," for your WebSocket function, which contains all entities you defined in your Wasp app. You can use this ",(0,a.kt)("inlineCode",{parentName:"p"},"io")," object to register callbacks for all the regular ",(0,a.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/server-api/"},"Socket.IO events"),". "),(0,a.kt)("p",null,"Lastly, if a user is logged in, you will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.data.user")," on the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/webSocket.ts",title:"src/server/webSocket.ts"},"import type { WebSocketDefinition, WaspSocketData } from '@wasp/webSocket'\nimport { v4 as uuidv4 } from 'uuid'\n\nexport const webSocketFn: WebSocketFn = (io, context) => {\n  io.on('connection', (socket) => {\n    const username = socket.data.user?.email || socket.data.user?.username || 'unknown'\n    console.log('a user connected: ', username)\n\n    socket.on('chatMessage', async (msg) => {\n      console.log('message: ', msg)\n      io.emit('chatMessage', { id: uuidv4(), username, text: msg })\n      // You can also use your entities here:\n      // await context.entities.SomeEntity.create({ someField: msg })\n    })\n  })\n}\n\n// Typing our WebSocket function with the events and payloads\n// allows us to get type safety on the client as well\n\ntype WebSocketFn = WebSocketDefinition<\n  ClientToServerEvents,\n  ServerToClientEvents,\n  InterServerEvents,\n  SocketData\n>\n\ninterface ServerToClientEvents {\n  chatMessage: (msg: { id: string, username: string, text: string }) => void;\n}\n\ninterface ClientToServerEvents {\n  chatMessage: (msg: string) => void;\n}\n\ninterface InterServerEvents {}\n\n// Data that is attached to the socket.\n// NOTE: Wasp automatically injects the JWT into the connection,\n// and if present/valid, the server adds a user to the socket.\ninterface SocketData extends WaspSocketData {}\n")),(0,a.kt)("h2",{id:"using-the-websocket-on-the-client"},"Using the WebSocket on the client"),(0,a.kt)("p",null,"Client access to WebSockets is provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSocket")," hook. It returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"socket: Socket")," for sending and receiving events."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isConnected: boolean")," for showing a display of the Socket.IO connection status.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note: Wasp automatically connects and establishes a WebSocket connection from the client to the server by default, so you do not need to explicitly ",(0,a.kt)("inlineCode",{parentName:"li"},"socket.connect()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"socket.disconnect()"),". "),(0,a.kt)("li",{parentName:"ul"},"If you set ",(0,a.kt)("inlineCode",{parentName:"li"},"autoConnect: false")," in your Wasp file, then you should call these as needed.")))),(0,a.kt)("p",null,"Additionally, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"useSocketListener: (event, callback) => void")," hook which is used for registering event handlers. It takes care of unregistering on unmount."),(0,a.kt)("p",null,"All components using ",(0,a.kt)("inlineCode",{parentName:"p"},"useSocket")," share the same underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"socket"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/ChatPage.tsx",title:"src/client/ChatPage.tsx"},"import React, { useState } from 'react'\nimport {\n  useSocket,\n  useSocketListener,\n  ServerToClientPayload,\n} from '@wasp/webSocket'\n\nexport const ChatPage = () => {\n  const [messageText, setMessageText] = useState<\n    // We are using a helper type to get the payload type for the \"chatMessage\" event.\n    ClientToServerPayload<'chatMessage'>\n  >('')\n  const [messages, setMessages] = useState<\n    ServerToClientPayload<'chatMessage'>[]\n  >([])\n  // The \"socket\" instance is typed with the types you defined on the server.\n  const { socket, isConnected } = useSocket()\n\n  // This is a type-safe event handler: \"chatMessage\" event and its payload type\n  // are defined on the server.\n  useSocketListener('chatMessage', logMessage)\n\n  function logMessage(msg: ServerToClientPayload<'chatMessage'>) {\n    setMessages((priorMessages) => [msg, ...priorMessages])\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault()\n    // This is a type-safe event emitter: \"chatMessage\" event and its payload type\n    // are defined on the server.\n    socket.emit('chatMessage', messageText)\n    setMessageText('')\n  }\n\n  const messageList = messages.map((msg) => (\n    <li key={msg.id}>\n      <em>{msg.username}</em>: {msg.text}\n    </li>\n  ))\n  const connectionIcon = isConnected ? '\ud83d\udfe2' : '\ud83d\udd34'\n\n  return (\n    <>\n      <h2>Chat {connectionIcon}</h2>\n      <div>\n        <form onSubmit={handleSubmit}>\n          <div>\n            <div>\n              <input\n                type=\"text\"\n                value={messageText}\n                onChange={(e) => setMessageText(e.target.value)}\n              />\n            </div>\n            <div>\n              <button type=\"submit\">Submit</button>\n            </div>\n          </div>\n        </form>\n        <ul>{messageList}</ul>\n      </div>\n    </>\n  )\n}\n")),(0,a.kt)("p",null,"Read more about the types that are available when using WebSockets with Typescript in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/typescript#websocket-full-stack-type-support"},"Typescript guide"),"."))}d.isMDXComponent=!0}}]);