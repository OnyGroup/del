import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="lg:w-1/2 animate-fade-in-left">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
            We&apos;d love to hear from you! Reach out to us through any of the following channels:
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
        <Card className="lg:w-1/2 animate-fade-in-right">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 animate-fade-in-up">
        <Image
          src="/images/woman_calling.jpg"
          alt="Del Garments Location"
          width={1000}
          height={438}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  )
}

