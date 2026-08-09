"use client";

import { useCallback, useState } from "react";
import type {
  ContactApiResponse,
  ContactFormData,
  ContactStatus,
} from "@/types";

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface UseContactForm {
  values: ContactFormData;
  status: ContactStatus;
  error: string | null;
  updateField: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}

/**
 * Encapsulates all contact-form state and the submit handler so the
 * Contact section component can stay presentational.
 */
export function useContactForm(): UseContactForm {
  const [values, setValues] = useState<ContactFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string): void => {
      setValues((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const reset = useCallback((): void => {
    setValues(EMPTY_FORM);
    setStatus("idle");
    setError(null);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      setError(null);

      // Client-side validation mirrors the API's server-side checks.
      const name = values.name.trim();
      const email = values.email.trim();
      const message = values.message.trim();

      if (!name || !email || !message) {
        setStatus("error");
        setError("Please fill in your name, email, and message.");
        return;
      }
      if (!EMAIL_PATTERN.test(email)) {
        setStatus("error");
        setError("Please enter a valid email address.");
        return;
      }

      setStatus("submitting");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        const data: ContactApiResponse = await response.json();

        if (!response.ok || !data.success) {
          const messageText =
            data.success === false
              ? data.error
              : "Something went wrong. Please try again.";
          setStatus("error");
          setError(messageText);
          return;
        }

        setStatus("success");
        setValues(EMPTY_FORM);
      } catch {
        setStatus("error");
        setError(
          "We couldn't reach the server. Check your connection and try again.",
        );
      }
    },
    [values],
  );

  return { values, status, error, updateField, handleSubmit, reset };
}
