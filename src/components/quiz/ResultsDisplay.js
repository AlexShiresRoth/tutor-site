import React from "react"
import PropTypes from "prop-types"

const ResultsDisplay = ({ results, quizStyles, quiz, answers }) => {
  const compareAnswers = () => {
    const userAnswers = answers.map((ques, i) => Object.values(ques)[0])
    const correctAnswers = quiz.map((ques, i) => {
      return (
        <div key={i}>
          <p>{ques.question}</p>
          <p>{ques.problem}</p>
          <p>Correct Answer:{ques.answer}</p>
          <p>Your Answer: {userAnswers[i]}</p>
        </div>
      )
    })

    return correctAnswers
  }

  return (
    <div className={quizStyles.results__container}>
      <h1>{results}% Correct</h1>
      <div>{compareAnswers()}</div>
    </div>
  )
}

ResultsDisplay.propTypes = {
  results: PropTypes.string.isRequired,
  quizStyles: PropTypes.object.isRequired,
  quiz: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
}

export default ResultsDisplay
