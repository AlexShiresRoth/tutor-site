import React from "react"
import PropTypes from "prop-types"
import quizStyles from "./quizstyles/ResultsDisplay.module.scss"
import { MdHighlightOff, MdDone } from "react-icons/md"

const ResultsDisplay = ({ results, quiz, answers }) => {
  const userAnswers = answers.map((ques, i) => Object.values(ques)[0])
  const correctAnswers = quiz.map((ques, i) => {
    return (
      <div className={quizStyles.question__result} key={i}>
        <div className={quizStyles.result__heading}>
          <h4>Question: {ques.num}</h4>
          {ques.answer === userAnswers[i] ? (
            <MdDone className={quizStyles.correct} />
          ) : (
            <MdHighlightOff className={quizStyles.incorrect} />
          )}
        </div>
        <p>{ques.question}</p>
        <p>{ques.problem}</p>
        <p>Correct Answer: {ques.answer}</p>
        <p>
          Your Answer:{" "}
          <span
            className={
              userAnswers[i] === ques.answer
                ? quizStyles.correct
                : quizStyles.incorrect
            }
          >
            {userAnswers[i]}
          </span>
        </p>
      </div>
    )
  })

  const removeZeros = () => {
    const splitRes = results.split(".")
    return splitRes[1] === "00" ? splitRes[0] : results
  }

  return (
    <div className={quizStyles.results__container}>
      <div className={quizStyles.percent__display}>
        <h2>{removeZeros()}% Correct</h2>
      </div>
      <div className={quizStyles.answers}>{correctAnswers}</div>
    </div>
  )
}

ResultsDisplay.propTypes = {
  results: PropTypes.string.isRequired,
  quiz: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
}

export default ResultsDisplay
