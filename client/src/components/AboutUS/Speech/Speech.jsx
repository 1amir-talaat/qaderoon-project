import { Helmet } from "react-helmet-async";
import { ORG_NAME } from "../../../lib/constants";
import "./speech.css";

function Speech() {
  return (
    <>
      <Helmet>
        <title>{ORG_NAME} | كلمة رئيس المؤسسة </title>
        <meta
          name="description"
          content="اقرأ كلمة رئيس المؤسسة وائل محمد الشريف حول رؤية مؤسسة شباب قادرون في تمكين الشباب وتحقيق التنمية المستدامة في مصر والوطن العربي."
        />
        <meta
          name="keywords"
          content="كلمة رئيس المؤسسة, شباب قادرون, وائل محمد الشريف, تمكين الشباب, التنمية المستدامة"
        />
        <meta property="og:title" content="كلمة رئيس المؤسسة | شباب قادرون" />
        <meta
          property="og:description"
          content="اكتشف كلمة رئيس مؤسسة شباب قادرون وائل محمد الشريف حول رؤيتنا لتحقيق التنمية المستدامة وتمكين الشباب."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/WhoWe/Speech/Head-of-the-institution.jpg"
        />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qaderoon492" />
        <meta name="twitter:title" content="كلمة رئيس المؤسسة | شباب قادرون" />
        <meta
          name="twitter:description"
          content="تعرف على كلمة رئيس مؤسسة شباب قادرون وائل محمد الشريف حول تمكين الشباب وتحقيق التنمية المستدامة."
        />
        <meta
          name="twitter:image"
          content="/images/WhoWe/Speech/Head-of-the-institution.jpg"
        />
      </Helmet>

      <div
        data-aos="fade-down"
        className="container mx-auto my-6 items-center gap-6 p-6 lg:my-20">
        <h2 className="underlinee mb-6 pb-5 text-2xl font-extrabold text-neutral-950 md:text-4xl">
          كلمة <span className="relative text-primary">رئيس المؤسسة</span>
        </h2>
        <div className="flex w-full flex-col gap-6 xl:flex-row">
          {/* Image Section Mobile */}
          <div className="flex w-full justify-center xl:hidden xl:w-1/2">
            <img
              loading="lazy"
              src="/images/WhoWe/Speech/Head-of-the-institution.jpg"
              alt="Head of the institution"
              className="h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full xl:w-2/3">
            <p
              className="text-base text-gray-800 md:text-xl"
              style={{ lineHeight: "1.8" }}>
              في{" "}
              <span className="font-semibold text-secondary">شباب قادرون</span>،
              نؤمن بأن الابتكار وريادة الأعمال هما الأساس لتحقيق تنمية اقتصادية
              واجتماعية مستدامة في مصر والوطن العربي. رؤيتنا ترتكز على بناء
              مجتمع مزدهر يعتمد على تمكين الشباب ودعمهم لتحويل أفكارهم إلى
              مشاريع ريادية مؤثرة. نسعى جاهدين لبناء قدرات الشباب وتمكينهم من
              مواجهة التحديات المتجددة من خلال برامج ومبادرات تعزز مشاركتهم
              الفعالة. نحن نعمل بتعاون وثيق مع الجهات الحكومية والخاصة، ومع
              شركائنا الإقليميين والدوليين، لتعزيز مهاراتهم الريادية والإبداعية
              وإعدادهم ليكونوا قادة قادرين على بناء مستقبل أفضل. نؤمن بأن تمكين
              المرأة هو ركيزة أساسية لتحقيق التنمية المستدامة، كما نولي اهتمامًا
              خاصًا بقضايا البيئة والتكنولوجيا باعتبارهما عوامل رئيسية للنمو
              والتقدم. دعم البحث العلمي والمشروعات الناشئة والصناعة هو جزء لا
              يتجزأ من استراتيجيتنا، حيث نعمل على تعزيز الابتكار في كافة
              القطاعات الاقتصادية لضمان تقدم مستدام. في{" "}
              <span className="font-semibold text-secondary">شباب قادرون</span>،
              نعتبر أن التنمية المستدامة مسؤولية مشتركة، وتتطلب تكاتف الجهود بين
              جميع الأطراف. ومن خلال شراكاتنا الاستراتيجية ودعم الابتكار، نواصل
              العمل لتحقيق تنمية شاملة تلبي تطلعات الشباب وتواكب أهداف{" "}
              <span className="font-semibold text-secondary">
                الاستراتيجية الوطنية لمصر 2030
              </span>
              .
              <br />
              <br />
              <span className="font-bold text-secondary">
                وائل محمد الشريف
              </span>{" "}
              <br />
              <span className="font-bold text-secondary">
                رئيس مجلس الأمناء
              </span>{" "}
              <br />
              <span className="font-bold text-secondary">
                رئيس مؤسسة شباب قادرون للتنمية المستدامة
              </span>
            </p>
          </div>

          {/* Image Section Desktop*/}
          <div className="hidden w-full justify-center xl:flex xl:w-1/2">
            <img
              loading="lazy"
              src="/images/WhoWe/Speech/Head-of-the-institution.jpg"
              alt="Head of the institution"
              className="h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Speech;
