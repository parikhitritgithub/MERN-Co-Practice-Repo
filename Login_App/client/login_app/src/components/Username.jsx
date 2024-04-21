import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { UsernameValidate } from '../helper/validate'

export default function Username() {

  const formik = useFormik ({
    initialValues : {
      username : '' 
    },
    validate : UsernameValidate ,
    validateOnBlur : false ,
    validateOnChange :false ,
    onSubmit : async values => {
      console.log(values);
    }
  })

  return (
    <div className=' flex  items-center justify-center  h-screen '>
      <Toaster position='top-center' reverseOrder={false} ></Toaster>
      <div className=' flex flex-col  justify-center items-center bg-gray-300 bg-opacity-50 border-2 border-gray-400 w-2/6  h-2/3 rounded-3xl '>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/6'>
          <h4 className='text-3xl py-1'>Hello Again !</h4>
          <h1> explore more </h1>
          <h1> By connecting with us </h1>
        </div>

        <div className=' flex flex-col items-center justify-center w-2/4 h-3/6 py-3 '>
          <form className='flex flex-col items-center justify-center py-3 ' onSubmit={formik.handleSubmit} > 
            <input  {...formik.getFieldProps('username')} type="text" placeholder='Username'
            className=' rounded-lg  focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 '
            />
            <button className=' py-1 rounded-md mt-9 border-solid border-2 border-sky-500 w-1/3 h-1/2'>Let's Go</button>
            <span className='py-3 mt-7'>Not a member ! <Link to="/register" className='text-red-500'> Register Now </Link></span>
          </form>
        </div>
        


      </div>
    </div>
  )
}