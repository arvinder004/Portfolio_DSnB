import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ChatWidget from "./ChatWidget";

export const openGlobalChat = () => {
  window.dispatchEvent(new Event("open-chat"));
};

const popups = [
  "Hey! Ask me about Arvinder's experience.",
  "Want to know my tech stack?",
  "I'm an AI. Chat with me!",
  "Curious about recent projects? Ask away."
];

const GlobalChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-chat", handleOpen);
    return () => window.removeEventListener("open-chat", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(false);
      return;
    }

    // Timely popup logic
    const interval = setInterval(() => {
      const randomPopup = popups[Math.floor(Math.random() * popups.length)];
      setPopupText(randomPopup);
      setShowPopup(true);

      // Hide popup after 6 seconds
      setTimeout(() => setShowPopup(false), 6000);
    }, 15000); // every 15 seconds

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up stagger-3">
        {/* Timely Pop-up */}
        <div
          className={`transition-all duration-300 ease-in-out origin-bottom-right ${
            showPopup ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="relative rounded-[0.25rem] border border-border bg-card p-3 shadow-lg mr-2 mb-2">
            <p className="text-sm font-medium text-foreground">{popupText}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground transition-colors hover:bg-destructive/80"
            >
              <X className="h-3 w-3" />
            </button>
            {/* Triangle pointing to button */}
            <div className="absolute -bottom-[9px] right-6 h-4 w-4 rotate-45 border-b border-r border-border bg-card"></div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl border-none bg-transparent shadow-none sm:rounded-none p-0 w-[95vw] sm:w-[90vw] max-h-[100dvh]">
          <DialogTitle className="sr-only">Chat with Arvinder's AI</DialogTitle>
          <DialogDescription className="sr-only">An AI assistant to answer questions about Arvinder's portfolio and experience.</DialogDescription>
          <ChatWidget />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalChat;
