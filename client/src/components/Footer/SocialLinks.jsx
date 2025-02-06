import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/qaderoon492",
    icon: <FaFacebookF className="size-8" />,
    color: "#3B5999",
  },
  {
    platform: "X",
    href: "https://x.com/qaderoon492",
    icon: <FaXTwitter className="size-8" />,
    color: "#000",
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/qaderoon492/",
    icon: <FaInstagram className="size-8" />,
    color: "#E1308B",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/qaderoon492",
    icon: <FaLinkedin className="size-8" />,
    color: "#0077B5",
  },
  {
    platform: "WhatsApp",
    href: "https://web.whatsapp.com/send/?phone=201000820029",
    icon: <FaWhatsapp className="size-8" />,
    color: "#25D366",
  },
  {
    platform: "Youtube",
    href: "https://www.youtube.com/@qaderoon492",
    icon: <FaYoutube className="size-8" />,
    color: "#DE463B",
  },
];

const SocialLinks = () => {
  return (
    <ul className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:mt-4 lg:gap-8">
      {links.map((link, index) => (
        <li key={index}>
          <SocialIcon
            platform={link.platform}
            href={link.href}
            color={link.color}>
            {link.icon}
          </SocialIcon>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
