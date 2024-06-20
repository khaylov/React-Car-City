import React, {useEffect, useState} from 'react';
import FilterSection from "./FilterSection";
import CatalogListSection from "./CatalogListSection";
import CatalogModalFilters from "./CatalogModalFilters";
import '../../Modal.css'
import './CatalogStyles.css'

let noneFilters = {
  minPrice: '',
  maxPrice: '',
  owners: '',
  yearFrom: '',
  yearTo: '',
  sortOption: ''
}

function CatalogPage(props) {
  const [filters, setFilters] = useState(noneFilters)
  const [modalFiltersVisible, setModalFiltersVisible] = useState(false)
  const [sortOption, setSortOption] = useState('default')

  const changeSortOption = (e) => {
    setSortOption(e.target.value)
  }

  const changeFilters = (p) => {
    setFilters(p)
  }

  const showFiltersModal = () => {
    setModalFiltersVisible(true)
  }

  const hideFiltersModal = () => {
    setModalFiltersVisible(false)
  }

  const toNoScroll = () => {
    const elBody = document.body
    if (modalFiltersVisible) {
      elBody.className = 'no-scroll'
    }
    else {
      elBody.className = ''
    }
  }

  useEffect(toNoScroll, [modalFiltersVisible])

  return (
    <>
      <FilterSection
        sendSortOption={changeSortOption}
        showFiltersModal = {showFiltersModal}
      />

      {modalFiltersVisible && <CatalogModalFilters
        hideFiltersModal = {hideFiltersModal}
        filters={filters}
        changeFilters={changeFilters}
      />}

      <CatalogListSection
        sortOption={sortOption}
        filters={filters}
      />
    </>
  );
}

export default CatalogPage;