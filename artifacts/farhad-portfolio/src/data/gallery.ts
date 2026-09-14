export type GalleryCategory = "Funnels" | "Automations";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  image: string;
  thumbnail: string;
  liveUrl?: string;
  isSharedScreenshot?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Funnels
  {
    id: "horizon",
    liveUrl: "https://horizon.viralcoach.com/",
    title: "Horizon",
    category: "Funnels",
    description: "Kids Education & Coaching · Lead Generation Funnel",
    image: "/images/portfolio/horizon-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/horizon-thumb.webp"
  },
  {
    id: "brightpath",
    liveUrl: "https://brightpathwellness.viralcoach.com/",
    title: "Brightpath Wellness",
    category: "Funnels",
    description: "Wellness & Weight Care · Sales Landing Page",
    image: "/images/portfolio/brightpathwellness-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/brightpathwellness-thumb.webp"
  },
  {
    id: "k9kountry",
    liveUrl: "https://k9kountry.viralcoach.com/",
    title: "K9 Kountry",
    category: "Funnels",
    description: "Dog Boarding & Daycare · Booking Funnel",
    image: "/images/portfolio/k9kountry-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/k9kountry-thumb.webp"
  },
  {
    id: "impact",
    liveUrl: "https://impactprofessionals.viralcoach.com/",
    title: "Impact Professionals",
    category: "Funnels",
    description: "Business Coaching · Consultation Funnel",
    image: "/images/portfolio/impactprofessionals-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/impactprofessionals-thumb.webp"
  },
  {
    id: "michaelgordy",
    liveUrl: "https://michaelgordyfinancialservice.viralcoach.com/",
    title: "Michael Gordy Financial Service",
    category: "Funnels",
    description: "Insurance & Financial Services · Quote Funnel",
    image: "/images/portfolio/michaelgordyfinancialservice-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/michaelgordyfinancialservice-thumb.webp"
  },
  {
    id: "lawncare",
    liveUrl: "https://lawncarelaunch.viralcoach.com/",
    title: "Lawn Care Launch",
    category: "Funnels",
    description: "Lawn Care Services · Lead Generation Funnel",
    image: "/images/portfolio/lawncarelaunch-hd.jpg",
    thumbnail: "/images/portfolio/thumbs/lawncarelaunch-thumb.webp"
  },

  // Automations
  {
    id: "appt-confirmation",
    title: "Appointment Confirmation & Nurture",
    category: "Automations",
    description: "Enrolls booked leads into confirmation and reminder sequences to minimize no-shows.",
    image: "/images/portfolio/flow2.jpg",
    thumbnail: "/images/portfolio/thumbs/flow2-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "no-show-recovery",
    title: "No-Show Recovery Automation",
    category: "Automations",
    description: "Automatically detects missed appointments and triggers a rebooking invitation email sequence.",
    image: "/images/portfolio/flow3.jpg",
    thumbnail: "/images/portfolio/thumbs/flow3-thumb.webp"
  },
  {
    id: "cancellation-win-back",
    title: "Cancellation Win-Back",
    category: "Automations",
    description: "Re-tags cancelled appointments and fires follow-up sequences with a direct rebooking link.",
    image: "/images/portfolio/flow4.jpg",
    thumbnail: "/images/portfolio/thumbs/flow4-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "engagement-detection",
    title: "Engagement Detection & Lead Routing",
    category: "Automations",
    description: "Detects engagement when a contact replies and instantly routes them to a prioritized track.",
    image: "/images/portfolio/flow5.jpg",
    thumbnail: "/images/portfolio/thumbs/flow5-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "new-lead-intake",
    title: "New Lead Intake & Nurture",
    category: "Automations",
    description: "Instantly creates opportunities from form submissions and initiates structured nurture sequence.",
    image: "/images/portfolio/flow6.jpg",
    thumbnail: "/images/portfolio/thumbs/flow6-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "won-deal-onboarding",
    title: "Won-Deal Client Onboarding",
    category: "Automations",
    description: "Automatically triggers a structured onboarding sequence as soon as an opportunity is marked as won.",
    image: "/images/portfolio/flow4.jpg",
    thumbnail: "/images/portfolio/thumbs/flow4-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "server-side-form",
    title: "Server-Side Tracking · Form Leads",
    category: "Automations",
    description: "Sends form submission events server-side directly to improve conversion reporting reliability.",
    image: "/images/portfolio/flow5.jpg",
    thumbnail: "/images/portfolio/thumbs/flow5-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "server-side-booked",
    title: "Server-Side Tracking · Booked Calls",
    category: "Automations",
    description: "Fires a server-side event for every booked appointment to enhance tracking signal.",
    image: "/images/portfolio/flow6.jpg",
    thumbnail: "/images/portfolio/thumbs/flow6-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "reputation-management",
    title: "Reputation Management & Review Routing",
    category: "Automations",
    description: "Branches follow-up by star rating, routing top ratings to public review and flagging others for support.",
    image: "/images/portfolio/flow1.jpg",
    thumbnail: "/images/portfolio/thumbs/flow1-thumb.webp",
    isSharedScreenshot: true
  },
  {
    id: "multi-channel-routing",
    title: "Multi-Channel Engagement Routing",
    category: "Automations",
    description: "Routes incoming engagement across SMS, email, and social DMs into one unified follow-up workflow.",
    image: "/images/portfolio/flow2.jpg",
    thumbnail: "/images/portfolio/thumbs/flow2-thumb.webp",
    isSharedScreenshot: true
  }
];
