import mongoose from "mongoose";
const Schema = mongoose.Schema;
const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
export default mongoose.model("Language", LanguageSchema);
