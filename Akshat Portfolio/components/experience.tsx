"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Founding AI Engineer",
      company: "Future Path AI",
      location: "Cupertino, CA",
      period: "January 2024 — Present",
      responsibilities: [
        "Built real-time voice and chat agents integrated with Microsoft Teams and SIP telephony, orchestrating text-to-speech and speech-to-text pipelines for interruption handling and dialogue state management. Achieved around 400ms end-to-end latency at 10k+ concurrent sessions.",
        "Engineered multi-tenant AI agents with a modular RAG architecture leveraging vector databases (LanceDB, Qdrant) for semantic retrieval and deployed secure on-prem solutions for Fortune 500 pharma/finance that boosted factual accuracy by 30%.",
        "Developed AI-based intent classifiers integrated with various ITSM tools such as ServiceNow, Intune, MS365 to automate IT support workflows by leveraging LLMs for generative UI rendering via dynamic adaptive cards, reducing average ticket resolution time by 60% compared to manual triage processes.",
        "Built follow-up suggestion and citation systems using semantic context linking and retrieval-grounded prompting, lowering ungrounded responses by 45% and improving accuracy and reliability across interactions.",
      ],
      skills: ["RAG", "LLMs", "Vector Databases", "NLP", "Microsoft Teams", "ServiceNow"],
    },
    {
      title: "Software Engineering Intern",
      company: "Nagarro",
      location: "Gurugram, India",
      period: "March 2023 — July 2023",
      responsibilities: [
        "Engineered a comprehensive Product Community Website leveraging Java, Spring Boot, Hibernate, MySQL, and Angular to deliver modular services for user registration, product browsing, and review management—boosting new user sign-ups by 50% through a scalable, event-driven architecture.",
        "Developed high-performance RESTful APIs using Java Spring Boot for secure user authentication, registration, product search, and review management. Optimized API workflows with microservices design and strategic caching, reducing 95th percentile response times by 30%.",
        "Integrated Hibernate ORM with MySQL to enforce secure and efficient data storage/retrieval for user and product information. Implemented advanced indexing and query optimization strategies, resulting in a 40% improvement in database query efficiency.",
        "Created interactive, responsive front-end interfaces using Angular that leverage dynamic content rendering and client-side caching, leading to a 25% increase in page views per user and improved session engagement.",
      ],
      skills: ["Java", "Spring Boot", "Hibernate", "MySQL", "Angular", "RESTful APIs"],
    },
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

