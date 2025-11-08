import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-white text-lg">AfricanInsure</span>
            </div>
            <p className="text-sm mb-4">
              Africa's leading insurance comparison platform. Find, compare, and purchase the best insurance policies tailored for the African market.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Insurance Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/health-insurance" className="hover:text-orange-500 transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link to="/life-insurance" className="hover:text-orange-500 transition-colors">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link to="/auto-insurance" className="hover:text-orange-500 transition-colors">
                  Auto Insurance
                </Link>
              </li>
              <li>
                <Link to="/home-insurance" className="hover:text-orange-500 transition-colors">
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link to="/travel-insurance" className="hover:text-orange-500 transition-colors">
                  Travel Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-orange-500 transition-colors">
                  Compare Plans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Claims Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>+234 800 123 4567</p>
                  <p>+254 700 123 456</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>support@africaninsure.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>Lagos, Nigeria | Nairobi, Kenya | Johannesburg, South Africa</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 AfricanInsure. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
