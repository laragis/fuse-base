import React, { useState } from 'react'
import { isBoolean, isEmpty } from 'lodash'
import FuseSvgIcon from '../FuseSvgIcon/FuseSvgIcon'
import Tooltip from '../Tooltip/Tooltip'
import { useMemo } from 'react'
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'

function ToolbarItem(props) {
  const {
    icon, label, visible = true, onClick, btnSize, iconSize, items = [], color, ...rest
  } = props

  const tooltip = isBoolean(props.tooltip) ? label : props.tooltip


  const shownContent = useMemo(() => visible && icon, [visible, icon])

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget)
  const handleClose = (e, callback) => {
    setAnchorEl(null)
    callback && callback()
  }

  const content = shownContent && (
    <IconButton size={btnSize} onClick={handleClick} color={color}>
      {icon && <FuseSvgIcon size={iconSize}>{icon}</FuseSvgIcon>}
    </IconButton>
  )

  const menuContent = shownContent && !isEmpty(items) && (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={e => handleClose(e)}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {items.map((item, key) => (
        <MenuItem
          key={key}
          onClick={e => handleClose(e, item.onClick)}
        >
          {item.icon && (
            <ListItemIcon>
              <FuseSvgIcon>{item.icon}</FuseSvgIcon>
            </ListItemIcon>
          )}

          {item.label && (<ListItemText>{item.label}</ListItemText>)}
        </MenuItem>
      ))}
    </Menu>
  )

  if (tooltip && shownContent) return (
    <>
      <Tooltip title={tooltip}>
        {content}
      </Tooltip>
      {menuContent}
    </>
  )

  return (
    <>
      {content}
      {menuContent}
    </>
  )
}

ToolbarItem.defautProps = {
  iconSize: 18
}

export default ToolbarItem