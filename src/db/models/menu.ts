import {Schema, model, models } from "mongoose";

interface IMenu {
  title: string;
  desc?: string;
  price: number;
  category: string;
}

const MenuSchema = new Schema<IMenu>({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default models.Menu || model("Menu", MenuSchema)
