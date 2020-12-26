import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Contact = model("Contact", contactSchema);

export default Contact
