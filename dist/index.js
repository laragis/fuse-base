var React = require('react');
var Tippy = require('@tippyjs/react');
var jsxRuntime = require('react/jsx-runtime');
var clsx = require('clsx');
var PropTypes = require('prop-types');
var styles = require('@mui/material/styles');
var system = require('@mui/system');
var Icon = require('@mui/material/Icon');
var lodash = require('lodash');
var material = require('@mui/material');
var create = require('zustand');
var produce = require('immer');
var nanoevents = require('nanoevents');
var reactUse = require('react-use');
var Menu = require('@mui/material/Menu');
var iconsMaterial = require('@mui/icons-material');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return n;
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Tippy__default = /*#__PURE__*/_interopDefaultLegacy(Tippy);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var PropTypes__namespace = /*#__PURE__*/_interopNamespace(PropTypes);
var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
var create__default = /*#__PURE__*/_interopDefaultLegacy(create);
var produce__default = /*#__PURE__*/_interopDefaultLegacy(produce);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _excluded$8 = ["title", "children"];
function Tooltip(_ref) {
  var title = _ref.title,
    children = _ref.children,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$8);
  if (!title) return children;
  var config = _extends({
    theme: 'light',
    animation: 'scale',
    content: title,
    trigger: 'mouseenter'
  }, rest);
  return /*#__PURE__*/jsxRuntime.jsx(Tippy__default["default"], _extends({}, config, {
    children: children
  }));
}
var Tooltip$1 = /*#__PURE__*/React.memo(Tooltip);

var _excluded$7 = ["theme"],
  _excluded2$3 = ["children", "className", "size"];
var Root$1 = styles.styled(system.Box)(function (_ref) {
  var theme = _ref.theme,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  return {
    width: props.size,
    height: props.size,
    minWidth: props.size,
    minHeight: props.size,
    fontSize: props.size,
    lineHeight: props.size,
    color: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
      success: theme.palette.success.main,
      warning: theme.palette.warning.main,
      action: theme.palette.action.active,
      error: theme.palette.error.main,
      disabled: theme.palette.action.disabled,
      inherit: undefined
    }[props.color]
  };
});
var FuseSvgIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  if (!props.children.includes(':')) {
    return /*#__PURE__*/jsxRuntime.jsx(Icon__default["default"], _extends({
      ref: ref
    }, props));
  }
  var iconPath = props.children.replace(':', '.svg#');
  return /*#__PURE__*/jsxRuntime.jsx(Root$1, _extends({}, props, {
    component: "svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    className: clsx__default["default"]('shrink-0 fill-current ', props.className),
    ref: ref,
    size: props.size,
    sx: props.sx,
    color: props.color,
    children: /*#__PURE__*/jsxRuntime.jsx("use", {
      xlinkHref: "assets/icons/" + iconPath
    })
  }));
});
FuseSvgIcon.propTypes = {
  children: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  sx: PropTypes__default["default"].object,
  color: PropTypes__default["default"].oneOf(['inherit', 'disabled', 'primary', 'secondary', 'action', 'error', 'info', 'success', 'warning'])
};
FuseSvgIcon.defaultProps = {
  children: '',
  size: 24,
  sx: {},
  color: 'inherit'
};
function MySvgIcon(_ref2) {
  var children = _ref2.children,
    className = _ref2.className,
    size = _ref2.size,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded2$3);
  var customProps = {
    children: children
  };
  if (children && lodash.includes(children, 'fontawesome-')) {
    customProps.children = undefined;
    customProps.baseClassName = '';
    customProps.className = lodash.replace(children, 'fontawesome-', 'fa-');
    customProps.className = lodash.replace(customProps.className, ':', ' fa-');
    customProps.className = ['w-inherit', customProps.className, className].join(' ');
    if (size) customProps.sx = {
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      fontSize: size
    };
  }
  if (className && lodash.some(['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone'], function (prefix) {
    return lodash.includes(className, prefix);
  })) {
    customProps.baseClassName = '';
  }
  return /*#__PURE__*/jsxRuntime.jsx(FuseSvgIcon, _extends({
    className: className
  }, customProps, {
    size: size
  }, props));
}

var components$1 = {};
function registerLayout(name, Component) {
  components$1[name] = Component;
}
function Layout(props) {
  var C = components$1[props.name];
  return C ? /*#__PURE__*/jsxRuntime.jsx(C, _extends({}, props)) : /*#__PURE__*/jsxRuntime.jsx(material.Box, {
    p: 2,
    children: "Not Found"
  });
}

