import{G as h}from"./iconBase-66ecbed4.js";import{a as x,f as j,j as e}from"./index-8e8d52bc.js";function m(n){return h({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(n)}const f=({showCheckout:n=!0})=>{const{cart:l}=x(t=>t.bag),c=j(),s=()=>{const t=l.reduce((o,d)=>o+d.price,0),r=18*t/100,i=100,a=t+r+i;return{subtotal:t,tax:r,shipping:i,total:a}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-light p-3 h-25",children:[e.jsx("h5",{children:"Order summary"}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Subtotal"}),e.jsx("p",{children:s().subtotal})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Shipping estimate"}),e.jsx("p",{children:s().shipping})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("p",{children:"Tax estimate"}),e.jsx("p",{children:s().tax})]}),e.jsx("hr",{}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:"Order Total"}),e.jsx("strong",{children:s().total})]}),n&&e.jsx("button",{onClick:t=>c("/checkout"),className:"btn btn-primary m-2",children:"Checkout"})]})})};export{f as O,m as R};
