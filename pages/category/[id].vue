<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        {{ category.name }}
      </h1>

      <ProductListing :products="category.products.items" />
    </div>
  </section>
</template>

<script setup lang="ts">
const query = gql`
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

const route = useRoute()

const { data } = await useAsyncQuery<any>(query, { id: route.params.id })

const category = computed(() => data.value.categoryList[0])
</script>
