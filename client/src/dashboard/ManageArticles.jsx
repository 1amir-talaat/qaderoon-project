import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import DefaultInput from "../components/Forms/DefaultInput";
import Label from "../components/Forms/Label";
import Textarea from "../components/Forms/TextArea";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";

const ManageArticles = () => {
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState(null);
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
    if (img) formData.append("img", img);

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
    if (!window.confirm("Are you sure you want to delete this article?"))
      return;
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
      <div className="mx-auto my-10 max-w-4xl rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-red-600">
          Manage Articles
        </h2>
        {editingArticle && (
          <form onSubmit={handleUpdate} className="mb-6">
            <Label htmlFor="title" label="Article Title" />
            <DefaultInput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Label htmlFor="content" label="Article Content" />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <Label htmlFor="author" label="Author" />
            <select
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="w-full rounded border border-gray-300 p-2"
              required>
              <option value="">Select Author</option>
              {authors.map((author) => (
                <option key={author._id} value={author._id}>
                  {author.name}
                </option>
              ))}
            </select>
            <Label htmlFor="img" label="Update Image (optional)" />
            <AttachmentsFileInput onChange={handleFileChange} />
            <button
              type="submit"
              className="mt-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Update Article
            </button>
          </form>
        )}
        <ul>
          {articles.map((article) => (
            <li
              key={article._id}
              className="mb-2 flex flex-col justify-center rounded bg-white p-4 shadow">
              <div>
                <p className="font-bold">{article.title}</p>
                <p>{article.content}</p>
              </div>
              <div className="mt-2 flex w-full justify-end space-x-4">
                <button
                  onClick={() => handleEdit(article)}
                  className="mr-2 rounded bg-green-600 px-3 py-1 text-white">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(article._id)}
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

export default ManageArticles;
