const News = require("../Models/News");
const upload = require("../Config/Multer");
const fs = require("fs");
const path = require("path");

exports.addNews = async (req, res) => {
  upload.single("img")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    try {
      const { title, content } = req.body;
      if (!title || !content || !req.file) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const newNews = new News({
        title,
        content,
        img: req.file.filename,
      });

      await newNews.save();
      res
        .status(201)
        .json({ message: "News added successfully", data: newNews });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while adding the News",
        error: error.message,
      });
    }
  });
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json({ data: news });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching Newss",
      error: error.message,
    });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json({ data: news });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the News",
      error: error.message,
    });
  }
};

exports.updateNews = async (req, res) => {
  upload.single("img")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const { title, content } = req.body;
      const news = await News.findById(id);

      if (!news) {
        return res.status(404).json({ message: "News not found" });
      }

      if (req.file) {
        const oldFilePath = path.join(__dirname, "../../Public/imgs", news.img);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
        news.img = req.file.filename;
      }

      news.title = title || news.title;
      news.content = content || news.content;

      await news.save();
      res
        .status(200)
        .json({ message: "News updated successfully", data: news });
    } catch (error) {
      res.status(500).json({
        message: "An error occurred while updating the News",
        error: error.message,
      });
    }
  });
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findByIdAndDelete(id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
    const filePath = path.join(__dirname, "../../Public/imgs", news.img);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the News",
      error: error.message,
    });
  }
};
