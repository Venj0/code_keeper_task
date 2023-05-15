import { LoadingIcon } from 'assets/icons/loadingIcon'
import React, { CSSProperties, FC, ReactNode } from 'react'
import './loadingWrapper.scss'

interface iProps {
  isLoading: boolean
  isFixed?: boolean
  color?: string
  className?: string
  size?: number
  style?: CSSProperties
  children?: ReactNode
  loadingStatus?: string
}

export const LoadingWrapper: FC<iProps> = ({
  className,
  isFixed,
  style,
  isLoading,
  loadingStatus,
  children,
  ...props
}) => (
  <div className={`loading ${className || ''}${isFixed ? ' fixed' : ''}`} style={style}>
    {isLoading && (
      <div className={'loading-wrapper'} style={style}>
        <LoadingIcon className={'loading-icon'} {...props} />
        {loadingStatus && <span>{loadingStatus}</span>}
      </div>
    )}
    {children}
  </div>
)
