
import React from 'react'
import { saveBlog } from '@/actions/saveBlog'


export default function write() {

  return (
    <>
      <div className="py-20">
        <div className='bg-gray-300 w-[85%] md:w-[40%] container mx-auto rounded-lg'>
          <form action={saveBlog} className='gap-5 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold mt-5'>Write a Program Here</h1>
            <input className='bg-white w-[80%] rounded-lg px-3 py-1.5' type="text" placeholder='question' name="name" required />
            <input className='bg-white w-[80%] rounded-lg px-3 py-1.5' type="text" placeholder='approach' name="title" required />

            <textarea className='bg-white w-[80%] rounded-lg px-3 py-3' name="content" id="" placeholder='write a program' required></textarea>
            <button type="submit" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center mb-5 cursor-pointer">Post</button>
          </form>
        </div>
      </div>
    </>
  )
}

