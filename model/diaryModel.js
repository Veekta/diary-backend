const mongoose = require("mongoose");
const diaryModel = mongoose.Schema(
  {
    title: {
      type: String,
    },

    message: {
      type: String,
    },
    image: {
      type: String,
      ref: "user",
    },
    imageId: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("diarys", diaryModel);
