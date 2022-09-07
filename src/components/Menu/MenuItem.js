import React, { forwardRef } from 'react'
import { ListItemIcon, ListItemText, MenuItem as MuiMenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledMenuItem = styled(MuiMenuItem)({

})

const MenuItem = forwardRef(
  ({ leftIcon, rightIcon, label, MenuItemProps, className, ...props }, ref) => {
    return (
      <StyledMenuItem
        ref={ref}
        className={className}
        {...props}
      >
        {leftIcon && (
          <ListItemIcon>
            {leftIcon}
          </ListItemIcon>
        )}

        <ListItemText>
          {label}
        </ListItemText>

        {rightIcon && (
          <ListItemIcon className="flex justify-end">
            {rightIcon}
          </ListItemIcon>
        )}

      </StyledMenuItem>
    )
  }
)


export default MenuItem
