import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { ManagedQa } from "@/components/sections/ManagedQa";
import { Process } from "@/components/sections/Process";
import { Engagement } from "@/components/sections/Engagement";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { PAGE_META, SERVICES_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGE_META.services.title,
  description: PAGE_META.services.description,
};

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow={SERVICES_PAGE.hero.eyebrow}
        heading={SERVICES_PAGE.hero.heading}
        subhead={SERVICES_PAGE.hero.subhead}
      />
      <Services variant="detailed" />
      <ManagedQa />
      <Process />
      <Engagement />
      <Faq />
      <CtaBand />
    </>
  );
}
