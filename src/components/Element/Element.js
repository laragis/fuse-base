import { isReactComponent } from '../../utils'
import { isValidElement } from 'react'

function Element({case: Component, defaultCase: DefaultComponent, ...props}){
  if(isValidElement(Component)) return Component
  if(isReactComponent(Component)) return <Component />
  return <DefaultComponent {...props} {...Component}/>
}

export default Element