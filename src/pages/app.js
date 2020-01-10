import React from "react"
import { Router as MyRouter } from "@reach/router"
import { Services } from "../modules/Services"
const Router = () => {
  return (
    <MyRouter>
      <Services path="/app/Services/"></Services>
    </MyRouter>
  )
}

export default Router
