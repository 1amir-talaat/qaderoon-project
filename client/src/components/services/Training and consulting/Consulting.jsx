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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-22">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
            <div
              className="w-full md:w-1/2 flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1500">
              <img
                src="/images/ac-pic.png"
                alt="pic"
                loading="lazy"
                className="rounded-lg shadow-md object-cover max-h-80 md:max-h-[450px] w-full"
              />
            </div>
            <div
              className="w-full md:w-1/2 text-right"
              data-aos="fade-down"
              data-aos-duration="1500">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                الاستشارات
              </h2>
              <div className="space-y-4">
                {trainingPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg flex items-center group hover:translate-x-2 hover:scale-105 transition-all duration-300 ">
                    <div className="border-2 border-primary rounded-full p-1 group-hover:bg-primary group-hover:border-primary cursor-default">
                      <AiFillSafetyCertificate className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mr-4 group-hover:text-primary">
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
