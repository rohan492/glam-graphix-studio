"use client";
import React, { useState } from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";

import MediaRendering from "./MediaRendering";
import RecentProjects from "./RecentProjects";
import ServiceNavbar from "./ServiceNavbar";

const content = [
  [
    {
      id: 1,
      title: "Bridal Shoot",
      description:
        "Capture the elegance and beauty of your special day with our bridal shoot services. Our talented team will work with you to create stunning, timeless photos that reflect your unique style and vision. Trust our studio to make your bridal memories unforgettable.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/service1.webp"
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
      title: "Pre-Wedding Shoot",
      description:
        "Create unforgettable memories with our pre-wedding shoot services. Our professional photographers will capture the romance and excitement of your journey together. With our expertise, your pre-wedding photos will be beautifully personalized and effortlessly elegant.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/pro1.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Maternity Shoot",
      description:
        "Celebrate this special chapter in your life with our maternity shoot services. Our team will create beautiful, intimate portraits that highlight the joy and anticipation of your upcoming arrival. Let us help you capture these precious moments with elegance and care.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="/pro2.webp"
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
      title: "Clothing & Fashion Shoot",
      description:
        "Showcase your clothing and fashion designs with our professional shoot services. Our experienced team will create stunning visuals that highlight your unique style and craftsmanship. Enhance your brand’s image and appeal with our expertly crafted fashion photography.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/pro3.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "Formal Photoshoot",
      description:
        "Elevate your professional image with our formal photoshoot services. Our skilled photographers will capture your best angles and create sophisticated portraits that reflect your personal or corporate brand. Trust us to deliver polished and professional results.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/pro4.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 6,
      title: "Model Shoot",
      description:
        "Highlight your modeling portfolio with our professional model shoot services. Our talented photographers will work with you to create striking images that showcase your versatility and unique style. Enhance your portfolio with our expertly crafted photography.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/pro5.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
  ],
  [
    {
      id: 1,
      title: "Wedding Video",
      description:
        "Relive your special day with our wedding video services. Our expert videographers will capture every precious moment, creating a beautiful and cinematic record of your wedding. Trust us to produce a video that you will cherish forever.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed1.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Pre-Wedding Video",
      description:
        "Capture the romance of your journey together with our pre-wedding video services. Our professional team will create a beautiful and engaging video that tells your love story. Let us help you create a memorable prelude to your big day.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed2.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Anniversary Video",
      description:
        "Celebrate your love and milestones with our anniversary video services. Our talented videographers will create a touching and personal video that reflects your unique journey together. Preserve your cherished memories with our professional touch.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed3.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Birthday Video",
      description:
        "Make your birthday celebrations unforgettable with our birthday video services. Our creative team will capture the joy and excitement of your special day, producing a lively and engaging video. Trust us to create a memorable keepsake for your birthday.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed4.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "Ceremony Video",
      description:
        "Capture the essence of your special ceremonies with our professional video services. Whether it’s a graduation, award ceremony, or any significant event, our team will ensure every moment is beautifully recorded. Let us help you preserve these precious memories.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed5.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 6,
      title: "Trending Videos",
      description:
        "Stay ahead of the curve with our trending video services. Our creative team will produce dynamic and engaging videos that reflect the latest trends and capture your audience's attention. Boost your online presence with our innovative video solutions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/wed6.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
  ],
  [
    {
      id: 1,
      title: "Pamphlet Design",
      description:
        "Enhance your marketing efforts with our professional pamphlet design services. Our creative team will craft eye-catching and informative pamphlets tailored to your needs. Make a lasting impression with our expertly designed marketing materials.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des1.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Poster Design",
      description:
        "Capture attention with our custom poster design services. Our talented designers will create visually stunning posters that effectively communicate your message. Whether for events or promotions, our posters will leave a lasting impact.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des2.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Animation",
      description:
        "Bring your ideas to life with our animation services. Our skilled animators will create engaging and dynamic animations that capture your audience's attention. Enhance your visual content with our innovative animation solutions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des3.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Brochure",
      description:
        "Showcase your products or services with our professional brochure design services. Our creative team will design informative and visually appealing brochures that highlight your brand's strengths. Make a lasting impression with our expertly crafted brochures.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des4.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "Packaging Design",
      description:
        "Stand out on the shelves with our packaging design services. Our talented designers will create eye-catching and functional packaging that reflects your brand's identity. Enhance your product's appeal with our innovative packaging solutions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des5.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 6,
      title: "Advertisements",
      description:
        "Boost your marketing efforts with our professional advertisement design services. Our creative team will design compelling ads that effectively communicate your message and captivate your target audience. Drive results with our expertly crafted advertisements.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des7.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 7,
      title: "Billboards and Other Signage",
      description:
        "Maximize your visibility with our billboard and signage design services. Our talented designers will create striking and effective signage that captures attention and communicates your message. Enhance your brand's presence with our impactful designs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des6.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 8,
      title: "Motion Graphic Design",
      description:
        "Elevate your visual content with our motion graphic design services. Our skilled team will create engaging and dynamic motion graphics that enhance your brand's storytelling. Capture your audience's attention with our innovative motion graphics solutions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des8.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 9,
      title: "Illustration",
      description:
        "Add a unique touch to your projects with our professional illustration services. Our talented illustrators will create custom artwork that reflects your vision and enhances your content. Stand out with our expertly crafted illustrations.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/des9.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
  ],
  [
    {
      id: 1,
      title: "Vlog Shoots & Editing",
      description:
        "Enhance your business’s online presence with our vlog shoot and editing services. Our professional team will create engaging and high-quality vlogs that showcase your brand and connect with your audience. Let us help you tell your story.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/bus1.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Reels Editing",
      description:
        "Capture attention on social media with our reels editing services. Our creative team will produce dynamic and engaging short videos that highlight your business’s unique offerings. Boost your online engagement with our expertly edited reels.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/bus2.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "Digital Marketing Videos",
      description:
        "Drive your marketing efforts with our digital marketing video services. Our professional team will create compelling and informative videos that effectively communicate your message and attract your target audience. Enhance your marketing strategy with our high-quality videos.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/bus3.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Trending Shoots",
      description:
        "Stay relevant with our trending shoot services. Our creative team will produce innovative and captivating videos that reflect the latest trends and engage your audience. Keep your business ahead of the curve with our trending video solutions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="/bus4.webp"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="first service"
          />
        </div>
      ),
    },
  ],
];
export function Services() {
  const [active, setActive] = useState(0);

  return (
    <div className="" id="services">
      <h1 className="heading pt-10 md:py-20">
        Our Range of <span className="text-purple">Professional Services</span>
      </h1>
      <MediaRendering minWidth={null} maxWidth="1023">
        <RecentProjects />
      </MediaRendering>
      <MediaRendering minWidth="1024" maxWidth={null}>
        <ServiceNavbar active={active} setActive={setActive} />
        <StickyScroll content={content[active]} active={active} />
      </MediaRendering>
    </div>
  );
}
