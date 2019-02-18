import mongoose from "mongoose";
const Schema = mongoose.Schema;
const DocSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
export default mongoose.model("Doc", DocSchema);
