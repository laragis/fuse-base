// @ts-nocheck
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { useThemeProps, styled } from '@mui/system';
import { getTooltipUtilityClass } from './tooltipClasses';
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import { shouldForwardProp } from "@mui/system";
import { isMobile } from 'react-device-detect';

import './Tooltip.css';

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getTooltipUtilityClass, classes);
};

const TooltipRoot = styled(Tippy, {
  name: 'FuseTooltip',
  slot: 'Root',
  shouldForwardProp: (propName) => shouldForwardProp(propName) || propName === 'theme',
})(({ theme, ownerState }) => ({

}));

const Tooltip = forwardRef(function Tooltip(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'FuseTooltip' });

  const {
    children,
    className,
    theme = 'light',
    animation = 'scale',
    trigger = 'mouseenter',
    disabled = isMobile,
    title,
    ...other
  } = props;

  const ownerState = {
    ...props,
  };

  const classes = useUtilityClasses(ownerState);

  const tooltipProps = {
    theme,
    animation,
    trigger,
    disabled,
    content: title,
    className: clsx(classes.root, className),
    ...other,
  };

  return (
      <TooltipRoot {...tooltipProps}>
        {children}
      </TooltipRoot>
  )
});

Tooltip.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.node,
};

export default Tooltip;
