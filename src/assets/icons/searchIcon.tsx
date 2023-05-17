import { FC } from 'react'
import { Base } from './base'
import { iIconProps } from './types'

export const SearchIcon: FC<iIconProps> = props => {
  return (
    <Base {...{ size: 20, viewBox: '0 0 20 20', fill: 'none', ...props }}>
      <g clipPath="url(#clip0_522_1818)">
        <path
          d="M8.84236 15.684C10.3605 15.6837 11.8349 15.1755 13.0307 14.2403L16.7906 18L18 16.7907L14.2401 13.031C15.1758 11.8351 15.6844 10.3604 15.6847 8.84199C15.6847 5.06949 12.6151 2 8.84236 2C5.06965 2 2 5.06949 2 8.84199C2 12.6145 5.06965 15.684 8.84236 15.684ZM8.84236 3.7105C11.6725 3.7105 13.9741 6.01197 13.9741 8.84199C13.9741 11.672 11.6725 13.9735 8.84236 13.9735C6.01219 13.9735 3.71059 11.672 3.71059 8.84199C3.71059 6.01197 6.01219 3.7105 8.84236 3.7105Z"
          fill="#282828"
        />
      </g>
      <defs>
        <clipPath id="clip0_522_1818">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Base>
  )
}
