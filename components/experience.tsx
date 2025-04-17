"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Coforge Ltd.",
      location: "Greater Noida, India",
      period: "Aug 2021 — Aug 2024",
      responsibilities: [
        "Resolved 100+ production issues, reducing average resolution time by 20% and boosting system reliability.",
        "Designed and implemented 10+ custom automation workflows using Visual Cron and MySQL, reducing manual errors by 30%.",
        "Developed and deployed REST APIs for client applications, improving data retrieval speeds by 25%.",
        "Enhanced cloud-based deployments, reducing system downtime by 15% through strategic optimizations."
      ],
      skills: ["Python","C#", "Java", "MySQL", "Visual Cron", "REST APIs"]
    },
    {
      title: "Course Assistant — Algorithms",
      company: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      period: "Jan 2025 — Present",
      responsibilities: [
        "Guided students through complex algorithmic concepts and problem-solving strategies.",
        "Resolved queries and mentored students during coding sessions and office hours.",
        "Simplified technical topics to improve learning experience for over 100 students."
      ],
      skills: ["Algorithms", "Problem Solving", "Mentorship"]
    },
    {
      title: "Software Engineer Intern",
      company: "RateGain Pvt. Ltd.",
      location: "Noida, India",
      period: "Jun 2020 — Aug 2020",
      responsibilities: [
        "Built and optimized 10+ Excel-based data reports, enhancing data accessibility by 30%.",
        "Assisted in SQL query optimization, reducing query execution time by 40%."
      ],
      skills: ["SQL", "Data Analysis", "Excel"]
    },
    {
      title: "Software Engineer Intern",
      company: "TANISI IT Services Pvt. Ltd.",
      location: "Noida, India",
      period: "Apr 2020 — May 2020",
      responsibilities: [
        "Conducted research on emerging data storage technologies, leading to a 15% improvement in strategy planning.",
        "Created a 10-page technical report on cloud-based data solutions influencing strategic initiatives."
      ],
      skills: ["Research", "Data Storage", "Cloud Technologies"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const listItemVariants = {
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />

        <motion.div
          className="space-y-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[50%] top-full h-12 w-0.5 bg-gradient-to-b from-blue-600 to-transparent z-0 hidden md:block"></div>
              )}

              <Card className="overflow-hidden border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-gray-800 dark:text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className="text-blue-600 dark:text-blue-400 font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      <div className="flex flex-col items-end">
                        <motion.div
                          className="flex items-center text-gray-600 dark:text-gray-400 mb-1"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </motion.div>
                      </div>
                    </div>

                    <motion.ul
                      className="space-y-2 mb-4"
                      variants={listVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 pl-4 border-l-2 border-gray-300 dark:border-gray-700"
                          variants={listItemVariants}
                        >
                          {resp}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      className="flex flex-wrap gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {exp.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
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

