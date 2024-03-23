//import React from "react";
import React, { useState, useEffect } from "react";
import "../Quotes/Quotes.css";
import quotes from "../../quotes.json";

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

    updateQuote(); // Mise à jour initiale de la citation

    const hourInMillis = 60 * 60 * 1000; // 1 heure en millisecondes
    const intervalId = setInterval(updateQuote, hourInMillis); //  la citation toutes les heures mise a jour

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{currentQuote}</p>
    </div>
  );
}

export default Quotes;
