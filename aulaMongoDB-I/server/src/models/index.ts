import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  mail: {
    type: String,
    maxLength: [50, "max 50 caracteres"],
    unique: true,
    required: [true, "o e-mail é obrigatório"],
  },

  password: {
    type: String,
    trim: true,
    minLength: [6, "Senha min de 6 caracteres"],
    select: false,
    required: [true, "A senha é obrigatória"],
  },
});

const User = mongoose.model("User", UserSchema);

export { User };
