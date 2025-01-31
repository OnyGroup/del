import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-secondary transition-colors">
          Del Garments
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-secondary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Button asChild>
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

