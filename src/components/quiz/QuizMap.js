import React from "react"
import PropTypes from "prop-types"

const QuizMap = ({ quiz, quizStyles }) => {
  const quizMap = quiz.map((ques, i) => {
    return (
      <div className={quizStyles.quiz}>
        <div className={quizStyles.question}>
          <div className={quizStyles.question__num}>
            <p>Question {ques.num}</p>
          </div>
          <div className={quizStyles.question__question}>
            <p>{ques.question}</p>
          </div>
          <div className={quizStyles.question__problem}>
            <p>{ques.problem}</p>
          </div>
          <form className={quizStyles.choices}>
            {ques.choices.map((choice, i) => {
              return (
                <>
                  <input type="radio" name="answer"></input>
                  <label>{choice}</label>
                </>
              )
            })}
          </form>
        </div>
      </div>
    )
  })
  return <>{quizMap}</>
}

QuizMap.propTypes = {
  quiz: PropTypes.object.isRequired,
}

export default QuizMap
