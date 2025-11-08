import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const insuranceTypes = [
    { name: 'Health Insurance', path: '/health-insurance', description: 'Comprehensive health coverage for you and your family' },
    { name: 'Life Insurance', path: '/life-insurance', description: 'Secure your family\'s financial future' },
    { name: 'Auto Insurance', path: '/auto-insurance', description: 'Protect your vehicle and drive with confidence' },
    { name: 'Home Insurance', path: '/home-insurance', description: 'Safeguard your property and belongings' },
    { name: 'Travel Insurance', path: '/travel-insurance', description: 'Travel worry-free across Africa and beyond' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-orange-600" />
            <span className="font-bold text-xl">AfricanInsure</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Insurance Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {insuranceTypes.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="font-medium leading-none">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/compare"
              className={`hover:text-orange-600 transition-colors ${
                location.pathname === '/compare' ? 'text-orange-600' : ''
              }`}
            >
              Compare Plans
            </Link>
            <Link
              to="/about"
              className={`hover:text-orange-600 transition-colors ${
                location.pathname === '/about' ? 'text-orange-600' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`hover:text-orange-600 transition-colors ${
                location.pathname === '/contact' ? 'text-orange-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-orange-600 hover:bg-orange-700">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="px-2 text-sm text-muted-foreground">Insurance Products</p>
                {insuranceTypes.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-2 py-2 hover:bg-accent rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/compare"
                className="px-2 py-2 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare Plans
              </Link>
              <Link
                to="/about"
                className="px-2 py-2 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="px-2 py-2 hover:bg-accent rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline">Sign In</Button>
                <Button className="bg-orange-600 hover:bg-orange-700">Get Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
