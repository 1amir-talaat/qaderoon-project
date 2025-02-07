import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import DefaultInput from "../components/Forms/DefaultInput";
import Label from "../components/Forms/Label";
import Textarea from "../components/Forms/TextArea";
import Api from "../lib/Api";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState(null);

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("img", img);

    try {
      await Api.post(`${HOST_SERVER}/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTitle("");
      setContent("");
      setImg(null);
      alert("News added successfully");
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <>
      <Helmet>
        <title>إضافة خبر جديد | {ORG_NAME}</title>
        <meta
          name="description"
          content="صفحة إضافة خبر جديد لموقع مؤسسة شباب قادرون. يمكنك نشر أحدث الأخبار بسهولة عبر تعبئة التفاصيل المطلوبة."
        />
        <meta
          name="keywords"
          content="إضافة خبر, نشر أخبار, مؤسسة شباب قادرون, لوحة تحكم, إدارة الأخبار"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`إضافة خبر جديد | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="قم بنشر خبر جديد وتحديث محتوى موقع مؤسسة شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`إضافة خبر جديد | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="قم بنشر خبر جديد وتحديث محتوى موقع مؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-primary">Add News</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="title" label="News Title" />
            <DefaultInput
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required={true}
              placeholder="عنوان الخبر"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="content" label="Article Content" />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              placeholder="محتوى الخبر..."
              required={true}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="img" label="News Image" />
            <AttachmentsFileInput
              name="img"
              accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
              onChange={handleFileChange}
              required={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="transition-color focus:shadow-outline rounded bg-primary px-4 py-2 font-bold text-white duration-300 hover:bg-secondary focus:outline-none">
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNews;
