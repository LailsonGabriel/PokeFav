(this["webpackJsonppc-api"]=this["webpackJsonppc-api"]||[]).push([[0],{26:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(10),o=n.n(c),s=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),a=n(8),i=n(2),u=n(3),A=n(1),f=Object(r.createContext)(),j=function(e){var t=e.children,n=Object(r.useState)([]),c=Object(u.a)(n,2),o=c[0],s=c[1],a=Object(r.useState)([]),i=Object(u.a)(a,2),j=i[0],l=i[1],b=Object(r.useState)([]),v=Object(u.a)(b,2),O={dataAPI:o,setDataAPI:s,currentPokemon:j,setCurrentPokemon:l,favoritePokemons:v[0],setFavoritePokemons:v[1]};return Object(A.jsx)(f.Provider,{value:O,children:t})},l=n(4),b=n.n(l),v=n(6);function O(e){return x.apply(this,arguments)}function x(){return(x=Object(v.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(9);function m(){var e=Object(r.useContext)(f),t=e.dataAPI,n=e.setDataAPI;function c(e){return o.apply(this,arguments)}function o(){return(o=Object(v.a)(b.a.mark((function e(r){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("next"===r?t.next:t.previous);case 2:c=e.sent,n(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(A.jsxs)("div",{children:[Object(A.jsx)("button",{type:"button",className:"button",disabled:null===t.previous&&!0,onClick:function(){return c("previous")},children:Object(A.jsx)("p",{children:"previous"})}),Object(A.jsx)("button",{type:"button",className:"button",onClick:function(){return c("next")},children:Object(A.jsx)("p",{children:"Next"})})]})}var d=n(20),p=n.n(d),y=n(21),h={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#333",color:"white"}},X=n(14),F=n(15);n(40);function P(e){var t=e.fav,n=e.favTrue,r=e.favFalse,c=e.setFav,o=e.favoritePokemons,s=e.setFavoritePokemons,a=e.name,i=e.current;function u(e){var n=JSON.parse(localStorage.getItem("favoritePokemons"));if(!n.some((function(t){return t===e}))){if(20===n.length)return F.b.warn("Maximum Capacity 20 Pokemons!");c(!t);var r={name:i.forms[0].name,picture:i.sprites.front_default};s([].concat(Object(X.a)(o),[r])),localStorage.setItem("favoritePokemons",JSON.stringify([].concat(Object(X.a)(n),[r])))}}return Object(A.jsxs)("span",{className:"button-favorite",children:[Object(A.jsx)(F.a,{}),o.some((function(e){return e.name===a}))?Object(A.jsx)("img",{src:n,alt:"favorite",onClick:function(){return function(e){c(!t);var n=o.filter((function(t){return t.name!==e}));localStorage.setItem("favoritePokemons",JSON.stringify(n)),s(n)}(a)}}):Object(A.jsx)("img",{src:r,alt:"favorite",onClick:function(){return u(a)}})]})}function E(){var e=Object(r.useContext)(f),t=e.currentPokemon,n=e.favoritePokemons,c=e.setFavoritePokemons,o=Object(r.useState)(!1),s=Object(u.a)(o,2),a=s[0],i=s[1];return t.name?Object(A.jsxs)("div",{className:"info-modal",children:[Object(A.jsx)("h1",{children:t.name}),Object(A.jsx)(P,{favTrue:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAX60lEQVR42u3deXAcV50H8F+/vmdGM6M5dMuHbBSXI2THG8eOI8eJnTjGCYFNSDDBy1YlQIpic+EUhKVYCqitJWyFIoQilU1thWxIAqQWsniB3TUBjDGxY+cgcS4fsS3Zui1Z0miOnu7X+4ctx3YkayTNzOsZfT9VvypbGql//d581d0z3T1EAAAAAAAAAAAAAAAAAAAAAAAAMDOS6AbyqXv58rrQ4cOLmGU1S7Y9X+K8QXLdOuI8RpIUIdcNkiQFmG2TxDkREbmKQo4sc+Y4J7ksJyTX7SdJ6nYZ6ySio1zT3rMCgf19y5e/1fT880nR6zhbdC9fXhdsb29WRkfnkevOlxynjoiqiKiK2baPK0qEOY4i2TZJrksuY8RVlVzXTUhEw0Q04DLWT4x1u7Lc4ajqEcfn2390zZqDFz/9dFr0+uVLyQa4d9myquB7762SLetyyXEuJdddJltWuFDL44yRqygHXcZecRVlj+3z/aVzzZpXFj73XNk8GUQZvOiieWZ39yrZspZLnC8j120t1FxyWeauLO93GXv99Dzu6lmxYu/8rVsxj4XUcd11RjIW22D5fA/bmvYGlyTXJRJajqKkbF3fZgUC9w/Nn79Y9BiVit5LLomlw+HbsobxhK1pHVz0PMpyJqvr261A4J8S9fWX7njgASZ6jMpCZ1ubkYpEbsoaxrOOLI+IDuxkZWvaAcvvf3CkoWGp6LHzmsHm5rpMRcXdtq5v54w5oufqgvOoql1Z03w0WVW1du+ddyqix67kjNTXL8ua5qOOogyKnsxpPwl0/Q0rEPjS4EUXxUSPpyidbW3G6S3tNi5Jng7thFtnVT1u+f0Pjsyd2yx6PD2tY/16LR0Ob7Z1fbfoXaq8PgEYy2QN48lEXd0y0WNcLEPz58+xfL4HHUU5IXr881Vcklxb17elotEbd3/xi9jFHtO9YoUvU1Fxt6OqHaInqaBPACI3q+svjFZVrRU95oUyUl/fmjXNp7kkZUWPd0H3rjTt3XQ4fPvxK6/URI+5MMfb2rR0MHi3oyhdoiek2JXV9R2j1dVXip6DfEnU17dkDeM/vfDCYjHLUdWj6VDo9gO33jq7jpNT0egnbFU9JHoChG+RDWPrSEPDItHzMV1D8+fXWT7fE6V6fJvHLfKbyVhsg+j5KLhEXV1z1jBeED3gXirOWNby+/+1v7U1IHp+ctW5Zo2Wqaj4siPLo6LHz0uVNc2tw42NTaLnJ++OrV2rZCoq/pEzlhE9yF4tR1GOpmKxjaLnajLJqqpVtqa9KXq8vFqcsdFMMHj/gZtvLo/d6kRd3SJb0/aIHthSKE7kZn2+fz+xeHFQ9Lydr2vlSsPy+x+a7bvLuZat6y8m6usXip63GUmHw7c7jGE3a4rlqOrhZFXVStHzNyZRW9tiq+obosel1MphbCRdWfkZ0fM3ZX2XXOKz/P4nRQ9gKReXpGw6FPrSz4mEvueYDodv54ylRI9HqRYnci2///HOlSsN0bnMyfDcuQ3YZc5fWT7fzwY+/GFfsefx6JVXGpbf/7jo9S+XsjVt99C8eXWi83lBo9XVrY6iHBc9WOVWtqa9PDx3btEmf2jBgpit6ztEr3e5laMoHaPV1a2iczquZCx2FWdsSPQglWs5itKRrK4u+BVPww0NCx1FOSB6fcu1HFkeSsVi3jqJJ11ZucHBcVIxJn8wFY9fVqh5TNTWLnNkuUf0epZ7OYylUtGoN078SFdWbuCShPd3i1ScsZFC/AVPRaOXObKMPajizWMmXVkpNsTJePwqbHnFhDgdjbblLbyx2GU4/Cl+OYylkvH4VULCO1pTsxSTLjTEQ4nq6ktnOo+JmpqljiyX7HXXpV6csaHRmpri3gBiZM6cBrzaLL4cWe4bqa+f9oXmw42NTY4sz7qrwbxWjqIcH5kzp6Eo4e1futRna9rLolcadWbyDw0tWDDlu34MNzVFHFV9V3T/qFNla9rLJ5YsKfz7/TjDyntl6/qOo1ddlfPF5e3r1mlZXd8uum/UuWX5/U8VNLzpcPh20SuJmnDyH5vCH+FHRfeLGr/S4fBnCxLeRG3tIlyY4N3ipyZ/0hPn05WVm8vpnmPlVg5jqURtbc43ecjpRPmOj35UMQYGnmScF/2cXMiNRETq8PCjidraCc/WStTVLVaHhh4r2bv5zwKMc8M4ceKpzmuvzd/1xJlg8Mui/zKhcitb0/7asWrVB6586Vi92rA17VXR/aFyq0ww+EBewjs8Z04TLicrrbICgQfPn0crEPgX0X2hci/OWGqkoWHSGwJMujeVNYytSjp9Q94251BwriTxdDx+ua+39yUiotHq6svM3t4XJdfF/YxLiG0Yv1HT6esv9JgLBjgZj19j9PVtwzFT6XE0bV/3FVf8DRFRzc6de2TL8uZlbDAhl4jSsdhHfP39/zPlH951zz0Mx0ylXZmKivszFRX3i+4DNf2yNe2NVz//+Qn3nCbcuKYjkVv1gYGfif4rBNPHZTlBRMQcp2RuWQsflAmHP22cPPnMeN8bN9kv3nsvUxKJb4huHGaGOU4A4S19SjL5tZfvvHPcrI67BU5FIh83BgZ+KbpxADglE4ncbAwM/OL8r4+bamV0dIvohgHgffIEmfxAgEfq65fKmUzeLhYHgJmTM5lVifr6D1z//YEAGwMDX8DbRgDeIhGRPjBw5/lfPyfAnatW+ZhlbRLdLAB8ELOsTV2XX37Oi5LnBDjy1ls3Msfx3OfyAMCpdxUq3377xnO+dvZ/5FTqU6KbBICJyen0ORk9E+CuFSsCzLa9ca9aABgXy2bXd61YcWYv+UyAK/fvX88cJ+fbsgBA8THH0Sr3719/5v9j/5BTqeun9ysBoJjkVOojY/8+E2CJ82tENwYAk5M4P3cLPNjc3MQsa47oxgBgcrJlNQw2NzcRnQ6w2dvbhpM3AEqH2dNzJdHpAMuZzOWiGwKA3MmWtYLodIAlx1kmuiEAyN1YZtmf772XSZy3iG4IAHIncd668+67mTSwePHCyrfeOiC6IQCYmpOLFl3EzK6uaX+6HQCIY/T0NDNm25PeexYAvIfZ9kLGbHu+6EYAYOqYbc9l5Lp1ohsBgGlw3QYEGKBUuW4NkziPiO4DAKZO4jzCJCIEGKAESUQRxiUJt9ABKEFckoJMIsKHdgOUIEmSfIw5jug+AGAamG2T5J76FEMAKEGMJFwJDFCSJIkYl2XRbQDANHBZJsZlmYtuBACmjssyZ8xx+kU3AgBTxxynn7mMDYtuBACmzmVsmJEk9YpuBACmQZJ6mStJnaL7AIBpkKRO5jLWLroPAJg6zlg7cxXlkOhGAGDqXEU5xFxVfUd0IwAwda6qvsNONjW9g3MpAUqLS0Qnm5rekYiIbE3rky0rJropAMiNo2n9imXFT306oSS9IrohAJiC05llRERcll8S3Q8A5G4ss4yIyPb7d4puCAByN5ZZRkQ0tGDBX1zGbNFNAcDkXMbsoQUL/kJEdOZi4Kyuv6hkMitFNwcAF2br+i719EcCs7EvurL8f6IbA4DJnZ3VMwG2QqHfim4MACaXPSurZwK8b9OmlxxVxZVJAB7mqGrvG5s2nXnX6JwbYmVN8zEllfq86CYBYHy2af6bmkrdOfZ/ds43/f7nRDcIABM7P6PnBPjQxo1/xG40gDc5qtp7aOPGP579tQ/cUzZrmg8rqdTdopsFgHPZpvkDNZW65+yvsfMflI5Gn8TVSQDe4tKpbJ7/9XHv6m7r+qtyJrNUdNMAcIqj668pmcwl53+dTfDgx0Q3DADvmyiT4wZ48KKLnuGyjNvNAngAl+Xhk83Nz4z3vXEDXLNnz7Cj6z8W3TgAEDm6/h/Ve/eOu0FlE/1QJhZ7xJUkfOwKgECuJPFMLPbwRN+fMMAV7e0HHcN4XvQKAMxmjmE8X9HefnCi77ML/bAVCj2It5QAxHDpVAYv9JhJPxw4axjblHT6GtErAzDb2IbxOzWdvvZCj2GT/RIrFPo2tsIAxXV66/vtyR436RaYiChrGC8o6fRa0SsFMFvYhvF7NZ1eN9njJt0CExFlwuGvYysMUBwuEVnh8NdzeWxOW2AioqxhbFXS6RtErxxAubMN47/VdPqjuTw2py0wEVEmEvkq3hcGKCxXkngmEvlqro/POcCBzs59tmn+WPQKApQz2zR/HOjs3Jfr43MOMBFRqrr661yWk6JXEqAccVlOpqqrczr2HTOlAIcOH+50TPOfRa8oQDlyTPOfQ4cPd07lZ6YUYCKiviVLvsdV9T3RKwtQTriqvte3ZMn3pvpzOb8KfbZULHaj0d//X6JXGqBcpGOxj5n9/b+a6s9NK8BERFnT3KqkUnhbCWCGpvK20fmmvAs9JhWP38UZwwtaADPAGUumqqrumu7PTzvAwfb2I3Yg8A3RAwBQyuxA4BvB9vYj0/35aQeYiKhn9ervO5r2iuhBAChFjqa91r1mzfdn8jumfQw8JlFTs8zX07Nbcl1F9IAAlApXkuxUTc0Kf1fXjDaAM9oCExEFurtfsX2+74oeEIBSYvt8351peInyEGAiop7W1m87qprz6V8As5mjqvt6ly6d9FrfXMx4F3rMaE3NMhO70gAX5EqSnaqqWuHv6cnLa0d52QITEfm7u1/JBgLfFDc0AN6XDQS+ma/wEuUxwERE/W1t33F0fVfxhwXA+xxdf6lv9erv5PN35m0Xekyivn6h2dX1KuM8ULyhAfA2zlgiVVt7SeD48YMz/23vy+sWmIgocPz4wWwo9MXiDQ2A92VDobvyHV6iAmyBzzTs8z2rJJObCjssAN5n+3w/VZPJTxXid+d9CzxmaN68L+CyQ5jtuKoeGZ479wuF+v0F2wITESWrqi41+vp2Sq6rFXI5AF7kSpKVjsdX+3p7XyrUMgq2BSYi8vX27rWCwa8UchkAXmUFg18pZHiJChxgIqLtn/zkD2zT/EWhlwPgJbZp/uL369f/oNDLKegu9JgTixeHQwcO7JGz2YXFWB6ASFxVD55cuHB59O23TxZ6WUUJMBHRaE1Nq9Hbu5txbhRrmQDFxhlLp+PxFf6enteLsbyC70KP8Xd3v54NhT6Hj2iBcuUSUTYU+lyxwktUxAATERmDgz+x/f4fFnOZAMVi+/0/NAYHf1LMZRY1wEREPStXbnF0/c/FXi5AITm6/qeeFSu2FHu5RTsGPtvQ/Pk1gY6OPcy2G0QsHyCfuKIcSzQ2Lg8dPtxd7GULCTDRqZM89P7+HXhRC0oZZyydicVW+3p794pYftF3ocf4env3ZkOhO/CiFpSq0y9a3SEqvEQCA0xEZAwOPmNXVOT1+kiAYrErKr5jDA4+I7IHoQEmInpt8+av2YbxvOg+AKbCNs1fvXHbbV8T3YewY+Cz9be2BsLvvLNDtqylonsBmIyjaa8NLlq0Ov766wnRvXgiwEREicbGBrOzczdznDrRvQBMhCtKd6q2dnmgo+OY6F6IPBRgIqLR6upLjb6+7Yxzn+heAM7HGUumY7E1foEvWp1P+DHw2fw9PXutcPjTriRx0b0AnM2VJG6Fw5/2UniJPBZgIiJzYOD5bDBY9DNaAC4kGwxuMQcGPPdiq6d2oc+WCQQe0RKJfxDdB4AVCPxQTySm/RGgheS5LfCYIzfccJ9tmp77iwezi22azx/duPE+0X1MxLNbYCKiwZYWX8WBAy/ImcxK0b3A7OPo+q6RD31oXeW+fZ79IHtPB5iIaGjBgpi/vX2nnM02i+4FZg+uqvsTc+ZcETp0qF90Lxfi+QATEQ03Njb5Ozt3MsepEd0LlD8uy93J2torKo4d8/xtkUsiwESnP0i8t/cPEudB0b1A+XIZG05WVV0d6O7O2weQFZJnX8Q6X6C7+5V0JHKzK0mW6F6gPLmSZKUjkZtLJbxEJRRgIiJff//vMpWVf4cTPSDfXEnimcrKv/f19/9OdC9TUVIBJiIyBwZ+boVCd+E6YsgXl4isUOgec2Dgp6J7maqSCzARkXHy5I+yweC3RPcB5SEbDH7LOHmyJG+2WDIvYo3HCgQeUXG2FsxANhD4kZZIlOzH4ZbkFnjM65s332P7fELviAClyzbNZ/Zt3uzJUyRnjY5167Ssaf7aJXJRqFwra5q/br/mGnxqphcMXHyxz9b17aKfFKjSKFvXtw9cfDGuOfeS3paWoK1pe0Q/OVDeLltV9/S2tIRFP1/zpaRfxDrfcFNTzHfs2HbZshaL7gW8x9G0t0bnzFkTOnjQ0+c3T0VZBZiIaGjevLrAsWPbmW3jo0zhDK4oB0fr69cEjx7tFN1LPpVdgImIEo2N84yurh0yProFiMhRlGOp2trVFR0dR0T3km9lGWAiopH6+mZfd/d2XME0u3FZ7k5VV68JdHbuF91LIZRtgImIktXVLXp//3bmOBHRvUDxcVkeyMRia3w9PftE91IoJX0ix2R8PT37kvH4dVyWh0X3AsXFZXk4GY9fV87hJSrzLfCYdDS6Uhsc3CZxHhDdCxSey1jCqqy81jhxYpfoXgqtrLfAY4wTJ3ZlotHrOWOevbcR5AdnLJmORq+fDeElmiUBJiIy+/r+lI5GP8YZS4vuBQqDM5ZOR6N/6+vr+5PoXqBA0pHIBi5JGdFnBKHyW1ySMunKyg2in19QBJlw+AaEuHyKS1I2U1l5g+jnFRRROhL5OJekrOgnH2rm4U1FIjeJfj6BAMlo9FYuSY7oJyFq2uF1ktHoraKfRyBQMhrdhBCXXp0O722inz/gAalI5DaEuHSKS5KTikQQXnhfOhzejBB7v7gkOZlweLPo5wt4UCYUQog9XFySnEwwiPDCxKxg8DMIsfeKS5JjBYOfEf38gBJgVVQgxB4qLklOJhRCeCF3mWAQu9MeKGx5YdoQYvHhxTEvzAhe2EJ4ocQhxALCGwohvJA/eJ+4eOFN431eKAScsVX48KYqKxFeKJwkQlyw8CZxeiQUw+kLIHApYv7Cm01Go5tEzyvMIslo9BMIcd7C+wnR8wmzEG4KMPPwpnExPoiUqazE7XmmF94MboMDnpAJhzdwxhDiXMPLWCYTDm8UPW8AZySj0Q0OYynR4fB6OYylUtEo7h4J3jMaj1+DEF84vKPx+HrR8wQwodF4fC1nbFR0WLxWnLHR0Xh8rej5AZhUKhZr44yNiA6NV4ozNpKKxa4UPS8AOUtHIis5Y0OiwyO6OGND6Wh0pej5AJiyZDx+mSPLg6JDJKocWR5MxeOXiZ4HgGkbqam51JHlE6LDJCK8IzU1l4oef4AZS9TWLnVkuU90qIoY3r5Ebe1S0eMOkDfJ6uoWR5Z7RIerCOHtSVZXt4geb4C8S1VVLXIUpUt0yAoY3q5UVdUi0eMMUDAj9fXNtqIcFx22fJetKMdH6uubRY8vQMENNTYudBTlqOjQ5W3LqyhHhxobF4oeV4CiSTQ0zHMU5ZDo8OUhvIcSDQ3zRI8nQNGN1tU1OIpyQHQIZxDeA6N1dQ2ixxFAmJE5c+psVX1XdBinfMyrqu8mGhvrRI8fgHADCxbU2Jr2puhQTiG8bw4sWFAjetwAPGNw4cIqR1X/KjqcOYT3r4MLF1aJHi8Azxlpaoo4qvqy6JBOeMyrqi8PNzXFRI8TgGeNzJsXtjVtt+iwfmDLq2l7RubNC4seHwDP67v44nBW118UHdqxyur67hOLFiG8ALnqWbIkaOv6Dg+Ed2dPa2tQ9HgAlJwTra0BW9dfELbbrOt/6G9tDYgeB4CSNdjS4rN1/X8FhHfbYEuLT/T6A5S8E0uXGlnD+G3RdpsN47cDra2G6PUGKBsdbW2GZZpbCx1eyzR/feyKKxBegHw7sm6dljXNXxZsy2uavzxy9dWa6PUEKFvta9dqtmk+l/djXtN8rmPtWoQXoNA6r75asU3z2TyG99njV1+tiF4vgFmjq61Nyfp8T814t9nne7qrrQ3hBSi2A7fcomT8/ienG96M3//UoZtuQngBRHnts59VMoHAE1MObyDwxGt33IHwAoi26557mBUIPJ7zW0WBwOO77rqLie4bAE7buWULy/r9j056zOv3P7pzyxaEF8BrdjzwAMv6/Y9cILyP7HjgAYQXwKu23Xcfy/r9D48T3oe33Xcfwgvgdb+55RZmBQIPnXXM+9BvbrkF4QUoJZmKiocyFRUPie4DAAAAAAAAAAAAAAAAAAAAAAAAwLv+H4ta4vxgT9UjAAAAAElFTkSuQmCC",favFalse:"data:image/png;base64,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",fav:a,setFav:i,favoritePokemons:n,setFavoritePokemons:c,name:t.name,current:t}),Object(A.jsx)("img",{src:t&&t.sprites.other.home.front_default,alt:"pokemon"}),Object(A.jsx)("red",{}),Object(A.jsx)("h3",{children:"Type"}),Object(A.jsx)("p",{children:t.types[0].type.name}),Object(A.jsx)("h3",{children:"Abilities"}),t.abilities.map((function(e){var t=e.ability.name;return Object(A.jsx)("p",{children:t})}))]}):Object(A.jsx)("p",{children:"loading..."})}function g(e){var t=e.name,n=e.url,c=e.image,o=Object(r.useContext)(f).setCurrentPokemon,s=Object(r.useState)(""),a=Object(u.a)(s,2),i=a[0],j=a[1],l=Object(r.useState)(!1),x=Object(u.a)(l,2),m=x[0],d=x[1];function X(){d(!1),o([])}function F(){return(F=Object(v.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:t=e.sent,j(t.sprites.front_default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(A.jsxs)("div",{className:"card cards",children:[Object(A.jsxs)("div",{onClick:function(){d(!0),function(e){F.apply(this,arguments)}(t)},children:[c?Object(A.jsx)("img",{src:c,alt:"pokemon-phot"}):Object(A.jsx)("img",{src:i,alt:"pokemon-phot"}),Object(A.jsx)("p",{children:t})]}),Object(A.jsxs)(p.a,{isOpen:m,onRequestClose:X,style:h,contentLabel:"Example Modal",children:[Object(A.jsx)(y.a,{className:"fechar",onClick:X}),Object(A.jsx)(E,{})]})]})}function H(){var e=Object(r.useContext)(f).setDataAPI;return Object(r.useEffect)((function(){function t(){return(t=Object(v.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("https://pokeapi.co/api/v2/pokemon");case 2:n=t.sent,e(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{src:"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png",alt:"pokemon-logo",class:"pokemon-logo"}),Object(A.jsx)(a.b,{to:"/favorites",class:"favorite-btn",children:"See your favorites"})]})}function I(){var e=Object(r.useContext)(f),t=e.dataAPI,n=e.setFavoritePokemons;return Object(r.useEffect)((function(){null!==localStorage.getItem("favoritePokemons")?n(JSON.parse(localStorage.getItem("favoritePokemons"))):localStorage.setItem("favoritePokemons","[]")}),[n]),Object(A.jsx)("div",{className:"app",children:Object(A.jsxs)("div",{className:"all-pokemons",children:[Object(A.jsx)(H,{}),Object(A.jsx)("div",{className:"principal",children:t.results&&t.results.map((function(e,t){return Object(A.jsx)(g,{name:e.name,url:e.url},t)}))}),Object(A.jsx)(m,{})]})})}function Z(){var e=Object(r.useContext)(f),t=e.favoritePokemons,n=e.setFavoritePokemons;return Object(r.useEffect)((function(){null!==localStorage.getItem("favoritePokemons")?n(JSON.parse(localStorage.getItem("favoritePokemons"))):localStorage.setItem("favoritePokemons","[]")}),[n]),Object(A.jsx)("div",{className:"app",children:Object(A.jsxs)("div",{className:"all-pokemons",children:[Object(A.jsx)("button",{type:"button",className:"button",children:Object(A.jsx)(a.b,{to:"/",children:"Back"})}),Object(A.jsx)("div",{className:"principal",children:t.map((function(e,t){return Object(A.jsx)(g,{name:e.name,url:e.url,image:e.picture},t)}))})]})})}o.a.render(Object(A.jsx)(a.a,{children:Object(A.jsx)(j,{children:Object(A.jsxs)(i.c,{children:[Object(A.jsx)(i.a,{path:"/",element:Object(A.jsx)(I,{})}),Object(A.jsx)(i.a,{path:"/favorites",element:Object(A.jsx)(Z,{})})]})})}),document.getElementById("root")),s()},9:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.596a31be.chunk.js.map