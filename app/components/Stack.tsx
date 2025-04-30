
'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiCypress, SiSass, SiKotlin, SiSwift, SiJetpackcompose, SiGraphql, SiGit, SiPostman } from 'react-icons/si';
import { HiCode } from 'react-icons/hi';

const stack = [
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
    { name: 'Cypress', icon: <SiCypress /> },

    { name: 'SCSS', icon: <SiSass /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: 'SwiftUI', icon: <SiSwift /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose /> },
    { name: 'REST', icon: <SiPostman /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'VS Code Theme Dark+', icon: <HiCode /> },
];

export default function Stack() {
    return (
        <section className="px-4 py-20 sm:py-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-heading text-gray-900 dark:text-white mb-3">
                    My Tech Stack (and Stuff I Pretend I Know)
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-body mb-10">
                    Real skills, learned the hard way — through bugs, Stack Overflow, shock, denial, anger, bargaining, depression, acceptance
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {stack.map((item) => (
                        <span
                            key={item.name}
                            className="flex items-center gap-2 text-sm font-body px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm"
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
