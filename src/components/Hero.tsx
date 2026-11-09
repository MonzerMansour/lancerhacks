import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${teamPhoto})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}></div>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-background/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient">LancerHacks</span>
            <span className="text-foreground"> X</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Build. Innovate. Transform. Join the ultimate 12-hour hackathon experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Date coming soon</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Saint Francis HS, Mountain View, CA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-8" asChild>
              <a href="https://docs.google.com/forms/d/1bkc2BE5RcaX5I3JcYRwGc3jM1Gi07aHmkFXuSwBfCw4/edit" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;