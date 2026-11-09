import { Github, Twitter, Instagram, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return <footer className="border-t border-border bg-card/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">LancerHacks</span> X
            </h3>
            <p className="text-muted-foreground">
              Building the future, one hack at a time.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                {isHome ? (
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                ) : (
                  <Link to="/#about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                ) : (
                  <Link to="/#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                )}
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-primary transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} LancerHacks. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;