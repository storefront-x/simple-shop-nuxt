export default gql`
  query ($id: String!) {
    categoryList(filters: { ids: { eq: $id } }) {
      id
      name
      products {
        items {
          id
          name
          thumbnail {
            url
          }
          categories {
            name
          }
          price_range {
            minimum_price {
              final_price {
                value
              }
            }
          }
        }
      }
    }
  }
`
