import React, {memo} from 'react'
import Tippy from '@tippyjs/react';
import './Tooltip.module.css'

function Tooltip({title, children, ...rest}){
  if(!title) return children

  const config = {
    theme: 'light',
    animation: 'scale',
    content: title,
    trigger: 'mouseenter',
    ...rest
  }

  return (
    <Tippy {...config}>
      {children}
    </Tippy>
  )
}

export default memo(Tooltip)