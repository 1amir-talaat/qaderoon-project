import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

function InfoCard({ title, subtitle, programs, imageSrc }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container mx-auto my-10 px-4 sm:px-6 md:my-22 lg:px-8">
        <div className="text-center">
          <h1 className="underlineR mx-auto my-10 w-fit py-3.5 text-2xl font-bold md:text-3xl">
            {title}
          </h1>
          <div className="mt-6 flex flex-col-reverse items-center gap-6 md:flex-row">
            <div
              className="text-right md:w-1/2"
              data-aos="fade-down"
              data-aos-duration="1500">
              <h2 className="mb-4 text-2xl font-semibold text-primary md:text-3xl">
                {subtitle}
              </h2>
              <div className="space-y-0 md:space-y-2">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="group flex items-center rounded-lg bg-white p-4 transition-all duration-300 hover:translate-x-2 hover:scale-105">
                    <div className="cursor-default rounded-full border-2 border-primary p-1 group-hover:border-primary group-hover:bg-primary">
                      <AiFillSafetyCertificate className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <h3 className="mr-4 text-xl font-semibold group-hover:text-primary">
                      {program}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={imageSrc}
              alt="Employment Image"
              loading="lazy"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="w-full rounded-lg object-cover shadow-md md:w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
