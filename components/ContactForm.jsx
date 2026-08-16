"use client";

import { useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
// Optional second recipient. Formspree delivers to the account's primary
// inbox by default; set this env var to also CC a second address.
const CC_EMAIL = process.env.NEXT_PUBLIC_LEAD_CC_EMAIL || "";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  squareFootage: "",
  timeline: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-paper border border-leed/30 rounded-sm p-8 text-center">
        <p className="font-display font-semibold text-xl mb-2">
          Thanks &mdash; that&rsquo;s in.
        </p>
        <p className="text-graphite/70 text-sm">
          We&rsquo;ll follow up shortly with availability and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New lead from movesmarter.fyi" />
      {CC_EMAIL && <input type="hidden" name="_cc" value={CC_EMAIL} />}

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Square footage needed"
          name="squareFootage"
          placeholder={"e.g. 3,000\u20135,000 SF"}
          value={values.squareFootage}
          onChange={handleChange}
        />
        <Field
          label="Timeline"
          name="timeline"
          placeholder="e.g. Within 6 months"
          value={values.timeline}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-graphite/80 mb-1.5"
        >
          What matters most to your team?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="w-full rounded-sm border border-steel/40 bg-paper px-4 py-3 text-sm focus-ring focus:border-glass"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-leed text-paper font-medium px-7 py-3.5 rounded-sm hover:bg-leed/90 transition-colors focus-ring disabled:opacity-60"
      >
        {status === "submitting" ? "Sending\u2026" : "Send Inquiry"}
      </button>

      {status === "error" && (
        <p className="text-rust text-sm pt-1">
          {FORMSPREE_ID
            ? "Something went wrong sending that. Please try again, or email us directly."
            : "Form isn\u2019t connected yet \u2014 add NEXT_PUBLIC_FORMSPREE_ID in your environment settings."}
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-graphite/80 mb-1.5">
        {label}
        {required && <span className="text-leed"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-sm border border-steel/40 bg-paper px-4 py-3 text-sm focus-ring focus:border-glass"
      />
    </div>
  );
}
