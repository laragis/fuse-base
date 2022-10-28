import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import SubMenuItem from './SubMenuItem'
import { Divider } from '@mui/material'

function MenuItems({ items, onClose: handleClose, open }) {
  return items.map(({ divider, ...item }, key) => {

    if(divider) return <Divider key={key} sx={{my: 0.5}}/>

    const { items: childItems, onClick, ...rest } = item

    if (childItems && childItems.length > 0) {
      return (
        <SubMenuItem
          key={key}
          {...rest}
          parentMenuOpen={open}
        >
          <MenuItems
            open={open}
            items={childItems}
            onClose={handleClose}
          />
        </SubMenuItem>
      )
    }

    return (
      <MenuItem
        key={key}
        {...rest}
        onClick={() => {
          handleClose()
          onClick && onClick();
        }}
      />
    )
  })
}

MenuItems.propTypes = {
  items: PropTypes.array
}

export default MenuItems