import PropTypes from 'prop-types'
import { Button as MuiButton, IconButton as MuiIconButton } from '@mui/material'

function IconButton(props){
  const {tooltip, label} = props

  const Component = label ? MuiButton : MuiIconButton

  return (
    <Component />
  )
}

IconButton.propTypes = {
  // tooltip
  // label
  // label
}

export default 