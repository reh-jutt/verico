import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { MissionVision } from "@/components/sections/MissionVision";
import { Values } from "@/components/sections/Values";
import { WhyVerico } from "@/components/sections/WhyVerico";
import { CtaBand } from "@/components/sections/CtaBand";
import { ABOUT_CONTENT, PAGE_META } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGE_META.about.title,
  description: PAGE_META.about.description,
};

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow={ABOUT_CONTENT.eyebrow}
        heading={ABOUT_CONTENT.heading}
        subhead={ABOUT_CONTENT.subhead}
      />
      <AboutStory />
      <MissionVision />
      <Values />
      <WhyVerico />
      <CtaBand />
    </>
  );
}
