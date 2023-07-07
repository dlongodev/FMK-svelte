import {Schema, model, models } from "mongoose";

interface IOrder {
    customer: string
    address: string
    cityStateZip: string
    email: string
    phone: string
    deliveryDate: string
    deliveryTime: string
    total: number
    method: string
    instructions: string
    done: boolean
}

const OrderSchema = new Schema<IOrder>({
    customer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cityStateZip: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: String,
        required: true,
    },
    deliveryTime: {
        type: String,
        required: true,
    },
    total: Number,
    method: String,
    instructions: String,
    done: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export default models.Order || model("Order", OrderSchema)