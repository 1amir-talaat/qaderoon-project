import { useState } from "react";
import Api from "../lib/Api";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Textarea from "../components/Forms/TextArea";
import Label from "../components/Forms/Label";
import DefaultInput from "../components/Forms/DefaultInput";
import { HOST_SERVER } from "../lib/constants";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("image", image);

    try {
      await Api.post(`${HOST_SERVER}/authors`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setName("");
      setTitle("");
      setImage(null);
      alert("Author added successfully");
    } catch (error) {
      console.error("Error adding author:", error);
      alert("Failed to add author");
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Add Author</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name" label="Author Name" />
          <DefaultInput
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="اسم الكاتب"
            required={true}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="title" label="Author title" />
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            label="Author Title"
            placeholder="وظيفة الكاتب"
            required={true}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="image" label="Author Image" />
          <AttachmentsFileInput
            name="image"
            accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
            onChange={handleFileChange}
            required={true}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Author
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAuthor;
