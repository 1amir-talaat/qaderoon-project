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
      <div className="mx-auto my-10 max-w-4xl rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-red-600">Manage News</h2>
        {editingNews && (
          <form onSubmit={handleUpdate} className="mb-6">
            <Label htmlFor="newsTitle" label="News Title" />
            <DefaultInput
              type="text"
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
              required
            />
            <Label htmlFor="newsDesc" label="News Description" />
            <Textarea
              value={newsDesc}
              onChange={(e) => setNewsDesc(e.target.value)}
              required
            />
            <Label htmlFor="newsImg" label="Update Image (optional)" />
            <AttachmentsFileInput onChange={handleFileChange} />
            <button
              type="submit"
              className="mt-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Update News
            </button>
          </form>
        )}
        <ul>
          {newsList.map((news) => (
            <li
              key={news._id}
              className="mb-2 flex flex-col justify-center rounded bg-white p-4 shadow">
              <div>
                <p className="font-bold">{news.newsTitle}</p>
                <p>{news.newsDesc}</p>
              </div>
              <div className="mt-2 flex w-full justify-end space-x-4">
                <button
                  onClick={() => handleEdit(news)}
                  className="mr-2 rounded bg-green-600 px-3 py-1 text-white">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(news._id)}
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

export default ManageNews;
