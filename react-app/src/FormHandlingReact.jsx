import React, { useState } from 'react'

const FormHandlingReact = () => {

    const [showError,setShowError]=useState(false)
    const [FormData,setFormData]=useState({name:"",email:"",contact:"",city:""})

    function handleSubmit(e){
        e.preventDefault()
        console.log(FormData)
        setFormData({name:"",email:"",contact:"",city:""})
    }

    function handleShowError(){
        if(FormData.name.trim()===""){
            setShowError(true)
        }
        else{
            setShowError(false)
        }
    }

    function handleInputChange(e){
        const {name,value}=e.target
        setFormData({
            ...FormData,
            [name]:value
        })
    }


  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center mt-5 w-50'>
    <form className='p-3 w-75 bg-dark-subtle' onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type="text" className='form-control w-100' placeholder='Enter your full name' onChange={handleInputChange} onBlur={handleShowError} name='name' value={FormData.name}/>
            {showError && <p style={{ color: "red" }}>This field is required.</p>}
        </div>
        <div className="mb-3">
            <label className='form-label'>Email</label>
            <input type="text" className='form-control w-100'  placeholder='Enter your email id' onChange={handleInputChange} onBlur={handleShowError} name='email' value={FormData.email}/>
            {showError && <p style={{ color: "red" }}>This field is required.</p>}
        </div>
        <div className="mb-3">
            <label className='form-label'>Contact Number</label>
            <input type="text" className='form-control w-100' placeholder='Enter your contact number' onChange={handleInputChange} onBlur={handleShowError} name='contact' value={FormData.contact}/>
            {showError && <p style={{ color: "red" }}>This field is required.</p>}
        </div>
        <div className="mb-3">
            <label className='form-label'>Select city</label>
            <select className='form-select' onChange={handleInputChange} name='city' value={FormData.city}>
                <option defaultValue="chennai">Chennai</option>
                <option value="Hyd">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Lucknow">Lucknow</option>
            </select>
        </div>
        <button className='submit btn btn-success mt-3 mb-3' type='submit'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default FormHandlingReact
