import React, { memo, forwardRef, useRef, useImperativeHandle, useState, useMemo, useCallback, useEffect, isValidElement } from 'react';
import Tippy from '@tippyjs/react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import PropTypes__default from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
import { includes, replace, some, isEmpty, isBoolean, pick } from 'lodash';
import { Box as Box$1, MenuItem as MenuItem$2, ListItemIcon, ListItemText, Divider, Menu as Menu$1, IconButton, Stack, styled as styled$1 } from '@mui/material';
import create from 'zustand';
import produce from 'immer';
import { createNanoEvents } from 'nanoevents';
import Menu from '@mui/material/Menu';
import { ChevronRight } from '@mui/icons-material';

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

var _excluded$7 = ["title", "children"];

function Tooltip(_ref) {
  var title = _ref.title,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  if (!title) return children;

  var config = _extends({
    theme: 'light',
    animation: 'scale',
    content: title,
    trigger: 'mouseenter'
  }, rest);

  return /*#__PURE__*/jsx(Tippy, _extends({}, config, {
    children: children
  }));
}

var Tooltip$1 = /*#__PURE__*/memo(Tooltip);

var _excluded$6 = ["theme"],
    _excluded2$2 = ["children", "className", "size"];
var Root$1 = styled(Box)(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

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
var FuseSvgIcon = /*#__PURE__*/forwardRef(function (props, ref) {
  if (!props.children.includes(':')) {
    return /*#__PURE__*/jsx(Icon, _extends({
      ref: ref
    }, props));
  }

  var iconPath = props.children.replace(':', '.svg#');
  return /*#__PURE__*/jsx(Root$1, _extends({}, props, {
    component: "svg",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    className: clsx('shrink-0 fill-current ', props.className),
    ref: ref,
    size: props.size,
    sx: props.sx,
    color: props.color,
    children: /*#__PURE__*/jsx("use", {
      xlinkHref: "assets/icons/" + iconPath
    })
  }));
});
FuseSvgIcon.propTypes = {
  children: PropTypes__default.string,
  size: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string]),
  sx: PropTypes__default.object,
  color: PropTypes__default.oneOf(['inherit', 'disabled', 'primary', 'secondary', 'action', 'error', 'info', 'success', 'warning'])
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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);

  var customProps = {
    children: children
  };

  if (children && includes(children, 'fontawesome-')) {
    customProps.children = undefined;
    customProps.baseClassName = '';
    customProps.className = replace(children, 'fontawesome-', 'fa-');
    customProps.className = replace(customProps.className, ':', ' fa-');
    customProps.className = ['w-inherit', customProps.className, className].join(' ');
    if (size) customProps.sx = {
      width: size,
      height: size,
      minWidth: size,
      minHeight: size,
      fontSize: size
    };
  }

  if (className && some(['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone'], function (prefix) {
    return includes(className, prefix);
  })) {
    customProps.baseClassName = '';
  }

  return /*#__PURE__*/jsx(FuseSvgIcon, _extends({
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
  return C ? /*#__PURE__*/jsx(C, _extends({}, props)) : /*#__PURE__*/jsx(Box$1, {
    p: 2,
    children: "Not Found"
  });
}

var _excluded$5 = ["leftIcon", "rightIcon", "label", "MenuItemProps", "className"];
var StyledMenuItem = styled(MenuItem$2)({});
var MenuItem = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return /*#__PURE__*/jsxs(StyledMenuItem, _extends({
    ref: ref,
    className: className
  }, props, {
    children: [leftIcon && /*#__PURE__*/jsx(ListItemIcon, {
      children: leftIcon
    }), /*#__PURE__*/jsx(ListItemText, {
      children: label
    }), rightIcon && /*#__PURE__*/jsx(ListItemIcon, {
      className: "flex justify-end",
      children: rightIcon
    })]
  }));
});
var MenuItem$1 = MenuItem;

var _excluded$4 = ["parentMenuOpen", "label", "rightIcon", "leftIcon", "children", "className", "tabIndex", "ContainerProps"],
    _excluded2$1 = ["ref"];
