(()=>{var e={177:(e,t,o)=>{"use strict";o.r(t)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o(177);let e=[],t=[],n=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[2,5,8],[1,4,7]],r="O";const l=document.querySelectorAll(".boxBtn > .button > button");function c(e,t){for(let o=0,r=0;o<n.length;o++){if(e.forEach((function(e){n[o].includes(e)&&(r+=1)})),3===r){alert(`${t} ganhou`),l.forEach((e=>{e.classList.add("fim")}));break}r=0}}document.getElementById("restart").addEventListener("click",(function(o){l.forEach((e=>{e.classList.remove("fim"),e.innerText="",e.value=""})),r="O",e.splice(0),t.splice(0),console.log(t),console.log("===================="),console.log(e)})),l.forEach((function(o,n){o.addEventListener("click",(function(l){l.target.value.length>0?console.log("Negado"):"O"===r?(e.push(n),o.value=r,o.innerText=r,c(e,"O"),r="O"===r?"X":"O"):(t.push(n),o.value=r,o.innerText=r,c(t,"X"),r="O"===r?"X":"O")}))}))})()})();