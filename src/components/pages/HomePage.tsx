import { Link } from 'react-router-dom';
import { Heart, Car, Home, Plane, Shield, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function HomePage() {
  const insuranceTypes = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family',
      link: '/health-insurance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Secure your loved ones\' financial future',
      link: '/life-insurance',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Car,
      title: 'Auto Insurance',
      description: 'Complete protection for your vehicle',
      link: '/auto-insurance',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Home,
      title: 'Home Insurance',
      description: 'Protect your property and belongings',
      link: '/home-insurance',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Travel worry-free across Africa and beyond',
      link: '/travel-insurance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Trusted Partners',
      description: 'We work with leading insurance providers across Africa',
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Compare quotes and find the most affordable coverage',
    },
    {
      icon: CheckCircle,
      title: 'Easy Claims',
      description: 'Simple and fast claims process with dedicated support',
    },
    {
      icon: Star,
      title: '24/7 Support',
      description: 'Round-the-clock customer service in multiple languages',
    },
  ];

  const stats = [
    { value: '500K+', label: 'Happy Customers' },
    { value: '50+', label: 'Insurance Partners' },
    { value: '15', label: 'African Countries' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Africa's Most Trusted Insurance Marketplace
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Compare, choose, and buy insurance policies from top providers. Get the best coverage at the best price.
              </p>
              
              {/* Quick Quote Form */}
              <Card className="bg-white text-slate-900">
                <CardHeader>
                  <CardTitle>Get Instant Quote</CardTitle>
                  <CardDescription>Find your perfect insurance plan in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="auto">Auto Insurance</SelectItem>
                        <SelectItem value="home">Home Insurance</SelectItem>
                        <SelectItem value="travel">Travel Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="email" placeholder="Enter your email" />
                    <Input type="tel" placeholder="Phone number" />
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Get Free Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577897113176-6888367369bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwaGFwcHl8ZW58MXx8fHwxNzYyMzczMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy African family"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-orange-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Insurance Solutions for Every Need</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of insurance products designed specifically for the African market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Link key={index} to={type.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${type.bgColor} flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${type.color}`} />
                      </div>
                      <CardTitle>{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" className="p-0 text-orange-600">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose AfricanInsure?</h2>
            <p className="text-xl text-slate-600">
              We make insurance simple, affordable, and accessible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Africa who trust us for their insurance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              Compare Plans Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
