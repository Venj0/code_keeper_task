import React, { FC } from 'react'
import ReactSelect, { SingleValue } from 'react-select'
import { voidFn } from 'types'

type iSelectOptions = {
  value: string
  label: string
}

interface ISelectProps {
  options: iSelectOptions[]
  onChange?: voidFn<string>
  value?: string
  placeholder?: string
  className?: string
}

export const Select: FC<ISelectProps> = ({ options, onChange, value, ...props }) => {
  const handelChange = (newValue: SingleValue<iSelectOptions>) => {
    if (onChange && newValue) onChange(newValue.value)
  }

  return (
    <ReactSelect
      {...props}
      options={options}
      onChange={handelChange}
      value={options.find(option => option.value === value)}
    />
  )
}
