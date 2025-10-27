"use client";

import Container from "@/components/layout/sitelayout/Container";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Building,
    FileText,
    Image,
    Mic,
    Send,
    Sparkles,
    Target,
    TrendingUp,
    Video,
    Zap
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LandingAIChat({
    title = "AI Real Estate Co-Pilot",
    subtitle = "Your intelligent partner for property analysis, market insights, and investment strategy",
    onSubmit,
    onQuickAction,
}) {
    const [input, setInput] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [activeModule, setActiveModule] = useState(null);
    const [waveform, setWaveform] = useState([]);
    const [isThinking, setIsThinking] = useState(false);
    const [typingText, setTypingText] = useState("");
    const waveformRef = useRef(null);

    // Demo typing effect
    useEffect(() => {
        if (isThinking) {
            const text = "Analyzing property data and market trends...";
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    setTypingText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        setIsThinking(false);
                        setTypingText("");
                    }, 2000);
                }
            }, 50);
            return () => clearInterval(typing);
        }
    }, [isThinking]);

    // Generate random waveform for voice recording
    useEffect(() => {
        if (isRecording) {
            const interval = setInterval(() => {
                const newWave = Array.from({ length: 40 }, () =>
                    Math.floor(Math.random() * 40) + 10
                );
                setWaveform(newWave);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [isRecording]);

    const modules = [
        {
            id: "analyzer",
            title: "Property Analyzer",
            description: "Deep dive into property valuation and potential",
            icon: Building,
            color: "from-blue-500 to-cyan-500",
            gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
            features: ["Market Value", "ROI Projection", "Comparable Analysis"],
            stats: "98% accuracy"
        },
        {
            id: "investor",
            title: "Investment Scout",
            description: "Find hidden gems and investment opportunities",
            icon: Target,
            color: "from-purple-500 to-pink-500",
            gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
            features: ["Opportunity Score", "Risk Analysis", "Growth Potential"],
            stats: "500+ deals analyzed"
        },
        {
            id: "market",
            title: "Market Intelligence",
            description: "Real-time market trends and predictions",
            icon: TrendingUp,
            color: "from-orange-500 to-red-500",
            gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
            features: ["Trend Analysis", "Price Forecast", "Neighborhood Data"],
            stats: "Live data feeds"
        },
        {
            id: "document",
            title: "Document Master",
            description: "Generate contracts and legal documents",
            icon: FileText,
            color: "from-green-500 to-emerald-500",
            gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
            features: ["Lease Agreements", "Purchase Contracts", "Legal Templates"],
            stats: "AI-reviewed"
        }
    ];

    const quickPrompts = [
        {
            text: "Analyze 123 Luxury Lane for investment potential",
            type: "analysis",
            urgency: "high",
            icon: Target
        },
        {
            text: "Generate rental agreement for downtown condo",
            type: "document",
            urgency: "medium",
            icon: FileText
        },
        {
            text: "Compare market trends in Miami vs Austin",
            type: "research",
            urgency: "low",
            icon: TrendingUp
        },
        {
            text: "Calculate cash flow for $750k multifamily",
            type: "calculation",
            urgency: "high",
            icon: Zap
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        initial: { scale: 1, y: 0 },
        hover: {
            scale: 1.02,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const floatVariants = {
        animate: (i) => ({
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            rotate: [0, 180, 360],
            transition: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    return (
        <section className="w-full bg-neutral-950 text-white relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="animate"
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="animate"
                transition={{ delay: 1 }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatVariants}
                        animate="animate"
                        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <Container>
                <div className="min-h-screen flex items-center justify-center py-20">
                    <motion.div
                        className="w-full max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Header Section */}
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                                        <Brain className="h-6 w-6 text-white" />
                                    </div>
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-neutral-950"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                                <motion.span
                                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    CherifAI
                                </motion.span>
                            </div>

                            <motion.h1
                                className="text-5xl sm:text-7xl font-black mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                                    Real Estate
                                </span>
                                <br />
                                <motion.span
                                    className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    Co-Pilot
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Your AI-powered partner for smarter real estate decisions.
                                Analyze, strategize, and execute with confidence.
                            </motion.p>
                        </motion.div>

                        {/* Interactive Modules Grid */}
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
                            variants={containerVariants}
                        >
                            {modules.map((module, index) => (
                                <motion.div
                                    key={module.id}
                                    variants={itemVariants}
                                    custom={index}
                                    whileHover="hover"
                                    initial="initial"
                                    animate="initial"
                                >
                                    <motion.div
                                        className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${activeModule === module.id
                                            ? `border-cyan-500/50 bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-2xl shadow-cyan-500/10`
                                            : 'border-neutral-800 bg-neutral-900/50 hover:border-cyan-500/30'
                                            }`}
                                        onClick={() => setActiveModule(module.id)}
                                        variants={cardHoverVariants}
                                    >
                                        {/* Animated Background */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5`}
                                            whileHover={{ opacity: 0.1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Module Header */}
                                        <div className="flex items-start justify-between mb-6 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <motion.div
                                                    className={`p-3 rounded-2xl bg-gradient-to-br ${module.color} shadow-lg`}
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    <module.icon className="h-6 w-6 text-white" />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">
                                                        {module.title}
                                                    </h3>
                                                    <p className="text-neutral-400">
                                                        {module.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <motion.div
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeModule === module.id ? 'bg-cyan-400 scale-150' : 'bg-neutral-700 group-hover:bg-cyan-400/50'
                                                    }`}
                                                animate={{
                                                    scale: activeModule === module.id ? [1, 1.5, 1] : 1
                                                }}
                                                transition={{
                                                    duration: activeModule === module.id ? 2 : 0.3,
                                                    repeat: activeModule === module.id ? Infinity : 0
                                                }}
                                            />
                                        </div>

                                        {/* Features List */}
                                        <div className="flex flex-wrap gap-3 mb-4 relative z-10">
                                            {module.features.map((feature, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-full text-sm font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
                                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    {feature}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center gap-2 text-sm text-cyan-400 relative z-10">
                                            <Sparkles className="h-4 w-4" />
                                            <span>{module.stats}</span>
                                        </div>

                                        {/* Active State Indicator */}
                                        <AnimatePresence>
                                            {activeModule === module.id && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-3xl border-2 border-cyan-400/50"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Dynamic Input Interface */}
                        <motion.div
                            className="max-w-4xl mx-auto"
                            variants={itemVariants}
                        >
                            {/* AI Thinking State */}
                            <AnimatePresence>
                                {isThinking && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl"
                                    >
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                                            >
                                                <Brain className="h-4 w-4 text-white" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3].map(i => (
                                                            <motion.div
                                                                key={i}
                                                                className="w-1 h-1 bg-cyan-400 rounded-full"
                                                                animate={{ scale: [1, 1.5, 1] }}
                                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-cyan-400 font-medium">CherifAI is thinking</span>
                                                </div>
                                                <p className="text-white font-mono text-sm">
                                                    {typingText}
                                                    <motion.span
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                        className="ml-1"
                                                    >
                                                        |
                                                    </motion.span>
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Voice Recording Visualization */}
                            <AnimatePresence>
                                {isRecording && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mb-8 p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-cyan-500/30 overflow-hidden"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    className="w-3 h-3 bg-red-500 rounded-full"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                                <span className="text-red-400 font-medium">Recording...</span>
                                            </div>
                                            <span className="text-neutral-400 text-sm">00:23</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 h-12">
                                            {waveform.map((height, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="w-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-full"
                                                    initial={{ height: "10%" }}
                                                    animate={{ height: `${height}%` }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Main Input Card */}
                            <motion.div
                                className="relative rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 p-1 shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {/* Interactive Background */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />

                                <div className="relative bg-neutral-900 rounded-2xl p-6">
                                    {/* Input Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <span className="text-sm font-medium text-cyan-400">AI READY</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <motion.button
                                                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Image className="h-4 w-4" />
                                            </motion.button>
                                            <motion.button
                                                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Video className="h-4 w-4" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Text Input */}
                                    <motion.textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Describe your real estate scenario... (e.g., 'I want to analyze a 4-bedroom house in Miami for rental investment')"
                                        className="w-full min-h-[120px] bg-transparent text-white placeholder:text-neutral-500 resize-none outline-none text-lg leading-relaxed"
                                        whileFocus={{ scale: 1.01 }}
                                    />

                                    {/* Interactive Controls */}
                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-800">
                                        <div className="flex items-center gap-3">
                                            <motion.button
                                                onClick={() => setIsRecording(!isRecording)}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isRecording
                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                    : 'bg-neutral-800 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 border border-neutral-700'
                                                    }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Mic className="h-4 w-4" />
                                                {isRecording ? 'Stop' : 'Voice'}
                                            </motion.button>

                                            <motion.button
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 font-medium transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FileText className="h-4 w-4" />
                                                Attach
                                            </motion.button>
                                        </div>

                                        <motion.button
                                            onClick={() => {
                                                setIsThinking(true);
                                                onSubmit?.(input);
                                            }}
                                            disabled={!input.trim()}
                                            className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-neutral-800 disabled:to-neutral-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden"
                                            whileHover={{ scale: !input.trim() ? 1 : 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100"
                                                whileHover={{ x: ["0%", "100%"] }}
                                                transition={{ duration: 0.8 }}
                                            />
                                            <span className="relative z-10">Generate Insights</span>
                                            <motion.div
                                                className="relative z-10"
                                                animate={input.trim() ? { x: [0, 5, 0] } : {}}
                                                transition={{ duration: 1, repeat: input.trim() ? Infinity : 0 }}
                                            >
                                                <Send className="h-4 w-4" />
                                            </motion.div>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Quick Prompt Cards */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                                variants={containerVariants}
                            >
                                {quickPrompts.map((prompt, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setInput(prompt.text)}
                                        className="group text-left p-4 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
                                        variants={itemVariants}
                                        whileHover="hover"
                                        initial="initial"
                                        animate="initial"
                                    >
                                        <motion.div
                                            variants={cardHoverVariants}
                                            className="relative z-10"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <prompt.icon className="h-4 w-4 text-cyan-400" />
                                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${prompt.urgency === 'high'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : prompt.urgency === 'medium'
                                                            ? 'bg-orange-500/20 text-orange-400'
                                                            : 'bg-green-500/20 text-green-400'
                                                        }`}>
                                                        {prompt.type}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    transition={{ type: "spring", stiffness: 400 }}
                                                >
                                                    <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                                                </motion.div>
                                            </div>
                                            <p className="text-neutral-200 group-hover:text-white transition-colors">
                                                {prompt.text}
                                            </p>
                                        </motion.div>

                                        {/* Hover gradient */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100"
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}