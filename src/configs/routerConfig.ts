import { Search } from '../pages/search'
import { Details } from '../pages/details'

export const RouterConfig = [
  {
    key: 'search',
    path: '/',
    Component: Search,
  },
  {
    key: 'details',
    path: '/details/',
    Component: Details,
  },
  {
    key: 'itemDetails',
    path: '/details/:itemId',
    Component: Details,
  },
]
