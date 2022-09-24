import { useEffect } from 'react'
import emitter from '../libs/emitter'
import { map } from 'lodash'

function useEvents(handlers){
  useEffect(
    function addEventHandlers() {
      map(handlers, (handler, type) => emitter.on(type, handler))

      return function removeEventHandlers() {
        map(handlers, (handler, type) => delete emitter[type])
      }
    },
    [emitter, handlers],
  )
}

export default useEvents