import React from "react"
import PropTypes from "prop-types"
import Choices from "./Choices"
import quizStyles from "./quizstyles/QuizHeader.module.scss"

const QuizMap = ({
  progressBar,
  setCurrentIndex,
  setActiveState,
  setAnswerState,
  activeIndex,
  quiz,
  currentQuestionIndex,
  scrollToNextQuestion,
  time,
}) => {
  const quizMap = quiz.map((ques, i) => {
    return (
      <div className={quizStyles.question} key={i}>
        <div className={quizStyles.question__num}>
          <p>Question {ques.num}</p>
          {progressBar !== 100 ? (
            <>
              <span>Time: {time}s</span>
              <button
                onClick={e => scrollToNextQuestion(e)}
                disabled={i === currentQuestionIndex}
              >
                Next
              </button>
            </>
          ) : null}
        </div>
        <div className={quizStyles.question__question}>
          <p>{ques.question}</p>
        </div>
        <div className={quizStyles.question__problem}>
          <p>{ques.problem}</p>
        </div>
        <form className={quizStyles.choices}>
          <Choices
            choices={ques.choices}
            activeIndex={activeIndex}
            quizStyles={quizStyles}
            ques={ques}
            i={i}
            setActiveState={setActiveState}
            setAnswerState={setAnswerState}
            setCurrentIndex={setCurrentIndex}
          />
        </form>
      </div>
    )
  })
  return <>{quizMap}</>
}

QuizMap.propTypes = {
  progressBar: PropTypes.number.isRequired,
  setActiveState: PropTypes.func.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  setAnswerState: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  quiz: PropTypes.array.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  scrollToNextQuestion: PropTypes.func.isRequired,
}

export default QuizMap
