import { Link } from "react-router-dom";
import { ORG_NAME } from "../../lib/constants";

export const Logo = () => (
  <Link
    to="/"
    rel="noopener noreferrer"
    href="/"
    className="flex justify-center space-x-6 select-none">
    <span className="logo self-center pt-5 text-3xl text-primary">
      {ORG_NAME}
    </span>

    <div className="bg-default-400 flex size-16 items-center justify-center rounded-full">
      <img loading="lazy" src="/images/logo.png" alt="Qaderoon Logo" />
    </div>
  </Link>
);

export default Logo;
