"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Xiaohongshu?",
    answer: "Think of Xiaohongshu (aka 'Red Note App') as China's Instagram meets Pinterest! It's a super popular social app where people share their lifestyle content, product reviews, and cool finds. Whether you're into fashion, beauty, food, or travel - it's the go-to platform for discovering what's trending in China."
  },
  {
    question: "How to boost your post visibility?",
    answer: "Want your posts to get more eyes? Here's the secret sauce: 1) Use trending hashtags that actually make sense; 2) Create original, high-quality content; 3) Post consistently; 4) Engage with your followers' comments; 5) Jump on trending topics; 6) Make your thumbnails pop; 7) Time your posts right (pro tip: try different times to find your sweet spot!)."
  },
  {
    question: "How to create an account?",
    answer: "Getting started is super easy: 1) Download the app; 2) Hit 'Sign Up'; 3) Choose phone number registration; 4) Enter your digits and verify; 5) Pick a cool username and set your password; 6) Jazz up your profile with a pic and bio; 7) Start following content that interests you. Done and done! 🚀"
  },
  {
    question: "How to join the conversation?",
    answer: "Ready to dive in? Here's how: 1) Drop comments on posts you love; 2) Share posts and add your hot takes; 3) Join trending challenges with hashtags; 4) Find your tribe in interest groups; 5) Chat with other users; 6) Get in on brand campaigns and community events. The more you engage, the more fun it gets! 💬"
  }
];

export function FAQSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">FAQ</h2>
      </div>
      <div className="space-y-2">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-4 mb-2 data-[state=open]:bg-gray-50/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
