import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FiTerminal, FiSettings } from "react-icons/fi";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10 text-gray-100">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Building Cool Stuff, One Line at a Time
        </h1>
        <p className="text-xl text-gray-300">
          I’m a Full Stack Software Engineer who loves building web apps that
          scale and actually work.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-teal-400">
            A Bit About Me
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Hey there! I’m a{" "}
            <span className="font-bold text-teal-400">
              Full Stack Software Engineer
            </span>{" "}
            who gets a kick out of building web apps that are fast, reliable,
            and easy to use. I’m all about solving problems and writing code
            that’s clean and doesn’t make future-me cringe. I’ve got experience
            on both the frontend and backend, and I love putting together
            solutions that actually matter.
          </p>
        </div>
      </section>
      {/* Workflow Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <FiTerminal className="text-3xl text-blue-400" />
          <h2 className="text-2xl font-semibold text-teal-400">
            How I Get Stuff Done
          </h2>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <p className="text-base leading-relaxed text-gray-300">
            I run <span className="font-bold text-blue-400">Ubuntu</span> with a
            tiled i3 setup, keeps everything snappy and organized. I lean on{" "}
            <span className="font-bold text-blue-400">tmux</span> to juggle
            sessions and <span className="font-bold text-blue-400">Neovim</span>{" "}
            with some hand-picked plugins to make coding feel smooth. Oh, and{" "}
            <span className="font-bold text-blue-400">tmuxinator</span> is my
            go-to for hopping between projects without losing my mind. It’s a
            setup that keeps me in the zone.
          </p>
        </div>
      </section>
      {/* Skills Section */}
      <section className="mb-16">
        <div className="flex items-center space-x-3 mb-6">
          <FiSettings className="text-3xl text-blue-400" />
          <h2 className="text-2xl font-semibold text-teal-400">
            Skills & Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Frontend</h3>
            <p className="text-sm text-gray-300">
              JavaScript, React, Next.js, Tailwind CSS
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Backend</h3>
            <p className="text-sm text-gray-300">Node.js, Express, REST APIs</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Databases</h3>
            <p className="text-sm text-gray-300">MongoDB, PostgreSQL</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Tools</h3>
            <p className="text-sm text-gray-300">
              Git, Docker, Neovim, tmux, tmuxinator
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
            <h3 className="text-xl font-bold text-blue-400 mb-2">
              Methodologies
            </h3>
            <p className="text-sm text-gray-300">
              Test-Driven Development, Agile
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="text-center">
        <div className="flex justify-center space-x-6 text-teal-400 mb-6"></div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Spencer Maas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
