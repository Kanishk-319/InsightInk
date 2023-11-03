import {Schema, model, models} from 'mongoose'
import { IBlog, IUser } from '@Helpers/Interfaces'

const BlogSchema =  new Schema<IBlog>({
    creator :{
        type :Schema.Types.ObjectId,
        ref: 'User',
    },
    content :{
        type: String,
        required : [true, 'Content is required!']
    },
    title:{
        type: String,
        required:[true, 'Title is required']
    },
    category:{
        type: String,
        required: [true, 'Tag is required!']
    }
})

const Blog = models.Blog || model<IBlog>('Blog', BlogSchema)

export default Blog