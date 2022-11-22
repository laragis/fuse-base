// @ts-nocheck
import clsx from 'clsx';
import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles/index.js';
import {Icon} from '@mui/material';
import {some} from 'lodash'
import {useThemeProps} from "@mui/system";
import {unstable_composeClasses as composeClasses} from '@mui/base';
import {getIconUtilityClass} from "./iconClasses";

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getIconUtilityClass, classes);
};

const StyledIcon = styled(Icon, {
  name: 'FuseIcon',
  slot: 'Root',
})(({theme, ownerState}) => {
  const fontSize = {
    inherit: theme.typography.pxToRem(24),
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36),
  }[ownerState.fontSize] ?? ownerState.fontSize

  return ({
    width: fontSize,
    height: fontSize,
    minWidth: fontSize,
    minHeight: fontSize,
    fontSize: fontSize,
    overflow: 'inherit',
  })
});

const FontAwesomeIcon = styled(Icon, {
  name: 'FuseIcon',
  slot: 'Root',
})(({theme, ownerState}) => {
  const factor = 16.654/100

  const size = {
    inherit: 'inherit',
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36),
  }[ownerState.fontSize] ?? ownerState.fontSize

  const fontSize = {
    inherit: 'inherit',
    small: theme.typography.pxToRem(20*(1 - factor)),
    medium: theme.typography.pxToRem(24*(1 - factor)),
    large: theme.typography.pxToRem(36*(1 - factor)),
  }[ownerState.fontSize] ?? ownerState.fontSize

  return ({
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    fontSize: fontSize,
    overflow: 'inherit',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
});

const Icon = forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'FuseIcon' });

  const {...other} = props;

  const ownerState = {...props}

  const classes = useUtilityClasses(ownerState)

  if (!props.children.includes(':')) {
    return <Icon ref={ref} {...props} />;
  }

  if (some([
    'fontawesome-regular',
    'fontawesome-solid',
    'fontawesome-thin',
    'fontawesome-light',
    'fontawesome-duotone'
  ], namespace => props.children.includes(namespace))) {
    const iconClass = props.children.replace('fontawesome-', 'fa-').replace(':', ' fa-');

    return (
      <FontAwesomeIcon
        ref={ref}
        baseClassName=""
        ownerState={ownerState}
        {...other}
        className={clsx(classes.root, iconClass, props.className)}
        children=""
      />
    )
  }

  const iconPath = props.children.replace(':', '.svg#');

  return (
    <StyledIcon
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx(classes.root, 'shrink-0 fill-current ', props.className)}
      ref={ref}
      ownerState={ownerState}
      {...other}
    >
      <use xlinkHref={`assets/icons/${iconPath}`}/>
    </StyledIcon>
  );
});

Icon.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
  color: PropTypes.oneOf([
    'inherit',
    'disabled',
    'primary',
    'secondary',
    'action',
    'error',
    'info',
    'success',
    'warning',
  ]),
};

Icon.defaultProps = {
  children: '',
  fontSize: 'medium',
  sx: {},
  color: 'inherit',
};

export default Icon;
