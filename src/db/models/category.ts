import {Schema, model, models } from "mongoose";

interface ICategory {
    title: string
    slug: string
    order: number
}


const CategorySchema = new Schema<ICategory>({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    order: {
        type: Number
    }
})

export default models.Category || model("Category", CategorySchema)