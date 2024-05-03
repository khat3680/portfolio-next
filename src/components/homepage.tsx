/* eslint-disable @next/next/no-img-element */
"use server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";
import img from "../../public/anshul.jpeg";
export async function homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Jane Doe</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Projects
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <Button className="md:hidden" size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1 bg-black text-white">
        <section className="container mx-auto py-20 px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to my Portfolio
            </h1>
            <p className="text-gray-200 text-lg">
              I &apos m a recent graduate with a passion for software
              engineering. Check out my latest projects and let &aposs connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-white shadow-sm transition-colors hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400 dark:hover:from-indigo-500 dark:hover:to-purple-500 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-900"
                href="#"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md border border-gray-200 border-white bg-transparent px-6 py-3 text-white shadow-sm transition-colors hover:bg-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 dark:focus:ring-offset-gray-900 dark:border-gray-800"
                href="#"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Profile Picture"
              className="rounded-full w-[300px] h-[300px] object-cover border-4 border-white dark:border-gray-50"
              height={400}
              src="/Users/anshulkhatri/Downloads/workspace/portfolio/public/anshul.jpeg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
        </section>
        <section className="bg-black text-white py-20 px-6 md:px-10">
          <div className="container mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-gray-200">
                I &apos m a recent graduate with a degree in Computer Science. I
                &apos m passionate about building innovative software solutions
                and staying up-to-date with the latest technologies.
              </p>
              <p className="text-gray-200">
                In my free time, I enjoy contributing to open-source projects,
                attending local meetups, and exploring new programming languages
                and frameworks.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 flex flex-col items-center">
                  <CodeIcon className="h-8 w-8 mb-2" />
                  <span>JavaScript</span>
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
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-gray-200 text-lg">
              Check out some of my recent projects and the technologies I used.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                <CardHeader>
                  <img
                    alt="Project 1"
                    className="rounded-t-lg object-cover w-full"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-gray-200">
                    A web application built with React, Node.js, and MongoDB.
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
                  <img
                    alt="Project 2"
                    className="rounded-t-lg object-cover w-full"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-gray-200">
                    A mobile app built with React Native and Firebase.
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
                  <img
                    alt="Project 3"
                    className="rounded-t-lg object-cover w-full"
                    height={225}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-gray-200">
                    A desktop application built with Electron and TypeScript.
                  </p>
                  <div className="flex gap-2">
                    <Badge
                      className="bg-white text-indigo-500"
                      variant="secondary"
                    >
                      Electron
                    </Badge>
                    <Badge
                      className="bg-white text-indigo-500"
                      variant="secondary"
                    >
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© 2024 Jane Doe. All rights reserved.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
          <Link className="hover:underline" href="#">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}

export async function CloudIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export async function CodeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export async function ComponentIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

export async function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export async function FolderGitIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="2" />
      <path d="M14 13h3" />
      <path d="M7 13h3" />
    </svg>
  );
}

export async function MenuIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export async function NetworkIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}
