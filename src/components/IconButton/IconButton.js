import * as React from 'react'
import { IconButton as MuiIconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import FuseSvgIcon from '../FuseSvgIcon/FuseSvgIcon'
import Tooltip from '../Tooltip/Tooltip'
import { isArray, isEmpty, pick, reject } from 'lodash'
import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'


function ButtonMenu({items, anchorEl, setAnchorEl}){
  const open = Boolean(anchorEl)
  const handleClose = (e, callback) => {
    setAnchorEl(null)
    callback && callback()
  }

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={e => handleClose(e)}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {items?.map((item, key) => (
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
}

const IconButton = React.forwardRef((props, ref) => {
  const { tooltip, color, icon, onClick, children, visible: inVisible, fontSize, items: inItems } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const items = useMemo(() => reject(inItems, i => i.visible === false), [inItems])

  const visible = useMemo(() => {
    if(isArray(inItems)) return !isEmpty(items)
    return inVisible
  }, [inVisible, inItems, items])

  const shownContent = useMemo(() => (visible && icon), [visible, icon])


  const handleClick = (e) => isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget)

  const iconProps = {
    sx: pick(props, ['fontSize'])
  }

  return shownContent && (
    <>
      <Tooltip title={tooltip}>
        <MuiIconButton onClick={handleClick} color={color} ref={ref}>
          {children ? children : (
            <FuseSvgIcon {...iconProps}>{icon}</FuseSvgIcon>
          )}
        </MuiIconButton>
      </Tooltip>
      {shownContent && !isEmpty(items) && <ButtonMenu items={items} anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>}
    </>
  )
})

IconButton.defaultProps = {
  visible: true,
  onClick: () => {}
}

IconButton.propTypes = {
  tooltip: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  visible: PropTypes.bool,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
  items: PropTypes.array,
}

export default IconButton