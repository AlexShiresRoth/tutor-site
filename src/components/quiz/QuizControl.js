import React from "react"
import PropTypes from "prop-types"
import ResultsDisplay from "./ResultsDisplay"
import StartQuiz from "./StartQuiz"
import QuizMap from "./QuizMap"

class QuizControl extends React.Component {
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
      start: false,
      results: "",
      time: 10,
      intervalId: null,
    }
    this.quizRef = React.createRef()
    this.animRef = React.createRef()
    this.handleTimer = this.handleTimer.bind(this)
    this.scrollToNextQuestion = this.scrollToNextQuestion.bind(this)
    this.setActiveState = this.setActiveState.bind(this)
    this.setCurrentIndex = this.setCurrentIndex.bind(this)
    this.setAnswerState = this.setAnswerState.bind(this)
    this.startQuiz = this.startQuiz.bind(this)
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
    this.setState({
      time: 10,
    })
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

  restartQuiz = e => {
    clearInterval(this.state.intervalId)
    e.preventDefault()
    this.setState(prevState => ({
      finished: false,
      progressBar: (prevState.progressBar -= prevState.progressBar),
      answers: [],
      currentQuestionIndex: 0,
      finished: false,
      results: "",
      time: 10,
    }))
    let intervalId = setInterval(() => {
      this.handleTimer()
    }, 1000)

    this.setState({ intervalId })
  }

  startQuiz = e => {
    e.preventDefault()

    this.setState({
      start: true,
    })
    let intervalId = setInterval(() => {
      this.handleTimer()
    }, 1000)
    this.setState({
      intervalId,
    })
  }

  handleTimer = () => {
    const { time, progressBar, currentQuestionIndex, intervalId } = this.state
    switch (true) {
      case time > 0:
        this.setState(prevState => ({
          time: (prevState.time -= 1),
        }))
        break
      case time <= 0 && progressBar !== 100:
        this.scrollToNextQuestion()
        this.setState(prevState => ({
          time: 10,
          currentQuestionIndex: (prevState.currentQuestionIndex += 1),
          answers: [
            ...prevState.answers,
            { [`answer${currentQuestionIndex + 1}`]: "" },
          ],
        }))
        break
      case progressBar >= 100:
        return clearInterval(intervalId)
      default:
        return clearInterval(intervalId)
    }
  }

  componentDidMount() {
    const { quiz } = this.props
    const { intervalId } = this.state
    clearInterval(intervalId)
    this.setState({
      questions: quiz.length,
      loading: false,
      finished: false,
      progressBar: 0,
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
      start,
      finished,
      time,
    } = this.state
    return !start ? (
      <StartQuiz startQuiz={this.startQuiz} />
    ) : (
      <>
        <div className={quizStyles.progress__bar}>
          <div
            className={quizStyles.progress__bar__fill}
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>

        {finished ? (
          <>
            <div className={quizStyles.quiz} ref={this.quizRef}>
              <ResultsDisplay
                quizStyles={quizStyles}
                results={results}
                quiz={quiz}
                answers={answers}
              />
            </div>
            <button onClick={e => this.restartQuiz(e)}>Retry Quiz?</button>
          </>
        ) : (
          <>
            <div className={quizStyles.quiz} ref={this.quizRef}>
              <QuizMap
                currentQuestionIndex={currentQuestionIndex}
                activeIndex={activeIndex}
                progressBar={progressBar}
                quiz={quiz}
                scrollToNextQuestion={this.scrollToNextQuestion}
                setAnswerState={this.setAnswerState}
                setActiveState={this.setActiveState}
                setCurrentIndex={this.setCurrentIndex}
                time={time}
              />
            </div>
            <button
              disabled={this.state.progressBar !== 100}
              onClick={e => this.setQuizState(e)}
            >
              Submit Answers
            </button>
          </>
        )}
      </>
    )
  }
}

QuizMap.propTypes = {
  quiz: PropTypes.object.isRequired,
}

export default QuizControl
