
"use server"
import connectDB from '@/db/connectDB'
import Blog from '@/models/Blog'

export async function saveBlog(formData) {
    console.log("Server actions Triggerred")
        const name = formData.get("name")
        console.log("NAME :",name)
        const title = formData.get("title")
        const content = formData.get("content")
        await connectDB();
        const data = await Blog.create({ name, title, content })
        console.log("BlogData", data)
        return { success: true, message: "Blog saved!" };
}