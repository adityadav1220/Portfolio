"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "FindMySquad",
      period: "Jan 2024 — Mar 2024",
      description:
        "A full-stack web platform designed to connect users for sports, fitness, and gaming activities within their city.",
      features: [
        "Host and join local events for sports, gym sessions, or gaming meetups.",
        "User profiles with interests, locations, and ratings.",
        "Filtering by sport, city, and relevance for better event matching.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Handlebars", "JavaScript"],
      github: "https://github.com/78himanshu/FindMySquad",
      demo: null,
    },
    {
      title: "Classroom Evaluation Tool",
      period: "January 2021 - May 2021",
      description:
        "A web tool designed to analyze student attention spans to improve classroom engagement for teachers.",
      features: [      
        "Real-time attention analysis dashboard.",
        "User-friendly interface for teachers to review session analytics.",
        "Improved classroom strategies based on insights.",],
      technologies: ["Python", "Flask", "OpenCV", "JavaScript"],
      github: null,
      demo: null,
    },
    {
      title: "Anime Merchandise E-Commerce Platform",
      period: "July 2023 — Sept 2023",
      description: "A fully functional e-commerce website built specifically for anime merchandise.",
      features: [
        "Product listings, user registration, and cart management.",
        "Secure authentication and payment integration.",
        "Handled 100+ transactions within first month.",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: null,
      demo: null,
    },
    {
      title: "Wedding Photos Website",
      period: "May 2023 — June 2023",
      description: "A platform for guests to upload and share wedding moments easily with the couple and attendees.",
      features: [
        "Secure image uploads by guests.",
        "Memories organized for event viewing.",
        "User-friendly gallery display.",
      ],
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: null,
      demo: null,
    },
  ]

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Projects" subtitle="What I've been building lately" />

        <motion.div
          ref={containerRef}
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full overflow-hidden shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <motion.div
                    className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                      animate={{
                        x: [0, 10, 0],
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                      animate={{
                        x: [0, -10, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <h3 className="text-2xl font-bold text-white z-10">{project.title}</h3>
                  </motion.div>

                  <div className="p-6">
                    <motion.div
                      className="flex items-center text-gray-600 dark:text-gray-400 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.period}</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-700 dark:text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                      <motion.ul
                        className="space-y-2"
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 text-sm pl-4 border-l-2 border-gray-300 dark:border-gray-700"
                            variants={featureItemVariants}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800 hover:scale-105 transition-transform"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                            <Github className="h-4 w-4" />
                            GitHub
                          </Button>
                        </Link>
                      )}

                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="gap-2 hover:scale-105 transition-transform">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

