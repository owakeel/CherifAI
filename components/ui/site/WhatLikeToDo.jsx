"use client";

import Container from "@/components/layout/sitelayout/Container";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calculator, Shield, Sparkles, TrendingUp } from "lucide-react";
import { useMemo } from "react";

/**
 * Enhanced QuickToolsSection with unique design and Framer Motion
 * Modern glass morphism design with interactive 3D effects
 */
export default function WhatLikeToDo({
    heading = "WHAT WOULD YOU LIKE TO DO?",
    subheading = "Choose from our powerful AI‑powered tools designed to streamline your real estate workflow and provide professional‑grade analysis in seconds.",
    items,
    onLaunch,
}) {
    // Enhanced default items with unique icons and colors
    const defaults = useMemo(
        () => [
            {
                id: "property-analysis",
                title: "Property Analysis",
                blurb: "Deep dive into property metrics, ROI calculations, and market comparisons",
                bullets: [
                    "Cash flow analysis",
                    "Market comparables",
                    "Investment projections",
                    "Risk assessment",
                ],
                Icon: Building2,
                gradient: "from-blue-500 to-cyan-500",
                accent: "blue",
                stats: "98% Accuracy"
            },
            {
                id: "mortgage-calculator",
                title: "Mortgage Calculator",
                blurb: "Advanced mortgage calculations with multiple scenario planning",
                bullets: [
                    "Payment calculations",
                    "Amortization schedules",
                    "Rate comparisons",
                    "Refinance analysis",
                ],
                Icon: Calculator,
                gradient: "from-purple-500 to-pink-500",
                accent: "purple",
                stats: "Real-time Rates"
            },
            {
                id: "market-trends",
                title: "Market Intelligence",
                blurb: "Real‑time market insights and predictive analytics",
                bullets: [
                    "Market forecasts",
                    "Price trends",
                    "Neighborhood analysis",
                    "Investment opportunities",
                ],
                Icon: TrendingUp,
                gradient: "from-orange-500 to-red-500",
                accent: "orange",
                stats: "Live Data"
            },
            {
                id: "legal-docs",
                title: "Document Master",
                blurb: "AI‑generated contracts, agreements, and legal templates",
                bullets: [
                    "Purchase agreements",
                    "Lease contracts",
                    "Disclosure forms",
                    "Legal templates",
                ],
                Icon: Shield,
                gradient: "from-green-500 to-emerald-500",
                accent: "green",
                stats: "AI-Reviewed"
            },
        ],
        []
    );

    const data = items?.length ? items : defaults;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const floatingVariants = {
        animate: (i) => ({
            y: [0, -20, 0],
            rotateY: [0, 5, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    return (
        <section className="w-full bg-neutral-950 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                </div>
            </div>

            <Container>
                <div className="px-4 py-20 lg:py-28 relative z-10">
                    {/* Animated Badge */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-lg backdrop-blur-sm"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(6, 182, 212, 0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="h-4 w-4" />
                            </motion.div>
                            AI-Powered Quick Actions
                        </motion.span>
                    </motion.div>

                    {/* Animated Heading */}
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                                UNLEASH YOUR
                            </span>
                            <br />
                            <motion.span
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                AI POTENTIAL
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300/90 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Transform your real estate workflow with our intelligent suite of AI tools.
                            Get professional-grade analysis and insights in seconds, not hours.
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Cards Grid */}
                    <motion.div
                        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {data.map((card, index) => (
                            <motion.div
                                key={card.id}
                                custom={index}
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <EnhancedFeatureCard
                                    {...card}
                                    index={index}
                                    onLaunch={onLaunch}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-neutral-400 text-sm"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Trusted by 10,000+ real estate professionals worldwide
                        </motion.p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

function EnhancedFeatureCard({ id, title, blurb, bullets, Icon, gradient, accent, stats, index, onLaunch }) {
    const cardVariants = {
        initial: {
            scale: 1,
            y: 0,
            rotateX: 0
        },
        hover: {
            scale: 1.05,
            y: -10,
            rotateX: 5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Color mapping for different accents
    const colorMap = {
        blue: { from: "from-blue-500", to: "to-cyan-500", glow: "blue" },
        purple: { from: "from-purple-500", to: "to-pink-500", glow: "purple" },
        orange: { from: "from-orange-500", to: "to-red-500", glow: "orange" },
        green: { from: "from-green-500", to: "to-emerald-500", glow: "green" }
    };

    const colors = colorMap[accent] || colorMap.blue;

    return (
        <motion.div
            className="group relative h-full"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            {/* Animated Background Glow */}
            <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.from} ${colors.to} opacity-0 group-hover:opacity-10 blur-xl`}
                variants={pulseVariants}
                animate="animate"
            />

            {/* Main Card */}
            <div className="relative h-full rounded-2xl bg-neutral-900/80 backdrop-blur-lg border border-neutral-800/50 p-6 shadow-2xl overflow-hidden">
                {/* Animated Border */}
                <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.from} ${colors.to} opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 h-full flex flex-col">
                    {/* Header with Icon and Stats */}
                    <div className="flex items-start justify-between mb-6">
                        <motion.div
                            className={`p-3 rounded-2xl bg-gradient-to-br ${colors.from} ${colors.to} shadow-lg`}
                            variants={iconVariants}
                        >
                            <Icon className="h-6 w-6 text-white" />
                        </motion.div>

                        <motion.span
                            className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-800/50 text-neutral-300 border border-neutral-700/50"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                        >
                            {stats}
                        </motion.span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-bold text-white mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            {title}
                        </motion.h3>

                        <motion.p
                            className="text-neutral-300 text-sm leading-relaxed mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            {blurb}
                        </motion.p>

                        {/* Enhanced Bullets */}
                        <motion.ul
                            className="space-y-2 mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                        >
                            {bullets?.map((bullet, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-neutral-400 group/bullet"
                                    whileHover={{ x: 5, color: "#f8fafc" }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <motion.div
                                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.from} ${colors.to}`}
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    <span>{bullet}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Animated CTA Button */}
                    <motion.div
                        className="mt-auto pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                    >
                        <motion.button
                            onClick={() => onLaunch?.(id)}
                            className={`group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r ${colors.from} ${colors.to} px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            {/* Button Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />

                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Launch Tool
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </motion.div>
                            </span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    className={`absolute -top-2 -right-2 w-4 h-4 bg-${colors.glow}-400 rounded-full blur-sm`}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                />
            </div>
        </motion.div>
    );
}