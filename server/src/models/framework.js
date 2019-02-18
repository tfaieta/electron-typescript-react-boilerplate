import mongoose from "mongoose";
const Schema = mongoose.Schema;
const FrameworkSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});
export default mongoose.model("Framework", FrameworkSchema);
