/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// props provide same data to Layout as Page element will get
// including location, data, etc - you don't need to pass it

// You can delete this file if you're not using it
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
