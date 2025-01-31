import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    name: "Garment Manufacturing",
    description: "High-quality garment manufacturing services for various clothing items.",
  },
  {
    name: "Custom Bags",
    description: "Create custom bags for organizations, perfect for promotional events or corporate gifts.",
  },
  { name: "Apparel Sampling", description: "Develop sample pieces to perfect your designs before full production." },
  { name: "Grading", description: "Scale patterns to different sizes to ensure proper fit across various dimensions." },
  {
    name: "Patterning",
    description: "Create precise patterns for garments, ensuring accurate and consistent production.",
  },
  { name: "Development", description: "Work with our team to develop new clothing concepts and bring them to life." },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
          >
            <Image
              src={`/placeholder.svg?height=200&width=400&text=${service.name}`}
              alt={service.name}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

