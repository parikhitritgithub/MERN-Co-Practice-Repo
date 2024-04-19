import React from 'react'
import { Link } from 'react-router-dom'

export default function Username() {
  return (
      <div className='container mx-auto'>
        <div className='flex justify-center items-center bg-yellow-500 h-screen  '>
          <div>
            <div className='title flex flex-col item-center'>
              <h4 className='text-5xl font-bold'>Hello Again </h4>
              <span className='py-4 text-xl w-2/3 text-centre text-gray-5'>
                Explore  More by connecting with us 
              </span>
            </div>

            <form className='py-1'>
              <div className='bg-blue-400 flex  justify-center  py-4 '>
                <img src="" alt="AVTAR" />
              </div>

              <div className='textbook'>
                <input type="text" placeholder='username' />
                <button type='submit'>Let's Go </button>
              </div>

              <div className='text-center py-4 '>
                <span>Not a member <Link className='text-red-500' to="/register"> Register Now </Link></span>
              </div>
            </form>


          </div>
        </div>
      </div>
  )
}