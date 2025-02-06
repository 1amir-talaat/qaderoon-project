import { useEffect, useState } from "react";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { Helmet } from "react-helmet";
import DefaultInput from "../components/Forms/DefaultInput";
import Textarea from "../components/Forms/TextArea";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Label from "../components/Forms/Label";

const ManageAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await Api.get(`${HOST_SERVER}/authors/`);
      setAuthors(response.data.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
    setName(author.name);
    setTitle(author.title);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    if (image) formData.append("image", image);

    try {
      await Api.put(`${HOST_SERVER}/authors/${editingAuthor._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEditingAuthor(null);
      setName("");
      setTitle("");
      setImage(null);
      fetchAuthors();
      alert("Author updated successfully");
    } catch (error) {
      console.error("Error updating author:", error);
      alert("Failed to update author");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this author?")) return;
    try {
      await Api.delete(`${HOST_SERVER}/authors/${id}`);
      fetchAuthors();
      alert("Author deleted successfully");
    } catch (error) {
      console.error("Error deleting author:", error);
      alert("Failed to delete author");
    }
  };

  return (
    <>
      <Helmet>
        <title>إدارة الكاتب | {ORG_NAME}</title>
      </Helmet>
      <div className="mx-auto my-10 max-w-4xl rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-red-600">Manage Authors</h2>
        {editingAuthor && (
          <form onSubmit={handleUpdate} className="mb-6">
            <Label htmlFor="name" label="Author Name" />
            <DefaultInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Label htmlFor="title" label="Author Title" />
            <Textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Label htmlFor="image" label="Update Image (optional)" />
            <AttachmentsFileInput onChange={handleFileChange} />
            <button
              type="submit"
              className="mt-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Update Author
            </button>
          </form>
        )}
        <ul>
          {authors.map((author) => (
            <li
              key={author._id}
              className="mb-2 flex flex-col justify-center rounded bg-white p-4 shadow">
              <div>
                <p className="font-bold">{author.name}</p>
                <p>{author.title}</p>
              </div>
              <div className="mt-2 flex w-full justify-end space-x-4">
                <button
                  onClick={() => handleEdit(author)}
                  className="mr-2 rounded bg-green-600 px-3 py-1 text-white">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(author._id)}
                  className="rounded bg-red-600 px-3 py-1 text-white">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ManageAuthors;
