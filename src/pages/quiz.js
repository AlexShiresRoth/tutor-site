import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizHeader from "../components/quiz/QuizHeader"

const quiz = props => {
  return (
    <Layout>
      <SEO title="Quiz" />
      <QuizHeader />
    </Layout>
  )
}

quiz.propTypes = {}

export default quiz
