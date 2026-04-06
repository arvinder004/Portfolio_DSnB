import { ChangeEvent, FormEvent, useState } from "react";
import { Calendar, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const contactDetails = [
  {
    label: "Email",
    value: "asdhoul004@gmail.com",
    href: "mailto:asdhoul004@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 8435967741",
    href: "tel:+918435967741",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Jabalpur, India",
    href: undefined,
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    value: "@arvinder004",
    href: "https://github.com/arvinder004",
    description: "Code, experiments, and shipped side projects.",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Arvinder Singh Dhoul",
    href: "https://www.linkedin.com/in/arvinder004/",
    description: "Professional background and recent work.",
    icon: Linkedin,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      const result = responseText
        ? (JSON.parse(responseText) as { error?: string; message?: string })
        : {};

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong while sending your message.");
      }

      setSubmitState({
        type: "success",
        message: result.message || "Your message has been sent successfully.",
      });
      setFormData(initialState);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send the message right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="section-panel">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="section-kicker">Contact</span>
            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Let’s build something useful together.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I’m especially interested in AI engineering, LLM applications, RAG systems, and
              full-stack product work. I’m open to internships, freelance builds, and thoughtful
              collaborations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="glass-card border-white/10">
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">Send a message</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="h-11 border-white/10 bg-background/40"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-11 border-white/10 bg-background/40"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What are you building?"
                      className="h-11 border-white/10 bg-background/40"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share the goal, timeline, or problem space."
                      rows={7}
                      className="resize-none border-white/10 bg-background/40"
                      required
                    />
                  </div>

                  {submitState ? (
                    <div
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        submitState.type === "success"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                          : "border-destructive/30 bg-destructive/10 text-rose-200"
                      }`}
                    >
                      {submitState.message}
                    </div>
                  ) : null}

                  <Button type="submit" size="lg" variant="hero" className="w-full" disabled={isSubmitting}>
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Reach me directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactDetails.map(({ label, value, href, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{label}</p>
                        {href ? (
                          <a href={href} className="mt-1 block text-base font-medium transition hover:text-primary">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-base font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Elsewhere</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map(({ label, value, href, description, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-[1.25rem] border border-white/10 bg-background/35 p-4 transition hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-medium">{label}</span>
                            <span className="text-sm text-muted-foreground">{value}</span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-accent">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Fastest way to reach me</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Email works best for internship opportunities, freelance discussions, and AI
                      product collaborations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
