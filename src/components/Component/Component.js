import create from 'zustand'
import produce from 'immer'
import { shallow } from '../../utils'

const useComponentStore = create((set) => ({
  components: {},
  registerComponent: (type, Component) => set(
    produce((state) => {
      state.components[type] = Component
    })
  )
}))

export const components = useComponentStore.getState().components

export function registerComponent(name, Component) {
  useComponentStore.getState().registerComponent(name, Component)
}

export default function Component(props) {
  const C = useComponentStore(state => state.components[props.type], shallow)

  return C ? <C {...props} /> : null
}