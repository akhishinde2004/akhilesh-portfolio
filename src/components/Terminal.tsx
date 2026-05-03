import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import "./styles/Terminal.css";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <div>
          Welcome to AkhileshOS v1.0.0
          <br />
          Type <span className="term-highlight">'help'</span> to see a list of available commands.
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    if (cmd === "") {
      setHistory([...history, { command: "", output: "" }]);
      return;
    }

    switch (cmd) {
      case "help":
        output = (
          <div>
            Available commands:
            <br />
            <span className="term-highlight">whoami</span>   - Print bio
            <br />
            <span className="term-highlight">skills</span>   - List tech stack
            <br />
            <span className="term-highlight">projects</span> - Show featured work
            <br />
            <span className="term-highlight">clear</span>    - Clear terminal
            <br />
            <span className="term-highlight">contact</span>  - Show contact info
          </div>
        );
        break;
      case "whoami":
        output = "Akhilesh Shinde - Full Stack Developer & Student. Passionate about building scalable systems and AI-powered tools.";
        break;
      case "skills":
        output = "React.js, Next.js, Node.js, Express, Spring Boot, Python, TensorFlow, MongoDB, PostgreSQL, Docker.";
        break;
      case "projects":
        output = "1. Soyabean Disease Detection (AI)\n2. HireReady (AI Resume Screener)\n3. CampusCart (Marketplace)\n4. DevPulse (GitHub Dashboard)";
        break;
      case "contact":
        output = "Email: akhishinde04@gmail.com | GitHub: @akhishinde2004";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo rm -rf /":
      case "sudo rm -rf /*":
        output = <span style={{ color: "red" }}>Nice try! But you don't have root privileges here. 🛑</span>;
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="terminal-overlay">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-title">guest@akhilesh-os:~</div>
          <button className="terminal-close" onClick={onClose} data-cursor="pointer">
            <FiX />
          </button>
        </div>
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {history.map((item, index) => (
            <div key={index} className="terminal-history-item">
              {item.command && (
                <div className="terminal-prompt">
                  <span className="term-user">guest@akhilesh-os</span>
                  <span className="term-colon">:</span>
                  <span className="term-path">~</span>
                  <span className="term-symbol">$</span> {item.command}
                </div>
              )}
              <div className="terminal-output">{item.output}</div>
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="term-user">guest@akhilesh-os</span>
            <span className="term-colon">:</span>
            <span className="term-path">~</span>
            <span className="term-symbol">$</span>
            <form onSubmit={handleCommand} style={{ display: "inline-block", width: "calc(100% - 200px)" }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                className="terminal-input"
              />
            </form>
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
