"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        topic: "General",
        message: "",
        agree: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSent(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.message || "Unable to send message");
            }

            setSent(true);
            setForm({ name: "", email: "", topic: "General", message: "", agree: true });
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Left: Brand / Intro */}
            <section className="relative hidden lg:flex overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute -left-24 -top-24 h-64 w-64 rotate-12 rounded-3xl blur-2xl opacity-30 brandBg" />
                <div className="absolute right-10 bottom-10 h-48 w-48 -rotate-12 rounded-3xl blur-2xl opacity-30 brandBg" />
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                        color: "white",
                    }}
                />
                <div className="relative z-10 m-auto max-w-lg p-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white">Contact <span className=".brandColor">Us</span></h1>
                    <p className="mt-4 text-white/80">
                        Have questions, ideas, or partnership inquiries? We’d love to hear from you.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-4 text-left">
                        <InfoRow label="Email" value="hello@yourdomain.com" />
                        <InfoRow label="Phone" value="+880 1234-567890" />
                        <InfoRow label="Hours" value="Sun–Thu, 10:00–18:00 (GMT+6)" />
                        <InfoRow label="Address" value="Level 5, Gulshan, Dhaka" />
                    </div>

                    <div className="mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium bg-white/10 backdrop-blur text-white/90">
                        Response time: <span className=".brandColor">under 24 hours</span>
                    </div>
                </div>
            </section>

            {/* Right: Form */}
            <section className="flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-md">
                    <div className="relative rounded-2xl border border-gray-200/70 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                        <div className="brandBg h-1.5 w-full rounded-t-2xl" />
                        <div className="p-8">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold">Let’s talk</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Or email us directly at{" "}
                                    <a href="mailto:hello@yourdomain.com" className=".brandColor underline-offset-4 hover:underline">
                                        hello@yourdomain.com
                                    </a>
                                </p>
                            </div>

                            {/* Alerts */}
                            {error && (
                                <Alert tone="error">
                                    {error}
                                </Alert>
                            )}
                            {sent && (
                                <Alert tone="success">
                                    Thanks! Your message has been sent. We’ll reply soon.
                                </Alert>
                            )}

                            <form onSubmit={onSubmit} className="space-y-5" noValidate>
                                {/* Name */}
                                <Field label="Full Name" htmlFor="name" icon="user">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                        required
                                        autoComplete="name"
                                        className="w-full rounded-xl border border-gray-300 bg-white/70 px-10 py-3 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                    />
                                </Field>

                                {/* Email */}
                                <Field label="Email" htmlFor="email" icon="mail">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                        required
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-gray-300 bg-white/70 px-10 py-3 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                    />
                                </Field>

                                {/* Topic */}
                                <div className="group">
                                    <label htmlFor="topic" className="mb-1.5 block text-sm font-medium">Topic</label>
                                    <div className="relative">
                                        <select
                                            id="topic"
                                            value={form.topic}
                                            onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                                            className="w-full appearance-none rounded-xl border border-gray-300 bg-white/70 px-4 py-3 pr-10 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                        >
                                            <option>General</option>
                                            <option>Support</option>
                                            <option>Partnership</option>
                                            <option>Pricing</option>
                                            <option>Feedback</option>
                                        </select>
                                        <span className="pointer-events-none absolute inset-y-0 right-3 my-auto text-gray-500">▾</span>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="group">
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Tell us a bit about what you need…"
                                        value={form.message}
                                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                        required
                                        rows={5}
                                        className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                    />
                                </div>

                                {/* Consent */}
                                <div className="flex items-start gap-3">
                                    <input
                                        id="agree"
                                        type="checkbox"
                                        checked={form.agree}
                                        onChange={(e) => setForm((f) => ({ ...f, agree: e.target.checked }))}
                                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-700 focus:ring-gray-400 dark:border-white/20"
                                    />
                                    <label htmlFor="agree" className="text-sm text-gray-700 dark:text-gray-300">
                                        You agree to our{" "}
                                        <Link href="/privacy" className=".brandColor underline-offset-4 hover:underline">Privacy Policy</Link>{" "}
                                        and{" "}
                                        <Link href="/terms" className=".brandColor underline-offset-4 hover:underline">Terms</Link>.
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition focus:outline-none disabled:opacity-60 brandBg"
                                >
                                    <span>{isLoading ? "Sending…" : "Send message"}</span>
                                    {isLoading && <Spinner />}
                                    <span
                                        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-10"
                                        style={{ background: "linear-gradient(120deg, #fff 10%, transparent 30%, transparent 70%, #fff 90%)" }}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Secondary info strip */}
                    <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                        Looking for support?{" "}
                        <Link href="/support" className=".brandColor underline-offset-4 hover:underline">
                            Visit Help Center
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}

/* ---------- Reusable bits ---------- */

function Field({ label, htmlFor, icon, children }) {
    return (
        <div className="group">
            <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <span className="pointer-events-none absolute inset-y-0 left-3 my-auto">
                        <Icon name={icon} />
                    </span>
                )}
                {/* children must include proper left padding if icon */}
                {children}
            </div>
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-white/90 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
            <p className="mt-1 font-medium">{value}</p>
        </div>
    );
}

function Alert({ tone = "info", children }) {
    const styles = {
        info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-200",
        success:
            "border-green-200 bg-green-50 text-green-800 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200",
        error:
            "border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200",
    }[tone];

    const IconEl =
        tone === "success" ? CheckIcon : tone === "error" ? ErrorIcon : InfoIcon;

    return (
        <div role="status" className={`mb-5 flex items-start gap-3 rounded-lg border p-3 text-sm ${styles}`}>
            <IconEl />
            <span>{children}</span>
        </div>
    );
}

function Spinner() {
    return (
        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
        </svg>
    );
}

/* ---------- tiny inline icons ---------- */

function Icon({ name }) {
    const map = {
        user: (
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
            </svg>
        ),
        mail: (
            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713 1.5 6.75v10.5h21V6.75L12 12.713zM12 11 1.5 4.5h21L12 11z" />
            </svg>
        ),
    };
    return map[name] ?? null;
}

function CheckIcon() {
    return (
        <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
    );
}

function ErrorIcon() {
    return (
        <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z" />
            <path d="M1 21h22L12 2 1 21z" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M11 10h2v7h-2zM11 7h2v2h-2z" fill="#fff" />
        </svg>
    );
}
