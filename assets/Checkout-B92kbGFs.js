import{u as a,a as l,j as e,t,m as r,g as h,n as p}from"./index-BKWdIkDK.js";const m=()=>{const d=a(),n=l(s=>{var i;return(i=s==null?void 0:s.products)==null?void 0:i.carts});return e.jsxs("div",{children:[e.jsx("span",{className:"cartText",children:"Cart"}),e.jsxs("div",{className:"cartFrame",children:[n==null?void 0:n.map((s,i)=>{var o,c;return e.jsxs("div",{className:"cartContent",children:[e.jsxs("div",{className:"cartContentDesc",children:[e.jsx("span",{children:t((o=s==null?void 0:s.product)==null?void 0:o.name,12)}),e.jsxs("span",{children:[(c=s==null?void 0:s.product)==null?void 0:c.price,"₺"]})]}),e.jsxs("div",{className:"cartContentCount",children:[e.jsx("span",{onClick:()=>d(r(s==null?void 0:s.product)),children:"-"}),e.jsx("span",{children:s==null?void 0:s.quantity}),e.jsx("span",{onClick:()=>d(h(s==null?void 0:s.product)),children:"+"})]})]},i)}),(n==null?void 0:n.length)===0&&e.jsx("span",{className:"emptyCardText",children:"No items in the cart"})]})]})},u=()=>{const d=a(),n=l(s=>s.products.totalCartPrice);return e.jsxs("div",{children:[e.jsx("span",{className:"cartText",children:"Checkout"}),e.jsxs("div",{className:"cartFrame",children:[e.jsxs("span",{children:["Total Price:"," ",e.jsx("span",{children:n!=null&&n.toFixed(2)?`${n.toFixed(2)}₺`:"0₺"})]}),e.jsx("button",{className:"primaryButton",disabled:n===0,onClick:()=>d(p()),children:"Checkout"})]})]})};export{m as C,u as a};