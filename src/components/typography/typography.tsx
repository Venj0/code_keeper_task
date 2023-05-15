import classNames from 'classnames'
import React, { FC, MouseEvent, ReactNode } from 'react'

type tType = 'h1' | 'h2' | 'h3' | 'body' | 'button' | 'macro'

export type tTextAlign = 'left' | 'right' | 'center' | 'justify'

export interface iTypographyProps {
  text?: string
  type?: tType
  className?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  align?: tTextAlign
  isFullWidth?: boolean
  children?: ReactNode
}

export const Typography: FC<iTypographyProps> = ({
  children,
  text,
  type = 'body',
  className,
  align = 'left',
  isFullWidth,
  ...props
}) => {
  const Tag = ['body', 'button', 'macro'].includes(type) ? 'span' : type

  const typographyClass = classNames(
    {
      ['typography']: true,
      ['typography-fullWidth']: isFullWidth,
      [`typography-${type}`]: true,
      [`align-${align}`]: !!align,
    },
    className,
  )

  return (
    <>
      {/*// @ts-ignore*/}
      <Tag className={typographyClass} {...props}>
        {text || children}
      </Tag>
    </>
  )
}
