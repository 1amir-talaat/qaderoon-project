import { FaHandshake } from "react-icons/fa";

const Cards = () => {
  const data = [
    {
      title: "الرؤيه",
      icon: "/images/WhoWe/see-svgrepo-com.svg",
      para: "صناعة جيل شبابي واعي قادر علي بناء مستقبل وطنه",
    },
    {
      title: "الاهداف",
      icon: <FaHandshake className="h-12 w-12 text-white" />,
      para: "نعمل علي نشر الوعي الوطني و تنمية قدرات الشباب و دعم البحث العلمي و التشجيع علي الابتكار وريادة الاعمال والمشاركة المجتمعية والتطوعية ودعم رؤية مصر 2030 للتنمية المستدامة",
    },
    {
      title: "رسالة",
      icon: "/images/WhoWe/personal-network-2-svgrepo-com.svg",
      para: "رفع كفاءة الشباب من خلال توسيع الخيارات المتاحه لهم وبناء قدراتهم للمشاركة في صنع مستقبل ايجابي مستدام لوطنهم",
    },
  ];

  return (
    <div className="mx-2 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data.map((object, index) => {
        // Determine the appropriate heading level based on its index or context
        // If this is a list of sections, you might want to use <h2> or <h3> accordingly
        // In this case, let's assume <h2> is appropriate for this section
        const HeadingTag = index === 0 ? "h2" : "h3"; // Example to use <h2> for the first item, then <h3> for others
        return (
          <div
            data-aos="fade-up"
            className="transform cursor-pointer rounded-xl bg-white shadow-sm shadow-black/40 transition-all duration-300 hover:scale-105 hover:shadow-md"
            key={object.title}>
            <div className="p-6">
              <div className="mb-6 flex justify-center">
                <div className="transform rounded-full bg-primary p-4 shadow-md transition-transform hover:scale-110">
                  {/* Render the icon dynamically */}
                  {typeof object.icon === "string" ?
                    <img
                      loading="lazy"
                      src={object.icon}
                      alt="icon"
                      className="h-12 w-12"
                    />
                  : object.icon}
                </div>
              </div>
              {/* Use the dynamically determined HeadingTag */}
              <HeadingTag className="mb-4 text-2xl font-semibold text-gray-800">
                {object.title}
              </HeadingTag>
              <p className="text-base leading-relaxed text-gray-600">
                {object.para}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
