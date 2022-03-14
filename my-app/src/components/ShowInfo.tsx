
import React from 'react'
import { ProducType } from '../types/product'
type ShowInfoProps = {
    info: ProducType
}

const ShowInfo = (props: ShowInfoProps) => {
  return (
    <div>
        { props.info.name}
    </div>
  )
}

export default ShowInfo