import{s as A,n as q}from"./scheduler.DUa3pFyD.js";import{S as B,i as C,e as d,s as b,b as z,c as m,h as E,d as p,f as x,g as c,k as _,l as v,m as f,n as y}from"./index.BGoR_JRe.js";function D(n){let a,r,t,i,l,u,o,h;return{c(){a=d("br"),r=b(),t=d("div"),i=d("h1"),l=z(n[0]),u=b(),o=d("span"),h=z(n[1]),this.h()},l(e){a=m(e,"BR",{}),r=E(e),t=m(e,"DIV",{id:!0,class:!0});var s=p(t);i=m(s,"H1",{class:!0});var k=p(i);l=x(k,n[0]),k.forEach(c),u=E(s),o=m(s,"SPAN",{class:!0});var S=p(o);h=x(S,n[1]),S.forEach(c),s.forEach(c),this.h()},h(){_(i,"class","svelte-1pkqk5z"),_(o,"class","svelte-1pkqk5z"),_(t,"id","testo"),_(t,"class","svelte-1pkqk5z")},m(e,s){v(e,a,s),v(e,r,s),v(e,t,s),f(t,i),f(i,l),f(t,u),f(t,o),f(o,h)},p(e,[s]){s&1&&y(l,e[0]),s&2&&y(h,e[1])},i:q,o:q,d(e){e&&(c(a),c(r),c(t))}}}function H(n,a,r){let{tit:t}=a,{testo:i}=a;return n.$$set=l=>{"tit"in l&&r(0,t=l.tit),"testo"in l&&r(1,i=l.testo)},[t,i]}class P extends B{constructor(a){super(),C(this,a,H,D,A,{tit:0,testo:1})}}export{P as S};