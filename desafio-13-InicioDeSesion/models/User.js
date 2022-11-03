import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
	email: { type: String, required: true },
	password: { type: String, required: true }
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = model('users', userSchema);