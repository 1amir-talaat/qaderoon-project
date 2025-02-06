import { Link } from "react-router-dom";

const Dropdown = ({ subItems, renderSubItems }) => (
  <ul className="absolute top-full right-0 z-50 max-h-0 min-w-[230px] space-y-2 overflow-hidden rounded-2xl bg-white px-6 text-base shadow-xl transition-all duration-[400ms] group-hover:max-h-[700px] group-hover:pt-6 group-hover:pb-4 group-hover:opacity-100">
    {subItems.map((subItem, index) => (
      <li key={index} className="border-b pt-2 pb-4 text-gray-200">
        <Link
          to={subItem.link}
          className="flex items-center font-bold text-secondary hover:text-[#262e30]">
          {subItem.label}
        </Link>
        {subItem.subItems && renderSubItems(subItem.subItems)}
      </li>
    ))}
  </ul>
);

export default Dropdown;
