
import { Cross, Heart, Users, Globe, Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
            <Link to="/about" className="text-primary font-semibold">About</Link>
            <Link to="/list-business">
              <Button className="christian-gradient text-white">List Your Business</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="christian-gradient christian-pattern text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Grace Marketplace</h2>
          <p className="text-xl text-blue-100">
            A proudly Kenyan initiative uniting Christian businesses and entrepreneurs across the nation
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-20">
        {/* Our Story */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-primary">Our Story</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Grace Marketplace Kenya was born out of a simple yet powerful conviction: that Christian businesses in Kenya deserve a dedicated platform to connect, grow, and serve together. Founded in Nairobi in 2024, we set out to build a community where faith and enterprise walk hand in hand.
            </p>
            <p>
              Kenya is home to a vibrant and thriving Christian community — from the bustling streets of Nairobi to the coastal towns of Mombasa, from the highlands of Eldoret to the lakeside cities of Kisumu. Yet Christian business owners often lack a trusted space to find one another, collaborate, and be discovered by customers who share their values.
            </p>
            <p>
              Grace Marketplace bridges that gap. We provide a platform where Christian entrepreneurs — whether running a bakery in Westlands, a construction firm in Thika, or an IT consultancy in the CBD — can showcase their services to a community that values integrity, excellence, and faith-driven work.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-primary/5 p-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be Kenya's leading marketplace where every Christian business thrives through community, trust, and shared faith — transforming commerce into a ministry that glorifies God and uplifts communities across East Africa.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-accent/5 p-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To unite, empower, and promote Christian-owned businesses across Kenya by providing a trusted digital platform that fosters authentic connections, drives economic growth, and upholds the values of honesty, service, and excellence rooted in the Christian faith.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold text-primary text-center">What We Stand For</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="h-6 w-6 text-accent" />, title: "Faith First", desc: "Every business on our platform operates with Christian values at its core — integrity, compassion, and service." },
              { icon: <Users className="h-6 w-6 text-accent" />, title: "Community Over Competition", desc: "We believe Kenyan Christian businesses grow stronger together, supporting and uplifting one another." },
              { icon: <Globe className="h-6 w-6 text-accent" />, title: "Proudly Kenyan", desc: "Built in Kenya, for Kenya. We champion local entrepreneurs from every county and every walk of life." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-border p-6 space-y-3 bg-card">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">{v.icon}</div>
                <h4 className="text-lg font-semibold text-foreground">{v.title}</h4>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-6 rounded-2xl christian-gradient christian-pattern text-white p-12">
          <h3 className="text-3xl font-bold">Join the Grace Marketplace Family</h3>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Whether you're a business owner looking to grow or a customer seeking trusted services, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/list-business">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                List Your Business <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/businesses">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Browse Businesses
              </Button>
            </Link>
          </div>
        </section>
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

export default About;
