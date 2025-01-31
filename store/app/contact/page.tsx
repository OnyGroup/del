import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4">
          <Image
            src="/placeholder.svg?height=400&width=600&text=Map"
            alt="Del Garments Location"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you! Reach out to us through any of the following channels:</p>
          <ul className="space-y-2">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+254721644985" className="text-blue-600 hover:underline">
                +254 721 644985
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Del Garments LinkedIn
              </Link>
            </li>
            <li>
              <strong>Facebook:</strong>{" "}
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Del Garments Facebook
              </Link>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Del Garments Twitter
              </Link>
            </li>
            <li>
              <strong>Yellow Pages Kenya:</strong>{" "}
              <Link
                href="https://www.yellowpageskenya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Del Garments Yellow Pages Listing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

