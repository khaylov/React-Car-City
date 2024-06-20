import {cars} from '../Cars'
import {carsDouble} from "../CarsDouble";


export const filtrationCars = (p) => {
  let filteredCars = cars

  if (p.sortOption.includes('умолчан')) filteredCars = carsDouble

  if (p.minPrice !== '') {
    filteredCars = filteredCars.filter(i => {
      return Number(i.price) >= Number(p.minPrice)
    })
  }

  if (p.maxPrice !== '') {
    filteredCars = filteredCars.filter(i => {
      return Number(i.price) <= Number(p.maxPrice)
    })
  }

  if (p.yearFrom !== '' && p.yearFrom !== 'none') {
    filteredCars = filteredCars.filter(i => {
      return i.year >= Number(p.yearFrom)
    })
  }

  if (p.yearTo !== '' && p.yearTo !== 'none') {
    filteredCars = filteredCars.filter(i => {
      return i.year <= Number(p.yearTo)
    })
  }

  if (p.owners !== '') {
    filteredCars = filteredCars.filter(i => {
      return Number(i.owners) <= p.owners
    })
  }

  return filteredCars
}