import{s as T,d as L,n as N}from"./scheduler.DUa3pFyD.js";import{S as U,i as W,e as z,s as A,b as G,c as I,d as E,g,h as C,f as M,k as c,l as R,m as u,n as j,u as X}from"./index.BGoR_JRe.js";/* empty css                                               */function O(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function P(e,t,l){const i=e.slice();return i[5]=t[l],i}function Q(e){let t,l=e[5]+"",i;return{c(){t=z("div"),i=G(l),this.h()},l(o){t=I(o,"DIV",{class:!0});var f=E(t);i=M(f,l),f.forEach(g),this.h()},h(){c(t,"class","svelte-n93h1z")},m(o,f){R(o,t,f),u(t,i)},p(o,f){f&8&&l!==(l=o[5]+"")&&j(i,l)},d(o){o&&g(t)}}}function Y(e){let t,l,i,o,f,h,r,d,w,D,b,B,m,q,F,V=O(e[3]),a=[];for(let s=0;s<V.length;s+=1)a[s]=Q(P(e,V,s));return{c(){t=z("div"),l=z("div"),i=z("img"),f=A(),h=z("div"),r=z("div"),d=G(e[1]),w=A(),D=z("div"),b=G(e[2]),B=A(),m=z("div");for(let s=0;s<a.length;s+=1)a[s].c();q=A(),F=G(e[4]),this.h()},l(s){t=I(s,"DIV",{id:!0,class:!0});var v=E(t);l=I(v,"DIV",{id:!0,class:!0});var n=E(l);i=I(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(g),f=C(v),h=I(v,"DIV",{id:!0,class:!0});var _=E(h);r=I(_,"DIV",{id:!0,class:!0});var J=E(r);d=M(J,e[1]),J.forEach(g),w=C(_),D=I(_,"DIV",{id:!0,class:!0});var K=E(D);b=M(K,e[2]),K.forEach(g),B=C(_),m=I(_,"DIV",{id:!0,class:!0});var S=E(m);for(let H=0;H<a.length;H+=1)a[H].l(S);q=C(S),F=M(S,e[4]),S.forEach(g),_.forEach(g),v.forEach(g),this.h()},h(){L(i.src,o=e[0])||c(i,"src",o),c(i,"alt","testo"),c(i,"class","svelte-n93h1z"),c(l,"id","sin"),c(l,"class","svelte-n93h1z"),c(r,"id","tit"),c(r,"class","svelte-n93h1z"),c(D,"id","min_tit"),c(D,"class","svelte-n93h1z"),c(m,"id","text"),c(m,"class","svelte-n93h1z"),c(h,"id","des"),c(h,"class","svelte-n93h1z"),c(t,"id","tutto"),c(t,"class","svelte-n93h1z")},m(s,v){R(s,t,v),u(t,l),u(l,i),u(t,f),u(t,h),u(h,r),u(r,d),u(h,w),u(h,D),u(D,b),u(h,B),u(h,m);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(m,null);u(m,q),u(m,F)},p(s,[v]){if(v&1&&!L(i.src,o=s[0])&&c(i,"src",o),v&2&&j(d,s[1]),v&4&&j(b,s[2]),v&8){V=O(s[3]);let n;for(n=0;n<V.length;n+=1){const _=P(s,V,n);a[n]?a[n].p(_,v):(a[n]=Q(_),a[n].c(),a[n].m(m,q))}for(;n<a.length;n+=1)a[n].d(1);a.length=V.length}v&16&&j(F,s[4])},i:N,o:N,d(s){s&&g(t),X(a,s)}}}function Z(e,t,l){let{url:i}=t,{titolo:o}=t,{min_titolo:f}=t,{testo1:h=""}=t,{testo2:r=""}=t;return e.$$set=d=>{"url"in d&&l(0,i=d.url),"titolo"in d&&l(1,o=d.titolo),"min_titolo"in d&&l(2,f=d.min_titolo),"testo1"in d&&l(3,h=d.testo1),"testo2"in d&&l(4,r=d.testo2)},[i,o,f,h,r]}class p extends U{constructor(t){super(),W(this,t,Z,Y,T,{url:0,titolo:1,min_titolo:2,testo1:3,testo2:4})}}export{p as F};
