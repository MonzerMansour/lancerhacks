import saanviImg from "@/assets/team/saanvi.jpg";
import paolaImg from "@/assets/team/paola.jpg";
import keiraImg from "@/assets/team/keira.jpg";
import violetImg from "@/assets/team/violet.jpg";
import adithiImg from "@/assets/team/adithi.jpg";
import arjunImg from "@/assets/team/arjun.png";
import ameyaImg from "@/assets/team/ameya.jpg";
import arshImg from "@/assets/team/arsh.jpg";
import aritImg from "@/assets/team/arit.png";
import monzerImg from "@/assets/team/monzer.jpg";
import andreasImg from "@/assets/team/andreas.jpg";
import rishabhImg from "@/assets/team/rishabh.jpg";
import loganImg from "@/assets/team/logan.jpg";
import saranyaImg from "@/assets/team/saranya.jpg";

type Member = {
  name: string;
  role: string;
  image: string;
  class: string;
  bio: string;
  imagePosition?: string;
};

const members: Member[] = [
  {
    name: "Saanvi Juneja",
    role: "Co-President",
    image: saanviImg,
    class: "Class of '27",
    bio: "Saanvi is a senior at Saint Francis. Outside of LancerHacks, she is involved in TEDx, SWENext, SASA, Lancer Leap, and Board of Directors Council. She is also a CSF Teacher’s Assistant. In her free time, she loves working out, volunteering, and playing with her dog.",
  },
  {
    name: "Paola Rangel",
    role: "Co-President",
    image: paolaImg,
    class: "Class of '27",
    bio: "Paola is a senior at Saint Francis. She is involved in rugby, KDC, and Multicultural Showcase Club. In her free time, she enjoys reading, watching movies, and spending time with friends and family.",
  },
  {
    name: "Keira Lim",
    role: "Vice President",
    image: keiraImg,
    class: "Class of '28",
    bio: "Keira is a junior at Saint Francis. Apart from LancerHacks, she does Science Olympiad and D&D. In her free time, she enjoys listening to music, playing games, and photography.",
  },
  {
    name: "Ameya Joshi",
    role: "Finance Lead",
    image: ameyaImg,
    class: "Class of '28",
    bio: "Ameya is a junior at Saint Francis. Other than LancerHacks, he is involved in AI/ML, and Lancer Leap. In his free time, he enjoys watching tv, playing sports and working out.",
  },
  {
    name: "Monzer Mansour",
    role: "Tech Lead",
    image: monzerImg,
    class: "Class of '28",
    bio: "Monzer is a junior at Saint Francis. He participates in HOSA, MUN, and Robotics, and enjoys playing volleyball and hanging out with friends.",
  },
  {
    name: "Adithi Badrinarayanan",
    role: "Marketing Team",
    image: adithiImg,
    class: "Class of '28",
    imagePosition: "object-[center_20%]",
    bio: "Adithi is a junior at Saint Francis. Outside of LancerHacks, Adithi is part of TEDx, String Ensemble, CENG, and French Club. Outside of school Adithi likes to dance, run, hang out with her friends, and watch tv.",
  },
  {
    name: "Arjun Shah",
    role: "Marketing Team",
    image: arjunImg,
    class: "Class of '30",
    imagePosition: "object-[center_78%]",
    bio: "Arjun is a freshman at Saint Francis. Outside of LancerHacks, he is involved in robotics, coding, and entrepreneurship. In his free time, he enjoys building new projects, exploring AI, and hanging out with friends.",
  },
  {
    name: "Arsh Bhardwaj",
    role: "Finance Team",
    image: arshImg,
    class: "Class of '28",
    imagePosition: "object-[center_68%]",
    bio: "Arsh is a junior at Saint Francis. Apart from LancerHacks, he is involved in Social Business and Wildfire Prevention Club. In his free time, he enjoys playing basketball and hanging out with his friends.",
  },
  {
    name: "Arit Kumar",
    role: "Finance Team",
    image: aritImg,
    class: "Class of '30",
    bio: "Arit is a freshman at Saint Francis. He does soccer and math outside of school. In his free time, he enjoys biking to different places with his friends or playing soccer in his local park. His favorite food is chicken.",
  },
  {
    name: "Andreas Royset",
    role: "Tech Team",
    image: andreasImg,
    class: "Class of '29",
    imagePosition: "object-[center_28%]",
    bio: "Andreas is a sophomore at Saint Francis. Outside of LancerHacks, he is a part of Service Club, Personal Finance Club, and the developer of the Saint Francis Schedule app. In his free time, he enjoys sailing, playing guitar, and spending time with friends and family.",
  },
  {
    name: "Rishabh Sudharsan",
    role: "Tech Team",
    image: rishabhImg,
    class: "Class of '28",
    imagePosition: "object-top",
    bio: "Rishabh is a junior at Saint Francis High School, where he's involved in the AI/ML Club, Wildfire Prevention Club, and varsity tennis. Outside of school, he plays tennis with friends and plays the guitar in his free time.",
  },
  {
    name: "Logan Chandra",
    role: "Tech Team",
    image: loganImg,
    class: "Class of '29",
    bio: "Logan is a sophomore at Saint Francis High School. He does robotics and chess in terms of extracurriculars. In his free time, he takes care of the family house and spends time with his two cats.",
  },
  {
    name: "Saranya Duggirala",
    role: "Tech Team",
    image: saranyaImg,
    class: "Class of '29",
    bio: "Saranya is a sophomore at Saint Francis High School. Outside of LancerHacks, she is involved in Math Team, newspaper, and SFHS CENG Chapter. In her free time, Saranya likes to go hiking and spend time outdoors with her family and friends.",
  },
  {
    name: "Violet Bui",
    role: "Board Member",
    image: violetImg,
    class: "Class of '29",
    bio: "Violet is a sophomore at Saint Francis. She’s involved in tennis, Girls Who Code, and SWENext. In her free time, she enjoys watching shows, drawing, talking with friends, reading, and listening to music.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The amazing people bringing LancerHacks to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.name} className="relative bg-card border border-border rounded-2xl p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imagePosition ?? "object-center"}`}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.class}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
