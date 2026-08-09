import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";
import { CONTACT_CONTENT, PAGE_META } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGE_META.contact.title,
  description: PAGE_META.contact.description,
};

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow={CONTACT_CONTENT.eyebrow}
        heading={CONTACT_CONTENT.heading}
        subhead={CONTACT_CONTENT.description}
      />
      <Contact />
    </>
  );
}
