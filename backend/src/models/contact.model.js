import mongoose, {Schema } from "mongoose";

const contactSchema = new Schema (
    {
        fullname: {
            type: String, 
            required: true, 
            unique: false,
        },

        email: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true, 
            lowercase:true
        }
    },

    {
        timestamps: true
    }

)

export const Contact = mongoose.model("Contact", contactSchema)