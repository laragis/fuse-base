import React from 'react'
import { isBoolean } from 'lodash'
import { IconButton } from '@mui/material'
import FuseSvgIcon from '../FuseSvgIcon/FuseSvgIcon'
import Tooltip from '../Tooltip/Tooltip'
import { useMemo } from 'react'

function ToolbarItem(props){
  const {
    icon, label, visible = true, onClick, btnSize, iconSize, ...rest
  } = props
  const tooltip = isBoolean(props.tooltip) ? label : props.tooltip

  const shownContent = useMemo(() => visible && icon, [visible, icon])

  const content = shownContent && (
    <IconButton size={btnSize} onClick={onClick}>
      {icon && <FuseSvgIcon size={iconSize}>{icon}</FuseSvgIcon>}
    </IconButton>
  )

  if(tooltip && shownContent) return (
    <Tooltip title={tooltip}>
      {content}
    </Tooltip>
  )

  return content
}

ToolbarItem.defautProps = {
  onClick: () => {},
  iconSize: 18
}

export default ToolbarItem