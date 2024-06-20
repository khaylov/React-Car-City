import React, {useEffect, useState} from 'react';
import SliderItem from "../Slider/SliderItem";
import {filtrationCars} from "../../Utilities/filtrationCars";
import {sortCars} from "../../Utilities/sortCars";
// import './CatalogListSection.css'

function CatalogListSection(props) {
  const [filteredCars, setFilteredCars] = useState(filtrationCars(props.filters))
  const [sortedCars, setSortedCars] = useState(sortCars(filteredCars, props.sortOption, props.filters))

  const catalogList = sortedCars.map(i => (
    <div className='catalog-list-item' key={i.id}>
      <SliderItem car={i} key={i.id}/>
    </div>
  ))

  useEffect(() => setFilteredCars(filtrationCars(props.filters)),
    [props.filters])
  useEffect(() => setSortedCars(sortCars(filteredCars, props.sortOption, props.filters)),
    [filteredCars, props.sortOption]);


  return (
    <section className='catalog-product-list'>
      {catalogList}
    </section>
  );
}

export default CatalogListSection;