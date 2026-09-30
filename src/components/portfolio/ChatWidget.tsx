import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUGGESTED_QUESTIONS = [
  "What is Arvinder's core tech stack?",
  "Tell me about his experience at Compucom.",
  "Can you summarize his recent projects?",
  "How can I get in touch with him?",
];

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), role: "user", content },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Failed to fetch response");
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      // Add empty assistant message to append to
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: "" },
      ]);

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const lastMessage = updated[updated.length - 1];
            if (lastMessage.role === "assistant") {
              lastMessage.content += chunk;
            }
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl animate-fade-in-up">
      <div className="flex h-[550px] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-background/40 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-center border-b border-white/10 bg-white/5 px-4 py-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground tracking-wide">Ask Arvinder's AI</span>
          </div>
        </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-medium text-foreground">Hi there!</h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    I'm Arvinder's AI assistant. Ask me anything about his experience, projects, or skills!
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex gap-3 ${
                        m.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/10 text-foreground"
                        }`}
                      >
                        {m.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/5 text-foreground"
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-center rounded-2xl bg-white/5 px-4 py-2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 p-3">
              <form
                onSubmit={onSubmit}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-background/50 p-1"
              >
                <input
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  value={input}
                  placeholder="Ask me anything..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                />
                <Button
                  id="chat-submit-btn"
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input?.trim()}
                  className="h-8 w-8 shrink-0 rounded-lg bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
            </div>
      </div>
    </div>
  );
};

export default ChatWidget;
