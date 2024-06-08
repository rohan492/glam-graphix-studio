"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MediaRendering from "../MediaRendering";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [isOpen, setIsOpen] = useState(false);

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setIsOpen(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex w-[90vw] fixed z-[5000] top-10 inset-x-0 mx-auto px-4 md:px-10 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <img
          src="/logo.webp"
          alt="logo"
          width={90}
          height={60}
          className="cursor-pointer"
          onClick={() => {
            window.location.href = "#hero";
            setIsOpen(false);
          }}
        />
        <MediaRendering minWidth="1024" maxWidth={null}>
          <div className="flex items-center justify-center space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className=" text-lg !cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </MediaRendering>
        <MediaRendering minWidth={null} maxWidth="1023">
          <button className="relative" onClick={() => setIsOpen(!isOpen)}>
            <img
              src="/toggleIcon.png"
              alt="toggle icon"
              width="40"
              height="40"
            />
          </button>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 1,
                y: -100,
              }}
              animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute -bottom-[15.3rem] right-0 flex flex-col gap-2 z-10 w-full items-end"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              {navItems.map((navItem) => (
                <Link
                  key={navItem.name}
                  href={navItem.link}
                  className="text-white w-full flex justify-center p-2"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.125)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{navItem.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </MediaRendering>
      </motion.div>
    </AnimatePresence>
  );
};
