import{s as _,n as v}from"./scheduler.DUa3pFyD.js";import{S as p,i as g,e as d,s as C,c as h,h as D,n as y,p as l,j as m,g as c,b as M,d as x,f as S,k as f,l as A}from"./index.qN69ecgS.js";function k(r){let e,s,t,i='<div class="bot svelte-1xbltue"><a href="/pag_iniz" class="svelte-1xbltue"><span class="material-symbols-outlined svelte-1xbltue">home</span></a></div> <div class="bot svelte-1xbltue"><a href="./pag_1945" class="svelte-1xbltue">1945</a></div> <div class="bot svelte-1xbltue"><a href="/pag_2020" class="svelte-1xbltue">2020</a></div> <div class="bot svelte-1xbltue"><a href="/pag_mafia" class="svelte-1xbltue">MAFIA</a></div> <div class="bot svelte-1xbltue"><a href="/pag_borsellino" class="svelte-1xbltue">Borsellino</a></div> <div class="bot svelte-1xbltue"><a href="/pag_penadimorte" class="svelte-1xbltue">Pena di morte</a></div> <div class="bot svelte-1xbltue"><a href="/pag_femminismo" class="svelte-1xbltue">Femminismo</a></div> <div class="bot svelte-1xbltue"><a href="/pag_dittature" class="svelte-1xbltue">Dittature</a></div>';return{c(){e=d("link"),s=C(),t=d("div"),t.innerHTML=i,this.h()},l(a){e=h(a,"LINK",{rel:!0,href:!0}),s=D(a),t=h(a,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),y(t)!=="svelte-qh0utd"&&(t.innerHTML=i),this.h()},h(){l(e,"rel","stylesheet"),l(e,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),l(t,"id","nav_b"),l(t,"class","svelte-1xbltue")},m(a,n){m(a,e,n),m(a,s,n),m(a,t,n)},p:v,i:v,o:v,d(a){a&&(c(e),c(s),c(t))}}}class B extends p{constructor(e){super(),g(this,e,null,k,_,{})}}function H(r){let e,s="";return{c(){e=d("div"),e.innerHTML=s,this.h()},l(t){e=h(t,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),y(e)!=="svelte-x7k652"&&(e.innerHTML=s),this.h()},h(){l(e,"id","watcher"),l(e,"class","svelte-1munyr5")},m(t,i){m(t,e,i)},p:v,i:v,o:v,d(t){t&&c(e)}}}class E extends p{constructor(e){super(),g(this,e,null,H,_,{})}}function P(r){let e,s,t,i,a,n,I="navigate_next";return{c(){e=d("div"),s=d("a"),t=d("div"),i=M(r[1]),a=C(),n=d("span"),n.textContent=I,this.h()},l(u){e=h(u,"DIV",{id:!0,class:!0});var o=x(e);s=h(o,"A",{href:!0,class:!0});var b=x(s);t=h(b,"DIV",{id:!0});var L=x(t);i=S(L,r[1]),L.forEach(c),a=D(b),n=h(b,"SPAN",{class:!0,"data-svelte-h":!0}),y(n)!=="svelte-1ebec18"&&(n.textContent=I),b.forEach(c),o.forEach(c),this.h()},h(){l(t,"id","sin"),l(n,"class","material-symbols-outlined svelte-m8iuul"),l(s,"href",r[0]),l(s,"class","svelte-m8iuul"),l(e,"id","pulsante"),l(e,"class","svelte-m8iuul")},m(u,o){m(u,e,o),f(e,s),f(s,t),f(t,i),f(s,a),f(s,n)},p(u,[o]){o&2&&A(i,u[1]),o&1&&l(s,"href",u[0])},i:v,o:v,d(u){u&&c(e)}}}function T(r,e,s){let{src:t}=e,{nome:i}=e;return r.$$set=a=>{"src"in a&&s(0,t=a.src),"nome"in a&&s(1,i=a.nome)},[t,i]}class F extends p{constructor(e){super(),g(this,e,T,P,_,{src:0,nome:1})}}export{B,F as P,E as S};