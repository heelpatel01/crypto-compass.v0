import React from 'react'
import VerticalTabs from '../components/VerticalTabs'

function Exchange() {

  const tabLabels = ["Item One", "Item Two", "Item Three", "Item Four", "Item Five", "Item Six", "Item Seven"];
  const tabContents = [
    <div>Content for Item One</div>,
    <div>Content for Item Two</div>,
    <div>Content for Item Three</div>,
    <div>Content for Item Four</div>,
    <div>Content for Item Five</div>,
    <div>Content for Item Six</div>,
    <div>Content for Item Seven</div>,
  ];


  return (
    <div>
        <VerticalTabs/>
    </div>
  )
}

export default Exchange