
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cross, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ListBusiness = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We'll review your business and get back to you within 48 hours. God bless!",
      });
    }, 1500);
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
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="christian-gradient christian-pattern text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">List Your Christian Business</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join Kenya's trusted Christian business community and reach thousands of faith-driven customers
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {["Premium business listing", "Customer reviews & ratings", "M-Pesa payment support"].map((text) => (
            <div key={text} className="flex items-center space-x-2 bg-accent/10 rounded-lg p-3">
              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Business Registration Form</CardTitle>
            <CardDescription>Fill in your details below. All fields marked * are required.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Owner Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">Owner Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Full Name *</Label>
                    <Input id="ownerName" placeholder="e.g. John Kamau" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.co.ke" required maxLength={255} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" required maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="church">Church Affiliation</Label>
                    <Input id="church" placeholder="e.g. CITAM Valley Road" maxLength={100} />
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">Business Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input id="businessName" placeholder="e.g. Blessed Bread Bakery" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Business Category *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bakery">Bakery & Food</SelectItem>
                        <SelectItem value="construction">Construction & Building</SelectItem>
                        <SelectItem value="technology">Technology & IT</SelectItem>
                        <SelectItem value="education">Education & Training</SelectItem>
                        <SelectItem value="health">Health & Wellness</SelectItem>
                        <SelectItem value="agriculture">Agriculture & Farming</SelectItem>
                        <SelectItem value="transport">Transport & Logistics</SelectItem>
                        <SelectItem value="media">Media & Entertainment</SelectItem>
                        <SelectItem value="fashion">Fashion & Clothing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Business Description *</Label>
                  <Textarea id="description" placeholder="Tell us about your business, what you offer, and how your faith guides your work..." required maxLength={1000} rows={4} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location / County *</Label>
                    <Input id="location" placeholder="e.g. Westlands, Nairobi" required maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (optional)</Label>
                    <Input id="website" type="url" placeholder="https://yourbusiness.co.ke" maxLength={255} />
                  </div>
                </div>
              </div>

              {/* Subscription */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">Subscription Plan</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { name: "Starter", price: "KES 500/mo", features: "Basic listing" },
                    { name: "Growth", price: "KES 1,500/mo", features: "Featured + reviews" },
                    { name: "Premium", price: "KES 3,000/mo", features: "Top placement + analytics" },
                  ].map((plan) => (
                    <label key={plan.name} className="cursor-pointer">
                      <input type="radio" name="plan" value={plan.name.toLowerCase()} className="peer sr-only" defaultChecked={plan.name === "Growth"} />
                      <div className="rounded-lg border-2 border-border p-4 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5">
                        <p className="font-bold text-foreground">{plan.name}</p>
                        <p className="text-lg font-semibold text-primary">{plan.price}</p>
                        <p className="text-xs text-muted-foreground">{plan.features}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full christian-gradient text-white" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Your Business"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our community guidelines and confirm your business operates with Christian values.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ListBusiness;
