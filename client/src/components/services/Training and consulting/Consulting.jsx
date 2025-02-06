import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Consulting() {
  useEffect(() => {
    AOS.init();
  }, []);

  const trainingPrograms = [
    "استشارات في مجال التسويق الرقمي",
    "استشارات لتحسين الأداء والكفاءة في مكان العمل",
    "تحليلات سوق ودراسات جدوى",
    "استشارات لتحسين الثقافة التنظيمية",
  ];

  return (
    <div>
      <div className="container mx-auto my-10 px-4 sm:px-6 md:my-22 lg:px-8">
        <div className="text-center">
          <div className="mt-10 flex flex-col items-center justify-between gap-10 md:flex-row">
            <div
              className="flex w-full justify-center md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1500">
              <img
                src="/images/ac-pic.png"
                alt="pic"
                loading="lazy"
                className="max-h-80 w-full rounded-lg object-cover shadow-md md:max-h-[450px]"
              />
            </div>
            <div
              className="w-full text-right md:w-1/2"
              data-aos="fade-down"
              data-aos-duration="1500">
              <h2 className="mb-6 text-2xl font-semibold text-primary md:text-3xl">
                الاستشارات
              </h2>
              <div className="space-y-4">
                {trainingPrograms.map((program, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
