import { useState } from 'react'
import produce from 'immer'

/**
 * Creates wrapped `useState`.
 *
 * @param {Any} initialState
 * @returns {[Any, Function]}
 */

const useImmerState = initialState => {
  const [ state, setState ] = useState(initialState)

  const setImmerState = setter => setState(produce(setter))

  return [state, setImmerState]
}

export default useImmerState
