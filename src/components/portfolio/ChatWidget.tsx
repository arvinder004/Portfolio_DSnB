import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Refocus input after response finishes generating
  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
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
      const assistantMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
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
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last && last.role === "assistant" && last.content === "") {
          last.content = "Sorry, I encountered an error. Please try again later.";
          return updated;
        }
        return [
          ...updated,
          {
            id: Date.now().toString(),
            role: "assistant",
            content: "Sorry, I encountered an error. Please try again later.",
          },
        ];
      });
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
    <div className="mx-auto w-full max-w-full animate-fade-in-up">
      <div className="flex h-[85vh] sm:h-[80vh] max-h-[850px] w-full flex-col overflow-hidden rounded-[0.25rem] border border-border bg-background shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-center border-b border-border bg-secondary px-4 py-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground tracking-wide">Ask Arvinder's AI</span>
          </div>
        </div>

            {/* Messages Area */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
            >
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-[0.25rem] bg-secondary p-4 border border-border">
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
                        disabled={isLoading}
                        className="rounded-[0.25rem] border border-border bg-secondary px-3 py-2 text-left text-sm text-foreground transition hover:bg-card hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.25rem] border border-border ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {m.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`max-w-[85%] rounded-[0.25rem] border border-border px-4 py-2 text-sm text-left ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {m.role === "user" ? (
                          m.content
                        ) : (
                          <div className="prose prose-invert prose-p:leading-relaxed prose-pre:p-0 max-w-none text-sm">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                ul: ({ node, ...props }) => <ul className="mb-2 ml-4 list-disc last:mb-0" {...props} />,
                                ol: ({ node, ...props }) => <ol className="mb-2 ml-4 list-decimal last:mb-0" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1 last:mb-0" {...props} />,
                                table: ({ node, ...props }) => (
                                  <div className="my-4 w-full overflow-x-auto rounded-[0.25rem] border border-border">
                                    <table className="w-full text-left text-sm" {...props} />
                                  </div>
                                ),
                                thead: ({ node, ...props }) => <thead className="bg-secondary text-xs uppercase" {...props} />,
                                tbody: ({ node, ...props }) => <tbody className="divide-y divide-border" {...props} />,
                                tr: ({ node, ...props }) => <tr className="transition-colors hover:bg-card" {...props} />,
                                th: ({ node, ...props }) => <th className="px-4 py-3 font-medium text-white" {...props} />,
                                td: ({ node, ...props }) => <td className="px-4 py-3" {...props} />,
                              }}
                            >
                              {m.content}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.25rem] border border-border bg-secondary text-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-center rounded-[0.25rem] border border-border bg-secondary px-4 py-2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-3">
              <form
                onSubmit={onSubmit}
                className="flex items-center gap-2 rounded-[0.25rem] border border-border bg-secondary p-1"
              >
                <input
                  ref={inputRef}
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  value={input}
                  placeholder="Ask me anything..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  autoFocus
                />
                <Button
                  id="chat-submit-btn"
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input?.trim()}
                  className="h-8 w-8 shrink-0 rounded-[0.25rem] bg-primary hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
      </div>
    </div>
  );
};

export default ChatWidget;
