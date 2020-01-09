import { createStore } from "redux"
import { reducer } from "./reducer"

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState)
}
