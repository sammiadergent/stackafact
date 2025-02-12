import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import styles from '@/styles/Quiz.module.css';
import Image from 'next/image';
import { questions } from '@/data/questions'; // Ensure the path is correct

// Define base background colors per player (adjust as needed)
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

  // Wait until query parameters are available
  if (!router.isReady) return <div>Loading...</div>;

  // Read total number of players from "aantal" (or default to available players)
  const totalPlayers = parseInt(aantal, 10) || playerColors.length;
  const initialPlayerIndex = parseInt(playerIndex, 10) || 0;
  const initialQuestionIndex = parseInt(questionIndex, 10) || 0;

  // State for current question and current player
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(initialPlayerIndex);
  const [answerStatus, setAnswerStatus] = useState('none'); // 'none', 'correct', or 'wrong'
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  // State to store shuffled answers for the current question
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // End the game when we've exhausted all questions
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      router.push('/results');
    }
  }, [currentQuestionIndex, router]);

  // Get the current question from the database
  const currentQuestion = questions[currentQuestionIndex];

  // In case there is no current question (should be handled by useEffect), render nothing.
  if (!currentQuestion) {
    return null;
  }

  // When the current question changes, shuffle the answers once
  useEffect(() => {
    const allAnswers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers];
    // Shuffle using a random sort
    const shuffled = [...allAnswers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
    // Reset answer selection and status for the new question
    setSelectedAnswerIndex(null);
    setAnswerStatus('none');
  }, [currentQuestion]);

  // When an answer is clicked…
  const handleAnswerClick = (answer, index) => {
    if (answerStatus !== 'none') return; // Prevent multiple clicks
    setSelectedAnswerIndex(index);

    if (answer === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
      // When wrong, temporarily change the overall background to grey and allow a retry.
      setTimeout(() => {
        setAnswerStatus('none');
        setSelectedAnswerIndex(null);
      }, 1500);
    }
  };

  // When the "Next player" button is clicked (only if the answer is correct)
  const handleSolve = () => {
    if (answerStatus !== 'correct') return; // Only proceed if the answer is correct

    // Advance to the next player (using modulo to wrap around)
    const nextPlayerIndex = (currentPlayerIndex + 1) % totalPlayers;
    setCurrentPlayerIndex(nextPlayerIndex);
    // Advance to the next question in the database
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // Reset answer status and selection for the new turn
    setAnswerStatus('none');
    setSelectedAnswerIndex(null);
  };

  // Determine the overall background color:
  // Use the current player's color unless the answer is wrong (then use grey).
  let backgroundColor = playerColors[currentPlayerIndex] || '#FFFFFF';
  if (answerStatus === 'wrong') {
    backgroundColor = '#CCCCCC';
  }

  return (
    <div className={styles.achtergrond} style={{ backgroundColor }}>
      <Header />
      <div className={styles.container}>
        {/* Display the current player's turn text */}
        <div className={styles.small_text}>
          {playerTurnTexts[currentPlayerIndex]}
        </div>
        {/* Display the question.
            When the answer is correct, add a class to turn the question bar green. */}
        <div className={`${styles.big_text} ${answerStatus === 'correct' ? styles.correctBar : ''}`}>
          {currentQuestion.question}
        </div>
        <div className={styles.answersContainer}>
          {shuffledAnswers.map((answer, index) => {
            // If the answer was selected and is correct, add a special CSS class.
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
        {/* The "Next player" button advances the turn if the answer is correct */}
        <div className={styles.button} onClick={handleSolve}>
          Next player
        </div>  
        <div className={styles.footer}>
          <Image src="/logo.svg" width={176.78} height={24.72} alt="logo" />
        </div>
      </div>
    </div>
  );
}
