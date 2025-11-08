import { useState } from 'react';
import { CheckCircle, X, Heart, Shield, Car, Home, Plane } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';

export function ComparePage() {
  const [selectedInsuranceType, setSelectedInsuranceType] = useState('health');

  const insuranceTypes = [
    { value: 'health', label: 'Health Insurance', icon: Heart },
    { value: 'life', label: 'Life Insurance', icon: Shield },
    { value: 'auto', label: 'Auto Insurance', icon: Car },
    { value: 'home', label: 'Home Insurance', icon: Home },
    { value: 'travel', label: 'Travel Insurance', icon: Plane },
  ];

  const healthPlans = [
    {
      provider: 'AXA Mansard',
      plan: 'Health Plus',
      price: '₦25,000/month',
      rating: 4.5,
      features: {
        'Outpatient Care': true,
        'Inpatient Care': true,
        'Maternity Coverage': true,
        'Dental Care': true,
        'Optical Care': true,
        'Emergency Ambulance': true,
        'International Coverage': false,
        'Mental Health': false,
        'Annual Limit': '₦2,000,000',
      },
      popular: false,
    },
    {
      provider: 'Hygeia HMO',
      plan: 'Premium Family',
      price: '₦45,000/month',
      rating: 4.8,
      features: {
        'Outpatient Care': true,
        'Inpatient Care': true,
        'Maternity Coverage': true,
        'Dental Care': true,
        'Optical Care': true,
        'Emergency Ambulance': true,
        'International Coverage': true,
        'Mental Health': true,
        'Annual Limit': '₦5,000,000',
      },
      popular: true,
    },
    {
      provider: 'Reliance HMO',
      plan: 'Executive Plan',
      price: '₦65,000/month',
      rating: 4.7,
      features: {
        'Outpatient Care': true,
        'Inpatient Care': true,
        'Maternity Coverage': true,
        'Dental Care': true,
        'Optical Care': true,
        'Emergency Ambulance': true,
        'International Coverage': true,
        'Mental Health': true,
        'Annual Limit': 'Unlimited',
      },
      popular: false,
    },
  ];

  const lifePlans = [
    {
      provider: 'Old Mutual',
      plan: 'Term Life 20',
      price: '₦8,000/month',
      rating: 4.6,
      features: {
        'Death Benefit': '₦10,000,000',
        'Term Length': '20 years',
        'Critical Illness': false,
        'Disability Cover': false,
        'Cash Value': false,
        'Renewable': true,
        'Convertible': true,
      },
      popular: false,
    },
    {
      provider: 'Custodian Life',
      plan: 'Whole Life Plus',
      price: '₦35,000/month',
      rating: 4.7,
      features: {
        'Death Benefit': '₦25,000,000',
        'Term Length': 'Lifetime',
        'Critical Illness': true,
        'Disability Cover': true,
        'Cash Value': true,
        'Renewable': true,
        'Convertible': false,
      },
      popular: true,
    },
    {
      provider: 'ARM Life',
      plan: 'Universal Life',
      price: '₦55,000/month',
      rating: 4.5,
      features: {
        'Death Benefit': '₦50,000,000',
        'Term Length': 'Lifetime',
        'Critical Illness': true,
        'Disability Cover': true,
        'Cash Value': true,
        'Renewable': true,
        'Convertible': true,
      },
      popular: false,
    },
  ];

  const getPlansForType = (type: string) => {
    switch (type) {
      case 'health':
        return healthPlans;
      case 'life':
        return lifePlans;
      default:
        return healthPlans;
    }
  };

  const plans = getPlansForType(selectedInsuranceType);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-4">Compare Insurance Plans</h1>
            <p className="text-xl opacity-90">
              Find the best insurance coverage at the best price. Compare plans from top providers side-by-side.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-md">
            <label className="block mb-2">Select Insurance Type</label>
            <Select value={selectedInsuranceType} onValueChange={setSelectedInsuranceType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {insuranceTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {type.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? 'border-orange-600 border-2 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-600">Best Value</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{plan.provider}</CardTitle>
                      <CardDescription>{plan.plan}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{plan.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl text-orange-600">{plan.price}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {Object.entries(plan.features).map(([feature, value]) => (
                      <div key={feature} className="flex items-center justify-between py-2 border-b border-slate-100">
                        <span className="text-sm">{feature}</span>
                        {typeof value === 'boolean' ? (
                          value ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <X className="h-5 w-5 text-slate-300" />
                          )
                        ) : (
                          <span className="text-sm">{value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-12">Why Compare Insurance Plans?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="mb-2">Save Money</h3>
                <p className="text-slate-600">Compare prices and features to find the best value for your budget</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="mb-2">Make Informed Decisions</h3>
                <p className="text-slate-600">See all features side-by-side to choose what's right for you</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="mb-2">Quick & Easy</h3>
                <p className="text-slate-600">Compare multiple providers in minutes without the hassle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Still Not Sure Which Plan to Choose?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
            Talk to an Expert
          </Button>
        </div>
      </section>
    </div>
  );
}
