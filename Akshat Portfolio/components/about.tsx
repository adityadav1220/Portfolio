"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/images/profile.png"
                alt="Akshat Sahu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              AI Engineer & Full Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate AI Engineer and Full Stack Developer with expertise in building intelligent systems and
              web applications. Currently pursuing my Master's in Computer Science at Stevens Institute of Technology, I
              specialize in AI technologies including RAG, NLP, and working with various LLMs like OpenAI GPT, Claude,
              and Gemini. I also work as a Web & Media Graduate Assistant at the Hanlon Financial Systems Center, where
              I assist with web development and media projects.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Hoboken, New Jersey</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">asahu3@stevens.edu</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (201) 275-7594</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

