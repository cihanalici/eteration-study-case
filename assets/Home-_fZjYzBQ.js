import{c as w,j as e,u as v,r as j,s as F,a as m,I as p,b as g,d as k,e as T,t as b,i as u,f as y,g as L,h as H,k as B,S as M}from"./index-BKWdIkDK.js";import{C as R,a as O}from"./Checkout-B92kbGFs.js";/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var E=w("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var I=w("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]);const z=()=>e.jsxs("div",{className:"apiErrorDiv",children:[e.jsx("h1",{children:"API Error"}),e.jsx("p",{children:"Sorry, we were unable to get the data from the server."})]}),D=()=>{const c=v(),[n,o]=j.useState(""),t=h=>{o(h.target.value),c(F(h.target.value))};return e.jsxs("div",{children:[e.jsx("span",{className:"cartText",children:"Sort By"}),e.jsxs("div",{className:"cartFrame",children:[e.jsxs("div",{className:"cartRadio",children:[e.jsx("input",{type:"radio",id:"newToOld",name:"sort",value:"newToOld",checked:n==="newToOld",onChange:t}),e.jsx("label",{htmlFor:"newToOld",children:"New to Old"})]}),e.jsxs("div",{className:"cartRadio",children:[e.jsx("input",{type:"radio",id:"oldToNew",name:"sort",value:"oldToNew",checked:n==="oldToNew",onChange:t}),e.jsx("label",{htmlFor:"oldToNew",children:"Old to New"})]}),e.jsxs("div",{className:"cartRadio",children:[e.jsx("input",{type:"radio",id:"priceHighToLow",name:"sort",value:"priceHighToLow",checked:n==="priceHighToLow",onChange:t}),e.jsx("label",{htmlFor:"priceHighToLow",children:"Price High to Low"})]}),e.jsxs("div",{className:"cartRadio",children:[e.jsx("input",{type:"radio",id:"priceLowToHigh",name:"sort",value:"priceLowToHigh",checked:n==="priceLowToHigh",onChange:t}),e.jsx("label",{htmlFor:"priceLowToHigh",children:"Price Low to High"})]})]})]})},A=()=>{const c=v(),n=m(a=>a.products.brands),[o,t]=j.useState(""),[h,i]=j.useState(""),d=a=>{const l=a.target.value;o===l?(t(""),c(g(""))):(t(l),c(g(l)))},x=a=>{i(a.target.value)},r=n==null?void 0:n.filter(a=>{var l;return(l=a==null?void 0:a.toLowerCase())==null?void 0:l.includes(h==null?void 0:h.toLowerCase())});return e.jsxs("div",{children:[e.jsx("span",{className:"cartText",children:"Brands"}),e.jsxs("div",{className:"cartFrame",children:[e.jsxs("div",{className:"searchDiv",children:[e.jsx(p,{size:20,color:"#918888"}),e.jsx("input",{className:"searchInput",type:"text",placeholder:"Search",value:h,onChange:x})]}),e.jsx("div",{className:"cartsCheckboxFrame",children:r==null?void 0:r.map((a,l)=>e.jsxs("div",{className:"cartCheckbox",children:[e.jsx("input",{type:"checkbox",id:a,name:"brand",value:a,checked:o===a,onChange:d}),e.jsx("label",{htmlFor:a,children:a})]},l))})]})]})},$=()=>{const c=v(),n=m(a=>a.products.models),[o,t]=j.useState(""),[h,i]=j.useState(""),d=a=>{const l=a.target.value;o===l?(t(""),c(k(""))):(t(l),c(k(l)))},x=a=>{i(a.target.value)},r=n==null?void 0:n.filter(a=>{var l;return(l=a==null?void 0:a.toLowerCase())==null?void 0:l.includes(h==null?void 0:h.toLowerCase())});return e.jsxs("div",{children:[e.jsx("span",{className:"cartText",children:"Models"}),e.jsxs("div",{className:"cartFrame",children:[e.jsxs("div",{className:"searchDiv",children:[e.jsx(p,{size:20,color:"#918888"}),e.jsx("input",{className:"searchInput",type:"text",placeholder:"Search",value:h,onChange:x})]}),e.jsx("div",{className:"cartsCheckboxFrame",children:r==null?void 0:r.map((a,l)=>e.jsxs("div",{className:"cartCheckbox",children:[e.jsx("input",{type:"checkbox",id:a,name:"model",value:a,checked:o===a,onChange:d}),e.jsx("label",{htmlFor:a,children:a})]},l))})]})]})},P=({currentPage:c,totalPages:n,onPageChange:o})=>{const t=i=>{i>=1&&i<=n&&o(i)},h=()=>{const i=[];if(n<=5)for(let d=1;d<=n;d++)i.push(e.jsx("button",{onClick:()=>t(d),className:c===d?"active":"",children:d},d));else{i==null||i.push(e.jsx("button",{onClick:()=>t(1),className:c===1?"active":"",children:"1"},1)),c>3&&i.push(e.jsx("span",{children:"..."},"dots1"));const d=Math==null?void 0:Math.max(2,c-1),x=Math==null?void 0:Math.min(n-1,c+1);for(let r=d;r<=x;r++)i==null||i.push(e.jsx("button",{onClick:()=>t(r),className:c===r?"active":"",children:r},r));c<n-2&&(i==null||i.push(e.jsx("span",{children:"..."},"dots2"))),i==null||i.push(e.jsx("button",{onClick:()=>t(n),className:c===n?"active":"",children:n},n))}return i};return e.jsxs("div",{className:"pagination",children:[e.jsx("button",{onClick:()=>t(c-1),disabled:c===1,children:e.jsx(E,{size:16})}),h(),e.jsx("button",{onClick:()=>t(c+1),disabled:c===n,children:e.jsx(I,{size:16})})]})},G=()=>{var f,S;const c=T(),n=v(),o=m(s=>s.products.products),t=m(s=>s.products.carts),h=m(s=>s.products.filteredProducts),i=12,[d,x]=j.useState(1),r=(f=h||o)==null?void 0:f.slice((d-1)*i,d*i),a=Math==null?void 0:Math.ceil(((S=h||o)==null?void 0:S.length)/i),l=s=>{const C=o==null?void 0:o.find(N=>(N==null?void 0:N.id)===s);if(C)if(u(s,t)){n(y(C));return}else n(L(C))};return(r==null?void 0:r.length)===0?e.jsx("div",{className:"noProductFound",children:"No product found"}):e.jsxs("div",{className:"productsMain",children:[e.jsx("div",{className:"productsFrame",children:r==null?void 0:r.map(s=>e.jsxs("div",{className:"productCard",children:[e.jsx("img",{src:(s==null?void 0:s.image)||"src/assets/placeholder.png",alt:"product",onClick:()=>c(`/product/${s==null?void 0:s.id}`)}),e.jsxs("span",{className:"productPrice",onClick:()=>c(`/product/${s==null?void 0:s.id}`),children:[s==null?void 0:s.price," ₺"]}),e.jsx("span",{className:"productName",onClick:()=>c(`/product/${s==null?void 0:s.id}`),children:b(s==null?void 0:s.name,18)}),e.jsx("button",{className:u((s==null?void 0:s.id)||"",t)?"removeButton":"primaryButton",onClick:()=>l((s==null?void 0:s.id)||""),children:u((s==null?void 0:s.id)||"",t)?"Remove from Cart":"Add to Cart"})]},s==null?void 0:s.id))}),e.jsx(P,{currentPage:d,totalPages:a,onPageChange:x})]})},J=()=>{const c=v(),{isError:n,isLoading:o}=H();return j.useEffect(()=>{c(B())},[c]),o?e.jsx(M,{}):n?e.jsx(z,{}):e.jsxs("div",{className:"mainFrame",children:[e.jsxs("div",{className:"cartsFrame",children:[e.jsx(D,{}),e.jsx(A,{}),e.jsx($,{})]}),e.jsx(G,{}),e.jsxs("div",{className:"cartsFrame",children:[e.jsx(R,{}),e.jsx(O,{})]})]})};export{J as default};