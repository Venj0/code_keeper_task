import { ReactNode } from 'react'
import { voidFn } from 'types'

export interface iIconProps {
  viewBox?: string
  color?: string
  width?: number
  height?: number
  size?: number
  className?: string
  onClick?: voidFn<Event>
  onUnHover?: voidFn
  onHover?: voidFn
  children?: ReactNode
}
