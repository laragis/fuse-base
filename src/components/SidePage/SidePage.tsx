import { memo } from 'react'

function SidePage(){
  return (
    <div>
      <div>Header</div>
      <div>Subheader</div>
      <div>Toolbar</div>
      <div>Subtoolbar</div>
      <div>Content</div>
      <div>Footer</div>
    </div>
  )
}

export default memo(SidePage)
