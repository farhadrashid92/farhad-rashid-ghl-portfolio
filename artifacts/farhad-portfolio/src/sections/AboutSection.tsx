import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/data/config';
import { Workflow, Database } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The person behind the <span className="text-gradient-primary">systems</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 prose prose-invert max-w-none text-muted-foreground"
          >
            <p className="text-lg leading-relaxed mb-6">
              I am a Computer Science graduate from Bahauddin Zakariya University with professional experience at Vezzur Agency, specializing exclusively in GoHighLevel architecture.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My expertise lies in translating complex business requirements into seamless, automated workflows. I don't just build funnels; I engineer comprehensive systems that handle everything from initial lead capture to long-term client retention.
            </p>
            <ul className="space-y-3 mt-8">
              {[
                "Funnel building & CRM configuration",
                "Workflow automation & pipelines",
                "AI bots & voice agents",
                "Client onboarding & A2P registration",
                "GHL migrations & custom integrations",
                "Reputation & referral systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">GHL Automation Specialist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Workflow automation, lead follow-up, appointment systems, pipelines, notifications, email and SMS sequences.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 mt-0 sm:mt-12">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">GHL Systems Builder</h3>
              <p className="text-muted-foreground leading-relaxed">
                Funnels, CRM, onboarding, A2P, migrations, integrations, review systems, referral systems, AI bots and voice agents.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
