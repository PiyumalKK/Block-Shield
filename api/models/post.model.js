import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        default:"https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/default.jpg?alt=media&token=7dd1166f-90e9-413e-8aa6-208c58425a8f"
    },
    category:{
        type: String,
        default: 'uncategorized'
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
},{timestamps:true}
);

const Post = mongoose.model('Post',postSchema);

export default Post;