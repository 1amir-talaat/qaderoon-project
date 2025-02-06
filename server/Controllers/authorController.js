const Author = require("../Models/Author");
const upload = require("../Config/Multer");
const fs = require("fs");
const path = require("path");

exports.addAuthor = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    try {
      const { name, title } = req.body;
      if (!name || !title) {
        return res
          .status(400)
          .json({ message: "Name and title are required." });
      }

      const newAuthor = new Author({
        name,
        title,
        image: req.file ? req.file.filename : "",
      });

      await newAuthor.save();
      res
        .status(201)
        .json({ message: "Author added successfully", data: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "An error occurred while adding the author",
          error: error.message,
        });
    }
  });
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json({ data: authors });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred while fetching authors",
        error: error.message,
      });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ data: author });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred while fetching the author",
        error: error.message,
      });
  }
};

exports.updateAuthor = async (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      const { id } = req.params;
      const { name, title } = req.body;
      const author = await Author.findById(id);

      if (!author) {
        return res.status(404).json({ message: "Author not found" });
      }

      if (req.file) {
        const oldFilePath = path.join(
          __dirname,
          "../../Public/Images",
          author.image,
        );
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
        author.image = req.file.filename;
      }

      author.name = name || author.name;
      author.title = title || author.title;

      await author.save();
      res
        .status(200)
        .json({ message: "Author updated successfully", data: author });
    } catch (error) {
      res
        .status(500)
        .json({
          message: "An error occurred while updating the author",
          error: error.message,
        });
    }
  });
};

exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByIdAndDelete(id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    if (author.image) {
      const filePath = path.join(
        __dirname,
        "../../Public/Images",
        author.image,
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred while deleting the author",
        error: error.message,
      });
  }
};
