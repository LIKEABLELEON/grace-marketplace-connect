
import { Cross, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours. God bless!" });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cross className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Grace Marketplace Kenya</h1>
              <p className="text-sm text-muted-foreground">Christian Business Directory</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/businesses" className="text-foreground hover:text-primary transition-colors">Browse Businesses</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-primary font-semibold">Contact</Link>
            <Link to="/list-business">
              <Button className="christian-gradient text-white">List Your Business</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="christian-gradient christian-pattern text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100">
            We'd love to hear from you. Reach out to us for inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about listing your business, need support, or want to partner with us, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <a href="mailto:info@gracemarketplace.co.ke" className="text-primary hover:underline">info@gracemarketplace.co.ke</a>
                    <br />
                    <a href="mailto:support@gracemarketplace.co.ke" className="text-primary hover:underline">support@gracemarketplace.co.ke</a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <a href="tel:+254700123456" className="text-primary hover:underline">+254 700 123 456</a>
                    <br />
                    <a href="tel:+254733987654" className="text-primary hover:underline">+254 733 987 654</a>
                    <p className="text-sm text-muted-foreground mt-1">Also available on WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">Westlands Business Park, 3rd Floor</p>
                    <p className="text-muted-foreground">Waiyaki Way, Nairobi, Kenya</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office Hours</h4>
                    <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM – 1:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed (We're in church! ⛪)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground mb-6">Fill out the form below and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="e.g. John Kamau" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input placeholder="How can we help?" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Tell us more..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <Button type="submit" className="w-full christian-gradient text-white text-lg py-6">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center text-blue-100">
          <p>&copy; 2024 Grace Marketplace Kenya. Built with faith and dedication to serve Kenya's Christian community.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
