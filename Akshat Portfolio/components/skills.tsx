"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, BrainCircuit, LayoutGrid, MessageSquare } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C/C++",
        "SQL",
        "HTML",
        "JSP",
        "Servlets",
        "CSS",
        "JSON",
        "XML",
      ],
    },
    {
      name: "AI and ML",
      icon: <BrainCircuit className="h-6 w-6 text-blue-600" />,
      skills: ["Retrieval-Augmented Generation (RAG)", "Natural Language Processing (NLP)", "Prompt Engineering"],
    },
    {
      name: "Large Language Models",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      skills: ["OpenAI GPT", "Claude (Anthropic)", "Gemini (Google)", "LLaMA (Meta AI)"],
    },
    {
      name: "Frameworks and Libraries",
      icon: <LayoutGrid className="h-6 w-6 text-blue-600" />,
      skills: [
        "LangChain",
        "LlamaIndex",
        "FastAPI",
        "RESTful APIs",
        "Node.js",
        "Express.js",
        "Next.js",
        "Spring Boot",
        "Spring MVC",
        "Angular",
        "Streamlit",
        "Azure Bot Framework",
      ],
    },
    {
      name: "Databases and DevOps",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      skills: ["AWS", "Azure", "Supabase", "LanceDB", "Quadrant", "MySQL", "MongoDB", "Git", "GitHub", "Jenkins"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover" className="h-full">
              <Card className="h-full shadow-lg transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                <CardContent className="p-6">
                  <motion.div
                    className="flex items-center mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="mr-3 p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                      whileHover={{
                        rotate: 5,
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{category.name}</h3>
                  </motion.div>

                  <motion.div className="flex flex-wrap gap-2" variants={skillVariants}>
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors cursor-default"
                        variants={skillItemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