var SubMenuItem = /*#__PURE__*/React.forwardRef(function SubMenu(props, ref) {
  var parentMenuOpen = props.parentMenuOpen,
      label = props.label,
      _props$rightIcon = props.rightIcon,
      rightIcon = _props$rightIcon === void 0 ? /*#__PURE__*/jsx(ChevronRight, {
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
      MenuItemProps = _objectWithoutPropertiesLoose(props, _excluded$4);

  var containerRefProp = ContainerPropsProp.ref,
      ContainerProps = _objectWithoutPropertiesLoose(ContainerPropsProp, _excluded2$1);

  var menuItemRef = useRef(null);
  useImperativeHandle(ref, function () {
    return menuItemRef.current;
  });
  var containerRef = useRef(null);
  useImperativeHandle(containerRefProp, function () {
    return containerRef.current;
  });
  var menuContainerRef = useRef(null);

  var _useState = useState(false),
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
  }; // Check if any immediate children are active


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

  var open = isSubMenuOpen && parentMenuOpen; // Root element must have a `tabIndex` attribute for keyboard navigation

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/jsxs("div", _extends({}, ContainerProps, {
    ref: containerRef,
    onFocus: handleFocus,
    tabIndex: tabIndex,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onKeyDown: handleKeyDown,
    children: [/*#__PURE__*/jsx(MenuItem$1, {
      MenuItemProps: MenuItemProps,
      className: className,
      ref: menuItemRef,
      leftIcon: leftIcon,
      rightIcon: rightIcon,
      label: label
    }), /*#__PURE__*/jsx(Menu // Set pointer events to 'none' to prevent the invisible Popover div
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
      children: /*#__PURE__*/jsx("div", {
        ref: menuContainerRef,
        style: {
          pointerEvents: 'auto'
        },
        children: children
      })
    })]
  }));
}); // SubMenu.displayName = 'SubMenu';

var SubMenuItem$1 = SubMenuItem;

var _excluded$3 = ["divider"],
    _excluded2 = ["items", "callback"];

function MenuItems(_ref) {
  var items = _ref.items,
      handleClose = _ref.onClose,
      open = _ref.open;
  return items.map(function (_ref2, key) {
    var divider = _ref2.divider,
        item = _objectWithoutPropertiesLoose(_ref2, _excluded$3);

    if (divider) return /*#__PURE__*/jsx(Divider, {
      sx: {
        my: 0.5
      }
    }, key);

    var childItems = item.items,
        callback = item.callback,
        rest = _objectWithoutPropertiesLoose(item, _excluded2);

    if (childItems && childItems.length > 0) {
      return /*#__PURE__*/jsx(SubMenuItem$1, _extends({}, rest, {
        parentMenuOpen: open,
        children: /*#__PURE__*/jsx(MenuItems, {
          open: open,
          items: childItems,
          onClose: handleClose
        })
      }), key);
    }

    return /*#__PURE__*/jsx(MenuItem$1, _extends({}, rest, {
      onClick: function onClick() {
        handleClose();
        callback && callback();
      }
    }), key);
  });
}

MenuItems.propTypes = {
  items: PropTypes__default.array
};

function ContextMenu(_ref) {
  var position = _ref.position,
      items = _ref.items,
      children = _ref.children,
      onClose = _ref.onClose;
  var wrapperRef = useRef(null);

  var _useState = useState(null),
      contextMenu = _useState[0],
      setContextMenu = _useState[1];

  var open = useMemo(function () {
    return contextMenu !== null;
  }, [contextMenu]);
  var anchorPosition = useMemo(function () {
    return open ? {
      top: contextMenu.mouseY,
      left: contextMenu.mouseX
    } : undefined;
  }, [open, contextMenu]);
  var handleClose = useCallback(function () {
    onClose();
    open && setContextMenu(null);
  }, [open]);

  var handleContextMenu = function handleContextMenu(e) {
    e.preventDefault();
    setContextMenu(contextMenu === null ? {
      mouseX: e.clientX + 2,
      mouseY: e.clientY - 6
    } : null);
  };

  useEffect(function () {
    setContextMenu(position);
  }, [position]);
  return /*#__PURE__*/jsxs("div", {
    ref: wrapperRef,
    onContextMenu: handleContextMenu,
    children: [/*#__PURE__*/jsx(Menu$1, {
      open: open,
      onClose: handleClose,
      anchorReference: "anchorPosition",
      anchorPosition: anchorPosition,
      disableAutoFocusItem: true,
      children: !isEmpty(items) && /*#__PURE__*/jsx(MenuItems, {
        open: open,
        items: items,
        onClose: handleClose
      })
    }), children]
  });
}

