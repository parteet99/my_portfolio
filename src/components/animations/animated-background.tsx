"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

const codeSnippets = [
    "const dev = true;",
    "npm run dev",
    "use client",
    "<Portfolio />",
    "git push origin main",
    "export default",
    "404 => fixed",
    "interface Props {}",
];

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Background Base */}
            <div className="absolute inset-0 bg-background" />


            {/* Floating Particles */}
            {particles.map((_, index) => {
                const size = Math.random() * 3 + 1;

                return (
                    <motion.span
                        key={index}
                        className="
                            absolute rounded-full
                            bg-primary/30 dark:bg-cyan-400
                            "
                        style={{
                            width: size,
                            height: size,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow:
                                "0 0 12px rgba(99,102,241,0.35)",
                        }}
                        animate={{
                            y: [-20, -200],
                            x: [0, Math.random() * 40 - 20],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    />
                );
            })}

            {/* Code Rain */}
            {codeSnippets.map((snippet, index) => (
                <motion.div
                    key={snippet}
                    className="
                            absolute hidden md:block
                            whitespace-nowrap
                            font-mono text-[11px]
                            text-primary/10
                            dark:text-cyan-400/20
                        "
                    initial={{
                        y: "-20%",
                        x: `${index * 12 + 5}%`,
                        opacity: 0,
                    }}
                    animate={{
                        y: "120%",
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 10 + index * 2,
                        repeat: Infinity,
                        delay: index,
                        ease: "linear",
                    }}
                >
                    {snippet}
                </motion.div>
            ))}

            {/* Noise Overlay */}
            <div
                className="
          absolute inset-0 opacity-[0.03]
          dark:opacity-[0.05]
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
            />
        </div>
    );
}