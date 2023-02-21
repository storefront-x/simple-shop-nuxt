# Nuxt Shop

This is a simple e-shop implementation in Nuxt 3.
It's equivalent implementation in Storefront X can be found [here](https://github.com/storefront-x/simple-shop-sfx).

The main difference is that Nuxt 3 implementation has all directories inside the repository root,
while Storefront X implementation has everything inside one module called eshop.

## Advantages

* No need to import most common imports (components, vue exports, ...)
  * Hard to say how will this scale
* Fully fledged GraphQL Apollo adapter

## Disadvantages

* Large bundle size (339kB without GZip)
  * Partly caused by the @nuxtjs/apollo dependency
* Cmd+Click (navigate to file) does not work for auto-imported components
* Inconsistent imports
  * GraphQL queries and configs have to be imported while components/composables do not
* Overriding only for components, composables, layouts, pages and server routes/middleware.
* Nuxts Apollo Adapter does no support reactivity
  * Can't react to change in query variables unless the setup method is re-executed
