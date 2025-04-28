import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-[#8f4edb] text-white px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/img/woman-with-laptop.jpg"
            alt="Women in tech"
            className="rounded-xl w-full h-auto object-cover"
          />
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Firstname" className="bg-white text-black" />
              <Input placeholder="Lastname" className="bg-white text-black" />
            </div>
            <Input placeholder="Email" className="bg-white text-black" />
            <Input placeholder="Phone" className="bg-white text-black" />
            <div className="space-y-2">
              <p className="uppercase text-sm font-semibold">Join Mailing List</p>
              <div className="flex gap-2">
                <Input placeholder="Email Address" className="bg-white text-black" />
                <Button className="bg-red-500 hover:bg-red-600">Join Now</Button>
              </div>
              <p className="text-xs">For more detail visit our <a href="#" className="underline">Newsletter</a> and <a href="#" className="underline">Events</a> page.</p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <Accordion type="single" collapsible>
            {[
              "What are the different sponsorship levels/packages available?",
              "What are the benefits of each sponsorship level?",
              "What marketing materials will I receive as a sponsor?",
              "How can I contact you with questions about sponsorship?",
              "How do I pay for my sponsorship?",
              "Can I customize my sponsorship package?",
            ].map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                  This is the answer to the question. Replace with actual content.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white px-4 py-10 text-center text-sm">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-center space-x-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
              <a key={index} href="#" className="text-gray-600 hover:text-gray-900">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
          <p>
            &copy; 2024 W3GC by Web Global Conference LLC. All rights reserved.
            <br />
            <a href="#" className="underline">Privacy Policy</a> & <a href="#" className="underline">Terms of Use</a>
          </p>
        </div>
      </footer>

      {/* Subscribe Banner */}
      <section className="bg-[#8f4edb] px-4 py-8 text-white">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <p className="text-lg font-semibold text-center md:text-left">Get the latest news as they come in</p>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input placeholder="Email" className="bg-white text-black" />
            <Button className="bg-black hover:bg-gray-900">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
