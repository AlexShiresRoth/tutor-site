import React from "react"
import PropTypes from "prop-types"
import quizStyles from "./quizstyles/QuizHeader.module.scss"
import { quiz } from "./quiz"
import QuizMap from "./QuizMap"
const QuizHeader = props => {
  return (
    <header className={quizStyles.header}>
      <div className={quizStyles.title__container}>
        <h1>Quiz</h1>
      </div>
      <div className={quizStyles.quiz__container}>
        <QuizMap quiz={quiz} quizStyles={quizStyles} />
        <button disabled>Submit Answers</button>
      </div>
    </header>
  )
}

QuizHeader.propTypes = {}

export default QuizHeader
