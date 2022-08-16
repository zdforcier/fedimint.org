"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[8564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=m(n),p=i,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const a={tags:["eCash","tokens","fm-BTC"]},o="eCash Tokens and fm-BTC",s={unversionedId:"CommonTerms/eCashToken",id:"CommonTerms/eCashToken",title:"eCash Tokens and fm-BTC",description:"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.",source:"@site/docs/CommonTerms/eCashToken.md",sourceDirName:"CommonTerms",slug:"/CommonTerms/eCashToken",permalink:"/wiki_fedimint/docs/CommonTerms/eCashToken",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/CommonTerms/eCashToken.md",tags:[{label:"eCash",permalink:"/wiki_fedimint/docs/tags/e-cash"},{label:"tokens",permalink:"/wiki_fedimint/docs/tags/tokens"},{label:"fm-BTC",permalink:"/wiki_fedimint/docs/tags/fm-btc"}],version:"current",frontMatter:{tags:["eCash","tokens","fm-BTC"]},sidebar:"tutorialSidebar",previous:{title:"Shamir Secret Sharing",permalink:"/wiki_fedimint/docs/CommonTerms/ShamirSecret"},next:{title:"Frequently Asked Questions",permalink:"/wiki_fedimint/docs/category/frequently-asked-questions"}},c={},m=[],l={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ecash-tokens-and-fm-btc"},"eCash Tokens and fm-BTC"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.")),(0,i.kt)("p",null,"Throughout the guide we refer to eCash tokens, fm-BTC (Fedimint BTC) or fm-sats (Fedimint satoshis) as the currency used within the Fedimint. "),(0,i.kt)("p",null,"These terms have been chosen to represent the fact that the circulating currency in the Fedimint is not on-chain bitcoin",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", but a claim on bitcoin that is controlled by the federation."),(0,i.kt)("p",null,"In reality the eCash tokens are claims against the bitcoin that is held in a multi-signature vault by the federation guardians. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/GettingStarted/What-is-a-Fedimint"},"What is a Fedimint"),"."),(0,i.kt)("p",null,"The fm-BTC therefore is a means of the federation keeping track of the outstanding claims for the bitcoin which is held. "),(0,i.kt)("p",null,"These claims are not cryptographically enforced, but instead rely on honest federation guardians to honor the withdrawals. "),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," On-chain referring to bitcoin that is unencumbered on the bitcoin time chain with the private keys controlled by the user."))}u.isMDXComponent=!0}}]);