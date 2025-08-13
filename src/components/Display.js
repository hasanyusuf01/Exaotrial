import React from 'react'

export default function Display(props) {
  return (
    <>
      <h4 className="text-primary"></h4>
      <img
        src={props.imageUrl}
        alt="Uploaded"
        className="img-thumbnail img-responsive center-block"
      />
    </>
  )
}
