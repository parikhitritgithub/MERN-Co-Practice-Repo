import React from 'react'
import { Link } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';


export default function Recovery () {

  return (
    <div className=' flex  items-center justify-center  h-screen '>
      <Toaster  position="top-center" reverseOrder={false}>
      </Toaster>
      <div className=' flex flex-col  justify-center items-center bg-gray-300 bg-opacity-50 border-2 border-gray-400 w-2/6  h-2/3 rounded-3xl '>
        <div className='flex flex-col justify-center items-center w-2/4 h-2/6'>
          <h4 className='text-3xl py-1'>Recovery</h4>
          <span>Enter OTP to recover password</span>
        </div>

        <div className=' flex flex-col items-center justify-center w-3/4 h-3/6 py-3 '>
          <form className='flex flex-col items-center justify-center py-3 '> 
          <div className='w-full input text-center '>
            <span className='py-4 text-sm '>
              Enter 6 digit OTP send to your email address.
            </span>
            <input type="text" placeholder='Password'
            className=' rounded-lg w-full h-8 focus:outline-none  font-Nunito Sans transition duration-500  hover:scale-105 text-center '
            />
            </div>
            <button type='submit' className=' py-1 rounded-md mt-5 border-solid border-2 border-sky-500 w-full bg-yellow-400 '> Recover </button>
            <span className='py-3 mt-7'>Can't get OTP ?  <Link to="/register" className='text-red-500'> Resand </Link></span>
          </form>
        </div>
        


      </div>
    </div>
  )
}

