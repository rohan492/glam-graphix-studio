"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";

import Image from "next/image";
import MediaRendering from "./MediaRendering";

const content = [
  {
    id: 1,
    title: "Photography",
    description:
      "Capture your moments with our professional photography services. Work with our team to create stunning visuals, share ideas, and ensure your vision is realized. With our studio, you can streamline your projects and enhance your creative output.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service1.png"
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt="another first service"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Digital Invitations",
    description:
      "Your special day deserves stunning digital invitations. Our expert team designs beautiful and personalized invitations, capturing your unique style. With our studio, you can streamline the process and ensure your invitations are perfect.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <video
          src={"/service2.mp4"}
          className={"object-fit object-center"}
          controls={false}
          autoPlay
          loop
          muted
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Graphic Designing",
    description:
      "Transform your ideas into stunning visuals with our graphic design services. Our talented team crafts unique and personalized designs tailored to your needs. With our studio, you can streamline the process and achieve outstanding results for your special day.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/service2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Basically Everything",
    description:
      "We are your one-stop solution for crafting all things creative. Our talented team handles everything from concept to execution, ensuring your vision comes to life beautifully. With our studio, you can streamline every project and achieve exceptional results effortlessly.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/service3.png"
          width={300}
          height={300}
          className="h-full w-full object-fit"
          alt="first service"
        />
      </div>
    ),
  },
];
export function Services() {
  return (
    <div className="" id="services">
      <MediaRendering minWidth={null} maxWidth="1023">
        <div>Please see in Laptop for Services Section & give feedback</div>
      </MediaRendering>
      <MediaRendering minWidth="1024" maxWidth={null}>
        <StickyScroll content={content} />
      </MediaRendering>
    </div>
  );
}
