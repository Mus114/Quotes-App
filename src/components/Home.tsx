import React, { useEffect, useState } from 'react';
import Quote from './Quote.tsx';

const Home: React.FC = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data.results))
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div>
      <h2>Best Quotes</h2>
      {quotes.map((quote: any, index: number) => (
        <Quote key={index} text={quote.content} author={quote.author} />
      ))}
    </div>
  );
};

export default Home;

