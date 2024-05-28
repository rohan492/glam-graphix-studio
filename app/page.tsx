"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Services } from "@/components/Services";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      {/* <div className="relative w-[115%] md:w-[110%] h-screen aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 z-50">
        {" "}
        <video
          src="/mainVid.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center"
          controls={false}
          autoPlay
          loop
          muted
        />
      </div> */}
      {/* <div className="h-[30%] absolute -top-14 z-50">
        <video
          src={"/mainVid.mp4"}
          className={
            "md:w-fit md:h-fit w-full h-fit object-cover object-center"
          }
          // style={{ transform: "rotate(270deg)" }}
          controls={false}
          autoPlay
          loop
          muted
        />
      </div> */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Services />
        {/* <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
