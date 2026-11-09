import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event where students, developers, and creators come together to build innovative projects in a limited time frame. It's a great opportunity to learn, collaborate, and showcase your skills!",
  },
  {
    question: "Who can participate?",
    answer: "LancerHacks is open to all 7th - 12th graders! Whether you're a beginner or an experienced developer, we welcome participants from all skill levels and backgrounds.",
  },
  {
    question: "Do I need a team?",
    answer: "You can participate solo or with a team of up to 4 people. Don't have a team? No worries! We'll have team formation sessions at the beginning of the event.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, and any hardware you might need for your project. We'll provide food, drinks, and plenty of energy to keep you going throughout the event!",
  },
  {
    question: "Is there a participation fee?",
    answer: "No! LancerHacks is completely free to attend. We'll provide meals, snacks, swag, and everything you need to focus on building your project.",
  },
  {
    question: "What if I've never been to a hackathon before?",
    answer: "That's perfectly fine! We'll have workshops, mentors, and resources to help beginners get started. Hackathons are all about learning and having fun!",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about LancerHacks
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
