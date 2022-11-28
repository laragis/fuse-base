import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Menu } from '@mui/material'
import { isEmpty } from 'lodash'
import MenuItems from './MenuItems'

function ContextMenu({ position, items, children, onClose }) {
  const wrapperRef = useRef(null)
  const [contextMenu, setContextMenu] = useState(null)

  const open = useMemo(() => contextMenu !== null, [contextMenu])

  const anchorPosition = useMemo(() => open
    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
    : undefined, [open, contextMenu])


  const handleClose = useCallback(() => {
    onClose && onClose()
    open && setContextMenu(null)
  }, [open])

  const handleContextMenu = (e) => {
    e.preventDefault()

    setContextMenu(
      contextMenu === null
        ? {
          mouseX: e.clientX + 2,
          mouseY: e.clientY - 6,
        }
        : null,
    )
  }

  useEffect(() => {
    if(position) setContextMenu({
      mouseX: position.clientX + 2,
      mouseY: position.clientY - 6,
    })

  }, [position])

  return (
    <div
      ref={wrapperRef}
      onContextMenu={handleContextMenu}
    >
      {!isEmpty(items) && (
        <Menu
          open={open}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={anchorPosition}
          disableAutoFocusItem={true}
        >
          <MenuItems open={open} items={items} onClose={handleClose}/>
        </Menu>
      )}

      {children}
    </div>
  )
}

ContextMenu.propTypes = {
  items: PropTypes.array
}

export default ContextMenu