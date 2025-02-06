import {
  FaChessKing,
  FaClipboardCheck,
  FaHandshake,
  FaLightbulb,
  FaMoneyCheckAlt,
} from "react-icons/fa";
export const Missions = () => {
  const cardsData = [
    {
      id: 1,
      title: "الرؤية والاستراتيجية",
      icon: <FaClipboardCheck className="h-6 w-6 text-red-600" />,
      items: [
        "وضع رؤية المؤسسة وأهدافها الاستراتيجية",
        "تحديد المجالات الرئيسية للتركيز",
      ],
    },
    {
      id: 2,
      title: "اتخاذ القرارات الاستراتيجية",
      icon: <FaChessKing className="h-6 w-6 text-red-600" />,
      items: [
        "اتخاذ القرارات المتعلقة بالسياسات العامة والبرامج الكبيرة التي تقوم بها المؤسسة.",
        "وضع خطط عمل شاملة لضمان تنفيذ المبادرات الاستراتيجية",
      ],
    },
    {
      id: 3,
      title: "مراقبة الأداء والتقدم",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      items: [
        "متابعة الأداء العام للمؤسسة وتقييم مدى نجاح الفعاليات والمشاريع التي يتم تنفيذها.",
        "متابعة الأداء العام للمؤسسة وتقييم مدى نجاح الفعاليات والمشاريع التي يتم تنفيذها.",
      ],
    },
    {
      id: 4,
      title: "إدارة الموارد المالية",
      icon: <FaMoneyCheckAlt className="h-6 w-6 text-red-600" />,
      items: [
        "توفير الدعم المالي للمؤسسة والموافقة على الموازنة السنوية.",
        "البحث عن شراكات استراتيجية ومستدامة تساهم في تمويل مشاريع المؤسسة.",
      ],
    },
    {
      id: 5,
      title: "تمثيل المؤسسة",
      icon: <FaHandshake className="h-6 w-6 text-red-600" />,
      items: [
        "تمثيل المؤسسة في المناسبات الرسمية والمشاركة في الشبكات المحلية والدولية.",
        "بناء علاقات مع الشركاء الرئيسيين، سواء كانوا حكومات أو مؤسسات غير ربحية أو شركات.",
      ],
    },
    {
      id: 6,
      title: "دعم التوجهات المستقبلية",
      icon: <FaLightbulb className="h-6 w-6 text-red-600" />,
      items: [
        "تقديم الاستشارات والتوجيه فيما يتعلق بتطوير استراتيجيات المؤسسة والنمو المستدام.",
        "دعم القيادة التنفيذية في اتخاذ القرارات الحاسمة في الأوقات المناسبة.",
      ],
    },
  ];
  return (
    <div className="mb-20">
      <section className="container mx-auto" style={{ padding: "1px" }}>
        <div className="mx-auto px-4" data-aos="fade-down">
          <h2
            data-aos="fade-down"
            className="underlineR mt-15 mb-6 pb-5 text-2xl font-extrabold text-neutral-950 md:text-4xl">
            المهام والمسؤوليات
          </h2>

          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-down">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="group rounded-2xl border-l-4 border-transparent bg-white p-7 shadow-md shadow-black/30 transition-all duration-300 hover:border-red-600 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                  {card.icon}
                </div>
                <h3 className="mb-5 text-xl font-semibold text-gray-800">
                  {card.title}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {card.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-justify leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
