import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        maxLength: [3, "Máximo 3 digitos"],
        required: true
    }
})

const User = mongoose.model("User", userSchema);

export { User }