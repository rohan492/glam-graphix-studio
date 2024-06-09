import { FaLocationArrow } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const links = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Process",
    link: "#process",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:mb-5" id="contact">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:justify-between items-center">
        <div className="flex justify-center items-center gap-24">
          <img src="/logo.webp" alt="brand" width={200} className="md:ml-12" />
        </div>
        <div className="flex justify-center items-start gap-32">
          <div className="hidden md:flex flex-col justify-center items-start gap-2 text-lg">
            <div className="text-purple mb-2">User Links</div>
            {links.map((link, idx) => (
              <a key={idx} href={link.link} className="text-white-200">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex flex-col justify-center items-center gap-6 md:gap-2 mb-8">
            <a href="tel:+91 73039 60348" className="flex items-center gap-2">
              <MagicButton title="Call Us" icon={<IoCall />} position="left" />
            </a>
            <a
              href="mailto:contact@glamgraphixstudios.in"
              className="flex items-center gap-2"
            >
              <MagicButton
                title="Email Us"
                icon={<IoMdMail />}
                position="left"
              />
            </a>
          </div>
          <div className="md:hidden flex flex-col items-center gap-4">
            <p className="text-lg text-white-200 md:mt-10 my-5 text-center">
              Reach out to us today and let&apos;s discuss how we can help you
              achieve your goals.
            </p>
            <div className="flex flex-col justify-center items-center gap-6 md:gap-2 mb-8 w-full">
              <a
                href="tel:+91 73039 60348"
                className="flex items-center gap-2 w-1/2"
              >
                <MagicButton
                  title="Call Us"
                  icon={<IoCall />}
                  position="left"
                />
              </a>
              <a
                href="mailto:contact@glamgraphixstudios.in"
                className="flex items-center gap-2 w-1/2"
              >
                <MagicButton
                  title="Email Us"
                  icon={<IoMdMail />}
                  position="left"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:mt-16 md:flex-row flex-col justify-between items-center gap-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Glam Graphix Studios
        </p>

        <div className="flex items-center md:gap-3 gap-6">
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
      </div>
      <div className="w-full flex justify-center items-center mt-8 md:mt-4">
        Web Design & Development by
        <a href="https://www.linkedin.com/in/therohanmathur/" target="_blank">
          <span className="text-purple ml-1">Rohan Mathur</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
