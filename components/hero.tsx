"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-900/20 via-transparent to-yellow-900/20" />
    
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-black/80 to-yellow-900/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />  */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#000000]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/10 via-black/60 to-yellow-900/10" /> */}
        {/* Animated background elements */}
        {/* <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.1)] to-[hsl(var(--accent)/0.1)] dark:from-[hsl(var(--primary)/0.2)] dark:to-[hsl(var(--accent)/0.2)]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        /> */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gray-800/10 dark:bg-gray-800/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <motion.div
        className="z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Aditya Yadav
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Knight Shift Developer. By day I code. By night... I still code. The grind never sleeps.
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Someone's gotta keep Gotham's backend running.
          </p>

        </motion.h2>


        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={socialVariants} custom={0}>
            <div className="group relative">
              <Link href="https://linkedin.com/in/aditya-yadav-69660ab7" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                  <Linkedin className="h-5 w-5" />
                    <span className="block group-hover:hidden">LinkedIn</span>
                    <span className="hidden group-hover:block">Wayne Network</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={socialVariants} custom={1}>
            <div className="group relative">
              <Link href="https://github.com/adityadav1220" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                  <Github className="h-5 w-5" />
                    <span className="block group-hover:hidden">GitHub</span>
                    <span className="hidden group-hover:block">My Batcave</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={socialVariants} custom={2}>
            <div className="group relative">
              <Link href="mailto:AYadav25@stevens.edu">
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                    <span className="block group-hover:hidden">Email</span>
                    <span className="hidden group-hover:block">Call The Bat-Signal</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="https://drive.google.com/file/d/1G0V-IL4Il2IHaOd2865aThy67m0Jp617/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all gap-2 min-w-[190px]"
              >
                <span className="block group-hover:hidden">Download Resume</span>
                <span className="hidden group-hover:block">My Bat-File</span>
              </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-[hsl(var(--primary)/0.1)] dark:hover:bg-[hsl(var(--primary)/0.1)]"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </section>
    </>
  )
}

