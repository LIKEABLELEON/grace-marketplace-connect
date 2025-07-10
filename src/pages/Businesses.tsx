
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Globe, Search, Filter, Cross } from "lucide-react";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bakery", "Construction", "Technology", "Healthcare", "Retail", "Services"];

  const businesses = [
    {
      id: 1,
      name: "Grace Bakery & Café",
      category: "Bakery",
      description: "Artisan breads, pastries, and coffee made with love and prayer. Family-owned for 15 years.",
      rating: 4.9,
      reviews: 127,
      location: "Downtown Christian District",
      phone: "(555) 123-4567",
      website: "gracebakery.com",
      image: "🍞",
      isPremium: true,
      specialties: ["Fresh Bread", "Wedding Cakes", "Catering"]
    },
    {
      id: 2,
      name: "Cornerstone Construction",
      category: "Construction",
      description: "Building homes and businesses on solid foundations with integrity and craftsmanship.",
      rating: 4.8,
      reviews: 89,
      location: "Greater Metro Area",
      phone: "(555) 234-5678",
      website: "cornerstonebuild.com",
      image: "🏗️",
      isPremium: true,
      specialties: ["Residential", "Commercial", "Renovations"]
    },
    {
      id: 3,
      name: "Faithful IT Solutions",
      category: "Technology",
      description: "Reliable technology services with Christian integrity. Serving businesses and ministries.",
      rating: 5.0,
      reviews: 64,
      location: "Virtual & On-site",
      phone: "(555) 345-6789",
      website: "faithfulit.com",
      image: "💻",
      isPremium: true,
      specialties: ["Web Development", "IT Support", "Cloud Services"]
    },
    {
      id: 4,
      name: "Shepherd's Healthcare Clinic",
      category: "Healthcare",
      description: "Compassionate healthcare services treating body, mind, and spirit.",
      rating: 4.7,
      reviews: 156,
      location: "Medical District",
      phone: "(555) 456-7890",
      website: "shepherdshealthcare.com",
      image: "🏥",
      isPremium: false,
      specialties: ["Family Medicine", "Counseling", "Wellness"]
    },
    {
      id: 5,
      name: "Blessing Boutique",
      category: "Retail",
      description: "Christian gifts, books, and apparel for the whole family.",
      rating: 4.6,
      reviews: 92,
      location: "Market Square",
      phone: "(555) 567-8901",
      website: "blessingboutique.com",
      image: "🛍️",
      isPremium: false,
      specialties: ["Gifts", "Books", "Apparel"]
    },
    {
      id: 6,
      name: "Covenant Cleaning Services",
      category: "Services",
      description: "Professional cleaning with attention to detail and Christian work ethic.",
      rating: 4.9,
      reviews: 78,
      location: "City-wide Service",
      phone: "(555) 678-9012",
      website: "covenantcleaning.com",
      image: "🧽",
      isPremium: true,
      specialties: ["Residential", "Commercial", "Deep Cleaning"]
    }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cross className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Grace Marketplace</h1>
              <p className="text-sm text-muted-foreground">Christian Business Directory</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button className="christian-gradient text-white">List Your Business</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-4">Christian Business Directory</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover faith-centered businesses in your community. Supporting local Christian entrepreneurs.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-primary">
              {filteredBusinesses.length} Business{filteredBusinesses.length !== 1 ? 'es' : ''} Found
            </h3>
            <div className="text-sm text-muted-foreground">
              Showing results for: <span className="font-medium">{selectedCategory}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredBusinesses.map((business) => (
              <Card key={business.id} className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${business.isPremium ? 'ring-2 ring-accent/20' : ''}`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{business.image}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xl font-bold text-primary">{business.name}</h4>
                          {business.isPremium && (
                            <Badge variant="secondary" className="text-xs bg-accent text-white">Premium</Badge>
                          )}
                        </div>
                        <p className="text-accent font-medium text-sm">{business.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{business.rating}</span>
                      <span className="text-muted-foreground">({business.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{business.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {business.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{business.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 md:col-span-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-primary hover:underline cursor-pointer">{business.website}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" variant="outline">
                      View Details
                    </Button>
                    <Button className="flex-1 christian-gradient text-white">
                      Contact
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-primary mb-2">No businesses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 christian-gradient christian-pattern text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Don't See Your Business Listed?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our growing community of Christian businesses and connect with customers who share your values.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            List Your Business Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cross className="h-6 w-6" />
                <h4 className="text-xl font-bold">Grace Marketplace</h4>
              </div>
              <p className="text-blue-100">
                Connecting Christian businesses with their community since 2024.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-blue-100">
                {categories.slice(1).map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {category}
                    </button>
                  </li>
                ))}
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
            <p>&copy; 2024 Grace Marketplace. Built with faith and dedication to serve the Christian community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Businesses;
