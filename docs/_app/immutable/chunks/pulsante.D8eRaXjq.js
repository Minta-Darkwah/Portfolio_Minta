import{s as y,n as x}from"./scheduler.DUa3pFyD.js";import{S as g,i as C,e as m,b,s as w,c as u,d as v,f as E,g as f,h as P,j as S,k as o,l as A,m as d,n as D}from"./index.BGoR_JRe.js";import"./pulsante.svelte_svelte_type_style_lang.5p6OrlKu.js";function I(c){let e,t,s,i,a,l,_="navigate_next";return{c(){e=m("div"),t=m("a"),s=m("div"),i=b(c[1]),a=w(),l=m("span"),l.textContent=_,this.h()},l(n){e=u(n,"DIV",{id:!0,class:!0});var r=v(e);t=u(r,"A",{href:!0,class:!0});var h=v(t);s=u(h,"DIV",{id:!0});var p=v(s);i=E(p,c[1]),p.forEach(f),a=P(h),l=u(h,"SPAN",{class:!0,"data-svelte-h":!0}),S(l)!=="svelte-1ebec18"&&(l.textContent=_),h.forEach(f),r.forEach(f),this.h()},h(){o(s,"id","sin"),o(l,"class","material-symbols-outlined svelte-1yn9whu"),o(t,"href",c[0]),o(t,"class","svelte-1yn9whu"),o(e,"id","pulsante"),o(e,"class","svelte-1yn9whu")},m(n,r){A(n,e,r),d(e,t),d(t,s),d(s,i),d(t,a),d(t,l)},p(n,[r]){r&2&&D(i,n[1]),r&1&&o(t,"href",n[0])},i:x,o:x,d(n){n&&f(e)}}}function V(c,e,t){let{src:s}=e,{nome:i}=e;return c.$$set=a=>{"src"in a&&t(0,s=a.src),"nome"in a&&t(1,i=a.nome)},[s,i]}class N extends g{constructor(e){super(),C(this,e,V,I,y,{src:0,nome:1})}}export{N as P};