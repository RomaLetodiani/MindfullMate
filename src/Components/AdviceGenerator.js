import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Generator from './Generator';
import Loading from './Loading';

const AdviceGenerator = ({ setIsOn, isOn }) => {
  const [currentAdvice, setCurrentAdvice] = useState(null);
  const [error, setError] = useState(null);

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        console.log(res.data.slip);

        setCurrentAdvice(res.data.slip);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      {currentAdvice ? (
        <Generator
          error={error}
          currentText={currentAdvice.advice}
          fetchdata={fetchAdvice}
          title={'Advice'}
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

export default AdviceGenerator;
