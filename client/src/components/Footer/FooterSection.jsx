import { Link } from "react-router-dom";

const FooterSection = ({ label, link, subItems }) => (
  <div className="space-y-3">
    <Link
      className="uppercas text-lg font-bold tracking-wide text-gray-900 transition-colors duration-300 hover:text-primary"
      to={link}>
      {label}
    </Link>
    <ul className="text-md mt-6 space-y-4">
      {subItems.map((item, index) => (
        <li key={index}>
          <Link
            rel="noopener noreferrer"
            to={item.link}
            className="block transform font-medium transition-transform duration-200 hover:-translate-x-3">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
