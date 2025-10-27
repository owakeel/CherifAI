"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sent, setSent] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.message || "Unable to send reset email");
            }

            setSent(true);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Left: Brand / Welcome */}
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
                    <h1 className="text-4xl font-bold tracking-tight">Forgot your password?</h1>
                    <p className="mt-4 text-white/80">
                        No worries. Enter your email and we’ll send you a secure link to reset it.
                    </p>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                        alt="Password reset illustration"
                        className="mx-auto mt-10 w-60 drop-shadow-2xl"
                    />
                    <div className="mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-white/10 backdrop-blur">
                        <span className=".brandColor font-medium">Secure • One-time link</span>
                    </div>
                </div>
            </section>

            {/* Right: Form */}
            <section className="flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-md">
                    <div className="relative rounded-2xl border border-gray-200/70 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                        <div className="brandBg h-1.5 w-full rounded-t-2xl" />
                        <div className="p-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold">Reset your password</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Remember it now?{" "}
                                    <Link href="/auth/signin" className=".brandColor underline-offset-4 hover:underline">
                                        Go back to Sign In
                                    </Link>
                                </p>
                            </div>

                            {/* Alerts */}
                            {error && (
                                <div
                                    role="alert"
                                    aria-live="polite"
                                    className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z" />
                                        <path d="M1 21h22L12 2 1 21z" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            {sent && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className="mb-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                    </svg>
                                    <span>
                                        If an account exists for <strong>{email}</strong>, we’ve sent a reset link. Please check your inbox (and spam).
                                    </span>
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={onSubmit} className="space-y-5" noValidate>
                                <div className="group">
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 left-3 top-3.5 my-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400 group-focus-within:text-gray-500"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 12.713 1.5 6.75v10.5h21V6.75L12 12.713zM12 11 1.5 4.5h21L12 11z" />
                                            </svg>
                                        </span>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoComplete="email"
                                            className="w-full rounded-xl border border-gray-300 bg-white/70 px-10 py-3 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition focus:outline-none disabled:opacity-60 brandBg"
                                >
                                    <span>{isLoading ? "Sending..." : "Send reset link"}</span>
                                    {isLoading && (
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
                                        </svg>
                                    )}
                                    <span
                                        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-10"
                                        style={{ background: "linear-gradient(120deg, #fff 10%, transparent 30%, transparent 70%, #fff 90%)" }}
                                    />
                                </button>

                                <div className="text-center text-sm">
                                    <Link href="/auth/signin" className=".brandColor underline-offset-4 hover:underline">
                                        Back to Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                        Need more help?{" "}
                        <Link href="/support" className=".brandColor underline-offset-4 hover:underline">
                            Contact support
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </main>
    );
}
