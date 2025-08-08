export const dynamic = "force-dynamic"
export const dynamicParams = true;

import React from 'react'
import Link from 'next/link'
import connectDB from '@/db/connectDB';
import Blog from '@/models/Blog';
import { deleteBlog } from '@/actions/deleteBlog';
import DeleteButton from '@/components/DeleteButton'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';




export default async function readmore({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams
    console.log("ID", id)
    await connectDB()
    // Fetching BlogData from MongoDB
    const blogData = await Blog.findById(id)
    console.log("DATA", blogData)



    return (
        <>
        <div className="bg-cyan-50">

            {!blogData ? <p className='text-center py-50 text-red-700'>There is no blog or this Blog is deleted</p> :
                <div className="py-30">
                    <div className="container mx-auto flex flex-col justify-center items-center border border-slate-300 shadow-xl  bg-slate-100 w-[95%] md:w-[70%] rounded-lg p-5">
                        <div className=" items-center w-full">
                            <h4 className='text-sm font-bold'>Q : {blogData.name}</h4>
                            <h2 className="text-2xl font-bold text-center py-2"><span className="font-bold underline">Approach : </span>{blogData.title}</h2>
                        </div>
                        <div className=" w-full overflow-x-auto max-w-full my-2 rounded-lg">
                            <SyntaxHighlighter language="java" style={oneDark}>
                                {blogData.content}
                            </SyntaxHighlighter>
                            <Link href={"/posts"}>
                                <button type="submit" className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center my-3 cursor-pointer">Back to Program List</button>
                            </Link>
                        </div>
                        <div className="flex justify-end items-center w-full">
                            {/* <DeleteButton blogId={blogData._id.toString()} /> */}
                            <p className='text-xs font-medium py-3'>{blogData.createdAt.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            }
            </div>
        </>
    )
}

// export default readmore
