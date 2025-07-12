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
            <h2 className="text-center text-2xl font-bold py-5">All Blog Posts</h2>
            {(blogs==0)?<p className='text-center'>There are no Blogs to Display</p>:
            <div className="blogs flex flex-wrap justify-center-safe">
                {blogs.map((blog) => (
                    <div className="flex flex-col justify-center items-center border border-white rounded-lg w-[85%] md:w-[20%] my-5 mx-5 bg-slate-300" key={blog.id}>
                        <div className="w-[100%]">
                            <h4 className='pl-5 pt-2 text-xs font-bold'>NAME : {blog.name}</h4>
                            <h3 className='text-xl font-bold py-2 text-center'>{blog.title}</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className='pb-5 pl-5'>{blog.content.slice(0, 100)}</p>
                            <Link href={`/posts/${blog._id}`} className='text-xs text-blue-900 font-bold m-5'>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
            }
        </>
    )
}

export default posts
