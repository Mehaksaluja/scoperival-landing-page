import acmeLogo from "../assests/images/acme.png";
import quantumLogo from "../assests/images/quantum.png";
import echoLogo from "../assests/images/echo.png";
import celestialLogo from "../assests/images/celestial.png";
import pulseLogo from "../assests/images/pulse.png";
import apexLogo from "../assests/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="@container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16 justify-center">
            {images.map(({ src, alt }) => (
              <Image src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
