import { useEffect, useState } from "react";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { Helmet } from "react-helmet";
import DefaultInput from "../components/Forms/DefaultInput";
import Textarea from "../components/Forms/TextArea";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Label from "../components/Forms/Label";

const ManageNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [editingNews, setEditingNews] = useState(null);
    const [newsTitle, setNewsTitle] = useState("");
    const [newsDesc, setNewsDesc] = useState("");
    const [newsImg, setNewsImg] = useState(null);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await Api.get(`${HOST_SERVER}/news/`);
            setNewsList(response.data.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handleEdit = (news) => {
        setEditingNews(news);
        setNewsTitle(news.newsTitle);
        setNewsDesc(news.newsDesc);
    };

    const handleFileChange = (e) => {
        setNewsImg(e.target.files[0]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("newsTitle", newsTitle);
        formData.append("newsDesc", newsDesc);
        if (newsImg) formData.append("newsImg", newsImg);

        try {
            await Api.put(`${HOST_SERVER}/news/${editingNews._id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setEditingNews(null);
            setNewsTitle("");
            setNewsDesc("");
            setNewsImg(null);
            fetchNews();
            alert("News updated successfully");
        } catch (error) {
            console.error("Error updating news:", error);
            alert("Failed to update news");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this news?")) return;
        try {
            await Api.delete(`${HOST_SERVER}/news/${id}`);
            fetchNews();
            alert("News deleted successfully");
        } catch (error) {
            console.error("Error deleting news:", error);
            alert("Failed to delete news");
        }
    };

    return (
        <>
            <Helmet>
                <title>إدارة الأخبار | {ORG_NAME}</title>
            </Helmet>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-red-600">Manage News</h2>
                {editingNews && (
                    <form onSubmit={handleUpdate} className="mb-6">
                        <Label htmlFor="newsTitle" label="News Title" />
                        <DefaultInput type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} required />
                        <Label htmlFor="newsDesc" label="News Description" />
                        <Textarea value={newsDesc} onChange={(e) => setNewsDesc(e.target.value)} required />
                        <Label htmlFor="newsImg" label="Update Image (optional)" />
                        <AttachmentsFileInput onChange={handleFileChange} />
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Update News
                        </button>
                    </form>
                )}
                <ul>
                    {newsList.map((news) => (
                        <li key={news._id} className="flex flex-col justify-center bg-white p-4 mb-2 rounded shadow">
                            <div>
                                <p className="font-bold">{news.newsTitle}</p>
                                <p>{news.newsDesc}</p>
                            </div>
                            <div className="w-full flex justify-end mt-2 space-x-4">
                                <button onClick={() => handleEdit(news)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                                <button onClick={() => handleDelete(news._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ManageNews;