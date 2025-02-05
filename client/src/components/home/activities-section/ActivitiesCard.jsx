import InfoCard from "../../../utils/InfoCard";

function ActivitiesCard() {
  const trainingPrograms = [
    "برنامج شباب قادرون للتأهيل لسوق العمل",
    "منحة شباب قادرون للقيادة والريادة",
    "دبلومة ريادة الأعمال",
    "زمالة شباب قادرون لبناء قدرات المجتمع المدني",
    "برنامج تأهيل الكوادر البشرية للعمل العام",
    "التسويق الرقمي وإدارة العلامات التجارية",
    "برامج التأهيل المهنى والتقنى",
  ];

  return (
    // <div>
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10 md:my-22">
    //     <div className="text-center">
    //       <h1 className="text-2xl md:text-3xl font-bold py-3.5 underlineR w-fit mx-auto">
    //         أنشطة المؤسسة
    //       </h1>
    //       <div className="flex flex-col-reverse md:flex-row mt-6 gap-6">
    //         <div
    //           className="md:w-1/2 text-right"
    //           data-aos="fade-down"
    //           data-aos-duration="1500">
    //           <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
    //             البرامج التدريبية
    //           </h2>
    //           <div className="space-y-0 md:space-y-2">
    //             {" "}
    //             {trainingPrograms.map((program, index) => (
    //               <div
    //                 key={index}
    //                 className="bg-white p-4 rounded-lg flex items-center group hover:translate-x-2 hover:scale-105 transition-all duration-300">
    //                 <div className="border-2 border-primary rounded-full p-1 group-hover:bg-primary group-hover:border-primary cursor-default">
    //                   <AiFillSafetyCertificate className="text-lg text-primary group-hover:text-white" />
    //                 </div>
    //                 <h3 className="text-xl font-semibold mr-4 group-hover:text-primary">
    //                   {" "}
    //                   {program}
    //                 </h3>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <img
    //           src="/images/ac-pic.png"
    //           alt="pic"
    //           loading="lazy"
    //           data-aos="fade-up"
    //           data-aos-duration="1500"
    //           className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <InfoCard
      title="أنشطة المؤسسة"
      subtitle="البرامج التدريبية"
      programs={trainingPrograms}
      imageSrc="/images/ac-pic.png"
    />
  );
}

export default ActivitiesCard;
