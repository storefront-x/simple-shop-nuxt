export default gql`
  query {
    categoryList {
      name
      children {
        id
        name
      }
    }
  }
`
