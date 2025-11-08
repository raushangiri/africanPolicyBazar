import { useState } from 'react';
import { Heart, CheckCircle, Shield, Users, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HealthInsurancePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic Health Plan',
      price: '₦15,000',
      pricePerMonth: 'per month',
      popular: false,
      features: [
        'Outpatient consultation',
        'Basic laboratory tests',
        'Generic medications',
        'Annual health check-up',
        'Emergency ambulance',
        'Up to ₦500,000 annual limit',
      ],
    },
    {
      id: 'standard',
      name: 'Standard Health Plan',
      price: '₦35,000',
      pricePerMonth: 'per month',
      popular: true,
      features: [
        'All Basic Plan benefits',
        'Specialist consultations',
        'Advanced diagnostics (MRI, CT)',
        'Private ward accommodation',
        'Maternity coverage',
        'Dental and optical',
        'Up to ₦2,000,000 annual limit',
      ],
    },
    {
      id: 'premium',
      name: 'Premium Health Plan',
      price: '₦75,000',
      pricePerMonth: 'per month',
      popular: false,
      features: [
        'All Standard Plan benefits',
        'VIP ward accommodation',
        'International coverage',
        'Cancer treatment',
        'Chronic disease management',
        'Mental health services',
        'Unlimited annual limit',
        'Family coverage (up to 4)',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'From basic check-ups to major surgeries, we\'ve got you covered',
    },
    {
      icon: Users,
      title: 'Family Protection',
      description: 'Extend coverage to your spouse and children with family plans',
    },
    {
      icon: Heart,
      title: 'Quality Healthcare',
      description: 'Access to top-rated hospitals and clinics across Africa',
    },
    {
      icon: Star,
      title: 'Quick Claims',
      description: 'Fast and hassle-free claims processing within 24-48 hours',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-8 w-8" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Most Popular
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Health Insurance Plans for You & Your Family
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Get access to quality healthcare with our comprehensive health insurance plans. Coverage starting from ₦15,000/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                  Get Quote Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBoZWFsdGhjYXJlJTIwZG9jdG9yfGVufDF8fHx8MTc2MjM3MzI1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare professional"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Our Health Insurance?</h2>
            <p className="text-xl text-slate-600">
              Comprehensive healthcare protection for you and your loved ones
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl mb-4">Choose Your Health Plan</h2>
            <p className="text-xl text-slate-600">
              Flexible plans designed to meet your healthcare needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${
                  plan.popular ? 'border-red-600 border-2 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-red-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl">{plan.price}</span>
                    <span className="text-slate-600">/{plan.pricePerMonth}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan(plan.id)}
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
                <CardTitle>Get Your Free Health Insurance Quote</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Select>
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Select your age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-30">18-30 years</SelectItem>
                        <SelectItem value="31-45">31-45 years</SelectItem>
                        <SelectItem value="46-60">46-60 years</SelectItem>
                        <SelectItem value="60+">60+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="coverage">Coverage Type</Label>
                    <Select>
                      <SelectTrigger id="coverage">
                        <SelectValue placeholder="Select coverage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="couple">Couple</SelectItem>
                        <SelectItem value="family">Family (3-4 members)</SelectItem>
                        <SelectItem value="large-family">Family (5+ members)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
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
