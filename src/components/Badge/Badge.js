import { forwardRef } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'


const BadgeRoot = styled(Box)(({ theme, ...props }) => ({
  display: 'inline-block',
  justifyContent: 'center',
  alignContent: 'center',
  color: 'white',
  borderRadius: 10,
  padding: '0 6px',
  minWidth: 20,
  height: 20,

  backgroundColor: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined,
  }[props.color],
}));

const Badge = forwardRef((inProps, ref) => {
  const {content, classes, className, ...other} = inProps

  return (
    <BadgeRoot className={clsx(classes?.root, className)} {...other} ref={ref}>
      {content}
    </BadgeRoot>
  )
})

Badge.defaultProps = {
  component: Typography
}

export default Badge