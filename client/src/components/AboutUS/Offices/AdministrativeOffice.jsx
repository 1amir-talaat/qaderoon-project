import {
  FaUsers,
  FaMoneyBillWave,
  FaTasks,
  FaRegLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

const AdministrativeOffice = () => (
  <section className="mb-20">
    <h2
      data-aos="fade-down"
      className="underlinee mb-8 flex space-x-2 pb-4 text-xl font-extrabold text-neutral-950 md:text-4xl">
      <FaUsers className="text-4xl text-primary" />
      <span>المكتب الإداري – مؤسسة شباب قادرون</span>
    </h2>

    <p
      data-aos="fade-down"
      className="mb-10 text-base leading-relaxed font-bold text-gray-700">
      المكتب الإداري هو الوحدة المسؤولة عن إدارة الشؤون الإدارية والمالية لمؤسسة
      شباب قادرون، ويعمل على توفير الدعم اللازم للأنشطة والبرامج التي تنفذها
      المؤسسة من الناحيتين الإدارية والمالية، بما يضمن سير العمل بكفاءة وفعالية.
    </p>

    {/* المهام والمسؤوليات */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaMoneyBillWave className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          الإدارة المالية
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>إعداد الميزانية العامة للمؤسسة ومتابعة تنفيذها.</li>
          <li>
            مراقبة المصروفات والإيرادات لضمان التوافق مع السياسات المالية.
          </li>
          <li>إعداد التقارير المالية الدورية لضمان الشفافية والمساءلة.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaUsers className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          الإدارة الشخصية
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>إدارة سجلات العاملين والمتطوعين داخل المؤسسة.</li>
          <li>تنظيم عمليات التوظيف والتدريب لضمان كفاءة الفريق.</li>
          <li>متابعة الحضور والأداء وتوفير الدعم اللازم للأفراد.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaTasks className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          الشؤون الإدارية
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>تنظيم الوثائق والمراسلات الرسمية للمؤسسة.</li>
          <li>إدارة المكاتب والمرافق لضمان توافر بيئة عمل مريحة ومنظمة.</li>
          <li>متابعة متطلبات المؤسسة من موارد وأدوات تشغيلية.</li>
        </ul>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl border-l-8 border-primary bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <FaRegLightbulb className="mb-6 text-5xl text-primary" />
        <h4 className="mb-4 text-xl font-bold text-gray-800">
          التنظيم والتخطيط
        </h4>
        <ul className="text-base leading-relaxed text-gray-600">
          <li>وضع خطط تشغيلية لدعم الأهداف الاستراتيجية للمؤسسة.</li>
          <li>
            التنسيق مع الأقسام واللجان المختلفة لتسهيل تنفيذ الأنشطة والبرامج.
          </li>
          <li>تطوير نظم وإجراءات تنظيمية لتعزيز كفاءة العمل.</li>
        </ul>
      </div>
    </div>

    {/* أهداف المكتب */}
    <h3
      data-aos="fade-down"
      className="mt-8 mb-8 text-2xl font-extrabold text-neutral-950">
      أهداف المكتب الإداري
    </h3>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaMoneyBillWave className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            دعم الأنشطة والبرامج
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          دعم الأنشطة والبرامج للمؤسسة من الناحية الإدارية والمالية.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaTasks className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">ضمان سير العمل</h4>
        </div>
        <p className="text-lg text-gray-600">
          ضمان سير العمل بشكل منظم ومتوافق مع أهداف المؤسسة.
        </p>
      </div>

      <div
        data-aos="fade-down"
        className="transform rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4 flex items-center space-x-4">
          <FaHandsHelping className="text-4xl text-primary" />
          <h4 className="text-xl font-bold text-gray-800">
            تعزيز كفاءة الموارد
          </h4>
        </div>
        <p className="text-lg text-gray-600">
          تعزيز كفاءة الموارد البشرية والمادية لتحقيق التأثير الإيجابي المستدام.
        </p>
      </div>
    </div>
  </section>
);
export default AdministrativeOffice;
