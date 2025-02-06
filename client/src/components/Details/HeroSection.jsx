import { HOST_SERVER } from "../../lib/constants";

const HeroSection = ({ item, children }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative mx-auto mb-4 aspect-video h-full w-full max-w-screen cursor-default transition-transform duration-500 md:mb-0 md:max-w-screen-lg lg:hover:scale-105">
        <div className="absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black" />
        <img
          loading="lazy"
          src={item.img ? `${HOST_SERVER}/imgs/${item.img}` : ""}
          className="absolute top-0 left-0 z-0 h-full w-full bg-black object-cover"
          alt={item.title}
        />

        {/* Header */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-4">
          <h2 className="text-lg leading-tight font-semibold text-white md:text-2xl lg:text-3xl">
            {item.title}
          </h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
