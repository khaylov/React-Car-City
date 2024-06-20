export const validationFilters = (p) => {
  let hasError = false

  if (Number(p.minPrice.value) > 0 && Number(p.maxPrice.value) > 0) {
    if (Number(p.minPrice.value) > Number(p.maxPrice.value)) {
      hasError = true

      if (!p.minPrice.className.includes('no-valid')) p.minPrice.className = 'no-valid'

      if (!p.maxPrice.className.includes('no-valid')) p.maxPrice.className = 'no-valid'
    }
  }

  if (Number(p.yearFrom.value) > Number(p.yearTo.value)) {
    hasError = true

    if (!p.yearFrom.className.includes('no-valid')) p.yearFrom.className = 'no-valid'

    if (!p.yearTo.className.includes('no-valid')) p.yearTo.className = 'no-valid'
  }

  if (Number(p.owners.value) < 0) {
    hasError = true

    if (!p.owners.className.includes('no-valid')) p.owners.className = 'no-valid'
  }

  return !hasError
}