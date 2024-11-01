import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Link from "next/link";

const TextInHero = () => {
  return (
    <div className="flex justify-center relative z-50">
      <div className="flex flex-col items-center justify-center">
        <p className="w-full uppercase tracking-widest text-xs text-center text-blue-100">
          Your Vision, Our Craft
        </p>

        {/**
         *  Link: https://ui.aceternity.com/components/text-generate-effect
         *
         *  change md:text-6xl, add more responsive code
         */}
        <TextGenerateEffect
          words="Turning Moments Into Masterpieces"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="w-full text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Welcome to <span className="text-purple">Glam Graphix Studios</span>,
          Your Visual Storytellers.
        </p>

        <Link href="/work">
          <MagicButton
            title="Our Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default TextInHero;
