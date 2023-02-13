import MAGENTO_URL from '../../config/MAGENTO_URL'

export default defineEventHandler(async (event) => {
  const response = await fetch(MAGENTO_URL + event.path)
  const json = await response.json()
  return json
})
