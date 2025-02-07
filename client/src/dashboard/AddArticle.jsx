import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import DefaultInput from "../components/Forms/DefaultInput";
import Label from "../components/Forms/Label";
import SelectInput from "../components/Forms/SelectInput";
import Textarea from "../components/Forms/TextArea";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState(null);
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
    formData.append("img", img);
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
      console.error(error);
      alert("Failed to add article");
    }
  };

  return (
    <>
      <Helmet>
        <title>إضافة مقالة جديدة | {ORG_NAME}</title>
        <meta
          name="description"
          content="صفحة إضافة مقال جديد إلى موقع مؤسسة شباب قادرون. يمكنك كتابة عنوان المقال، اختيار الكاتب، وإدخال محتوى المقال."
        />
        <meta
          name="keywords"
          content="إضافة مقال, مؤسسة شباب قادرون, لوحة التحكم, مقالات جديدة, كاتب المقال"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`إضافة مقالة جديدة | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="قم بإضافة مقال جديد إلى موقع مؤسسة شباب قادرون بسهولة."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`إضافة مقال جديد | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="أضف مقالات جديدة لموقع مؤسسة شباب قادرون بسهولة."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="mx-auto my-10 w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-red-600">Add Article</h2>
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
            <Label htmlFor="img" label="Article Image" />
            <AttachmentsFileInput
              name="img"
              accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
              onChange={handleFileChange}
              required={true}
            />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-primary px-4 py-2 font-bold text-white hover:bg-secondary focus:outline-none">
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddArticle;
