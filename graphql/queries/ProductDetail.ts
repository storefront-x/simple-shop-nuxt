export default gql`
  query ($id: String!) {
    products(filter: { id: { eq: $id } }) {
      items {
        id
        name
        thumbnail {
          url
        }
      }
    }
  }
`
