const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;e.addEventListener("click",(()=>{o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(823321141*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.b2af59ef.js.map
