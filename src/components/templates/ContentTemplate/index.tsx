import React, { ReactElement } from 'react'

type ContentProps = {
  name: string
}

export default function ContentTemplate({ name }: ContentProps): ReactElement {
  // eslint-disable-next-line no-console
  console.log(name)
  return (
    <>
      <div>{name}</div>
    </>
  )
}
