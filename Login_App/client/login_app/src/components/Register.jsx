import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Toaster } from 'react-hot-toast';
import {RegisterValidation} from '../helper/validate';


export default function Reset() {

  const formik = useFormik({
    
    initialValues: {
      
      Email :'',
      username : '',

      Password : ''
    },
    validate: RegisterValidation ,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div className=' flex  items-center justify-center  h-screen '>
      <Toaster position="top-center" reverseOrder={false}>
      </Toaster>
      <div className=' flex flex-col  justify-center items-center bg-gray-300 bg-opacity-50 border-2 border-gray-400 w-2/6  h-2/3 rounded-3xl '>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/6'>
          <h4 className='text-3xl py-1'>Register</h4>
          <h1> explore more </h1>
          <h1> By connecting with us  thanq  </h1>

        </div>
        

        
        <div className=' flex flex-col items-center justify-center w-2/4 h-3/6 py-3 '>
          <form className='flex flex-col items-center justify-center py-3 ' onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps('Email')} type="text" placeholder='Email*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            <input {...formik.getFieldProps('Username')} type="text" placeholder='Username*'
              className=' mt-7 rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
              <input {...formik.getFieldProps('Password')} type="text" placeholder='Password*'
              className=' mt-7 rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            <button type='submit' className='bg-yellow-300  py-1 rounded-md mt-7 border-solid border-2 border-sky-500 w-full '>Sign In </button>

            <span className='py-2 mt-2'>Not a member |  <Link to="/register" className='text-red-500'>Register Now </Link></span>
          </form>
        </div>



      </div>
    </div>
  )
}
