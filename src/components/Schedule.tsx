import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Schedule = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scheduleItems = [
    { 
      time: "7:45 AM", 
      event: "Check-In",
      description: "Arrive at Saint Francis High School, get your name badge, and meet fellow hackers! Our team will be ready to welcome you."
    },
    { 
      time: "8:00 AM", 
      event: "Opening Ceremony",
      description: "Join us for the official kickoff of LancerHacks IX! Learn about the event schedule, rules, and get inspired for the day ahead."
    },
    { 
      time: "8:30 AM", 
      event: "Keynote Speakers",
      description: "Hear from industry professionals and tech leaders who will share their insights and experiences in the field."
    },
    { 
      time: "9:00 AM", 
      event: "Beginner's Workshop",
      description: "New to hackathons? Join our beginner-friendly workshop to learn the basics and get started on your project with confidence!"
    },
    { 
      time: "9:30 AM", 
      event: "Hacking Begins!",
      description: "Time to code! Start building your project, collaborate with your team, and bring your ideas to life."
    },
    { 
      time: "11:00 AM", 
      event: "Tech Panel",
      description: "Listen to a panel of tech experts discuss industry trends, career advice, and answer your questions about the tech world."
    },
    { 
      time: "12:00 PM", 
      event: "Lunch",
      description: "Take a break and refuel! Enjoy a delicious lunch while networking with other participants and mentors."
    },
    { 
      time: "1:00 PM", 
      event: "Carnival Games, Ping Pong, Cornhole, Spikeball",
      description: "Need a break from coding? Head outside and enjoy some fun games! Compete with fellow hackers and relax."
    },
    { 
      time: "1:00 PM", 
      event: "Escape Room",
      description: "Challenge your problem-solving skills in a different way! Work together to solve puzzles and escape in time."
    },
    { 
      time: "5:00 PM", 
      event: "Dinner",
      description: "Recharge with dinner as you continue working on your projects. Use this time to finalize your ideas!"
    },
    { 
      time: "7:00 PM", 
      event: "Code Freeze & Presentation Prep",
      description: "Submit your code and create your presentation for the judges! This is your chance to showcase all your hard work."
    },
    { 
      time: "7:00 PM", 
      event: "Karaoke & Jeopardy",
      description: "While some teams prep presentations, join the fun with karaoke and jeopardy! Show off your singing skills or test your knowledge."
    },
    { 
      time: "7:30 PM", 
      event: "Project Presentations",
      description: "Watch teams present their innovative projects to the judges! See what amazing things everyone has built today."
    },
    { 
      time: "9:15 PM", 
      event: "Awards Ceremony",
      description: "Join us for the grand finale! Celebrate all participants and see which teams win awards in various categories."
    },
  ];

  return (
    <section id="schedule" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's what to expect during LancerHacks IX
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 auto-rows-auto">
          {scheduleItems.map((item, index) => (
            <Card
              key={index}
              className="p-4 transition-all duration-300 cursor-pointer h-fit"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-start gap-3">
                <div className="min-w-[90px]">
                  <span className="font-semibold text-sm text-foreground">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm text-foreground font-medium">{item.event}</p>
                    <ChevronDown 
                      className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
