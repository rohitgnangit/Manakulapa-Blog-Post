// Solving data catching issue
export const dynamic = 'force-dynamic';


import React from 'react'
import connectDB from '@/db/connectDB'
import Blog from '@/models/Blog'
import Link from 'next/link'

const posts = async () => {
    await connectDB()
    // Displaying all logs in a Page
    const blogs = await Blog.find().sort({ createdAt: -1 })
    return (
        <>
        <div className="bg-cyan-50">

            <h2 className="text-center text-2xl font-bold py-5">All Programs</h2>
            {(blogs==0)?<p className='text-center'>There are no Programs to Display</p>:
            <div className="blogs flex flex-col justify-center items-center">
                {blogs.map((blog) => (
                    <div className="flex justify-between items-center border border-slate-300 rounded-lg w-[85%] md:w-[80%] my-2 mx-2 bg-slate-100 shadow-xl py-3" key={blog.id}>
                        <div className=" w-[30%]">
                            <h4 className='pl-5  text-sm font-bold'>Q : {blog.name}</h4>
                        </div>
                        <div className="title w-[30%]">
                            <h3 className='text-l font-bold text-center'>{blog.title}</h3>
                        </div>
                        <div className="flex justify-end items-center w-[30%]">
                            {/* <p className='pb-5 pl-5'>{blog.content.slice(0, 100)}</p> */}
                            <Link href={`/posts/${blog._id}`} className='text-xs text-blue-900 font-bold'>
                            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-xs dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 cursor-pointer">Read More</button>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            }
            </div>
        </>
    )
}

export default posts
