import PropTypes from 'prop-types';
import { Stack } from '@mui/material'
import IconButton from '../IconButton/IconButton'
import PageSide from '../PageSide/PageSide'
import { pick } from 'lodash'

function IconButtonGroup(props){
  const rootProps = pick(props, ['direction', 'spacing'])

  const iconBtnProps = pick(props, [
    'size', 'color', 'fontSize', 'visible'
  ])

  return (
    <Stack {...rootProps}>
      {props.items.map((i, k) => <IconButton key={k} {...iconBtnProps} {...i}/>)}
    </Stack>
  )
}

IconButtonGroup.defaultProps = {
  direction: 'row',
  spacing: 0.5
}

PageSide.propTypes = {
  direction: PropTypes.string,
  spacing: PropTypes.number,
  items: PropTypes.array,
}

export default IconButtonGroup