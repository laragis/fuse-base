import { useMemo, useRef } from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'
import { isBoolean, isEmpty, some } from 'lodash'
import Toolbar from '../Toolbar/Toolbar'
import { styled, Divider, Stack, LinearProgress } from '@mui/material'
import Component from '../Component/Component'


const Root = styled('div')(({ theme, ...props }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: '100%',
  position: 'relative',
  flex: '1 1 auto',
  width: '100%',
  height: 'auto',
  backgroundColor: theme.palette.background.paper,

  '& .PageSide-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    minWidth: 0,
    height: '100%',
    backgroundColor: theme.palette.background.default,

    ...(props.scroll === 'content' && {
      // backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      // overflow: 'hidden',
    }),
  },

  '& .PageSide-contentWrapper': {
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    flex: '1 1 auto',
    // overflow: 'hidden',
  },

  '& .PageSide-content': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    minHeight: 0,
    overflowY: 'auto',
  },

}))

function PageSide(props) {
  const leftSidebarRef = useRef(null)
  const rightSidebarRef = useRef(null)
  const rootRef = useRef(null)

  const shownToolbar = useMemo(() => some([
    props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems
  ], v => !isEmpty(v)), [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems])

  const toolbarProps = useMemo(() => ({
    ...props.toolbarProps,
    leftItems: props.leftToolbarItems,
    centerItems: props.centerToolbarItems,
    rightItems: props.rightToolbarItems,
  }), [props.leftToolbarItems, props.centerToolbarItems, props.rightToolbarItems])


  const shownSubToolbar = useMemo(() => some([
    props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems
  ], v => !isEmpty(v)), [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems])

  const subToolbarProps = useMemo(() => ({
    ...props.subToolbarProps,
    leftItems: props.leftSubToolbarItems,
    centerItems: props.centerSubToolbarItems,
    rightItems: props.rightSubToolbarItems,
  }), [props.leftSubToolbarItems, props.centerSubToolbarItems, props.rightSubToolbarItems])

  const headerProps = {
    title: props.headerTitle
  }

  return (
    <Root
      className={clsx(
        'PageSide-root',
        `PageSide-scroll-${props.scroll}`,
        props.className
      )}
      // ref={rootRef}
      scroll={props.scroll}
      leftsidebarwidth={props.leftSidebarWidth}
      rightsidebarwidth={props.rightSidebarWidth}
    >
      <div className="PageSide-wrapper">
        {props.leftSidebarContent && (
          <div>leftSidebarContent</div>
        )}

        <Stack
          {...props.contentWrapperProps}
          className={clsx("PageSide-contentWrapper", props.contentWrapperProps?.className)}
          divider={<Divider/>}
        >
          {props.header && (isBoolean(props.header) ? <Component type="PageSideHeader" {...headerProps}/> : props.header)}
          {props.subHeader && props.subHeader}

          {(props.toolbar || shownToolbar) && (
            props.toolbar ?? <Toolbar {...toolbarProps}/>
          )}

          {(props.subToolbar || shownSubToolbar) && (
            props.subToolbar ?? <Toolbar {...subToolbarProps}/>
          )}
          {props.content && (
            <div className={clsx('PageSide-content container')}>
              {props.loading && <LinearProgress />}
              {props.content}
            </div>
          )}
          {props.footer && <div>Footer</div>}
        </Stack>
      </div>

      {props.rightSidebarContent && (
        <div>rightSidebarContent</div>
      )}
    </Root>
  )
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
  leftSidebarOnClose: PropTypes.func,
}

PageSide.defaultProps = {
  classes: {},
  scroll: 'page',
  leftSidebarOpen: false,
  rightSidebarOpen: false,
  rightSidebarWidth: 240,
  leftSidebarWidth: 240
}

function register(){

}

export default PageSide