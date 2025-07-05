import{r as l}from"./index.BVOCwoKb.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function E(){if(p)return i;p=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function u(c,e,r){var a=null;if(r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),"key"in e){r={};for(var o in e)o!=="key"&&(r[o]=e[o])}else r=e;return e=r.ref,{$$typeof:t,type:c,key:a,ref:e!==void 0?e:null,props:r}}return i.Fragment=n,i.jsx=u,i.jsxs=u,i}var x;function v(){return x||(x=1,m.exports=E()),m.exports}var k=v();const R={name:"Guille",nick:"Delo"};function b(t){return new Promise(n=>{setTimeout(n,t)})}function T(){const[t,n]=l.useState(R.nick),u=l.useRef(t);l.useEffect(()=>{u.current=t},[t]);async function c(e){const a=u.current.length;for(let s=0;s<a;s++)n(f=>f.substring(0,f.length-1)),await b(50);const o=e.split(""),d=o.pop();for(const s of o)n(f=>f+s),await b(50);n(s=>s+d)}return l.useEffect(()=>{setTimeout(()=>{c(R.name)},2e3)},[]),k.jsx("span",{className:"relative before:content-[''] before:bg-gradient-to-br before:from-purple-300 before:to-pink-300 before:absolute before:block before:w-[110%] before:h-full before:right-1/2 before:translate-x-1/2 before:top-0 before:z-[-10] before:rounded-lg before:rotate-2",children:t})}export{T as default};