var _excluded$6 = ["leftIcon", "rightIcon", "label", "MenuItemProps", "className", "visible"];
var StyledMenuItem = styles.styled(material.MenuItem)({});
var MenuItem = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon,
    label = _ref.label,
    className = _ref.className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$6);
  return /*#__PURE__*/jsxRuntime.jsxs(StyledMenuItem, _extends({
    ref: ref,
    className: className
  }, props, {
    children: [leftIcon && /*#__PURE__*/jsxRuntime.jsx(material.ListItemIcon, {
      children: leftIcon
    }), /*#__PURE__*/jsxRuntime.jsx(material.ListItemText, {
      children: label
    }), rightIcon && /*#__PURE__*/jsxRuntime.jsx(material.ListItemIcon, {
      className: "flex justify-end",
      children: rightIcon
    })]
  }));
});
var MenuItem$1 = MenuItem;

var _excluded$5 = ["parentMenuOpen", "label", "rightIcon", "leftIcon", "children", "className", "tabIndex", "ContainerProps"],
  _excluded2$2 = ["ref"];
var SubMenuItem = /*#__PURE__*/React__default["default"].forwardRef(function SubMenu(props, ref) {
  var parentMenuOpen = props.parentMenuOpen,
    label = props.label,
    _props$rightIcon = props.rightIcon,
    rightIcon = _props$rightIcon === void 0 ? /*#__PURE__*/jsxRuntime.jsx(iconsMaterial.ChevronRight, {
      color: "disabled",
      fontSize: "small"
    }) : _props$rightIcon,
    _props$leftIcon = props.leftIcon,
    leftIcon = _props$leftIcon === void 0 ? null : _props$leftIcon,
    children = props.children,
    className = props.className,
    tabIndexProp = props.tabIndex,
    _props$ContainerProps = props.ContainerProps,
    ContainerPropsProp = _props$ContainerProps === void 0 ? {} : _props$ContainerProps,
    MenuItemProps = _objectWithoutPropertiesLoose(props, _excluded$5);
  var containerRefProp = ContainerPropsProp.ref,
    ContainerProps = _objectWithoutPropertiesLoose(ContainerPropsProp, _excluded2$2);
  var menuItemRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return menuItemRef.current;
  });
  var containerRef = React.useRef(null);
  React.useImperativeHandle(containerRefProp, function () {
    return containerRef.current;
  });
  var menuContainerRef = React.useRef(null);
  var _useState = React.useState(false),
    isSubMenuOpen = _useState[0],
    setIsSubMenuOpen = _useState[1];
  var handleMouseEnter = function handleMouseEnter(e) {
    setIsSubMenuOpen(true);
    if (ContainerProps.onMouseEnter) {
      ContainerProps.onMouseEnter(e);
    }
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    setIsSubMenuOpen(false);
    if (ContainerProps.onMouseLeave) {
      ContainerProps.onMouseLeave(e);
    }
  };

  // Check if any immediate children are active
  var isSubmenuFocused = function isSubmenuFocused() {
    var active = containerRef.current.ownerDocument.activeElement;
    for (var _iterator = _createForOfIteratorHelperLoose(menuContainerRef.current.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      if (child === active) {
        return true;
      }
    }
    return false;
  };
  var handleFocus = function handleFocus(e) {
    if (e.target === containerRef.current) {
      setIsSubMenuOpen(true);
    }
    if (ContainerProps.onFocus) {
      ContainerProps.onFocus(e);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Escape') {
      return;
    }
    if (isSubmenuFocused()) {
      e.stopPropagation();
    }
    var active = containerRef.current.ownerDocument.activeElement;
    if (e.key === 'ArrowLeft' && isSubmenuFocused()) {
      containerRef.current.focus();
    }
    if (e.key === 'ArrowRight' && e.target === containerRef.current && e.target === active) {
      var firstChild = menuContainerRef.current.children[0];
      firstChild.focus();
    }
  };
  var open = isSubMenuOpen && parentMenuOpen;

  // Root element must have a `tabIndex` attribute for keyboard navigation
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/jsxRuntime.jsxs("div", _extends({}, ContainerProps, {
    ref: containerRef,
    onFocus: handleFocus,
    tabIndex: tabIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onKeyDown: handleKeyDown,
    children: [/*#__PURE__*/jsxRuntime.jsx(MenuItem$1, {
      MenuItemProps: MenuItemProps,
      className: className,
      ref: menuItemRef,
      leftIcon: leftIcon,
      rightIcon: rightIcon,
      label: label
    }), /*#__PURE__*/jsxRuntime.jsx(Menu__default["default"]
    // Set pointer events to 'none' to prevent the invisible Popover div
    // from capturing events for clicks and hovers
    , {
      style: {
        pointerEvents: 'none'
      },
      anchorEl: menuItemRef.current,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      open: open,
      autoFocus: false,
      disableAutoFocus: true,
      disableEnforceFocus: true,
      onClose: function onClose() {
        setIsSubMenuOpen(false);
      },
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        ref: menuContainerRef,
        style: {
          pointerEvents: 'auto'
        },
        children: children
      })
    })]
  }));
});

