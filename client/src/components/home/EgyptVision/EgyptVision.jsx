import { FaArrowLeft } from "react-icons/fa";
import "./EgyptVision.css";

const data = {
  title: "رؤية مصر",
  visionArray: [
    "أطلقتْ جمهورية مصر العربية عام 2016 النسخةَ الأولى من استراتيجية التنمية المستدامة: رؤية مصر 2030، كنقطة ارتكاز أساسية لمسيرة التنمية الشاملة، آخذةً بعين الاعتبار الأولويات والطموحات الوطنية لرسم خارطة طريق تُحقّق التنمية المستدامة، وتلبِّي أحلام الشعب المصري وتطلعاته في الحياة الكريمة اللائقة، بما يُعظِّم الاستفادة من جميع مُقوّمات الدولة المصرية وإمكاناتها.",
    "ونظرًا إلى ما شهدته السنوات السبع السابقة من تغيّرات وتحدّيات دوليّة وإقليميّة ومحلّية، سعتْ وزارة التخطيط والتنمية الاقتصادية إلى تحديث النسخة الأولى من الرؤية، عن طريق عملية تشاركية تضافرتْ فيها جهود جميع الفاعلين وشركاء التنمية من الجهات الحكومية، وممثلي القطاع الخاص والمجتمع المدني، مع الاستعانة بمجموعة متميّزة من الخبراء والأساتذة الأكاديميين وذوي الخبرة من جميع التخصّصات.",
    `وفي هذا الإطار، تم إصدار النسخة المحدثة من "رؤية مصر 2030" والتي حددت أربعة مبادئ حاكمة تمثل الركائز الرئيسية التي تحكم تنفيذ الأهداف الاستراتيجية الستة للرؤية باستخدام سبعة ممكنات تمثل أدوات لتسريع تحقيق التنمية المستدامة في مصر.`,
    "كما تتضمَّن الرؤية المحدثة عددًا من المؤشرات الاستراتيجية لمتابعة الأداء والتقدّم المُحرَز، مع تحديد المستهدفات الكمية المرجو الوصول إليها، بهدف المتابعة والتقييم والمراجعة، ومن ثَمَّ تحسين الأداء بصورة دورية.",
  ],
};

const EgyptVision = () => {
  return (
    <>
      <section
        className="ev-section flex flex-col place-items-center p-7 pb-10"
        loading="lazy">
        <h2 className="underlineR mb-6 pb-5 text-3xl font-extrabold text-stone-100 md:text-4xl">
          {data.title} <span className="relative top-1 text-primary">2030</span>
        </h2>
        <div className="container grid grid-cols-1 place-items-center gap-16 text-stone-100 lg:grid-cols-2">
          <div className="space-y-5">
            {data?.visionArray.map(t => <p key={t}>{t}</p>)}

            <a
              className="ev-button group flex w-fit bg-secondary"
              href="https://www.presidency.eg/AR/%D9%85%D8%B5%D8%B1/%D8%B1%D8%A4%D9%8A%D8%A9-%D9%85%D8%B5%D8%B1-2030/"
              target="_blank"
              rel="noopener noreferrer">
              <p>معرفة المزيد</p>
              <FaArrowLeft className="ev-arrow group-hover:-translate-x-2" />
            </a>
          </div>
          <img
            src="/images/egypt-vision.png"
            loading="lazy"
            className="hidden rounded object-scale-down lg:block"
            alt={data.title}
          />
        </div>
      </section>
    </>
  );
};

export default EgyptVision;
