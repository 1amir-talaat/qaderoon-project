import { FaNewspaper, FaUserPlus, FaEdit } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import DashboardCard from "./DashboardCard";
import { Helmet } from "react-helmet";
import { ORG_NAME } from "../lib/constants";

const DashboardActions = () => {
  const dashboardItems = [
    {
      action: "إضافة مقال",
      url: "/dashboard/add-article",
      icon: <AiFillFileAdd className="size-12" />,
    },
    {
      action: "إضافة خبر",
      url: "/dashboard/add-news",
      icon: <FaNewspaper className="size-12" />,
    },
    {
      action: "إضافة كاتب",
      url: "/dashboard/add-author",
      icon: <FaUserPlus className="size-12" />,
    },
    {
      action: "تعديل مقال",
      url: "/dashboard/manage-articles",
      icon: <FaEdit className="size-12" />,
    },
    {
      action: "تعديل خبر",
      url: "/dashboard/manage-news",
      icon: <FaEdit className="size-12" />,
    },
    {
      action: "تعديل كاتب",
      url: "/dashboard/manage-author",
      icon: <FaEdit className="size-12" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>لوحة التحكم | {ORG_NAME}</title>
        <meta
          name="description"
          content="لوحة التحكم في موقع شباب قادرون. أضف مقالات، أخبار، أو كتّاب جدد بسهولة وسرعة."
        />
        <meta
          name="keywords"
          content="لوحة تحكم, إضافة مقال, إضافة خبر, إضافة كاتب, تعديل مقال, تعديل خبر, تعديل كاتب, إدارة المحتوى, مؤسسة شباب قادرون"
        />

        <meta property="og:title" content={`لوحة التحكم | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="قم بإدارة محتوى الموقع بسهولة من خلال لوحة التحكم في موقع شباب قادرون."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`لوحة التحكم | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="إدارة الموقع والمحتوى من خلال لوحة التحكم المتكاملة لمؤسسة شباب قادرون."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>
      <div className="grid grid-cols-1 flex-row justify-center gap-6 px-10 py-20 md:grid-cols-2 lg:grid-cols-3">
        {dashboardItems.map((item, index) => (
          <DashboardCard
            key={index}
            action={item.action}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardActions;
