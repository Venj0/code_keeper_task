import { SearchIcon } from 'assets/icons/searchIcon'
import { Input } from 'components/input'
import { getYearsData } from 'components/searchForm/helper'
import { Select } from 'components/select'
import React, { FC, useCallback, useMemo, useState } from 'react'
import { ISearchData } from 'services/search/types'
import { voidFn } from 'types'
import './searchForm.scss'

interface ISearchFormProps {
  onSearch?: voidFn<ISearchData>
}

const initFormState: ISearchData = {
  text: '',
}

export const SearchForm: FC<ISearchFormProps> = ({ onSearch }) => {
  const [form, setForm] = useState<ISearchData>(initFormState)

  const startYearOptions = useMemo(() => getYearsData({ to: form.endYear ? +form.endYear : undefined }), [form.endYear])
  const endYearOptions = useMemo(
    () => getYearsData({ from: form.startYear ? +form.startYear : undefined }),
    [form.startYear],
  )

  const onChange = useCallback(
    (name: keyof ISearchData, value: string | number) => setForm(current => ({ ...current, [name]: value })),
    [],
  )

  const getProps = (name: keyof ISearchData) => ({
    value: form[name],
    onChange: (value: string) => onChange(name, value),
  })

  return (
    <div className="search-form">
      <div className="search-form-input">
        <Input placeholder="Search ... " {...getProps('text')} />
      </div>
      <div className="search-form-selects">
        <Select className="select" placeholder="Start year" options={startYearOptions} {...getProps('startYear')} />
        <Select className="select" placeholder="End year" options={endYearOptions} {...getProps('endYear')} />
      </div>
      <div className="search-form-button">
        <button onClick={() => onSearch?.(form)}>
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}
