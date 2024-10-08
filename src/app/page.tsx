"use client";

import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Portfolio() {
  const [theme] = useState<"light" | "dark">("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  const navItems = [
    { href: "about", label: "Sobre" },
    { href: "projects", label: "Experiência" },
    { href: "skills", label: "Habilidades" },
    { href: "courses", label: "Cursos" },
    { href: "contact", label: "Contato" },
  ];

  return (
    <div
      className={`${spaceGrotesk.className} min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 ${
          theme === "dark" ? "bg-black bg-opacity-90" : "bg-white bg-opacity-90"
        } backdrop-blur-sm`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-extralight hover:text-purple-400 transition-colors">
              Pedro Marinho
            </h1>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu
              className={`h-6 w-6 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            />
          </Button>
        </nav>
      </header>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-black opacity-50"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-64 bg-gray-800 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="absolute top-4 right-4"
              >
                <X className="h-6 w-6 text-white" />
              </Button>
              <div className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Section
          id="about"
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
            <div className="justify-center items-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4"
              >
                Olá, Eu sou Pedro Marinho
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl text-purple-400 mb-4"
              >
                Full Stack Developer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 mb-6"
              >
                Sou um Desenvolvedor Web Full Stack em constante aprendizado,
                com habilidades para criar aplicações funcionais e eficientes,
                combinando design e estrutura de forma harmoniosa. Meu objetivo
                é construir soluções que ofereçam uma experiência completa e de
                qualidade para os usuários, equilibrando performance e estética.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex space-x-4"
              >
                <motion.a
                  href="mailto:pedrohomarinho_1104@outlook.com"
                  className="text-2xl hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope />
                </motion.a>
                <motion.a
                  href="https://github.com/pedrohmarinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/pedro-marinho-9b6915204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
                <Image
                  src="https://github.com/pedrohmarinho.png"
                  alt="Pedro Marinho"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 -z-10">
                <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                  <defs>
                    <pattern
                      id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-700"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="404"
                    fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </Section>

        <Section id="projects" className="bg-gray-900">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-32 text-center"
          >
            Experiência Profissional
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExperienceItem
              title="Estoquista"
              company="Vix Lens"
              period="Maio 2024 – Presente"
              description="Gerenciamento e controle de estoque de lentes no laboratório óptico, com foco em organização e armazenamento eficiente."
            />
            <ExperienceItem
              title="Montador Óptico"
              company="Vision Vix / Braslab"
              period="Junho 2021 – Abril 2023"
              description="Montagem de lentes oftálmicas e instrumentos ópticos, garantindo a qualidade e precisão nos processos."
            />
            <ExperienceItem
              title="Operador de Computadores"
              company="Autoglass"
              period="Janeiro 2019 – Maio 2020"
              description="Controle de estoque, lançamento de produtos no sistema e suporte na distribuição de equipamentos."
            />
          </div>
        </Section>

        <Section id="skills" className="bg-black">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-32 text-center"
          >
            Habilidades e Tecnologias
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <SkillIcon Icon={SiHtml5} name="HTML5" />
            <SkillIcon Icon={SiCss3} name="CSS3" />
            <SkillIcon Icon={SiJavascript} name="JavaScript" />
            <SkillIcon Icon={SiTypescript} name="TypeScript" />
            <SkillIcon Icon={SiReact} name="React" />
            <SkillIcon Icon={SiNextdotjs} name="Next.js" />
            <SkillIcon Icon={SiNodedotjs} name="Node.js" />
            <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" />
          </motion.div>
        </Section>

        <Section id="courses" className="bg-gray-900">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-32 text-center"
          >
            Cursos e Treinamentos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseItem
              title="Programação Básica de Aplicativos Web - Frontend"
              institution="Instituto Federal do Espírito Santo (IFES)"
              period="Julho 2023 – Novembro 2023"
              duration="160 horas"
              description="Desenvolvimento de interfaces web e conceitos de HTML, CSS e JavaScript."
            />
            <CourseItem
              title="Programação com JavaScript e Node.js - Backend"
              institution="Instituto Federal do Espírito Santo (IFES)"
              period="Dezembro 2023 – Abril 2024"
              duration="160 horas"
              description="Criação de aplicações server-side utilizando JavaScript e Node.js."
            />
            <CourseItem
              title="Programação de Games 2D"
              institution="CEC | Autoglass"
              period="Agosto 2018 – Janeiro 2019"
              duration="27 horas"
              description="Introdução ao desenvolvimento de jogos 2D, com foco em programação e lógica de game design."
            />
            <CourseItem
              title="Curso de Inglês – Básico"
              institution="KUMON – Vila Velha, ES"
              period="Outubro 2018 – Outubro 2019"
              duration=""
              description="Competências iniciais em compreensão e comunicação na língua inglesa."
            />
          </div>
        </Section>

        <Section id="contact" className="bg-black">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-32 text-center"
          >
            Entre em contato
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2  bg-gray-700 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar Mensagem
                </motion.button>
              </div>
            </form>
          </motion.div>
        </Section>
      </main>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pedro Marinho. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center py-16 px-4 md:px-8 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-400 mb-1">{company}</p>
      <p className="text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

import { IconType } from "react-icons";

function SkillIcon({ Icon, name }: { Icon: IconType; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-5xl mb-2 text-purple-400" />
      <span className="text-sm">{name}</span>
    </div>
  );
}

interface CourseItemProps {
  title: string;
  institution: string;
  period: string;
  duration?: string;
  description: string;
}

function CourseItem({
  title,
  institution,
  period,
  duration,
  description,
}: CourseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lgS"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-purple-400 mb-1">{institution}</p>
      <p className="text-gray-400 mb-4">{period}</p>
      {duration && <p className="text-gray-400 mb-4">{duration}</p>}
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
