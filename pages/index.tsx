import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Your Name's Blog</span>
          <span className="font-bold text-xl">YN</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to My Blog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Hi, I'm [Your Name]. I'm a [Your Profession] passionate about [Your Interests].
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  I'm a [Your Profession] with [X] years of experience in [Your Field]. I specialize in [Your
                  Specializations] and I'm passionate about [Your Passions].
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  When I'm not working, you can find me [Your Hobbies or Interests]. I believe in [Your Personal
                  Philosophy or Beliefs].
                </p>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  alt="About Me Image"
                  className="object-cover"
                  height="600"
                  src="/placeholder.svg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"].map((skill) => (
                <Card key={skill}>
                  <CardHeader>
                    <CardTitle>{skill}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Brief description of your proficiency in {skill}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <div className="mx-auto max-w-2xl space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline">
                  <Link href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://linkedin.com/in/yourprofile">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/yourusername">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Your Name. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}