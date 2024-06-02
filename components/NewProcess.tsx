"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/TracingBeam";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

export function NewProcess() {
  return (
    <section className="w-full pt-20 md:pt-0 pb-32" id="process">
      <h1 className="heading pb-20">
        Our <span className="text-purple">Process</span>
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative flex flex-col gap-32">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className={`flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-default`}
              // onClick={() => window.open(card.link, "_blank")}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                {/* <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className={`${card.id === 1 ? "w-16 h-16" : "w-16"} rounded-md`}
              /> */}
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
