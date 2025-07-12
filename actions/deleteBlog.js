"use server"
import connectDB from '@/db/connectDB'
import Blog from '@/models/Blog'
import { redirect } from 'next/navigation'

export async function deleteBlog(formData){
    const id = formData.get("id")
    await connectDB()
    await Blog.findByIdAndDelete(id)

    redirect("/posts")

}


