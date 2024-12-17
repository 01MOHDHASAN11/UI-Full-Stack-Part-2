// UserRegister.jsx
import React from 'react'
import Formikpage from "./Formikpage.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup"
import axios from "axios"
const UserRegister = () => {
  return (
    <>
      <div className='container-fluid bg bg-dark login'>
        <h1 className='heading text-light'>Register Page</h1>
        <div className="paddingBottom">
        <Formik initialValues={{Name:"",Email:"",Number:"",Password:""}}
        
        validationSchema={yup.object({
            Name:yup.string().required("Name is required").min(4,"Must be minimum 4 characters").max(30,"Must be less than or equal to 30 characters"),
            Email:yup.string().required("Email is required"),
            Number:yup.string().matches(/^\d{10}$/, "Must be a 10-digit number").required("Contact number is required"),
            Password:yup.string().required("Password is required").min(3,"Password length must be greater than or equal to three").max(15,"Password length must not increase more than 15")
        })}
        onSubmit={async(userData,{setSubmitting,resetForm})=>{
            try {
                console.log(userData)
                const postRequest=await axios.post('http://user/register',userData)
                console.log(postRequest.data)
                alert("User registration successfull")
                resetForm()
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);
                alert("Registration failed. Please try again.");
                resetForm()
            }
            finally{
                setSubmitting(false)
            }
        }}>
            {({isSubmitting,handleBlur,handleChange,values})=>(
                <Form className='w-25 rounded form-control'>
                <dl className='p-3'>
                  <dt><label htmlFor="" className='form-label my-2'>Name</label></dt>
                  <dd><Field type="text" className='form-control' placeholder='Enter UserName' name='Name' onChange={handleChange} onBlur={handleBlur} value={values.Name}/></dd>
                  <dd className='text-danger'><ErrorMessage name='Name'/></dd>
                  <dt><label htmlFor="" className='form-label my-2'>Email</label></dt>
                  <dd><Field type="text" className='form-control' placeholder='abc@example.com' name='Email' onChange={handleChange} onBlur={handleBlur} value={values.Email}/></dd>
                  <dd className='text-danger'><ErrorMessage name='Email'/></dd>
                  <dt><label htmlFor="" className='form-label my-2 lbldt'>Contact Number</label></dt>
                  <dd><Field type="text" className='form-control' placeholder='10 digit number' name='Number' onChange={handleChange} onBlur={handleBlur} value={values.Number}/></dd>
                  <dd className='text-danger'><ErrorMessage name='Number'/></dd>
                  <dt><label htmlFor="" className='form-label my-2'>Password</label></dt>
                  <dd><Field type="password" className='form-control' placeholder='*******' name='Password' onChange={handleChange} onBlur={handleBlur} value={values.Password}/></dd>
                  <dd className='text-danger'><ErrorMessage name='Password'/></dd>
                  <dd><p>Already have an account?<small className='text-primary'>Login</small></p></dd>
                <dd><button className='btn btn-danger w-100' type='submit' disabled={isSubmitting}>{isSubmitting ? "Registering..." : "Register"}</button></dd>
                </dl>
              </Form> 
            )}
        </Formik>
        </div>
      </div>
    </>
  )
}

export default UserRegister