ContextMenu.propTypes = {
  items: PropTypes__default.array
};

var _excluded$2 = ["icon", "label", "visible", "onClick", "btnSize", "iconSize", "items", "color"];

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
      _objectWithoutPropertiesLoose(props, _excluded$2);

  var tooltip = isBoolean(props.tooltip) ? label : props.tooltip;
  var shownContent = useMemo(function () {
    return visible && icon;
  }, [visible, icon]);

  var _useState = useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(e) {
    return isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget);
  };

  var handleClose = function handleClose(e, callback) {
    setAnchorEl(null);
    callback && callback();
  };

  var content = shownContent && /*#__PURE__*/jsx(IconButton, {
    size: btnSize,
    onClick: handleClick,
    color: color,
    children: icon && /*#__PURE__*/jsx(MySvgIcon, {
      size: iconSize,
      children: icon
    })
  });

  var menuContent = shownContent && !isEmpty(items) && /*#__PURE__*/jsx(Menu$1, {
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
      return /*#__PURE__*/jsxs(MenuItem$2, {
        onClick: function onClick(e) {
          return handleClose(e, item.onClick);
        },
        children: [item.icon && /*#__PURE__*/jsx(ListItemIcon, {
          children: /*#__PURE__*/jsx(MySvgIcon, {
            children: item.icon
          })
        }), item.label && /*#__PURE__*/jsx(ListItemText, {
          children: item.label
        })]
      }, key);
    })
  });

  if (tooltip && shownContent) return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx(Tooltip$1, {
      title: tooltip,
      children: content
    }), menuContent]
  });
  return /*#__PURE__*/jsxs(Fragment, {
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

var _excluded$1 = ["case", "defaultCase"];

function Element(_ref) {
  var Component = _ref["case"],
      DefaultComponent = _ref.defaultCase,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  if ( /*#__PURE__*/isValidElement(Component)) return Component;
  if (isReactComponent(Component)) return /*#__PURE__*/jsx(Component, {});
  return /*#__PURE__*/jsx(DefaultComponent, _extends({}, props, Component));
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
  var itemProps = pick(props, ['btnSize', 'iconSize']);
  return /*#__PURE__*/jsxs(Stack, {
    sx: sx,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, leftContentProps, {
      children: leftItems.length > 0 && leftItems.map(function (item, key) {
        return /*#__PURE__*/jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    })), /*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, centerContentProps, {
      children: centerItems.length > 0 && centerItems.map(function (item, key) {
        return /*#__PURE__*/jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    })), /*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, rightContentProps, {
      children: rightItems.length > 0 && rightItems.map(function (item, key) {
        return /*#__PURE__*/jsx(Element, _extends({
          "case": item,
          defaultCase: ToolbarItem
        }, itemProps), key);
      })
    }))]
  });
}

