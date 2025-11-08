import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+234 800 123 4567', '+254 700 123 456', '+27 800 123 456'],
      description: 'Available 24/7',
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@africaninsure.com', 'claims@africaninsure.com'],
      description: 'Response within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Office Locations',
      details: ['Lagos, Nigeria', 'Nairobi, Kenya', 'Johannesburg, South Africa'],
      description: 'Visit us during business hours',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
      description: 'Local time zones apply',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to get a quote?',
      answer: 'You can get an instant quote in less than 5 minutes by filling out our online form.',
    },
    {
      question: 'Is there a fee for comparing plans?',
      answer: 'No, our comparison service is completely free. We earn a commission from insurance providers when you purchase a policy.',
    },
    {
      question: 'Can I cancel my policy?',
      answer: 'Yes, most policies have a cooling-off period. Contact our support team for specific policy details.',
    },
    {
      question: 'How do I file a claim?',
      answer: 'You can file a claim through your insurance provider directly or contact our support team for assistance.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90">
              Have questions? We're here to help. Reach out to our friendly support team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3">{method.title}</h3>
                    <div className="space-y-1 mb-3">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-orange-600">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactFirstName">First Name</Label>
                        <Input id="contactFirstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="contactLastName">Last Name</Label>
                        <Input id="contactLastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Email Address</Label>
                      <Input id="contactEmail" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="contactPhone">Phone Number</Label>
                      <Input id="contactPhone" type="tel" placeholder="+234 800 000 0000" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="claim">Claim Support</SelectItem>
                          <SelectItem value="policy">Policy Question</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2">Need Immediate Assistance?</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Our customer support team is available 24/7 to help you with any urgent matters.
                      </p>
                      <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                        Start Live Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">Our Offices</h2>
            <p className="text-xl text-slate-600">
              Visit us at any of our office locations across Africa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">Nigeria Office</h3>
                <p className="text-sm text-slate-600 mb-2">
                  123 Victoria Island<br />
                  Lagos, Nigeria
                </p>
                <p className="text-sm text-orange-600">+234 800 123 4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">Kenya Office</h3>
                <p className="text-sm text-slate-600 mb-2">
                  456 Westlands Road<br />
                  Nairobi, Kenya
                </p>
                <p className="text-sm text-orange-600">+254 700 123 456</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2">South Africa Office</h3>
                <p className="text-sm text-slate-600 mb-2">
                  789 Sandton Drive<br />
                  Johannesburg, South Africa
                </p>
                <p className="text-sm text-orange-600">+27 800 123 456</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
