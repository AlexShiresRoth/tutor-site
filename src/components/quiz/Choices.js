import React from "react"
import PropTypes from "prop-types"

const Choices = ({
  choices,
  quizStyles,
  activeIndex,
  ques,
  setActiveState,
  setAnswerState,
  setCurrentIndex,
  i,
}) => {
  const choicesMap = choices.map((choice, index) => {
    return (
      <div
        className={`${quizStyles.input__row} ${
          activeIndex === index ? quizStyles.active : ""
        }`}
        onClick={e => {
          setAnswerState(e)
          setActiveState(e, index)
          setCurrentIndex(i)
        }}
        key={index}
      >
        <input type="radio" name={ques.name} value={choice.qNum}></input>
        <label for={choice.qNum}>
          {choice.qNum}: {choice.ans}
        </label>
      </div>
    )
  })
  return <>{choicesMap}</>
}

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  quizStyles: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired,
  ques: PropTypes.object.isRequired,
  setActiveState: PropTypes.func.isRequired,
  setAnswerState: PropTypes.func.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
}

export default Choices
