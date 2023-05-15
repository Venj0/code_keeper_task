const thisYear = new Date(Date.now()).getFullYear()
export const getYearsData = (options?: { from?: number; to?: number }) =>
  Array.from(Array(100).keys())
    .map(i => ({
      value: (thisYear - i).toString(),
      label: (thisYear - i).toString(),
    }))
    .filter(option => (options?.from ? +option.value > options.from : options?.to ? +option.value < options.to : true))
