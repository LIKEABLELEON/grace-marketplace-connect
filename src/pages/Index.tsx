
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, MapPin, Phone, Globe, ArrowRight, CheckCircle, Users, Shield, Cross } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredBusinesses = [
    {
      id: 1,
      name: "Blessed Bread Bakery",
      category: "Bakery",
      description: "Fresh chapati, mandazi and artisan breads baked with love and prayer",
      rating: 4.9,
      reviews: 127,
      location: "Westlands, Nairobi",
      phone: "+254 712 345 678",
      website: "blessedbreads.co.ke",
      image: "🍞",
      featured: true
    },
    {
      id: 2,
      name: "Rock Foundation Construction",
      category: "Construction",
      description: "Building homes and businesses across Kenya on solid foundations",
      rating: 4.8,
      reviews: 89,
      location: "Nairobi & Mombasa",
      phone: "+254 722 456 789",
      website: "rockfoundation.co.ke",
      image: "🏗️",
      featured: true
    },
    {
      id: 3,
      name: "Faith Tech Solutions",
      category: "Technology",
      description: "Reliable IT services and M-Pesa integration with Christian integrity",
      rating: 5.0,
      reviews: 64,
      location: "CBD, Nairobi",
      phone: "+254 733 567 890",
      website: "faithtech.co.ke",
      image: "💻",
      featured: true
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Connect with Community",
      description: "Join Kenya's network of faith-driven businesses and customers who share your values."
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Trusted Platform",
      description: "All businesses are verified and committed to Christian values and honest service."
    },
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Support Local Kenya",
      description: "Strengthen Kenya's Christian business community and uplift one another."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary leading-tight">Grace Marketplace Kenya</h1>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">Christian Business Directory</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/businesses" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Browse Businesses</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            <Link to="/list-business"><Button className="christian-gradient text-primary-foreground font-semibold shadow-md">List Your Business</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="christian-gradient christian-pattern text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <p className="uppercase tracking-widest text-accent-foreground/70 text-sm font-semibold mb-4">Kenya's Christian Business Network</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Connect with Christian Businesses Across Kenya
            </h2>
            <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Discover and support faith-centered businesses from Nairobi to Mombasa — where Christian values meet quality service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/businesses">
                <Button size="lg" variant="secondary" className="text-base px-8 py-6 font-semibold shadow-lg">
                  Browse Businesses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/list-business">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 font-semibold bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  List Your Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-2">Featured Listings</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Christian Businesses in Kenya</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exceptional Kenyan businesses that serve with Christian excellence and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {featuredBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/60">
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-4xl">{business.image}</div>
                    <div className="flex items-center space-x-1 text-sm bg-secondary px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{business.rating}</span>
                      <span className="text-muted-foreground">({business.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-1">{business.name}</h4>
                  <p className="text-accent font-semibold text-sm mb-3">{business.category}</p>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{business.description}</p>
                  
                  <div className="space-y-2.5 text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent/70" />
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-accent/70" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-accent/70" />
                      <span>{business.website}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-5 font-semibold" variant="outline">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/businesses">
              <Button size="lg" className="christian-gradient text-primary-foreground font-semibold shadow-lg px-10">
                View All Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-accent text-sm font-semibold mb-2">Why Us</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Grace Marketplace?</h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              More than a directory — it's Kenya's Christian community built on faith and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 christian-gradient christian-pattern text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-5">Ready to Grow Your Christian Business?</h3>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Christian businesses already connecting with their community through Grace Marketplace Kenya.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 bg-primary-foreground/10 rounded-xl p-4">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium">Premium Business Listing</span>
            </div>
            <div className="flex items-center space-x-3 bg-primary-foreground/10 rounded-xl p-4">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium">Customer Reviews & Ratings</span>
            </div>
            <div className="flex items-center space-x-3 bg-primary-foreground/10 rounded-xl p-4">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium">M-Pesa Payment Integration</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/list-business">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6 font-semibold shadow-lg">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 font-semibold bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              View Pricing (KES)
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cross className="h-6 w-6" />
                <h4 className="text-lg font-bold">Grace Marketplace Kenya</h4>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Connecting Kenyan Christian businesses with their community since 2024.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">For Businesses</h5>
              <ul className="space-y-2.5 text-primary-foreground/60 text-sm">
                <li><Link to="/list-business" className="hover:text-primary-foreground transition-colors">List Your Business</Link></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing (KES)</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">For Customers</h5>
              <ul className="space-y-2.5 text-primary-foreground/60 text-sm">
                <li><Link to="/businesses" className="hover:text-primary-foreground transition-colors">Browse Businesses</Link></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Write Reviews</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Local Events</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-sm uppercase tracking-wider">Support</h5>
              <ul className="space-y-2.5 text-primary-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm">
            <p>&copy; 2024 Grace Marketplace Kenya. Built with faith and dedication to serve Kenya's Christian community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
