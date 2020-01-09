import { GET_CURRENT_PAGE } from "./types"

const initialState = {
  pageTitle: "Home",
  loading: true,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case GET_CURRENT_PAGE:
      return {
        ...state,
        pageTitle: payload,
        loading: false,
      }
    default:
      return state
  }
}
