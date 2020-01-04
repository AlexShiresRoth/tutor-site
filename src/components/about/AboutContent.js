import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allWordpressPost {
        edges {
          node {
            content
          }
        }
      }
    }
  `)
  return data.allWordpressPost.edges[0].node.content
}