// SubMenu.displayName = 'SubMenu';

var SubMenuItem$1 = SubMenuItem;

var _excluded$4 = ["divider"],
  _excluded2$1 = ["items", "onClick"];
function MenuItems(_ref) {
  var items = _ref.items,
    handleClose = _ref.onClose,
    open = _ref.open;
  return items.map(function (_ref2, key) {
    var divider = _ref2.divider,
      item = _objectWithoutPropertiesLoose(_ref2, _excluded$4);
    if (divider) return /*#__PURE__*/jsxRuntime.jsx(material.Divider, {
      sx: {
        my: 0.5
      }
    }, key);
    var childItems = item.items,
      _onClick = item.onClick,
      rest = _objectWithoutPropertiesLoose(item, _excluded2$1);
    if (childItems && childItems.length > 0) {
      return /*#__PURE__*/jsxRuntime.jsx(SubMenuItem$1, _extends({}, rest, {
        parentMenuOpen: open,
        children: /*#__PURE__*/jsxRuntime.jsx(MenuItems, {
          open: open,
          items: childItems,
          onClose: handleClose
        })
      }), key);
    }
    return /*#__PURE__*/jsxRuntime.jsx(MenuItem$1, _extends({}, rest, {
      onClick: function onClick() {
        handleClose();
        _onClick && _onClick();
      }
    }), key);
  });
}
MenuItems.propTypes = {
  items: PropTypes__default["default"].array
};

function ContextMenu(_ref) {
  var position = _ref.position,
    items = _ref.items,
    children = _ref.children,
    onClose = _ref.onClose;
  var wrapperRef = React.useRef(null);
  var _useState = React.useState(null),
    contextMenu = _useState[0],
    setContextMenu = _useState[1];
  var open = React.useMemo(function () {
    return contextMenu !== null;
  }, [contextMenu]);
  var anchorPosition = React.useMemo(function () {
    return open ? {
      top: contextMenu.mouseY,
      left: contextMenu.mouseX
    } : undefined;
  }, [open, contextMenu]);
  var handleClose = React.useCallback(function () {
    onClose && onClose();
    open && setContextMenu(null);
  }, [open]);
  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault();
    setContextMenu(contextMenu === null ? {
      mouseX: e.clientX + 2,
      mouseY: e.clientY - 6
    } : null);
  };
  React.useEffect(function () {
    if (position) setContextMenu({
      mouseX: position.clientX + 2,
      mouseY: position.clientY - 6
    });
  }, [position]);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    ref: wrapperRef,
    onContextMenu: handleContextMenu,
    children: [!lodash.isEmpty(items) && /*#__PURE__*/jsxRuntime.jsx(material.Menu, {
      open: open,
      onClose: handleClose,
      anchorReference: "anchorPosition",
      anchorPosition: anchorPosition,
      disableAutoFocusItem: true,
      children: /*#__PURE__*/jsxRuntime.jsx(MenuItems, {
        open: open,
        items: items,
        onClose: handleClose
      })
    }), children]
  });
}
ContextMenu.propTypes = {
  items: PropTypes__default["default"].array
};

