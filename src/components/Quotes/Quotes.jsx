import { useState, useEffect } from "react";
import "../Quotes/Quotes.css";
import quotes from "../../data/quotes.json";

/*function Quotes() {
  return (
    <div>
      <h1>Quotes on Motivation and Self-Esteem</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.message}</li>
        ))}
      </ul>
    </div>
  );
}*/

function Quotes() {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const updateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex].message);
    };

    updateQuote();

    const hourInMillis = 60 * 60 * 1000;
    const intervalId = setInterval(updateQuote, hourInMillis);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quote">
      <p>{currentQuote}</p>
    </div>
  );
}

export default Quotes;
