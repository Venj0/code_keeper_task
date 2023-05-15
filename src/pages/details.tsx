import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

type TParams = {
  itemId: string
}
export const Details: FC = () => {
  const { itemId } = useParams<TParams>()
  return (
    <div>
      <h1>Details {itemId ? `of ${itemId}` : itemId}</h1>
    </div>
  )
}
