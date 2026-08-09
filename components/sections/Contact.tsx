"use client";

import { Button } from "@/components/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { CONTACT_CONTENT } from "@/lib/content";
import { CONTACT } from "@/lib/constants";

const FIELD_CLASSES =
  "w-full rounded-lg border border-navy-2 bg-ink px-4 py-3 font-body text-sm text-fog-bright placeholder:text-steel transition-colors focus:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

const LABEL_CLASSES = "font-body text-sm font-medium text-fog-bright";

/**
 * Contact: a working form wired to /api/contact via the useContactForm
 * hook, plus direct-contact fallbacks. All logic lives in the hook — this
 * component only renders state. The page's PageHero owns the <h1>.
 */
export function Contact(): React.JSX.Element {
  const { values, status, error, updateField, handleSubmit } =
    useContactForm();

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  return (
    <section aria-labelledby="contact-form-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 id="contact-form-heading" className="sr-only">
          Contact form
        </h2>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 lg:col-span-3"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className={LABEL_CLASSES}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                disabled={isSubmitting}
                className={FIELD_CLASSES}
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className={LABEL_CLASSES}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                disabled={isSubmitting}
                className={FIELD_CLASSES}
                placeholder="you@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className={LABEL_CLASSES}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                disabled={isSubmitting}
                className={`${FIELD_CLASSES} resize-y`}
                placeholder="What are you building, and where would you like more confidence?"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send message"}
              </Button>

              {/* Live region announces the result to assistive tech. */}
              <p role="status" aria-live="polite" className="font-body text-sm">
                {isSuccess ? (
                  <span className="text-gold">
                    {CONTACT_CONTENT.successMessage}
                  </span>
                ) : null}
                {status === "error" && error ? (
                  <span className="text-fog-bright">{error}</span>
                ) : null}
              </p>
            </div>
          </form>

          {/* Direct-contact fallbacks */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-navy-2 bg-navy/40 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-fog-bright">
                Prefer to reach out directly?
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {CONTACT.whatsapp.label}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {CONTACT.linkedin.label}
                  </a>
                </li>
              </ul>

              {CONTACT.isPlaceholder ? (
                <p className="mt-6 font-mono text-xs leading-relaxed text-steel">
                  Note: these are placeholder details. Replace the email,
                  WhatsApp number, and LinkedIn URL in lib/constants.ts (and
                  NEXT_PUBLIC_WHATSAPP_NUMBER) with real values before launch.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
