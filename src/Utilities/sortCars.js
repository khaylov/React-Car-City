import {filtrationCars} from "./filtrationCars";

export const sortCars = (p, option, filters) => {

  if (option.includes('дешевле')) {
    p = p.sort((a, b) => Number(a.price) - Number(b.price))
  }

  if (option.includes('дороже')) {
    p = p.sort((a, b) => Number(b.price) - Number(a.price))
  }

  if (option.includes('пробег')) {
    p = p.sort((a, b) => Number(a.mileage) - Number(b.mileage))
  }

  if (option.includes('состояние')) {
    p = p.sort((a, b) => Number(b.state) - Number(a.state))
  }

  if (option.includes('умолчан')) {
    filters = {
      ...filters,
      sortOption: option
    }
    p = filtrationCars(filters)
  }

  return p
}