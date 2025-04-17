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
                alt="Aditya Yadav"
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
            Software Engineer · Backend Developer · Working in the Shadows. Delivering in the Spotlight.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Born in the heart of India(Delhi), currently navigating the alleys of Hoboken — I'm Aditya Yadav, a Software Engineer who's always been a little obsessed with solving problems (and maybe with Batman too).
            <br/><br/>
            With 3 years of industry experience at Coforge Ltd., I've built scalable backend systems, automated workflows, and resolved production bugs faster than Joker switches hideouts. Now, I'm pursuing my Master's in Computer Science at Stevens Institute of Technology, sharpening my skills in AI, backend development, and cloud systems.
            <br/><br/>
            When I'm not coding, I'm either lifting weights (trying to stay Gotham-ready), vibing to music, or binging a new Anime/K-Drama.
            <br/><br/>
            In a world full of chaos and bugs, I like to build things that just... work.
            <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-2 mb-6">
              "It's not who I am underneath... but what I do that defines me."
            </span>
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
                  <span className="text-gray-700 dark:text-gray-300">AYadav25@stevens.edu</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (631) 974-0339</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

