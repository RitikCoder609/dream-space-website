import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[200] flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:h-[58px] sm:w-[58px]"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
