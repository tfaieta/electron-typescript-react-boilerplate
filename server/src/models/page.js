import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PageSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
export default mongoose.model("Page", PageSchema);
