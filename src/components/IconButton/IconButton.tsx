// @ts-nocheck
import MuiIconButton from "@mui/material/IconButton/IconButton.js";
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import PropTypes from "prop-types";
import { forwardRef } from "react";
import {styled} from "@mui/system";

const IconButtonRoot = styled(MuiIconButton, {
  background: 'red'
})(({theme, ownerState}) => {

})

const IconButton = forwardRef((inProps, ref) => {
  const {
    tooltip,
    icon,
    iconFontSize = "inherit",
    ...other
  } = inProps;

  console.log(other)

  return (
    <Tooltip title={tooltip}>
      <IconButtonRoot {...other}>
        <Icon fontSize={iconFontSize}>{icon}</Icon>
      </IconButtonRoot>
    </Tooltip>
  );
});


IconButton.propTypes = {
  ...MuiIconButton.propTypes,
  tooltip: PropTypes.node,
  icon: PropTypes.node
};

export default IconButton;