Toolbar.propTypes = {
  leftItems: PropTypes__default.array,
  centerItems: PropTypes__default.array,
  rightItems: PropTypes__default.array
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

var useComponentStore = create(function (set) {
  return {
    components: {},
    registerComponent: function registerComponent(type, Component) {
      return set(produce(function (state) {
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
  return C ? /*#__PURE__*/jsx(C, _extends({}, props)) : null;
}

var _excluded = ["theme"];
var Root = styled$1('div')(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
      left: 0 // overflow: 'hidden',

    }),
    '& .PageSide-contentWrapper': {
      // backgroundColor: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      flex: '1 1 auto' // overflow: 'hidden',

    },
    '& .PageSide-content': {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      minHeight: 0,
      overflowY: 'auto'
    }
  };
});

function PageSide(props) {
  var _props$contentWrapper, _props$toolbar, _props$subToolbar;

  useRef(null);
  useRef(null);
  useRef(null);
  var shownToolbar = useMemo(function () {
    return some([props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems], function (v) {
      return !isEmpty(v);
    });
  }, [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  var toolbarProps = useMemo(function () {
    return _extends({}, props.toolbarProps, {
      leftItems: props.leftToolbarItems,
      centerItems: props.centerToolbarItems,
      rightItems: props.rightToolbarItems
    });
  }, [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  var shownSubToolbar = useMemo(function () {
    return some([props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems], function (v) {
      return !isEmpty(v);
    });
  }, [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  var subToolbarProps = useMemo(function () {
    return _extends({}, props.subToolbarProps, {
      leftItems: props.leftSubToolbarItems,
      centerItems: props.centerSubToolbarItems,
      rightItems: props.rightSubToolbarItems
    });
  }, [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  var headerProps = {
    title: props.headerTitle
  };
  return /*#__PURE__*/jsxs(Root, {
    className: clsx('PageSide-root', "PageSide-scroll-" + props.scroll, props.className) // ref={rootRef}
    ,
    scroll: props.scroll,
    leftsidebarwidth: props.leftSidebarWidth,
    rightsidebarwidth: props.rightSidebarWidth,
    children: [/*#__PURE__*/jsxs("div", {
      className: "PageSide-wrapper",
      children: [props.leftSidebarContent && /*#__PURE__*/jsx("div", {
        children: "leftSidebarContent"
      }), /*#__PURE__*/jsxs(Stack, _extends({}, props.contentWrapperProps, {
        className: clsx("PageSide-contentWrapper", (_props$contentWrapper = props.contentWrapperProps) == null ? void 0 : _props$contentWrapper.className),
        divider: /*#__PURE__*/jsx(Divider, {}),
        children: [props.header && (isBoolean(props.header) ? /*#__PURE__*/jsx(Component, _extends({
          type: "PageSideHeader"
        }, headerProps)) : props.header), props.subHeader && props.subHeader, (props.toolbar || shownToolbar) && ((_props$toolbar = props.toolbar) != null ? _props$toolbar : /*#__PURE__*/jsx(Toolbar, _extends({}, toolbarProps))), (props.subToolbar || shownSubToolbar) && ((_props$subToolbar = props.subToolbar) != null ? _props$subToolbar : /*#__PURE__*/jsx(Toolbar, _extends({}, subToolbarProps))), props.content && /*#__PURE__*/jsx("div", {
          className: clsx('PageSide-content container'),
          children: props.content
        }), props.footer && /*#__PURE__*/jsx("div", {
          children: "Footer"
        })]
      }))]
    }), props.rightSidebarContent && /*#__PURE__*/jsx("div", {
      children: "rightSidebarContent"
    })]
  });
}

PageSide.propTypes = {
  contentWrapperProps: PropTypes.object,
  leftSidebarContent: PropTypes.node,
  leftSidebarVariant: PropTypes.node,
  rightSidebarContent: PropTypes.node,
  rightSidebarVariant: PropTypes.node,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  subHeader: PropTypes.node,
  toolbar: PropTypes.node,
  toolbarProps: PropTypes.object,
  leftToolbarItems: PropTypes.array,
  centerToolbarItems: PropTypes.array,
  rightToolbarItems: PropTypes.array,
  subToolbar: PropTypes.node,
  subToolbarProps: PropTypes.object,
  leftSubToolbarItems: PropTypes.array,
  centerSubToolbarItems: PropTypes.array,
  rightSubToolbarItems: PropTypes.array,
  content: PropTypes.node,
  scroll: PropTypes.oneOf(['normal', 'page', 'content']),
  leftSidebarOpen: PropTypes.bool,
  rightSidebarOpen: PropTypes.bool,
  leftSidebarWidth: PropTypes.number,
  rightSidebarWidth: PropTypes.number,
  rightSidebarOnClose: PropTypes.func,
  leftSidebarOnClose: PropTypes.func
};
PageSide.defaultProps = {
  classes: {},
  scroll: 'page',
  leftSidebarOpen: false,
  rightSidebarOpen: false,
  rightSidebarWidth: 240,
  leftSidebarWidth: 240
};

var emitter = createNanoEvents();
var emitter$1 = emitter;

export { Component, ContextMenu, MySvgIcon as FuseSvgIcon, Layout, PageSide, Toolbar, ToolbarItem, Tooltip$1 as Tooltip, components, emitter$1 as emitter, components$1 as layoutComponents, registerComponent, registerLayout };
//# sourceMappingURL=index.mjs.map
