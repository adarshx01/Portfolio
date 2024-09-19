
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { CircuitBoard , YoutubeIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CircuitBoard  className="h-6 w-6" />
            <span className="text-xl font-bold">Adarsh Vishwakarma</span>
          </Link>
          <p className="text-muted-foreground max-w-[300px]">
            Welcome to my portfolio website, showcasing my design and development work.
          </p>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid gap-2 mr-6">
            <h3 className="text-sm font-medium">Pages</h3>
            <Link href="#LandingPage" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#Project" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
            <Link href="#Abouts" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#Services" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Services
            </Link>
            <Link href="#Contact" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-2 mr-4">
            <h3 className="text-sm font-medium">Social</h3>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              <TwitterLogoIcon className="h-4 w-4" />
              Twitter
            </Link>
            <Link
              href="https://www.Linkedin/in/adarshx01"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              <LinkedInLogoIcon className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="https://www.github.com/adarshx01"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              <GitHubLogoIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://www.youtube.com/@techorbin"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              <YoutubeIcon className="h-4 w-4" />
              Youtube
            </Link>
            <Link
              href="https://www.instagram.com/techorb.in"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-4"
              prefetch={false}
            >
              <InstagramLogoIcon className="h-4 w-4" />
              Instagram
            </Link>
          </div>
          {/* <div className="grid gap-2 ml-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms of Use
            </Link>
          </div> */}
        </nav>
        <div className="flex flex-col gap-4 items-start md:items-end">
          <p className="text-sm text-muted-foreground">&copy; 2024 Portfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterLogoIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/adarshx01" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <LinkedInLogoIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.github.com/adarshx01" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// function GitlabIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
//     </svg>
//   )
// }


// function LinkedinIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   )
// }


// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function TwitterIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//     </svg>
//   )
// }