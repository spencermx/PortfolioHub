"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiTerminal, FiSettings, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-900 text-gray-100 bg-pattern">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mt-0 mb-24 container mx-auto px-6"
      >
        {/* ... rest of hero content ... */}
        <Image
          src="/logo.png"
          alt="Spencer Maas Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
          Spencer Maas
        </h1>
        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          Arch Linux | Javascript | Nextjs 
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 hover:from-teal-400 hover:to-purple-500"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg font-bold border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
          >
            Download Resume
          </a>
        </div>
      </motion.header>
      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="my-24 container mx-auto px-6"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-teal-400">About Me</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-base leading-loose text-gray-300">
            I’m a{" "}
            <span className="font-bold text-teal-400">
              Full Stack Software Engineer
            </span>{" "}
            passionate about crafting scalable, efficient web applications. With
            over 60 deployed projects using React, Node.js, and WebSockets, my
            ongoing exploration of Arch Linux and low-level programming concepts
            like virtual memory fuels my ability to deliver optimized solutions.
          </p>
        </div>
      </motion.section>
      {/* Learning Journey */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="my-24 container mx-auto px-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FiCode className="text-3xl text-purple-400" />
          <h2 className="text-3xl font-extrabold text-teal-400">
            My Learning Journey
          </h2>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-base leading-loose text-gray-300 mb-4">
            My passion for computing drives me to explore its core foundations.
            On <span className="font-bold text-purple-400">Arch Linux</span>,
            I’ve mastered system administration tasks like partitioning with{" "}
            <code>fdisk</code>, configuring GRUB, and optimizing boot processes
            with <code>efibootmgr</code>, which I applied to streamline
            deployments for my portfolio projects.
          </p>
          <p className="text-base leading-loose text-gray-300 mb-4">
            I’ve delved into low-level programming, studying virtual memory,
            page tables, and executable formats like PE and ELF files. This
            knowledge enhances my ability to optimize performance in Node.js
            applications, such as my real-time Chatroom project built with
            WebSockets. Exploring CPU architectures (x86_64, ARM, RISC-V)
            further equips me to develop cross-platform solutions.
          </p>
          <p className="text-base leading-loose text-gray-300">
            My study of modern web frameworks like{" "}
            <span className="font-bold text-purple-400">Next.js</span> and{" "}
            <span className="font-bold text-purple-400">Vite</span>
            powers my ability to create user-friendly applications.{" "}
            <a href="#projects" className="text-teal-400 hover:text-purple-400">
              Explore my projects
            </a>
            to see these concepts in action.
          </p>
        </div>
      </motion.section>
      {/* Workflow */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="my-24 container mx-auto px-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FiTerminal className="text-3xl text-purple-400" />
          <h2 className="text-3xl font-extrabold text-teal-400">Workflow</h2>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-base leading-loose text-gray-300">
            My <span className="font-bold text-purple-400">Arch Linux</span>{" "}
            setup, optimized with tools like <code>mkinitcpio</code>
            and <code>tmuxinator</code>, reflects my deep understanding of
            system internals. I use a tiled i3 setup for efficiency,
            <span className="font-bold text-purple-400">tmux</span> for session
            management, and{" "}
            <span className="font-bold text-purple-400">Neovim</span>
            with curated plugins for coding, ensuring a productive development
            environment.
          </p>
        </div>
      </motion.section>
      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="my-24 container mx-auto px-6"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-teal-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/chat-screenshot.png"
              alt="Chatroom"
              width={300}
              height={200}
              className="rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Real-Time Chatroom
            </h3>
            <p className="text-sm text-gray-300">
              A dynamic chat application enabling seamless real-time
              communication using WebSockets.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Technologies: React, WebSockets, Tailwind CSS, Next.js
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Tech Insight: Optimized server performance using knowledge of ELF
              files and virtual memory.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="/chat"
                className="text-teal-400 hover:text-purple-400"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/yourusername/chat-app"
                className="text-teal-400 hover:text-purple-400"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/portfolio-screenshot.png"
              alt="Portfolio"
              width={300}
              height={200}
              className="rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Portfolio Website
            </h3>
            <p className="text-sm text-gray-300">
              A modern portfolio showcasing my software engineering expertise.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Technologies: Next.js, Tailwind CSS, React
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Tech Insight: Leveraged Next.js SSG for fast, SEO-friendly
              rendering.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="/" className="text-teal-400 hover:text-purple-400">
                Live Site
              </Link>
              <Link
                href="https://github.com/yourusername/portfolio"
                className="text-teal-400 hover:text-purple-400"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/yourusername/PortfolioHub"
            className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 hover:from-teal-400 hover:to-purple-500"
          >
            View All Projects
          </a>
        </div>
      </motion.section>
      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="my-24 container mx-auto px-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FiSettings className="text-3xl text-purple-400" />
          <h2 className="text-3xl font-extrabold text-teal-400">
            Skills & Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "JavaScript"].map(
                (skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <img
                      src={`/icons/${skill.toLowerCase()}.svg`}
                      alt={skill}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "REST APIs"].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <img
                    src={`/icons/${skill.toLowerCase().replace(" ", "-")}.svg`}
                    alt={skill}
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Footer */}
      <footer className="text-center my-24 container mx-auto px-6 relative">
        <div className="arch-watermark" />
        <div className="flex justify-center space-x-6 text-teal-400 mb-6">
          <a
            href="https://github.com/spencermx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-3xl hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/spencermx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-3xl hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Spencer Maas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
