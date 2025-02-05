// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { AiFillSafetyCertificate } from "react-icons/ai";

import InfoCard from "../../../utils/InfoCard";

function Certification() {
  const CertificationServices = [
    "تحقق من صحة الشهادات الأكاديمية والمهنية",
    "تحقق من صحة الوثائق والشهادات المطلوبة لتوظيف الموظفين",
    "خدمات التحقق من الهوية والخلفية",
    "تحقق من صحة المعلومات المطلوبة لاتخاذ القرارات التجارية",
  ];

  return (
    <InfoCard
      title="التحقق من الشهادات"
      subtitle="خدمات التحقق"
      programs={CertificationServices}
      imageSrc="/images/pyramids.jpg"
    />
  );
}

export default Certification;
