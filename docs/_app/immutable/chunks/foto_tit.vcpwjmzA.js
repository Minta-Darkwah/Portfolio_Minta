import{s as R,d as K,n as L}from"./scheduler.DUa3pFyD.js";import{S as T,i as U,e as b,s as j,j as C,c as I,k as E,h as g,b as A,l as G,d as c,f as Q,m as f,n as M,u as W}from"./index.DL_9CBMk.js";/* empty css                                               */function N(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function O(e,t,s){const i=e.slice();return i[5]=t[s],i}function P(e){let t,s=e[5]+"",i;return{c(){t=b("div"),i=C(s)},l(o){t=I(o,"DIV",{});var v=E(t);i=G(v,s),v.forEach(g)},m(o,v){Q(o,t,v),f(t,i)},p(o,v){v&8&&s!==(s=o[5]+"")&&M(i,s)},d(o){o&&g(t)}}}function X(e){let t,s,i,o,v,u,r,d,w,D,k,z,m,q,F,V=N(e[3]),a=[];for(let l=0;l<V.length;l+=1)a[l]=P(O(e,V,l));return{c(){t=b("div"),s=b("div"),i=b("img"),v=j(),u=b("div"),r=b("div"),d=C(e[1]),w=j(),D=b("div"),k=C(e[2]),z=j(),m=b("div");for(let l=0;l<a.length;l+=1)a[l].c();q=j(),F=C(e[4]),this.h()},l(l){t=I(l,"DIV",{id:!0,class:!0});var h=E(t);s=I(h,"DIV",{id:!0,class:!0});var n=E(s);i=I(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(g),v=A(h),u=I(h,"DIV",{id:!0,class:!0});var _=E(u);r=I(_,"DIV",{id:!0,class:!0});var H=E(r);d=G(H,e[1]),H.forEach(g),w=A(_),D=I(_,"DIV",{id:!0,class:!0});var J=E(D);k=G(J,e[2]),J.forEach(g),z=A(_),m=I(_,"DIV",{id:!0,class:!0});var S=E(m);for(let B=0;B<a.length;B+=1)a[B].l(S);q=A(S),F=G(S,e[4]),S.forEach(g),_.forEach(g),h.forEach(g),this.h()},h(){K(i.src,o=e[0])||c(i,"src",o),c(i,"alt","testo"),c(i,"class","svelte-bk3p78"),c(s,"id","sin"),c(s,"class","svelte-bk3p78"),c(r,"id","tit"),c(r,"class","svelte-bk3p78"),c(D,"id","min_tit"),c(D,"class","svelte-bk3p78"),c(m,"id","text"),c(m,"class","svelte-bk3p78"),c(u,"id","des"),c(u,"class","svelte-bk3p78"),c(t,"id","tutto"),c(t,"class","svelte-bk3p78")},m(l,h){Q(l,t,h),f(t,s),f(s,i),f(t,v),f(t,u),f(u,r),f(r,d),f(u,w),f(u,D),f(D,k),f(u,z),f(u,m);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(m,null);f(m,q),f(m,F)},p(l,[h]){if(h&1&&!K(i.src,o=l[0])&&c(i,"src",o),h&2&&M(d,l[1]),h&4&&M(k,l[2]),h&8){V=N(l[3]);let n;for(n=0;n<V.length;n+=1){const _=O(l,V,n);a[n]?a[n].p(_,h):(a[n]=P(_),a[n].c(),a[n].m(m,q))}for(;n<a.length;n+=1)a[n].d(1);a.length=V.length}h&16&&M(F,l[4])},i:L,o:L,d(l){l&&g(t),W(a,l)}}}function Y(e,t,s){let{url:i}=t,{titolo:o}=t,{min_titolo:v}=t,{testo1:u=""}=t,{testo2:r=""}=t;return e.$$set=d=>{"url"in d&&s(0,i=d.url),"titolo"in d&&s(1,o=d.titolo),"min_titolo"in d&&s(2,v=d.min_titolo),"testo1"in d&&s(3,u=d.testo1),"testo2"in d&&s(4,r=d.testo2)},[i,o,v,u,r]}class y extends T{constructor(t){super(),U(this,t,Y,X,R,{url:0,titolo:1,min_titolo:2,testo1:3,testo2:4})}}export{y as F};
