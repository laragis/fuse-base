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

const _excluded$7 = ["title", "children"];

function Tooltip(_ref) {
  let {
    title,
    children
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$7);

  if (!title) return children;

  const config = _extends({
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

const _excluded$6 = ["theme"],
      _excluded2$2 = ["children", "className", "size"];
const Root$1 = styled(Box)(_ref => {
  let {
    theme
  } = _ref,
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
const FuseSvgIcon = /*#__PURE__*/forwardRef((props, ref) => {
  if (!props.children.includes(':')) {
    return /*#__PURE__*/jsx(Icon, _extends({
      ref: ref
    }, props));
  }

  const iconPath = props.children.replace(':', '.svg#');
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
      xlinkHref: `assets/icons/${iconPath}`
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
  let {
    children,
    className,
    size
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);

  let customProps = {
    children
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

  if (className && some(['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone'], prefix => includes(className, prefix))) {
    customProps.baseClassName = '';
  }

  return /*#__PURE__*/jsx(FuseSvgIcon, _extends({
    className: className
  }, customProps, {
    size: size
  }, props));
}

const components$1 = {};
function registerLayout(name, Component) {
  components$1[name] = Component;
}
function Layout(props) {
  const C = components$1[props.name];
  return C ? /*#__PURE__*/jsx(C, _extends({}, props)) : /*#__PURE__*/jsx(Box$1, {
    p: 2,
    children: "Not Found"
  });
}

const _excluded$5 = ["leftIcon", "rightIcon", "label", "MenuItemProps", "className"];
const StyledMenuItem = styled(MenuItem$2)({});
const MenuItem = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    leftIcon,
    rightIcon,
    label,
    className
  } = _ref,
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

const _excluded$4 = ["parentMenuOpen", "label", "rightIcon", "leftIcon", "children", "className", "tabIndex", "ContainerProps"],
      _excluded2$1 = ["ref"];
const SubMenuItem = /*#__PURE__*/React.forwardRef(function SubMenu(props, ref) {
  const {
    parentMenuOpen,
    label,
    rightIcon = /*#__PURE__*/jsx(ChevronRight, {
      color: "disabled",
      fontSize: "small"
    }),
    leftIcon = null,
    children,
    className,
    tabIndex: tabIndexProp,
    ContainerProps: ContainerPropsProp = {}
  } = props,
        MenuItemProps = _objectWithoutPropertiesLoose(props, _excluded$4);

  const {
    ref: containerRefProp
  } = ContainerPropsProp,
        ContainerProps = _objectWithoutPropertiesLoose(ContainerPropsProp, _excluded2$1);

  const menuItemRef = useRef(null);
  useImperativeHandle(ref, () => menuItemRef.current);
  const containerRef = useRef(null);
  useImperativeHandle(containerRefProp, () => containerRef.current);
  const menuContainerRef = useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = e => {
    setIsSubMenuOpen(true);

    if (ContainerProps.onMouseEnter) {
      ContainerProps.onMouseEnter(e);
    }
  };

  const handleMouseLeave = e => {
    setIsSubMenuOpen(false);

    if (ContainerProps.onMouseLeave) {
      ContainerProps.onMouseLeave(e);
    }
  }; // Check if any immediate children are active


  const isSubmenuFocused = () => {
    const active = containerRef.current.ownerDocument.activeElement;

    for (const child of menuContainerRef.current.children) {
      if (child === active) {
        return true;
      }
    }

    return false;
  };

  const handleFocus = e => {
    if (e.target === containerRef.current) {
      setIsSubMenuOpen(true);
    }

    if (ContainerProps.onFocus) {
      ContainerProps.onFocus(e);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      return;
    }

    if (isSubmenuFocused()) {
      e.stopPropagation();
    }

    const active = containerRef.current.ownerDocument.activeElement;

    if (e.key === 'ArrowLeft' && isSubmenuFocused()) {
      containerRef.current.focus();
    }

    if (e.key === 'ArrowRight' && e.target === containerRef.current && e.target === active) {
      const firstChild = menuContainerRef.current.children[0];
      firstChild.focus();
    }
  };

  const open = isSubMenuOpen && parentMenuOpen; // Root element must have a `tabIndex` attribute for keyboard navigation

  let tabIndex;

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
      onClose: () => {
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

const _excluded$3 = ["divider"],
      _excluded2 = ["items", "callback"];

function MenuItems({
  items,
  onClose: handleClose,
  open
}) {
  return items.map((_ref, key) => {
    let {
      divider
    } = _ref,
        item = _objectWithoutPropertiesLoose(_ref, _excluded$3);

    if (divider) return /*#__PURE__*/jsx(Divider, {
      sx: {
        my: 0.5
      }
    }, key);

    const {
      items: childItems,
      callback
    } = item,
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
      onClick: () => {
        handleClose();
        callback && callback();
      }
    }), key);
  });
}

MenuItems.propTypes = {
  items: PropTypes__default.array
};

function ContextMenu({
  position,
  items,
  children,
  onClose
}) {
  const wrapperRef = useRef(null);
  const [contextMenu, setContextMenu] = useState(null);
  const open = useMemo(() => contextMenu !== null, [contextMenu]);
  const anchorPosition = useMemo(() => open ? {
    top: contextMenu.mouseY,
    left: contextMenu.mouseX
  } : undefined, [open, contextMenu]);
  const handleClose = useCallback(() => {
    onClose();
    open && setContextMenu(null);
  }, [open]);

  const handleContextMenu = e => {
    e.preventDefault();
    setContextMenu(contextMenu === null ? {
      mouseX: e.clientX + 2,
      mouseY: e.clientY - 6
    } : null);
  };

  useEffect(() => {
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

const _excluded$2 = ["icon", "label", "visible", "onClick", "btnSize", "iconSize", "items", "color"];

function ToolbarItem(props) {
  const {
    icon,
    label,
    visible = true,
    onClick,
    btnSize,
    iconSize,
    items = [],
    color
  } = props;
        _objectWithoutPropertiesLoose(props, _excluded$2);

  const tooltip = isBoolean(props.tooltip) ? label : props.tooltip;
  const shownContent = useMemo(() => visible && icon, [visible, icon]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => isEmpty(items) ? onClick && onClick(e) : setAnchorEl(e.currentTarget);

  const handleClose = (e, callback) => {
    setAnchorEl(null);
    callback && callback();
  };

  const content = shownContent && /*#__PURE__*/jsx(IconButton, {
    size: btnSize,
    onClick: handleClick,
    color: color,
    children: icon && /*#__PURE__*/jsx(MySvgIcon, {
      size: iconSize,
      children: icon
    })
  });

  const menuContent = shownContent && !isEmpty(items) && /*#__PURE__*/jsx(Menu$1, {
    open: open,
    anchorEl: anchorEl,
    onClose: e => handleClose(),
    transformOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'bottom'
    },
    children: items.map((item, key) => /*#__PURE__*/jsxs(MenuItem$2, {
      onClick: e => handleClose(e, item.onClick),
      children: [item.icon && /*#__PURE__*/jsx(ListItemIcon, {
        children: /*#__PURE__*/jsx(MySvgIcon, {
          children: item.icon
        })
      }), item.label && /*#__PURE__*/jsx(ListItemText, {
        children: item.label
      })]
    }, key))
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

  const keysA = Object.keys(objA);

  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
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

const _excluded$1 = ["case", "defaultCase"];

function Element(_ref) {
  let {
    case: Component,
    defaultCase: DefaultComponent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  if ( /*#__PURE__*/isValidElement(Component)) return Component;
  if (isReactComponent(Component)) return /*#__PURE__*/jsx(Component, {});
  return /*#__PURE__*/jsx(DefaultComponent, _extends({}, props, Component));
}

function Toolbar(props) {
  const {
    sx,
    contentProps,
    leftItems,
    leftContentProps,
    centerItems,
    centerContentProps,
    rightItems,
    rightContentProps
  } = props;
  const itemProps = pick(props, ['btnSize', 'iconSize']);
  return /*#__PURE__*/jsxs(Stack, {
    sx: sx,
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, leftContentProps, {
      children: leftItems.length > 0 && leftItems.map((item, key) => /*#__PURE__*/jsx(Element, _extends({
        case: item,
        defaultCase: ToolbarItem
      }, itemProps), key))
    })), /*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, centerContentProps, {
      children: centerItems.length > 0 && centerItems.map((item, key) => /*#__PURE__*/jsx(Element, _extends({
        case: item,
        defaultCase: ToolbarItem
      }, itemProps), key))
    })), /*#__PURE__*/jsx(Stack, _extends({
      direction: "row"
    }, contentProps, rightContentProps, {
      children: rightItems.length > 0 && rightItems.map((item, key) => /*#__PURE__*/jsx(Element, _extends({
        case: item,
        defaultCase: ToolbarItem
      }, itemProps), key))
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

const useComponentStore = create(set => ({
  components: {},
  registerComponent: (type, Component) => set(produce(state => {
    state.components[type] = Component;
  }))
}));
const components = useComponentStore.getState().components;
function registerComponent(name, Component) {
  useComponentStore.getState().registerComponent(name, Component);
}
function Component(props) {
  const C = useComponentStore(state => state.components[props.type], shallow);
  return C ? /*#__PURE__*/jsx(C, _extends({}, props)) : null;
}

const _excluded = ["theme"];
const Root = styled$1('div')(_ref => {
  let {
    theme
  } = _ref,
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
  const shownToolbar = useMemo(() => some([props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems], v => !isEmpty(v)), [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  const toolbarProps = useMemo(() => _extends({}, props.toolbarProps, {
    leftItems: props.leftToolbarItems,
    centerItems: props.centerToolbarItems,
    rightItems: props.rightToolbarItems
  }), [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems]);
  const shownSubToolbar = useMemo(() => some([props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems], v => !isEmpty(v)), [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  const subToolbarProps = useMemo(() => _extends({}, props.subToolbarProps, {
    leftItems: props.leftSubToolbarItems,
    centerItems: props.centerSubToolbarItems,
    rightItems: props.rightSubToolbarItems
  }), [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems]);
  const headerProps = {
    title: props.headerTitle
  };
  return /*#__PURE__*/jsxs(Root, {
    className: clsx('PageSide-root', `PageSide-scroll-${props.scroll}`, props.className) // ref={rootRef}
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

const emitter = createNanoEvents();
var emitter$1 = emitter;

export { Component, ContextMenu, MySvgIcon as FuseSvgIcon, Layout, PageSide, Toolbar, ToolbarItem, Tooltip$1 as Tooltip, components, emitter$1 as emitter, components$1 as layoutComponents, registerComponent, registerLayout };
//# sourceMappingURL=index.js.map
