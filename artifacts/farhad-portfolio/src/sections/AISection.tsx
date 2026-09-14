import { motion } from 'framer-motion';
import { Bot, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export function AISection() {
  return (
    <section id="ai-systems" className="py-24 relative bg-primary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Next-Level Automation</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">AI Inside</span> the Customer Journey
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I implement practical AI solutions that enhance the customer experience without feeling robotic. From initial lead qualification to seamless human handoff.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: MessageSquare, text: "GoHighLevel Conversation AI & Chatbots" },
                { icon: Sparkles, text: "AI lead qualification and automated responses" },
                { icon: PhoneCall, text: "Voice AI agents for inbound/outbound calls" },
                { icon: Bot, text: "Knowledge base configuration & human handoff logic" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base text-foreground/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            
            <h3 className="text-xl font-bold text-white mb-8 border-b border-border/50 pb-4">AI Workflow Visualization</h3>
            
            <div className="flex flex-col gap-3">
              {[
                "Visitor",
                "AI Conversation",
                "Qualification",
                "CRM",
                "Opportunity",
                "Follow-Up",
                "Human Handoff"
              ].map((step, i, arr) => (
                <div key={step} className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      i === 1 || i === 2 ? 'bg-primary text-white shadow-[0_0_15px_rgba(26,86,219,0.5)]' : 'bg-background/50 border border-border text-muted-foreground'
                    }`}>
                      {i + 1}
                    </div>
                    <div className={`px-4 py-3 rounded-xl border flex-1 ${
                      i === 1 || i === 2 ? 'bg-primary/10 border-primary/30 text-white' : 'bg-background/30 border-border/50 text-muted-foreground'
                    }`}>
                      {step}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-6 bg-border ml-4 my-1" />
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground mt-8 text-center bg-background/50 py-2 rounded-lg border border-border/50">
              * AI operates strictly within configured guardrails and knowledge bases.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
