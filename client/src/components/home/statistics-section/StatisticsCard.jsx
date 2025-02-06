import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticsCard = ({ icon, number, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // العد يتم مرة
    threshold: 0.5, // يبدأ العد عندما يكون 50% من العنصر مرئيًا
  });

  return (
    <div
      ref={ref}
      className="flex h-50 w-50 transform cursor-default flex-col items-center justify-center rounded-xl border-2 border-transparent bg-gradient-to-r from-[#da1e33] to-[#a21c34] p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="mb-2 text-6xl text-white">{icon}</div>
      <p className="text-3xl font-bold text-white">
        {inView ?
          <CountUp end={number} duration={2} />
        : number}
      </p>
      <p className="mt-1 text-xl font-medium text-white">{label}</p>
    </div>
  );
};

export default StatisticsCard;
