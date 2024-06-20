import React from 'react';
// import './FilterSection.css'

function FilterSection(props) {
  const filterIcon = (
    <svg className='catalog-filter-icon' fill='#6F4D1B' viewBox="0 0 24 24" version="1.1">
      <title>Фильтры</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Filter">
          <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24">
          </rect>
          <line x1="4" y1="5" x2="16" y2="5" id="Path" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round">
          </line>
          <line x1="4" y1="12" x2="10" y2="12" id="Path" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round">
          </line>
          <line x1="14" y1="12" x2="20" y2="12" id="Path" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round">
          </line>
          <line x1="8" y1="19" x2="20" y2="19" id="Path" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round">
          </line>
          <circle id="Oval" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" cx="18" cy="5" r="2">
          </circle>
          <circle id="Oval" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="2">
          </circle>
          <circle id="Oval" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" cx="6" cy="19" r="2">
          </circle>
        </g>
      </g>
    </svg>
  )

  return (
    <section className='catalog-filter-section'>
      <div
        className="catalog-filter-item"
        onClick={props.showFiltersModal}
      >
        <span></span>
        {filterIcon}
      </div>

      <select
        onChange={props.sendSortOption}
        className='catalog-filter-sort'
      >
        <option id={'catalog-sort-cheaper'}>По умолчанию</option>
        <option id={'catalog-sort-cheaper'}>Cначала дешевле</option>
        <option id={'catalog-sort-expensive'}>Сначала дороже</option>
        <option id={'catalog-sort-less-mileage'}>Меньше пробег</option>
        <option id={'catalog-sort-better-state'}>Лучше состояние</option>
      </select>
    </section>
  );
}

export default FilterSection;