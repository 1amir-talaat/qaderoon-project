import { MdCastForEducation } from "react-icons/md";
import { PiVideoConference } from "react-icons/pi";
import { RiUserCommunityFill } from "react-icons/ri";
import { Md6FtApart } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

import StatisticsCard from "./StatisticsCard";

const StatisticsSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="mb-8 text-center">
      <h2 className="underlineR text-2xl font-bold text-primary md:text-3xl">
        الإحصائيات
      </h2>
      <p className="text-md mt-2 text-gray-600 md:text-lg">
        أرقام تعبر عن تميز وريادة المؤسسة
      </p>
      {/* <div className="w-16 h-1 bg-[#a21c34] mt-2 mx-auto"></div> */}
    </div>

    <div className="flex flex-wrap justify-center gap-2 px-[1px] md:gap-10">
      <StatisticsCard
        icon={<PiVideoConference />}
        number="6"
        label="المؤتمرات"
      />
      <StatisticsCard
        icon={<MdCastForEducation />}
        number="85"
        label="الدورات"
      />
      <StatisticsCard
        icon={<RiUserCommunityFill />}
        number="8700"
        label="أعضاء المؤسسة"
      />
      <StatisticsCard icon={<Md6FtApart />} number="38" label="الشركاء" />
      <StatisticsCard icon={<FaMicrophone />} number="92" label="الندوات" />
    </div>
  </section>
);

export default StatisticsSection;
