import bcrypt from "bcrypt"
import mongoose from "mongoose"
import sendWelcomeEmail from "../services/sendEmail.service.js"

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "invalid credential"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "invalid credential"],
  },
  password: {
    type: String,
    required: true,
  },
});

userschema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    console.log(err);
  }
});

userschema.post("save", async function (doc) {
  try {
    await sendWelcomeEmail(doc.email, doc.username);
  } catch (err) {
    console.log(err);
  }
});

const usermodel = mongoose.model("users", userschema);
export default usermodel;
