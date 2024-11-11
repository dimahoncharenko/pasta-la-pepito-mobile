export const formatMass = (grams: number) => {
  if (grams < 1000) {
    return `${grams} г`
  } else {
    return `${grams / 1000} кг`
  }
}
