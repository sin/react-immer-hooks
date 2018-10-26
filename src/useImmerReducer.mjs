import { useReducer } from 'react'
import produce from 'immer'

/**
 * Creates wrapped `useReducer`.
 *
 * @param {Any} initialState
 * @returns {[Any, Function]}
 */

const useImmerReducer = (reducer, initialState) =>
  useReducer(produce(reducer), initialState)

export default useImmerReducer
