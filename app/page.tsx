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
            src="/images/garments_home.jpg"
            alt="Del Garments Factory"
            width={600}
            height={400}
            className="rounded-lg shadow-lg animate-fade-in-up"
          />
        </div>
        <div className="md:w-1/2 space-y-4 animate-fade-in-right">
          <p className="text-lg">
            Del Garments is a premier garment manufacturing company based in Nairobi, Kenya, specializing in
            high-quality clothing production and custom bag creation. Our comprehensive services encompass apparel
            sampling, grading, patterning, and product development.
          </p>
          <p className="text-lg">
            With our state-of-the-art facilities and skilled craftspeople, we transform your innovative fashion concepts
            into tangible, market-ready products. Whether you're an emerging designer, an established brand, or an
            organization seeking bespoke merchandise, Del Garments is your trusted partner in bringing your vision to
            life.
          </p>
          <Button asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

