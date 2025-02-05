import { useEffect, useState } from "react";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { Helmet } from "react-helmet";
import DefaultInput from "../components/Forms/DefaultInput";
import Textarea from "../components/Forms/TextArea";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Label from "../components/Forms/Label";

const ManageArticles = () => {
    const [articles, setArticles] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [editingArticle, setEditingArticle] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [Img, setImg] = useState(null);
    const [selectedAuthor, setSelectedAuthor] = useState("");

    useEffect(() => {
        fetchArticles();
        fetchAuthors();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await Api.get(`${HOST_SERVER}/articles/`);
            setArticles(response.data.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    const fetchAuthors = async () => {
        try {
            const response = await Api.get(`${HOST_SERVER}/authors/`);
            setAuthors(response.data.data);
        } catch (error) {
            console.error("Error fetching authors:", error);
        }
    };

    const handleEdit = (article) => {
        setEditingArticle(article);
        setTitle(article.title);
        setContent(article.content);
        setSelectedAuthor(article.author);
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("author", selectedAuthor);
        if (Img) formData.append("Img", Img);

        try {
            await Api.put(`${HOST_SERVER}/articles/${editingArticle._id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setEditingArticle(null);
            setTitle("");
            setContent("");
            setImg(null);
            setSelectedAuthor("");
            fetchArticles();
            alert("Article updated successfully");
        } catch (error) {
            console.error("Error updating article:", error);
            alert("Failed to update article");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this article?")) return;
        try {
            await Api.delete(`${HOST_SERVER}/articles/${id}`);
            fetchArticles();
            alert("Article deleted successfully");
        } catch (error) {
            console.error("Error deleting article:", error);
            alert("Failed to delete article");
        }
    };

    return (
        <>
            <Helmet>
                <title>إدارة المقالات | {ORG_NAME}</title>
            </Helmet>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-red-600">Manage Articles</h2>
                {editingArticle && (
                    <form onSubmit={handleUpdate} className="mb-6">
                        <Label htmlFor="title" label="Article Title" />
                        <DefaultInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <Label htmlFor="content" label="Article Content" />
                        <Textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                        <Label htmlFor="author" label="Author" />
                        <select
                            value={selectedAuthor}
                            onChange={(e) => setSelectedAuthor(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required>
                            <option value="">Select Author</option>
                            {authors.map((author) => (
                                <option key={author._id} value={author._id}>{author.name}</option>
                            ))}
                        </select>
                        <Label htmlFor="Img" label="Update Image (optional)" />
                        <AttachmentsFileInput onChange={handleFileChange} />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Update Article
                        </button>
                    </form>
                )}
                <ul>
                    {articles.map((article) => (
                        <li key={article._id} className="flex flex-col justify-center bg-white p-4 mb-2 rounded shadow">
                            <div>
                                <p className="font-bold">{article.title}</p>
                                <p>{article.content}</p>
                            </div>
                            <div className="w-full flex justify-end mt-2 space-x-4">
                                <button onClick={() => handleEdit(article)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                                <button onClick={() => handleDelete(article._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ManageArticles;