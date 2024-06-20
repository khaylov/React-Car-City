import React, {useState} from 'react';
import {resetFormStyle} from "../../Utilities/resetFormStyle";
import {enterFilters} from "../../Utilities/enterFilters";
// import './CatalogModalFilters.css'

function CatalogModalFilters(props) {
  const [filters, setFilters] = useState(props.filters)

  const onWrapperClicked = (e) => {
    if (e.target.classList.contains('modal-wrapper')) props.hideFiltersModal()
  }

  const resetFiltersValue = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      owners: '',
      yearFrom: '',
      yearTo: ''
    })
  }

  return (
    <div className='modal'>
      <div className="modal-wrapper" onClick={onWrapperClicked}>
        <div className='modal-content catalog-modal-filters-content'>
          <p className='modal-title'>Фильтры</p>

          <button
            className="modal-btn-close"
            onClick={props.hideFiltersModal}
          >X
          </button>

          <div className="modal-input-block catalog-modal-filters-form-price">
            <form action="" className="catalog-modal-filters-form">
              <label htmlFor="catalog-modal-filters-price-min">Цена (руб.)</label>
              <input
                value={filters.minPrice}
                onChange={(e) => {
                  resetFormStyle(e)

                  setFilters(p => (
                    {
                      ...p,
                      minPrice: e.target.value
                    }
                  ))
                }}
                id='catalog-modal-filters-price-min'
                type="number"
                placeholder='min'
                min={0}
              />
              <input
                value={filters.maxPrice}
                onChange={(e) => {
                  resetFormStyle(e)

                  setFilters(p => (
                    {
                      ...p,
                      maxPrice: e.target.value
                    }
                  ))
                }}
                id='catalog-modal-filters-price-max'
                type="number"
                placeholder='max'
              />
            </form>
          </div>

          <div className="modal-input-block catalog-modal-filters-form-year">
            <form action="" className="catalog-modal-filters-form">
              <label htmlFor="catalog-filter-year-from">Год выпуска</label>
              <select
                value={filters.yearFrom}
                onChange={(e) => {
                  resetFormStyle(e)

                  setFilters(p => (
                    {
                      ...p,
                      yearFrom: e.target.value
                    }
                  ))
                }}
                id="catalog-filter-year-from"
                className='catalog-filter-year'
              >
                <option className='catalog-filter-year-from-option' value="none">от</option>
                <option className='catalog-filter-year-from-option' value="2024">2024</option>
                <option className='catalog-filter-year-from-option' value="2023">2023</option>
                <option className='catalog-filter-year-from-option' value="2022">2022</option>
                <option className='catalog-filter-year-from-option' value="2021">2021</option>
                <option className='catalog-filter-year-from-option' value="2020">2020</option>
                <option className='catalog-filter-year-from-option' value="2019">2019</option>
                <option className='catalog-filter-year-from-option' value="2018">2018</option>
                <option className='catalog-filter-year-from-option' value="2017">2017</option>
                <option className='catalog-filter-year-from-option' value="2016">2016</option>
                <option className='catalog-filter-year-from-option' value="2015">2015</option>
                <option className='catalog-filter-year-from-option' value="2014">2014</option>
                <option className='catalog-filter-year-from-option' value="2013">2013</option>
                <option className='catalog-filter-year-from-option' value="2012">2012</option>
                <option className='catalog-filter-year-from-option' value="2011">2011</option>
                <option className='catalog-filter-year-from-option' value="2010">2010</option>
                <option className='catalog-filter-year-from-option' value="2009">2009</option>
                <option className='catalog-filter-year-from-option' value="2008">2008</option>
                <option className='catalog-filter-year-from-option' value="2007">2007</option>
                <option className='catalog-filter-year-from-option' value="2006">2006</option>
                <option className='catalog-filter-year-from-option' value="2005">2005</option>
                <option className='catalog-filter-year-from-option' value="2004">2004</option>
                <option className='catalog-filter-year-from-option' value="2003">2003</option>
                <option className='catalog-filter-year-from-option' value="2002">2002</option>
                <option className='catalog-filter-year-from-option' value="2001">2001</option>
                <option className='catalog-filter-year-from-option' value="2000">2000</option>
                <option className='catalog-filter-year-from-option' value="1999">1999</option>
                <option className='catalog-filter-year-from-option' value="1998">1998</option>
                <option className='catalog-filter-year-from-option' value="1997">1997</option>
                <option className='catalog-filter-year-from-option' value="1996">1996</option>
                <option className='catalog-filter-year-from-option' value="1995">1995</option>
              </select>
              <select
                value={filters.yearTo}
                onChange={(e) => {
                  resetFormStyle(e)

                  setFilters(p => (
                    {
                      ...p,
                      yearTo: e.target.value
                    }
                  ))
                }}
                className='catalog-filter-year'
                id="catalog-filter-year-to"
              >
                <option value="none">до</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
              </select>
            </form>
          </div>

          <div className="modal-input-block catalog-modal-filters-form-owners">
            <form className='catalog-modal-filters-form'>
              <label htmlFor="catalog-modal-filters-owners-max">Владельцев (максимум)</label>
              <input
                value={filters.owners}
                onChange={(e) => {
                  resetFormStyle(e)

                  setFilters(p => (
                    {
                      ...p,
                      owners: e.target.value
                    }
                  ))
                }}
                id='catalog-modal-filters-owners-max'
                type="number"
                placeholder='max'
                min={0}
              />
            </form>
          </div>

          <div className="modal-btn-block">
            <button className="modal-btn modal-btn-reset" onClick={resetFiltersValue}>Сбросить</button>

            <button
              className='modal-btn modal-btn-enter'
              onClick={() => {
                const filtersValid = enterFilters()

                if (filtersValid) {
                  props.hideFiltersModal()
                  props.changeFilters({
                    minPrice: filtersValid.minPrice.value,
                    maxPrice: filtersValid.maxPrice.value,
                    owners: filtersValid.owners.value,
                    yearFrom: filtersValid.yearFrom.value,
                    yearTo: filtersValid.yearTo.value,
                    sortOption: ''
                  })
                }
              }}
            >Применить</button>

            <button
              className='modal-btn modal-btn-cancel'
              onClick={props.hideFiltersModal}
            >Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogModalFilters;