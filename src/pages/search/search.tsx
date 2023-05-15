import { ISearchData, SearchForm } from 'components/searchForm'
import { Typography } from 'components/typography'
import React, { FC } from 'react'
import './search.scss'

export const Search: FC = () => {
  const onSearch = (data: ISearchData) => {
    console.log(data)
  }
  return (
    <div className="search-page">
      <Typography type="h1" text="NASA Media Library." />
      <SearchForm onSearch={onSearch} />
    </div>
  )
}
