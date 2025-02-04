import { useState, useEffect } from "react";
import Api from "../lib/Api";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Textarea from "../components/Forms/TextArea";
import SelectInput from "../components/Forms/SelectInput";
import Label from "../components/Forms/Label";
import DefaultInput from "../components/Forms/DefaultInput";
import { HOST_SERVER } from "../lib/constants";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Img, setImg] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await Api.get(`${HOST_SERVER}/authors`);
        setAuthors(response.data.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("Img", Img);
    formData.append("author", selectedAuthor);

    try {
      await Api.post(`${HOST_SERVER}/articles`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setContent("");
      setImg(null);
      setSelectedAuthor("");
      alert("Article added successfully");
    } catch (error) {
      console.info("Error adding article: ");
      console.dir(error);
      alert("Failed to add article");
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Add Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="title" label="Article Title" />
          <DefaultInput
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
            placeholder="عنوان المقال"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="author">Author</Label>
          <Label htmlFor="author" label="Author" />
          <SelectInput
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            name="author"
            required={true}
            defaultValue="اختر الكاتب"
            options={authors}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="content" label="Article Content" />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            placeholder="محتوى المقال..."
            required={true}
          />
        </div>
        <div className="mb-4">
          {/* Image upload input */}
          <Label htmlFor="Img" label="Article Image" />
          <AttachmentsFileInput
            name="Img"
            accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
            onChange={handleFileChange}
            required={true}
          />
        </div>
        <div className="flex items-center justify-between mt-5">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
