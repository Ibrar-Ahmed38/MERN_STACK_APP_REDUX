import mongoose from "mongoose";

const Users = mongoose.Schema({
  tittle: String,
  message: String,
  ceater: String,
  tags: [String],
  selectFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("Users", Users);

export default User