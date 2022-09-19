import React from 'react'
import { Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import ToolbarItem from './ToolbarItem'

function SideToolbar(props) {
  const {
    sx,
    leftItems = [],
    leftContentProps,
    centerItems = [],
    centerContentProps,
    rightItems = [],
    rightContentProps,
  } = props

  const itemProps = pick(props, ['btnSize', 'iconSize'])

  return (
    <Stack
      sx={sx}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" {...leftContentProps}>
        {leftItems.length > 0 && leftItems.map((item, key) => <ToolbarItem key={key} {...itemProps} {...item}/>)}
      </Stack>
      <Stack direction="row" {...centerContentProps}>
        {centerItems.length > 0 && centerItems.map((item, key) => <ToolbarItem key={key} {...itemProps} {...item}/>)}
      </Stack>
      <Stack direction="row" {...rightContentProps}>
        {rightItems.length > 0 &&  rightItems.map((item, key) => <ToolbarItem key={key} {...itemProps} {...item}/>)}
      </Stack>
    </Stack>
  )
}

SideToolbar.propTypes = {
  leftItems: PropTypes.array,
  centerItems: PropTypes.array,
  rightItems: PropTypes.array,
};


export default SideToolbar