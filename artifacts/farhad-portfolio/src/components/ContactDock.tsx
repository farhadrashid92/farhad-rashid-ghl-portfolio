import { SiGmail, SiWhatsapp } from 'react-icons/si';
import { SITE_CONFIG } from '@/data/config';

export function ContactDock() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}`;
  const iconClass = 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] motion-safe:transition-all motion-safe:duration-200 hover:bg-white/10 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400';

  return (
    <aside
      aria-label="Quick contact"
      className="fixed left-1/2 z-30 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-[#090b10]/95 py-2 pl-5 pr-2 text-white shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      style={{ bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="mr-1 whitespace-nowrap">
        <p className="text-sm font-semibold leading-5">Speak to me</p>
        <p className="text-xs leading-5 text-white/60">Email or chat with me</p>
      </div>
      <a
        href={`mailto:${SITE_CONFIG.email}`}
        aria-label={`Email Farhad at ${SITE_CONFIG.email}`}
        title="Send me an email"
        className={`${iconClass} text-[#EA4335]`}
      >
        <SiGmail className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Farhad on WhatsApp (opens in a new tab)"
        title="Chat on WhatsApp"
        className={`${iconClass} text-[#25D366]`}
      >
        <SiWhatsapp className="h-5 w-5" aria-hidden="true" />
      </a>
    </aside>
  );
}