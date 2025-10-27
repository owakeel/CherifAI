"use client";

import { CircleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 relative overflow-hidden">
            {/* Background decorations */}
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

            {/* Content */}
            <section className="relative z-10 text-center px-6">
                <div className="max-w-md mx-auto rounded-2xl border border-gray-200/70 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5 p-10">
                    <h1 className="text-[5rem] font-extrabold leading-none .brandColor">404</h1>
                    <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                        The page you’re looking for doesn’t exist, was moved, or might be temporarily unavailable.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <Link
                            href="/"
                            className="brandBg inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Go Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
                        >
                            Contact Support
                        </Link>
                    </div>

                    <div className="mt-10 flex justify-center">

                        <CircleAlert className="w-20 h-20" />
                    </div>
                </div>

                <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                    Lost? Explore our{" "}
                    <Link href="/about" className=".brandColor underline-offset-4 hover:underline">
                        About
                    </Link>{" "}
                    or{" "}
                    <Link href="/auth/signin" className=".brandColor underline-offset-4 hover:underline">
                        Sign In
                    </Link>{" "}
                    pages.
                </p>
            </section>
        </main>
    );
}