var _excluded$3 = ["icon", "label", "visible", "onClick", "btnSize", "iconSize", "items", "color"];
function ToolbarItem(props) {
  var icon = props.icon,
    label = props.label,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? true : _props$visible,
    onClick = props.onClick,
    btnSize = props.btnSize,
    iconSize = props.iconSize,
    _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    color = props.color;
    _objectWithoutPropertiesLoose(props, _excluded$3);
  var tooltip = lodash.isBoolean(props.tooltip) ? label : props.tooltip;
  var shownContent = React.useMemo(function () {
    return visible && icon;
  }, [visible, icon]);
  var _useState = React.useState(null),
    anchorEl = _useState[0],
    setAnchorEl = _useState[1];
  var open = Boolean(anchorEl);
  var handleClick = function handleClick(e) {
    return lodash.isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget);
  };
  var handleClose = function handleClose(e, callback) {
    setAnchorEl(null);
    callback && callback();
  };
  var content = shownContent && /*#__PURE__*/jsxRuntime.jsx(material.IconButton, {
    size: btnSize,
    onClick: handleClick,
    color: color,
    children: icon && /*#__PURE__*/jsxRuntime.jsx(MySvgIcon, {
      size: iconSize,
      children: icon
    })
  });
  var menuContent = shownContent && !lodash.isEmpty(items) && /*#__PURE__*/jsxRuntime.jsx(material.Menu, {
    open: open,
    anchorEl: anchorEl,
    onClose: function onClose(e) {
      return handleClose();
    },
    transformOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'bottom'
    },
    children: items.map(function (item, key) {
      return /*#__PURE__*/jsxRuntime.jsxs(material.MenuItem, {
        onClick: function onClick(e) {
          return handleClose(e, item.onClick);
        },
        children: [item.icon && /*#__PURE__*/jsxRuntime.jsx(material.ListItemIcon, {
          children: /*#__PURE__*/jsxRuntime.jsx(MySvgIcon, {
            children: item.icon
          })
        }), item.label && /*#__PURE__*/jsxRuntime.jsx(material.ListItemText, {
          children: item.label
        })]
      }, key);
    })
  });
  if (tooltip && shownContent) return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(Tooltip$1, {
      title: tooltip,
      children: content
    }), menuContent]
  });
  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [content, menuContent]
  });
}
ToolbarItem.defautProps = {
  iconSize: 18
};

function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function isClassComponent(component) {
  return typeof component === 'function' && !!component.prototype.isReactComponent;
}
function isFunctionComponent(component) {
  return typeof component === 'function' && String(component).includes('return React.createElement');
}
function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

var _excluded$2 = ["case", "defaultCase"];
function Element(_ref) {
  var Component = _ref["case"],
    DefaultComponent = _ref.defaultCase,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  if ( /*#__PURE__*/React.isValidElement(Component)) return Component;
  if (isReactComponent(Component)) return /*#__PURE__*/jsxRuntime.jsx(Component, {});
  return /*#__PURE__*/jsxRuntime.jsx(DefaultComponent, _extends({}, props, Component));
}

