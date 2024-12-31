import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { toast } from "react-toastify";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/text-area";

const credentials = {
  serviceId: process.env.REACT_APP_SERVICE_ID,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    if (!credentials.serviceId || !credentials.templateId) return toast("Service ID is missing. Please contact the site owner.");
    if (!formRef.current) return;
    console.log(formRef.current);

    // Simulate form submission
    const response = await emailjs.sendForm(credentials.serviceId, credentials.templateId, formRef?.current, {
      publicKey: credentials.publicKey,
    });
    if (response.status !== 200) {
      return toast.error("Failed to send email. Please try again later.");
    }
    form.reset(); // Reset form fields
    setIsSubmitting(false);
    toast.success("Message sent successfully!");
  }

  return (
    <motion.div
      id="contact"
      className="container bg-gray-50 dark:bg-primary-foreground/5 mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center font-accent-foreground">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and i&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="branding">Branding</SelectItem>
                            <SelectItem value="webdesign">Web Design</SelectItem>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type your message here." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Card className="bg-card h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>You can also reach out to me directly using the information below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center  space-x-2 text-foreground">
                <Phone className="h-5 w-5" />
                <span>+254 79 68 08 57 9</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <Mail className="h-5 w-5" />
                <a href="mailto:yvonnemwikali162@gmail.com" className="hover:text-white hover:underline">
                  yvonnemwikali162@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <MapPin className="h-5 w-5" />
                <span>Beren, moi university, Eldoret 30100</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Yvonne-Mwikali"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://x.com/YvonneMwikali01"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/+254796808579"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp className="h-6 w-6" />
                  <span className="sr-only">Whatsapp</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yvonne-mwikali/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
