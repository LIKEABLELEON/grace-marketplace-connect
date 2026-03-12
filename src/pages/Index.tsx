
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
      description: "Join Kenya's network of faith-driven businesses and customers"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Trusted Platform",
      description: "All businesses verified and committed to Christian values"
    },
    {
      icon: <Heart className="h-6 w-6 text-accent" />,
      title: "Support Local Kenya",
      description: "Strengthen Kenya's Christian business community"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cross className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Grace Marketplace Kenya</h1>
              <p className="text-sm text-muted-foreground">Christian Business Directory</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/businesses" className="text-foreground hover:text-primary transition-colors">Browse Businesses</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/list-business"><Button className="christian-gradient text-white">List Your Business</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="christian-gradient christian-pattern text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Connect with <span className="text-yellow-200">Christian</span> Businesses in Kenya
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover and support faith-centered businesses across Kenya. 
              From Nairobi to Mombasa, where Christian values meet quality service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Browse Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
                List Your Business
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 bg-christian-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Featured Christian Businesses in Kenya</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover exceptional Kenyan businesses that serve with Christian excellence and integrity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBusinesses.map((business) => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{business.image}</div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{business.rating}</span>
                      <span className="text-muted-foreground">({business.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-2">{business.name}</h4>
                  <p className="text-accent font-medium text-sm mb-3">{business.category}</p>
                  <p className="text-muted-foreground mb-4">{business.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>{business.website}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/businesses">
              <Button size="lg" className="christian-gradient text-white">
                View All Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Why Choose Grace Marketplace Kenya?</h3>
            <p className="text-lg text-muted-foreground">
              More than a directory - it's Kenya's Christian community built on faith and trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 christian-gradient christian-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Grow Your Christian Business in Kenya?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Christian businesses already connecting with their community through Grace Marketplace Kenya
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-yellow-200" />
              <span>Premium Business Listing</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-yellow-200" />
              <span>Customer Reviews & Ratings</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-yellow-200" />
              <span>M-Pesa Payment Integration</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Pricing (KES)
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cross className="h-6 w-6" />
                <h4 className="text-xl font-bold">Grace Marketplace Kenya</h4>
              </div>
              <p className="text-blue-100">
                Connecting Kenyan Christian businesses with their community since 2024.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Businesses</h5>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">List Your Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing (KES)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">For Customers</h5>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Browse Businesses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Write Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Local Events</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-600 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Grace Marketplace Kenya. Built with faith and dedication to serve Kenya's Christian community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
