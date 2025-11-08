import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in honest, transparent dealings with all our customers and partners.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your needs and satisfaction are at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery and customer experience.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously innovate to make insurance simple and accessible.',
    },
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started operations in Lagos, Nigeria' },
    { year: '2020', title: 'Regional Expansion', description: 'Expanded to Kenya, Ghana, and South Africa' },
    { year: '2022', title: '100K Customers', description: 'Reached 100,000 happy customers milestone' },
    { year: '2023', title: '15 Countries', description: 'Now serving customers across 15 African nations' },
    { year: '2025', title: 'Market Leader', description: 'Africa\'s #1 insurance comparison platform' },
  ];

  const team = [
    { name: 'Dr. Amina Okonkwo', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzY1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Kwame Mensah', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzY1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Sarah Ndlovu', role: 'Chief Operations Officer', image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMzY1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">About AfricanInsure</h1>
            <p className="text-xl opacity-90">
              We're on a mission to make insurance simple, affordable, and accessible to every African. 
              Compare, choose, and buy insurance with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2019, AfricanInsure was born from a simple observation: insurance in Africa was 
                complicated, expensive, and inaccessible to most people. We knew there had to be a better way.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our founders, having experienced the frustration of navigating the insurance landscape firsthand, 
                decided to create a platform that would empower Africans to make informed decisions about their 
                insurance needs.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're proud to serve over 500,000 customers across 15 African countries, working with 
                more than 50 trusted insurance providers to bring you the best coverage at competitive prices.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577897113176-6888367369bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFtaWx5JTIwaGFwcHl8ZW58MXx8fHwxNzYyMzczMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To democratize insurance in Africa by providing a transparent, user-friendly platform 
                  that empowers individuals and families to protect what matters most to them.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To be Africa's most trusted insurance marketplace, where every individual has access 
                  to affordable, comprehensive coverage that provides true peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">
              Key milestones in our growth story
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center">
                      <span>{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-xl mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-slate-600">
              Passionate experts driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl mb-2">500K+</div>
              <div className="opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <div className="opacity-90">Insurance Partners</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15</div>
              <div className="opacity-90">African Countries</div>
            </div>
            <div>
              <div className="text-4xl mb-2">98%</div>
              <div className="opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
