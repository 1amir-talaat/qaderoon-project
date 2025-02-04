import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Certification() {
  useEffect(() => {
    AOS.init();
  }, []);

  const trainingPrograms = [
    "تحقق من صحة الشهادات الأكاديمية والمهنية",
    "تحقق من صحة الوثائق والشهادات المطلوبة لتوظيف الموظفين",
    "خدمات التحقق من الهوية والخلفية",
    "تحقق من صحة المعلومات المطلوبة لاتخاذ القرارات التجارية",
  ];

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-22">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold py-3.5 underlineR w-fit mx-auto my-10">
            التحقق من الشهادات
          </h1>
          <div className="flex flex-col-reverse md:flex-row items-center mt-6 gap-6">
            <div
              className="md:w-1/2 text-right"
              data-aos="fade-down"
              data-aos-duration="1500">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                خدمات التحقق
              </h2>
              <div className="space-y-0 md:space-y-2">
                {" "}
                {trainingPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg flex items-center group hover:translate-x-2 hover:scale-105 transition-all duration-300">
                    <div className="border-2 border-primary rounded-full p-1 group-hover:bg-primary group-hover:border-primary cursor-default">
                      <AiFillSafetyCertificate className="text-lg text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mr-4 group-hover:text-primary">
                      {" "}
                      {program}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="/images/pyramids.jpg"
              alt="pic"
              loading="lazy"
              data-aos="fade-up"
              data-aos-duration="1500"
              className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification;
