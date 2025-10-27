"use client";

import smallLogo from "@/public/logo_small_transparent.png";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Hero */}
            <section className="relative overflow-hidden">
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
                <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur .brandColor">
                            <div className="brandBg myborder w-[60px] h-[60px] rounded-full flex items-center justify-center">
                                <Image src={smallLogo} alt="logo" width={1000} height={1000} />
                            </div> Since 2024<br /> Building the<br /> future of learning
                        </span>
                        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            About <span className=".brandColor">Us</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-white/80">
                            We craft delightful, fast, and secure learning experiences. Our mission is to help
                            learners progress every day—with clarity, momentum, and joy.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href="/dashboard"
                                className="brandBg inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
                            >
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission + Vision */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-6 md:grid-cols-2">
                    <GlassCard>
                        <h3 className="text-xl font-semibold">Our Mission</h3>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                            Empower people to learn faster with micro-learning, meaningful progress tracking, and
                            community support—anytime, anywhere.
                        </p>
                    </GlassCard>
                    <GlassCard>
                        <h3 className="text-xl font-semibold">Our Vision</h3>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                            A world where education is accessible, personalized, and delightful—driven by data,
                            strengthened by design, and powered by community.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* Stats */}
            <section className="mx-auto max-w-6xl px-6 pb-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <Stat number="25k+" label="Learners" />
                    <Stat number="1.2M" label="Lessons Completed" />
                    <Stat number="98%" label="Satisfaction" />
                    <Stat number="120+" label="Institutions" />
                </div>
            </section>

            {/* Timeline */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <h2 className="mb-8 text-2xl font-bold">Our Journey</h2>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
                    <div className="space-y-8">
                        <TimelineItem title="Concept & Research" date="Q1 2024">
                            Validated pain points with early adopters; defined the core learning loop.
                        </TimelineItem>
                        <TimelineItem title="MVP Launch" date="Q3 2024">
                            Shipped the first public release with progress tracking and badges.
                        </TimelineItem>
                        <TimelineItem title="Platform Growth" date="Q1 2025">
                            Introduced teams, org spaces, and analytics. Scaled infra and security.
                        </TimelineItem>
                        <TimelineItem title="Next Up" date="Q4 2025">
                            AI-assisted learning paths, richer credentials, and community-led challenges.
                        </TimelineItem>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <h2 className="mb-8 text-2xl font-bold">What We Value</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    <ValueCard icon={<Shield />} title="Trust & Security">
                        Privacy first, secure by default. Your data belongs to you.
                    </ValueCard>
                    <ValueCard icon={<Spark />} title="Delightful Design">
                        Interfaces that feel effortless, fast, and accessible.
                    </ValueCard>
                    <ValueCard icon={<Chart />} title="Progress Over Perfection">
                        Ship, learn, iterate—then repeat with intention.
                    </ValueCard>
                </div>
            </section>

            {/* Team */}
            <section className="mx-auto max-w-6xl px-6 pb-8">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Meet the Team</h2>
                    <Link href="/careers" className=".brandColor text-sm underline-offset-4 hover:underline">
                        We’re hiring
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { name: "A. Rahman", role: "Founder & CEO" },
                        { name: "S. Akter", role: "Design Lead" },
                        { name: "M. Hossain", role: "Engineering Lead" },
                    ].map((m) => (
                        <GlassCard key={m.name}>
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                                    <User />
                                </div>
                                <div>
                                    <p className="font-semibold">{m.name}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{m.role}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                Passionate about crafting learning experiences that scale with quality.
                            </p>
                            <div className="mt-4 flex gap-3">
                                <Social href="#" label="LinkedIn" />
                                <Social href="#" label="X" />
                                <Social href="#" label="GitHub" />
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-6 pb-24">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 p-8 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5 md:p-12">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-3xl opacity-30 blur-2xl brandBg" />
                    <h3 className="text-2xl font-bold">Join us on this journey</h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
                        Whether you’re an educator, a learner, or a partner—there’s a place for you here.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="/auth/signup"
                            className="brandBg inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
                        >
                            Create your account <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
                        >
                            Talk to us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------- tiny atoms ---------- */

function GlassCard({ children }) {
    return (
        <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            {children}
        </div>
    );
}

function Stat({ number, label }) {
    return (
        <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-6 text-center shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <p className="text-3xl font-bold .brandColor">{number}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{label}</p>
        </div>
    );
}

function TimelineItem({ title, date, children }) {
    return (
        <div className="relative ml-10 rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="absolute -left-10 top-3 h-8 w-8 rounded-full brandBg ring-4 ring-white dark:ring-gray-900" />
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-xs .brandColor">{date}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{children}</p>
        </div>
    );
}

function ValueCard({ icon, title, children }) {
    return (
        <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl brandBg text-white">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{children}</p>
        </div>
    );
}

function Social({ href, label }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
        >
            <Dot className="h-2 w-2" />
            {label}
        </Link>
    );
}

/* ---------- tiny inline icons (no deps) ---------- */

function Dot(props) {
    return (
        <svg viewBox="0 0 8 8" fill="currentColor" className={props.className}>
            <circle cx="4" cy="4" r="4" />
        </svg>
    );
}

function ArrowRight(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={props.className}>
            <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
        </svg>
    );
}

function Shield() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
        </svg>
    );
}

function Spark() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
        </svg>
    );
}

function Chart() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M3 3h2v18H3V3zm4 10h2v8H7v-8zm4-6h2v14h-2V7zm4 4h2v10h-2V11zm4-8h2v18h-2V3z" />
        </svg>
    );
}
