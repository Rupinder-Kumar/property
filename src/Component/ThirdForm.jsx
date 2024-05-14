import React,{useContext} from 'react'
import {FormDataContext} from './Formcontext'

export default function ThirdForm() {
    const { formData } = useContext(FormDataContext);

  return (
    <>
    <h3>detailes will show here</h3>
    <p>Username: {formData.username}</p>
    <p>Password: {formData.password}</p>
    <p>Address: {formData.address}</p>
    <p>City: {formData.city}</p>
    <p>State: {formData.state}</p>

      
    </>
  )
}

  
