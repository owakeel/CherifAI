"use client";

import Container from "@/components/layout/sitelayout/Container";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Brain, MessageCircle, Sparkles, Zap } from "lucide-react";

/**
 * Enhanced ChatCTASection with unique design and Framer Motion
 * Modern interactive CTA with floating elements and micro-animations
 */
export default function ChatCTASection({
    heading = "Need Something Specific?",
    subtext = "Chat directly with Cherif, your AI real estate expert, for personalized guidance and custom analysis tailored to your unique situation.",
    buttonText = "Start Chatting",
    onClick,
}) {
    // Floating message animation variants
    const floatingMessageVariants = {
        animate: (i) => ({
            y: [0, -15, 0],
            x: [0, Math.random() * 10 - 5, 0],
            rotateZ: [0, Math.random() * 10 - 5, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    // Pulse animation for background elements
    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Button animation variants
    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    // Text animation variants
    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Floating messages data
    const floatingMessages = [
        { text: "ROI Analysis", delay: 0 },
        { text: "Market Trends", delay: 1 },
        { text: "Property Value", delay: 2 },
        { text: "Legal Docs", delay: 3 },
    ];

    return (
        <section className="w-full bg-neutral-950 relative overflow-hidden py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                </div>

                {/* Floating AI Particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatingMessageVariants}
                        animate="animate"
                        className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                        style={{
                            left: `${10 + (i * 12)}%`,
                            top: `${20 + (i * 8)}%`,
                        }}
                    />
                ))}
            </div>

            <Container>
                <motion.div
                    className="relative"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Main CTA Card */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-xl border border-neutral-800/50 p-8 sm:p-12 shadow-2xl overflow-hidden">
                        {/* Animated Border Glow */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0"
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />

                        {/* Floating Chat Bubbles */}
                        <div className="absolute inset-0 overflow-hidden">
                            {floatingMessages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={floatingMessageVariants}
                                    animate="animate"
                                    className="absolute flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                                    style={{
                                        left: `${15 + (index * 20)}%`,
                                        top: `${20 + (index * 15)}%`,
                                    }}
                                >
                                    <Sparkles className="h-3 w-3" />
                                    {message.text}
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative z-10 text-center">
                            {/* Animated AI Avatar */}
                            <motion.div
                                className="inline-flex items-center justify-center mb-8"
                                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    duration: 0.8
                                }}
                            >
                                <div className="relative">
                                    <motion.div
                                        className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                    >
                                        <Brain className="h-8 w-8 text-white" />
                                    </motion.div>

                                    {/* Pulsing Status Indicator */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-neutral-900"
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            boxShadow: [
                                                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                                                "0 0 0 10px rgba(34, 197, 94, 0)",
                                                "0 0 0 0 rgba(34, 197, 94, 0)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    {/* Floating Particles Around Avatar */}
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                            animate={{
                                                scale: [0, 1, 0],
                                                opacity: [0, 1, 0],
                                                x: [0, Math.cos(i * 120) * 30],
                                                y: [0, Math.sin(i * 120) * 30],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i,
                                                ease: "easeOut"
                                            }}
                                            style={{
                                                left: "50%",
                                                top: "50%",
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
                                variants={textVariants}
                            >
                                <span className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                                    Got a Complex
                                </span>
                                <br />
                                <motion.span
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    Real Estate Question?
                                </motion.span>
                            </motion.h2>

                            {/* Subtext */}
                            <motion.p
                                className="text-lg text-neutral-300/90 max-w-2xl mx-auto mb-8 leading-relaxed"
                                variants={textVariants}
                                transition={{ delay: 0.2 }}
                            >
                                Chat directly with CherifAI for personalized guidance, custom analysis,
                                and expert insights tailored to your unique real estate scenario.
                            </motion.p>

                            {/* Stats Row */}
                            <motion.div
                                className="flex flex-wrap justify-center gap-6 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {[
                                    { value: "24/7", label: "AI Availability" },
                                    { value: "98%", label: "Accuracy Rate" },
                                    { value: "5s", label: "Avg Response" },
                                    { value: "10k+", label: "Queries Solved" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div className="text-lg font-bold text-cyan-400">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-neutral-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Enhanced CTA Button */}
                            <motion.div
                                variants={textVariants}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.button
                                    onClick={onClick}
                                    className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    {/* Animated Background Shine */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    {/* Button Content */}
                                    <span className="relative z-10 flex items-center gap-3">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 10, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <MessageCircle className="h-5 w-5" />
                                        </motion.div>

                                        <span className="text-lg">{buttonText}</span>

                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.div>
                                    </span>

                                    {/* Floating particles on hover */}
                                    <AnimatePresence>
                                        <motion.div
                                            className="absolute inset-0"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-white rounded-full"
                                                    initial={{
                                                        scale: 0,
                                                        opacity: 0,
                                                        x: "50%",
                                                        y: "50%"
                                                    }}
                                                    whileHover={{
                                                        scale: [0, 1, 0],
                                                        opacity: [0, 1, 0],
                                                        x: [
                                                            "50%",
                                                            `${50 + (Math.random() * 100 - 50)}%`,
                                                            "50%"
                                                        ],
                                                        y: [
                                                            "50%",
                                                            `${50 + (Math.random() * 100 - 50)}%`,
                                                            "50%"
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.button>
                            </motion.div>

                            {/* Trust Badge */}
                            <motion.div
                                className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <Zap className="h-4 w-4 text-cyan-400" />
                                <span>Powered by Advanced AI • Secure & Confidential</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}