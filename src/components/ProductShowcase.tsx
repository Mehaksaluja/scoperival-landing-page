import Image from "next/image";
import appScreen from "../assests/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#60DBF9] py-[72px]">
      <div className="@conatiner p-4 ">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          User-Friendly Interface
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="textxl text-center text-white/70 mt-5">
            Our platform features a user-friendly interface that's simple,
            clear, and easy to navigate. Everything is designed to help you get
            things done quickly and without hassle.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={appScreen} alt="The Product Showcase" className="mt-14" />
        </div>
      </div>
    </div>
  );
};
