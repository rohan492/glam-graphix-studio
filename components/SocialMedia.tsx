import React, { useEffect, useState } from "react";
import { socialMedia } from "@/data";

const SocialMedia: React.FC = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const footerElement = document.querySelector("#contact");
    const heroElement = document.querySelector("#hero");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div
      className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 transition-opacity duration-300 flex flex-col gap-4 border border-l-black border-white py-4 pr-2 pl-1 rounded-r-3xl ${
        isFooterVisible ? "opacity-0" : "opacity-100"
      }`}
    >
      {socialMedia.map((info) => (
        <div
          key={info.id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          onClick={() => window.open(info.link, "_blank")}
        >
          <img src={info.img} alt="icons" width={20} height={20} />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
