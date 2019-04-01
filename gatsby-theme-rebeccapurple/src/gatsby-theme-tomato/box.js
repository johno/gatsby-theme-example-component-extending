import React from 'react'
import TomatoBox from 'gatsby-theme-tomato/src/box'

export default props => (
  <TomatoBox>
    <div
      style={{
        padding: '20px',
        backgroundColor: 'rebeccapurple'
      }}
      {...props}
    />
  </TomatoBox>
)