function Toolbar(props) {
  var sx = props.sx,
    contentProps = props.contentProps,
    leftItems = props.leftItems,
    leftContentProps = props.leftContentProps,
    centerItems = props.centerItems,
    centerContentProps = props.centerContentProps,
    rightItems = props.rightItems,
    rightContentProps = props.rightContentProps;
  var itemProps = lodash.pick(props, ['btnSize', 'iconSize']);
  return /*#__PURE__*/jsxRuntime.jsxs(material.Stack, {
    sx: sx,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/jsxRuntime.jsx(material.Stack, _extends({
      direction: "row"
    }, contentProps, leftContentProps, {
      children: leftItems.length > 0 && leftItems.map(function (item, key) {
        return /*#__PURE__*/jsxRuntime.jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    })), /*#__PURE__*/jsxRuntime.jsx(material.Stack, _extends({
      direction: "row"
    }, contentProps, centerContentProps, {
      children: centerItems.length > 0 && centerItems.map(function (item, key) {
        return /*#__PURE__*/jsxRuntime.jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    })), /*#__PURE__*/jsxRuntime.jsx(material.Stack, _extends({
      direction: "row"
    }, contentProps, rightContentProps, {
      children: rightItems.length > 0 && rightItems.map(function (item, key) {
        return /*#__PURE__*/jsxRuntime.jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    }))]
  });
}
Toolbar.propTypes = {
  leftItems: PropTypes__default["default"].array,
  centerItems: PropTypes__default["default"].array,
  rightItems: PropTypes__default["default"].array
};
Toolbar.defaultProps = {
  sx: {
    p: 1
  },
  contentProps: {
    spacing: 0.5
  },
  leftItems: [],
  centerItems: [],
  rightItems: []
};

function ButtonMenu(_ref) {
  var items = _ref.items,
    anchorEl = _ref.anchorEl,
    setAnchorEl = _ref.setAnchorEl;
  var open = Boolean(anchorEl);
  var handleClose = function handleClose(e, callback) {
    setAnchorEl(null);
    callback && callback();
  };
  return /*#__PURE__*/jsxRuntime.jsx(material.Menu, {
    open: open,
    anchorEl: anchorEl,
    onClose: function onClose(e) {
      return handleClose();
    },
    transformOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'bottom'
    },
    children: items == null ? void 0 : items.map(function (item, key) {
      return /*#__PURE__*/jsxRuntime.jsxs(material.MenuItem, {
        onClick: function onClick(e) {
          return handleClose(e, item.onClick);
        },
        children: [item.icon && /*#__PURE__*/jsxRuntime.jsx(material.ListItemIcon, {
          children: /*#__PURE__*/jsxRuntime.jsx(MySvgIcon, {
            children: item.icon
          })
        }), item.label && /*#__PURE__*/jsxRuntime.jsx(material.ListItemText, {
          children: item.label
        })]
      }, key);
    })
  });
}
var IconButton = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
  var tooltip = props.tooltip,
    color = props.color,
    icon = props.icon,
    onClick = props.onClick,
    children = props.children,
    inVisible = props.visible,
    inItems = props.items,
    type = props.type;
  var _useState = React.useState(null),
    anchorEl = _useState[0],
    setAnchorEl = _useState[1];
  var items = React.useMemo(function () {
    return lodash.reject(inItems, function (i) {
      return i.visible === false;
    });
  }, [inItems]);
  var visible = React.useMemo(function () {
    if (lodash.isArray(inItems)) return !lodash.isEmpty(items);
    return inVisible;
  }, [inVisible, inItems, items]);
  var shownContent = React.useMemo(function () {
    return visible && icon;
  }, [visible, icon]);
  var handleClick = function handleClick(e) {
    return lodash.isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget);
  };
  var iconProps = {
    sx: lodash.pick(props, ['fontSize'])
  };
  return shownContent && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(Tooltip$1, {
      title: tooltip,
      children: /*#__PURE__*/jsxRuntime.jsx(material.IconButton, {
        onClick: handleClick,
        color: color,
        type: type,
        ref: ref,
        children: children ? children : /*#__PURE__*/jsxRuntime.jsx(MySvgIcon, _extends({}, iconProps, {
          children: icon
        }))
      })
    }), shownContent && !lodash.isEmpty(items) && /*#__PURE__*/jsxRuntime.jsx(ButtonMenu, {
      items: items,
      anchorEl: anchorEl,
      setAnchorEl: setAnchorEl
    })]
  });
});
IconButton.defaultProps = {
  visible: true,
  onClick: function onClick() {}
};
IconButton.propTypes = {
  tooltip: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  icon: PropTypes__default["default"].string,
  visible: PropTypes__default["default"].bool,
  fontSize: PropTypes__default["default"].number,
  onClick: PropTypes__default["default"].func,
  items: PropTypes__default["default"].array
};
var IconButton$1 = IconButton;

var useComponentStore = create__default["default"](function (set) {
  return {
    components: {},
    registerComponent: function registerComponent(type, Component) {
      return set(produce__default["default"](function (state) {
        state.components[type] = Component;
      }));
    }
  };
});
var components = useComponentStore.getState().components;
function registerComponent(name, Component) {
  useComponentStore.getState().registerComponent(name, Component);
}
function Component(props) {
  var C = useComponentStore(function (state) {
    return state.components[props.type];
  }, shallow);
  return C ? /*#__PURE__*/jsxRuntime.jsx(C, _extends({}, props)) : null;
}

