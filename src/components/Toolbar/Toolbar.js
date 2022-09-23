import React from 'react'
import { Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import ToolbarItem from './ToolbarItem'
import Element from '../Element/Element'


function Toolbar(props) {
  const {
    sx,
    contentProps,
    leftItems,
    leftContentProps,
    centerItems,
    centerContentProps,
    rightItems,
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

      <Stack direction="row" {...contentProps} {...leftContentProps}>
        {leftItems.length > 0 && leftItems.map((item, key) => <Element key={key} case={item} defaultCase={ToolbarItem} {...itemProps}/>)}
      </Stack>
      <Stack direction="row" {...contentProps} {...centerContentProps}>
        {centerItems.length > 0 && centerItems.map((item, key) => <Element key={key} case={item} defaultCase={ToolbarItem} {...itemProps}/>)}
      </Stack>
      <Stack direction="row" {...contentProps} {...rightContentProps}>
        {rightItems.length > 0 &&  rightItems.map((item, key) => <Element key={key} case={item} defaultCase={ToolbarItem} {...itemProps}/>)}
      </Stack>
    </Stack>
  )
}

Toolbar.propTypes = {
  leftItems: PropTypes.array,
  centerItems: PropTypes.array,
  rightItems: PropTypes.array,
};

Toolbar.defaultProps = {
  sx: {
    p: 1,
  },
  contentProps: {
    spacing: 0.5
  },
  leftItems: [],
  centerItems: [],
  rightItems: [],
}


export default Toolbar