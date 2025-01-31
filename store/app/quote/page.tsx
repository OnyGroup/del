import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Quote() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Get a Quote</h1>
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle>Request a Custom Quote</CardTitle>
          <CardDescription>
            Fill out the form below and we&apos;ll provide you with a custom quote for your project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Company Name (optional)" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="garment-manufacturing">Garment Manufacturing</SelectItem>
                <SelectItem value="custom-bags">Custom Bags</SelectItem>
                <SelectItem value="apparel-sampling">Apparel Sampling</SelectItem>
                <SelectItem value="grading">Grading</SelectItem>
                <SelectItem value="patterning">Patterning</SelectItem>
                <SelectItem value="development">Development</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Project Details" />
            <Input type="number" placeholder="Estimated Quantity" />
            <Button type="submit">Request Quote</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

