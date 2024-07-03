import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const QuizResult = ({ score }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (score >= 65) { // Assuming a good score is above 64.99 
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000); // Show confetti for 3 seconds
    }
  }, [score]);

  return (
    <div className="quiz-result">
      {showConfetti && (
        <Confetti
          width={width * 0.74} // 70% of the screen width
          height={height}
          numberOfPieces={200} // Adjust number of pieces for density
          gravity={1.7} // Make confetti fall faster
        />
      )}
    </div>
  );
};

export default QuizResult;

