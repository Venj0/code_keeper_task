import { Axios } from 'services/_axios'
import { ISearchData } from 'services/search/types'

const axios = Axios('search')
export const getSearchResult = async ({ text, ...other }: ISearchData) => {
  const url = new URLSearchParams({
    q: text,
    ...other,
  }).toString()
  const res = await axios.get(url)
  console.log({ res })
}
