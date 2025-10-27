"use client";

import Spiner from '@/components/ui/dashboard/Spiner';
import logo from '@/public/logo_full-Transparent.png';
import Cookies from "js-cookie";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "", });
    const router = useRouter();


    async function onSubmit(e) {

        e.preventDefault();
        setIsLoading(true);


        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const j = await res.json().catch(() => ({}));
                throw new Error(j?.message || "Invalid credentials");
            }

            const data = await res.json();

            // cokkie set
            Cookies.set("token", data?.token, { path: "/", secure: true, sameSite: "Lax" });


            toast.success("Signed in successfully!");


            // force hard reload (cookie definitely available)
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 700);


        } catch (err) {
            toast(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Left: Brand / Welcome */}
            <section className="relative hidden lg:flex overflow-hidden min-h-screen">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 " />
                {/* Brand accent ribbon */}
                <div className="absolute -left-24 -top-24 h-64 w-64 rotate-12 rounded-3xl blur-2xl opacity-30 brandBg" />
                <div className="absolute right-10 bottom-10 h-48 w-48 -rotate-12 rounded-3xl blur-2xl opacity-30 brandBg" />
                {/* Subtle grid pattern */}
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
                    <Link className='flex justify-center w-full mb-8' href={'/'}>
                        <Image className='w-[120px]' src={logo} alt="logo" />
                    </Link>
                    <h1 className="text-4xl text-white font-bold tracking-tight">Welcome Back</h1>
                    <p className="mt-4 text-white/80">
                        Sign in to continue your journey. Track progress, unlock badges, and keep learning.
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
                        alt="Sign in illustration"
                        className="mx-auto mt-10 w-60 drop-shadow-2xl"
                    />
                    <div className="mt-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-gray-300 text-black backdrop-blur">
                        <span className=".brandColor font-medium">Secure • Fast • Reliable</span>
                    </div>
                </div>
            </section>

            {/* Right: Form */}
            <section className="flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="relative rounded-2xl border border-gray-200/70 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                        {/* Top accent */}
                        <div className="brandBg h-1.5 w-full rounded-t-2xl" />
                        <div className="p-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold">Sign In</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Don’t have an account?{" "}
                                    <Link href="/auth/signup" className="brandColor underline-offset-4 hover:underline">
                                        Create one
                                    </Link>
                                </p>
                            </div>

                            <form className="space-y-5">
                                {/* Email */}
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
                                            value={form.email}
                                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                            required
                                            autoComplete="email"
                                            className="w-full rounded-xl border border-gray-300 bg-white/70 px-10 py-3 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="group">
                                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 left-3 top-3.5 my-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-gray-400 group-focus-within:text-gray-500"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm-3 8V6a3 3 0 1 1 6 0v3H9z" />
                                            </svg>
                                        </span>
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={form.password}
                                            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                                            required
                                            autoComplete="current-password"
                                            className="w-full rounded-xl border border-gray-300 bg-white/70 px-10 py-3 pr-12 outline-none transition focus:border-gray-400 focus:ring-4 focus:ring-gray-200/60 dark:border-white/10 dark:bg-white/5 dark:focus:border-white/20 dark:focus:ring-white/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((s) => !s)}
                                            className="absolute inset-y-0 right-3 my-auto text-xs font-medium text-gray-600 underline-offset-2 hover:underline dark:text-gray-300"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex items-center justify-between">
                                    {/* <label className="inline-flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={form.remember}
                                            onChange={(e) => setForm((f) => ({ ...f, remember: e.target.checked }))}
                                            className="h-4 w-4 rounded border-gray-300 text-gray-700 focus:ring-gray-400 dark:border-white/20"
                                        />
                                        Remember me
                                    </label> */}
                                    <Link href="/auth/forgotpassword" className="brandColor text-sm underline-offset-4 hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={(e) => { onSubmit(e) }}
                                    disabled={isLoading}
                                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition focus:outline-none disabled:opacity-60 brandBg cursor-pointer"
                                >
                                    <span>{isLoading ? "Signing in..." : "Sign In"}</span>
                                    {/* Spinner */}
                                    {isLoading && <Spiner />}
                                    {/* Shine hover */}
                                    <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-10"
                                        style={{ background: "linear-gradient(120deg, #fff 10%, transparent 30%, transparent 70%, #fff 90%)" }}
                                    />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer links */}
                    <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                        By continuing, you agree to our{" "}
                        <Link href="/terms" className=".brandColor underline-offset-4 hover:underline">
                            Terms
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className=".brandColor underline-offset-4 hover:underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
}
