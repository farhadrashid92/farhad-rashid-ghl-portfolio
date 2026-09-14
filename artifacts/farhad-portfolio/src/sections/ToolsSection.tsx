import { motion } from 'framer-motion';
import { 
  Bot, 
  Mic, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Webhook, 
  MessageCircle, 
  FileText, 
  ClipboardList,
  Zap,
  Phone
} from 'lucide-react';
import { SiZapier, SiMake, SiGooglesheets } from 'react-icons/si';

const TOOLS = [
  { name: 'GoHighLevel', icon: Zap, color: 'text-primary' },
  { name: 'Conversation AI', icon: Bot, color: 'text-indigo-400' },
  { name: 'Voice AI', icon: Mic, color: 'text-purple-400' },
  { name: 'Twilio', icon: Phone, color: 'text-red-500' },
  { name: 'Email', icon: Mail, color: 'text-blue-400' },
  { name: 'SMS', icon: MessageSquare, color: 'text-green-400' },
  { name: 'Calendars', icon: Calendar, color: 'text-orange-400' },
  { name: 'Webhooks', icon: Webhook, color: 'text-pink-400' },
  { name: 'Zapier', icon: SiZapier, color: 'text-orange-500' },
  { name: 'Make', icon: SiMake, color: 'text-purple-500' },
  { name: 'Google Sheets', icon: SiGooglesheets, color: 'text-green-500' },
  { name: 'Chat Widgets', icon: MessageCircle, color: 'text-blue-300' },
  { name: 'Forms', icon: FileText, color: 'text-teal-400' },
  { name: 'Surveys', icon: ClipboardList, color: 'text-yellow-400' },
];

export function ToolsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="text-primary font-bold tracking-widest text-xs uppercase mb-3">
            Tech Stack
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tools I use to ship systems
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOOLS.map((tool, i) => {
            const isGHL = tool.name === 'GoHighLevel';
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className={`
                  bg-gradient-to-b from-card/40 to-card/10 
                  border ${isGHL ? 'border-primary/50 shadow-[0_0_15px_rgba(26,86,219,0.15)]' : 'border-border/50'} 
                  rounded-2xl p-6 flex flex-col items-center justify-center gap-3 
                  hover:-translate-y-1 hover:bg-card/60 hover:border-primary/50 hover:shadow-md
                  transition-all duration-300 shadow-sm cursor-default 
                  motion-reduce:transition-none motion-reduce:hover:transform-none
                `}
              >
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
                <span className={`text-sm font-medium text-center ${isGHL ? 'text-primary' : 'text-muted-foreground'}`}>
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
