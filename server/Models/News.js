const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    newsTitle: {
      type: String,
      required: true,
    },
    newsDesc: {
      type: String,
      required: true,
    },
    newsImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const News = mongoose.model("News", NewsSchema);
module.exports = News;
