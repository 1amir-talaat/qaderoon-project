import { useState } from "react";
import axios from "axios";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Textarea from "../components/Forms/TextArea";
import Label from "../components/Forms/Label";
import DefaultInput from "../components/Forms/DefaultInput";

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsImg, setNewsImg] = useState(null);

  const handleFileChange = (e) => {
    setNewsImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("newsTitle", newsTitle);
    formData.append("newsDesc", newsDesc);
    formData.append("newsImg", newsImg);

    try {
      await axios.post(`${import.meta.env.VITE_HOST_SERVER}news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setNewsTitle("");
      setNewsDesc("");
      setNewsImg(null);
      alert("News added successfully");
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary">Add News</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label
            htmlFor="newsTitle"
            label="News Title"
          />
          <DefaultInput
            type="text"
            name="newsTitle"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            required={true}
            placeholder="عنوان الخبر"
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="newsDesc"
            label="Article Content"
          />
          <Textarea
            value={newsDesc}
            onChange={(e) => setNewsDesc(e.target.value)}
            name="newsDesc"
            placeholder="محتوى الخبر..."
            required={true}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="newsImg"
            label="News Image"
          />
          <AttachmentsFileInput
            name="newsImg"
            accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
            onChange={handleFileChange}
            required={true}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary transition-color duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
