"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

const initialForm = {
  email: "",
  message: "",
  name: "",
  projectType: "web",
  submittedAt: 0,
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "error" | "idle" | "sent" | "submitting"
  >("idle");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((current) => ({
      ...current,
      [event.currentTarget.name]: event.currentTarget.value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({ ...form, submittedAt: Date.now() }),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }

    window.setTimeout(() => {
      setStatus("idle");
    }, 5000);
  }

  return (
    <form className="glass-card rounded-[2rem] p-6 sm:p-8" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        name="website"
        onChange={handleChange}
        tabIndex={-1}
        type="text"
        value={form.website}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input
            className="rounded-2xl border border-blue-100 bg-white/75 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
            name="name"
            onChange={handleChange}
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input
            className="rounded-2xl border border-blue-100 bg-white/75 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
          Project type
          <select
            className="rounded-2xl border border-blue-100 bg-white/75 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
            name="projectType"
            onChange={handleChange}
            value={form.projectType}
          >
            <option value="web">Web application</option>
            <option value="mobile">Mobile application</option>
            <option value="prototype">Arduino / ESP prototype</option>
            <option value="product">Tech product strategy</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
          Project brief
          <textarea
            className="min-h-36 resize-y rounded-2xl border border-blue-100 bg-white/75 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
            name="message"
            onChange={handleChange}
            placeholder="Tell us what you want to build, test, or automate."
            required
            rows={6}
            value={form.message}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={
            status === "sent"
              ? "text-sm font-semibold text-emerald-700"
              : status === "error"
                ? "text-sm font-semibold text-red-700"
                : "text-sm text-slate-500"
          }
        >
          {status === "submitting"
            ? "Sending your brief..."
            : status === "sent"
              ? "Thanks. Your project brief has been sent."
              : status === "error"
                ? "Something went wrong. Please try again."
                : "We reply to genuine enquiries as soon as possible."}
        </p>
        <button
          className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Send brief"}
        </button>
      </div>
    </form>
  );
}
