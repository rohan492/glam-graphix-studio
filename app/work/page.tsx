"use client";

import { useState } from "react";
import WorkPage from "@/components/WorkPage";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { cards } from "@/data/cards";

const Work = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  return (
    <>
      {!active && <FloatingNav navItems={navItems} />}
      <div className="pt-40 bg-slate-950">
        <WorkPage active={active} setActive={setActive} />
      </div>
    </>
  );
};

export default Work;
