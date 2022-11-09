import React, { memo } from 'react'
import Tippy from '@tippyjs/react'
import './Tooltip.module.css'
import { isMobile } from 'react-device-detect'

function Tooltip({ title, children, ...rest }) {
  if (!title) return children

  const config = {
    theme: 'light',
    animation: 'scale',
    content: title,
    trigger: 'mouseenter',
    disabled: isMobile,
    ...rest
  }

  return (
    <Tippy {...config}>
      {children}
    </Tippy>
  )
}

export default memo(Tooltip)