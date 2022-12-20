"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(44996);const i=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption"},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(39960);a(44996);const i=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),r=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(i,null),n.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},20521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),i=(a(39960),a(44996),a(92908),a(70589),a(38610));const r={title:"Wasp Beta brings major IDE improvements",authors:["martinsos"],tags:["wasp","language"]},s=void 0,l={permalink:"/blog/2022/12/01/beta-ide-improvements",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-12-01-beta-ide-improvements.md",source:"@site/blog/2022-12-01-beta-ide-improvements.md",title:"Wasp Beta brings major IDE improvements",description:"With the Beta release (0.7), Wasp brings its IDE game to a whole new level!",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"language",permalink:"/blog/tags/language"}],readingTime:5.865,hasTruncateMarker:!1,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"Wasp Beta brings major IDE improvements",authors:["martinsos"],tags:["wasp","language"]},prevItem:{title:"Watch us build a *truly* full-stack app in just 9 minutes w/ Wasp & ChatGPT \ud83d\ude80 \ud83e\udd2f",permalink:"/blog/2022/12/08/fast-fullstack-chatgpt"},nextItem:{title:"Feature Release Announcement - Wasp Optimistic Updates",permalink:"/blog/2022/11/30/optimistic-update-feature-announcement"}},p={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"Live error/warning reporting",id:"live-errorwarning-reporting",level:3},{value:"Autocompletion",id:"autocompletion",level:3},{value:"Bit of history: why are Language Servers cool",id:"bit-of-history-why-are-language-servers-cool",level:2},{value:"Setup",id:"setup",level:2},{value:"Features",id:"features-1",level:2},{value:"Syntax highlighting",id:"syntax-highlighting",level:3},{value:"Snippets",id:"snippets",level:3},{value:"Live error reporting + autocompletion",id:"live-error-reporting--autocompletion",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the Beta release (0.7), Wasp brings its IDE game to a whole new level!"),(0,o.kt)("p",null,"So far Wasp didn\u2019t have much beyond basic syntax highlighting in VSCode, but now it has:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Wasp language server"),", that brings the following to your .wasp files:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"live error reporting in your editor"),(0,o.kt)("li",{parentName:"ol"},"autocompletion (basic for now)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"VSCode Wasp language extension"),":",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"snippets (for ",(0,o.kt)("inlineCode",{parentName:"li"},"page"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"action"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"entity"),")"),(0,o.kt)("li",{parentName:"ol"},"improved syntax highlighting for .wasp files"),(0,o.kt)("li",{parentName:"ol"},"integration with the above-mentioned language server"))),(0,o.kt)("li",{parentName:"ol"},"Support for popular ",(0,o.kt)("strong",{parentName:"li"},"IDEs to fully support Javascript and Typescript files")," in the Wasp project.")),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wls-demo.gif",caption:"Wasp IDE support in action in VSCode: syntax highlighting, snippets, live error reporting.",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"Wasp IDE support in action in VSCode: syntax highlighting, snippets, live error reporting."),(0,o.kt)("h1",{id:"wasp-language-server"},"Wasp Language Server"),(0,o.kt)("p",null,"Wasp Language Server (WLS) is the \u201cbrain\u201d behind smart IDE features like live error reporting and autocompletion - so if it seems like IDE actually understands your code to some degree, well that is the language server!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For curious, check out the source code of WLS on Github: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/waspc/waspls/src/Wasp/LSP"},"https://github.com/wasp-lang/wasp/tree/main/waspc/waspls/src/Wasp/LSP")," .")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"live-errorwarning-reporting"},"Live error/warning reporting"),(0,o.kt)("p",null,"WLS compiles wasp code for you as you work on it and shows you any errors directly in the editor, via red squiggly lines."),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wls-live-errors.gif",mdxType:"ImgWithCaption"}),(0,o.kt)("h3",{id:"autocompletion"},"Autocompletion"),(0,o.kt)("p",null,"WLS understands at which part of code you are right now and offers appropriate completions for it."),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wls-autocompletion.gif",mdxType:"ImgWithCaption"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Right now WLS is pretty naive here, and mostly focuses on offering available expressions when it realizes you need an expression. This is helpful but just a start, and it will get much smarter in future versions!")),(0,o.kt)("h2",{id:"bit-of-history-why-are-language-servers-cool"},"Bit of history: why are Language Servers cool"),(0,o.kt)("p",null,"Years ago, there was no standardized way to write something like Language Server for your language, instead, each language was doing something of its own, and then each editor/IDE would also implement its own layer of logic for using it, and that was a loooot of work that needed to be done for each editor!"),(0,o.kt)("p",null,"Luckily, Microsoft then came up with ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"Language Server Protocol")," - a standardized way of communicating between the \u201csmart\u201d part, implemented by language creators, and the editor/IDE part (language extension) that is using it. This enabled each editor to implement this logic for interacting with language servers only once, and then it can be used for any language server!"),(0,o.kt)("p",null,"This is great for us, language creators, because it means that once we implement a language server for our language, most of the work is done, and the work we need to do per each editor is manageable."),(0,o.kt)("p",null,"Right now WLS is used only by the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"VSCode Wasp language extension"),", but thanks to the nature of the Language Server Protocol, it should be relatively easy to add support for other editors too! Check this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/864"},"GH issue")," if you are interested in helping."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The best thing: there is nothing you, as a Wasp user, have to do to set up WLS! It already comes bundled with your installation of ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," \u2192 so if you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," projects on your machine, you already have WLS, and it is always of the correct version needed for your current wasp installation. The only thing you need to ensure is you have ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," version \u2265 0.6, and a relatively fresh VSCode Wasp language extension."),(0,o.kt)("p",null,"An easy way to check that your version of ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," has WLS packaged into it is to run it and look at its usage instructions: it should mention ",(0,o.kt)("inlineCode",{parentName:"p"},"waspls")," as one of the commands."),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wasp-cli-waspls.png",mdxType:"ImgWithCaption"}),(0,o.kt)("h1",{id:"wasp-vscode-extension"},"Wasp VSCode extension"),(0,o.kt)("p",null,"If we would call Wasp Language Server (WLS) the \u201cbackend\u201d, then ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"},"VSCode Wasp language extension")," would be \u201cfrontend\u201d \u2192 it takes care of everything to ensure you have a nice experience working with Wasp in VSCode, while delegating the hardest work to the WLS."),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wasp-vscode-extension.png",mdxType:"ImgWithCaption"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For curious, you can check out its source code here, core of it is just one file: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/vscode-wasp/blob/main/src/extension.ts"},"https://github.com/wasp-lang/vscode-wasp/blob/main/src/extension.ts"))),(0,o.kt)("h2",{id:"features-1"},"Features"),(0,o.kt)("h3",{id:"syntax-highlighting"},"Syntax highlighting"),(0,o.kt)("p",null,"Nothing unexpected here: it recognizes different parts of Wasp syntax, like type, value, identifier, comment, string, \u2026 and colors them appropriately."),(0,o.kt)("p",null,"If you are curious how is this implemented, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/vscode-wasp/blob/main/syntaxes/wasp.tmLanguage.yaml"},"https://github.com/wasp-lang/vscode-wasp/blob/main/syntaxes/wasp.tmLanguage.yaml")," \u2192 the whole syntax of Wasp is described via this \u201cmysterious\u201d old TextMate format, since that is the way to do it in VSCode."),(0,o.kt)("h3",{id:"snippets"},"Snippets"),(0,o.kt)("p",null,"Wasp allows you to quickly generate a snippet of code for a new ",(0,o.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"entity"),"!"),(0,o.kt)(i.Z,{alt:"",source:"img/beta-ide-improvements/wls-snippets.gif",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"Check out our snippet definitions here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/vscode-wasp/blob/main/snippets/wasp.json"},"https://github.com/wasp-lang/vscode-wasp/blob/main/snippets/wasp.json")," . It is actually really easy, in VSCode, to define them and add new ones."),(0,o.kt)("h3",{id:"live-error-reporting--autocompletion"},"Live error reporting + autocompletion"),(0,o.kt)("p",null,"This is done by delegating the work to WLS, as described above!"),(0,o.kt)("h1",{id:"ide-support-for-javascript--typescript-in-wasp-project"},"IDE support for Javascript / Typescript in Wasp project"),(0,o.kt)("p",null,"Due to how unique Wasp is in its approach, getting an IDE to provide all the usual features for Javascript / Typescript wasn\u2019t completely working, and instead, the IDE would get somewhat confused with the context in which files are and would for example not be able to offer \u201cgo to definition\u201d for some values, or would not know how to follow the import path."),(0,o.kt)("p",null,"With Wasp Beta this is now resolved! We resolved this by somewhat changing the structure of the Wasp project and also adding tsconfig.json files that provide IDE with the information needed to correctly analyze the JS/TS source files."),(0,o.kt)("p",null,"To learn more about Typescript support in Wasp Beta, check ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2022/11/29/typescript-feature-announcement"},"this blog post"),"!"),(0,o.kt)("h1",{id:"what-does-the-future-hold"},"What does the future hold?"),(0,o.kt)("p",null,"While Wasp Beta greatly improved IDE support for Wasp, there are still quite a few things we want to improve on:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Smarter autocompletion via WLS.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Right now it suggests any expression when you need an expression. In the future, we want it to know exactly what is the type of needed expression, and suggest only expressions of that type! So if I am in ",(0,o.kt)("inlineCode",{parentName:"li"},"route ... { to: <my_cursor_here> }"),", then I want to see only ",(0,o.kt)("inlineCode",{parentName:"li"},"page"),"s among the suggested completions, not ",(0,o.kt)("inlineCode",{parentName:"li"},"queries")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")," or something else."),(0,o.kt)("li",{parentName:"ol"},"Further, we would also like it to autocomplete on dictionary fields \u2192 so if I am in ",(0,o.kt)("inlineCode",{parentName:"li"},"route ... { <my_cursor_here> }"),", it should offer me ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"to")," as completions, as those are only valid fields in the ",(0,o.kt)("inlineCode",{parentName:"li"},"route")," dictionary."))),(0,o.kt)("li",{parentName:"ol"},"Extensions for other editors besides VSCode. Now that we have Wasp Language Server, these shouldn\u2019t be too hard to implement! This is also a great task for potential contributors: check this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/issues/864"},"GH issue")," if you are interested."),(0,o.kt)("li",{parentName:"ol"},"Implement Wasp code formatter. We could make it a part of WLS, and then have the editor extension call it on save."),(0,o.kt)("li",{parentName:"ol"},"Improve support for PSL (Prisma Schema Language) in .wasp files.")),(0,o.kt)("p",null,"If any of these sound interesting, feel free to join us on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", or join the discussion on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord"),"!"))}c.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),o=(a(67294),a(3905));const i={toc:[]};function r(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}r.isMDXComponent=!0}}]);