export const buildQueryParams = params =>
  Object.entries(params)
    .reduce((acc, val) => acc += `${val[0]}=${encodeURIComponent(val[1])}&`, '')
    .slice(0, -1);