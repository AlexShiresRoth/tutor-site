import React from "react"
import PropTypes from "prop-types"

//TODO add a progress bar for quiz
//TODO add a timer for quiz
//TODO add a slide to next question feature
//TODO add an answer check
//TODO add an instruction modal which will start quiz

class QuizMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      currentQuestionIndex: 0,
      activeIndex: null,
      progressBar: 0,
      questions: null,
    }
  }

  setAnswerState = (e, index) => {
    //add selected state to answer
    e.persist()

    const name = e.target.childNodes[0].name
      ? e.target.childNodes[0].name
      : e.target.parentNode.childNodes[0].name

    const value = e.target.childNodes[0].value
      ? e.target.childNodes[0].value
      : e.target.parentNode.childNodes[0].value

    //switch answer if a different answer of the same key is selected
    this.setState(prevState => {
      return {
        answers: [
          ...prevState.answers.filter(answer => {
            if (name in answer) return null
            return answer
          }),
          { [name]: value },
        ],
      }
    })
  }

  //set active class for quiz choices
  setActiveState = (e, index) => {
    e.persist()
    e.target.childNodes[0].type === "radio"
      ? (e.target.childNodes[0].checked = true)
      : (e.target.parentNode.childNodes[0].checked = true)

    this.setState({
      activeIndex: index,
    })
  }

  componentDidMount() {
    const { quiz } = this.props
    this.setState({
      questions: quiz.length,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.answers.length !== prevState.answers.length) {
      this.setState({
        progressBar: (this.state.answers.length / this.state.questions) * 100,
      })
    }
  }

  render() {
    console.log(this.state)
    const { quiz, quizStyles } = this.props

    const quizMap = quiz.map((ques, i) => {
      return (
        <div className={quizStyles.question}>
          <div className={quizStyles.question__num}>
            <p>Question {ques.num}</p>
            <button>Next</button>
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
                <div
                  className={`${quizStyles.input__row} ${
                    this.state.activeIndex === i ? quizStyles.active : ""
                  }`}
                  onClick={e => {
                    this.setAnswerState(e)
                    this.setActiveState(e, i)
                  }}
                  key={i}
                >
                  <input
                    type="radio"
                    name={ques.name}
                    value={choice.qNum}
                  ></input>
                  <label for={choice.qNum}>
                    {choice.qNum}: {choice.ans}
                  </label>
                </div>
              )
            })}
          </form>
        </div>
      )
    })

    return (
      <>
        <div className={quizStyles.progress__bar}>
          <div
            className={quizStyles.progress__bar__fill}
            style={{ width: `${this.state.progressBar}%` }}
          ></div>
        </div>
        <div className={quizStyles.quiz}>{quizMap}</div>
        <button disabled>Submit Answers</button>
      </>
    )
  }
}

QuizMap.propTypes = {
  quiz: PropTypes.object.isRequired,
}

export default QuizMap
