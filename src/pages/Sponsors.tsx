import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sponsors = [
    {
      name: "11Labs",
      logo: "/assets/Sponsors/11labs.svg",
      url: "https://elevenlabs.io/"
    }
  ];

  const tourPartners = [
    {
      name: "Meta",
      logo: "/assets/Sponsors/Meta.png",
      url: "https://about.meta.com/"
    },
    {
      name: "Cisco",
      logo: "/assets/Sponsors/Cisco.png",
      url: "https://www.cisco.com/"
    },
    {
      name: "Tesla",
      logo: "/assets/Sponsors/Tesla.png",
      url: "https://www.tesla.com/"
    },
    {
      name: "NASA",
      logo: "/assets/Sponsors/NASA.webp",
      url: "https://www.nasa.gov/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Our <span className="text-gradient">Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              LancerHacks wouldn't be possible without the generous support of our partners.
              Thank you for helping us empower the next generation of innovators.
            </p>
          </div>

          {/* Sponsors Section */}
          <div className="space-y-8 mb-24">
            <h2 className="text-3xl font-bold text-center text-foreground border-b border-border pb-4">
              Sponsors
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {sponsors.map((sponsor, idx) => (
                <a
                  key={idx}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-card/50 p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block overflow-hidden"
                >
                  <div className="relative z-10">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ maxHeight: '120px' }}
                    />
                  </div>

                  {/* Dark Overlay with Text */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-white font-bold text-xl tracking-wide">{sponsor.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Tour Partners Section */}
          {false && (
            <div className="space-y-8 mb-24">
              <h2 className="text-3xl font-bold text-center text-foreground border-b border-border pb-4">
                Tour Partners
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                We are excited to offer exclusive tours to these amazing companies as prizes for our winners!
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {tourPartners.map((partner, idx) => (
                  <a
                    key={idx}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block overflow-hidden"
                  >
                    <div className="relative z-10">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ maxHeight: '90px' }}
                      />
                    </div>

                    {/* Dark Overlay with Text */}
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <span className="text-white font-bold text-xl tracking-wide">{partner.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
