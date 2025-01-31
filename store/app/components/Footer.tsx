import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Del Garments. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

