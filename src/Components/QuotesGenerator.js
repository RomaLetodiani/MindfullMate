import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Generator from './Generator';
import Loading from './Loading';

const QuotesGenerator = ({ setIsOn, isOn }) => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuotes = () => {
    axios
      .get('https://romaletodiani.github.io/MindfullMate/db.json')
      .then((res) => {
        console.log(res.data.quotes);
        if (res.data.quotes.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * res.data.quotes.length
          );
          const selectedQuote = res.data.quotes[randomIndex];
          setCurrentQuote(selectedQuote);
        } else {
          setError('No quotes found.');
        }
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      {currentQuote ? (
        <Generator
          error={error}
          currentText={currentQuote.quote}
          fetchdata={fetchQuotes}
          currentAuthor={currentQuote.author}
          title={'Quote'}
          setIsOn={setIsOn}
          isOn={isOn}
        />
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default QuotesGenerator;
