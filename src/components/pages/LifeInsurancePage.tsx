import { Shield, Users, Heart, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LifeInsurancePage() {
  const plans = [
    {
      name: 'Term Life Insurance',
      description: 'Affordable coverage for a specific period',
      coverage: '₦5M - ₦50M',
      features: [
        'Coverage for 10, 20, or 30 years',
        'Affordable premiums',
        'Death benefit payout',
        'Optional critical illness rider',
        'Convertible to permanent insurance',
      ],
    },
    {
      name: 'Whole Life Insurance',
      description: 'Lifetime protection with cash value',
      coverage: '₦10M - ₦100M',
      features: [
        'Lifetime coverage',
        'Cash value accumulation',
        'Fixed premiums',
        'Loan options against cash value',
        'Estate planning benefits',
      ],
    },
    {
      name: 'Universal Life Insurance',
      description: 'Flexible premiums and death benefits',
      coverage: '₦15M - ₦150M',
      features: [
        'Adjustable premiums',
        'Flexible death benefit',
        'Investment component',
        'Tax-deferred growth',
        'Lifetime coverage',
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Shield,
      title: 'Financial Security',
      description: 'Ensure your family\'s financial future is protected',
    },
    {
      icon: Users,
      title: 'Family First',
      description: 'Coverage that grows with your family\'s needs',
    },
    {
      icon: TrendingUp,
      title: 'Investment Value',
      description: 'Build cash value while protecting your loved ones',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Sleep better knowing your family is protected',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Secure Your Family's Financial Future
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Life insurance that protects what matters most. Get comprehensive coverage starting from ₦5,000/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  Calculate Premium
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577897113176-6888367369bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwaGFwcHl8ZW58MXx8fHwxNzYyMzczMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy family"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Life Insurance Matters</h2>
            <p className="text-xl text-slate-600">
              Protect your loved ones from financial uncertainty
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl mb-4">Life Insurance Plans</h2>
            <p className="text-xl text-slate-600">
              Choose the plan that best fits your family's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <Badge variant="secondary">Coverage: {plan.coverage}</Badge>
                  </div>
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
                  <Button className="w-full" variant="outline">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Calculate Your Life Insurance Premium</CardTitle>
                <CardDescription>
                  Get an instant estimate based on your details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lifeFirstName">First Name</Label>
                      <Input id="lifeFirstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lifeLastName">Last Name</Label>
                      <Input id="lifeLastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lifeEmail">Email Address</Label>
                    <Input id="lifeEmail" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="lifePhone">Phone Number</Label>
                    <Input id="lifePhone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lifeAge">Your Age</Label>
                      <Input id="lifeAge" type="number" placeholder="35" />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="coverage-amount">Desired Coverage Amount</Label>
                    <Select>
                      <SelectTrigger id="coverage-amount">
                        <SelectValue placeholder="Select coverage amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5m">₦5,000,000</SelectItem>
                        <SelectItem value="10m">₦10,000,000</SelectItem>
                        <SelectItem value="25m">₦25,000,000</SelectItem>
                        <SelectItem value="50m">₦50,000,000</SelectItem>
                        <SelectItem value="100m">₦100,000,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="plan-type">Plan Type</Label>
                    <Select>
                      <SelectTrigger id="plan-type">
                        <SelectValue placeholder="Select plan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="term">Term Life Insurance</SelectItem>
                        <SelectItem value="whole">Whole Life Insurance</SelectItem>
                        <SelectItem value="universal">Universal Life Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Calculate Premium
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
