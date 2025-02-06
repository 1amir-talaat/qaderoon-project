import LinksData from "../../data/LinksData";
import "./Footer.css";
import FooterSection from "./FooterSection";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-12 pb-6 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="f-social-links sm:flex sm:items-center sm:justify-between">
            <Logo />
            <SocialLinks />
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 xl:grid-cols-6">
            {LinksData &&
              LinksData.map(({ label, link, subItems }) => (
                <FooterSection
                  key={label}
                  label={label}
                  link={link}
                  subItems={subItems !== undefined ? subItems : []}
                />
              ))}
          </div>

          <p className="py-4 text-center text-base text-gray-700" dir="ltr">
            © 2025 Qaderoon Co. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
