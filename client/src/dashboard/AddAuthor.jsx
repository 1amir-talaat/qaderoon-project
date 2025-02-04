import { useState } from "react";
import Api from "../lib/Api";
import AttachmentsFileInput from "../components/Forms/AttachmentsFileInput";
import Textarea from "../components/Forms/TextArea";
import Label from "../components/Forms/Label";
import DefaultInput from "../components/Forms/DefaultInput";
import { HOST_SERVER, ORG_NAME } from "../lib/constants";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>إضافة كاتب جديد | {ORG_NAME}</title>
        <meta
          name="description"
          content="صفحة إضافة كاتب جديد إلى موقع مؤسسة شباب قادرون. يمكنك إدخال اسم الكاتب، وظيفته، وتحميل صورته."
        />
        <meta
          name="keywords"
          content="إضافة كاتب, إدارة الكتّاب, مؤسسة شباب قادرون, لوحة التحكم, كاتب جديد"
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`إضافة كاتب جديد | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="أضف كتّابًا جدد إلى موقع مؤسسة شباب قادرون بسهولة."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`إضافة كاتب جديد | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="أضف كتّابًا جدد إلى موقع مؤسسة شباب قادرون بسهولة."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
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
    </>
  );
};

export default AddAuthor;
