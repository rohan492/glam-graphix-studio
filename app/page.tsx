"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { NewProcess } from "@/components/NewProcess";
import SocialMedia from "@/components/SocialMedia";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Services } from "@/components/Services";
import MediaRendering from "@/components/MediaRendering";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <MediaRendering minWidth="1024" maxWidth={null}>
          <SocialMedia />
        </MediaRendering>
        <Hero />
        <Grid />
        <Services />
        <Clients />
        <NewProcess />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
