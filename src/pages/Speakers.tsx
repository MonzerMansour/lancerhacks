import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Guests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openingSpeaker = {
    name: "Katherine Mavrommati",
    role: "Mendaera",
    bio: "I am a Software Engineer with over seven years of experience building medical device products. I have contributed to the commercialization of complex robotic, imaging, and ultrasound platforms, working closely with cross-functional teams to take technologies from development through release. I am passionate about bringing more advanced technology into healthcare to improve patient care and clinical outcomes.",
    photo: "/assets/Speakers_Judges/Katherine Mavrommati.jpeg"
  };

  const panelSpeakers = [
    {
      name: "Zeeshan Khan",
      role: "Zoetic Motion",
      bio: "Zeeshan Khan is the Founder of Zoetic Motion, with experience working at the intersection of applied AI, computer vision, and health technology.",
      photo: "/assets/Speakers_Judges/ZeeshanZoeticPhoto.jpg"
    },
    {
      name: "Mary-Sonja Beasley",
      role: "Rinne & Peterson Structural Engineers",
      bio: "I am a retired Structural Engineer, licensed in the State of California, with thirty years of experience designing both commercial and residential structures. After graduating from Northwestern University with a B.S. in Civil Engineering, I spent most of my career working for a Palo Alto company, Rinne & Peterson Structural Engineers, where our project portfolio included schools, high-tech and biotech buildings, and custom residences. During my career, I experienced the transition from hand drafting to 3D CAD drawing, and from calculations with a handheld calculator to cloud computing.",
      photo: "/assets/Speakers_Judges/Mary-Sonja Beasley.JPG"
    },
    {
      name: "Harsha Sanjeeva",
      role: "Cisco",
      bio: "As a Senior Software Engineer at Cisco, I focus on the intersection of network security and cloud infrastructure. I’m excited to dive into your projects and support you in bridging the gap between a great prototype and a viable technical build.",
      photo: "/assets/Speakers_Judges/Harsha Sanjeeva.jpeg"
    },
    {
      name: "Ankita Bihani",
      role: "Meta",
      bio: "Ankita Bihani is an Engineering Manager at Meta and holds an M.S. in Computer Science with Distinction in Research from Stanford University. She works on applied AI systems and large-scale distributed systems. A passionate advocate for women in tech, Ankita is dedicated to mentoring the next generation of engineers and actively supports student-led STEM initiatives to help young innovators thrive.",
      photo: "/assets/Speakers_Judges/Ankita Bihani.jpeg"
    }
  ];

  const judges = [
    {
      name: "Sean Tsang",
      role: "Santa Clara University",
      bio: "Howdy folks! :D This is Sean T., and I'm a current senior Finance Major from Santa Clara University! With four additional minors in Entrepreneurship, Real Estate, Retail Studies, and Responsible AI, I'm thrilled to bring my interdisciplinary mindset and knowledge to this year's LancerHacks for meaningful impact! Looking forward to seeing your creative work, you got this!",
      photo: "/assets/Speakers_Judges/Sean Tsang.png"
    },
    {
      name: "Lino Le Van",
      role: "alphaXiv",
      bio: "Lino Le Van is a co-founder of alphaXiv, a platform helping research engineers discover and apply the latest research, which recently raised a $7M seed round. He's a UC Berkeley grad and active open-source contributor. Fun fact: he's also a former SFHacks president and LancerHacks organizer.",
      photo: "/assets/Speakers_Judges/Lino Le Van.jpg"
    },
    {
      name: "Rachel Lin",
      role: "Faire",
      bio: "I’m a Product Manager at Faire, a wholesale marketplace that connects artisans and independent brands with small retailers. I build tools and experiences that help brands succeed on the platform. In my free time, you'll likely find me running, cooking (or eating), skiing, or curled up on the couch with some questionable reality TV.",
      photo: "/assets/Speakers_Judges/Rachel Lin.jpeg"
    },
    {
      name: "Ankita Bihani",
      role: "Meta",
      bio: "Ankita Bihani is an Engineering Manager at Meta and holds an M.S. in Computer Science with Distinction in Research from Stanford University. She works on applied AI systems and large-scale distributed systems. A passionate advocate for women in tech, Ankita is dedicated to mentoring the next generation of engineers and actively supports student-led STEM initiatives to help young innovators thrive.",
      photo: "/assets/Speakers_Judges/Ankita Bihani.jpeg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Speakers <span className="text-gradient">& Judges</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the industry leaders, experts, and innovators joining us.
            </p>
          </div>

          <div className="space-y-24">
            {/* Opening Speaker */}
            <section className="space-y-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-center border-b border-border pb-4">Opening Speaker</h2>
              <div className="max-w-4xl mx-auto bg-card/50 rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-primary/20">
                  <img src={openingSpeaker.photo} alt={openingSpeaker.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">{openingSpeaker.name}</h3>
                    <p className="text-primary font-medium">{openingSpeaker.role}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {openingSpeaker.bio}
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Panel Speakers */}
            <section className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-3xl font-bold text-center border-b border-border pb-4">Tech Panel</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {panelSpeakers.map((speaker, index) => (
                  <div key={index} className="bg-card/50 rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-colors flex flex-col items-center text-center space-y-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
                      <img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{speaker.name}</h3>
                      <p className="text-primary font-medium text-sm">{speaker.role}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                      {speaker.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Judges */}
            <section className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-3xl font-bold text-center border-b border-border pb-4">Judges</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {judges.map((judge, index) => (
                  <div key={index} className="bg-card/50 rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-colors flex flex-col items-center text-center space-y-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
                      <img src={judge.photo} alt={judge.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{judge.name}</h3>
                      <p className="text-primary font-medium text-sm">{judge.role}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                      {judge.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guests;