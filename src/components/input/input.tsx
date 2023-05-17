import React, { ChangeEventHandler, FC } from 'react'
import { voidFn } from 'types'

interface IInputProps {
  onChange?: voidFn<string>
  value?: string
  placeholder?: string
  className?: string
}

export const Input: FC<IInputProps> = ({ onChange, ...props }) => {
  const handelChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (onChange) onChange(e.target?.value)
  }

  return <input onChange={handelChange} {...props} />
}
