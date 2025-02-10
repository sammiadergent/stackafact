import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { questions } from '../data/questions';

export default function QuestionPage() {
  const router = useRouter();
  const { code } = router.query;

  // Local state
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [info, setInfo] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    if (code) {
      // Find the question that matches the scanned code
      const foundQuestion = questions.find((q) => q.code === code);

      if (foundQuestion) {
        setQuestionText(foundQuestion.question);
        setCorrectAnswer(foundQuestion.correctAnswer);
        setInfo(foundQuestion.info);
      } else {
        setQuestionText('Unknown question code.');
      }
    }
  }, [code]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compare user’s answer to the correct answer
    if (
      userAnswer.trim().toLowerCase() ===
      correctAnswer.trim().toLowerCase()
    ) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Question Page</h1>
      <p>Code Scanned: {code}</p>

      {questionText && (
        <>
          <p>{questionText}</p>

          {/* If we have a valid question (meaning a known code), show the input */}
          {correctAnswer && (
            <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
              <input
                type="text"
                placeholder="Type your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button type="submit" style={{ marginLeft: '0.5rem' }}>
                Submit
              </button>
            </form>
          )}

          {/* Feedback */}
          {isAnswerCorrect === true && (
            <div style={{ color: 'green', marginTop: '1rem' }}>
              <p>Correct Answer!</p>
              <p>{info}</p>
            </div>
          )}
          {isAnswerCorrect === false && (
            <div style={{ color: 'red', marginTop: '1rem' }}>
              <p>Incorrect Answer. Try again!</p>
            </div>
          )}
        </>
      )}

      {!correctAnswer && questionText === 'Unknown question code.' && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          Sorry, we don’t recognize this code.
        </p>
      )}
    </div>
  );
}
