import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Welcome to Del Garments</h1>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Del Garments Factory"
            width={600}
            height={400}
            className="rounded-lg shadow-lg animate-fade-in-up"
          />
        </div>
        <div className="md:w-1/2 space-y-4 animate-fade-in-right">
          <p className="text-lg">
            Del Garments is a leading clothing company in Nairobi, Kenya, offering top-notch garment manufacturing
            services and custom bags. With our expertise in apparel sampling, grading, patterning, and development, we
            bring your fashion ideas to life.
          </p>
          <p className="text-lg">
            Our commitment to quality and attention to detail sets us apart in the industry. Whether you're a fashion
            designer, a retail brand, or an organization looking for custom bags, Del Garments is your trusted partner
            in bringing your vision to reality.
          </p>
          <Button asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

