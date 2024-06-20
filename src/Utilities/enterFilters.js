import {validationFilters} from "./validationFilters";

export const enterFilters = () => {
  let filtersObjects = {}

  filtersObjects.minPrice = document.getElementById('catalog-modal-filters-price-min')
  filtersObjects.maxPrice = document.getElementById('catalog-modal-filters-price-max')
  filtersObjects.owners = document.getElementById('catalog-modal-filters-owners-max')
  filtersObjects.yearFrom = document.getElementById('catalog-filter-year-from')
  filtersObjects.yearTo = document.getElementById('catalog-filter-year-to')

  const isValid = validationFilters(filtersObjects)

  if (isValid) {
    return filtersObjects
  }

  return false
}