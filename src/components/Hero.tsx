import Image from "next/image";
import arrowImage from "../assests/images/arrow.png";
import dartImage from "../assests/images/dart.png";

export const Hero = () => {
  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 relative overflow-clip
      bg-[linear-gradient(to_bottom,_#0B0F19,_#1E293B_64%,_#38BDF8_82%)]"
    >
      <div
        className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3000px] lg:h-[1200px]
        rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#60DBF9]
        bg-[radial-gradient(closest-side,#000_82%,#38BDF8)] top-[calc(100%-125px)] sm:top-[calc(100%-120px)] 
        pointer-events-none select-none"
      />

      <div className="@container relative px-4 @sm:px-6 @lg:px-8">
        <div className="flex justify-center mt-8">
          <div className="relative max-w-4xl w-full mx-auto">
            <h1 className="text-5xl @sm:text-6xl @lg:text-7xl font-bold tracking-tight leading-tight text-center">
              Outsmart Your <br />
              Competition Instantly
            </h1>

            <Image
              src={arrowImage}
              alt=""
              width={300}
              height={300}
              className="absolute left-[-50px] top-[150px] transform -rotate-50 hidden lg:inline"
            />
            <Image
              src={dartImage}
              alt=""
              width={500}
              height={500}
              className="absolute top-[-195px] left-[670px] hidden lg:inline"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-lg sm:text-xl mt-8 max-w-md px-4">
            ScopeViral tracks your competitors’ pricing, features, and
            positioning in real time — using AI. Get instant alerts and insights
            so you always stay one step ahead.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};
