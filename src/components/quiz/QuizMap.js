import React from "react"
import PropTypes from "prop-types"
import Choices from "./Choices"
import ResultsDisplay from "./ResultsDisplay"
//TODO add a timer for quiz
//TODO add an answer check
//TODO add show results
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
      frameCount: 0,
      loading: true,
      finished: false,
      results: "",
    }
    this.quizRef = React.createRef()
    this.animRef = React.createRef()
    this.setActiveState = this.setActiveState.bind(this)
    this.setCurrentIndex = this.setCurrentIndex.bind(this)
    this.setAnswerState = this.setAnswerState.bind(this)
  }

  setAnswerState = e => {
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

  setCurrentIndex = () => {
    this.setState(prevState => ({
      currentQuestionIndex: (prevState.currentQuestionIndex += 1),
    }))
  }

  scrollToNextQuestion = () => {
    if (this.quizRef.current) {
      this.quizRef.current.scrollLeft = this.quizRef.current.scrollLeft += this.quizRef.current.getBoundingClientRect().width

      this.animRef = requestAnimationFrame(this.scrollToNextQuestion)
    }
    cancelAnimationFrame(this.animRef)
  }

  checkAnswers = () => {
    const { quiz } = this.props
    const { answers } = this.state
    const correct = quiz.map(ques => ques.answer)
    const choice = answers.map((ques, i) => Object.values(ques)[0])
    const matches = correct.filter((answer, i) => answer === choice[i])

    this.getPercentageCorrect(matches.length, quiz.length)
  }

  getPercentageCorrect = (matches, quiz) => {
    const score = ((matches / quiz) * 100).toFixed(2).toString()
    return this.setState({
      results: score,
    })
  }

  setQuizState = e => {
    e.preventDefault()
    this.checkAnswers()
    return this.setState({
      finished: true,
    })
  }

  componentDidMount() {
    const { quiz } = this.props
    this.setState({
      questions: quiz.length,
      loading: false,
      finished: false,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.answers.length !== prevState.answers.length) {
      this.setState({
        progressBar: (this.state.answers.length / this.state.questions) * 100,
      })
    }
    cancelAnimationFrame(this.animRef)
  }

  render() {
    const { quiz, quizStyles } = this.props
    const {
      currentQuestionIndex,
      activeIndex,
      results,
      progressBar,
      answers,
    } = this.state

    const quizMap = quiz.map((ques, i) => {
      return (
        <div className={quizStyles.question} key={i}>
          <div className={quizStyles.question__num}>
            <p>Question {ques.num}</p>
            <span>Time: 10:00</span>
            {progressBar !== 100 ? (
              <button
                onClick={e => this.scrollToNextQuestion(e)}
                disabled={i === currentQuestionIndex}
              >
                Next
              </button>
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
              setActiveState={this.setActiveState}
              setAnswerState={this.setAnswerState}
              setCurrentIndex={this.setCurrentIndex}
            />
          </form>
        </div>
      )
    })

    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className={quizStyles.progress__bar}>
          <div
            className={quizStyles.progress__bar__fill}
            style={{ width: `${this.state.progressBar}%` }}
          ></div>
        </div>
        <div className={quizStyles.quiz} ref={this.quizRef}>
          {this.state.finished ? (
            <ResultsDisplay
              quizStyles={quizStyles}
              results={results}
              quiz={quiz}
              answers={answers}
            />
          ) : (
            quizMap
          )}
        </div>
        <button
          disabled={this.state.progressBar !== 100}
          onClick={e => this.setQuizState(e)}
        >
          Submit Answers
        </button>
      </>
    )
  }
}

QuizMap.propTypes = {
  quiz: PropTypes.object.isRequired,
}

export default QuizMap
