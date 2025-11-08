import { Home, Shield, Flame, Droplets, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';

export function HomeInsurancePage() {
  const plans = [
    {
      name: 'Building Coverage',
      price: 'From ₦50,000/year',
      description: 'Protection for your property structure',
      features: [
        'Fire damage',
        'Storm and flood damage',
        'Earthquake coverage',
        'Structural repairs',
        'Up to ₦20M coverage',
      ],
    },
    {
      name: 'Contents Insurance',
      price: 'From ₦35,000/year',
      description: 'Coverage for your belongings',
      features: [
        'Furniture and appliances',
        'Electronics and valuables',
        'Theft protection',
        'Accidental damage',
        'Up to ₦10M coverage',
      ],
      popular: true,
    },
    {
      name: 'Comprehensive Home',
      price: 'From ₦120,000/year',
      description: 'Complete protection for home and contents',
      features: [
        'All Building Coverage benefits',
        'All Contents Coverage benefits',
        'Personal liability coverage',
        'Alternative accommodation',
        'Legal expenses',
        'Up to ₦50M coverage',
      ],
    },
  ];

  const protections = [
    {
      icon: Flame,
      title: 'Fire Protection',
      description: 'Coverage against fire damage and smoke',
    },
    {
      icon: Droplets,
      title: 'Water Damage',
      description: 'Protection from floods, leaks, and water damage',
    },
    {
      icon: Shield,
      title: 'Theft & Burglary',
      description: 'Coverage for stolen or damaged property',
    },
    {
      icon: Home,
      title: 'Natural Disasters',
      description: 'Protection against storms, earthquakes, and more',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Protect Your Home & Belongings
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive home insurance coverage for your property and peace of mind. Starting from ₦35,000/year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Coverage
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696371270675-c4c522d6eb94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaG9tZSUyMGhvdXNlfGVufDF8fHx8MTc2MjM3MzI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African home"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protections */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What We Protect You From</h2>
            <p className="text-xl text-slate-600">
              Comprehensive coverage for all types of home risks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protections.map((protection, index) => {
              const Icon = protection.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2">{protection.title}</h3>
                  <p className="text-slate-600">{protection.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Home Insurance Plans</h2>
            <p className="text-xl text-slate-600">
              Choose the right level of protection for your home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  plan.popular ? 'border-purple-600 border-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-purple-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 text-2xl text-purple-600">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Home Insurance Quote</CardTitle>
                <CardDescription>
                  Tell us about your property for a customized quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="homeFirstName">First Name</Label>
                      <Input id="homeFirstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="homeLastName">Last Name</Label>
                      <Input id="homeLastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="homeEmail">Email Address</Label>
                    <Input id="homeEmail" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="homePhone">Phone Number</Label>
                    <Input id="homePhone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div>
                    <Label htmlFor="propertyAddress">Property Address</Label>
                    <Input id="propertyAddress" placeholder="123 Main Street, Lagos" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select>
                        <SelectTrigger id="propertyType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="mansion">Mansion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="propertyValue">Estimated Property Value (₦)</Label>
                      <Input id="propertyValue" type="number" placeholder="20000000" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="coverageNeeded">Coverage Needed</Label>
                    <Select>
                      <SelectTrigger id="coverageNeeded">
                        <SelectValue placeholder="Select coverage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="building">Building Only</SelectItem>
                        <SelectItem value="contents">Contents Only</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive (Building + Contents)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="yearBuilt">Year Built</Label>
                    <Input id="yearBuilt" type="number" placeholder="2015" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
