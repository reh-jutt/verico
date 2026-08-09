import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ManagedQa } from "@/components/sections/ManagedQa";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyVerico } from "@/components/sections/WhyVerico";
import { CtaBand } from "@/components/sections/CtaBand";
import { PAGE_META } from "@/lib/content";

export const metadata: Metadata = {
  description: PAGE_META.home.description,
};

/**
 * Home page. Composes section components only — all copy lives in
 * lib/content.ts and all layout markup lives in the components.
 */
export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <ManagedQa />
      <Services variant="preview" />
      <Process />
      <WhyVerico />
      <CtaBand />
    </>
  );
}
