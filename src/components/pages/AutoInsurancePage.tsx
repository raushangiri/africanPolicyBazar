import { Car, Shield, Wrench, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function AutoInsurancePage() {
  const coverageTypes = [
    {
      name: 'Third Party',
      price: 'From ₦25,000/year',
      description: 'Basic legal requirement coverage',
      features: [
        'Covers damage to other vehicles',
        'Covers injury to third parties',
        'Legal protection',
        'Mandatory by law',
      ],
    },
    {
      name: 'Third Party, Fire & Theft',
      price: 'From ₦45,000/year',
      description: 'Enhanced protection for your vehicle',
      features: [
        'All Third Party benefits',
        'Fire damage coverage',
        'Theft protection',
        'Vandalism coverage',
        'Natural disaster protection',
      ],
    },
    {
      name: 'Comprehensive',
      price: 'From ₦85,000/year',
      description: 'Complete protection for you and your car',
      features: [
        'All Third Party, Fire & Theft benefits',
        'Own vehicle damage',
        'Windscreen replacement',
        'Medical expenses',
        'Personal accident cover',
        'Courtesy car provision',
        'Roadside assistance',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Instant Coverage',
      description: 'Get insured in minutes with our fast approval process',
    },
    {
      icon: Wrench,
      title: 'Nationwide Repairs',
      description: 'Access to approved repair shops across Africa',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency assistance',
    },
    {
      icon: Car,
      title: 'All Vehicle Types',
      description: 'Coverage for cars, SUVs, trucks, and motorcycles',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Drive with Confidence - Auto Insurance Made Easy
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive vehicle insurance coverage starting from ₦25,000/year. Protect your car and drive worry-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100">
                  Get Instant Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614943267910-f2d08ac3c14f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2FyJTIwZHJpdmluZ3xlbnwxfHx8fDE3NjIzNzMyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Car driving"
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
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Our Auto Insurance?</h2>
            <p className="text-xl text-slate-600">
              Comprehensive protection with exceptional service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
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

      {/* Coverage Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Choose Your Coverage Level</h2>
            <p className="text-xl text-slate-600">
              From basic protection to comprehensive coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coverageTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                  <div className="mt-4 text-2xl text-green-600">{type.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 2 ? 'default' : 'outline'}>
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
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Auto Insurance Quote</CardTitle>
                <CardDescription>
                  Fill in your vehicle details for an instant quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="vehicle" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="vehicle">Vehicle Info</TabsTrigger>
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="coverage">Coverage</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="vehicle" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="vehicleMake">Vehicle Make</Label>
                      <Select>
                        <SelectTrigger id="vehicleMake">
                          <SelectValue placeholder="Select make" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="nissan">Nissan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="vehicleModel">Model</Label>
                      <Input id="vehicleModel" placeholder="e.g., Camry, Accord" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vehicleYear">Year</Label>
                        <Input id="vehicleYear" type="number" placeholder="2020" />
                      </div>
                      <div>
                        <Label htmlFor="vehicleValue">Estimated Value (₦)</Label>
                        <Input id="vehicleValue" type="number" placeholder="5000000" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="registrationNumber">Registration Number</Label>
                      <Input id="registrationNumber" placeholder="ABC-123-XY" />
                    </div>
                  </TabsContent>

                  <TabsContent value="personal" className="space-y-4 mt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="autoFirstName">First Name</Label>
                        <Input id="autoFirstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="autoLastName">Last Name</Label>
                        <Input id="autoLastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="autoEmail">Email Address</Label>
                      <Input id="autoEmail" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="autoPhone">Phone Number</Label>
                      <Input id="autoPhone" type="tel" placeholder="+234 800 000 0000" />
                    </div>
                    <div>
                      <Label htmlFor="drivingExp">Driving Experience</Label>
                      <Select>
                        <SelectTrigger id="drivingExp">
                          <SelectValue placeholder="Years of driving" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="coverage" className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="coverageType">Coverage Type</Label>
                      <Select>
                        <SelectTrigger id="coverageType">
                          <SelectValue placeholder="Select coverage type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="third-party">Third Party</SelectItem>
                          <SelectItem value="third-party-fire-theft">Third Party, Fire & Theft</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="startDate">Coverage Start Date</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="mb-2">Add-ons (Optional)</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Roadside Assistance (+₦5,000/year)</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Windscreen Protection (+₦3,000/year)</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Personal Accident Cover (+₦8,000/year)</span>
                        </label>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Get Instant Quote
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
