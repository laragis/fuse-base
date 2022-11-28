// @ts-nocheck
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import PropTypes from 'prop-types'
import { forwardRef, isValidElement } from 'react'
import { styled } from '@mui/system'
import MuiIconButton from '@mui/material/IconButton/IconButton.js'
import iconClasses from '@mui/material/Icon/iconClasses.js'
import { isMobile } from 'react-device-detect'

const sizeFactor = 16.654 / 100

const IconButtonRoot = styled(MuiIconButton, {
  background: 'red'
})(({ theme, ownerState }) => {

  return {
    [`& .FuseIcon-root.${iconClasses.fontSizeInherit}`]: {
      ...(ownerState.size === 'small' && {
        fontSize: theme.typography.pxToRem(18 * (1 - sizeFactor)),
        width: theme.typography.pxToRem(18),
        height: theme.typography.pxToRem(18)
      }),

      ...(ownerState.size === 'medium' && {
        fontSize: theme.typography.pxToRem(24 * (1 - sizeFactor)),
        width: theme.typography.pxToRem(24),
        height: theme.typography.pxToRem(24)
      }),

      ...(ownerState.size === 'large' && {
        fontSize: theme.typography.pxToRem(28 * (1 - sizeFactor)),
        width: theme.typography.pxToRem(28),
        height: theme.typography.pxToRem(28)
      })
    }
  }
})

const IconButton = forwardRef((inProps, ref) => {
  const { children, ...props } = inProps

  const {
    tooltip,
    tooltipProps,
    icon,
    size = 'medium',
    iconFontSize = 'inherit',
    visible,
    ...other
  } = props

  const ownerState = {
    ...props,
    size
  }

  if (!visible) return null

  const iconButtonProps = {
    size,
    ownerState,
    ...other
  }

  const content = (
    <IconButtonRoot {...iconButtonProps}>
      {children ?? (isValidElement(icon) ? icon : <Icon fontSize={iconFontSize}>{icon}</Icon>)}
    </IconButtonRoot>
  )

  return (
    <Tooltip title={tooltip} {...tooltipProps}>
      {content}
    </Tooltip>
  )
})


IconButton.propTypes = {
  ...MuiIconButton.propTypes,
  tooltip: PropTypes.node,
  icon: PropTypes.node
}

export default IconButton
