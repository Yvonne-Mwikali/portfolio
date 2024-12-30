import { Quote } from "lucide-react";
import { TestimonialInterface } from "../data/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export function TestimonialCard({ testimonial }: { testimonial: TestimonialInterface }) {
  return (
    <Card className="mx-2 my-4 bg-white shadow-lg">
      <CardContent className="p-6">
        <Quote className="w-10 h-10 text-primary mb-4" />
        <p className="text-gray-600 mb-4">{testimonial.content}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
