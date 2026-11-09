import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import newsletterOct2026Page1 from "@/assets/newsletter-oct-2026-1.png";
import newsletterOct2026Page2 from "@/assets/newsletter-oct-2026-2.png";
import newsletterSept2026Page1 from "@/assets/newsletter-sept-2026-1.png";
import newsletterSept2026Page2 from "@/assets/newsletter-sept-2026-2.png";
import newsletterPage1 from "@/assets/newsletter-page-1.jpg";
import newsletterPage2 from "@/assets/newsletter-page-2.jpg";
import newsletterNovPage1 from "@/assets/newsletter-nov-page-1.jpg";
import newsletterNovPage2 from "@/assets/newsletter-nov-page-2.jpg";
import { Button } from "@/components/ui/button";
const Newsletter = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [{
    src: newsletterOct2026Page1,
    alt: "LancerHacks October 2026 Newsletter - Page 1"
  }, {
    src: newsletterOct2026Page2,
    alt: "LancerHacks October 2026 Newsletter - Page 2"
  }, {
    src: newsletterSept2026Page1,
    alt: "LancerHacks September 2026 Newsletter - Page 1"
  }, {
    src: newsletterSept2026Page2,
    alt: "LancerHacks September 2026 Newsletter - Page 2"
  }, {
    src: newsletterNovPage1,
    alt: "LancerHacks November 2025 Newsletter - Page 1"
  }, {
    src: newsletterNovPage2,
    alt: "LancerHacks November 2025 Newsletter - Page 2"
  }, {
    src: newsletterPage1,
    alt: "LancerHacks October 2025 Newsletter - Page 1"
  }, {
    src: newsletterPage2,
    alt: "LancerHacks October 2025 Newsletter - Page 2"
  }];
  const goToNext = () => {
    setCurrentPage(prev => (prev + 1) % pages.length);
  };
  const goToPrevious = () => {
    setCurrentPage(prev => (prev - 1 + pages.length) % pages.length);
  };
  return <section id="newsletter" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Monthly <span className="text-gradient">Newsletter</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest hackathons, opportunities, and tech news
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img src={pages[currentPage].src} alt={pages[currentPage].alt} className="w-full h-auto" />
            </div>

            {/* Navigation Arrows */}
            <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background" onClick={goToPrevious} aria-label="Previous page">
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background" onClick={goToNext} aria-label="Next page">
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Page Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {pages.map((_, index) => <button key={index} onClick={() => setCurrentPage(index)} className={`w-2 h-2 rounded-full transition-all ${currentPage === index ? "bg-primary w-6" : "bg-muted-foreground/50"}`} aria-label={`Go to page ${index + 1}`} />)}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default Newsletter;