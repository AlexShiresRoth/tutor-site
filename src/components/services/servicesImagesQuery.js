import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allCloudinaryMedia(
        filter: { public_id: { regex: "/(tutoring-site/services)/" } }
      ) {
        edges {
          node {
            public_id
            id
            format
            type
            secure_url
          }
        }
      }
    }
  `)
  return data.allCloudinaryMedia.edges.map(edge => edge.node)
}
