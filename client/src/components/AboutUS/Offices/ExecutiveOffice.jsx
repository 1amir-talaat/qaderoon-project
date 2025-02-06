import {
  FaClipboardList,
  FaCalendarAlt,
  FaBullhorn,
  FaCogs,
  FaUsersCog,
} from "react-icons/fa";

const ExecutiveOffice = () => (
  <section className="mt-28 mb-20">
    <h2
      data-aos="fade-down"
      className="underlinee mb-8 flex space-x-2 pb-4 text-xl font-extrabold text-neutral-950 md:text-4xl">
      <FaCalendarAlt className="text-4xl text-primary" />
      <span>المكتب التنفيذي – مؤسسة شباب قادرون</span>
    </h2>

    <p
      data-aos="fade-down"
      className="mb-10 text-base leading-relaxed font-bold text-gray-700">
      المكتب التنفيذي هو الواجهة الرئيسية لمؤسسة شباب قادرون، والمسؤولة عن تنظيم
      المبادرات وإدارة الفعاليات والندوات والمؤتمرات التي تخص المؤسسة. تهدف
      المكتب إلى ضمان نجاح جميع الفعاليات من خلال تقديم حلول مبتكرة وغير
      تقليدية، مع التركيز على متابعة تطور عمل اللجان الأخرى وتسهيل التواصل بينها
      وبين الإدارة.
    </p>
    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaCalendarAlt className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          تنظيم المبادرات والفعاليات
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>
            تخطيط شامل لجميع جوانب الفعالية، بما في ذلك إعداد البرامج، تحديد
            الأماكن، وتنسيق الجداول الزمنية.
          </li>
          <li>
            إدارة جميع التفاصيل اللوجستية مثل التسجيل، التجهيزات الفنية،
            والاستضافة.
          </li>
          <li>التنسيق مع الأطراف المعنية لضمان تنظيم فعاليات سلسة ومميزة.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaCogs className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التنسيق بين اللجان
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>التأكد من تنسيق العمل بين مختلف اللجان التنظيمية.</li>
          <li>دعم الفعاليات من خلال تقديم التوجيهات والمساعدة.</li>
          <li>مراقبة التقدم وتقديم الحلول لأي مشاكل تطرأ.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaBullhorn className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التواصل والدعاية
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>إعداد الحملات الدعائية والإعلانية للمبادرات.</li>
          <li>تنظيم المؤتمرات الصحفية والظهور الإعلامي.</li>
          <li>التفاعل مع الجمهور والمؤسسات الشريكة لضمان النجاح.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaUsersCog className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          إدارة العلاقات العامة
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>إدارة العلاقات مع الشركاء والرعاة والجهات المعنية.</li>
          <li>التنسيق بين مختلف الأطراف لتسهيل تبادل المعلومات.</li>
          <li>تطوير استراتيجيات التعاون طويلة الأمد.</li>
        </ul>
      </div>
    </div>

    {/* أهداف المكتب التنفيذي */}
    <h3
      data-aos="fade-down"
      className="mt-8 mb-8 text-2xl font-extrabold text-neutral-950">
      أهداف المكتب التنفيذي
    </h3>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaCalendarAlt className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            تنظيم فعاليات متميزة
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          العمل على تنظيم فعاليات متميزة ومتكاملة تسهم في تحقيق أهداف المؤسسة
          وتلبي احتياجات المشاركين.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaBullhorn className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">خلق بيئة محفزة</h4>
        </div>
        <p className="text-lg text-gray-600">
          خلق بيئة محفزة تزيد من تفاعل المشاركين وتشجعهم على المساهمة الفعالة في
          الفعاليات.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaCogs className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            تطوير حلول غير تقليدية
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          تطوير حلول غير تقليدية تسهم في تحسين تنظيم الفعاليات وتعزيز تجربة
          الحضور.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaUsersCog className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            ضمان التنسيق بين اللجان
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          ضمان سهولة التنسيق بين جميع اللجان المختلفة لتحقيق تكامل وتنظيم محكم
          لجميع الأنشطة.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaClipboardList className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            تحسين فعالية الإدارة
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          تحسين فعالية إدارة الفعاليات من خلال إدارة دقيقة لكل التفاصيل
          اللوجستية والبروتوكولات.
        </p>
      </div>
    </div>
  </section>
);

export default ExecutiveOffice;
