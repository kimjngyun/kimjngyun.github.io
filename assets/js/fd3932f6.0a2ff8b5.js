"use strict";(self.webpackChunktew=self.webpackChunktew||[]).push([[1],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return f}});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=r.createContext({}),c=function(t){var n=r.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=c(t.components);return r.createElement(l.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),h=c(e),f=a,m=h["".concat(l,".").concat(f)]||h[f]||u[f]||i;return e?r.createElement(m,o(o({ref:n},s),{},{components:e})):r.createElement(m,o({ref:n},s))}));function f(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,o=new Array(i);o[0]=h;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=e[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}h.displayName="MDXCreateElement"},5223:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=e(7462),a=e(3366),i=(e(7294),e(3905)),o=["components"],p={title:"Anti Hash Hack in Python",authors:["jngyun"],tags:["Python"]},l=void 0,c={permalink:"/2022/04/14/python-anti-hash-hack",editUrl:"https://github.com/kimjngyun/kimjngyun.github.io/edit/main/blog/2022-04-14-python-anti-hash-hack/index.md",source:"@site/blog/2022-04-14-python-anti-hash-hack/index.md",title:"Anti Hash Hack in Python",description:"## TL;DR",date:"2022-04-14T00:00:00.000Z",formattedDate:"2022\ub144 4\uc6d4 14\uc77c",tags:[{label:"Python",permalink:"/tags/python"}],readingTime:4.065,truncated:!1,authors:[{name:"Jeongyun Kim",title:"Writer",url:"https://github.com/kimjngyun",imageURL:"https://avatars.githubusercontent.com/u/63437430?v=4",key:"jngyun"}],frontMatter:{title:"Anti Hash Hack in Python",authors:["jngyun"],tags:["Python"]},prevItem:{title:"Asynchronous stack traces - why await beats Promese#then()",permalink:"/2022/06/06/async-stack-trace"},nextItem:{title:"Property Attribute",permalink:"/2022/01/19/property-attribute"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud574\uc2dc \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc815\ubcf4",id:"\ud574\uc2dc-\ud14c\uc774\ube14\uc5d0-\ub300\ud55c-\uac04\ub2e8\ud55c-\uc815\ubcf4",level:2},{value:"Python",id:"python",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:2},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45",level:2}],h={toc:u};function f(t){var n=t.components,p=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"tldr"},"TL;DR"),(0,i.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 \uc0c1\ud669\uc5d0\uc11c \ud30c\uc774\uc36c\uc758 dict\uc640 set\uc740 $O(n^2)$\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"\ud574\uc2dc-\ud14c\uc774\ube14\uc5d0-\ub300\ud55c-\uac04\ub2e8\ud55c-\uc815\ubcf4"},"\ud574\uc2dc \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc815\ubcf4"),(0,i.kt)("p",null,"Open-addressing hash table\uc740 hash\uac12 \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud588\uc744\ub54c Linked List\uc640 \uac19\uc740 \ucd94\uac00\uc801\uc778 \uba54\ubaa8\ub9ac \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0, hash table array\uc758 \ube48 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uc5ec\ub7ec \uc6d0\uc18c\uc758 \ud574\uc2dc\uac00 \ubc30\uc5f4\uc758 \uac19\uc740 \uc140\uc744 \uac00\ub974\ud0ac \uacbd\uc6b0, \ud574\uc2dc \ud14c\uc774\ube14\uc740 \uc124\uc815\ud55c \uaddc\uce59\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc140\uc744 \uac00\ub974\ud0a4\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubcf4\ud1b5 \uc11c\ub85c\uc18c\uc778 a, b\uc640 f(x) = (a","*","x + b)%size\uc744 \ud1b5\ud574 f(x), f(f(x)), f(f(f(x))), ... \uc640 \uac19\uc774 \ube48 \uacf5\uac04\uc774 \ubc1c\uacac \ub420 \ub54c\uae4c\uc9c0 \uc120\ud615 \ubcc0\ud658\uc744 \uc7ac\uadc0\uc801\uc73c\ub85c \ubc18\ubcf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"Python\uc740 2\uc758 \uac70\ub4ed\uc81c\uacf1 \uc0ac\uc774\uc988\uc758 \ubc30\uc5f4\uc744 \uac00\uc9c0\ub294 hash table\uc744 \uc774\uc6a9\ud558\uc5ec dict\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uc120\ud615 \ubcc0\ud658\ubcf4\ub2e4\ub294 \uc57d\uac04 \ub354 \ubcf5\uc7a1\ud55c f(x) = (5x + 1 + ",(0,i.kt)("em",{parentName:"p"},"preturb"),")%size \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c ","_","preturb","_","\uc758 \ucd08\uae30\uac12\uc740 hash\uc640 \uac19\uc9c0\ub9cc \ub9e4 \ub2e8\uacc4\ub9c8\ub2e4 32\ub85c \ub098\ub220\uc9c4\ub2e4. \uc774\uc5d0 \ub300\ud55c \uad6c\ud604 \ubc0f \uc790\uc138\ud55c \uc124\uba85\uc740 \uc544\ub798 \ub808\ud3ec\uc9c0\ud1a0\ub9ac\ub97c \ucc38\uace0\ud558\uba74 \uc88b\uc744 \ub4ef \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/python/cpython/blob/3.8/Objects/dictobject.c#L135"},"https://github.com/python/cpython/blob/3.8/Objects/dictobject.c#L135")),(0,i.kt)("p",null,"Python int \uc790\ub8cc\ud615\uc758 hash \ud568\uc218\ub294 \uac12 \uadf8\ub300\ub85c\uc774\uae30 \ub54c\ubb38\uc5d0 \uc608\uce21\ud558\uae30\uac00 \ub9e4\uc6b0 \uc27d\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> [hash(x) for x in range(10)]\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n")),(0,i.kt)("p",null,"\ub530\ub77c\uc11c \ud2b9\uc815 \ubc88\ud638\uc5d0 \ub300\ud574 \uac80\uc0c9\ud558\ub3c4\ub85d \ud558\ub294 \uc778\ub371\uc2a4\ub4e4\uc758 \uc2dc\ud000\uc2a4\ub97c \ucc3e\uace0 \uc120\uc810\ud55c\ub2e4\uba74, \ub515\uc154\ub108\ub9ac\uc5d0\uc11c \ud574\uc2dc \ucda9\ub3cc\uc744 \ud53c\ud558\uae30 \uc704\ud55c \ud0d0\uc0c9\uc744 \uc720\ubc1c\ud558\uace0 \uacb0\uad6d \uc2e4\ud589 \uc2dc\uac04\uc774 \uae38\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,i.kt)("p",null,"\uc6d0\uae00\uc5d0\uc11c\ub3c4 hack\uc758 \uc608\uc2dc\ub85c \uc0ac\uc6a9\ub41c \uc81c \ud480\uc774 \uc785\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\nfor _ in range(int(input())):\n  n = int(input())\n  l = list(map(int, input().split()))\n  d = defaultdict(int)\n  for i in range(n):\n    d[l[i]] += 1\n  MAX = 0\n  for i, v in d.items():\n    MAX = max(MAX, v)\n  t = n - MAX\n  a = 0\n  while MAX < n:\n    MAX *= 2\n    a += 1\n  print(a+t)\n")),(0,i.kt)("p",null,"hack input\uc744 \uc0dd\uc131\ud574\uc11c \ud14c\uc2a4\ud2b8\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from collections import defaultdict\nimport time\n\ndef solve(n, l):\n  d = defaultdict(int)\n  for i in range(n):\n    d[l[i]] += 1\n  MAX = 0\n  for i, v in d.items():\n    MAX = max(MAX, v)\n  t = n - MAX\n  a = 0\n  while MAX < n:\n    MAX *= 2\n    a += 1\n  print(a+t)\n\n\nmask = (1<<16)-1\nN = 10**5\nprefill = (1<<15) + 1\nl = [mask+1]\nx = 1\nfor i in range(1, prefill):\n  l.append(x)\n  x = x*5 + 1\n  x &= mask\nfor i in range(prefill, N):\n  l.append(0)\n\nstart = time.time()\nsolve(N, l)\nprint("time: ", time.time() - start)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"capture",src:e(8796).Z,width:"1060",height:"690"})),(0,i.kt)("h2",{id:"\ud574\uacb0\ucc45"},"\ud574\uacb0\ucc45"),(0,i.kt)("p",null,"str\uc73c\ub85c \uce90\uc2a4\ud305\ud558\uc5ec \ud574\uc2dc\ub97c \uc608\uce21\ud558\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud639\uc740 \uc6d0\uae00\uc758 \ud544\uc790\uac00 \uc18c\uac1c\ud55c \uac83\ucc98\ub7fc \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \ucee4\uc2a4\ud140 \ud0c0\uc785\uc744 \ub9cc\ub4e4\uace0 \ud574\uc2dc\ud568\uc218\ub97c \ub2e4\ub974\uac8c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from random import getrandbits\n\nRANDOM = getrandbits(32)\n\nclass Wrapper(int):\n    def __init__(self, x):\n        int.__init__(x)\n    def __hash__(self):\n        return super(Wrapper, self).__hash__() ^ RANDOM\n\nprint([hash(x) for x in range(5)])\n## [0, 1, 2, 3, 4]\nprint([hash(Wrapper(x)) for x in range(5)])\n## [2129021029, 2129021028, 2129021031, 2129021030, 2129021025]\nprint([hash(str(x)) for x in range(5)])\n## [-5039433375330228259, -3486952520122288577, -8645858109351545456, -7072236602376142849, 5720728269243863574]\n\n\nd = {}\nfor i in range(5):\n  d[Wrapper(i)] = i\nprint(d)\n## {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}\n")),(0,i.kt)("p",null,"\uc815\uc218\ud615\uc744 dict\uc758 key\ub85c \uc0ac\uc6a9\ud558\ub294 \ud480\uc774\ub294 \ud574\ub2f9 hack\uc5d0 \ucde8\uc57d\ud569\ub2c8\ub2e4. \uc870\uc2ec\ud558\ub3c4\ub85d \ud569\uc2dc\ub2e4!"),(0,i.kt)("p",null,"Ref:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codeforces.com/blog/entry/101817"},"https://codeforces.com/blog/entry/101817")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://foss.heptapod.net/pypy/pypy/-/issues/3725"},"https://foss.heptapod.net/pypy/pypy/-/issues/3725")))}f.isMDXComponent=!0},8796:function(t,n,e){n.Z=e.p+"assets/images/cap1-c2b89467fa0c24387648175cd589c60d.png"}}]);