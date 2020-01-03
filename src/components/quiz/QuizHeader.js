import React from "react"
import PropTypes from "prop-types"
import quizStyles from "./quizstyles/QuizHeader.module.scss"
import { quiz } from "./quiz"
import QuizControl from "./QuizControl"
const QuizHeader = props => {
  return (
    <header className={quizStyles.header}>
      <div className={quizStyles.title__container}>
        <h1>Quiz</h1>
      </div>
      <div className={quizStyles.quiz__container}>
        <QuizControl quiz={quiz} quizStyles={quizStyles} />
      </div>
    </header>
  )
}

QuizHeader.propTypes = {}

export default QuizHeader
