import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Quiz.module.css';
import Image from 'next/image';
import { questions } from '@/data/questions';
import BackButton from '@/components/back';

// Define base background colors per player
const playerColors = ['#FAA2F2', '#F05B30', '#0EAAE8', '#0ED973'];

// Define the full turn texts for each player
const playerTurnTexts = [
  "cherry charm’s turn to prove the fact",
  "spicy pumpkin’s turn to prove the fact",
  "moody blue’s turn to prove the fact",
  "funky avocado’s turn to prove the fact"
];

export default function QuizPage() {
  const router = useRouter();
  const { playerIndex, aantal, questionIndex } = router.query;

  if (!router.isReady) return <div>Loading...</div>;

  const totalPlayers = parseInt(aantal, 10) || playerColors.length;
  const initialPlayerIndex = parseInt(playerIndex, 10) || 0;
  const initialQuestionIndex = parseInt(questionIndex, 10) || 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(initialPlayerIndex);
  const [answerStatus, setAnswerStatus] = useState('none'); // 'none', 'correct', or 'wrong'
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false); // Delayed button visibility

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      router.replace('/results');
      return;
    }
  }, [currentQuestionIndex, router]);

  const currentQuestion = questions[currentQuestionIndex] || null;

  if (!currentQuestion) {
    return null;
  }

  useEffect(() => {
    if (!currentQuestion || typeof currentQuestion.correctAnswer !== 'string' || !Array.isArray(currentQuestion.wrongAnswers)) {
      router.replace('/results');
      return;
    }

    const allAnswers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers];
    const shuffled = [...allAnswers].sort(() => Math.random() - 0.5);

    setShuffledAnswers(shuffled);
    setSelectedAnswerIndex(null);
    setAnswerStatus('none');
    setShowNextButton(false);
  }, [currentQuestionIndex]); // Shuffle only when the question changes

  const handleAnswerClick = (answer, index) => {
    if (answerStatus !== 'none') return;
    setSelectedAnswerIndex(index);

    if (answer === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      setShowNextButton(true); // Immediately show button when correct
    } else {
      setAnswerStatus('wrong');
      setTimeout(() => {
        setShowNextButton(true); // Delay showing the button when wrong
      }, 1500);
    }
  };

  const handleSolve = () => {
    if (!showNextButton) return; // Ensure button delay is respected

    if (answerStatus === 'correct') {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Only change question on correct answer
    }

    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % totalPlayers); // Always change player
    setAnswerStatus('none');
    setSelectedAnswerIndex(null);
    setShowNextButton(false);
  };

  let backgroundColor = playerColors[currentPlayerIndex] || '#FFFFFF';
  if (answerStatus === 'wrong') {
    backgroundColor = '#CCCCCC';
  }

  const playerText = answerStatus === 'wrong' ? "Sorry that's wrong" : playerTurnTexts[currentPlayerIndex];

  return (
    <div className={styles.achtergrond} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.small_text}>{playerText}</div>

        <div className={`${styles.big_text} ${answerStatus === 'correct' ? styles.correctBar : ''}`}>
          {currentQuestion.question}
        </div>

        <div className={styles.answersContainer}>
          {shuffledAnswers.map((answer, index) => {
            const answerClass =
              selectedAnswerIndex === index && answerStatus === 'correct'
                ? `${styles.item} ${styles.correctAnswer}`
                : styles.item;
            return (
              <div 
                key={index}
                className={answerClass}
                onClick={() => handleAnswerClick(answer, index)}
              >
                {answer}
              </div>
            );
          })}
        </div>

        {/* Button always present but hidden when inactive */}
        <div 
          className={styles.button} 
          onClick={showNextButton ? handleSolve : undefined} 
          style={{ visibility: showNextButton ? 'visible' : 'hidden', opacity: showNextButton ? 1 : 0 }}
        >
          Next player
        </div>

        <Image src="langlogo.svg" width={176.78} height={24.72} className={styles.logo} />
      </div>
    </div>
  );
}
