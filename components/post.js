import React from 'react'

export default props => {
  return (
    <div className="post_container">
      <div className='post_title'>{props.title}</div>
      <div className='post_body'>{props.body}</div>
    </div>
  )
}