var _excluded$1 = ["theme"];
var Root = material.styled('div')(function (_ref) {
  var theme = _ref.theme,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  return {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: '100%',
    position: 'relative',
    flex: '1 1 auto',
    width: '100%',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    '& .PageSide-wrapper': _extends({
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1 auto',
      minWidth: 0,
      height: '100%'
    }, props.scroll === 'content' && {
      // backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
      // overflow: 'hidden',
    }),

    '& .PageSide-contentWrapper': {
      // backgroundColor: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      flex: '1 1 auto'
      // overflow: 'hidden',
    },

    '& .PageSide-content': {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      minHeight: 0,
      overflowY: 'auto',
      backgroundColor: theme.palette.background["default"]
    }
  };
});
function PageSide(props) {
  var _props$contentWrapper, _props$toolbar, _props$subToolbar, _props$contentProps;
  var shownToolbar = React.useMemo(function () {
    return lodash.some([props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems], function (v) {
      return !lodash.isEmpty(v);
    });
  }, [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  var toolbarProps = React.useMemo(function () {
    return _extends({}, props.toolbarProps, {
      leftItems: props.leftToolbarItems,
      centerItems: props.centerToolbarItems,
      rightItems: props.rightToolbarItems
    });
  }, [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  var shownSubToolbar = React.useMemo(function () {
    return lodash.some([props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems], function (v) {
      return !lodash.isEmpty(v);
    });
  }, [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  var subToolbarProps = React.useMemo(function () {
    return _extends({}, props.subToolbarProps, {
      leftItems: props.leftSubToolbarItems,
      centerItems: props.centerSubToolbarItems,
      rightItems: props.rightSubToolbarItems
    });
  }, [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  var headerProps = {
    title: props.headerTitle
  };
  return /*#__PURE__*/jsxRuntime.jsxs(Root, {
    className: clsx__default["default"]('PageSide-root', "PageSide-scroll-" + props.scroll, props.className)
    // ref={rootRef}
    ,
    scroll: props.scroll,
    leftsidebarwidth: props.leftSidebarWidth,
    rightsidebarwidth: props.rightSidebarWidth,
    children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
      className: "PageSide-wrapper",
      children: [props.leftSidebarContent && /*#__PURE__*/jsxRuntime.jsx("div", {
        children: "leftSidebarContent"
      }), /*#__PURE__*/jsxRuntime.jsxs(material.Stack, _extends({}, props.contentWrapperProps, {
        className: clsx__default["default"]("PageSide-contentWrapper", (_props$contentWrapper = props.contentWrapperProps) == null ? void 0 : _props$contentWrapper.className),
        divider: /*#__PURE__*/jsxRuntime.jsx(material.Divider, {}),
        children: [props.header && (lodash.isBoolean(props.header) ? /*#__PURE__*/jsxRuntime.jsx(Component, _extends({
          type: "PageSideHeader"
        }, headerProps)) : props.header), props.subHeader && props.subHeader, (props.toolbar || shownToolbar) && ((_props$toolbar = props.toolbar) != null ? _props$toolbar : /*#__PURE__*/jsxRuntime.jsx(Toolbar, _extends({}, toolbarProps))), (props.subToolbar || shownSubToolbar) && ((_props$subToolbar = props.subToolbar) != null ? _props$subToolbar : /*#__PURE__*/jsxRuntime.jsx(Toolbar, _extends({}, subToolbarProps))), props.content && /*#__PURE__*/jsxRuntime.jsxs("div", {
          className: clsx__default["default"](clsx__default["default"]('PageSide-content container', (_props$contentProps = props.contentProps) == null ? void 0 : _props$contentProps.className)),
          children: [props.loading && /*#__PURE__*/jsxRuntime.jsx(material.LinearProgress, {}), props.content]
        }), props.footer && /*#__PURE__*/jsxRuntime.jsx("div", {
          children: "Footer"
        })]
      }))]
    }), props.rightSidebarContent && /*#__PURE__*/jsxRuntime.jsx("div", {
      children: "rightSidebarContent"
    })]
  });
}
PageSide.propTypes = {
  contentWrapperProps: PropTypes__namespace.object,
  leftSidebarContent: PropTypes__namespace.node,
  leftSidebarVariant: PropTypes__namespace.node,
  rightSidebarContent: PropTypes__namespace.node,
  rightSidebarVariant: PropTypes__namespace.node,
  header: PropTypes__namespace.oneOfType([PropTypes__namespace.node, PropTypes__namespace.bool]),
  subHeader: PropTypes__namespace.node,
  toolbar: PropTypes__namespace.node,
  toolbarProps: PropTypes__namespace.object,
  leftToolbarItems: PropTypes__namespace.array,
  centerToolbarItems: PropTypes__namespace.array,
  rightToolbarItems: PropTypes__namespace.array,
  subToolbar: PropTypes__namespace.node,
  subToolbarProps: PropTypes__namespace.object,
  leftSubToolbarItems: PropTypes__namespace.array,
  centerSubToolbarItems: PropTypes__namespace.array,
  rightSubToolbarItems: PropTypes__namespace.array,
  content: PropTypes__namespace.node,
  scroll: PropTypes__namespace.oneOf(['normal', 'page', 'content']),
  leftSidebarOpen: PropTypes__namespace.bool,
  rightSidebarOpen: PropTypes__namespace.bool,
  leftSidebarWidth: PropTypes__namespace.number,
  rightSidebarWidth: PropTypes__namespace.number,
  rightSidebarOnClose: PropTypes__namespace.func,
  leftSidebarOnClose: PropTypes__namespace.func
};
PageSide.defaultProps = {
  classes: {},
  scroll: 'page',
  leftSidebarOpen: false,
  rightSidebarOpen: false,
  rightSidebarWidth: 240,
  leftSidebarWidth: 240
};

function IconButtonGroup(props) {
  var rootProps = lodash.pick(props, ['direction', 'spacing']);
  var iconBtnProps = lodash.pick(props, ['size', 'color', 'fontSize', 'visible']);
  return /*#__PURE__*/jsxRuntime.jsx(material.Stack, _extends({}, rootProps, {
    children: props.items.map(function (i, k) {
      return /*#__PURE__*/jsxRuntime.jsx(IconButton$1, _extends({}, iconBtnProps, i), k);
    })
  }));
}
IconButtonGroup.defaultProps = {
  direction: 'row',
  spacing: 0.5
};
PageSide.propTypes = {
  direction: PropTypes__default["default"].string,
  spacing: PropTypes__default["default"].number,
  items: PropTypes__default["default"].array
};

var _excluded = ["theme"],
  _excluded2 = ["content", "classes", "className"];
var BadgeRoot = styles.styled(material.Box)(function (_ref) {
  var theme = _ref.theme,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return {
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
      inherit: undefined
    }[props.color]
  };
});
var Badge = /*#__PURE__*/React.forwardRef(function (inProps, ref) {
  var content = inProps.content,
    classes = inProps.classes,
    className = inProps.className,
    other = _objectWithoutPropertiesLoose(inProps, _excluded2);
  return /*#__PURE__*/jsxRuntime.jsx(BadgeRoot, _extends({
    className: clsx__default["default"](classes == null ? void 0 : classes.root, className)
  }, other, {
    ref: ref,
    children: content
  }));
});
Badge.defaultProps = {
  component: material.Typography
};
var Badge$1 = Badge;

var emitter = nanoevents.createNanoEvents();
var emitter$1 = emitter;

function useEvents(handlers) {
  React.useEffect(function addEventHandlers() {
    lodash.map(handlers, function (handler, type) {
      return emitter$1.on(type, handler);
    });
    return function removeEventHandlers() {
      lodash.map(handlers, function (handler, type) {
        return delete emitter$1[type];
      });
    };
  }, [emitter$1, handlers]);
}

function useDebouncedInput(inValue, _temp) {
  if (inValue === void 0) {
    inValue = '';
  }
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$wait = _ref.wait,
    wait = _ref$wait === void 0 ? 500 : _ref$wait;
  var _useState = React.useState(inValue),
    value = _useState[0],
    setValue = _useState[1];
  var _useState2 = React.useState(''),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  reactUse.useDebounce(function () {
      return setDebouncedValue(value);
    }, wait, [value]);
  return [debouncedValue, setValue, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }];
}

exports.Badge = Badge$1;
exports.Component = Component;
exports.ContextMenu = ContextMenu;
exports.FuseSvgIcon = MySvgIcon;
exports.IconButton = IconButton$1;
exports.IconButtonGroup = IconButtonGroup;
exports.Layout = Layout;
exports.PageSide = PageSide;
exports.Toolbar = Toolbar;
exports.ToolbarItem = ToolbarItem;
exports.Tooltip = Tooltip$1;
exports.components = components;
exports.emitter = emitter$1;
exports.layoutComponents = components$1;
exports.registerComponent = registerComponent;
exports.registerLayout = registerLayout;
exports.useDebouncedInput = useDebouncedInput;
exports.useEvents = useEvents;
//# sourceMappingURL=index.js.map
