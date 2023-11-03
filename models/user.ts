import {Schema,model,models} from 'mongoose'
import { IUser } from '@Helpers/Interfaces'

const UserSchema = new Schema<IUser>({
    username:{
        type:String,
        required:[true, 'Username is required!'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    email :{
        type:String,
        // unique:[true, 'Email already in use!'],
        required:[true, 'Email is required']
    },
    image:{
        type:String
    }

})

const User = models.User || model<IUser>('User', UserSchema)
export default User;