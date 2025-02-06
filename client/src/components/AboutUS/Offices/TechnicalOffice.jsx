import {
  FaCalendarAlt,
  FaBullhorn,
  FaCogs,
  FaLightbulb,
  FaHandshake,
  FaTasks,
} from "react-icons/fa";

const TechnicalOffice = () => (
  <section className="mt-28 mb-20">
    <h2
      data-aos="fade-down"
      className="underlinee mb-8 flex space-x-2 pb-4 text-xl font-extrabold text-neutral-950 md:text-4xl">
      <FaCogs className="text-4xl text-primary" />
      <span>المكتب الفني – مؤسسة شباب قادرون</span>
    </h2>

    <p
      data-aos="fade-down"
      className="mb-10 text-base leading-relaxed font-bold text-gray-700">
      المكتب الفني هو الوحدة المسؤولة عن تقديم الدعم الفني والتقني للمبادرات
      والأنشطة التي تنفذها مؤسسة شباب قادرون، ويعمل على تحسين الأداء وضمان تنفيذ
      المشاريع بشكل مبتكر وفعال. يهدف المكتب إلى توفير الحلول التقنية المناسبة
      وتطوير البرامج التي تساهم في تحقيق أهداف المؤسسة.
    </p>
    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaCogs className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          الدعم الفني والتقني
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>تقديم الاستشارات الفنية لدعم الأنشطة والمشاريع.</li>
          <li>
            تطوير وتنفيذ الأنظمة والبرامج التقنية التي تساهم في رفع كفاءة العمل.
          </li>
          <li>متابعة أحدث الاتجاهات التقنية واستخدامها لتحسين الأداء.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaTasks className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التخطيط الاستراتيجي
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>
            وضع الخطط الفنية والتقنية لتحقيق الأهداف الاستراتيجية للمؤسسة.
          </li>
          <li>تحديد الأولويات التقنية وتوفير الحلول المناسبة لكل مشروع.</li>
          <li>تطوير خطط الطوارئ لمواجهة التحديات التقنية المحتملة.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaBullhorn className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التدريب والتطوير
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>
            إعداد المحتوى التدريبي للفرق الفنية والإدارية لضمان إلمامهم
            بالتقنيات الحديثة.
          </li>
          <li>
            توفير ورش العمل والدورات التدريبية لتحسين المهارات الفنية لدى
            الأفراد.
          </li>
          <li>
            متابعة الأداء الفني وتقديم الدعم المستمر للتطوير الشخصي والتقني.
          </li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaHandshake className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التنسيق مع الشركاء
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>
            التعاون مع الشركات التقنية، الجامعات، والمختصين لتطوير الحلول
            الفنية.
          </li>
          <li>
            بناء شراكات مع الجهات الحكومية والقطاع الخاص لدعم المبادرات التقنية.
          </li>
          <li>تنسيق العمل بين الفرق الفنية لضمان تنفيذ المشاريع بكفاءة.</li>
        </ul>
      </div>
    </div>

    {/* الأهداف العامة للمكتب الفني */}
    <h3
      data-aos="fade-down"
      className="mt-8 mb-8 text-2xl font-extrabold text-neutral-950">
      الأهداف العامة للمكتب الفني
    </h3>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaCalendarAlt className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            دعم المبادرات والبرامج
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          تقديم الدعم الفني والمشورة لضمان نجاح المبادرات والبرامج.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaLightbulb className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            الابتكار والتحول الرقمي
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          تطوير الحلول التقنية التي تسهم في تحسين الأداء والابتكار داخل المؤسسة.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaHandshake className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            تعزيز التعاون والشراكات
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          بناء شراكات استراتيجية تدعم التطور التقني للمؤسسة.
        </p>
      </div>
    </div>
  </section>
);

export default TechnicalOffice;
