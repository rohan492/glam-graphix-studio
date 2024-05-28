import { Spotlight } from "./ui/Spotlight";
import { ImagesSlider } from "./ui/ImagesSlider";
import MediaRendering from "./MediaRendering";
import TextInHero from "./TextInHero";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36" id="hero">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/**
         *  UI: grid
         *  change bg color to bg-black-100 and reduce grid color from
         *  0.2 to 0.03
         */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <MediaRendering minWidth={null} maxWidth="1023">
          <ImagesSlider
            className="h-[80vh] w-full"
            images={[
              "/hImg2.png",
              "/heroImg2.png",
              "/heroImg4.png",
              "/heroImg1.png",
              "/hImg1.png",
            ]}
          >
            <TextInHero />
          </ImagesSlider>
        </MediaRendering>
        <MediaRendering minWidth="1024" maxWidth={null}>
          <ImagesSlider
            className="h-[80vh] w-full"
            images={["/hImg2.png", "/hImg1.png", "/fImg.png", "/test3.png"]}
          >
            <TextInHero />
          </ImagesSlider>
        </MediaRendering>
      </div>
    </>
  );
};

export default Hero;
