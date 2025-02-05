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
            <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-red-600">Manage Authors</h2>
                {editingAuthor && (
                    <form onSubmit={handleUpdate} className="mb-6">
                        <Label htmlFor="name" label="Author Name" />
                        <DefaultInput type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        <Label htmlFor="title" label="Author Title" />
                        <Textarea value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <Label htmlFor="image" label="Update Image (optional)" />
                        <AttachmentsFileInput onChange={handleFileChange} />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Update Author
                        </button>
                    </form>
                )}
                <ul>
                    {authors.map((author) => (
                        <li key={author._id} className="flex flex-col justify-center bg-white p-4 mb-2 rounded shadow">
                            <div>
                                <p className="font-bold">{author.name}</p>
                                <p>{author.title}</p>
                            </div>
                            <div className="w-full flex justify-end mt-2 space-x-4">
                                <button onClick={() => handleEdit(author)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                                <button onClick={() => handleDelete(author._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ManageAuthors;
