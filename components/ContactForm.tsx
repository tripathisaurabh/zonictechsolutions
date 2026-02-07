"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  preferredDate: "",
  preferredTime: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      window.gtag_report_conversion?.();
      router.push("/thank-you");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="fullName">
          Full Name *
        </label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">
          Phone
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="company">
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="organization"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="preferredDate">
          Preferred Date
        </label>
        <Input
          id="preferredDate"
          name="preferredDate"
          type="date"
          value={formData.preferredDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="preferredTime">
          Preferred Time
        </label>
        <Input
          id="preferredTime"
          name="preferredTime"
          type="time"
          value={formData.preferredTime}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <Button type="submit" className="w-full" variant="primary">
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
