"use client"
import Container from "@/components/layout/sitelayout/Container";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        // Animated background effect
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle animation
        const particles = [];

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.3 + 0.1
            });
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(4, 7, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x > canvas.width) particle.x = 0;
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.y > canvas.height) particle.y = 0;
                if (particle.y < 0) particle.y = canvas.height;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 119, 255, ${particle.opacity})`;
                ctx.fill();

                // Connect particles with lines
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = particles[j].x - particle.x;
                    const dy = particles[j].y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 119, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="min-h-screen w-screen relative overflow-hidden">
            {/* Animated Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
            radial-gradient(125% 125% at 50% 10%, #040717 40%, #006777 80%, #0099ff 100%)
          `,
                }}
            />

            {/* Animated Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-1 opacity-60"
                style={{ mixBlendMode: 'screen' }}
            />

            {/* Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="animate"
            ></motion.div>
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                variants={pulseVariants}
                animate="animate"
                transition={{ delay: 2 }}
            ></motion.div>

            <Container>
                <div className="flex items-center justify-between min-h-screen w-full text-white z-20 relative">
                    {/* Left Side - Content */}
                    <motion.div
                        className="flex-1 max-w-2xl space-y-8 px-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="flex w-full">
                            <div className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                <h2 className="relative bg-gray-900/80 backdrop-blur-sm text-gray-200 text-sm font-medium border border-gray-700/50 rounded-full px-6 py-2 w-fit flex items-center gap-2">
                                    <BsStars className="text-cyan-400 text-lg animate-spin-slow" />
                                    <span>Powered by <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">CherifAI</span></span>
                                </h2>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h1 className="text-5xl sm:text-6xl font-bold leading-tight bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                                <span className="block">AI-Powered</span>
                                <span className="block">Real Estate</span>
                                <span className="block relative">
                                    Assistant
                                    <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-light">
                                Transform your real estate workflow with intelligent deal analysis,
                                automated documents, and data-driven insights — powered by advanced AI.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 py-6">
                            {[
                                { value: '10x', label: 'Faster Analysis' },
                                { value: '99%', label: 'Accuracy' },
                                { value: '24/7', label: 'AI Support' },
                                { value: 'GPT-4', label: 'Powered' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center group cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.8 }}
                                >
                                    <div className="text-2xl font-bold text-white group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-4 pt-8">
                            <Link
                                href="/dashboard"
                                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 border border-blue-500/30"
                            >
                                <div className="absolute inset-0 bg-white/10 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <Sparkles className="h-5 w-5 relative z-10" />
                                <span className="relative z-10">Get Started Free</span>
                                <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <motion.button
                                className="group bg-gray-900/60 backdrop-blur-sm hover:bg-gray-800/80 border border-gray-700/50 text-gray-300 hover:text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play className="h-4 w-4" />
                                <span>Watch Demo</span>
                            </motion.button>
                        </motion.div>

                        {/* Trust Badge */}
                        <motion.div variants={itemVariants} className="pt-12">
                            <p className="text-gray-400 text-sm mb-4">Trusted by leading real estate professionals</p>
                            <div className="flex flex-wrap gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
                                {['Brokers', 'Agents', 'Investors', 'Developers'].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        className="text-gray-300 font-medium text-lg"
                                        whileHover={{ scale: 1.1, color: "#60a5fa" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Interactive Demo Card */}
                    <motion.div
                        className="flex-1 flex items-center justify-center px-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <motion.div
                            className="relative w-full max-w-md"
                            variants={floatingVariants}
                            animate="animate"
                        >
                            {/* Main Card */}
                            <motion.div
                                className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* AI Avatar */}
                                    <motion.div
                                        className="flex items-center gap-4 mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                                <BsStars className="text-white text-2xl" />
                                            </div>
                                            <motion.div
                                                className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">CherifAI Assistant</h3>
                                            <p className="text-cyan-400 text-sm">Online • Ready to help</p>
                                        </div>
                                    </motion.div>

                                    {/* Chat Preview */}
                                    <div className="space-y-4 mb-6">
                                        <motion.div
                                            className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-4 max-w-xs"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 }}
                                        >
                                            <p className="text-white text-sm">Hi! I can analyze any real estate deal in seconds. Try me!</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-4 ml-auto max-w-xs"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.4 }}
                                        >
                                            <p className="text-white text-sm">Show me ROI analysis for a $500k property</p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-cyan-500/30 rounded-2xl p-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.6 }}
                                        >
                                            <p className="text-white text-sm">
                                                <span className="font-semibold">Analysis Complete:</span> 8.2% CAP rate, 15.3% ROI, positive cash flow of $1,200/month ✅
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Interactive Elements */}
                                    <motion.div
                                        className="flex gap-2 mb-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.8 }}
                                    >
                                        {['Market Data', 'Documents', 'Analysis', 'Reports'].map((tag, index) => (
                                            <motion.button
                                                key={tag}
                                                className="bg-gray-800/60 hover:bg-gray-700/80 border border-gray-700/50 text-gray-300 hover:text-white px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.8 + index * 0.1 }}
                                            >
                                                {tag}
                                            </motion.button>
                                        ))}
                                    </motion.div>

                                    {/* Input Field */}
                                    <motion.div
                                        className="relative"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2 }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Ask about any property..."
                                            className="w-full bg-gray-800/40 border border-gray-700/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-300"
                                        />
                                        <motion.button
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 rounded-xl"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ArrowRight className="h-4 w-4" />
                                        </motion.button>
                                    </motion.div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full blur-sm"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm"
                                    animate={{
                                        scale: [1, 1.8, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                />
                            </motion.div>

                            {/* Background Decorative Elements */}
                            <motion.div
                                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                </div>
            </motion.div>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
        </section>
    );
};

export default Hero;