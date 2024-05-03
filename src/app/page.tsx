import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CloudIcon,
  CodeIcon,
  ComponentIcon,
  DatabaseIcon,
  FolderGitIcon,
  MenuIcon,
  NetworkIcon,
} from "@/components/homepage";
import Anshul from "../app/anshul.jpeg";
import Image from "next/image";
import LinkedinIcon from "./linkedin.svg";
import GithubIcon from "./github.jpeg";
import { pdf } from "./pdf";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";

export default function Home() {
  // eslint-disable react/jsx-no-undef
  const currentYear = new Date().getFullYear();

  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Anshul Khatri</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link className="hover:underline" href="#home">
              Home
            </Link>
            <Link className="hover:underline" href="#about">
              About
            </Link>
            <Link className="hover:underline" href="#projects">
              Projects
            </Link>
            <Link
              className="hover:underline"
              href="mailto:anshulskhatri@gmail.com"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1 bg-black text-white">
          <section className="container mx-auto py-20 px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6" id="home">
              <h1 className="text-4xl font-bold tracking-tight">
                Welcome to my Portfolio
              </h1>
              <p className="text-gray-200 text-lg">
                I&apos;m a recent graduate with a passion for software
                engineering. Check out my latest projects and let&apos;s
                connect!
              </p>
              <div className="flex flex-row sm:flex-row sm:gap-20 gap-28 justify-around sm:justify-normal align-baseline">
                <a className="btn btn-lg" href="https://github.com/khat3680">
                  <Image
                    src={GithubIcon}
                    alt="Follow me on Linkedin"
                    height={52}
                    width={52}
                  />{" "}
                </a>
                <a
                  className="btn btn-lg"
                  href="https://www.linkedin.com/in/anshul-khatri"
                >
                  <Image
                    src={LinkedinIcon}
                    alt="Follow me on Linkedin"
                    height={48}
                    width={48}
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/1BPRJ1qjAsXhDEdURE32EnPKHir1Uiddo/view?usp=sharing"
                  className="btn btn-social-icon btn-lg"
                >
                  <Image
                    src={pdf}
                    alt="Follow me on Resume"
                    height={44}
                    width={44}
                  />{" "}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 dark:hover:from-indigo-500 dark:hover:to-purple-500 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-900"
                  href="#projects"
                >
                  View Projects
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-white-200 bg-transparent px-6 py-3 text-white shadow-sm transition-colors hover:bg-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900 dark:border-gray-800"
                  href="mailto:anshulskhatri@gmail.com"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={Anshul}
                height={400}
                alt="Picture of the author"
                className="rounded-full w-[400px] h-[400px] scale-90 scale-x hover:scale-x-[-1] transition-all duration-1000 ease-in-out object-cover border-4 border-white dark:border-gray-50 origin-center"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
              />
            </div>
          </section>
          <section className="bg-black text-white py-20 px-6 md:px-10">
            <div className="container mx-auto grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight" id="about">
                  About Me
                </h2>
                <p className="text-gray-200">
                  I&apos;m a recent graduate with a degree in Computer Science.
                  I&apos;m passionate about building innovative software
                  solutions and staying up-to-date with the latest technologies.
                </p>
                <p className="text-gray-200">
                  In my free time, I enjoy contributing to open-source projects,
                  attending local meetups, and exploring new programming
                  languages and frameworks.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <CodeIcon className="h-8 w-8 mb-2" />
                    <span>TypeScript</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <ComponentIcon className="h-8 w-8 mb-2" />
                    <span>React</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <NetworkIcon className="h-8 w-8 mb-2" />
                    <span>Node.js</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <DatabaseIcon className="h-8 w-8 mb-2" />
                    <span>SQL</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <FolderGitIcon className="h-8 w-8 mb-2" />
                    <span>Git</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                    <CloudIcon className="h-8 w-8 mb-2" />
                    <span>AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto py-20 px-6 md:px-10">
            <div className="space-y-6 text-center" id="projects">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-gray-200 text-lg">
                Check out some of my recent projects and the technologies I
                used.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                  <CardHeader>
                    <Image
                      alt="Project 1"
                      className="rounded-t-lg object-cover w-full"
                      height={225}
                      src={project1}
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                        background: "white",
                      }}
                      width={400}
                    />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Ristorante Confusion</h3>
                    <p className="text-gray-200">
                      A complete application using React Native, Redux, Redux
                      Thunk, forms and other packages of ReactJs. Multipage
                      application with side slide bar, reviews submission and
                      login portals avialable in app.
                    </p>
                    <div className="flex gap-2">
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        React
                      </Badge>
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        MongoDB
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                  <CardHeader>
                    <Image
                      alt="Project 2"
                      className="rounded-t-lg object-cover w-full"
                      height={225}
                      src={project2}
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "fill",
                      }}
                      width={400}
                    />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Bouyancy Stimulation</h3>
                    <p className="text-gray-200">
                      A animation website using Javacript and CSS objects.
                      Demonstrating the senario of Bouyancy Stimulation by using
                      different samples of objects and variating levels of
                      water. Also made this project using using Geogabra{" "}
                    </p>
                    <div className="flex gap-2">
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        React Native
                      </Badge>
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        Firebase
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                  <CardHeader>
                    <Image
                      alt="Project 3"
                      className="rounded-t-lg object-cover w-full"
                      height={225}
                      src={project3}
                      style={{
                        aspectRatio: "400/225",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Instagram Automation</h3>
                    <p className="text-gray-200">
                      A small bot using selenuim web automating techniques,
                      where it logs in into an user&apos;s account and shows the
                      full list of people who don&apos;t follow you back. It was
                      just a fun project.{" "}
                    </p>
                    <div className="flex gap-2">
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        CSS
                      </Badge>
                      <Badge
                        className="bg-white text-indigo-500"
                        variant="secondary"
                      >
                        JavaScript
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-black text-white py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center">
          <div className="text-sm">
            © {currentYear} Anshul Khatri. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
