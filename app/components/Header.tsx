import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className="bg-background text-foreground border-b p-4 shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
          Del Garments
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Button asChild variant="outline">
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

