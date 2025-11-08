import { Plane, Globe, Shield, Heart, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';

export function TravelInsurancePage() {
  const plans = [
    {
      name: 'Domestic Travel',
      price: 'From ₦5,000/trip',
      description: 'Coverage for travel within Africa',
      features: [
        'Trip cancellation',
        'Baggage loss/delay',
        'Medical emergencies',
        'Travel delay compensation',
        'Up to ₦2M coverage',
      ],
    },
    {
      name: 'International Travel',
      price: 'From ₦15,000/trip',
      description: 'Worldwide travel protection',
      features: [
        'All Domestic benefits',
        'Emergency evacuation',
        'International medical coverage',
        'Lost passport assistance',
        'Flight accident insurance',
        'Up to ₦10M coverage',
      ],
      popular: true,
    },
    {
      name: 'Annual Multi-Trip',
      price: 'From ₦80,000/year',
      description: 'Unlimited trips for frequent travelers',
      features: [
        'All International benefits',
        'Unlimited trips per year',
        'Family coverage option',
        'Adventure sports coverage',
        'Business travel protection',
        'Up to ₦20M coverage',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Trip Protection',
      description: 'Coverage for cancellations and interruptions',
    },
    {
      icon: Heart,
      title: 'Medical Coverage',
      description: 'Emergency medical and dental treatment abroad',
    },
    {
      icon: Plane,
      title: 'Flight Issues',
      description: 'Compensation for delays and missed connections',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: '24/7 assistance anywhere in the world',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Travel Worry-Free Across the Globe
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive travel insurance for domestic and international trips. Get covered from ₦5,000 per trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
                  Get Travel Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Coverage
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607069945618-08803072cf19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjB0cmF2ZWwlMjBzYWZhcml8ZW58MXx8fHwxNzYyMzczMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African safari travel"
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
            <h2 className="text-3xl md:text-4xl mb-4">Travel Insurance Benefits</h2>
            <p className="text-xl text-slate-600">
              Complete protection for every journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
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
            <h2 className="text-3xl md:text-4xl mb-4">Travel Insurance Plans</h2>
            <p className="text-xl text-slate-600">
              Choose the perfect plan for your travel needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  plan.popular ? 'border-orange-600 border-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-600">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 text-2xl text-orange-600">{plan.price}</div>
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
                      plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''
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
                <CardTitle>Get Your Travel Insurance Quote</CardTitle>
                <CardDescription>
                  Tell us about your trip for an instant quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="travelFirstName">First Name</Label>
                      <Input id="travelFirstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="travelLastName">Last Name</Label>
                      <Input id="travelLastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="travelEmail">Email Address</Label>
                    <Input id="travelEmail" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="travelPhone">Phone Number</Label>
                    <Input id="travelPhone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="departureDate">Departure Date</Label>
                      <Input id="departureDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="returnDate">Return Date</Label>
                      <Input id="returnDate" type="date" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="destination">Destination</Label>
                      <Select>
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="africa">Within Africa</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="americas">Americas</SelectItem>
                          <SelectItem value="worldwide">Worldwide</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select>
                        <SelectTrigger id="travelers">
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Person</SelectItem>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5+">5+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="tripType">Trip Type</Label>
                    <Select>
                      <SelectTrigger id="tripType">
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leisure">Leisure/Vacation</SelectItem>
                        <SelectItem value="business">Business Trip</SelectItem>
                        <SelectItem value="adventure">Adventure/Sports</SelectItem>
                        <SelectItem value="multi">Multi-Trip Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="travelPlan">Select Plan</Label>
                    <Select>
                      <SelectTrigger id="travelPlan">
                        <SelectValue placeholder="Choose your plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic">Domestic Travel</SelectItem>
                        <SelectItem value="international">International Travel</SelectItem>
                        <SelectItem value="annual">Annual Multi-Trip</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Get Instant Quote
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
