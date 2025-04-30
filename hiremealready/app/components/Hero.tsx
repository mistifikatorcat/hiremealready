"use client"
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 bg-backgroundLight dark:bg-backgroundDark">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-heading text-gray-900 dark:text-white mb-6"
      >
        Hi, I’m Daniel.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-md text-lg font-body text-gray-700 dark:text-gray-300 mb-6"
      >
        I write front-ends, back-end if you ask, fight bugs, and refresh my inbox like it’s a slot machine.
        Currently seeking a job, a sign from the universe, or at least a good cup of coffee.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#"
          className="px-6 py-3 text-white bg-primary rounded-lg text-sm sm:text-base font-semibold hover:brightness-110"
        >
          Interview Me
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-primary text-primary rounded-lg text-sm sm:text-base font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          View Portfolio
        </a>
      </motion.div>
    </section>
  );
}
