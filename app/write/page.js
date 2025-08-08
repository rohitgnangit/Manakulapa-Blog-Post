
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
            <button type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-7 py-2 text-center me-2 mb-5 cursor-pointer">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

