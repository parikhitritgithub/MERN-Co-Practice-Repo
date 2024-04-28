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
      <div className=' flex flex-col  justify-center items-center bg-gray-300 bg-opacity-50 border-2 border-gray-400 w-2/6  h-3/4 rounded-3xl '>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/6'>
          <h4 className='text-3xl py-1'>Profile</h4>
          <h1> Welcome </h1>
     

        </div>
        <div className='flex flex-col items-center justify-center w-3/4 h-3/5 py-2 '>
          <form className='flex flex-col items-center justify-center py-3 ' onSubmit={formik.handleSubmit}>
            <div className='flex flex-row gap-5 py-4'>
            <input {...formik.getFieldProps('Firstname')} type="text" placeholder='Firstname*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            <input {...formik.getFieldProps('Lastname')} type="text" placeholder='Lastname*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            </div>

            <div className='flex flex-row gap-5 py-4'>
            <input {...formik.getFieldProps('Mobile No')} type="text" placeholder='Mobile No*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            <input {...formik.getFieldProps('Email')} type="text" placeholder='Email*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />

            </div>
            <div className='w-full py-3'> 
            <input {...formik.getFieldProps('Email')} type="text" placeholder='Email*'
              className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center  '
            />
            <button type='submit' className='bg-yellow-300 rounded-md mt-6 border-solid border-2 border-sky-500 w-full h-2/4 '>Sign In </button>

            </div>

            <span className=' py-4 '>Not a member ! <Link to="/register" className='text-red-500'>Register Now </Link></span>
          </form>
        </div>



      </div>
    </div>
  )
}
