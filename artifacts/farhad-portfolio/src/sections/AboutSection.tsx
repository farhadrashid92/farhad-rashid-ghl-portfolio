import { motion } from 'framer-motion';

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
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
          >
            <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#10131b] to-[#080b11] p-6 motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-500/40">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">GHL Automation Specialist</h3>
              <p className="text-sm text-muted-foreground leading-6">
                Workflow automation, lead follow-up, appointment systems, pipelines, notifications, email and SMS sequences.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#10131b] to-[#080b11] p-6 motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-500/40">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">GHL Systems Builder</h3>
              <p className="text-sm text-muted-foreground leading-6">
                Funnels, CRM, onboarding, A2P, migrations, integrations, review systems, referral systems, AI bots and voice agents.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
