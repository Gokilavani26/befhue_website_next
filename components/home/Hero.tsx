"use client";

import CardStack from "./CardStack";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col items-center pt-24 md:pt-32 pb-12 px-4 text-center bef-bg-white w-full overflow-hidden">
      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-[88px] bef-dark font-bold mb-6 md:mb-8 tracking-tighter max-w-5xl leading-[1.1] md:leading-[1.05]">
        A Place to Display Your Masterpiece
      </h1>

      {/* Visual Centerpiece */}
      <CardStack />

      {/* Description */}
      <p className="max-w-xl bef-dark text-base sm:text-[17px] md:text-[18px] leading-relaxed mb-8 md:mb-10 font-medium px-2">
        Artists can display their masterpieces, and buyers can discover and
        purchase works that resonate with them.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
        <button
          onClick={() => router.push("/contact")}
          className="bef-bg-red bef-white w-full sm:w-auto px-6 md:px-9 py-4 md:py-[18px] rounded-[14px] font-semibold hover:opacity-90 transition-all active:scale-95 text-base"
        >
          Contact Me
        </button>

        <button
          onClick={scrollToProjects}
          className="bef-bg-dark bef-white w-full sm:w-auto px-6 md:px-9 py-4 md:py-[18px] rounded-[14px] font-semibold hover:opacity-90 transition-all active:scale-95 text-base"
        >
          Discover Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
