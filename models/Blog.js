import mongoose from "mongoose";
const { Schema, models, model } = mongoose

const BlogSchema = new Schema ({
    name : {type: String, required:true},
    title : { type: String, required:true},
    content : {type: String, required:true},
    createdAt : { type:Date, default:Date.now}
})

export default models.Blog || model("Blog", BlogSchema)