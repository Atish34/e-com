import{i as d,f as c,r as p,B as u,j as e,k as x}from"./index-8e8d52bc.js";import{u as h,c as f,a as i}from"./index.esm-49d097d0.js";import{C as j}from"./Container-50a3288c.js";import{R as b}from"./Row-80ea26d8.js";import{C as g}from"./Col-2dcf0cc3.js";import{C as o}from"./Card-f48d70c4.js";import{B as N}from"./Button-03067735.js";import"./ThemeProvider-37a6230a.js";import"./CardHeaderContext-0d177852.js";import"./Button-84a9ecbb.js";const $=()=>{const[l,{isError:v,isLoading:C,isSuccess:t,error:w}]=d(),m=c(),s=h({enableReinitialize:!0,initialValues:{name:"",email:"",mobile:"",password:""},validationSchema:f({name:i().required("Enter Name"),email:i().required("Enter email"),mobile:i().required("Enter mobile"),password:i().required("Enter mobile")}),onSubmit:(r,{resetForm:n})=>{l(r),n()}}),a=r=>x({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return p.useEffect(()=>{t&&(u.success("Custemor register success"),m("/login"))},[t]),e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(b,{children:e.jsx(g,{sm:{span:6,offset:3},children:e.jsxs(o,{children:[e.jsx(o.Header,{children:"Register"}),e.jsx(o.Body,{children:e.jsxs("form",{onSubmit:s.handleSubmit,children:[e.jsx("input",{className:a("name"),...s.getFieldProps("name"),type:"text",placeholder:"Name"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.name}),e.jsx("input",{className:a("email"),...s.getFieldProps("email"),type:"email",placeholder:"Email"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.email}),e.jsx("input",{className:a("mobile"),...s.getFieldProps("mobile"),placeholder:"Mobile no"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.mobile}),e.jsx("input",{className:a("password"),...s.getFieldProps("password"),type:"password",placeholder:"Password"}),e.jsx("span",{className:"invalid-feedback",children:s.errors.password}),e.jsx(N,{variant:"primary",className:"w-100",type:"submit",children:"Register"})]})})]})})})})})};export{$ as default};
