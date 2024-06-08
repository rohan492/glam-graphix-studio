import React from "react";

const ServiceNavbar = ({
  active,
  setActive,
}: {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const navbar = ["Photography", "Video", "Design", "Business"];
  return (
    <div className="flex justify-between items-center w-[80%] ml-[10%] mb-3">
      {navbar.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer border border-t-0 border-l-0 border-r-0 p-1 hover:border-white hover:opacity-100 ${
            active === index
              ? "opacity-100 border-purple hover:border-purple text-purple"
              : "opacity-50 border-black"
          }`}
          onClick={() => setActive(index)}
        >
          {`${item} Services`}
        </div>
      ))}
    </div>
  );
};

export default ServiceNavbar;
