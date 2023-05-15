import { LoadingWrapper } from 'components/loadingWrapper'
import { SearchForm } from 'components/searchForm'
import { Typography } from 'components/typography'
import { useQuery } from 'hooks/useQuery'
import React, { FC } from 'react'
import { getSearchResult, ISearchData } from 'services/search'
import './search.scss'

export const Search: FC = () => {
  const [getSearchResultFetch, getSearchResultStatus] = useQuery<any, ISearchData>(getSearchResult)
  const onSearch = async (data: ISearchData) => {
    console.log(data)
    await getSearchResultFetch(data)
  }
  return (
    <LoadingWrapper className="search-page" isLoading={getSearchResultStatus.isLoading}>
      <Typography type="h1" text="NASA Media Library." />
      <SearchForm onSearch={onSearch} />
    </LoadingWrapper>
  )
}
