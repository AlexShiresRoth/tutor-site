import React from "react"
import PropTypes from "prop-types"
import quizStyles from "./quizstyles/StartQuiz.module.scss"
import { quizRules } from "./quiz"
const StartQuiz = ({ startQuiz }) => {
  return (
    <div className={quizStyles.start__container}>
      <div className={quizStyles.quiz__rules}>
        <h2>Quiz Rules:</h2>
        {quizRules.map((rule, i) => {
          return (
            <div className={quizStyles.rules__container}>
              <div className={quizStyles.rule__row}>
                <p>{rule.ruleNum}.</p>
                <p>{rule.rule}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button onClick={e => startQuiz(e)}>Start Quiz?</button>
    </div>
  )
}

StartQuiz.propTypes = {
  startQuiz: PropTypes.func.isRequired,
}

export default StartQuiz
