import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Photo from './models/Photo'

export const AppState = reactive({
  /** @type {Photo[]} */
  results: [],
  /** @type {Photo} */
  activePhoto: null
})