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
  FaUsers, // Added
  FaBuilding, // Added
  FaRegBuilding, // Added
  FaHandsHelping, // Added
} from "react-icons/fa";

const Units = () => {
  return (
    <div className="py-16 min-h-screen w-full">
      <h2 className="font-extrabold text-2xl md:text-4xl underlineR md:pb-6 text-gray-900 mb-8 text-center">
        إدارات <span className="text-primary relative">شباب قادرون</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container m-auto">
        {unitsData.map((unit, index) => (
          <div
            key={index}
            className="unit-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform p-8"
            data-aos="fade-up">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-md">
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

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {unit.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 flex items-center mb-3">
                <FaTasks className="ml-3 text-green-500" /> مهام الإدارة:
              </h3>
              <ul className="pl-6 text-gray-600 space-y-2">
                {unit.tasks.map((task, i) => (
                  <li
                    key={i}
                    className="text-lg">
                    <span className="font-bold text-2xl">-</span> {task}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 flex items-center mb-3">
                <FaCogs className="ml-3 text-red-500" />
                المهارات المطلوبه:
              </h3>
              <ul className="pl-6 text-gray-600 space-y-2">
                {unit.skillsRequired.map((skill, i) => (
                  <li
                    key={i}
                    className="text-lg">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Units;
