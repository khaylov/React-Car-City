export const resetFormStyle = (e) => {
  const substr = 'no-valid'

  if (e.target.id.includes('catalog-modal-filters-price-m')) {
    const elem1 = document.getElementById('catalog-modal-filters-price-min')
    const elem2 = document.getElementById('catalog-modal-filters-price-max')

    elem1.className = elem1.className.replace(substr, 'default')
    elem2.className = elem2.className.replace(substr, 'default')
  }
  if (e.target.id.includes('catalog-filter-year-')) {
    const elem1 = document.getElementById('catalog-filter-year-from')
    const elem2 = document.getElementById('catalog-filter-year-to')

    elem1.className = elem1.className.replace(substr, 'default')
    elem2.className = elem2.className.replace(substr, 'default')
  }
  if (e.target.id.includes('catalog-modal-filters-owners-max')) {
    const elem = document.getElementById('catalog-modal-filters-owners-max')

    elem.className = elem.className.replace(substr, 'default')
  }
}