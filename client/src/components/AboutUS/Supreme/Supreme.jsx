import { Helmet } from "react-helmet";
import { ORG_NAME } from "../../../lib/constants";

const Supreme = () => {
  const sections = [
    {
      title: "الهيئة العليا",
      subtitle: "مؤسسة شباب قادرون",
      definition:
        "الهيئة العليا لمؤسسة شباب قادرون هي الجهة الإشرافية العليا للمؤسسة، والمسؤولة عن تحديد السياسات والاستراتيجيات العامة، وضمان تحقيق أهداف المؤسسة التي تهدف إلى دعم وتطوير الشباب. تعمل الهيئة كمرجع أساسي لتوجيه الأنشطة والبرامج وضمان انسجامها مع رؤية ورسالة المؤسسة.",
      responsibilities: [
        {
          title: "تحديد السياسات والاستراتيجيات العامة",
          items: [
            "وضع الرؤية والرسالة والمبادئ التوجيهية التي تنظم عمل المؤسسة.",
            "تحديد الأولويات الاستراتيجية لضمان تحقيق الأهداف طويلة المدى.",
          ],
        },
        {
          title: "توجيه الأنشطة والبرامج",
          items: [
            "تقديم التوجيه والإرشاد للأنشطة والبرامج لضمان توافقها مع أهداف المؤسسة.",
            "دعم الابتكار وتطوير المبادرات التي تخدم الشباب والمجتمع.",
          ],
        },
        {
          title: "مراقبة الأداء والتقييم",
          items: [
            "متابعة وتقييم أداء المؤسسة بشكل دوري لضمان جودة الأنشطة والبرامج المقدمة.",
            "تقديم تقارير دورية عن مستوى الإنجاز وإيجاد الحلول للتحديات القائمة.",
          ],
        },
        {
          title: "اتخاذ القرارات الاستراتيجية",
          items: [
            "إصدار القرارات الهامة التي تؤثر على مسار المؤسسة وتطويرها.",
            "ضمان الالتزام بالقوانين واللوائح المعمول بها في المؤسسة.",
          ],
        },
      ],
      composition:
        "الهيئة العليا لمؤسسة شباب قادرون تتألف من أعضاء يتم انتخابهم أو تعيينهم بناءً على اللوائح الداخلية للمؤسسة. يتم اختيار الأعضاء وفقًا لمؤهلاتهم وخبراتهم في مجالات مختلفة، لضمان تنوع الرؤى والكفاءات في قيادة المؤسسة.",
    },
    {
      title: "الهيئة الاستشارية",
      subtitle: "مؤسسة شباب قادرون",
      definition:
        "الهيئة الاستشارية لمؤسسة شباب قادرون هي هيئة فنية تضم مجموعة من الخبراء والمختصين في مجالات متنوعة. تعمل الهيئة على تقديم الاستشارات الفنية والمشورة للمؤسسة لدعم عملها وتطوير مشاريعها وبرامجها بما يساهم في تحقيق أهدافها.",
      responsibilities: [
        {
          title: "تقديم الاستشارات والمشورة الفنية",
          items: [
            "دعم المؤسسة بآراء فنية متخصصة تساعد في تحسين مجالات العمل المختلفة.",
            "تقديم رؤى مبتكرة لتطوير الأنشطة والبرامج بما يتماشى مع أحدث التوجهات.",
          ],
        },
        {
          title: "تقييم الأنشطة والبرامج",
          items: [
            "مراجعة وتقييم البرامج والأنشطة المقدمة من المؤسسة بشكل دوري.",
            "تقديم توصيات لتحسين الأداء وضمان جودة المشاريع.",
          ],
        },
        {
          title: "تحديد الاحتياجات والفرص",
          items: [
            "مساعدة المؤسسة في تحديد احتياجات المجتمع والشباب في مجالات عملها.",
            "اقتراح فرص جديدة لتوسيع نطاق العمل أو تحسينه.",
          ],
        },
        {
          title: "الدعم الفني في التنفيذ",
          items: [
            "تقديم المساعدة الفنية للمؤسسة لضمان تنفيذ المشاريع والبرامج بشكل احترافي.",
            "التعاون مع فرق العمل لتوفير المعرفة والخبرات اللازمة لتحقيق النجاح.",
          ],
        },
      ],
      composition:
        "الهيئة الاستشارية تتكون من أعضاء يتم اختيارهم بناءً على خبراتهم ومهاراتهم في مجالات مختلفة. تشمل الهيئة: خبراء في التنمية الشبابية والتعليم والتدريب، مختصين في التكنولوجيا والابتكار وريادة الأعمال، خبراء في التمويل والاستثمار والتنمية الاقتصادية، وممثلين عن المنظمات والهيئات ذات الصلة بمجالات عمل المؤسسة.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>{ORG_NAME} | الهيئات</title>

        <meta
          name="description"
          content="تعرف على الهيئة العليا والهيئة الاستشارية لمؤسسة شباب قادرون ودورهما في تطوير الشباب والمجتمع."
        />
        <meta
          name="keywords"
          content="الهيئة العليا, الهيئة الاستشارية, مؤسسة شباب قادرون, تطوير الشباب, تمكين المجتمع"
        />
        <meta property="og:title" content="الهيئات | مؤسسة شباب قادرون" />
        <meta
          property="og:description"
          content="اكتشف دور الهيئة العليا والهيئة الاستشارية في مؤسسة شباب قادرون وكيف تساهمان في دعم تطوير الشباب والمجتمع."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content="الهيئات | مؤسسة شباب قادرون" />
        <meta
          name="twitter:description"
          content="تعرف على الهيئة العليا والهيئة الاستشارية لمؤسسة شباب قادرون ودورهما في تمكين الشباب."
        />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
      </Helmet>

      <div className="my-16 space-y-8 px-4 md:px-10 lg:px-20">
        {sections.map((section, index) => (
          <div key={index} className="p-6" data-aos="fade-down">
            <h2 className="underlinee mb-6 pb-5 text-2xl font-extrabold text-neutral-950 md:text-4xl">
              {section.title}
            </h2>
            <p className="mb-6 text-justify text-gray-700">
              {section.definition}
            </p>
            <div className="">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {section.responsibilities.map((responsibility, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-gray-100 p-4 shadow-inner">
                    <h4 className="mb-2 text-lg font-semibold text-primary">
                      {responsibility.title}
                    </h4>
                    <ul className="pl-6 text-gray-700">
                      {responsibility.items.map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <h4 className="mt-6 text-lg font-semibold text-black">
              تكوين الهيئة:
            </h4>
            <p className="mt-2 text-justify text-gray-700">
              {section.composition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supreme;
