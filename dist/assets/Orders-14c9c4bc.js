import{r as a,t as h,v as o,B as x,j as e}from"./index-8e8d52bc.js";import{C as j}from"./Container-50a3288c.js";import{T as u,f as p}from"./format-f13352eb.js";import{B as m}from"./Button-03067735.js";import"./ThemeProvider-37a6230a.js";import"./Button-84a9ecbb.js";const N=()=>{const[t,l]=a.useState({limit:1,skip:0}),[i,{data:d}]=h(),[n,{isSuccess:c}]=o();return a.useEffect(()=>{i(t)},[t]),a.useEffect(()=>{c&&x.success("status update success")},[c]),e.jsx(e.Fragment,{children:e.jsxs(j,{children:[e.jsxs("select",{onChange:s=>l({...t,limit:s.target.value}),className:"form-select my-3",children:[e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",children:"10"})]}),d&&e.jsxs(u,{className:"table table-dark table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"order id"}),e.jsx("th",{children:"Customer Name"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"City"}),e.jsx("th",{children:"payment"}),e.jsx("th",{children:"products"}),e.jsx("th",{children:"status"}),e.jsx("th",{children:"Order On"})]})}),e.jsx("tbody",{children:d&&d.result.map(s=>e.jsxs("tr",{className:`
            ${s.status==="delivered"&&"table-success"}
            ${s.status==="cancel"&&"table-danger"}
            `,children:[e.jsx("td",{children:s._id}),e.jsx("td",{children:s.customer.name}),e.jsx("td",{children:s.address}),e.jsx("td",{children:s.city}),e.jsx("td",{children:s.payment}),e.jsx("td",{children:s.products&&s.products.map(r=>e.jsxs("div",{className:"d-flex gap-3",children:[e.jsx("img",{src:r.hero[0],height:50,alt:""}),e.jsxs("div",{children:[e.jsx("h6",{children:r.name}),e.jsxs("h6",{children:["price : ",r.price]})]})]}))}),e.jsx("td",{children:e.jsxs("select",{onChange:r=>n({_id:s._id,status:r.target.value}),value:s.status,className:"form-select",children:[e.jsx("option",{value:"placed",children:"placed"}),e.jsx("option",{value:"delivered",children:"delivered"}),e.jsx("option",{value:"cancel",children:"cancel"})]})}),e.jsx("td",{children:p(s.createdAt,"dd-MM-yyyy")})]},s._id))})]}),d&&[...Array(Math.ceil(d.total/t.limit)).keys()].map(s=>e.jsx(m,{onClick:r=>l({...t,skip:s*t.limit}),children:s+1}))]})})};export{N as default};