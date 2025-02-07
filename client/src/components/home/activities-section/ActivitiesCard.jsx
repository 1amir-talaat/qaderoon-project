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
    <>

      <InfoCard
        title="أنشطة المؤسسة"
        subtitle="البرامج التدريبية"
        programs={trainingPrograms}
        imageSrc="/images/ac-pic.png"
      />
    </>
  );
}

export default ActivitiesCard;