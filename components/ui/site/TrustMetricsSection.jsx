"use client";

import Container from "@/components/layout/sitelayout/Container";
import { motion } from "framer-motion";
import { AlertTriangle, Award, BadgeCheck, Clock, ShieldCheck, Star, TrendingUp, Users } from "lucide-react";

/**
 * Enhanced TrustMetricsSection with unique design and Framer Motion
 * Modern trust indicators with interactive animations and glass morphism
 */
export default function TrustMetricsSection({
    heading = "Trusted by Industry Leaders",
    badges,
    stats,
    disclaimerTitle = "Important Disclaimer",
    disclaimerText = "This AI assistant provides educational information and analysis tools. All advice should be verified with licensed professionals. Real estate investments carry inherent risks, and past performance does not guarantee future results. Always consult with qualified legal, financial, and real estate professionals before making investment decisions.",
}) {
    const badgeItems = badges?.length
        ? badges
        : [
            {
                id: "ssl",
                title: "SSL Secured",
                desc: "Bank-level encryption protects your data",
                Icon: ShieldCheck,
                color: "from-green-500 to-emerald-500",
                delay: 0
            },
            {
                id: "cert",
                title: "Industry Certified",
                desc: "Licensed real estate professional",
                Icon: BadgeCheck,
                color: "from-blue-500 to-cyan-500",
                delay: 0.1
            },
            {
                id: "users",
                title: "10,000+ Users",
                desc: "Trusted by professionals nationwide",
                Icon: Users,
                color: "from-purple-500 to-pink-500",
                delay: 0.2
            },
            {
                id: "rating",
                title: "4.9/5 Rating",
                desc: "Highly rated by our community",
                Icon: Star,
                color: "from-orange-500 to-yellow-500",
                delay: 0.3
            },
        ];

    const statItems = stats?.length
        ? stats
        : [
            { id: "value", value: "$2.5B+", label: "Properties Analyzed", icon: TrendingUp, delay: 0 },
            { id: "deals", value: "50,000+", label: "Successful Deals", icon: Award, delay: 0.2 },
            { id: "years", value: "25+", label: "Years Experience", icon: Clock, delay: 0.4 },
            { id: "uptime", value: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck, delay: 0.6 },
        ];

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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    };

    const statNumberVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
                delay: i * 0.1 + 0.5
            }
        })
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.8, 0.4],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const floatingVariants = {
        animate: (i) => ({
            y: [0, -10, 0],
            rotateY: [0, 5, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    return (
        <section className="w-full bg-neutral-950 relative overflow-hidden py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                    variants={pulseVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                </div>

                {/* Floating Trust Particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <Container>
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Enhanced Heading */}
                    <motion.div
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <ShieldCheck className="h-4 w-4" />
                            Trust & Security
                        </motion.div>

                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                                TRUSTED BY
                            </span>
                            <br />
                            <motion.span
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                INDUSTRY LEADERS
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            className="mt-6 text-lg text-neutral-300/90 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Join thousands of real estate professionals who trust our AI-powered platform
                            for accurate analysis, secure data handling, and industry-leading expertise.
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Badges Grid */}
                    <motion.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20"
                        variants={containerVariants}
                    >
                        {badgeItems.map((badge) => (
                            <motion.div
                                key={badge.id}
                                custom={badge.delay}
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <TrustBadgeCard {...badge} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Enhanced Stats Section */}
                    <motion.div
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20"
                        variants={containerVariants}
                    >
                        {statItems.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                custom={index}
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <StatCard {...stat} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Enhanced Disclaimer Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <DisclaimerCard
                            title={disclaimerTitle}
                            text={disclaimerText}
                        />
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}

function TrustBadgeCard({ id, title, desc, Icon, color, delay }) {
    const cardVariants = {
        initial: { scale: 1, y: 0 },
        hover: {
            scale: 1.05,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
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

    return (
        <motion.div
            className="group relative h-full"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            {/* Animated Background Glow */}
            <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 blur-xl`}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                }}
            />

            {/* Main Card */}
            <div className="relative h-full rounded-2xl bg-neutral-900/80 backdrop-blur-lg border border-neutral-800/50 p-6 shadow-2xl overflow-hidden">
                {/* Animated Border */}
                <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 text-center">
                    {/* Animated Icon */}
                    <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} shadow-lg mb-4 mx-auto`}
                        variants={iconVariants}
                    >
                        <Icon className="h-7 w-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                        className="text-lg font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay + 0.2 }}
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-neutral-300 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: delay + 0.3 }}
                    >
                        {desc}
                    </motion.p>
                </div>

                {/* Floating Element */}
                <motion.div
                    className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br ${color} rounded-full blur-sm`}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay
                    }}
                />
            </div>
        </motion.div>
    );
}

function StatCard({ value, label, icon: Icon, delay }) {
    const cardVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const numberVariants = {
        initial: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
                delay: delay
            }
        }
    };

    return (
        <motion.div
            className="group text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            <div className="relative rounded-2xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/30 p-8 shadow-lg">
                {/* Animated Icon */}
                <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4 mx-auto"
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(6, 182, 212, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Icon className="h-6 w-6 text-cyan-400" />
                </motion.div>

                {/* Animated Number */}
                <motion.div
                    className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    variants={numberVariants}
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {value}
                </motion.div>

                {/* Label */}
                <motion.div
                    className="text-sm text-neutral-300 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: delay + 0.2 }}
                >
                    {label}
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
}

function DisclaimerCard({ title, text }) {
    const cardVariants = {
        initial: { scale: 1, y: 0 },
        hover: {
            scale: 1.02,
            y: -2,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const iconVariants = {
        animate: {
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="group relative rounded-3xl bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-lg border border-yellow-700/30 p-8 shadow-2xl overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            {/* Animated Background Pattern */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
                <div className="flex items-start gap-4">
                    {/* Animated Icon */}
                    <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center"
                        variants={iconVariants}
                        animate="animate"
                    >
                        <AlertTriangle className="h-6 w-6 text-yellow-400" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                        <motion.h3
                            className="text-xl font-bold text-yellow-200 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {title}
                        </motion.h3>

                        <motion.p
                            className="text-yellow-100/80 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {text}
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Floating Warning Elements */}
            <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}