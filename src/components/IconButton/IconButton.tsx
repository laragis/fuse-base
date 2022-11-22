// @ts-nocheck
import MuiIconButton from "@mui/material/IconButton/IconButton.js";
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import PropTypes from "prop-types";
import { forwardRef } from "react";

const IconButton = forwardRef((inProps, ref) => {

  const {
    tooltip,
    icon,
    iconFontSize = "inherit",
    ...other
  } = inProps;

  return (
    <Tooltip title={tooltip}>
      <MuiIconButton {...other}>
        <Icon fontSize={iconFontSize}>{icon}</Icon>
      </MuiIconButton>
    </Tooltip>
  );
});


IconButton.propTypes = {
  ...MuiIconButton.propTypes,
  tooltip: PropTypes.node,
  icon: PropTypes.node
};

export default IconButton;
