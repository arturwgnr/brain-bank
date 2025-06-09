import { useEffect, useState } from "react";

function QuoteBox() {
  const quotes = [
    "Discipline is remembering what you want most.",
    "Your future is created by what you do today, not tomorrow.",
    "The pain of discipline is nothing like the pain of regret.",
    "Focus is the gateway to all thinking.",
    "You don't rise to the level of your goals, you fall to the level of your systems.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="quote-box">
      <p className="quote-text">"{quote}"</p>
    </div>
  );
}

export default QuoteBox;
