import * as React from 'react'
import { IconButton as MuiIconButton } from '@mui/material'
import FuseSvgIcon from '../FuseSvgIcon/FuseSvgIcon'
import Tooltip from '../Tooltip/Tooltip'
import { pick } from 'lodash'
import PageSide from '../PageSide/PageSide'
import PropTypes from 'prop-types'

const IconButton = React.forwardRef((props, ref) => {
  const { tooltip, color, icon, onClick = {}, children, visible, fontSize } = props

  const iconProps = {
    sx: pick(props, ['fontSize'])
  }

  return visible && (
    <Tooltip title={tooltip}>
      <MuiIconButton onClick={onClick} color={color} ref={ref}>
        {children ? children : (
          <FuseSvgIcon {...iconProps}>{icon}</FuseSvgIcon>
        )}
      </MuiIconButton>
    </Tooltip>
  )
})

IconButton.defaultProps = {
  visible: true,
}

IconButton.propTypes = {
  tooltip: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  visible: PropTypes.bool,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
}

export default IconButton