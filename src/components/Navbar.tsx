import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [{
    name: "About",
    href: "/#about"
  }, {
    name: "Schedule",
    href: "/#schedule"
  }, {
    name: "FAQ",
    href: "/#faq"
  }, {
    name: "Newsletter",
    href: "/#newsletter"
  }, {
    name: "Team",
    href: "/#team"
  }, {
    name: "Speakers & Judges",
    href: "/speakers"
  }, {
    name: "Sponsors",
    href: "/sponsors"
  }];

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="LancerHacks Logo" className="h-10 w-10" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map(link => {
              // If it's an anchor link and we are on the home page, use a normal anchor tag for smooth scrolling
              if (isHome && link.href.startsWith("/#")) {
                return (
                  <a 
                    key={link.name} 
                    href={link.href.substring(1)} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              // Otherwise use React Router Link
              return (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
            <Button variant="hero" size="sm" asChild>
              <a href="https://docs.google.com/forms/d/1bkc2BE5RcaX5I3JcYRwGc3jM1Gi07aHmkFXuSwBfCw4/edit" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;