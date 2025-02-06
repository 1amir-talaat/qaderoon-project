import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";

import unitsData from "../../../data/unitsData";
import {
  FaFemale,
  FaBroadcastTower,
  FaAccessibleIcon,
  FaBullhorn,
  FaHandshake,
  FaUniversity,
  FaClipboardList,
  FaRegHandshake,
  FaTasks,
  FaCogs,
  FaUsers,
  FaBuilding,
  FaRegBuilding,
  FaHandsHelping,
} from "react-icons/fa";

const Units = () => {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | الإدارات</title>
        <meta
          name="description"
          content="تعرف على الإدارات المختلفة في مؤسسة شباب قادرون ودورها في تمكين الشباب والمجتمع."
        />
        <meta
          name="keywords"
          content="الإدارات, مؤسسة شباب قادرون, تمكين الشباب, التنمية, التدريب"
        />
        <meta property="og:title" content={`الإدارات | ${ORG_NAME}`} />
        <meta
          property="og:description"
          content="اكتشف المزيد عن الإدارات المختلفة في مؤسسة شباب قادرون ودورها في دعم الشباب."
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content={`الإدارات | ${ORG_NAME}`} />
        <meta
          name="twitter:description"
          content="تعرف على الإدارات المختلفة في مؤسسة شباب قادرون ورسالتها في دعم الشباب."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <div className="min-h-screen w-full py-16">
        <h2 className="underlineR mb-8 text-center text-2xl font-extrabold text-gray-900 md:pb-6 md:text-4xl">
          إدارات <span className="relative text-primary">شباب قادرون</span>
        </h2>
        <div className="container m-auto grid grid-cols-1 gap-8 sm:grid-cols-2">
          {unitsData.map((unit, index) => (
            <div
              key={index}
              className="unit-card transform rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-gradient-to-r from-primary to-secondary p-4 text-white shadow-md">
                  {unit.name === "إدارة المرأة" && (
                    <FaFemale className="text-xl" />
                  )}
                  {unit.name === "إدارة الصحافه والإعلام" && (
                    <FaBroadcastTower className="text-xl" />
                  )}
                  {unit.name === "إدارة ذوى الهمم" && (
                    <FaAccessibleIcon className="text-xl" />
                  )}
                  {unit.name === "إدارة التسويق" && (
                    <FaBullhorn className="text-xl" />
                  )}
                  {unit.name === "إدارة التنميه المستدامه" && (
                    <FaHandshake className="text-xl" />
                  )}
                  {unit.name === "إدارة التدريب" && (
                    <FaUniversity className="text-xl" />
                  )}
                  {unit.name === "إدارة التنظيم والمراسم" && (
                    <FaClipboardList className="text-xl" />
                  )}
                  {unit.name === "إدارة العلاقات العامة" && (
                    <FaRegHandshake className="text-xl" />
                  )}
                  {unit.name === "إدارة العلاقات الخارجية" && (
                    <FaBuilding className="text-xl" />
                  )}
                  {unit.name === "إدارة الموارد البشرية" && (
                    <FaUsers className="text-xl" />
                  )}
                  {unit.name === "إدارة اللجان المتخصصة" && (
                    <FaRegBuilding className="text-xl" />
                  )}
                  {unit.name === "إدارة العلاقات الحكومية" && (
                    <FaHandsHelping className="text-xl" />
                  )}
                </div>
                <h2 className="mr-3 text-2xl font-bold text-gray-800">
                  {unit.name}
                </h2>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                {unit.description}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-700">
                  <FaTasks className="ml-3 text-green-500" /> مهام الإدارة:
                </h3>
                <ul className="space-y-2 pl-6 text-gray-600">
                  {unit.tasks.map((task, i) => (
                    <li key={i} className="text-lg">
                      <span className="text-2xl font-bold">-</span> {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 flex items-center text-xl font-semibold text-gray-700">
                  <FaCogs className="ml-3 text-red-500" />
                  المهارات المطلوبه:
                </h3>
                <ul className="space-y-2 pl-6 text-gray-600">
                  {unit.skillsRequired.map((skill, i) => (
                    <li key={i} className="text-lg">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Units;
